//setting data
let typesArray = [];
let girlCounter =0;
let boyCounter =0;

let girlsProducts =['toy1','toy2','toy3','toy4','toy5','toy6','toy7','toy8','cloth1','cloth2','cloth3','cloth4','cloth5','cloth6','cloth7','cloth8','bag1','bag2','bag3','bag4','bag5','bag6','bag7','bag8']
let boysProducts =['toya','toyb','toyc','toyd','toye','toyf','toyg','toyh','clotha','clothb','clothc','clothd','clothe','clothf','clothg','clothh','baga','bagb','bagc','bagd','bage','bagf','bagg','bagh']

let arrayOfProducts=[];
let arrayOfPrices=[];
let arrayOfClicks=[];

//function to generate random price .
function randomPrices(){
    for (i=0;i<48;i++){
        arrayOfPrices.push(Math.floor(Math.random()*(50-10)+10));
    }

}

randomPrices();

//constructor function for girlssection 
function GirlsSection (name,price){

    this.name=name;
    this.price=price;
    this.categories='girl';
    this.click=0;
    while(girlCounter<8){
        this.img='img/Girls/GirlsToys/'+name+'.jpg'
        this.type='GirlsToys'
        break;
    }


    while(girlCounter >=8 && girlCounter<=15 ){
        this.img='img/Girls/GirlsClothes/'+name+'.jpg'
        this.type='GirlsClothes'
        break;
    }
    while(girlCounter>=16 && girlCounter<24 ){
        this.img='img/Girls/GirlsBags/'+name+'.jpg'
        this.type='GirlsBags'
        break;
    }

    girlCounter++;
    
}

//constructor function for boysssection 
function BoysSection (name,price){

    this.name=name;
    this.price=price;
    this.categories='boy';
    while(boyCounter<8){
        this.img='img/Boys/BoysToys/'+name+'.jpg'
        this.type='BoysToys'
        break;
    }


    while(boyCounter >=8 && boyCounter<=15 ){
        this.img='img/Boys/BoysClothes/'+name+'.jpg'
        this.type='BoysClothes'
        break;
    }
    while(boyCounter>=16 && boyCounter<24 ){
        this.img='img/Boys/BoysBags/'+name+'.jpg'
        this.type='BoysBags'
        break;
    }

    boyCounter++;
    
}

function creatingGirlObjects (girlSection,price){
for (let i = 0; i<girlSection .length; i++) {
  let obj=new GirlsSection (girlSection[i],price[i])
  arrayOfProducts.push(obj);
}
}

function creatingBoyObjects (boySection,price){
    for (let i = 0; i <boySection .length; i++) {
      let obj=new BoysSection (boySection[i],price[i])
      arrayOfProducts.push(obj);
    }
    }

    //calling 
    creatingGirlObjects(girlsProducts,arrayOfPrices);
    creatingBoyObjects(boysProducts,arrayOfPrices);
console.log( arrayOfProducts);

//cart
let cartItems = [];
let table = document.getElementById('item-table');
let girls = document.getElementById('girls');
let trOne=document.createElement('tr');
let trTwo=document.createElement('tr');
girls.addEventListener('change',function(event)
{trOne.innerHTML ='';
trTwo.innerHTML='';
table.appendChild(trOne)  ;
table.appendChild(trTwo);
let type =event.target.value
let typesArray = [];
for (let index=0;index<arrayOfProducts.length;index++){
    if(arrayOfProducts[index].type===type){
        typesArray.push(arrayOfProducts[index]);
    

    }
   
}
for (let index =0;index<typesArray.length;index++)  {
    let tdEl =document.createElement('td');
    let imgTag = document.createElement('img');
    let paregraph = document.createElement('p');
    let price = document.createElement('span');
    let div = document.createElement('div');
    let button = document.createElement('button');
    if (index < 4) {
        button.setAttribute('class', typesArray[index].name);
        button.addEventListener('click', cart);
        this.click++;
       trOne.appendChild(tdEl);
        imgTag.setAttribute('src',   typesArray[index].img);
        tdEl.appendChild(imgTag);
        div.appendChild(paregraph);
        div.appendChild(price);
      tdEl.appendChild(div);
        paregraph.textContent = `${typesArray[index].name}`;
        price.textContent = `${typesArray[index].price} JD`;
     tdEl.appendChild(button);
        button.textContent = 'Add to cart';
      } else {
        button.setAttribute('class', typesArray[index].name);
        button.addEventListener('click', cart);
        this.click++;
      trTwo.appendChild(tdEl);
        imgTag.setAttribute('src',typesArray[index].img);
       tdEl.appendChild(imgTag);
        div.appendChild(paregraph);
        div.appendChild(price);
        tdEl.appendChild(div);
        paregraph.textContent = `${typesArray[index].name}`;
        price.textContent = `${typesArray[index].price} JD`;
       tdEl.appendChild(button);
        button.textContent = 'Add to cart';
      }
  
}
    
}
);

let boys = document.getElementById('boys');

boys.addEventListener('change',function(event)
{trOne.innerHTML ='';
trTwo.innerHTML='';
table.appendChild(trOne)  ;
table.appendChild(trTwo);
let type =event.target.value
let typesArray = [];
for (let index=0;index<arrayOfProducts.length;index++){
    if(arrayOfProducts[index].type===type){
        typesArray.push(arrayOfProducts[index]);
    

    }
   
}
for (let index =0;index<typesArray.length;index++)  {
    let tdEl =document.createElement('td');
    let imgTag = document.createElement('img');
    let paregraph = document.createElement('p');
    let price = document.createElement('span');
    let div = document.createElement('div');
    let button = document.createElement('button');
    if (index < 4) {
        button.setAttribute('class', typesArray[index].name);
        button.addEventListener('click', cart);
       trOne.appendChild(tdEl);
        imgTag.setAttribute('src',   typesArray[index].img);
        tdEl.appendChild(imgTag);
        div.appendChild(paregraph);
        div.appendChild(price);
      tdEl.appendChild(div);
        paregraph.textContent = `${typesArray[index].name}`;
        price.textContent = `${typesArray[index].price} JD`;
     tdEl.appendChild(button);
        button.textContent = 'Add to cart';
      } else {
        button.setAttribute('class', typesArray[index].name);
        button.addEventListener('click', cart);
      trTwo.appendChild(tdEl);
        imgTag.setAttribute('src',typesArray[index].img);
       tdEl.appendChild(imgTag);
        div.appendChild(paregraph);
        div.appendChild(price);
        tdEl.appendChild(div);
        paregraph.textContent = `${typesArray[index].name}`;
        price.textContent = `${typesArray[index].price} JD`;
       tdEl.appendChild(button);
        button.textContent = 'Add to cart';
      }
  
}
    
}
);

function storeData() {
  localStorage.setItem('items', JSON.stringify(cartItems));
}


function cart(event) {
    for (let index = 0; index < arrayOfProducts.length; index++) {
      if (arrayOfProducts[index].name === event.target.classList.value) {
        cartItems.push(arrayOfProducts[index]);
       let disableButton = document.getElementsByClassName(arrayOfProducts[index].name)[0];
        disableButton.setAttribute('disabled', true);
        disableButton.textContent = 'Added to the Cart';
       
      }
    }
   storeData();
  }
  
  