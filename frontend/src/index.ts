import { CategoryController } from "./controllers/categoryController.js";
import { ProductController } from "./controllers/productController.js";
import header from "./components/header.js";
import footer from "./components/footer.js";
import { KindController } from "./controllers/kindController.js";

// Hàm để xử lý việc lựa chọn và render controller phù hợp
let param = new URLSearchParams(window.location.search);
let page = param.get("page");
let act = param.get("act");
let hand: any;
header();
footer();
let cate = new CategoryController();
cate.getCate();
switch (page) {
  case "home":
    let productHot = new ProductController();
    productHot.getProductHot(5);

    let productPopular = new ProductController();
    productPopular.getProductPopular(20);
    break;

  case "danhmuc":
    let id_dm = Number(param.get("id"));

    let productDM = new ProductController();

    productDM.getProductCategory(id_dm);

    let categoryKind = new KindController();

    categoryKind.getKindCate(id_dm);

    break;
  case "loai":
    header();
    footer();
    let id_loai = Number(param.get("id"));
    let id_danh_muc = Number(param.get("id_danh_muc"));

    let productLoai = new ProductController();
    productLoai.getProductKind(id_loai, id_danh_muc);

    break;
  case "productdetail":
    let id_sp = Number(param.get("id"));

    let productPD = new ProductController();
    productPD.getProductDetail(id_sp);
    break;

  default:
    let productHotDF = new ProductController();
    productHotDF.getProductHot(5);

    let productPopularDF = new ProductController();
    productPopularDF.getProductPopular(20);

    break;
}

// let cate = new CategoryController();
// cate.getCate();

// let productHot = new ProductController();
// productHot.getProductHot(5);

// let productPopular = new ProductController();
// productPopular.getProductPopular(20);
// import {
//   Danh_Muc_User,
//   Loai_User,
//   San_Pham_User,
//   Cart_User,
//   url,
// } from "./models/types.js";

// //!Hiên menu
// const hienmenu = async () => {
//   let res = await fetch(url + "danhmuc");
//   let danh_mucs = (await res.json()) as Danh_Muc_User[];
//   let str = '<li><a href="./index.html">Trang chủ</a></li>';
//   let danh_muc = danh_mucs.map((dm) => {
//     return (str += `<li><a href="./danh_muc.html?id=${dm.id}"> ${dm.ten_danh_muc}</a></li>`);
//   });
//   let content = document.querySelector(
//     "#header .container-menu .main-menu"
//   ) as HTMLElement;
//   content.innerHTML = str;
//   content = document.querySelector(
//     "#header .group .toggle .mobile-menu .main-menu"
//   ) as HTMLElement;
//   content.innerHTML = str;
// };

// //! Btn search
// window.addEventListener("load", () => {
//   const btn_search = document.querySelector("#btn_search");
//   if (btn_search) {
//     btn_search.addEventListener("click", (event) => {
//       searchProduct();
//     });
//   } else {
//     console.error("Element not found");
//   }
// });
// //!Tìm kiếm sản phẩm
// const searchProduct = async () => {
//   let search = (document.querySelector("#search") as HTMLInputElement).value;
//   let res = await fetch(`${url}search/${search}`);
//   let san_pham = (await res.json()) as San_Pham_User[];
//   if (san_pham) {
//     let productHot = document.querySelector(".hot");
//     if (productHot) {
//       productHot.remove();
//     }
//     let productPopular = document.querySelector(".phobien");
//     if (productPopular) {
//       let hotParentElement = productPopular.querySelectorAll(".product");
//       hotParentElement.forEach((product) => {
//         product.remove();
//       });
//     }
//     let str = san_pham
//       .map((sp) => {
//         return `
//         <div class="product">
//                 <div class="product-image">
//                     <a href="./productdetail.html?id=${sp.id}">
//                         <img src="./public/assets/${sp.hinh}" alt="">
//                     </a>
//                 </div>
//                 <div class="content">
//                     <a href="./productdetail.html?id=${sp.id}">
//                         <h4>${sp.ten_sp}</h4>
//                     </a>
//                     <div class="price-list">
//                         <div class="price-main">
//                             <span class="price-cut">${Number(
//                               sp.gia
//                             ).toLocaleString("Vi")} VNĐ</span>
//                         </div>
//                         <p>Giảm Giá ${sp.giam_gia}%</p>
//                     </div>
//                 </div>
//                 <div class="button-buy">
//                     <button class="btn_product" onclick="addtocart(${sp.id})">
//                         Mua Ngay
//                     </button>
//                 </div>
//             </div>
//     `;
//       })
//       .join("");
//     let content = document.querySelector(".phobien") as HTMLElement;
//     content.innerHTML = `<h2>Sản phẩm phổ biến</h2>
//                     <div id="product-popular" class="product-main">
//                         ${str}
//                     </div>`;
//   }
// };

