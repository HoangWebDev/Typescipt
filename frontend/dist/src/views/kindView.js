var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import KindModel from "../models/kindModel.js";
export class KindView {
    constructor() {
        //!Check Form
        this.validateForm_Kind = (data) => {
            let isValid = true;
            if (!data.Id) {
                this.displayError_Kind("id_loai", "Vui lòng nhập ID loại.");
                isValid = false;
            }
            else {
                this.clearError_Kind("id_loai");
            }
            if (!data.Name) {
                this.displayError_Kind("ten_loai", "Vui lòng nhập tên loại.");
                isValid = false;
            }
            else {
                this.clearError_Kind("ten_loai");
            }
            return isValid;
        };
        //! Xu ly hien thi thong bao
        this.displayError_Kind = (elementId, message) => {
            const errorElement = document.querySelector(`.${elementId}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = "block";
            }
        };
        //! Xu ly an thong bao
        this.clearError_Kind = (elementId) => {
            const errorElement = document.querySelector(`.${elementId}-error`);
            if (errorElement) {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        };
    }
    showKindCate(loai, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let ten_loai = "";
            loai.forEach((loai) => (ten_loai += `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="./loai.html?page=loai&id=${loai.Id}&id_danh_muc=${loai.Id_Cate}">${loai.Name}</a></li>`));
            /* Hiển thị loại */
            let content_loai = document.querySelector(tagname);
            content_loai.innerHTML = ten_loai;
        });
    }
    showKindAD(loai, danh_muc, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = ``;
            loai.forEach((loai, key) => {
                str += `
          <tr>
            <td>${loai.Id}</td>
            <td>${loai.Name}</td>
            <td>${loai.Id_Cate}</td>
            <td>
              <a href="?page=kind&act=updateKindAD&id=${loai.Id}" class="btn btn-update">Sửa</a>
              <a href="?page=kind&act=deleteKindAD&id=${loai.Id}" class="btn btn-delete">Xóa</a>
            </td>
          </tr>`;
            });
            let content = document.querySelector(tagname);
            content.innerHTML = `      
      <table id="example" class="table">
        <thead>
          <tr>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Tên danh mục</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody id="tbody">
          ${str}
        </tbody>
        <tr class="listPage"></tr>
      </table>`;
        });
    }
    addKindAD(url, data, tagname) {
        let dsLoai = document.querySelector("#ds_loai");
        dsLoai.style.display = "none";
        let str = ``;
        data.forEach((dm) => {
            str += `<option value="${dm.Id}" id="danh_muc_${dm.Id}">${dm.Name}</option>`;
        });
        let form = `
        <form action="" method="post" enctype="multipart/form-data">
        <button type="button" id="btn_closeForm" class="btn btn_closeForm">Đóng</button>
          <div class="group_input">
            <label for="topic-name">Danh mục</label>
            <select id="danh_muc_select">
              ${str}
            </select>
          </div>
          <div class="group_input">
            <label for="id_loai">Mã Loại</label>
            <input type="text" placeholder="Mã Loại" name="ma_loai" id="id_loai">
            <div class="id_loai-error"></div>
          </div>
          <div class="group_input">
            <label for="Ten_loai">Tên Loại</label>
            <input type="text" placeholder="Tên Loại" name="Ten_loai" id="ten_loai">
            <div class="ten_loai-error"></div>
          </div>
          <div class="group_btn">
            <button type="button" class="btn" id="btn_them_loai">Thêm</button>
            <button class="btn btntp">Nhập Lại</button>
          </div>
        </form>      
                      `;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        let btnAdd = document.querySelector("#btn_them_loai");
        btnAdd.addEventListener("click", () => {
            let id = Number(document.querySelector("#id_loai").value);
            let ten_loai = document.querySelector("#ten_loai")
                .value;
            let id_danh_muc = Number(document.querySelector("#danh_muc_select").value);
            let data = new KindModel(id, id_danh_muc, ten_loai);
            if (!this.validateForm_Kind(data)) {
                return;
            }
            data.addKind(url);
            alert("Them thanh cong");
        });
        let formContainer = document.querySelector("#add_loai");
        let formKind = document.querySelector("form");
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            if (formContainer) {
                formContainer.removeChild(formKind);
            }
            dsLoai.style.display = "block";
        });
    }
    updateKindAD(url, data, dataCate, tagname) {
        let dsLoai = document.querySelector("#ds_loai");
        dsLoai.style.display = "none";
        let selectDM = dataCate.find((dm) => dm.Id == data.Id_Cate);
        let str = ``;
        if (selectDM) {
            str += `<option value="${selectDM.Id}" id="danh_muc_${selectDM.Id}">${selectDM.Name}</option>`;
            dataCate.forEach((dm) => {
                if (dm.Id !== data.Id_Cate) {
                    str += `<option value="${dm.Id}" id="danh_muc_${dm.Id}">${dm.Name}</option>`;
                }
            });
        }
        let form = `
      <form action="" method="post" enctype="multipart/form-data">
      <button type="button" id="btn_closeForm" class="btn btn_closeForm">Đóng</button>
        <div class="group_input">
            <label for="id_loai">Mã Loại</label>
            <input type="text" readonly placeholder="Mã Loại" name="ma_loai" id="id_loai" value="${data.Id}">
            <div class="id_loai-error"></div>
          </div>
          <div class="group_input">
            <label for="topic-name">Danh mục</label>
              <select id="danh_muc_select">
                ${str}
              </select>
          </div>
          <div class="group_input">
            <label for="Ten_loai">Tên Loại</label>
            <input type="text" placeholder="Tên Loại" name="Ten_loai" id="ten_loai" value="${data.Name}">
            <div class="ten_loai-error"></div>
          </div>
            <div class="group_btn">
                <button class="btn" id="btn_update_loai">Cập Nhật</button>
                <button class="btn btntp">Nhập Lại</button>
                </div>
          </form>      
                      `;
        let content = document.querySelector(tagname);
        content.innerHTML = form;
        let btnAdd = document.querySelector("#btn_update_loai");
        btnAdd.addEventListener("click", () => {
            let ten_loai = document.querySelector("#ten_loai")
                .value;
            let id_danh_muc = Number(document.querySelector("#danh_muc_select").value);
            data.Id_Cate = id_danh_muc;
            data.Name = ten_loai;
            console.log(data);
            data.updateKind(url);
            alert("Cập nhật thành công");
        });
        let formContainer = document.querySelector("#add_loai");
        let formKind = document.querySelector("form");
        let btnCloseForm = document.querySelector(".btn_closeForm");
        btnCloseForm.addEventListener("click", () => {
            console.log(formKind);
            console.log(formContainer);
            if (formContainer) {
                formContainer.removeChild(formKind);
            }
            dsLoai.style.display = "block";
        });
    }
}
