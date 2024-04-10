class Bill {
  private id: string | undefined;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private pay_method: string;
  constructor(
    id: string | undefined,
    name: string,
    email: string,
    phone: string,
    address: string,
    pay_method: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.pay_method = pay_method;
  }
  //Get & Set ID
  get Id() {
    return this.id;
  }
  set Id(id: string | undefined) {
    this.id = id;
  }
  //Get & Set Name
  get Name() {
    return this.name;
  }
  set Name(name: string) {
    if (name == "") {
      this.name = "Unname";
    } else {
      this.name = name;
    }
  }
  //Get & Set Address
  get Address() {
    return this.address;
  }
  set Address(address: string) {
    if (address == "") {
      this.address = "Unaddress";
    } else {
      this.address = address;
    }
  }
  //Get & Set Phone
  get Phone() {
    return this.phone;
  }
  set Phone(phone: string) {
    if (phone == "") {
      this.phone = "Unphone";
    } else {
      this.phone = phone;
    }
  }
}
