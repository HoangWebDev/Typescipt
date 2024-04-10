var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { url, } from "../components/types.js";
import hien1sp from "../components/show_sp.js";
//!Hiên sản phẩm phổ biến
const hienspphobien = (sosp) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(`${url}spxemnhieu/${sosp}`);
    let products_pb = (yield res.json());
    let str = "";
    products_pb.forEach((sp) => (str += hien1sp(sp)));
    let content = document.querySelector("nav .phobien");
    content.innerHTML = `<h2>Sản phẩm phổ biến</h2>
                    <div id="product-popular" class="product-main">
                        ${str}
                    </div>`;
});
export default hienspphobien;
