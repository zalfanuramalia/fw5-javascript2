function SeleksiNilai (awal, akhir, arr){
    if (awal < akhir && awal !== akhir){
        if (arr.length > 5){
            const res = arr.filter(el => el > 5 && el < 20);
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

SeleksiNilai(5,  20, [2, 25, 4, 14, 17, 30, 8])
