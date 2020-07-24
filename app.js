var items = [
  ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
  ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
  ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
  ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
  ];

/*var listCard = "";
for(var i=0; i<items.length; i++){
listCard += `<div class="card" style="width: 18rem;">
              <img src="./asset/${items[i][4]}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title" id="itemName">${items[i][1]}</h5>
                  <p class="card-text" id="itemDesc">${items[i][3]}</p>
                  <p class="card-text" id="itemPrice">Rp ${items[i][2]}</p>
                  <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
              </div>
          </div>`
}

document.getElementById("listBarang").innerHTML = listCard;*/

function printItems(array){
  var listCard = "";
  for(var i=0; i<array.length; i++){
      listCard+=`<div class="card" style="width: 18rem;">
              <img src="./asset/${array[i][4]}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title" id="itemName">${array[i][1]}</h5>
                  <p class="card-text" id="itemDesc">${array[i][3]}</p>
                  <p class="card-text" id="itemPrice">Rp ${array[i][2]}</p>
                  <a href="#" class="btn btn-primary addCart" onclick="addToCart(${array[i]})">Tambahkan ke keranjang</a>
              </div>
          </div>`
  }
  return listCard;
}

document.getElementById("listBarang").innerHTML = printItems(items);


//looping array sesuai keyword pada elemen ke i tiap item
// 0.tangkap event
// 1.di dalam event handler, tangkap value dr input id=keyword

var formSearch = document.getElementById("formItem");
formSearch.addEventListener("submit", function (evt) {
  evt.preventDefault()
  var keyword = document.getElementById("keyword").value;
  console.log(keyword);
  var filteredItem = filtering(keyword,items);

  document.getElementById("listBarang").innerHTML = printItems(filteredItem);

})


function filtering(string,array){
  var filteredItem = [];
  for(var k=0; k<array.length; k++){
    var itemNameLowerCase = array[k][1].toLowerCase();
    var stringToLowerCase = string.toLowerCase();
    if(itemNameLowerCase.includes(stringToLowerCase)){
      filteredItem.push(array[k]);
    }
  } 
  return filteredItem;
}


var cartButtons = document.getElementsByClassName("addCart");
for(var l=0; l<items.length;l++){
  cartButtons[l].addEventListener("click", () =>{
    cartNumbers();
  });
}

function onLoadCartNumber(){
  var productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.getElementById("cart").innerHTML = `(${productNumbers})`
  }
}



function cartNumbers(){
  var productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.getElementById("cart").innerHTML = `(${productNumbers+1})`;
  }else{;
    localStorage.setItem('cartNumbers', 1);
    document.getElementById("cart").innerHTML = `(${1})`;
  }
  
}

onLoadCartNumber()