var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { url, } from "../components/types.js";
import hien1sp from "../components/show_sp.js";
//!Sản phẩm theo danh mục
const hiensptheodanhmuc = (id, sosp) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url}danhmuc/${id}`);
    let danh_muc = (yield res.json());
    let ten_danh_muc = danh_muc[0].ten_danh_muc;
    /* Hiển thị tiêu đề */
    let content = document.querySelector("nav .title");
    content.innerHTML = `<h2>${ten_danh_muc}</h2>`;
    let res_loai = yield fetch(`${url}loai_danhmuc/${id}`);
    let loai = (yield res_loai.json());
    console.log(loai);
    let ten_loai = "";
    loai.forEach((loai) => (ten_loai += `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="loai.html?id=${loai.id}&id_danh_muc=${loai.id_danh_muc}">${loai.ten_loai}</a></li>`));
    /* Hiển thị loại */
    let content_loai = document.querySelector("#list_brand");
    content_loai.innerHTML = ten_loai;
    /* Hiển thị sản phẩm */
    let res_sp = yield fetch(`${url}sp_danhmuc/${id}`);
    let sp_arr = (yield res_sp.json());
    let str = "";
    sp_arr.forEach((sp) => (str += hien1sp(sp)));
    /* Hiển thị sản phẩm */
    let content_sp = document.querySelector("nav .container .main .products .list_product");
    content_sp.innerHTML = `<div class="product-main product-iphone">
                            ${str}
                        </div>`;
});
//!Hiện sản phẩm theo loại
const hientheoloai = (id, id_danh_muc) => __awaiter(void 0, void 0, void 0, function* () {
    let res_loai = yield fetch(`${url}loai/${id}/${id_danh_muc}`);
    let loai = (yield res_loai.json());
    let ten_loai = "";
    loai.forEach((loai) => (ten_loai += loai.ten_loai));
    let res_sp = yield fetch(`${url}sp/${id}/${id_danh_muc}`);
    let sp_loai = (yield res_sp.json());
    let str = "";
    sp_loai.forEach((sp) => (str += hien1sp(sp)));
    /* Hiển thị sản phẩm */
    let content = document.querySelector("nav .container .main .products .list_product");
    content.innerHTML = `<div class="product-main product-iphone">
                            ${str}
                        </div>`;
    /* Hiển thị tiêu đề */
    let content_loai = document.querySelector("nav .title");
    content_loai.innerHTML = `<h2>${ten_loai}</h2>`;
    let content_dm = document.querySelector("#list_brand");
    content_dm.innerHTML = `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="danh_muc.html?id=${id_danh_muc}">Về danh mục</a></li>`;
});
//!Select giảm giá
const hienselect = () => {
    let str = 
    /* html */
    `<div class="filter_price">
        <select name="" id="">
            <option value="6000000">Giá 6 triệu</option>
            <option value="6100000">Giá 6 - 8 triệu</option>
            <option value="10000000">Giá 8 - 10 triệu</option>
            <option value="20000000">Giá 10 - 20 triệu</option>
            <option value="21000000">Giá trên 20 triệu</option>
        </select>
    </div>
    <div class="filter_giamgia">
        <select name="" id="" onchange="dentranggiamgia(this.value)">
            <option value="0%">Giảm giá 0%</option>
            <option value="5%">Giảm giá 5%</option>
            <option value="10%">Giảm giá 10%</option>
            <option value="15%">Giảm giá 15%</option>
            <option value="20%">Giảm giá 20%</option>
            <option value="25%">Giảm giá 25%</option>
        </select>
    </div>`;
    let content = document.querySelector(".filter_product");
    content.innerHTML += str;
};
export { hiensptheodanhmuc, hientheoloai, hienselect };
