'use strect'; 
// console.log('test');

function Cars(carmodel,carmodelyear,manufacturer){
    this.carmodel=carmodel;
    this.carmodelyear=carmodelyear;
    this.manufacturer=manufacturer;
    this.price= randomprice();
Cars.prototype.allCars.push(this);
}
Cars.prototype.allCars=[];

var form = document.getElementById('form');

form.addEventListener('submit',addcar);

function addcar(event){
event.preventDefault(); 
// console.log(event.target.carModel.value);
var carmodel = event.target.carModel.value ; 
var carmodelyear = event.target.carModelYear.value; 
var manufacturer = event.target.manufacturer.value ; 

new Cars (carmodel,carmodelyear, manufacturer); 

console.log(Cars.prototype.allCars);
carstable();
}

function randomprice () {
    return Math.floor(Math.random()*(100000-7000)+7000);
}
var datarow;
var carmodeldata; 
var carmodelyeardata;
var manufacturerdata; 
var pricedata; 
function carstable(){
    var table = document.getElementById('carsTable'); 
    var headerrow = document.createElement('tr'); 
    table.appendChild(headerrow);
    var carModel = document.createElement('th'); 
    table.appendChild(carModel); 
    carModel.textContent= 'car modle'; 
    var carModelYear = document.createElement('th'); 
    table.appendChild(carModelYear); 
    carModelYear.textContent = 'car model year';
    var manufacturer = document.createElement('th');
    table.appendChild(manufacturer);
    manufacturer.textContent = 'manufacturer';
    var price = document.createElement('th'); 
    table.appendChild(price); 
    price.textContent = 'price';
    for (var i=0 ;i<Cars.prototype.allCars.length ; i++ ){
     datarow = document.createElement('tr');
     table.appendChild(datarow); 


     carmodeldata = document.createElement('td'); 
     table.appendChild(carmodeldata); 
     carmodeldata.textContent = Cars.prototype.allCars[i].carmodel; 



     carmodelyeardata = document.createElement('td'); 
     table.appendChild(carmodelyeardata); 
     carmodelyeardata.textContent = Cars.prototype.allCars[i].carmodelyear;



     manufacturerdata = document.createElement('td'); 
     table.appendChild(manufacturerdata); 
     manufacturerdata.textContent = Cars.prototype.allCars[i].manufacturer; 



     pricedata = document.createElement('td'); 
     table.appendChild(pricedata); 
     pricedata.textContent = Cars.prototype.allCars[i].price + ' $'; 



    } 


}

