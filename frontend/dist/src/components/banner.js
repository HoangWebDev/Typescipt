export default function slideShow() {
    let event = document.querySelector("#event");
    let content = `
        <div class="box-event">
          <img
            id="myImg"
            src="./public/assets/images/Realme-C55-720-220-720x220.jpg"
            width="1920px"
            height="355px"
            alt=""
          />
          <ion-icon        
            class="next"
            name="arrow-forward-outline"
          ></ion-icon>
          <ion-icon
            class="prev"
            name="arrow-back-outline"
          ></ion-icon>
        </div>
    `;
    event.innerHTML = content;
}
window.addEventListener("load", () => {
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", nextImg);
    let prevBtn = document.querySelector(".prev");
    prevBtn.addEventListener("click", prevImg);
    /*Tạo mảng chứa các ảnh*/
    const arrHinh = [
        "Realme-C55-720-220-720x220.jpg",
        "Mac-2880-800-1920x533-1.jpg",
        "wo-top-2880-800-1920x533-1.jpg",
        "khuyen-mai2-1.jpg",
        "iPad10-2880-800-1920x533-1.jpg",
    ];
    /* Tạo chỉ số index trong mảng */
    var curIdx = 0;
    var t;
    /* Hàm next ảnh */
    function nextImg() {
        curIdx++;
        if (curIdx >= arrHinh.length) {
            curIdx = 0;
        }
        let imagesSlide = document.querySelector("#myImg");
        imagesSlide.src = `./public/assets/images/${arrHinh[curIdx]}`;
    }
    t = setInterval(nextImg, 1500);
    /* Hàm prev ảnh */
    function prevImg() {
        curIdx--;
        if (curIdx < 0) {
            curIdx = arrHinh.length - 1;
        }
        let imagesSlide = document.querySelector("#myImg");
        imagesSlide.src = `./public/assets/images/${arrHinh[curIdx]}`;
    }
    /* -------------Set/Clear Interval ---------------- */
    var stop = document.querySelector(".box-event");
    stop.addEventListener("mouseover", () => {
        t = clearInterval(t);
    });
    stop.addEventListener("mouseout", () => {
        t = setInterval(nextImg, 1500);
    });
});
