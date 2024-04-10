import ProductModel from "../models/productModel";

const hien1sp = (sp: ProductModel) => {
  return `<div class="product">
                <div class="product-image">
                    <a href="./productdetail.html?page=productdetail&id=${
                      sp.Id
                    }">
                        <img src="./public/assets/${sp.Hinh}" alt="">
                    </a>
                </div>
                <div class="content">
                    <a href="./productdetail.html?page=productdetail&id=${
                      sp.Id
                    }">
                        <h4>${sp.Name}</h4>
                    </a>
                    <div class="price-list">
                        <div class="price-main">
                            <span class="price-cut">${Number(
                              sp.Price
                            ).toLocaleString("Vi")} VNĐ</span>
                        </div>
                        <p>Giảm Giá ${sp.Price_Sale}%</p>
                    </div>
                </div>
                <div class="button-buy">
                    <button class="btn_product" onclick="addtocart(${sp.Id})">
                        Mua Ngay
                    </button>
                </div>
            </div>`;
};

export default hien1sp;
