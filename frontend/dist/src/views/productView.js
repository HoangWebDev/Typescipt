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
import hien1sp from "../components/show_sp.js";
import tbody_table from "../components/show_table.js";
export class ProductView {
    constructor() {
        //!Check Form
        this.validateForm_SP = (data) => {
            let isValid = true;
            if (!data.Id) {
                this.displayError_SP("id_sp", "Vui lòng nhập ID sản phẩm.");
                isValid = false;
            }
            else {
                this.clearError_SP("id_sp");
            }
            if (!data.Name) {
                this.displayError_SP("ten_sp", "Vui lòng nhập tên sản phẩm.");
                isValid = false;
            }
            else {
                this.clearError_SP("ten_sp");
            }
            if (!data.Price) {
                this.displayError_SP("gia_sp", "Vui lòng nhập giá sản phẩm.");
                isValid = false;
            }
            else if (data.Price < 0) {
                this.displayError_SP("gia_sp", "Giá sản phẩm phải lớn hơn 0.");
                isValid = false;
            }
            else {
                this.clearError_SP("gia_sp");
            }
            if (data.Price_Sale > 100) {
                this.displayError_SP("giam_gia", "Mức giảm giá phải dưới 100%.");
                isValid = false;
            }
            else {
                this.clearError_SP("giam_gia");
            }
            if (!data.Hinh) {
                this.displayError_SP("hinh", "Vui lòng thêm hình ảnh");
            }
            else {
                this.clearError_SP("hinh");
            }
            return isValid;
        };
        //! Xu ly hien thi thong bao
        this.displayError_SP = (elementId, message) => {
            const errorElement = document.querySelector(`.${elementId}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = "block";
            }
        };
        //! Xu ly an thong bao
        this.clearError_SP = (elementId) => {
            const errorElement = document.querySelector(`.${elementId}-error`);
            if (errorElement) {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        };
    }
    //!Hiện sản phẩm hot
    productHot(san_pham, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = "";
            san_pham.forEach((sp) => (str += hien1sp(sp)));
            let content = document.querySelector("nav " + tagname);
            content.innerHTML = `<h2>
                    <ion-icon name="ribbon-outline"></ion-icon>Khuyến mãi hot
                </h2>
                    <div id="product-hot" class="product-main">
                        ${str}
                    </div>`;
        });
    }
    //!Hiên sản phẩm phổ biến
    productPopular(san_pham, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = "";
            san_pham.forEach((sp) => (str += hien1sp(sp)));
            let content = document.querySelector("nav " + tagname);
            content.innerHTML = `<h2>Sản phẩm phổ biến</h2>
                    <div id="product-popular" class="product-main">
                        ${str}
                    </div>`;
        });
    }
    //!Hiện sản phẩm theo danh mục
    productByCategory(san_pham, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = ``;
            san_pham.forEach((sp) => (str += hien1sp(sp)));
            let content = document.querySelector("nav .container .main .products " + tagname);
            content.innerHTML = `<div class="product-main product-iphone">
                             ${str}
                         </div>`;
        });
    }
    //!Hiện sản phẩm theo loại
    productByKind(san_pham, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(san_pham);
            let str = ``;
            san_pham.forEach((sp) => (str += hien1sp(sp)));
            let content = document.querySelector("nav .container .main .products " + tagname);
            content.innerHTML = `<div class="product-main product-iphone">
                             ${str}
                         </div>`;
            console.log(content);
        });
    }
    //!Chi tiết sản phẩm
    productDetail(san_pham, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Sim */
            let sim = "";
            if (san_pham.Sim == "") {
                sim += ``;
            }
            else {
                sim += `<tr>
                      <td>SIM:</td>
                      <td colspan="2">${san_pham.Sim}</td>
                  </tr>`;
            }
            /* Card */
            let card = "";
            if (san_pham.CardDoHoa == null) {
                card += ``;
            }
            else {
                card += `<tr>
                      <td>Card Đồ Họa:</td>
                      <td colspan="2">${san_pham.CardDoHoa}</td>
                  </tr>`;
            }
            let str = `<div class="pro-orther">
                  <a href="./index.html"><ion-icon name="arrow-back-outline"></ion-icon>Mua sản phẩm khác</a>
              </div>
              <div class="box-pro">
                  <div class="product_detail">
                      <div class="images">
                          <div class="product_detail-image">
                              <img class="img-fearture" src="./public/assets/${san_pham.Hinh}" alt="">
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
                              <h4>${san_pham.Name}</h4>
                          </a>
                          <div class="price-list">
                              <div class="price-main">
                                  <span class="price-cut">${Number(san_pham.Price).toLocaleString("Vi")} VNĐ</span>
                              </div>
                              <p>Giảm Giá ${san_pham.Price_Sale}</p>
                          </div>
                          <div class="capacity">
                              <button class="g">${san_pham.Dia}</button>
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
                                              <td colspan="2">${san_pham.Ram}</td>
                                          </tr>
                                          <tr>
                                              <td>CPU:</td>
                                              <td colspan="2">${san_pham.Cpu}</td>
                                          </tr>
                                          <tr>
                                              <td>Công Nghệ Màn Hình:</td>
                                              <td colspan="2">${san_pham.CongNgheManHinh}"</td>
                                          </tr>
                                          ${card}
                                          ${sim}
                                          <tr>
                                              <td>Pin:</td>
                                              <td colspan="2">${san_pham.Pin}</td>
                                          </tr>
                                          <tr>
                                              <td>Bluetooth:</td>
                                              <td colspan="2">${san_pham.Bluetooth}</td>
                                          </tr>
                                          <tr>
                                              <td>Cổng kết nối:</td>
                                              <td colspan="2">${san_pham.CongKetNoi}</td>
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
            // spcungloai(san_pham.Id_Kind, 4);
        });
    }
    //!Hiện sản phẩm bên Admin
    productAD(san_pham, tagname) {
        let str = ``;
        san_pham.forEach((sp) => {
            str += tbody_table(sp);
        });
        let content = document.querySelector(tagname);
        content.innerHTML = `
      <table id="example" class="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Giảm Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody id="tbody">
          ${str}
        </tbody>
      </table>`;
    }
    //!Add sản phẩm
    addProductAD(url, dataCate, dataKind, dataProperties, tagname) {
        let option_dm = ``;
        dataCate.forEach((dm) => {
            let { Id, Name } = dm;
            option_dm += `<option value="${Id}" id="danh_muc_${Id}">${Name}</option>`;
        });
        let loaiOptions = "";
        dataKind.forEach((loai) => {
            loaiOptions += `<option value="${loai.Id}" id="loai_${loai.Id}">${loai.Name}</option>`;
        });
        //Display None Danh Sách Sản Phẩm
        const closeDs_Sp = document.getElementById("ds_sanpham");
        closeDs_Sp.style.display = "none";
        // Create form element
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm = document.createElement("button");
        closeForm.setAttribute("type", "button");
        closeForm.classList.add("btn", "btn_closeForm");
        closeForm.textContent = "Đóng";
        // Create div Mã Sản Phẩm
        const groupInput1 = document.createElement("div");
        groupInput1.classList.add("group_input");
        const labelMaSp = document.createElement("label");
        labelMaSp.setAttribute("for", "ma_sp");
        labelMaSp.textContent = "Mã Sản Phẩm";
        const inputMaSp = document.createElement("input");
        inputMaSp.setAttribute("type", "text");
        inputMaSp.setAttribute("placeholder", "Mã Sản Phẩm");
        inputMaSp.setAttribute("name", "ma_sp");
        inputMaSp.setAttribute("id", "id_sp");
        const divError1 = document.createElement("div");
        divError1.classList.add("id_sp-error");
        groupInput1.append(labelMaSp, inputMaSp, divError1);
        // Create div Danh mục
        const groupInput2 = document.createElement("div");
        groupInput2.classList.add("group_input");
        const labelDanhMuc = document.createElement("label");
        labelDanhMuc.setAttribute("for", "danh_muc_select");
        labelDanhMuc.textContent = "Danh mục";
        const selectDanhMuc = document.createElement("select");
        selectDanhMuc.setAttribute("name", "danh_muc");
        selectDanhMuc.setAttribute("id", "danh_muc_select");
        selectDanhMuc.innerHTML = option_dm;
        // You need to populate options for danh_muc_select here
        const divError2 = document.createElement("div");
        divError2.classList.add("error");
        groupInput2.append(labelDanhMuc, selectDanhMuc, divError2);
        // Create div Loại
        const groupInput3 = document.createElement("div");
        groupInput3.classList.add("group_input");
        const labelLoai = document.createElement("label");
        labelLoai.setAttribute("for", "loai_select");
        labelLoai.textContent = "Loại";
        const selectLoai = document.createElement("select");
        selectLoai.setAttribute("name", "loai");
        selectLoai.setAttribute("id", "loai_select");
        selectLoai.innerHTML = loaiOptions;
        const divError3 = document.createElement("div");
        divError3.classList.add("error");
        groupInput3.append(labelLoai, selectLoai, divError3);
        // Create div Tên Sản Phẩm
        const groupInput4 = document.createElement("div");
        groupInput4.classList.add("group_input");
        const labelTenSp = document.createElement("label");
        labelTenSp.setAttribute("for", "ten_sp");
        labelTenSp.textContent = "Tên Sản Phẩm";
        const inputTenSp = document.createElement("input");
        inputTenSp.setAttribute("type", "text");
        inputTenSp.setAttribute("placeholder", "Tên Sản Phẩm");
        inputTenSp.setAttribute("name", "ten_sp");
        inputTenSp.setAttribute("id", "ten_sp");
        const divError4 = document.createElement("div");
        divError4.classList.add("ten_sp-error");
        groupInput4.append(labelTenSp, inputTenSp, divError4);
        // Create div Giá Sản Phẩm
        const groupInput5 = document.createElement("div");
        groupInput5.classList.add("group_input");
        const labelGiaSp = document.createElement("label");
        labelGiaSp.setAttribute("for", "gia_sp");
        labelGiaSp.textContent = "Giá Sản Phẩm";
        const inputGiaSp = document.createElement("input");
        inputGiaSp.setAttribute("type", "text");
        inputGiaSp.setAttribute("placeholder", "Giá Sản Phẩm");
        inputGiaSp.setAttribute("name", "gia_sp");
        inputGiaSp.setAttribute("id", "gia_sp");
        const divError5 = document.createElement("div");
        divError5.classList.add("gia_sp-error");
        groupInput5.append(labelGiaSp, inputGiaSp, divError5);
        // Create div Giảm Giá
        const groupInput6 = document.createElement("div");
        groupInput6.classList.add("group_input");
        const labelGiamGia = document.createElement("label");
        labelGiamGia.setAttribute("for", "giam_gia");
        labelGiamGia.textContent = "Giảm Giá";
        const inputGiamGia = document.createElement("input");
        inputGiamGia.setAttribute("type", "text");
        inputGiamGia.setAttribute("placeholder", "Giảm Giá");
        inputGiamGia.setAttribute("name", "giam_gia");
        inputGiamGia.setAttribute("id", "giam_gia");
        const divError6 = document.createElement("div");
        divError6.classList.add("giam_gia-error");
        groupInput6.append(labelGiamGia, inputGiamGia, divError6);
        // Create div Hình Ảnh
        const groupInput7 = document.createElement("div");
        groupInput7.classList.add("group_input");
        const labelHinh = document.createElement("label");
        labelHinh.setAttribute("for", "hinh");
        labelHinh.textContent = "Hình Ảnh";
        const inputHinh = document.createElement("input");
        inputHinh.setAttribute("type", "text");
        inputHinh.setAttribute("placeholder", "Hình Ảnh");
        inputHinh.setAttribute("name", "hinh");
        inputHinh.setAttribute("id", "hinh");
        const divError7 = document.createElement("div");
        divError7.classList.add("hinh-error");
        groupInput7.append(labelHinh, inputHinh, divError7);
        // Create div Ngày
        const groupInput8 = document.createElement("div");
        groupInput8.classList.add("group_input");
        const labelNgay = document.createElement("label");
        labelNgay.setAttribute("for", "ngay");
        labelNgay.textContent = "Ngày";
        const inputNgay = document.createElement("input");
        inputNgay.setAttribute("type", "date");
        inputNgay.setAttribute("placeholder", "Ngày");
        inputNgay.setAttribute("name", "ngay");
        inputNgay.setAttribute("id", "ngay");
        const divError8 = document.createElement("div");
        divError8.classList.add("ngay-error");
        groupInput8.append(labelNgay, inputNgay, divError8);
        // Create div Màu Sắc
        const groupInput9 = document.createElement("div");
        groupInput9.classList.add("group_input");
        const labelMauSac = document.createElement("label");
        labelMauSac.setAttribute("for", "mau_sac");
        labelMauSac.textContent = "Máu Sắc";
        const inputMauSac = document.createElement("input");
        inputMauSac.setAttribute("type", "text");
        inputMauSac.setAttribute("placeholder", "Màu Sắc");
        inputMauSac.setAttribute("name", "mau_sac");
        inputMauSac.setAttribute("id", "mau_sac");
        const divError9 = document.createElement("div");
        divError9.classList.add("mau_sac-error");
        groupInput9.append(labelMauSac, inputMauSac, divError9);
        //Create div Xem
        const groupInput10 = document.createElement("div");
        groupInput10.classList.add("group_input");
        const labelXem = document.createElement("label");
        labelXem.setAttribute("for", "xem");
        labelXem.textContent = "Xem";
        const inputXem = document.createElement("input");
        inputXem.setAttribute("type", "number");
        inputXem.setAttribute("placeholder", "Xem");
        inputXem.setAttribute("name", "xem");
        inputXem.setAttribute("id", "xem");
        const divError10 = document.createElement("div");
        divError10.classList.add("xem-error");
        groupInput10.append(labelXem, inputXem, divError10);
        // Create div Hot
        const groupInput11 = document.createElement("div");
        groupInput11.classList.add("group_input");
        const labelHot = document.createElement("label");
        labelHot.setAttribute("for", "hot");
        labelHot.textContent = "Hot";
        const selectHot = document.createElement("input");
        selectHot.setAttribute("type", "text");
        selectHot.setAttribute("placeholder", "Hot");
        selectHot.setAttribute("name", "hot");
        selectHot.setAttribute("id", "hot_select");
        const divError11 = document.createElement("div");
        divError11.classList.add("h0t_error");
        groupInput11.append(labelHot, selectHot, divError11);
        //Create div Ẩn hiện
        const groupInput12 = document.createElement("div");
        groupInput12.classList.add("group_input");
        const labelAnHien = document.createElement("label");
        labelAnHien.setAttribute("for", "anhien");
        labelAnHien.textContent = "Ẩn Hiện";
        const inputAnHien = document.createElement("input");
        inputAnHien.setAttribute("type", "number");
        inputAnHien.setAttribute("placeholder", "Ẩn Hiện");
        inputAnHien.setAttribute("name", "anhien");
        inputAnHien.setAttribute("id", "anhien");
        const divError12 = document.createElement("div");
        divError12.classList.add("anhien-error");
        groupInput12.append(labelAnHien, inputAnHien, divError12);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.classList.add("btnAdd");
        addButton.textContent = "Thêm";
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm, groupInput1, groupInput2, groupInput3, groupInput4, groupInput5, groupInput6, groupInput7, groupInput8, groupInput9, groupInput10, groupInput11, groupInput12, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.querySelector(tagname);
        if (formContainer) {
            formContainer.appendChild(form);
        }
        let btnAdd = document.querySelector(".btnAdd");
        btnAdd.addEventListener("click", (event) => {
            event.preventDefault();
            let id = document.getElementById("id_sp").value;
            let id_danh_muc = document.getElementById("danh_muc_select").value;
            let id_loai = document.getElementById("loai_select").value;
            let ten_sp = document.getElementById("ten_sp")
                .value;
            let gia_sp = document.getElementById("gia_sp")
                .value;
            let giam_gia = document.getElementById("giam_gia")
                .value;
            let hinh = document.getElementById("hinh").value;
            let ngay = document.getElementById("ngay").value;
            let mau_sac = document.getElementById("mau_sac")
                .value;
            let xem = document.getElementById("xem").value;
            let hot = document.getElementById("hot_select")
                .value;
            let an_hien = document.getElementById("anhien")
                .value;
            let data = new ProductModel(Number(id), Number(id_danh_muc), Number(id_loai), ten_sp, Number(gia_sp), Number(giam_gia), hinh, ngay, mau_sac, Number(xem), Number(hot), Number(an_hien));
            if (!this.validateForm_SP(data)) {
                return;
            }
            data.addProduct(url);
        });
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            if (formContainer) {
                formContainer.removeChild(form);
            }
            closeDs_Sp.style.display = "block";
        });
    }
    //!Update Product Admin
    //!Add sản phẩm
    updateProductAD(url, data, dataCate, dataKind, dataProperties, tagname) {
        let selectDM = dataCate.find((dm) => dm.Id == data.Id_Cate);
        let option_dm = ``;
        if (selectDM) {
            option_dm += `<option value="${selectDM.Id}" id="danh_muc_${selectDM.Id}">${selectDM.Name}</option>`;
            dataCate.forEach((dm) => {
                if (dm.Id !== data.Id_Cate) {
                    let { Id, Name } = dm;
                    option_dm += `<option value="${Id}" id="danh_muc_${Id}">${Name}</option>`;
                }
            });
        }
        let selectL = dataKind.find((loai) => loai.Id == data.Id_Kind);
        let loaiOptions = "";
        if (selectL) {
            loaiOptions += `<option value="${selectL.Id}" id="loai_${selectL.Id}">${selectL.Name}</option>`;
            dataKind.forEach((loai) => {
                if (loai.Id !== data.Id_Kind) {
                    let { Id, Name } = loai;
                    loaiOptions += `<option value="${Id}" id="loai_${Id}">${Name}</option>`;
                }
            });
        }
        //Display None Danh Sách Sản Phẩm
        const closeDs_Sp = document.getElementById("ds_sanpham");
        closeDs_Sp.style.display = "none";
        // Create form element
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm = document.createElement("button");
        closeForm.setAttribute("type", "button");
        closeForm.classList.add("btn", "btn_closeForm");
        closeForm.textContent = "Đóng";
        // Create div Mã Sản Phẩm
        const groupInput1 = document.createElement("div");
        groupInput1.classList.add("group_input");
        const labelMaSp = document.createElement("label");
        labelMaSp.setAttribute("for", "ma_sp");
        labelMaSp.textContent = "Mã Sản Phẩm";
        const inputMaSp = document.createElement("input");
        inputMaSp.setAttribute("type", "text");
        inputMaSp.setAttribute("placeholder", "Mã Sản Phẩm");
        inputMaSp.setAttribute("name", "ma_sp");
        inputMaSp.setAttribute("id", "id_sp");
        inputMaSp.setAttribute("readonly", "true");
        inputMaSp.setAttribute("value", `${data.Id}`);
        const divError1 = document.createElement("div");
        divError1.classList.add("id_sp-error");
        groupInput1.append(labelMaSp, inputMaSp, divError1);
        // Create div Danh mục
        const groupInput2 = document.createElement("div");
        groupInput2.classList.add("group_input");
        const labelDanhMuc = document.createElement("label");
        labelDanhMuc.setAttribute("for", "danh_muc_select");
        labelDanhMuc.textContent = "Danh mục";
        const selectDanhMuc = document.createElement("select");
        selectDanhMuc.setAttribute("name", "danh_muc");
        selectDanhMuc.setAttribute("id", "danh_muc_select");
        selectDanhMuc.innerHTML = option_dm;
        // You need to populate options for danh_muc_select here
        const divError2 = document.createElement("div");
        divError2.classList.add("error");
        groupInput2.append(labelDanhMuc, selectDanhMuc, divError2);
        // Create div Loại
        const groupInput3 = document.createElement("div");
        groupInput3.classList.add("group_input");
        const labelLoai = document.createElement("label");
        labelLoai.setAttribute("for", "loai_select");
        labelLoai.textContent = "Loại";
        const selectLoai = document.createElement("select");
        selectLoai.setAttribute("name", "loai");
        selectLoai.setAttribute("id", "loai_select");
        selectLoai.innerHTML = loaiOptions;
        const divError3 = document.createElement("div");
        divError3.classList.add("error");
        groupInput3.append(labelLoai, selectLoai, divError3);
        // Create div Tên Sản Phẩm
        const groupInput4 = document.createElement("div");
        groupInput4.classList.add("group_input");
        const labelTenSp = document.createElement("label");
        labelTenSp.setAttribute("for", "ten_sp");
        labelTenSp.textContent = "Tên Sản Phẩm";
        const inputTenSp = document.createElement("input");
        inputTenSp.setAttribute("type", "text");
        inputTenSp.setAttribute("placeholder", "Tên Sản Phẩm");
        inputTenSp.setAttribute("name", "ten_sp");
        inputTenSp.setAttribute("id", "ten_sp");
        inputTenSp.setAttribute("value", data.Name);
        const divError4 = document.createElement("div");
        divError4.classList.add("ten_sp-error");
        groupInput4.append(labelTenSp, inputTenSp, divError4);
        // Create div Giá Sản Phẩm
        const groupInput5 = document.createElement("div");
        groupInput5.classList.add("group_input");
        const labelGiaSp = document.createElement("label");
        labelGiaSp.setAttribute("for", "gia_sp");
        labelGiaSp.textContent = "Giá Sản Phẩm";
        const inputGiaSp = document.createElement("input");
        inputGiaSp.setAttribute("type", "text");
        inputGiaSp.setAttribute("placeholder", "Giá Sản Phẩm");
        inputGiaSp.setAttribute("name", "gia_sp");
        inputGiaSp.setAttribute("id", "gia_sp");
        inputGiaSp.setAttribute("value", `${data.Price}`);
        const divError5 = document.createElement("div");
        divError5.classList.add("gia_sp-error");
        groupInput5.append(labelGiaSp, inputGiaSp, divError5);
        // Create div Giảm Giá
        const groupInput6 = document.createElement("div");
        groupInput6.classList.add("group_input");
        const labelGiamGia = document.createElement("label");
        labelGiamGia.setAttribute("for", "giam_gia");
        labelGiamGia.textContent = "Giảm Giá";
        const inputGiamGia = document.createElement("input");
        inputGiamGia.setAttribute("type", "text");
        inputGiamGia.setAttribute("placeholder", "Giảm Giá");
        inputGiamGia.setAttribute("name", "giam_gia");
        inputGiamGia.setAttribute("id", "giam_gia");
        inputGiamGia.setAttribute("value", `${data.Price_Sale}`);
        const divError6 = document.createElement("div");
        divError6.classList.add("giam_gia-error");
        groupInput6.append(labelGiamGia, inputGiamGia, divError6);
        // Create div Hình Ảnh
        const groupInput7 = document.createElement("div");
        groupInput7.classList.add("group_input");
        const labelHinh = document.createElement("label");
        labelHinh.setAttribute("for", "hinh");
        labelHinh.textContent = "Hình Ảnh";
        const inputHinh = document.createElement("input");
        inputHinh.setAttribute("type", "text");
        inputHinh.setAttribute("placeholder", "Hình Ảnh");
        inputHinh.setAttribute("name", "hinh");
        inputHinh.setAttribute("id", "hinh");
        inputHinh.setAttribute("value", `${data.Hinh}`);
        const divError7 = document.createElement("div");
        divError7.classList.add("hinh-error");
        groupInput7.append(labelHinh, inputHinh, divError7);
        // Create div Ngày
        const groupInput8 = document.createElement("div");
        groupInput8.classList.add("group_input");
        const labelNgay = document.createElement("label");
        labelNgay.setAttribute("for", "ngay");
        labelNgay.textContent = "Ngày";
        const inputNgay = document.createElement("input");
        inputNgay.setAttribute("type", "date");
        inputNgay.setAttribute("placeholder", "Ngày");
        inputNgay.setAttribute("name", "ngay");
        inputNgay.setAttribute("id", "ngay");
        inputNgay.setAttribute("value", `${data.Ngay}`);
        const divError8 = document.createElement("div");
        divError8.classList.add("ngay-error");
        groupInput8.append(labelNgay, inputNgay, divError8);
        // Create div Màu Sắc
        const groupInput9 = document.createElement("div");
        groupInput9.classList.add("group_input");
        const labelMauSac = document.createElement("label");
        labelMauSac.setAttribute("for", "mau_sac");
        labelMauSac.textContent = "Máu Sắc";
        const inputMauSac = document.createElement("input");
        inputMauSac.setAttribute("type", "text");
        inputMauSac.setAttribute("placeholder", "Màu Sắc");
        inputMauSac.setAttribute("name", "mau_sac");
        inputMauSac.setAttribute("id", "mau_sac");
        inputMauSac.setAttribute("value", `${data.MauSac}`);
        const divError9 = document.createElement("div");
        divError9.classList.add("mau_sac-error");
        groupInput9.append(labelMauSac, inputMauSac, divError9);
        //Create div Xem
        const groupInput10 = document.createElement("div");
        groupInput10.classList.add("group_input");
        const labelXem = document.createElement("label");
        labelXem.setAttribute("for", "xem");
        labelXem.textContent = "Xem";
        const inputXem = document.createElement("input");
        inputXem.setAttribute("type", "number");
        inputXem.setAttribute("placeholder", "Xem");
        inputXem.setAttribute("name", "xem");
        inputXem.setAttribute("id", "xem");
        inputXem.setAttribute("value", `${data.Xem}`);
        const divError10 = document.createElement("div");
        divError10.classList.add("xem-error");
        groupInput10.append(labelXem, inputXem, divError10);
        // Create div Hot
        const groupInput11 = document.createElement("div");
        groupInput11.classList.add("group_input");
        const labelHot = document.createElement("label");
        labelHot.setAttribute("for", "hot");
        labelHot.textContent = "Hot";
        const selectHot = document.createElement("input");
        selectHot.setAttribute("type", "text");
        selectHot.setAttribute("placeholder", "Hot");
        selectHot.setAttribute("name", "hot");
        selectHot.setAttribute("id", "hot_select");
        selectHot.setAttribute("value", `${data.Hot}`);
        const divError11 = document.createElement("div");
        divError11.classList.add("error");
        groupInput11.append(labelHot, selectHot, divError11);
        //Create div Ẩn hiện
        const groupInput12 = document.createElement("div");
        groupInput12.classList.add("group_input");
        const labelAnHien = document.createElement("label");
        labelAnHien.setAttribute("for", "anhien");
        labelAnHien.textContent = "Ẩn Hiện";
        const inputAnHien = document.createElement("input");
        inputAnHien.setAttribute("type", "number");
        inputAnHien.setAttribute("placeholder", "Ẩn Hiện");
        inputAnHien.setAttribute("name", "anhien");
        inputAnHien.setAttribute("id", "anhien");
        inputAnHien.setAttribute("value", `${data.AnHien}`);
        const divError12 = document.createElement("div");
        divError12.classList.add("AnHien-error");
        groupInput12.append(labelAnHien, inputAnHien, divError12);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.classList.add("btnAdd");
        addButton.textContent = "Thêm";
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm, groupInput1, groupInput2, groupInput3, groupInput4, groupInput5, groupInput6, groupInput7, groupInput8, groupInput9, groupInput10, groupInput11, groupInput12, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.querySelector(tagname);
        if (formContainer) {
            formContainer.appendChild(form);
        }
        let btnAdd = document.querySelector(".btnAdd");
        btnAdd.addEventListener("click", (event) => {
            event.preventDefault();
            let id_danh_muc = document.getElementById("danh_muc_select").value;
            let id_loai = document.getElementById("loai_select").value;
            let ten_sp = document.getElementById("ten_sp")
                .value;
            let gia_sp = document.getElementById("gia_sp")
                .value;
            let giam_gia = document.getElementById("giam_gia")
                .value;
            let hinh = document.getElementById("hinh").value;
            let ngay = document.getElementById("ngay").value;
            let mau_sac = document.getElementById("mau_sac")
                .value;
            let xem = document.getElementById("xem").value;
            let hot = document.getElementById("hot_select")
                .value;
            let an_hien = document.getElementById("anhien")
                .value;
            if (ten_sp == "") {
                this.displayError_SP("ten_sp", "Tên sản phẩm không được để trống");
                return;
            }
            else {
                this.clearError_SP("ten_sp");
            }
            if (gia_sp == "") {
                this.displayError_SP("gia_sp", "Giá sản phẩm không được để trống");
                return;
            }
            else {
                this.clearError_SP("gia_sp");
            }
            if (hinh == "") {
                this.displayError_SP("hinh", "Hình sản phẩm không được để trống");
                return;
            }
            else {
                this.clearError_SP("hinh");
            }
            data.Id_Cate = Number(id_danh_muc);
            data.Id_Kind = Number(id_loai);
            data.Name = ten_sp;
            data.Price = Number(gia_sp);
            data.Price_Sale = Number(giam_gia);
            data.Hinh = hinh;
            data.Ngay = ngay;
            data.MauSac = mau_sac;
            data.Xem = Number(xem);
            data.Hot = Number(hot);
            data.AnHien = Number(an_hien);
            data.updateProduct(url);
        });
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            if (formContainer) {
                formContainer.removeChild(form);
            }
            closeDs_Sp.style.display = "block";
        });
    }
}
