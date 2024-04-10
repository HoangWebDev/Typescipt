"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var url_sp = "http://localhost:3000/admin/";
//! Table danh sách sản phẩm
const dssan_pham = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url_sp}sp`);
    let products = (yield res.json());
    let str = ``;
    let tdm = ``;
    products.forEach((sp) => {
        str += tbody_table(sp);
    });
    let content = document.querySelector("#ds_sanpham");
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
});
const tbody_table = (sp) => ` <tr>
      <td>${sp.id}</td>
      <td class='img-item'><img src="../public/assets${sp.hinh}" alt="" /></td>
      <td>
        <h4>${sp.ten_sp}</h4>
      </td>
      <td>
        <span class="price">${Number(sp.gia).toLocaleString("Vi")} VNĐ</span>
      </td>
      <td>${sp.giam_gia}</td>      
      <td>
      <button onclick="editForm('${sp.id}')" class="btn btn-update">Sửa</button>
      <button onclick="xoa_sp('${sp.id}')" class="btn btn-delete">Xóa</button>
      </td>
    </tr>`;
//! Thêm sản phẩm
function createForm() {
    return __awaiter(this, void 0, void 0, function* () {
        //? Fetch danh mục
        let res_dm = yield fetch(url_sp + "dm");
        let danh_muc = (yield res_dm.json());
        let option_dm = ``;
        danh_muc.forEach((dm) => {
            let { id, ten_danh_muc } = dm;
            option_dm += `<option value="${id}" id="danh_muc_${id}">${ten_danh_muc}</option>`;
        });
        //? Fetch loại
        let res_loai = yield fetch(url_sp + "loai");
        let loai = (yield res_loai.json());
        let loaiOptions = "";
        loai.forEach((loai) => {
            loaiOptions += `<option value="${loai.id}" id="loai_${loai.id}">${loai.ten_loai}</option>`;
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
        closeForm.setAttribute("onclick", "closeForm()");
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
        // Create div Hot
        const groupInput10 = document.createElement("div");
        groupInput10.classList.add("group_input");
        const labelHot = document.createElement("label");
        labelHot.setAttribute("for", "hot");
        labelHot.textContent = "Hot";
        const selectHot = document.createElement("select");
        selectHot.setAttribute("type", "text");
        selectHot.setAttribute("placeholder", "Hot");
        selectHot.setAttribute("name", "hot");
        selectHot.setAttribute("id", "hot_select");
        const optionHot_0 = document.createElement("option");
        optionHot_0.value = "0";
        optionHot_0.setAttribute("id", "hot_0");
        optionHot_0.textContent = "Không";
        const optionHot_1 = document.createElement("option");
        optionHot_1.value = "1";
        optionHot_1.setAttribute("id", "hot_1");
        optionHot_1.textContent = "Có";
        selectHot.append(optionHot_1, optionHot_0);
        const divError10 = document.createElement("div");
        divError10.classList.add("error");
        groupInput10.append(labelHot, selectHot, divError10);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.textContent = "Thêm";
        addButton.setAttribute("onclick", "them_sp()");
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm, groupInput1, groupInput2, groupInput3, groupInput4, groupInput5, groupInput6, groupInput7, groupInput8, groupInput9, groupInput10, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.getElementById("add_product");
        if (formContainer) {
            formContainer.appendChild(form);
        }
    });
}
//!Close Form
const closeForm = () => {
    const form = document.querySelector("form");
    form.remove();
    const closeDs_Sp = document.getElementById("ds_sanpham");
    closeDs_Sp.style.display = "block";
};
//!Check Form
const validateForm_SP = (data) => {
    let isValid = true;
    if (!data.id) {
        displayError_SP("id_sp", "Vui lòng nhập ID sản phẩm.");
        isValid = false;
    }
    else {
        clearError_SP("id_sp");
    }
    if (!data.ten_sp) {
        displayError_SP("ten_sp", "Vui lòng nhập tên sản phẩm.");
        isValid = false;
    }
    else {
        clearError_SP("ten_sp");
    }
    if (!data.gia) {
        displayError_SP("gia_sp", "Vui lòng nhập giá sản phẩm.");
        isValid = false;
    }
    else if (data.gia < 0) {
        displayError_SP("gia_sp", "Giá sản phẩm phải lớn hơn 0.");
        isValid = false;
    }
    else {
        clearError_SP("gia_sp");
    }
    if (data.giam_gia > 100) {
        displayError_SP("giam_gia", "Mức giảm giá phải dưới 100%.");
        isValid = false;
    }
    else {
        clearError_SP("giam_gia");
    }
    if (!data.hinh) {
        displayError_SP("hinh", "Vui lòng thêm hình ảnh");
    }
    else {
        clearError_SP("hinh");
    }
    return isValid;
};
//! Xu ly hien thi thong bao
const displayError_SP = (elementId, message) => {
    const errorElement = document.querySelector(`.${elementId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
};
//! Xu ly an thong bao
const clearError_SP = (elementId) => {
    const errorElement = document.querySelector(`.${elementId}-error`);
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
};
//! Xu ly them san pham
const them_sp = () => {
    let id = document.getElementById("id_sp").value;
    let danh_muc = document.getElementById("danh_muc_select").value;
    let loai = document.getElementById("loai_select")
        .value;
    let ten_sp = document.getElementById("ten_sp").value;
    let gia_sp = document.getElementById("gia_sp").value;
    let giam_gia = document.getElementById("giam_gia")
        .value;
    let hinh = document.getElementById("hinh").value;
    let ngay = document.getElementById("ngay").value;
    let mau_sac = document.getElementById("mau_sac").value;
    let hot = document.getElementById("hot_select").value;
    let data = {
        id: id,
        id_danh_muc: Number(danh_muc),
        id_loai: loai,
        ten_sp: ten_sp,
        gia: Number(gia_sp),
        giam_gia: Number(giam_gia),
        hinh: hinh,
        ngay: ngay,
        mau_sac: mau_sac,
        hot: Number(hot),
    };
    if (!validateForm_SP(data)) {
        return;
    }
    let opt = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    };
    fetch(`${url_sp}sp`, opt)
        .then((res) => res.json())
        .then(function (res) {
        console.log(res);
    })
        .catch(function (rej) {
        console.log(rej);
    });
};
//! Sửa sản phẩm
function editForm(id_sp) {
    return __awaiter(this, void 0, void 0, function* () {
        //? Fetch sản phẩm
        let res_sp = yield fetch(url_sp + "sp/" + id_sp);
        let san_pham = (yield res_sp.json());
        //? Fetch danh mục
        let res_dm = yield fetch(url_sp + "dm");
        let danh_muc = (yield res_dm.json());
        //* Tìm ID danh mục dựa trên sản phẩm
        let select_dm = danh_muc.find((dm) => dm.id == san_pham.id_danh_muc); //* Lấy ra 1 danh mục ép về Type Danh_Muc_AD (Ko phải mảng)
        let option_dm = ``;
        if (select_dm) {
            option_dm += `<option value="${select_dm.id}" id="danh_muc_${select_dm.id}">${select_dm.ten_danh_muc}</option>`;
            danh_muc.forEach((dm) => {
                if (dm.id !== select_dm.id) {
                    option_dm += `<option value="${dm.id}" id="danh_muc_${dm.id}">${dm.ten_danh_muc}</option>`;
                }
            });
        }
        //? Fetch loại
        let res_loai = yield fetch(url_sp + "loai");
        let loai = (yield res_loai.json());
        //* Tìm ID loại dựa trên sản phẩm
        let select_loai = loai.find((loai) => loai.id == san_pham.id_loai); //* Lấy ra 1 loại ép về Type Loai_AD (Ko phải mảng)
        let option_loai = ``;
        if (select_loai) {
            option_loai += `<option value="${select_loai.id}" id="danh_muc_${select_loai.id}">${select_loai.ten_loai}</option>`;
            loai.forEach((loai) => {
                if (loai.id !== select_loai.id) {
                    option_loai += `<option value="${loai.id}" id="danh_muc_${loai.id}">${loai.ten_loai}</option>`;
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
        closeForm.setAttribute("onclick", "closeForm()");
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
        inputMaSp.value = san_pham.id;
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
        selectLoai.innerHTML = option_loai;
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
        inputTenSp.value = san_pham.ten_sp;
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
        inputGiaSp.setAttribute("type", "number");
        inputGiaSp.setAttribute("placeholder", "Giá Sản Phẩm");
        inputGiaSp.setAttribute("name", "gia_sp");
        inputGiaSp.setAttribute("id", "gia_sp");
        inputGiaSp.value = `${san_pham.gia}`;
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
        inputGiamGia.value = `${san_pham.giam_gia}`;
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
        inputHinh.value = san_pham.hinh;
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
        inputNgay.value = san_pham.ngay;
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
        inputMauSac.value = san_pham.mau_sac;
        const divError9 = document.createElement("div");
        divError9.classList.add("mau_sac-error");
        groupInput9.append(labelMauSac, inputMauSac, divError9);
        // Create div Hot
        const groupInput10 = document.createElement("div");
        groupInput10.classList.add("group_input");
        const labelHot = document.createElement("label");
        labelHot.setAttribute("for", "hot");
        labelHot.textContent = "Hot";
        const selectHot = document.createElement("select");
        selectHot.setAttribute("type", "text");
        selectHot.setAttribute("placeholder", "Hot");
        selectHot.setAttribute("name", "hot");
        selectHot.setAttribute("id", "hot_select");
        selectHot.value = `${san_pham.hot}`;
        const optionHot_0 = document.createElement("option");
        optionHot_0.value = "0";
        optionHot_0.setAttribute("id", "hot_0");
        optionHot_0.textContent = "Không";
        const optionHot_1 = document.createElement("option");
        optionHot_1.value = "1";
        optionHot_1.setAttribute("id", "hot_1");
        optionHot_1.textContent = "Có";
        selectHot.append(optionHot_1, optionHot_0);
        const divError10 = document.createElement("div");
        divError10.classList.add("error");
        groupInput10.append(labelHot, selectHot, divError10);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.textContent = "Cập Nhật";
        addButton.setAttribute("onclick", "update_sp()");
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm, groupInput1, groupInput2, groupInput3, groupInput4, groupInput5, groupInput6, groupInput7, groupInput8, groupInput9, groupInput10, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.getElementById("add_product");
        if (formContainer) {
            formContainer.appendChild(form);
        }
    });
}
//! Sửa sản phẩm
const update_sp = () => {
    let id = document.getElementById("id_sp").value;
    let id_danh_muc = document.getElementById("danh_muc_select").value;
    let loai = document.getElementById("loai_select").value;
    let ten_sp = document.getElementById("ten_sp").value;
    let gia_sp = document.getElementById("gia_sp").value;
    let giam_gia = document.getElementById("giam_gia")
        .value;
    let hinh = document.getElementById("hinh").value;
    let ngay = document.getElementById("ngay").value;
    let mau_sac = document.getElementById("mau_sac").value;
    let hot = document.getElementById("hot_select").value;
    let data = {
        id: id,
        id_danh_muc: Number(id_danh_muc),
        id_loai: loai,
        ten_sp: ten_sp,
        gia: Number(gia_sp),
        giam_gia: Number(giam_gia),
        hinh: hinh,
        ngay: ngay,
        mau_sac: mau_sac,
        hot: Number(hot),
    };
    if (!validateForm_SP(data)) {
        return;
    }
    let opt = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(`${url_sp}sp/${id}`, opt)
        .then((res) => res.json())
        .then((sp) => {
        location.href = "ds_sanpham.html";
    });
};
//! Xóa sản phẩm
const xoa_sp = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //? Kiểm tra xem người dùng muốn xóa hay không
    if (!confirm("Bạn có chắc muốn xóa sản phẩm")) {
        return;
    }
    yield fetch(`${url_sp}sp/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((sp) => {
        confirm("Sản phẩm đã được xóa!");
    });
});