//!Header
// const header = () => {
//   let content = document.querySelector("#container_header") as HTMLElement;
//   content.innerHTML = `<div id=header-content>
//             <div class="header-content_w1300">
//                 <div class="number-phone__map">
//                     <div class="number-phone">
//                         <p>
//                             <ion-icon name="call-outline"></ion-icon>
//                             <span>1800.113114</span>
//                         </p>
//                     </div>
//                     <div class="map">
//                         <p>
//                             <ion-icon name="location-outline"></ion-icon>
//                             <span>Đại chỉ cửa hàng</span>
//                         </p>
//                     </div>
//                 </div>
//                 <div class="profile">
//                     <img src="../public/assets/images/chinh_sach_bao_hanh.jpg" alt="Hàng chính hãng">
//                 </div>
//                 <div class="profile">
//                     <img src="./public/assets/images/chinh_hang_VAT.jpg" alt="Hàng chính hãng">
//                 </div>
//             </div>
//         </div>
//         <div id="header">
//             <div class="container-menu">
//                 <a href="./index.html" class="logo">
//                     <img src="./public/assets/images/logo.png" alt="">
//                 </a>
//                 <ul class="main-menu">
//                     /* Hiện menu */
//                 </ul>
//             </div>
//             <div class="group">
//                 <div class="search-box">
//                     <form action="" method="GET">
//               <input
//                 type="search"
//                 class="search-text"
//                 id="search"
//                 placeholder="Search"
//                 name="search"
//               />
//               <button type="button" class="search-btn" id="btn_search">
//                 <ion-icon name="search-outline"></ion-icon>
//               </button>
//             </form>
//                 </div>
//                 <div class="cart">
//                     <!-- Tạo số lượng sản phẩm trên giỏ hàng -->
//                     <a href="./cart.html">
//                         <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
//                     </a>
//                     <span class="num-cart">0</span>
//                 </div>
//                 <div class="toggle">
//                     <ion-icon class="toggle_menu" name="menu-outline">
//                     </ion-icon>
//                     <div class="mobile-menu">
//                         <ion-icon class="toggle_close" name="close-outline"></ion-icon>
//                         <ul class="main-menu">
//                             /* Hiện menu */
//                         </ul>
//                         <div class="container-login_mobile">
//                             <a href="./login.html" target="_blank">Đăng Nhập</a>
//                             <a href="./form.html" target="_blank">Đăng Ký</a>
//                         </div>
//                     </div>
//                     <div class="overflow"></div>
//                 </div>
//                 <div class="container-login">
//                     <a href="./login.html" target="_blank">Đăng Nhập</a>
//                     <a href="./form.html" target="_blank">Đăng Ký</a>
//                 </div>
//             </div>
//         </div>`;

//   const toggle_menu = document.querySelector(
//     ".toggle_menu"
//   ) as HTMLElement | null;
//   const toggle_close = document.querySelector(
//     ".toggle_close"
//   ) as HTMLElement | null;
//   const mobile_menu = document.querySelector(
//     ".mobile-menu"
//   ) as HTMLElement | null;
//   const overflow = document.querySelector(".overflow") as HTMLElement | null;

//   if (toggle_menu && toggle_close && mobile_menu && overflow) {
//     toggle_menu.addEventListener("click", () => {
//       mobile_menu.style.transform = "translateX(0)";
//       mobile_menu.style.opacity = "1";
//       mobile_menu.style.visibility = "visible";
//       overflow.style.display = "block";
//     });

//     toggle_close.addEventListener("click", () => {
//       mobile_menu.style.transform = "translateX(100%)";
//       mobile_menu.style.opacity = "0";
//       mobile_menu.style.visibility = "hidden";
//       overflow.style.display = "none";
//     });

