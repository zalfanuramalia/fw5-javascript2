//10 Metode Bawaan Javascript

// 1. forEach() adalah metode yang berfungsi untuk melakukan pengulangan di dalam array
const array = [1, 2, 3, 4, 5]

array.forEach(item => { 
  console.log(item);  // Output: 1 2 3 4 5
});

//2. includes() adalah metode yang berfungsi untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak.
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const something = angka.includes(2);
const any = angka.includes(10);

console.log(something); // Output: true
console.log(any); // Output: false

//3. some() adalah metode yang berfungsi untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi.
const angka1 = [1, 2, 3, 4, 5]

const some = angka1.some(item => item % 2);
console.log(some); // Output: true

// mengecek apakah dalam array angka terdapat elemen yang kurang dari 0
const thing = angka1.some(item => item < 0);
console.log(thing); // Output: false

//4. every() adalah metode yang berfungsi untuk mengecek apakah setiap elemen dalam array memenuhi kondisi.
const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mengecek apakah semua elemen lebih dari 5
const greaterFive = angka2.every(item => item > 4);
console.log(greaterFive); // Output: false

// mengecek apakah semua element kurang dari 10
const lessTen = angka2.every(item => item < 10);
console.log(lessTen); // Output: true

//5. reduce() adalah metode yang berfungsi untuk mereduce elemen array menjadi satu nilai dengan menjumlah setiap elemen dari kiri ke kanan.
const angka3 = [1, 2, 3, 4, 5];
const sum = angka3.reduce((total, value) => total + value, 0); // kita dpt mengganti 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
console.log(sum); // Output: 15

//6. join() adalah metode yang berfungsi untuk menggabungkan elemen array menjadi sebuah string. Metode ini akan berfungsi sebagai karakter 'pembatas' untuk menyatukan array.
var angka4 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(angka4.join());         //hasil: 1,2,3,4,5,a,b,c,d,e
console.log(angka4.join("."));      //hasil: 1.2.3.4.5.a.b.c.d.e
console.log(angka4.join("|"));      //hasil: 1|2|3|4|5|a|b|c|d|e
console.log(angka4.join("_"));      //hasil: 1_2_3_4_5_a_b_c_d_e

//7. toString() adalah metode yang digunakan secara internal oleh JavaScript ketika suatu objek perlu ditampilkan sebagai teks (seperti dalam HTML), atau ketika suatu objek perlu digunakan sebagai string.
let text = ["Hello!", "Hai!"];
let result = text.toString();
console.log(result); // Output : Hello!,Hai!

//8. reverse() adalah metode yang berfungsi untuk membalikkan urutan dari elemen di dalam array.
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
var arr2 = arr1.reverse();        
console.log(arr2.toString());  //Output: e,d,c,b,a,5,4,3,2,1

//9. slice() adalah metode yang berfungsi untuk memotong array menjadi array baru, atau menjadi sub-array dari asal.
var arr1 = [1,2,3,4,"a","b","c","d"];
  
//slice dari index ke 2 sampai 4
var arr2 = arr1.slice(2,4)
console.log(arr2.toString());         //hasil: 3,4
  
//slice dari index ke 4 sampai akhir array
var arr3 = arr1.slice(4)
console.log(arr3.toString());         //hasil: a,b,c,d
  
//slice dari index ke 2 dari akhir array
var arr4 = arr1.slice(-2)
console.log(arr4.toString());         //hasil: c,d
  
//slice dari index ke 5 dari akhir array sampai index ke 2 dari akhir array
var arr5 = arr1.slice(-5,-2)
console.log(arr5.toString());         //hasil: 4,a,b

//10. splice() adalah metode yang digunakan untuk memotong array, menambahkan array, atau melakukan keduanya sekaligus.
var arr1 = [1,2,3,4,"a","b","c","d"];
  
//splice dari index ke 4
var arr2 = arr1.splice(4, 2)
  
console.log(arr1.toString());     // hasil: 1,2,3,4,b,c,d
