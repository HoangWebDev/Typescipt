import KindModel from "../models/kindModel.js";
import CategoryModel from "../models/categoryModel.js";
import { KindView } from "../views/kindView.js";
import { fetchData } from "../components/fetchData.js";

export class KindController {
  data: KindModel[] = [];
  dataCate: CategoryModel[] = [];
  url = "http://localhost:3000/loai";
  view = new KindView();

  laytoken() {
    let token = sessionStorage.getItem("token");
    if (token != null) return token;
    alert("Bạn phải đăng nhập!");
    window.location.href = "./login.html";
    return null;
  }

  async fetchData() {
    let res = await fetch(this.url);
    let kind = await res.json();
    this.data = kind.map(
      (loai: any) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai)
    );
  }

  //!Get Kind Category
  async getKindCate(id_danh_muc: number) {
    let res = await fetch(`http://localhost:3000/loai_danhmuc/${id_danh_muc}`);
    let kind = await res.json();
    this.data = kind.map(
      (loai: any) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai)
    );
    this.view.showKindCate(this.data, "#list_brand");
  }

  //!Get Admin Kind
  async getKindAD() {
    let token = this.laytoken();
    if (!token) {
      return;
    }
    let opt = {
      headers: {
        Authorization: token,
      },
    };
    let res = await fetch(`http://localhost:3000/admin/dm`, opt);
    let dm = await res.json();
    this.dataCate = dm.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );
    let res_loai = await fetch(`http://localhost:3000/admin/loaisp`, opt);
    let loai = await res_loai.json();
    this.data = loai.map(
      (loai: any) => new KindModel(loai.id, loai.id_danh_muc, loai.ten_loai)
    );
    this.view.showKindAD(this.data, this.dataCate, "#ds_loai");
  }

  //!Add kind
  async addKindAD() {
    let token = this.laytoken();
    if (!token) {
      return;
    }
    let opt = {
      headers: {
        Authorization: token,
      },
    };
    let res_dm = await fetch(`http://localhost:3000/admin/dm`, opt);
    let dataDM = await res_dm.json();
    this.dataCate = dataDM.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );

    this.view.addKindAD(
      `http://localhost:3000/admin/loaisp`,
      this.dataCate,
      "#add_loai"
    );
  }
  //!Update kind
  async updateKindAD(id: string) {
    let token = this.laytoken();
    if (!token) {
      return;
    }
    let opt = {
      headers: {
        Authorization: token,
      },
    };
    let res = await fetch(`http://localhost:3000/admin/loaisp/${id}`, opt);
    let data = await res.json();

    let db_loai = new KindModel(
      data[0].id,
      data[0].id_danh_muc,
      data[0].ten_loai
    );

    let res_dm = await fetch(`http://localhost:3000/admin/dm`, opt);
    let dataDM = await res_dm.json();
    this.dataCate = dataDM.map(
      (dm: any) => new CategoryModel(dm.id, dm.ten_danh_muc)
    );

    this.view.updateKindAD(
      `http://localhost:3000/admin/loaisp/${id}`,
      db_loai,
      this.dataCate,
      "#add_loai"
    );
  }
  //!Delete kind
  async deleteKindAD(id: string) {
    if (!confirm("Bạn có muốn xóa ?")) {
      return;
    }
    let res = await fetch(`http://localhost:3000/admin/loaisp/${id}`);
    let data = await res.json();
    let loai = new KindModel(data.id, data.id_danh_muc, data.ten_loai);
    loai.deleteKind(`http://localhost:3000/admin/loaisp/${id}`);
  }
}