//     overflow.addEventListener("click", () => {
//       mobile_menu.style.transform = "translateX(100%)";
//       mobile_menu.style.opacity = "0";
//       mobile_menu.style.visibility = "hidden";
//       overflow.style.display = "none";
//     });
//   }
// };

//!Hiên sản phẩm hot
// const hiensphot = async (sosp: number) => {
//   let res = await fetch(`${url}sphot/${sosp}`);
//   let products_hot = (await res.json()) as San_Pham_User[];
//   let str = "";
//   products_hot.forEach((sp) => (str += hien1sp(sp)));
//   let content = document.querySelector("nav .hot") as HTMLElement;
//   content.innerHTML = `<h2>
//                     <ion-icon name="ribbon-outline"></ion-icon>Khuyến mãi hot
//                 </h2>
//                     <div id="product-hot" class="product-main">
//                         ${str}
//                     </div>`;
// };

//!Hiên sản phẩm phổ biến
// const hienspphobien = async (sosp: number) => {
//   let res = await fetch(`${url}spxemnhieu/${sosp}`);
//   let products_pb = (await res.json()) as San_Pham_User[];
//   let str = "";
//   products_pb.forEach((sp: San_Pham_User) => (str += hien1sp(sp)));
//   let content = document.querySelector("nav .phobien") as HTMLElement;
//   content.innerHTML = `<h2>Sản phẩm phổ biến</h2>
//                     <div id="product-popular" class="product-main">
//                         ${str}
//                     </div>`;
// };

//!Sản phẩm theo danh mục
// const hiensptheodanhmuc = async (id: string, sosp: number) => {
//   let res = await fetch(`${url}danhmuc/${id}`);
//   let danh_muc = (await res.json()) as Danh_Muc_User[];
//   let ten_danh_muc = danh_muc[0].ten_danh_muc;
//   /* Hiển thị tiêu đề */
//   let content = document.querySelector("nav .title") as HTMLElement;
//   content.innerHTML = `<h2>${ten_danh_muc}</h2>`;
//   let res_loai = await fetch(`${url}loai_danhmuc/${id}`);
//   let loai = (await res_loai.json()) as Loai_User[];
//   console.log(loai);

//   let ten_loai = "";
//   loai.forEach(
//     (loai) =>
//       (ten_loai += `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="loai.html?id=${loai.id}&id_danh_muc=${loai.id_danh_muc}">${loai.ten_loai}</a></li>`)
//   );
//   /* Hiển thị loại */
//   let content_loai = document.querySelector("#list_brand") as HTMLElement;
//   content_loai.innerHTML = ten_loai;
//   /* Hiển thị sản phẩm */
//   let res_sp = await fetch(`${url}sp_danhmuc/${id}`);
//   let sp_arr = (await res_sp.json()) as San_Pham_User[];
//   let str = "";
//   sp_arr.forEach((sp) => (str += hien1sp(sp)));
//   /* Hiển thị sản phẩm */
//   let content_sp = document.querySelector(
//     "nav .container .main .products .list_product"
//   ) as HTMLElement;
//   content_sp.innerHTML = `<div class="product-main product-iphone">
//                             ${str}
//                         </div>`;
// };

//!Hiện sản phẩm theo loại
// const hientheoloai = async (id: string, id_danh_muc: string) => {
//   let res_loai = await fetch(`${url}loai/${id}/${id_danh_muc}`);
//   let loai = (await res_loai.json()) as Loai_User[];
//   let ten_loai = "";
//   loai.forEach((loai) => (ten_loai += loai.ten_loai));
//   let res_sp = await fetch(`${url}sp/${id}/${id_danh_muc}`);
//   let sp_loai = (await res_sp.json()) as San_Pham_User[];
//   let str = "";
//   sp_loai.forEach((sp) => (str += hien1sp(sp)));
//   /* Hiển thị sản phẩm */
//   let content = document.querySelector(
//     "nav .container .main .products .list_product"
//   ) as HTMLElement;
//   content.innerHTML = `<div class="product-main product-iphone">
//                             ${str}
//                         </div>`;
//   /* Hiển thị tiêu đề */
//   let content_loai = document.querySelector("nav .title") as HTMLElement;
//   content_loai.innerHTML = `<h2>${ten_loai}</h2>`;

