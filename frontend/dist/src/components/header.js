//!Header
const header = () => {
    let content = document.querySelector("#container_header");
    content.innerHTML = `<div id=header-content>
            <div class="header-content_w1300">
                <div class="number-phone__map">
                    <div class="number-phone">
                        <p>
                            <ion-icon name="call-outline"></ion-icon>
                            <span>1800.113114</span>
                        </p>
                    </div>
                    <div class="map">
                        <p>
                            <ion-icon name="location-outline"></ion-icon>
                            <span>Đại chỉ cửa hàng</span>
                        </p>
                    </div>
                </div>
                <div class="profile">
                    <img src="./public/assets/images/chinh_sach_bao_hanh.jpg" alt="Hàng chính hãng">
                </div>
                <div class="profile">
                    <img src="./public/assets/images/chinh_hang_VAT.jpg" alt="Hàng chính hãng">
                </div>
            </div>
        </div>
        <div id="header">
            <div class="container-menu">
                <a href="./index.html" class="logo">
                    <img src="./public/assets/images/logo.png" alt="">
                </a>
                <ul class="main-menu">
                    /* Hiện menu */
                </ul>
            </div>
            <div class="group">
                <div class="search-box">
                    <form action="" method="GET">
                        <input
                            type="search"
                            class="search-text"
                            id="search"
                            placeholder="Search"
                            name="search"
                        />
                        <button type="button" class="search-btn" id="btn_search">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </form>
                </div>
                <div class="cart">
                    <!-- Tạo số lượng sản phẩm trên giỏ hàng -->
                    <a href="./cart.html">
                        <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
                    </a>
                    <span class="num-cart">0</span>
                </div>
                <div class="toggle">
                    <ion-icon class="toggle_menu" name="menu-outline">
                    </ion-icon>
                    <div class="mobile-menu">
                        <ion-icon class="toggle_close" name="close-outline"></ion-icon>
                        <ul class="main-menu">
                            /* Hiện menu */
                        </ul>
                        <div class="container-login_mobile">
                            <a href="./login.html" target="_blank">Đăng Nhập</a>
                            <a href="./form.html" target="_blank">Đăng Ký</a>
                        </div>
                    </div>
                    <div class="overflow"></div>
                </div>
                <div class="container-login">
                    <a href="./login.html" target="_blank">Đăng Nhập</a>
                    <a href="./form.html" target="_blank">Đăng Ký</a>
                </div>
            </div>
        </div>`;
    const toggle_menu = document.querySelector(".toggle_menu");
    const toggle_close = document.querySelector(".toggle_close");
    const mobile_menu = document.querySelector(".mobile-menu");
    const overflow = document.querySelector(".overflow");
    if (toggle_menu && toggle_close && mobile_menu && overflow) {
        toggle_menu.addEventListener("click", () => {
            mobile_menu.style.transform = "translateX(0)";
            mobile_menu.style.opacity = "1";
            mobile_menu.style.visibility = "visible";
            overflow.style.display = "block";
        });
        toggle_close.addEventListener("click", () => {
            mobile_menu.style.transform = "translateX(100%)";
            mobile_menu.style.opacity = "0";
            mobile_menu.style.visibility = "hidden";
            overflow.style.display = "none";
        });
        overflow.addEventListener("click", () => {
            mobile_menu.style.transform = "translateX(100%)";
            mobile_menu.style.opacity = "0";
            mobile_menu.style.visibility = "hidden";
            overflow.style.display = "none";
        });
    }
};
export default header;
