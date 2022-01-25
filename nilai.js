function SeleksiNilai (awal, akhir, arr){
    if (awal < akhir && awal !== akhir){
        if (arr.length > 5){
            const res = arr.filter(el => el > awal && el < akhir);
            res.sort(function (a,b){
                return a - b
            });
            console.log(res);
        } 
        else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5") 
        }
    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

SeleksiNilai(5, 5, [2, 25, 4])
