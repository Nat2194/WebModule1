function addItem() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
  let counter = document.getElementsByTagName("form")[0].value++;
  if (price < 0 || !name) {
    return;
  }
  if (!image) {
    document.getElementById("container").innerHTML =
      `
        <div id="${counter}" class="flex flex-col items-center justify-between border-thin p-4 box-40">
            <img src="../../img/fake/${
              Math.floor(Math.random() * 28) + 1
            }.jpeg" class="img-shoe"></img>
            <div class="flex justify-between truncate">
                <div>${name}</div>
                <div class="text-gray ml-2">${price}$</div>
                </div>
                <div class="flex flex-row justify-center items-center gap-2 w-full">
                    <div class="button fg-1 px-8" onClick="addBagCounter()">Add to cart</div>
                    <img src="../../img/icons/cross.svg" style="height: 2rem;" onClick="removeItem(${counter})">
                </div>
        </div>
        ` + document.getElementById("container").innerHTML;
  } else {
    document.getElementById("container").innerHTML =
      `
        <div id="${counter}" class="flex flex-col items-center justify-between border-thin p-4 box-40">
            <img src=${image} class="img-shoe"></img>
            <div class="flex justify-between truncate">
                <div>${name}</div>
                <div class="text-gray ml-2">${price}$</div>
            </div>
            <div class="flex flex-row justify-between items-center gap-2 w-full">
                <div class="button px-8 fg-1" onClick="addBagCounter()">Add to cart</div>
                <img src="../img/icons/cross.svg" style="height: 2rem;" onClick="removeItem(${counter})">
            </div>
        </div>
        ` + document.getElementById("container").innerHTML;
  }
}

function removeItem(id) {
  document.getElementById(id).remove();
}
