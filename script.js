var cartValue = document.getElementById("cart-value");
var cartBtn = document.getElementById("cart");

var addBtns = document.getElementsByClassName("button");

var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

  
function updateCart(){
    let cart =0;
    for (i=0; i<items.length; i++){
        cart = cart+items[i].quantity;
    }
    cartValue.innerHTML=cart;
}


for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener("click", function () {
      items[i].quantity++;
      updateCart();
    });
  }

var finalDollars = 0;
var finalCents = 0;

function updatePrice(){
    let totalPriceInCents =0;

    for (i=0; i<items.length; i++){
        totalPriceInCents = totalPriceInCents + items[i].quantity * (items[i].dollars * 100 + items[i].cents);
    }
    finalDollars = Math.floor (totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

cartBtn.addEventListener("click", function () {
    updatePrice();
    for (let i=0; i<items.length; i++){
        if (items[i].quantity!=0){
            console.log("Item name : "+items[i].name +" - Quantity: "+ items[i].quantity);
        };
    }
    console.log("The total amount is " + finalDollars + "$ and " + finalCents + " cents");
});