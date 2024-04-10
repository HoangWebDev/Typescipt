//Class
//Properties => Private
//Constructor
//Method: get & set
//Method handle
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class KindModel {
    constructor(id, id_danh_muc, ten_loai) {
        this.id = id;
        this.id_danh_muc = id_danh_muc;
        this.ten_loai = ten_loai;
    }
    //Get & Set ID
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    //Get & Set ID_Cate
    get Id_Cate() {
        return this.id_danh_muc;
    }
    set Id_Cate(id_danh_muc) {
        if (id_danh_muc == null)
            this.id_danh_muc = 1;
        else
            this.id_danh_muc = id_danh_muc;
    }
    //Get & Set Name
    get Name() {
        return this.ten_loai;
    }
    //Set dùng để ràng buộc dữ liệu đầu vào
    set Name(name) {
        if (name.length < 3)
            this.ten_loai = "Unkind";
        else
            this.ten_loai = name;
    }
    laytoken() {
        let token = sessionStorage.getItem("token");
        if (token != null)
            return token;
        alert("Bạn phải đăng nhập!");
        window.location.href = "./login.html";
        return null;
    }
    addKind(url) {
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
            .then((r) => __awaiter(this, void 0, void 0, function* () {
            if (r.status == 401) {
                let str = r.statusText + "\n" + JSON.stringify(yield r.json());
                alert("Lỗi: " + str);
                window.location.href = "../login.html";
            }
            else
                return r.json();
        }))
            .then((res) => {
            alert("Cập nhật thành công");
            console.log(res);
            window.location.href = "?page=kind";
        })
            .catch((err) => {
            alert(err);
        });
    }
    updateKind(url) {
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
            .then((r) => __awaiter(this, void 0, void 0, function* () {
            if (r.status == 401) {
                let str = r.statusText + "\n" + JSON.stringify(yield r.json());
                alert("Lỗi: " + str);
                window.location.href = "../login.html";
            }
            else
                return r.json();
        }))
            .then((res) => {
            alert("Cập nhật thành công");
            // console.log(res);
            // window.location.href = "?page=kind";
        })
            .catch((err) => {
            alert(err);
        });
    }
    deleteKind(url) {
        let token = this.laytoken();
        if (!token) {
            // Token is null or undefined, handle the error appropriately
            return;
        }
        fetch(url, {
            headers: { "Content-type": "application/json", Authentication: token },
            method: "DELETE",
        })
            .then((r) => __awaiter(this, void 0, void 0, function* () {
            if (r.status == 401) {
                let str = r.statusText + "\n" + JSON.stringify(yield r.json());
                alert("Lỗi: " + str);
                window.location.href = "../login.html";
            }
            else
                return r.json();
        }))
            .then((res) => {
            console.log(res);
            window.location.href = "?page=kind";
        })
            .catch((err) => console.log(err));
    }
}