//   let content_dm = document.querySelector("#list_brand") as HTMLElement;
//   content_dm.innerHTML = `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="danh_muc.html?id=${id_danh_muc}">Về danh mục</a></li>`;
// };

//!Select giảm giá
// const hienselect = () => {
//   let str =
//     /* html */
//     `<div class="filter_price">
//         <select name="" id="">
//             <option value="6000000">Giá 6 triệu</option>
//             <option value="6100000">Giá 6 - 8 triệu</option>
//             <option value="10000000">Giá 8 - 10 triệu</option>
//             <option value="20000000">Giá 10 - 20 triệu</option>
//             <option value="21000000">Giá trên 20 triệu</option>
//         </select>
//     </div>
//     <div class="filter_giamgia">
//         <select name="" id="" onchange="dentranggiamgia(this.value)">
//             <option value="0%">Giảm giá 0%</option>
//             <option value="5%">Giảm giá 5%</option>
//             <option value="10%">Giảm giá 10%</option>
//             <option value="15%">Giảm giá 15%</option>
//             <option value="20%">Giảm giá 20%</option>
//             <option value="25%">Giảm giá 25%</option>
//         </select>
//     </div>`;
//   let content = document.querySelector(".filter_product") as HTMLElement;
//   content.innerHTML += str;
// };

//!Hiện chi tiết sản phẩm
// const chitietsp = async (id: string) => {
//   let res = await fetch(`${url}sp/${id}`);
//   let sp_ct = await res.json();
//   console.log(sp_ct);

//   //   /* ROM */
//   //   let rom = "";
//   //   for (const key in sp_ct.dia) {
//   //     rom += `<button class="g">${sp_ct.dia[key]}</button>`;
//   //   }

//   /* Sim */
//   let sim = "";
//   if (sp_ct.sim == "") {
//     sim += ``;
//   } else {
//     sim += `<tr>
//                       <td>SIM:</td>
//                       <td colspan="2">${sp_ct.sim}</td>
//                   </tr>`;
//   }

//   /* Card */
//   let card = "";
//   if (sp_ct.card_do_hoa == null) {
//     card += ``;
//   } else {
//     card += `<tr>
//                       <td>Card Đồ Họa:</td>
//                       <td colspan="2">${sp_ct.card_do_hoa}</td>
//                   </tr>`;
//   }

