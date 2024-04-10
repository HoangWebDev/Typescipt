"use strict";
class Bill {
    constructor(id, name, email, phone, address, pay_method) {
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
    set Id(id) {
        this.id = id;
    }
    //Get & Set Name
    get Name() {
        return this.name;
    }
    set Name(name) {
        if (name == "") {
            this.name = "Unname";
        }
        else {
            this.name = name;
        }
    }
    //Get & Set Address
    get Address() {
        return this.address;
    }
    set Address(address) {
        if (address == "") {
            this.address = "Unaddress";
        }
        else {
            this.address = address;
        }
    }
    //Get & Set Phone
    get Phone() {
        return this.phone;
    }
    set Phone(phone) {
        if (phone == "") {
            this.phone = "Unphone";
        }
        else {
            this.phone = phone;
        }
    }
}
