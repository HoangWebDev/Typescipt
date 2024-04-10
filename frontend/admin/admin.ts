import { CategoryController } from "../src/controllers/categoryController.js";
import { ProductController } from "../src/controllers/productController.js";
import { KindController } from "../src/controllers/kindController.js";

let param = new URLSearchParams(window.location.search);
let page = param.get("page");
let act = param.get("act");
let controller: any;
let hand: any;
switch (page) {
  case "category":
    let id_cate = param.get("id");
    controller = new CategoryController();
    hand = controller.getCateAD();

    //!Add Category Từ act trên param

    if (act == "addCateAD") {
      hand = controller.addCateAD();
    } else if (act == "updateCateAD") {
      hand = controller.updateCateAD(id_cate);
    } else if (act == "deleteCateAD") {
      hand = controller.deleteCateAD(id_cate);
    } else {
      hand = controller.getCateAD();
    }
    break;

  case "product":
    let id_product = param.get("id");
    controller = new ProductController();
    hand = controller.getProductAD();
    //!Add product Từ act trên param
    if (act == "addProductAD") {
      hand = controller.addProductAD();
    } else if (act == "updateProductAD") {
      hand = controller.updateProductAD(id_product);
    } else if (act == "deleteProductAD") {
      hand = controller.deleteProductAD(id_product);
    } else {
      hand = controller.getProductAD();
    }
    break;
  case "kind":
    let id_kind = param.get("id");
    controller = new KindController();
    hand = controller.getKindAD();
    //!Add kind Từ act trên param
    if (act == "addKindAD") {
      hand = controller.addKindAD();
    } else if (act == "updateKindAD") {
      hand = controller.updateKindAD(id_kind);
    } else if (act == "deleteKindAD") {
      hand = controller.deleteKindAD(id_kind);
    } else {
      hand = controller.getKindAD();
    }
    break;
  default:
    break;
}

eval(hand);
