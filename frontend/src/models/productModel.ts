export default class ProductModel {
  private id: number | null;
  private id_danh_muc: number;
  private id_loai: number;
  private ten_sp: string;
  private gia: number;
  private giam_gia: number;
  private hinh: string;
  private ngay: string;
  private mau_sac: string;
  private xem: number;
  private hot: number;
  private an_hien: number;
  constructor(
    id: number | null,
    id_danh_muc: number,
    id_loai: number,
    ten_sp: string,
    gia: number,
    giam_gia: number,
    hinh: string,
    ngay: string,
    mau_sac: string,
    xem: number,
    hot: number,
    an_hien: number
  ) {
    this.id = id;
    this.id_danh_muc = id_danh_muc;
    this.id_loai = id_loai;
    this.ten_sp = ten_sp;
    this.gia = gia;
    this.giam_gia = giam_gia;
    this.hinh = hinh;
    this.ngay = ngay;
    this.mau_sac = mau_sac;
    this.xem = xem;
    this.hot = hot;
    this.an_hien = an_hien;
  }
  //Get & Set ID
  get Id() {
    return this.id;
  }
  set Id(id: number | null) {
    this.id = id;
  }
  //Get & Set ID_Cate
  get Id_Cate() {
    return this.id_danh_muc;
  }
  set Id_Cate(id_danh_muc: number) {
    if (id_danh_muc == null) this.id_danh_muc = 1;
    else this.id_danh_muc = id_danh_muc;
  }
  //Get & Set ID_kind
  get Id_Kind() {
    return this.id_loai;
  }
  set Id_Kind(id_loai: number) {
    if (id_loai == null) this.id_loai = 1;
    else this.id_loai = id_loai;
  }
  //Get & Set Name
  get Name() {
    return this.ten_sp;
  }
  //Set dùng để ràng buộc dữ liệu đầu vào
  set Name(name: string) {
    if (name.length < 3) this.ten_sp = "Unproduct";
    else this.ten_sp = name;
  }
  //Get & Set Price
  get Price() {
    return this.gia;
  }
  //Set dùng để rờng buộc dữ liệu đầu vào
  set Price(price: number) {
    if (price < 0) this.gia = 0;
    else this.gia = price;
  }
  //Get & Set Price_Sale
  get Price_Sale() {
    return this.giam_gia;
  }
  //Set dùng để rờng buộc dữ liệu đầu vào
  set Price_Sale(price_sale: number) {
    if (price_sale < 0) this.giam_gia = 0;
    else this.giam_gia = price_sale;
  }
  get Hinh() {
    return this.hinh;
  }
  set Hinh(hinh: string) {
    this.hinh = hinh;
  }
  get Ngay() {
    return this.ngay;
  }
  set Ngay(ngay: string) {
    this.ngay = ngay;
  }
  get MauSac() {
    return this.mau_sac;
  }
  set MauSac(mau_sac: string) {
    this.mau_sac = mau_sac;
  }
  get Xem() {
    return this.xem;
  }
  set Xem(xem: number) {
    this.xem = xem;
  }
  get Hot() {
    return this.hot;
  }
  set Hot(hot: number) {
    this.hot = hot;
  }
  get AnHien() {
    return this.an_hien;
  }
  set AnHien(an_hien: number) {
    this.an_hien = an_hien;
  }

  laytoken() {
    let token = sessionStorage.getItem("token");
    if (token != null) return token;
    alert("Bạn phải đăng nhập!");
    window.location.href = "./login.html";
    return null;
  }

  addProduct(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authorization: token },
      method: "POST",
      body: JSON.stringify(this),
    })
      .then(async (r) => {
        if (r.status == 401) {
          let str = r.statusText + "\n" + JSON.stringify(await r.json());
          alert("Lỗi: " + str);
          window.location.href = "../login.html";
        } else return r.json();
      })
      .then((res) => {
        console.log(res);
        window.location.href = "?page=product";
      })
      .catch((err) => console.log(err));
  }
  updateProduct(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authorization: token },
      method: "PUT",
      body: JSON.stringify(this),
    })
      .then(async (r) => {
        if (r.status == 401) {
          let str = r.statusText + "\n" + JSON.stringify(await r.json());
          alert("Lỗi: " + str);
          window.location.href = "../login.html";
        } else return r.json();
      })
      .then((res) => {
        console.log(res);
        window.location.href = "?page=product";
      })
      .catch((err) => console.log(err));
  }
  deleteProduct(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authorization: token },
      method: "DELETE",
    })
      .then(async (r) => {
        if (r.status == 401) {
          let str = r.statusText + "\n" + JSON.stringify(await r.json());
          alert("Lỗi: " + str);
          window.location.href = "../login.html";
        } else return r.json();
      })
      .then((res) => {
        console.log(res);
        window.location.href = "?page=product";
      })
      .catch((err) => console.log(err));
  }
}
