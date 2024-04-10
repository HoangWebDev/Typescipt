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
export class CategoryView {
    constructor() {
        //!Check Form
        this.validateForm_Dm = (data) => {
            let isValid = true;
            if (!data.Id) {
                this.displayError_Dm("ma_dm", "Vui lòng nhập mã danh mục.");
                isValid = false;
            }
            else {
                this.clearError_Dm("ma_dm");
            }
            if (!data.Name) {
                this.displayError_Dm("ten_dm", "Vui lòng nhập tên danh mục.");
                isValid = false;
            }
            else {
                this.clearError_Dm("ten_dm");
            }
            return isValid;
        };
    }
    showCate(danh_muc, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = '<li><a href="./index.html?page=home">Trang chủ</a></li>';
            danh_muc.map((dm) => {
                return (str += `<li><a href="./danh_muc.html?page=danhmuc&id=${dm.Id}"> ${dm.Name}</a></li>`);
            });
            let content = document.querySelector("#header .container-menu " + tagname);
            content.innerHTML = str;
            let content_mobile = document.querySelector("#header .group .toggle .mobile-menu " + tagname);
            content_mobile.innerHTML = str;
        });
    }
    //!Show Tên Danh Mục
    showName(danh_muc, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let ten_danh_muc = danh_muc[0].Name;
            /* Hiển thị tiêu đề */
            let content = document.querySelector("nav " + tagname);
            content.innerHTML = `<h2>${ten_danh_muc}</h2>`;
        });
    }
    //!Show Cate Admin
    showCateAD(danh_muc, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = ``;
            danh_muc.forEach((dm) => {
                let { Id, Name } = dm;
                str += `<tr>
              <td>${Id}</td>
              <td>${Name}</td>
              <td>
                <a href=?page=category&act=updateCateAD&id=${Id} class="btn btn-update">Sửa</a>
                <a href=?page=category&act=deleteCateAD&id=${Id} class="btn btn-delete">Xóa</a>
              </td>
            </tr>`;
            });
            let content = document.querySelector(tagname);
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
    }
    addCateAD(url, tagname) {
        let dsDanhMuc = document.querySelector("#ds_danh_muc");
        dsDanhMuc.style.display = "none";
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm_Dm = document.createElement("button");
        closeForm_Dm.setAttribute("type", "button");
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
        addButton.classList.add("btn");
        addButton.classList.add("btnAdd");
        addButton.textContent = "Thêm";
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm_Dm, groupInput1, groupInput2, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.querySelector(tagname);
        if (formContainer) {
            formContainer.appendChild(form);
        }
        let btnAdd = document.querySelector(".btnAdd");
        btnAdd.addEventListener("click", (event) => {
            event.preventDefault();
            let id = Number(document.getElementById("ma_dm").value);
            let ten_danh_muc = document.getElementById("ten_dm")
                .value;
            let data = new CategoryModel(id, ten_danh_muc);
            if (!this.validateForm_Dm(data)) {
                return;
            }
            data.addCate(url);
        });
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            if (formContainer) {
                formContainer.removeChild(form);
            }
            dsDanhMuc.style.display = "block";
        });
    }
    updateCateAD(url, data, tagname) {
        let dsDanhMuc = document.querySelector("#ds_danh_muc");
        dsDanhMuc.style.display = "none";
        // Create form element
        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        //Create Close Form
        const closeForm_Dm = document.createElement("button");
        closeForm_Dm.setAttribute("type", "button");
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
        inputMaDm.value = `${data.Id}`;
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
        inputTenDm.value = data.Name;
        const divError2 = document.createElement("div");
        divError2.classList.add("ten_dm-error");
        groupInput2.append(labelTenDm, inputTenDm, divError2);
        // Create buttons
        const groupBtn = document.createElement("div");
        groupBtn.classList.add("group_btn");
        const addButton = document.createElement("button");
        addButton.classList.add("btn");
        addButton.classList.add("btnUpdate");
        addButton.textContent = "Cập Nhật";
        const resetButton = document.createElement("button");
        resetButton.setAttribute("type", "reset");
        resetButton.classList.add("btn", "btntp");
        resetButton.textContent = "Nhập Lại";
        groupBtn.append(addButton, resetButton);
        // Append các element vào form
        form.append(closeForm_Dm, groupInput1, groupInput2, groupBtn);
        // Append Form -> Add_product
        const formContainer = document.querySelector(tagname);
        if (formContainer) {
            formContainer.appendChild(form);
        }
        let btnUpdate = document.querySelector(".btnUpdate");
        btnUpdate.addEventListener("click", (event) => {
            event.preventDefault();
            let ten_danh_muc = document.getElementById("ten_dm")
                .value;
            if (ten_danh_muc == "") {
                this.displayError_Dm("ten_dm", "Vui lòng nhập tên danh mục.");
                return;
            }
            else {
                this.clearError_Dm("ten_dm");
            }
            data.Name = ten_danh_muc;
            data.updateCate(url);
        });
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            if (formContainer) {
                formContainer.removeChild(form);
            }
            dsDanhMuc.style.display = "block";
        });
    }
    //! Xu ly hien thi thong bao
    displayError_Dm(elementId, message) {
        const errorElement = document.querySelector(`.${elementId}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
    }
    //! Xu ly an thong bao
    clearError_Dm(elementId) {
        const errorElement = document.querySelector(`.${elementId}-error`);
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.style.display = "none";
        }
    }
}
