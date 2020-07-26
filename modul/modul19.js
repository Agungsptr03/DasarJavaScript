class persegipanjang {
         constructor(p, l) {
             this.p = p
             this.l = l
         }
         luas = () => {
             return this.p * this.l
         }
         keliling = () => {
             return 2 * (this.p + this.l)
         }
     }
    
     let tanah = new persegipanjang(10, 50)
    
     console.log("Luas Tanah = " + tanah.luas());
     console.log("Keliling Tanah = " + tanah.keliling());
    