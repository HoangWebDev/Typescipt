export default class ProductModel {
    constructor(id, id_danh_muc, id_loai, ten_sp, gia, giam_gia, hinh, ngay, mau_sac, hot, an_hien) {
        this.id = id;
        this.id_category = id_category;
        this.id_kind = id_kind;
        this.name = name;
        this.price = price;
        this.price_sale = price_sale;
        this.image = image;
        this.date = date;
        this.color = color;
        this.hot = hot;
        this.hidden = hidden;
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
        return this.id_category;
    }
    set Id_Cate(id_category) {
        if (id_category == "")
            this.id_category = "1";
        else
            this.id_category = id_category;
    }
    //Get & Set ID_kind
    get Id_Kind() {
        return this.id_kind;
    }
    set Id_Kind(id_kind) {
        if (id_kind == "")
            this.id_kind = "1";
        else
            this.id_kind = id_kind;
    }
    //Get & Set Name
    get Name() {
        return this.name;
    }
    //Set dùng để ràng buộc dữ liệu đầu vào
    set Name(name) {
        if (name.length < 3)
            this.name = "Unproduct";
        else
            this.name = name;
    }
    //Get & Set Price
    get Price() {
        return this.price;
    }
    //Set dùng để rờng buộc dữ liệu đầu vào
    set Price(price) {
        if (price < 0)
            this.price = 0;
        else
            this.price = price;
    }
    //Get & Set Price_Sale
    get Price_Sale() {
        return this.price_sale;
    }
    //Set dùng để rờng buộc dữ liệu đầu vào
    set Price_Sale(price_sale) {
        if (price_sale < 0)
            this.price_sale = 0;
        else
            this.price_sale = price_sale;
    }
    get Hinh() {
        return this.image;
    }
    get Ngay() {
        return this.date;
    }
}
