var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class CategoryModel {
    constructor(id, ten_danh_muc) {
        this.id = id;
        this.ten_danh_muc = ten_danh_muc;
    }
    //Get & Set ID
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    //Get & Set Name
    get Name() {
        return this.ten_danh_muc;
    }
    //Set dùng để ràng buộc dữ liệu đầu vào
    set Name(ten_danh_muc) {
        if (ten_danh_muc.length < 3)
            this.ten_danh_muc = "Uncategory";
        else
            this.ten_danh_muc = ten_danh_muc;
    }
    laytoken() {
        let token = sessionStorage.getItem("token");
        if (token != null)
            return token;
        alert("Bạn phải đăng nhập!");
        window.location.href = "./login.html";
        return null;
    }
    addCate(url) {
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
            window.location.href = "?page=category";
        })
            .catch((err) => console.log(err));
    }
    updateCate(url) {
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
            window.location.href = "?page=category";
        })
            .catch((err) => console.log(err));
    }
    deleteCate(url) {
        let token = this.laytoken();
        if (!token) {
            // Token is null or undefined, handle the error appropriately
            return;
        }
        fetch(url, {
            headers: { "Content-type": "application/json", Authorization: token },
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
            window.location.href = "?page=category";
        })
            .catch((err) => console.log(err));
    }
}
