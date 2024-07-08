class laptop {
    constructor(brand) {
        this.lapname = brand;
 }
 present() {
    return 'the laptop name is' + this.lapname;

 }
}
class Model extends laptop {
    constructor(brand,mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + 'this model name is' + this.model;
    }
}
let lap1 = new Model("Dell","ROG");
console.log(lap1.show());