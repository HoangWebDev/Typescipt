import KindModel from "../models/kindModel.js";
import CategoryModel from "../models/categoryModel.js";

export class KindView {
  async showKindCate(loai: KindModel[], tagname: string) {
    let ten_loai = "";
    loai.forEach(
      (loai) =>
        (ten_loai += `<li><ion-icon name="chevron-forward-outline"></ion-icon><a href="./loai.html?page=loai&id=${loai.Id}&id_danh_muc=${loai.Id_Cate}">${loai.Name}</a></li>`)
    );
    /* Hiển thị loại */
    let content_loai = document.querySelector(tagname) as HTMLElement;
    content_loai.innerHTML = ten_loai;
  }
  async showKindAD(
    loai: KindModel[],
    danh_muc: CategoryModel[],
    tagname: string
  ) {
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
    let content = document.querySelector(tagname) as HTMLElement;
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
  }
  addKindAD(url: string, data: CategoryModel[], tagname: string) {
    let dsLoai = document.querySelector("#ds_loai") as HTMLElement;
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
    let content = document.querySelector(tagname) as HTMLElement;
    content.innerHTML = form;
    let btnAdd = document.querySelector("#btn_them_loai") as HTMLButtonElement;
    btnAdd.addEventListener("click", () => {
      let id = Number(
        (document.querySelector("#id_loai") as HTMLInputElement).value
      );
      let ten_loai = (document.querySelector("#ten_loai") as HTMLInputElement)
        .value;
      let id_danh_muc = Number(
        (document.querySelector("#danh_muc_select") as HTMLSelectElement).value
      );
      let data = new KindModel(id, id_danh_muc, ten_loai);

      if (!this.validateForm_Kind(data)) {
        return;
      }

      data.addKind(url);
      alert("Them thanh cong");
    });
    let formContainer = document.querySelector("#add_loai") as HTMLElement;
    let formKind = document.querySelector("form") as HTMLElement;
    let btnCloseForm = document.querySelector(".btn_closeForm") as HTMLElement;
    btnCloseForm.addEventListener("click", () => {
      if (formContainer) {
        formContainer.removeChild(formKind);
      }
      dsLoai.style.display = "block";
    });
  }
  updateKindAD(
    url: string,
    data: KindModel,
    dataCate: CategoryModel[],
    tagname: string
  ) {
    let dsLoai = document.querySelector("#ds_loai") as HTMLElement;
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
    let content = document.querySelector(tagname) as HTMLElement;
    content.innerHTML = form;
    let btnAdd = document.querySelector(
      "#btn_update_loai"
    ) as HTMLButtonElement;
    btnAdd.addEventListener("click", () => {
      let ten_loai = (document.querySelector("#ten_loai") as HTMLInputElement)
        .value;
      let id_danh_muc = Number(
        (document.querySelector("#danh_muc_select") as HTMLSelectElement).value
      );
      data.Id_Cate = id_danh_muc;
      data.Name = ten_loai;
      console.log(data);
      data.updateKind(url);
      alert("Cập nhật thành công");
    });
    let formContainer = document.querySelector("#add_loai") as HTMLElement;
    let formKind = document.querySelector("form") as HTMLElement;
    let btnCloseForm = document.querySelector(".btn_closeForm") as HTMLElement;
    btnCloseForm.addEventListener("click", () => {
      console.log(formKind);
      console.log(formContainer);

      if (formContainer) {
        formContainer.removeChild(formKind);
      }
      dsLoai.style.display = "block";
    });
  }
  //!Check Form
  validateForm_Kind = (data: KindModel) => {
    let isValid = true;
    if (!data.Id) {
      this.displayError_Kind("id_loai", "Vui lòng nhập ID loại.");
      isValid = false;
    } else {
      this.clearError_Kind("id_loai");
    }
    if (!data.Name) {
      this.displayError_Kind("ten_loai", "Vui lòng nhập tên loại.");
      isValid = false;
    } else {
      this.clearError_Kind("ten_loai");
    }

    return isValid;
  };
  //! Xu ly hien thi thong bao
  displayError_Kind = (elementId: string, message: string) => {
    const errorElement = document.querySelector(
      `.${elementId}-error`
    ) as HTMLElement;
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  };
  //! Xu ly an thong bao
  clearError_Kind = (elementId: string) => {
    const errorElement = document.querySelector(
      `.${elementId}-error`
    ) as HTMLElement;
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  };
}
