let siswa = [{
             nama_depan: "Jack",
             nama_belakang: "Ma"
        },
         {
             nama_depan: "Jonny",
             nama_belakang: "English"
         },
         {
             nama_depan: "John",
             nama_belakang: "Cena"
         }
     ]
     siswa.map(
             (s, i) => {
                 console.log(s.nama_depan + " " + s.nama_belakang);
             }
         )