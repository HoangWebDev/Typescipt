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
}
