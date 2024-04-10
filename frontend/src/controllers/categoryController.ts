import CategoryModel from "../models/categoryModel.js";
import { CategoryView } from "../views/categoryView.js";

export class CategoryController {
  data: CategoryModel[] = [];
  url = `http://localhost:3000/danhmuc`;
  view = new CategoryView();

  laytoken() {
    let token = sessionStorage.getItem("token");
    if (token != null) return token;
    alert("Bạn phải đăng nhập!");
    window.location.href = "./login.html";
    return null;
  }

  async fetchData() {
    let res = await fetch(this.url);
    let cate = await res.json();
    this.data = cate.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );
  }

  async fetchDataBayId(id: number) {
    let res = await fetch(this.url + "/" + id);
    let cate = await res.json();
    this.data = cate.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );
  }

  async getCate() {
    await this.fetchData();
    this.view.showCate(this.data, ".main-menu");
  }

  async getNameCate(id: number) {
    await this.fetchDataBayId(id);
    this.view.showName(this.data, ".title");
  }

  //!Get Admin Category
  async getCateAD() {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    let opt = {
      headers: {
        Authorization: token,
      },
    };
    let res = await fetch(`http://localhost:3000/admin/dm`, opt);
    let data = await res.json();
    this.data = data.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );
    this.view.showCateAD(this.data, "#ds_danh_muc");
  }

  //!Add
  async addCateAD() {
    this.view.addCateAD(`http://localhost:3000/admin/dm`, "#add_danh_muc");
  }

  //!Update
  async updateCateAD(id: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    let opt = {
      headers: {
        Authorization: token,
      },
    };
    let res = await fetch(`http://localhost:3000/admin/dm/${id}`, opt);
    let data = await res.json();
    let dm = new CategoryModel(data[0].id, data[0].ten_danh_muc);
    this.view.updateCateAD(
      `http://localhost:3000/admin/dm/${id}`,
      dm,
      "#update_danh_muc"
    );
  }

  //!Delete
  async deleteCateAD(id: string) {
    if (!confirm("Bạn có muốn xóa ?")) {
      return;
    }
    let res = await fetch(`http://localhost:3000/admin/dm/${id}`);
    let data = await res.json();
    let dm = new CategoryModel(data.id, data.ten_danh_muc);
    dm.deleteCate(`http://localhost:3000/admin/dm/${id}`);
  }
}
