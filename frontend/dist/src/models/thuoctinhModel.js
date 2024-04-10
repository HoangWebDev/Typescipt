import ProductModel from "./productModel.js";
export default class ThuocTinhModel extends ProductModel {
    constructor(id, id_danh_muc, id_loai, ten_sp, gia, giam_gia, hinh, ngay, mau_sac, xem, hot, an_hien, id_sp, ram, dia, cpu, sim, bluetooth, pin, cong_nghe_man_hinh, card_do_hoa, cong_ket_noi) {
        super(id, id_danh_muc, id_loai, ten_sp, gia, giam_gia, hinh, ngay, mau_sac, xem, hot, an_hien);
        this.id_sp = id_sp;
        this.ram = ram;
        this.dia = dia;
        this.cpu = cpu;
        this.sim = sim;
        this.bluetooth = bluetooth;
        this.pin = pin;
        this.cong_nghe_man_hinh = cong_nghe_man_hinh;
        this.card_do_hoa = card_do_hoa;
        this.cong_ket_noi = cong_ket_noi;
    }
    get Ram() {
        return this.ram;
    }
    set Ram(ram) {
        this.ram = ram;
    }
    get Dia() {
        return this.dia;
    }
    set Dia(dia) {
        this.dia = dia;
    }
    get Cpu() {
        return this.cpu;
    }
    set Cpu(cpu) {
        this.cpu = cpu;
    }
    get Sim() {
        return this.sim;
    }
    set Sim(sim) {
        if (this.sim == null) {
            this.sim = "";
        }
        else {
            this.sim = sim;
        }
    }
    get Bluetooth() {
        return this.bluetooth;
    }
    set Bluetooth(bluetooth) {
        if (bluetooth == null) {
            this.bluetooth = "";
        }
        else {
            this.bluetooth = bluetooth;
        }
    }
    get Pin() {
        return this.pin;
    }
    set Pin(pin) {
        this.pin = pin;
    }
    get CongNgheManHinh() {
        return this.cong_nghe_man_hinh;
    }
    set CongNgheManHinh(cong_nghe_man_hinh) {
        if (cong_nghe_man_hinh == null) {
            this.cong_nghe_man_hinh = "";
        }
        else {
            this.cong_nghe_man_hinh = cong_nghe_man_hinh;
        }
    }
    get CardDoHoa() {
        return this.card_do_hoa;
    }
    set CardDoHoa(card_do_hoa) {
        if (card_do_hoa == null) {
            this.card_do_hoa = "";
        }
        else {
            this.card_do_hoa = card_do_hoa;
        }
    }
    get CongKetNoi() {
        return this.cong_ket_noi;
    }
    set CongKetNoi(cong_ket_noi) {
        this.cong_ket_noi = cong_ket_noi;
    }
}
