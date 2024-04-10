var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import KindModel from "../models/kindModel.js";
import CategoryModel from "../models/categoryModel.js";
import { KindView } from "../views/kindView.js";
export class KindController {
    constructor() {
        this.data = [];
        this.dataCate = [];
        this.url = "http://localhost:3000/loai";
        this.view = new KindView();
    }
    laytoken() {
        let token = sessionStorage.getItem("token");
        if (token != null)
            return token;
        alert("Bạn phải đăng nhập!");
        window.location.href = "./login.html";
        return null;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url);
            let kind = yield res.json();
            this.data = kind.map((loai) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai));
        });
    }
    //!Get Kind Category
    getKindCate(id_danh_muc) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(`http://localhost:3000/loai_danhmuc/${id_danh_muc}`);
            let kind = yield res.json();
            this.data = kind.map((loai) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai));
            this.view.showKindCate(this.data, "#list_brand");
        });
    }
    //!Get Admin Kind
    getKindAD() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.laytoken();
            if (!token) {
                return;
            }
            let opt = {
                headers: {
                    Authorization: token,
                },
            };
            let res = yield fetch(`http://localhost:3000/admin/dm`, opt);
            let dm = yield res.json();
            this.dataCate = dm.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            let res_loai = yield fetch(`http://localhost:3000/admin/loaisp`, opt);
            let loai = yield res_loai.json();
            this.data = loai.map((loai) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai));
            this.view.showKindAD(this.data, this.dataCate, "#ds_loai");
        });
    }
    //!Add kind
    addKindAD() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.laytoken();
            if (!token) {
                return;
            }
            let opt = {
                headers: {
                    Authorization: token,
                },
            };
            let res_dm = yield fetch(`http://localhost:3000/admin/dm`, opt);
            let dataDM = yield res_dm.json();
            this.dataCate = dataDM.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            this.view.addKindAD(`http://localhost:3000/admin/loaisp`, this.dataCate, "#add_loai");
        });
    }
    //!Update kind
    updateKindAD(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.laytoken();
            if (!token) {
                return;
            }
            let opt = {
                headers: {
                    Authorization: token,
                },
            };
            let res = yield fetch(`http://localhost:3000/admin/loaisp/${id}`, opt);
            let data = yield res.json();
            let db_loai = new KindModel(data[0].id, data[0].id_danh_muc, data[0].ten_loai);
            let res_dm = yield fetch(`http://localhost:3000/admin/dm`, opt);
            let dataDM = yield res_dm.json();
            this.dataCate = dataDM.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            this.view.updateKindAD(`http://localhost:3000/admin/loaisp/${id}`, db_loai, this.dataCate, "#add_loai");
        });
    }
    //!Delete kind
    deleteKindAD(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!confirm("Bạn có muốn xóa ?")) {
                return;
            }
            let res = yield fetch(`http://localhost:3000/admin/loaisp/${id}`);
            let data = yield res.json();
            let loai = new KindModel(data.id, data.id_danh_muc, data.ten_loai);
            loai.deleteKind(`http://localhost:3000/admin/loaisp/${id}`);
        });
    }
}
