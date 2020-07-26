class persegipanjang {
    constructor(p, l) {
        this.panjang = p
        this.lebar = l
    }
    luas = () => {
        return this.panjang * this.lebar
    }
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

class balok extends persegipanjang {
         constructor(p, l, t) {
             super(p, l);
             this.tinggi = t
         }
         luas = () => {
             return (2 * this.panjang * this.lebar) + (2 * this.panjang * this.tinggi) + (2 * this.lebar * this.tinggi)
         }
         volume = () => {
             return this.panjang * this.lebar * this.tinggi
         }
     }
     let lemari = new balok(10, 5, 2)
    
     console.log("Luas Lemari = " + lemari.luas());
     console.log("Volume Lemari = " + lemari.volume());