let counterButton = 0;
let counterGIF = 0;
let current = 0;
const addGIF = async (type) => {
  if (counterButton === 0) {
    counterButton = 1;
  } else {
    // to not generate too many GIFs
    if (counterButton > 5) {
      counterButton = 1;
    } else {
      counterButton *= 2;
    }
  }
  // if we are displaying a new GIF
  if (current === 0 || current != type) {
    counterButton = 1;
  }
  current = type;
  const res = await fetch(`/api/ping?id=${type}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      createGIF(data.id);
    });
};

const createGIF = (id) => {
  // move the elements upward to make place for the GIFs
  document.getElementById("biggest-container").style.maxHeight = "80vh";
  //change the size of the GIFs
  document.getElementById("container").style.gridTemplateColumns =
    "auto ".repeat(counterButton);
  document.getElementById("container").style.gridTemplateRows = "auto ".repeat(
    counterButton
  );
  //initialize the container
  document.getElementById("container").innerHTML = ``;
  // fill it again
  for (let i = 0; i < Math.pow(counterButton, 2); i++) {
    counterGIF++;
    document.getElementById("container").innerHTML =
      `
        <img id="${i}" src="img/${id}.gif" class ="gif"></img>
        ` + document.getElementById("container").innerHTML;
  }
};

const removeGIF = () => {
  document.getElementById("container").innerHTML = ``;
};
