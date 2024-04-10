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
const url = "http://localhost:3000/sp";
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(url);
    let product = yield res.json();
    let db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.hidden));
});
const fetchDataBySpHot = (sosp) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(url + "/sphot/" + sosp);
    let product = yield res.json();
    let db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
});
const fetchDataBySpPhoBien = (sosp) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(url + "/spxemnhieu/" + sosp);
    let product = yield res.json();
    let db = product.map((sp) => new ProductModel(sp.id, sp.id_danh_muc, sp.id_loai, sp.ten_sp, sp.gia, sp.giam_gia, sp.hinh, sp.ngay, sp.mau_sac, sp.xem, sp.hot, sp.an_hien));
});
export { fetchData, fetchDataBySpHot, fetchDataBySpPhoBien };
