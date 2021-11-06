



//to transform the cartItems array from string in local storage  to aaray 
let cartItems = JSON.parse(localStorage.getItem('items'));

//  returns the element that has the ID 'cart-table' with the specified value.
let table = document.getElementById('cart-table');

let tableRows = [];
//console.log('heello',cartItems);

for (let index = 0; index < cartItems.length; index++) {
    let tableRow = document.createElement('tr');
    //let img = document.createElement('img');
    //img.setAttribute('src', cartItems[index].img);
    //set data in coloms
    for (let j = 0; j <=2; j++) {
       // let qty = 0;
        // setting data in coloum 1
        if (j === 0) {
            let tableData = document.createElement('td');
            let par = document.createElement('p');
            par.textContent = cartItems[index].name;
            let img = document.createElement('img');
             img.setAttribute('src', cartItems[index].img);
            //let tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            tableData.appendChild(img);
            tableData.appendChild(par);
            table.appendChild(tableRow);
        } 
        
        //setting data in coloum 2 (price)
        else if (j === 1) {
            let tableData = document.createElement('td');
            let par = document.createElement('p');
            par.textContent = `${cartItems[index].price} JD`;
            tableData.appendChild(par);
            tableRow.appendChild(tableData);
        } 
        
        //setting data in coloum 3 (quantity)
        else if (j === 2) {

            let qty = 0;
            let tableData = document.createElement('td');
            inputQuantity = document.createElement('input');
            inputQuantity.setAttribute('type', 'number');
            inputQuantity.setAttribute('min', '0');
            inputQuantity.setAttribute('value', '1');
            inputQuantity.setAttribute('class', cartItems[index].name);
            tableData.appendChild(inputQuantity);
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Delete';
            removeButton.setAttribute('id', cartItems[index].name);
            removeButton.addEventListener('click', deleteItem);
            tableData.appendChild(removeButton);
            tableRow.appendChild(tableData);
           /* inputQuantity.setAttribute('type', 'number');
            inputQuantity.setAttribute('min', '0');
            inputQuantity.setAttribute('value', '1');
            inputQuantity.setAttribute('class', cartItems[index].name);*/
            //let tableData = document.createElement('td');
            //tableData.appendChild(inputQuantity);
           // removeButton.setAttribute('id', cartItems[index].name);
           // tableData.appendChild(removeButton);
            //tableRow.appendChild(tableData);
        }
    }
    // console.log(removeButton.parentElement.parentElement);
    // tableRows.push(removeButton.parentElement.parentElement);

}
// console.log(tableRows);

// 

function deleteItem(event) {
    let removeClicked = event.target;

    
    for (let index = 0; index < cartItems.length; index++) {
        console.log('value', removeClicked.id);
        if (removeClicked.id === cartItems[index].name) {
            console.log(cartItems[index].name, inputQuantity.classList.value);
            cartItems = cartItems.remove(cartItems[index]);
            quantityItemsArray.remove(quantityItemsArray[index]);
            // console.log(cartItems);
        }


    }
    localStorage.setItem('items', JSON.stringify(cartItems));
    updateTotal();
    removeClicked.parentElement.parentElement.remove();
    setToCart();
    // console.log(localStorage);
    // console.log(cartItems);
    // console.log(removeClicked.id)

}


let quantityItemsArray = [];
for (let index = 0; index < cartItems.length; index++) {
    quantityItemsArray.push(document.getElementsByClassName(cartItems[index].name)[0])
}
for (let index = 0; index < quantityItemsArray.length; index++) {
    let input = quantityItemsArray[index]
    input.addEventListener('change', updateQuantity)
}
function updateTotal() {
    let total = 0;
   
    // console.log(quantityItemsArray);
    for (let index = 0; index < quantityItemsArray.length; index++) {
        let price = cartItems[index].price;
        let quantity = parseInt(quantityItemsArray[index].value)
        // console.log(price, quantity);
        total += (price * quantity);
    }
    console.log(total);
    return total;
}
function updateQuantity(event) {
    let quantity = event.target;
    if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1;
    } else {
        updateTotal();
    }
}

let purchase = document.getElementById('total-price');
let par = document.createElement('span');
purchase.addEventListener('click', function () {
    let totalPrice = updateTotal();
    let tableSection = document.getElementById('table');
    par.textContent = `Total: ${totalPrice} JD`
    tableSection.appendChild(par);
    document.getElementById("payForm").style.display = "block";
});


Array.prototype.remove = function () {
    let what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        console.log(what);
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
          
        }
    }
    return this;
};



   function submit1() { 
     IsValed();
     if(isValed === false) return;
     var x = document.getElementById("happyAudio"); 
     x.play(); 
     localStorage.removeItem('cart')
   }
   function changePage() {
     if(isValed === false) return;
     if (window.confirm('Thanks for visiting our site , would you like to provide us with feedback !!'))
     {
         window.location.href = "feedback.html";
         window.location.replace("feedback.html")
     }
     else
     {
         window.location.href = "index.html";
         window.location.replace("index.html")   
     }
   }
 function pauseAudio() {
     var x = document.getElementById("happyAudio");
     x.pause();
   }
   function IsValed(){
     isValed = true;
     if (document.getElementById("CustomerIDModal").value === ""||
      document.getElementById("number").value === "" ||
      document.getElementById("email").value === '' ||
      document.getElementById("location").value === '' ||
      document.getElementById("cardNumber").value===''||
      document.getElementById("cardExpiry").value === '' ||
      document.getElementById("cardCVC").value === '' ||
      document.getElementById("couponCode").value === '' ) {
       isValed = false;
       var x = document.getElementById("cryAudio"); 
       x.play();
       setTimeout(() => {
           if (window.confirm('There are some fields that you did not fill out please check !!!')){
               x.pause();
           }
       }, 200);
     }
     return isValed
 }