const names = [
  "Ground Jordan 4 Retro Military Red",
  "Adidas Yard Foam RNNR Stone Sage",
  "Itta Ground Weak 1 Low 07",
  "Adidas Yard Slide Onyx",
  "Adidas Yard Decrease 350 V2",
  "Itta Layup Low Championship Purple",
  "Ground Jordan 11 Retro Tanking",
  "Itta Layup Low SE Cardinal Red",
  "Ground Jordan Retro 13 Brave Blue",
  "Ground Jordan Mid Chicago",
  "Adidas Yard Decrease 500",
  "Adidas Yard Decrease 700",
  "Itta Layup Low Triple Black 07",
  "Itta Layup High Varsity Red",
  "Ground Jordan 4 Triple Threat",
  "Ground Jordan 11 Crimson Red",
  "Adidas Yard Foam RNNR Mist",
  "Itta Ground Weak Low Infime Black",
  "Itta Layup Mid Brooklyn",
  "Itta Ground Min 1 Treeline",
  "Itta Layup Mid Fossile",
  "Ground Jordan 3 St Patrick's day",
  "Itta SB Layup Low Cream",
  "Ground Jordan 5 Retro Jade",
  "Itta Ground Weak 1 High 07",
  "Itta Ground Min 97 Triple White",
  "Ground Jordan 1 Low Dye",
  "Itta Ground Minus Triple Black",
  "Ground Jordan Mid Banned",
];

function generateShoes(max) {
  for (let i = 0; i < max; i++) {
    document.getElementById("container").innerHTML += `
            <div class="flex flex-col items-center justify-between border-thin p-4 box-40">
              
                <img src="../../img/fake/${
                  Math.floor(Math.random() * 28) + 1
                }.jpeg" class="img-shoe"></img>
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between truncate">
                    <div>${names[Math.floor(Math.random() * 28) + 1]}</div>
                    <div class="text-gray ml-2">${
                      Math.floor(Math.random() * 200) + 200
                    }$</div>
                </div>
                <div class="button w-full" onClick="addBagCounter()">Add to cart<div>    
                </div>
                
            </div>
            `;
  }
}

function addBagCounter() {
  document.getElementById("bagCounter").innerHTML =
    Number(document.getElementById("bagCounter").innerHTML) + 1;
}
