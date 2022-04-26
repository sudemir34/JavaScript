document.getElementById("h3").style.color = "red";

var nesne = document.getElementById("birinci").innerHTML = "değişri"




let ad = "Sümeyye";
let surname = "Demir"
let value;
const dizi = "js, python, java, c#"

// Concat : stringleri birleştirmek için kullanılır
ad = ad.concat(" ",surname);
console.log(ad);

//length : karakter sayısını verir
console.log(surname.length)

//uzunluğunu bilmedğimiz dtringlerde son karakteri döndürmeye yarar
value = surname[surname.length-1];
console.log(value)

//tuUppercase : Karakterleri büyük harflere dönüştürür
value = surname.toUpperCase();

// toLowerCase : Karakterleri küçük harflere dönüştürür
value = surname.toLowerCase()
 
//indexof : içine verilern değerin sırasını döndürür
value = surname.indexOf("r")

//lastIndexOf : içine verilen değerin sondan değerini döndürür
value = surname.lastIndexOf("D")

//charAt() : indise göre değer döndürür
value = surname.charAt(1)

//substring : iki parametre arasındaki değeri döndürür (ilk verilern parametre dahil sn verilen parametre değeri dahil değil)
value = surname.substring(1,-4)

//slice : iki parametre arasındaki değeri döndürür. Eksiltili değerleri almaz substring ile arasındaki fark budur.
value  = surname.slice(1,4)
//split : stringleri diziye döndürür
value = dizi.split(",")
console.log(value)

//replace : string değerleri değiştirir
value = dizi.replace("js","javascript")
console.log(value)

// includes : string var mı yok mu kontrol eder
value = dizi.includes("java") // dizi adlı değişenimin içinde "java" stringi bulunduğu için console da true değeri döner
console.log(value)






// Template Literal String
let name = "Sümeyye"
let surnm = "Demir"
let departman = "Bilişim Teknolojileri"


const yazdır  = `İsim:${name}\nSoyad:${surnm}\nDepartmanı:${departman}`;
console.log(yazdır)


const html = `
    <ul> 
    <li> ${name} </li>
    <li> ${surnm} </li>
    <li> ${departman} </li>

`;
document.body.innerHTML = html;





// Arraylar
let çıktı;

const numbers =[23,67,89,86,90,55,788];
const numbers2 = new Array(54,09,87,87); // şekline iki türlü kullanıma sahiptir

//uzunluk bulma
çıktı = numbers.length;

// indexleme
çıktı = numbers[0];
çıktı = numbers[4];
çıktı = numbers[numbers.length-1]; // dizideki son değeri döndürür
console.log(çıktı)

// indexteki değeri değiştirme
numbers[2] = 10000;
console.log(numbers)

// arrrayin sonuna değer ekleme - push
numbers.push(900);
console.log(numbers)

// arrayin başına değer ekleme
numbers.unshift(200)
console.log(numbers)

// arrayin en sonundan değer atar
numbers.pop()
console.log(numbers)

// arrayin en başındaki değeri atar
numbers.shift()
console.log(numbers)

// verilen aralık arasında dizideki değerleri siler
numbers.splice(0,3); // 0. indisten başlar 3. indise kadar olan değerleri siler ama 3. indisi dahil etmez (0,1,2)
console.log(numbers)

// arrayi tersine çeviri
numbers.reverse();
console.log(numbers)


// dizideki elemanları küçükten büyüğe doğru dizer fakat dikkat et!!!!
numbers.sort()
console.log(numbers)

// bu fonksiyonu tanımlayarak sayıları düzgün bir şekilde küçükten büyüğe doğru sıralayabilirsinin
 çıktı = numbers.sort(function(x,y){
     return x - y;
 });
 console.log(çıktı)

// bu fonksiyonu tanımlayarak sayıları düzgün bir şekilde büyükten küçüğe doğru sıralayabilirsinin
 çıktı = numbers.sort(function(x,y){
     return y -x;
 })
 console.log(çıktı)





 // Obje Kavramı-Obje oluşturma
 let obje1;
 const programmer = {
     name : "Sümeyye",
     surname : "Demir",
     age : 21,
     email : "info@gmail.com",
     lengs : ["HTML", "Css", "Js"],

     adress : {
         city : "Urfa",
         streat : "Karaköprü"
     },
     work : function(){
         console.log("Kendini geliştiriyor");
     }

 }
 console.log(programmer.adress.city)

 const date = new Date();
 console.log(date.getMinutes())


// Ternary operatörü
let number = 100;
console.log(number === 100 ? "Sayı 100 e eşit" : "Sayı 100 e eşit değil")



function sqrt(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}

let a;
a = sqrt(2);
console.log(a);

 a= cube(a);
 console.log(a);



 //Immediately Invoked Function Expression (IIFE) (Tanımlandığı yerde çalıştırılan fonksiyonlar)
 (function(name){
     console.log("Bu fonksyonun adı : " + name);
 })("IIFE");


 // bir objenin içinde fonksiyon kullanılmasına metod denir
const database = {
    host : "localhost",
    add : function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    },
    update:function(id){
        console.log(`Id : ${id} güncellendi`);
    },
    delete:function(id){
        console.log(`Id : ${id} sisndi`);
    }
}
console.log(database.host);
database.add(3);
database.update(5);

if(confirm("sayfa yenilensin mi ?")){
    window.location.reload();
    
}
else{
    console.log("sayfa yenilenmedi");
}