
var mass = Number(prompt("Og'irlikingiz (kg)"));
var height = Number(prompt("Uzunligiz metrda ( misol: 1.6 )"));
var BMI = Number(mass/((height)**2));

if( BMI <= 25 && BMI >= 18 ){
    alert("siz sog'lomsiz")
}
else if( BMI < 17){
    alert("semiring")
}
else if( BMI > 25 ){
  alert("maslahat (parhez)")
}
else{
  alert("xato qiymat")
}
