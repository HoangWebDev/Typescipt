//!Hiện footer
const footer = () => {
  let content = document.querySelector("footer") as HTMLElement;
  content.innerHTML = `<div class="the-end">
        <ul class="the-end_menu">
            <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span>Mẫu mã đa dạng,
                    chính hãng
                </span>
            </li>
            <li>
                <ion-icon name="car-outline"></ion-icon>
                <span>Giao hàng toàn quốc</span>
            </li>
            <li>
                <ion-icon name="shield-outline"></ion-icon>
                <span>Bảo hảnh 12 tháng</span>
            </li>
            <li>
                <ion-icon name="refresh-outline"></ion-icon>
                <span>Có thể đổi trả,
                    trong thời gian quy định
                </span>
            </li>
        </ul>
    </div>
    <div id="footer-wrap">
        <div id="footer-bottom">
            <div class="ft-bt-main">
                    <a class="logo-ft" href=""><img src="./public/assets/images/logo.png" alt="">Tech<span>Phone</span></a>
                <div class="ft">
                    <ul class="main-ft">
                        <li><a href="">Thông tin web</a></li>
                        <li><a href="">Chính sách bảo hành</a></li>
                        <li><a href="">Chính sách đổi trả</a></li>
                        <li><a href="">Giao hàng & thanh toán</a></li>
                    </ul>
                </div>
                <div class="ft">
                    <ul class="main-ft">
                        <li><a href="">Mua hàng online</a></li>
                        <li><a href="">Hướng dẫn online</a></li>
                        <li><a href="">Hóa đơn</a></li>
                        <li><a href="">Cảnh báo</a></li>
                    </ul>
                </div>
                <div class="ft">
                    <ul class="main-ft">
                        <li><ion-icon name="home-outline"></ion-icon><a href="">Ngõ 218, P.Bưởi, Tây Hồ, Hà Nội</a>
                        </li>
                        <li><ion-icon name="call-outline"></ion-icon><a href="">0123456789</a></li>
                        <li><ion-icon name="mail-outline"></ion-icon><a href="">techphone@gmail.com</a></li>
                    </ul>
                    <div class="logo-tt">
                        <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href=""><ion-icon name="logo-google"></ion-icon></a>
                        <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </div>
            <div class="dp_flex__pay">
                <div class="pay">
                    <img class="item item1" src="./public/assets/images/fjb.png" alt="">
                    <img class="item item2" src="./public/assets/images/foxpay.png" alt="">
                    <img class="item item3" src="./public/assets/images/visa.png" alt="">
                    <img class="item item4" src="./public/assets/images/mastercard.png" alt="">
                    <img class="item item5" src="./public/assets/images/zalopay.png" alt="">
                    <img class="item item6" src="./public/assets/images/vnpay.png" alt="">
                </div>
            </div>
        </div>
        <div class="lastFoo">
            <div class="content">© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM
                cấp ngày
                02/01/2007.
                Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP. Hồ Chí Minh. Điện thoại: 028 38125960.</div>
        </div>
    </div>`;
};

export default footer;
