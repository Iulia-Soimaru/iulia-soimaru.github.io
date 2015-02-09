//Pseudocode:
// 1) Create variable with all images
// 2) Create a loop that will automaticaly create html images
// 3) Display images on the screen
// 4) Create a function that will manipulate image on click
// 5) Open the image on first click, and then when visitor opens the second image, check if first and second image opened match.
// 6) If they match keep images open, if not close them both automaticaly after 3 seconds.


//array of all images
var images = [
  ["png/whatsapp.png", "item1"],
  ["png/audio49.png", "item2"],
  ["png/link23.png", "item3"],
  ["png/favourites7.png", "item4"],
  ["png/home153.png", "item5"],
  ["png/internet5.png", "item6"],
  ["png/seo10.png", "item7"],
  ["png/technical.png", "item8"],
  ["png/website8.png", "item9"],
  ["png/birthday10.png", "item10"],
  ["png/games33.png", "item11"],
  ["png/theater4.png", "item12"],
  ["png/pac.png", "item13"],
  ["png/ascendant6.png", "item14"],
  ["png/car95.png", "item15"],
  ["png/favorite21.png", "item16"],
  ["png/magnifier13.png", "item17"],
  ["png/man204.png", "item18"],
  ["png/plate7.png", "item19"],
  ["png/call37.png", "item20"]
]

var div, image;
//we use [0] because javascript returns an array
var board = document.getElementsByClassName('board')[0],
    counterBlock = document.getElementsByClassName("counterBlock")[0],
    counterSpan = document.getElementsByClassName("counter")[0],
    randomImage = document.getElementsByClassName("randomImage")[0],
    imageCard = document.getElementsByClassName("image_card"),
    counter = 1;

var randomNumber = Math.floor((Math.random() * images.length-1) + 1);
randomImage.innerHTML = '<img src="'+images[randomNumber][0]+'" alt="'+images[randomNumber][1]+'">';


function printImages(list){
  //loop for creating html divs with images
    for (var i = 0; i < images.length; i++) {
      div = '<div class="image_card">';
      image = '<img src="'+images[i][0]+'" alt="'+images[i][1]+'">'
      div += image + '</div>'
      board.innerHTML += div;
    };
}
//create variable to select needed div

function clickEvent(){
  for(var i=0; i < images.length; i ++) {
    imageCard[i].addEventListener('click', openImage)
  }
};
function removeEvent(){
  for(var i=0; i < images.length; i ++) {
    imageCard[i].removeEventListener('click', openImage)
  }
};

function openImage(){
  var child = this.firstChild;
  if (child.style.display == 'none' || child.style.display == "") {
      child.style.display = "block"
  } else {
      child.style.display = "none"
  }
  counterSpan.innerHTML = counter;
  var alt = child.getAttribute('alt');

  if (alt == images[randomNumber][1]) {
    this.style.backgroundColor = "#188741";
    counterBlock.innerHTML = "Yahoo, you found it! And you spent " + counter + " moves to find it!";
    removeEvent();
  }
  counter++;
}

printImages(images);
clickEvent();

