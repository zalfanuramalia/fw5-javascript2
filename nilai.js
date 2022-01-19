function SeleksiNilai (awal, akhir, arr){
    if (awal < akhir){
        if (arr.length > 5){
            console.log(arr.filter(el => el > 5 && el < 20))
        } 
        else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }
    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

SeleksiNilai(4,17,[2,25,4])
