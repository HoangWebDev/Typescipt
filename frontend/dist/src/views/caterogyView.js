var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CategoryView {
    showCate(danh_muc, tagname) {
        return __awaiter(this, void 0, void 0, function* () {
            let str = '<li><a href="./index.html">Trang chủ</a></li>';
            danh_muc.map((dm) => {
                return (str += `<li><a href="./danh_muc.html?id=${dm.Id}"> ${dm.Name}</a></li>`);
            });
            let content = document.querySelector("#header .container-menu " + tagname);
            content.innerHTML = str;
            let content_mobile = document.querySelector("#header .group .toggle .mobile-menu " + tagname);
            content_mobile.innerHTML = str;
        });
    }
}
