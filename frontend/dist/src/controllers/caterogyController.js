var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CategoryModel from "../models/categoryModel.js";
import { CategoryView } from "../views/categoryView.js";
export class CaterogyController {
    constructor() {
        this.data = [];
        this.url = `http://localhost:3000/danhmuc`;
        this.view = new CategoryView();
    }
    getCate() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(this.url);
            let cate = yield res.json();
            this.data = cate.map((dm) => new CategoryModel(dm.id, dm.ten_danh_muc));
            this.view.showCate(this.data, ".main-menu");
        });
    }
}
