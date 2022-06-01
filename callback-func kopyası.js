// setTimeout : BU kullanım fonksiyonun belirli bir zamandan sonra çalışmasını sağlar
// function selamver(ifade, kim){
//     console.log(ifade + ', '+ kim);
// }
// setTimeout(selamver, 5000, "Merhaba", "Ahmet")  


//setInterval : Bu kullanım belirli aralıklar ile sürekli çalışmasını sağlar
// setInterval(()=>{
//     console.log("Bu fonksiyon her saniye sürekli olarak çalışabilen bir fonksiyon.");
// }, 1000);


import fetc from "node-fetch";
fetc ("https://jsonplaceholder.typicode.com/users").then((data) => 
console.log(data));