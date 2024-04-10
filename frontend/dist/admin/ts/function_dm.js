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
var url_dm = "http://localhost:3000/admin/";
//! Table danh sách danh mục
const ds_danh_muc = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url_dm}dm`);
    let danh_muc = (yield res.json());
    let str = ``;
    let tdm = ``;
    danh_muc.forEach((dm) => {
        let { id, ten_danh_muc } = dm;
        str += `<tr>
              <td>${id}</td>
              <td>${ten_danh_muc}</td>
              <td>
                <button onclick="editForm_Dm('${dm.id}')" class="btn btn-update">Sửa</button>
                <button onclick="xoa_dm('${dm.id}')" class="btn btn-delete">Xóa</button>
              </td>
            </tr>`;
    });
    let content = document.querySelector("#ds_danh_muc");
    content.innerHTML = `      
      <table id="example" class="table">
        <thead>
          <tr>
            <th>Mã danh mục</th>
            <th>Tên sản phẩm</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody id="tbody">
          ${str}
        </tbody>
      </table>`;
});
//! Thêm sản phẩm
function createForm_Dm() {
    return __awaiter(this, void 0, void 0, function* () {
        //Display None Danh Sách Sản Phẩm
        const closeDs_Dm = document.getElementById("ds_danh_muc");
        closeDs_Dm.style.display = "none";
        // Create form element
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm_Dm = document.createElement("button");
        closeForm_Dm.setAttribute("type", "button");
        closeForm_Dm.setAttribute("onclick", "closeForm_Dm()");
        closeForm_Dm.classList.add("btn", "btn_closeForm");
        closeForm_Dm.textContent = "Đóng";
        // Create div Mã Danh Mục
        const groupInput1 = document.createElement("div");
        groupInput1.classList.add("group_input");
        const labelMaDm = document.createElement("label");
        labelMaDm.setAttribute("for", "ma_dm");
        labelMaDm.textContent = "Mã Danh Mục";
        const inputMaDm = document.createElement("input");
        inputMaDm.setAttribute("type", "text");
        inputMaDm.setAttribute("placeholder", "Mã Danh Mục");
        inputMaDm.setAttribute("name", "ma_dm");
        inputMaDm.setAttribute("id", "ma_dm");
        const divError1 = document.createElement("div");
        divError1.classList.add("ma_dm-error");
        groupInput1.append(labelMaDm, inputMaDm, divError1);
        // Create div Tên Danh Mục
        const groupInput2 = document.createElement("div");
        groupInput2.classList.add("group_input");
        const labelTenDm = document.createElement("label");
        labelTenDm.setAttribute("for", "ten_dm");
        labelTenDm.textContent = "Tên Danh Mục";
        const inputTenDm = document.createElement("input");
        inputTenDm.setAttribute("type", "text");
        inputTenDm.setAttribute("placeholder", "Tên Danh Mục");
        inputTenDm.setAttribute("name", "ten_dm");
        inputTenDm.setAttribute("id", "ten_dm");
        const divError2 = document.createElement("div");
        divError2.classList.add("ten_dm-error");
        groupInput2.append(labelTenDm, inputTenDm, divError2);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.textContent = "Thêm";
        addButton.setAttribute("onclick", "them_dm()");
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm_Dm, groupInput2, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.getElementById("add_danh_muc");
        if (formContainer) {
            formContainer.appendChild(form);
        }
    });
}
//!Close Form
const closeForm_Dm = () => {
    const form = document.querySelector("form");
    form.remove();
    const closeDs_Dm = document.getElementById("ds_danh_muc");
    closeDs_Dm.style.display = "block";
};
//!Check Form
const validateForm_Dm = (data) => {
    let isValid = true;
    if (!data.id) {
        displayError_Dm("ma_dm", "Vui lòng nhập ID danh mục.");
        isValid = false;
    }
    else {
        clearError_Dm("ma_dm");
    }
    if (!data.ten_danh_muc) {
        displayError_Dm("ten_dm", "Vui lòng nhập tên danh mục.");
        isValid = false;
    }
    else {
        clearError_Dm("ten_dm");
    }
    return isValid;
};
//! Xu ly hien thi thong bao
const displayError_Dm = (elementId, message) => {
    const errorElement = document.querySelector(`.${elementId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
};
//! Xu ly an thong bao
const clearError_Dm = (elementId) => {
    const errorElement = document.querySelector(`.${elementId}-error`);
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
};
//! Xu ly them san pham
const them_dm = () => {
    let id = document.getElementById("ma_dm").value;
    let ten_dm = document.getElementById("ten_dm").value;
    let data = {
        id: Number(id),
        ten_danh_muc: ten_dm,
    };
    if (!validateForm_Dm(data)) {
        return;
    }
    let opt = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    };
    fetch(`${url_dm}dm`, opt)
        .then((res) => res.json())
        .then(function (res) {
        console.log(res);
    })
        .catch(function (rej) {
        console.log(rej);
    });
};
//! Sửa danh mục
function editForm_Dm(id_dm) {
    return __awaiter(this, void 0, void 0, function* () {
        //? Fetch Danh Mục
        let res_sp = yield fetch(url_dm + "dm/" + id_dm);
        let danh_muc = (yield res_sp.json());
        //Display None Danh Sách Sản Phẩm
        const closeDs_Dm = document.getElementById("ds_danh_muc");
        closeDs_Dm.style.display = "none";
        // Create form element
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm_Dm = document.createElement("button");
        closeForm_Dm.setAttribute("type", "button");
        closeForm_Dm.setAttribute("onclick", "closeForm_Dm()");
        closeForm_Dm.classList.add("btn", "btn_closeForm");
        closeForm_Dm.textContent = "Đóng";
        // Create div Mã Danh Mục
        const groupInput1 = document.createElement("div");
        groupInput1.classList.add("group_input");
        const labelMaDm = document.createElement("label");
        labelMaDm.setAttribute("for", "ma_dm");
        labelMaDm.textContent = "Mã Danh Mục";
        const inputMaDm = document.createElement("input");
        inputMaDm.setAttribute("type", "text");
        inputMaDm.setAttribute("placeholder", "Mã Danh Mục");
        inputMaDm.setAttribute("name", "ma_dm");
        inputMaDm.setAttribute("id", "ma_dm");
        inputMaDm.setAttribute("readonly", "true");
        inputMaDm.value = `${danh_muc.id}`;
        const divError1 = document.createElement("div");
        divError1.classList.add("ma_dm-error");
        groupInput1.append(labelMaDm, inputMaDm, divError1);
        // Create div Tên Danh Mục
        const groupInput2 = document.createElement("div");
        groupInput2.classList.add("group_input");
        const labelTenDm = document.createElement("label");
        labelTenDm.setAttribute("for", "ten_dm");
        labelTenDm.textContent = "Tên Danh Mục";
        const inputTenDm = document.createElement("input");
        inputTenDm.setAttribute("type", "text");
        inputTenDm.setAttribute("placeholder", "Tên Danh Mục");
        inputTenDm.setAttribute("name", "ten_dm");
        inputTenDm.setAttribute("id", "ten_dm");
        inputTenDm.value = danh_muc.ten_danh_muc;
        const divError2 = document.createElement("div");
        divError2.classList.add("ten_dm-error");
        groupInput2.append(labelTenDm, inputTenDm, divError2);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn");
        addButton.textContent = "Cập Nhật";
        addButton.setAttribute("onclick", "update_dm()");
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm_Dm, groupInput1, groupInput2, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.getElementById("add_danh_muc");
        if (formContainer) {
            formContainer.appendChild(form);
        }
    });
}
//! Sửa sản phẩm
const update_dm = () => {
    let id = document.getElementById("ma_dm").value;
    let ten_dm = document.getElementById("ten_dm").value;
    let data = {
        id: Number(id),
        ten_danh_muc: ten_dm,
    };
    if (!validateForm_Dm(data)) {
        return;
    }
    let opt = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(`${url_dm}dm/${id}`, opt)
        .then((res) => res.json())
        .then((sp) => {
        location.href = "ds_danhmuc.html";
    });
};
//! Xóa sản phẩm
const xoa_dm = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //? Kiểm tra xem người dùng muốn xóa hay không
    if (!confirm("Bạn có chắc muốn xóa danh mục")) {
        return;
    }
    yield fetch(`${url_dm}dm/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((sp) => {
        confirm("Danh mục đã được xóa!");
    });
});
window.addEventListener("load", () => {
    const btnCreateForm = document.querySelector(".btn_add");
    const btnUpdate = document.querySelector(".btn-update");
    const btnDelete = document.querySelector(".btn-delete");
    btnCreateForm.addEventListener("click", createForm_Dm);
});
function loadDanhMuc() {
    ds_danh_muc();
}
loadDanhMuc();
