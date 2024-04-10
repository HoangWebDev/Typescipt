var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ProductModel from "../models/productModel.js";
import ThuocTinhModel from "../models/thuoctinhModel.js";
import { ProductView } from "../views/productView.js";
import CategoryModel from "../models/categoryModel.js";
import KindModel from "../models/kindModel.js";
export class ProductController {
    constructor() {
        this.db = [];
        this.db_detail = [];
        this.db_cate = [];
        this.db_kind = [];
        this.url = "http://localhost:3000/";
        this.urlAD = "http://localhost:3000/admin/";
        this.view = new ProductView();
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
            let res = yield fetch(this.url + "sp");
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.hidden));
        });
    }
    fetchDataAD() {
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
            let res = yield fetch(this.url + "sp", opt);
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.hidden));
        });
    }
    fetchDataBySpHot(sosp) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url + "sphot/" + sosp);
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
        });
    }
    fetchDataBySpPhoBien(sosp) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url + "spxemnhieu/" + sosp);
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
        });
    }
    fetchDataBySpCate(id_dm) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url + "sp_danhmuc/" + id_dm);
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
        });
    }
    //!Get Product Hot
    getProductHot(sosp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataBySpHot(sosp);
            this.view.productHot(this.db, ".hot");
        });
    }
    //!Get Product Popular
    getProductPopular(sosp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataBySpPhoBien(sosp);
            this.view.productPopular(this.db, ".phobien");
        });
    }
    //!Get Product Category
    getProductCategory(id_dm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataBySpCate(id_dm);
            this.view.productByCategory(this.db, ".list_product");
        });
    }
    //!Get Product Kind
    getProductKind(id, id_dm) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(`http://localhost:3000/sp/${id}/${id_dm}`);
            let product = yield res.json();
            this.db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
            this.view.productByKind(this.db, ".list_product");
        });
    }
    //!Get Product Detail
    getProductDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url + "sp/" + id);
            let product = yield res.json();
            let productDetail = new ThuocTinhModel(product.id, product.id_danh_muc, product.id_loai, product.ten_sp, product.gia, product.giam_gia, product.hinh, product.ngay, product.mau_sac, product.xem, product.hot, product.an_hien, product.id_sp, product.ram, product.dia, product.cpu, product.sim, product.bluetooth, product.pin, product.cong_nghe_man_hinh, product.card_do_hoa, product.cong_ket_noi);
            this.view.productDetail(productDetail, "#container-wrap");
        });
    }
    //!Get Product Admin
    getProductAD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchDataAD();
            this.view.productAD(this.db, "#ds_sanpham");
        });
    }
    //!Add Product Admin
    addProductAD() {
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
            let res_dm = yield fetch(this.urlAD + "dm", opt);
            let dataDM = yield res_dm.json();
            this.db_cate = dataDM.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            let res_loai = yield fetch(this.urlAD + "loaisp", opt);
            let dataLoai = yield res_loai.json();
            this.db_kind = dataLoai.map((loai) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai));
            let res_tt = yield fetch(this.urlAD + "tt", opt);
            let dataTT = yield res_tt.json();
            this.db_detail = dataTT.map((tt) => new ThuocTinhModel(tt.id, tt.id_danh_muc, tt.id_loai, tt.ten_sp, tt.gia, tt.giam_gia, tt.hinh, tt.ngay, tt.mau_sac, tt.xem, tt.hot, tt.an_hien, tt.id_sp, tt.ram, tt.dia, tt.cpu, tt.sim, tt.bluetooth, tt.pin, tt.cong_nghe_man_hinh, tt.card_do_hoa, tt.cong_ket_noi));
            this.view.addProductAD(this.urlAD + "sp", this.db_cate, this.db_kind, this.db_detail, "#add_product");
        });
    }
    //!Update Product Admin
    updateProductAD(id) {
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
            let res = yield fetch(this.urlAD + "sp/" + id, opt);
            let data = yield res.json();
            let product = new ProductModel(data.id, data.id_danh_muc, data.id_loai, data.ten_sp, data.gia, data.giam_gia, data.hinh, data.ngay, data.mau_sac, data.xem, data.hot, data.an_hien);
            let res_dm = yield fetch(this.urlAD + "dm", opt);
            let dataDM = yield res_dm.json();
            this.db_cate = dataDM.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            let res_loai = yield fetch(this.urlAD + "loaisp", opt);
            let dataLoai = yield res_loai.json();
            this.db_kind = dataLoai.map((loai) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai));
            let res_tt = yield fetch(this.urlAD + "/sp/" + id + "/tt", opt);
            let tt = yield res_tt.json();
            let properties = new ThuocTinhModel(tt[0].id, tt[0].id_danh_muc, tt[0].id_loai, tt[0].ten_sp, tt[0].gia, tt[0].giam_gia, tt[0].hinh, tt[0].ngay, tt[0].mau_sac, tt[0].xem, tt[0].hot, tt[0].an_hien, tt[0].id_sp, tt[0].ram, tt[0].dia, tt[0].cpu, tt[0].sim, tt[0].bluetooth, tt[0].pin, tt[0].cong_nghe_man_hinh, tt[0].card_do_hoa, tt[0].cong_ket_noi);
            console.log(properties);
            this.view.updateProductAD(this.urlAD + "sp/" + id, product, this.db_cate, this.db_kind, properties, "#add_product");
        });
    }
    //!Delete Product Admin
    deleteProductAD(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!confirm("Bạn có muốn xóa ?")) {
                return;
            }
            let res = yield fetch(this.urlAD + "sp/" + id);
            let data = yield res.json();
            let product = new ProductModel(data.id, data.id_danh_muc, data.id_loai, data.ten_sp, data.gia, data.giam_gia, data.hinh, data.ngay, data.mau_sac, data.xem, data.hot, data.an_hien);
            product.deleteProduct(this.urlAD + "sp/" + id);
        });
    }
}