//   let str = `<div class="pro-orther">
//                   <a href="./index.html"><ion-icon name="arrow-back-outline"></ion-icon>Mua sản phẩm khác</a>
//               </div>
//               <div class="box-pro">
//                   <div class="product_detail">
//                       <div class="images">
//                           <div class="product_detail-image">
//                               <img class="img-fearture" src="./public/assets/${
//                                 sp_ct.hinh
//                               }" alt="">
//                               <div class="onmouse">
//                                   <ion-icon name="heart-outline"></ion-icon>
//                                   <ion-icon name="happy-outline"></ion-icon>
//                                   <ion-icon name="person-add-outline"></ion-icon>
//                                   <ion-icon name="bag-add-outline"></ion-icon>
//                               </div>
//                           </div>
//                           <div class="ct-img">
//                               <div class="img">
//                                   <img src="./public/assets/images/ctsp_iphone1.jpg" alt="">
//                               </div>
//                               <div class="img">
//                                   <img src="./public/assets/images/ctsp_iphone2.jpg" alt="">
//                               </div>
//                               <div class="img">
//                                   <img src="./public/assets/images/ctsp_iphone3.jpg" alt="">
//                               </div>
//                               <div class="img">
//                                   <img src="./public/assets/images/ctsp_iphone4.jpg" alt="">
//                               </div>
//                               <div class="img">
//                                   <img src="./public/assets/images/ctsp_iphone5.jpg" alt="">
//                               </div>
//                           </div>
//                           <div class="pro-wrap">
//                               <div class="wrap_1">
//                                   <div class="flex wrap-child_1">
//                                       <ion-icon name="arrow-undo-outline"></ion-icon>
//                                       <p>Hư gì đổi nấy trong <strong>12 tháng</strong> trên toàn quốc</p>
//                                   </div>
//                                   <div class="flex wrap-child_2">
//                                       <ion-icon name="shield-outline"></ion-icon>
//                                       <p>Bảo hành chính hàng <strong>1 năm</strong> tại các trung tâm bão hành</p>
//                                   </div>
//                               </div>
//                               <div class="flex wrap_2">
//                                   <ion-icon name="cube-outline"></ion-icon>
//                                   <p>Bộ sản phẩm bao gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type
//                                       C</p>
//                               </div>
//                           </div>
//                       </div>
//                       <div class="content">
//                           <a href="">
//                               <h4>${sp_ct.ten_sp}</h4>
//                           </a>
//                           <div class="price-list">
//                               <div class="price-main">
//                                   <span class="price-cut">${Number(
//                                     sp_ct.gia
//                                   ).toLocaleString("Vi")} VNĐ</span>
//                               </div>
//                               <p>Giảm Giá ${sp_ct.giam_gia}</p>
//                           </div>
//                           <div class="capacity">
//                               <button class="g">${sp_ct.dia}</button>
//                           </div>
//                           <div class="content-child">
//                               <div class="title">
//                                   <h4>Khuyến mãi</h4>
//                                   <h5>Áp dụng giá khuyến mãi</h5>
//                               </div>
//                               <div class="contact">
//                                   - Thu cũ Đổi mới: Giảm đến 2 triệu (Tùy model máy cũ, không kèm các hình thức
//                                   thanh
//                                   toán online, mua kèm).
//                                   <br>
//                                   - Mã giảm giá 200.000<sup>đ</sup> khi thanh toán qua App
//                                   - Bảo hành 1 năm đổi trả
//                               </div>
//                               <div class="inside">
//                                   <h3>Cấu Hình Điện Thoại</h3>
//                                   <div class="table">
//                                       <table>
//                                           <tr>
//                                               <td>RAM:</td>
//                                               <td colspan="2">${sp_ct.ram}</td>
//                                           </tr>
//                                           <tr>
//                                               <td>CPU:</td>
//                                               <td colspan="2">${sp_ct.cpu}</td>
//                                           </tr>
//                                           <tr>
//                                               <td>Công Nghệ Màn Hình:</td>
//                                               <td colspan="2">${
//                                                 sp_ct.cong_nghe_man_hinh
//                                               }"</td>
//                                           </tr>
//                                           ${card}
//                                           ${sim}
//                                           <tr>
//                                               <td>Pin:</td>
//                                               <td colspan="2">${sp_ct.pin}</td>
//                                           </tr>
//                                           <tr>
//                                               <td>Bluetooth:</td>
//                                               <td colspan="2">${
//                                                 sp_ct.blue_tooth
//                                               }</td>
//                                           </tr>
//                                           <tr>
//                                               <td>Cổng kết nối:</td>
//                                               <td colspan="2">${
//                                                 sp_ct.cong_ket_noi
//                                               }</td>
//                                           </tr>
//                                       </table>
//                                   </div>
//                               </div>
//                           </div>
//                           <button class="buy-now"><a>MuaNgay</a></button>
//                           <button class="buy-now buy-gop"><a href="">Mua Trả Góp 0%</a></button>
//                       </div>
//                   </div>
//               </div>`;
//   let content = document.querySelector("#container-wrap") as HTMLElement;
//   content.innerHTML = str;

//   spcungloai(sp_ct.id_loai, 4);
// };

//!Hiện sản phẩm cùng loại
// const spcungloai = async (id: string, limit: number) => {
//   let res = await fetch(`${url}sp_loai/${id}`);
//   let san_pham = (await res.json()) as San_Pham_User[];
//   console.log(san_pham);

//   if (san_pham.length > limit) {
//     return;
//   } else {
//     let str = ``;
//     san_pham.forEach((sp) => {
//       str += hien1sp(sp);
//     });
//     let content = document.querySelector(".product_same") as HTMLElement;
//     content.innerHTML = `<div class="product_same--main">
//                     <div class="product_same--title">
//                         <h2>Sản phẩm cùng loại với ${san_pham[0].ten_sp}</h2>
//                     </div>
//                     <div class="product_same--list">
//                     ${str}
//                     </div>
//                 </div>`;
//   }
// };

