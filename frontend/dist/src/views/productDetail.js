var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { url, } from "../models/types.js";
import hien1sp from "../components/show_sp.js";
//!Hiện chi tiết sản phẩm
const chitietsp = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url}sp/${id}`);
    let sp_ct = yield res.json();
    console.log(sp_ct);
    //   /* ROM */
    //   let rom = "";
    //   for (const key in sp_ct.dia) {
    //     rom += `<button class="g">${sp_ct.dia[key]}</button>`;
    //   }
    /* Sim */
    let sim = "";
    if (sp_ct.sim == "") {
        sim += ``;
    }
    else {
        sim += `<tr>
                      <td>SIM:</td>
                      <td colspan="2">${sp_ct.sim}</td>
                  </tr>`;
    }
    /* Card */
    let card = "";
    if (sp_ct.card_do_hoa == null) {
        card += ``;
    }
    else {
        card += `<tr>
                      <td>Card Đồ Họa:</td>
                      <td colspan="2">${sp_ct.card_do_hoa}</td>
                  </tr>`;
    }
    let str = `<div class="pro-orther">
                  <a href="./index.html"><ion-icon name="arrow-back-outline"></ion-icon>Mua sản phẩm khác</a>
              </div>
              <div class="box-pro">
                  <div class="product_detail">
                      <div class="images">
                          <div class="product_detail-image">
                              <img class="img-fearture" src="./public/assets/${sp_ct.hinh}" alt="">
                              <div class="onmouse">
                                  <ion-icon name="heart-outline"></ion-icon>
                                  <ion-icon name="happy-outline"></ion-icon>
                                  <ion-icon name="person-add-outline"></ion-icon>
                                  <ion-icon name="bag-add-outline"></ion-icon>
                              </div>
                          </div>
                          <div class="ct-img">
                              <div class="img">
                                  <img src="./public/assets/images/ctsp_iphone1.jpg" alt="">
                              </div>
                              <div class="img">
                                  <img src="./public/assets/images/ctsp_iphone2.jpg" alt="">
                              </div>
                              <div class="img">
                                  <img src="./public/assets/images/ctsp_iphone3.jpg" alt="">
                              </div>
                              <div class="img">
                                  <img src="./public/assets/images/ctsp_iphone4.jpg" alt="">
                              </div>
                              <div class="img">
                                  <img src="./public/assets/images/ctsp_iphone5.jpg" alt="">
                              </div>
                          </div>
                          <div class="pro-wrap">
                              <div class="wrap_1">
                                  <div class="flex wrap-child_1">
                                      <ion-icon name="arrow-undo-outline"></ion-icon>
                                      <p>Hư gì đổi nấy trong <strong>12 tháng</strong> trên toàn quốc</p>
                                  </div>
                                  <div class="flex wrap-child_2">
                                      <ion-icon name="shield-outline"></ion-icon>
                                      <p>Bảo hành chính hàng <strong>1 năm</strong> tại các trung tâm bão hành</p>
                                  </div>
                              </div>
                              <div class="flex wrap_2">
                                  <ion-icon name="cube-outline"></ion-icon>
                                  <p>Bộ sản phẩm bao gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type
                                      C</p>
                              </div>
                          </div>
                      </div>
                      <div class="content">
                          <a href="">
                              <h4>${sp_ct.ten_sp}</h4>
                          </a>
                          <div class="price-list">
                              <div class="price-main">
                                  <span class="price-cut">${Number(sp_ct.gia).toLocaleString("Vi")} VNĐ</span>
                              </div>
                              <p>Giảm Giá ${sp_ct.giam_gia}</p>
                          </div>
                          <div class="capacity">
                              <button class="g">${sp_ct.dia}</button>
                          </div>
                          <div class="content-child">
                              <div class="title">
                                  <h4>Khuyến mãi</h4>
                                  <h5>Áp dụng giá khuyến mãi</h5>
                              </div>
                              <div class="contact">
                                  - Thu cũ Đổi mới: Giảm đến 2 triệu (Tùy model máy cũ, không kèm các hình thức
                                  thanh
                                  toán online, mua kèm).
                                  <br>
                                  - Mã giảm giá 200.000<sup>đ</sup> khi thanh toán qua App
                                  - Bảo hành 1 năm đổi trả
                              </div>
                              <div class="inside">
                                  <h3>Cấu Hình Điện Thoại</h3>
                                  <div class="table">
                                      <table>
                                          <tr>
                                              <td>RAM:</td>
                                              <td colspan="2">${sp_ct.ram}</td>
                                          </tr>
                                          <tr>
                                              <td>CPU:</td>
                                              <td colspan="2">${sp_ct.cpu}</td>
                                          </tr>
                                          <tr>
                                              <td>Công Nghệ Màn Hình:</td>
                                              <td colspan="2">${sp_ct.cong_nghe_man_hinh}"</td>
                                          </tr>
                                          ${card}
                                          ${sim}
                                          <tr>
                                              <td>Pin:</td>
                                              <td colspan="2">${sp_ct.pin}</td>
                                          </tr>
                                          <tr>
                                              <td>Bluetooth:</td>
                                              <td colspan="2">${sp_ct.blue_tooth}</td>
                                          </tr>
                                          <tr>
                                              <td>Cổng kết nối:</td>
                                              <td colspan="2">${sp_ct.cong_ket_noi}</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <button class="buy-now"><a>MuaNgay</a></button>
                          <button class="buy-now buy-gop"><a href="">Mua Trả Góp 0%</a></button>
                      </div>
                  </div>
              </div>`;
    let content = document.querySelector("#container-wrap");
    content.innerHTML = str;
    spcungloai(sp_ct.id_loai, 4);
});
//!Hiện sản phẩm cùng loại
const spcungloai = (id, limit) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url}sp_loai/${id}`);
    let san_pham = (yield res.json());
    console.log(san_pham);
    if (san_pham.length > limit) {
        return;
    }
    else {
        let str = ``;
        san_pham.forEach((sp) => {
            str += hien1sp(sp);
        });
        let content = document.querySelector(".product_same");
        content.innerHTML = `<div class="product_same--main">
                    <div class="product_same--title">
                        <h2>Sản phẩm cùng loại với ${san_pham[0].ten_sp}</h2>
                    </div>
                    <div class="product_same--list">
                    ${str}
                    </div>
                </div>`;
    }
});
export default chitietsp;
