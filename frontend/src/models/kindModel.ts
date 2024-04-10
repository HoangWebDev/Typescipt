//Class
//Properties => Private
//Constructor
//Method: get & set
//Method handle

export default class KindModel {
  private id: number | null;
  private id_danh_muc: number;
  private ten_loai: string;
  constructor(id: number | null, id_danh_muc: number, ten_loai: string) {
    this.id = id;
    this.id_danh_muc = id_danh_muc;
    this.ten_loai = ten_loai;
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
  //Get & Set Name
  get Name() {
    return this.ten_loai;
  }
  //Set dùng để ràng buộc dữ liệu đầu vào
  set Name(name: string) {
    if (name.length < 3) this.ten_loai = "Unkind";
    else this.ten_loai = name;
  }

  laytoken() {
    let token = sessionStorage.getItem("token");
    if (token != null) return token;
    alert("Bạn phải đăng nhập!");
    window.location.href = "./login.html";
    return null;
  }

  addKind(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authentication: token },
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
        alert("Cập nhật thành công");
        console.log(res);
        window.location.href = "?page=kind";
      })
      .catch((err) => {
        alert(err);
      });
  }
  updateKind(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authentication: token },
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
        alert("Cập nhật thành công");
        // console.log(res);
        // window.location.href = "?page=kind";
      })
      .catch((err) => {
        alert(err);
      });
  }
  deleteKind(url: string) {
    let token = this.laytoken();
    if (!token) {
      // Token is null or undefined, handle the error appropriately
      return;
    }
    fetch(url, {
      headers: { "Content-type": "application/json", Authentication: token },
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
        window.location.href = "?page=kind";
      })
      .catch((err) => console.log(err));
  }
}
