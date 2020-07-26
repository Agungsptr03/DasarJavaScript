let bmi = (b, t) => {
         let BMI = b / (t / 100) ** 2
    
         if (BMI < 18.5) {
             return console.log("Kekurangan Berat Badan");
         } else if (BMI >= 18.5 && BMI < 24.9) {
             return console.log("Normal");
         } else if (BMI >= 25 && BMI < 29.9) {
             return console.log("Kelibahan Berat Badan");
         } else {
             return console.log("Obesitas / Gemuk");
         }
     }
     bmi(90, 170)