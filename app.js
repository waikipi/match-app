document.getElementById('matchAlert').style.display = 'none';

let pictureBank = ["<img src='images/p1.jpg'>", '<img src="images/p2.jpg">', '<img src="images/p3.jpg">', '<img src="images/p4.jpg">', '<img src="images/p5.jpg">',
'<img src="images/p6.jpg">', '<img src="images/p7.jpg">', '<img src="images/p8.jpg">', '<img src="images/p9.jpg">', '<img src="images/p10.jpg">', '<img src="images/p11.jpg">',
'<img src="images/p12.jpg">', '<img src="images/p13.jpg">', '<img src="images/p14.jpg">', '<img src="images/p15.jpg">', '<img src="images/p16.jpg">', '<img src="images/p17.jpg">',
'<img src="images/p18.jpg">', '<img src="images/p19.jpg">', '<img src="images/p20.jpg">']


let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');
let p9 = document.getElementById('p9');
let p10 = document.getElementById('p10');
let p11 = document.getElementById('p11');
let p12 = document.getElementById('p12');
let p13 = document.getElementById('p13');
let p14 = document.getElementById('p14');
let p15 = document.getElementById('p15');
let p16 = document.getElementById('p16');

let pictureIdArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

let stringPicture1 = '';
let stringPicture2 = '';
let pictureArray1 = [];
let finalRandomPictureArrayItem = [];
let finalRandomPictureArray = [];
let pictureArray1Item;
let pictureArray2Item;
let finalPictureArray = [];
let counter = 0;
let gameOn = false;

const changePicture = (object, picture) => {
	if(gameOn){
		object.innerHTML = picture;
	}
}

const hideAlert = (id) => {
	document.getElementById(id).style.display  = 'none';
}

const matchPicture = (picture) => {
	if(gameOn){
		if(stringPicture1 == ''){
			stringPicture1 = picture;
		} else {
			stringPicture2 = picture;
			if(stringPicture1 === stringPicture2){
				document.getElementById('matchAlert').style.display  = 'block';
				setTimeout(hideAlert, 2000, 'matchAlert');
				stringPicture1 = '';
				stringPicture2 = '';
				counter++;
			} else {
				for(let i=0; i<pictureIdArray.length; i++){
					pictureIdArray[i].innerHTML = finalRandomPictureArray[i];
				}
				alert(`You failed!!! Sorry game over. You matched ${counter} times`);
				setTimeout(function(){
					window.location.reload();
				}, 5000);
			}
		}
	}
}



for(let i=0; i<8; i++){
  pictureArray1Item = pictureBank.splice(Math.floor(Math.random()*pictureBank.length), 1);
  for(let j=0; j<pictureArray1Item.length; j++){
    pictureArray1.push(pictureArray1Item[j]);
	finalPictureArray.push(pictureArray1Item[j]);
  }
}

let pictureArray1Copy = [...pictureArray1];


for(let i=0; i<pictureArray1.length; i++){
  pictureArray2Item = pictureArray1Copy.splice(Math.floor(Math.random()*pictureArray1Copy.length), 1);
  for(let j=0; j<pictureArray2Item.length; j++){
	finalPictureArray.push(pictureArray2Item[j]);
  }
}

let finalPictureArrayCopy = [...finalPictureArray]

for(let i=0; i<finalPictureArray.length; i++){
	finalRandomPictureArrayItem = finalPictureArrayCopy.splice(Math.floor(Math.random()*finalPictureArrayCopy.length), 1);
	for(let j=0; j<finalRandomPictureArrayItem.length; j++){
		finalRandomPictureArray.push(finalRandomPictureArrayItem[j]);
	}
}


let seconds = 10;

const countdown = () => {
	document.getElementById('countdown').innerHTML = seconds;
	if(seconds == 0){
		pictureIdArray.forEach(x => x.innerHTML = '<img src="images/question.png">');
	} else {
		seconds -= 1;
		setTimeout(countdown, 1000);
	}
}

const showPictures = () => {
	gameOn = true;
	for(let i=0; i<pictureIdArray.length; i++){
		pictureIdArray[i].innerHTML = finalRandomPictureArray[i];
	}
}

let bMatch = document.getElementById('bMatch');

bMatch.addEventListener('click', function(){
	setTimeout(countdown, 5000)
})
bMatch.addEventListener('click', showPictures)

p1.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[0])}, false);
p1.addEventListener('click', function(){matchPicture(finalRandomPictureArray[0])}, false);
p2.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[1])}, false);
p2.addEventListener('click', function(){matchPicture(finalRandomPictureArray[1])}, false);
p3.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[2])}, false);
p3.addEventListener('click', function(){matchPicture(finalRandomPictureArray[2])}, false);
p4.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[3])}, false);
p4.addEventListener('click', function(){matchPicture(finalRandomPictureArray[3])}, false);
p5.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[4])}, false);
p5.addEventListener('click', function(){matchPicture(finalRandomPictureArray[4])}, false);
p6.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[5])}, false);
p6.addEventListener('click', function(){matchPicture(finalRandomPictureArray[5])}, false);
p7.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[6])}, false);
p7.addEventListener('click', function(){matchPicture(finalRandomPictureArray[6])}, false);
p8.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[7])}, false);
p8.addEventListener('click', function(){matchPicture(finalRandomPictureArray[7])}, false);
p9.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[8])}, false);
p9.addEventListener('click', function(){matchPicture(finalRandomPictureArray[8])}, false);
p10.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[9])}, false);
p10.addEventListener('click', function(){matchPicture(finalRandomPictureArray[9])}, false);
p11.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[10])}, false);
p11.addEventListener('click', function(){matchPicture(finalRandomPictureArray[10])}, false);
p12.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[11])}, false);
p12.addEventListener('click', function(){matchPicture(finalRandomPictureArray[11])}, false);
p13.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[12])}, false);
p13.addEventListener('click', function(){matchPicture(finalRandomPictureArray[12])}, false);
p14.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[13])}, false);
p14.addEventListener('click', function(){matchPicture(finalRandomPictureArray[13])}, false);
p15.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[14])}, false);
p15.addEventListener('click', function(){matchPicture(finalRandomPictureArray[14])}, false);
p16.addEventListener('click', function(){changePicture(this, finalRandomPictureArray[15])}, false);
p16.addEventListener('click', function(){matchPicture(finalRandomPictureArray[15])}, false);