//!Hiện 1 sản phẩm
// const hien1sp = (sp: San_Pham_User) => {
//   let { id, id_danh_muc, id_loai, ten_sp, hinh, gia, giam_gia, ngay } = sp; //Destructuring Object
//   return `<div class="product">
//                 <div class="product-image">
//                     <a href="./productdetail.html?id=${id}">
//                         <img src="./public/assets/${hinh}" alt="">
//                     </a>
//                 </div>
//                 <div class="content">
//                     <a href="./productdetail.html?id=${id}">
//                         <h4>${ten_sp}</h4>
//                     </a>
//                     <div class="price-list">
//                         <div class="price-main">
//                             <span class="price-cut">${Number(
//                               gia
//                             ).toLocaleString("Vi")} VNĐ</span>
//                         </div>
//                         <p>Giảm Giá ${giam_gia}%</p>
//                     </div>
//                 </div>
//                 <div class="button-buy">
//                     <button class="btn_product" onclick="addtocart(${id})">
//                         Mua Ngay
//                     </button>
//                 </div>
//             </div>`;
// };

//!Hiện footer
// const footer = () => {
//   let content = document.querySelector("footer") as HTMLElement;
//   content.innerHTML = `<div class="the-end">
//         <ul class="the-end_menu">
//             <li>
//                 <ion-icon name="checkmark-circle-outline"></ion-icon>
//                 <span>Mẫu mã đa dạng,
//                     chính hãng
//                 </span>
//             </li>
//             <li>
//                 <ion-icon name="car-outline"></ion-icon>
//                 <span>Giao hàng toàn quốc</span>
//             </li>
//             <li>
//                 <ion-icon name="shield-outline"></ion-icon>
//                 <span>Bảo hảnh 12 tháng</span>
//             </li>
//             <li>
//                 <ion-icon name="refresh-outline"></ion-icon>
//                 <span>Có thể đổi trả,
//                     trong thời gian quy định
//                 </span>
//             </li>
//         </ul>
//     </div>
//     <div id="footer-wrap">
//         <div id="footer-bottom">
//             <div class="ft-bt-main">
//                     <a class="logo-ft" href=""><img src="./public/assets/images/logo.png" alt="">Tech<span>Phone</span></a>
//                 <div class="ft">
//                     <ul class="main-ft">
//                         <li><a href="">Thông tin web</a></li>
//                         <li><a href="">Chính sách bảo hành</a></li>
//                         <li><a href="">Chính sách đổi trả</a></li>
//                         <li><a href="">Giao hàng & thanh toán</a></li>
//                     </ul>
//                 </div>
//                 <div class="ft">
//                     <ul class="main-ft">
//                         <li><a href="">Mua hàng online</a></li>
//                         <li><a href="">Hướng dẫn online</a></li>
//                         <li><a href="">Hóa đơn</a></li>
//                         <li><a href="">Cảnh báo</a></li>
//                     </ul>
//                 </div>
//                 <div class="ft">
//                     <ul class="main-ft">
//                         <li><ion-icon name="home-outline"></ion-icon><a href="">Ngõ 218, P.Bưởi, Tây Hồ, Hà Nội</a>
//                         </li>
//                         <li><ion-icon name="call-outline"></ion-icon><a href="">0123456789</a></li>
//                         <li><ion-icon name="mail-outline"></ion-icon><a href="">techphone@gmail.com</a></li>
//                     </ul>
//                     <div class="logo-tt">
//                         <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
//                         <a href=""><ion-icon name="logo-google"></ion-icon></a>
//                         <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
//                         <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
//                     </div>
//                 </div>
//             </div>
//             <div class="dp_flex__pay">
//                 <div class="pay">
//                     <img class="item item1" src="./public/assets/images/fjb.png" alt="">
//                     <img class="item item2" src="./public/assets/images/foxpay.png" alt="">
//                     <img class="item item3" src="./public/assets/images/visa.png" alt="">
//                     <img class="item item4" src="./public/assets/images/mastercard.png" alt="">
//                     <img class="item item5" src="./public/assets/images/zalopay.png" alt="">
//                     <img class="item item6" src="./public/assets/images/vnpay.png" alt="">
//                 </div>
//             </div>
//         </div>
//         <div class="lastFoo">
//             <div class="content">© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM
//                 cấp ngày
//                 02/01/2007.
//                 Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP. Hồ Chí Minh. Điện thoại: 028 38125960.</div>
//         </div>
//     </div>`;
// };
