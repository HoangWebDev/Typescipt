import ProductModel from "../models/productModel.js";
const url = "http://localhost:3000/sp";
const fetchData = async () => {
  let res = await fetch(url);
  let product = await res.json();
  let db = product.map(
    (sp: any) =>
      new ProductModel(
        sp.id,
        sp.id_danh_muc,
        sp.id_loai,
        sp.ten_sp,
        sp.gia,
        sp.giam_gia,
        sp.hinh,
        sp.ngay,
        sp.mau_sac,
        sp.xem,
        sp.hot,
        sp.hidden
      )
  );
};
const fetchDataBySpHot = async (sosp: number) => {
  let res = await fetch(url + "/sphot/" + sosp);
  let product = await res.json();
  let db = product.map(
    (sp: any) =>
      new ProductModel(
        sp.id,
        sp.id_danh_muc,
        sp.id_loai,
        sp.ten_sp,
        sp.gia,
        sp.giam_gia,
        sp.hinh,
        sp.ngay,
        sp.mau_sac,
        sp.xem,
        sp.hot,
        sp.an_hien
      )
  );
};

const fetchDataBySpPhoBien = async (sosp: number) => {
  let res = await fetch(url + "/spxemnhieu/" + sosp);
  let product = await res.json();
  let db = product.map(
    (sp: any) =>
      new ProductModel(
        sp.id,
        sp.id_danh_muc,
        sp.id_loai,
        sp.ten_sp,
        sp.gia,
        sp.giam_gia,
        sp.hinh,
        sp.ngay,
        sp.mau_sac,
        sp.xem,
        sp.hot,
        sp.an_hien
      )
  );
};

export { fetchData, fetchDataBySpHot, fetchDataBySpPhoBien };
