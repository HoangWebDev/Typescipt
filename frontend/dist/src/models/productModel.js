var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class ProductModel {
    constructor(id, id_danh_muc, id_loai, ten_sp, gia, giam_gia, hinh, ngay, mau_sac, xem, hot, an_hien) {
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
    //Get & Set ID_kind
    get Id_Kind() {
        return this.id_loai;
    }
    set Id_Kind(id_loai) {
        if (id_loai == null)
            this.id_loai = 1;
        else
            this.id_loai = id_loai;
    }
    //Get & Set Name
    get Name() {
        return this.ten_sp;
    }
    //Set dùng để ràng buộc dữ liệu đầu vào
    set Name(name) {
        if (name.length < 3)
            this.ten_sp = "Unproduct";
        else
            this.ten_sp = name;
    }
    //Get & Set Price
    get Price() {
        return this.gia;
    }
    //Set dùng để rờng buộc dữ liệu đầu vào
    set Price(price) {
        if (price < 0)
            this.gia = 0;
        else
            this.gia = price;
    }
    //Get & Set Price_Sale
    get Price_Sale() {
        return this.giam_gia;
    }
    //Set dùng để rờng buộc dữ liệu đầu vào
    set Price_Sale(price_sale) {
        if (price_sale < 0)
            this.giam_gia = 0;
        else
            this.giam_gia = price_sale;
    }
    get Hinh() {
        return this.hinh;
    }
    set Hinh(hinh) {
        this.hinh = hinh;
    }
    get Ngay() {
        return this.ngay;
    }
    set Ngay(ngay) {
        this.ngay = ngay;
    }
    get MauSac() {
        return this.mau_sac;
    }
    set MauSac(mau_sac) {
        this.mau_sac = mau_sac;
    }
    get Xem() {
        return this.xem;
    }
    set Xem(xem) {
        this.xem = xem;
    }
    get Hot() {
        return this.hot;
    }
    set Hot(hot) {
        this.hot = hot;
    }
    get AnHien() {
        return this.an_hien;
    }
    set AnHien(an_hien) {
        this.an_hien = an_hien;
    }
    laytoken() {
        let token = sessionStorage.getItem("token");
        if (token != null)
            return token;
        alert("Bạn phải đăng nhập!");
        window.location.href = "./login.html";
        return null;
    }
    addProduct(url) {
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
            window.location.href = "?page=product";
        })
            .catch((err) => console.log(err));
    }
    updateProduct(url) {
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
            window.location.href = "?page=product";
        })
            .catch((err) => console.log(err));
    }
    deleteProduct(url) {
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
            window.location.href = "?page=product";
        })
            .catch((err) => console.log(err));
    }
}
