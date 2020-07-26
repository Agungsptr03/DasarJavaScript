let nominal = (p, l) => {
    let luas = p * l / 100
    let harga = luas * 1500000
    return harga + (15 / 100 * harga)
}
console.log("Total Nominal tanah yang dibeli sebesar Rp." + nominal(20.5, 30))