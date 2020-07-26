let barang = [{
             nama: "Rinsoo",
             harga: 5000
         },
         {
             nama: "Moonlight",
             harga: 4000
         }
     ]
    
     console.log("Isi Array barang");
     console.log(barang);
     console.log("Jumlah Data = " + barang.length);
     console.log("----------------------------");
     barang.push({
         nama: "Mloto",
         harga: 1000
     })
    
     console.log("Isi Array barang saat ini");
     console.log(barang);
     console.log("Jumlah Data saat ini = " + barang.length);