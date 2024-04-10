export default class CategoryModel {
  private id: number | null;
  private ten_danh_muc: string;
  constructor(id: number | null, ten_danh_muc: string) {
    this.id = id;
    this.ten_danh_muc = ten_danh_muc;
  }
  //Get & Set ID
  get Id() {
    return this.id;
  }
  set Id(id: number | null) {
    this.id = id;
  }
  //Get & Set Name
  get Name() {
    return this.ten_danh_muc;
  }
  //Set dùng để ràng buộc dữ liệu đầu vào
  set Name(ten_danh_muc: string) {
    if (ten_danh_muc.length < 3) this.ten_danh_muc = "Uncategory";
    else this.ten_danh_muc = ten_danh_muc;
  }

  laytoken() {
    let token = sessionStorage.getItem("token");
    if (token != null) return token;
    alert("Bạn phải đăng nhập!");
    window.location.href = "./login.html";
    return null;
  }

  addCate(url: string) {
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
        window.location.href = "?page=category";
      })
      .catch((err) => console.log(err));
  }
  updateCate(url: string) {
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
        window.location.href = "?page=category";
      })
      .catch((err) => console.log(err));
  }
  deleteCate(url: string) {
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
        window.location.href = "?page=category";
      })
      .catch((err) => console.log(err));
  }
}
