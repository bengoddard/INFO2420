// JavaScript Document


	PrintButton1 = new Image

	PrintButton2 = new Image

	logo1 = new Image

	logo2 = new Image

if (document.images) {

	PrintButton1.src = "Images/Print1.jpg"

	PrintButton2.src = "Images/Print2.jpg"

	logo1.src = "Images/EH-Logo.png"

	logo2.src = "Images/EH-Logo2.png"

}





		var imgArray = new Array(

			'Image1Lg.png',

			'Image2Lg.png',

			'Image3Lg.png',

			'Image4Lg.png'

			



		);





		var titleArray = new Array(

			'Couple biking in mountains',

			'Couple biking in sunset',

			'Couple hiking by lake',

			'Couple camping in forest'

			

		);

			

		var imgPath = "Images/Fullsize/";

		

		function swapImage(imgID) {



			var theImage = document.getElementById('theImage');

			var textDiv = document.getElementById('bottomText');



			var newImg;

			var textTitle;



			newImg = imgArray[imgID];

			theImage.src = imgPath + newImg;



			textTitle=titleArray[imgID];



      		textDiv.innerHTML = textTitle;

		}

			

		function preloadImages() {		

			for(var i = 0; i < imgArray.length; i++) {

				var tmpImg = new Image;

				tmpImg.src = imgPath + imgArray[i];

			}

		}

		

