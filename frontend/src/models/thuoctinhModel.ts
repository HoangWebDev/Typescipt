import ProductModel from "./productModel.js";

export default class ThuocTinhModel extends ProductModel {
  private id_sp: number;
  private ram: string;
  private dia: string;
  private cpu: string;
  private sim: string;
  private bluetooth: string;
  private pin: string;
  private cong_nghe_man_hinh: string;
  private card_do_hoa: string;
  private cong_ket_noi: string;
  constructor(
    id: number | null,
    id_danh_muc: number,
    id_loai: number,
    ten_sp: string,
    gia: number,
    giam_gia: number,
    hinh: string,
    ngay: string,
    mau_sac: string,
    xem: number,
    hot: number,
    an_hien: number,
    id_sp: number,
    ram: string,
    dia: string,
    cpu: string,
    sim: string,
    bluetooth: string,
    pin: string,
    cong_nghe_man_hinh: string,
    card_do_hoa: string,
    cong_ket_noi: string
  ) {
    super(
      id,
      id_danh_muc,
      id_loai,
      ten_sp,
      gia,
      giam_gia,
      hinh,
      ngay,
      mau_sac,
      xem,
      hot,
      an_hien
    );
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
  set Ram(ram: string) {
    this.ram = ram;
  }
  get Dia() {
    return this.dia;
  }
  set Dia(dia: string) {
    this.dia = dia;
  }
  get Cpu() {
    return this.cpu;
  }
  set Cpu(cpu: string) {
    this.cpu = cpu;
  }
  get Sim() {
    return this.sim;
  }
  set Sim(sim: string) {
    if (this.sim == null) {
      this.sim = "";
    } else {
      this.sim = sim;
    }
  }
  get Bluetooth() {
    return this.bluetooth;
  }
  set Bluetooth(bluetooth: string) {
    if (bluetooth == null) {
      this.bluetooth = "";
    } else {
      this.bluetooth = bluetooth;
    }
  }
  get Pin() {
    return this.pin;
  }
  set Pin(pin: string) {
    this.pin = pin;
  }
  get CongNgheManHinh() {
    return this.cong_nghe_man_hinh;
  }
  set CongNgheManHinh(cong_nghe_man_hinh: string) {
    if (cong_nghe_man_hinh == null) {
      this.cong_nghe_man_hinh = "";
    } else {
      this.cong_nghe_man_hinh = cong_nghe_man_hinh;
    }
  }
  get CardDoHoa() {
    return this.card_do_hoa;
  }
  set CardDoHoa(card_do_hoa: string) {
    if (card_do_hoa == null) {
      this.card_do_hoa = "";
    } else {
      this.card_do_hoa = card_do_hoa;
    }
  }
  get CongKetNoi() {
    return this.cong_ket_noi;
  }
  set CongKetNoi(cong_ket_noi: string) {
    this.cong_ket_noi = cong_ket_noi;
  }
}
