var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CategoryModel from "../models/categoryModel.js";
import { CategoryView } from "../views/categoryView.js";
export class CategoryController {
    constructor() {
        this.data = [];
        this.url = `http://localhost:3000/danhmuc`;
        this.view = new CategoryView();
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
            let cate = yield res.json();
            this.data = cate.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
        });
    }
    fetchDataBayId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url + "/" + id);
            let cate = yield res.json();
            this.data = cate.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
        });
    }
    getCate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchData();
            this.view.showCate(this.data, ".main-menu");
        });
    }
    getNameCate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataBayId(id);
            this.view.showName(this.data, ".title");
        });
    }
    //!Get Admin Category
    getCateAD() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.laytoken();
            if (!token) {
                // Token is null or undefined, handle the error appropriately
                return;
            }
            let opt = {
                headers: {
                    Authorization: token,
                },
            };
            let res = yield fetch(`http://localhost:3000/admin/dm`, opt);
            let data = yield res.json();
            this.data = data.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            this.view.showCateAD(this.data, "#ds_danh_muc");
        });
    }
    //!Add
    addCateAD() {
        return __awaiter(this, void 0, void 0, function* () {
            this.view.addCateAD(`http://localhost:3000/admin/dm`, "#add_danh_muc");
        });
    }
    //!Update
    updateCateAD(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.laytoken();
            if (!token) {
                // Token is null or undefined, handle the error appropriately
                return;
            }
            let opt = {
                headers: {
                    Authorization: token,
                },
            };
            let res = yield fetch(`http://localhost:3000/admin/dm/${id}`, opt);
            let data = yield res.json();
            let dm = new CategoryModel(data[0].id, data[0].ten_danh_muc);
            this.view.updateCateAD(`http://localhost:3000/admin/dm/${id}`, dm, "#update_danh_muc");
        });
    }
    //!Delete
    deleteCateAD(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!confirm("Bạn có muốn xóa ?")) {
                return;
            }
            let res = yield fetch(`http://localhost:3000/admin/dm/${id}`);
            let data = yield res.json();
            let dm = new CategoryModel(data.id, data.ten_danh_muc);
            dm.deleteCate(`http://localhost:3000/admin/dm/${id}`);
        });
    }
}
