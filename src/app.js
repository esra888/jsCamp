console.log("merhaba kodlama ailesi")

var dolarDun = 9.20
var dolarBugun = 9.30
dolarDun = "Ankara"
console.log(dolarDun) //javaScript type safe değildir. Tipi farklı olsa da değiştirebildik.

let dolarDun2 = 9.20
let dolarBugun2 = 9.30

{
    let dolarDun2 = 9.10  // eğer let değil var olarak tanımlama yapsaydık
    //bu scope ın dışında dahi dolarDun2 nin değeri değişmiş olacaktı.
    //o yüzden var kullanmıyoruz let tercih ediyoruz.
}
console.log(dolarDun2)

const euroDun = 11.2
//euroDun = 11 //const ile bir değişken tanımlamsı yapıldığında değerini sonradan değiştiremeyiz, ön yüzde hata verir.
console.log(euroDun) 

//array
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi" , "Kamu konut kredisi"]

console.log("<ul>")
for(let x=0; x< konutKredileri.length; x++){
    console.log("<li>" + konutKredileri[x] +"</li>")
}
console.log("</ul>")
console.log(konutKredileri)

