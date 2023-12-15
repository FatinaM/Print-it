
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

	

/******* les fléches *********/

const precedent = document.getElementById("precedent");

precedent.addEventListener("click", function() {
    console.log("precedent");
});

const suivant = document.getElementById("suivant");
suivant.addEventListener("click", function() {

    console.log("suivant");
});

//Ajout des bullet ponts en fonction du nombre de slides

let conteneur = document.querySelector(".dots");
		
for (let i = 0; i < slides.length; i++) {

	let nouvelleDiv = document.createElement("div");

	nouvelleDiv.classList.add("dot");

	conteneur.appendChild(nouvelleDiv);
}

// Marquer manuellement le premier point comme sélectionné
document.querySelector('.dot:first-child').classList.add('dot_selected');

/*******defiler des images */

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slides.length -1){
        numero = 0;}

    if (numero < 0){
		numero = slides.length -1;}
	
		/****recup image */		
	let bannerImage = document.querySelector(".banner-img ");
		bannerImage.src = "./assets/images/slideshow/"+slides[numero].image;
		
		/*******recup text */
	let bannerText = document.querySelector("#banner p");
		bannerText.innerHTML = slides[numero].tagLine;
		
	

		//Selectionne le dot en fonction du slide actif
		let dots = document.querySelectorAll('.dot');
		dots.forEach((dot, index) => {
			if (index === numero) {
		        dot.classList.add('dot_selected'); // Ajouter la classe .dot_selected au bullet point correspondant au slide actuel
		    } else {
		        dot.classList.remove('dot_selected'); // Supprimer la classe .dot_selected des autres bullet points
		    }
		});
	}

setInterval("ChangeSlide(1)", 4000);
