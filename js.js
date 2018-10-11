//Ajout d'un évènement lorsque la souris passe au dessus de l'image
image1.addEventListener("mouseover",function(){
//Paramètre de la fonction image1.src = prendre l'id utiliser dans le html
  image1.src="assets/image1_2.jpg";
});
//Ajout d'un évènement lorsque la souris part de l'image1
image1.addEventListener("mouseout",function(){
//Paramètre de la fonction et faire pareil pour l'id
  image1.src="assets/image1.jpg";
});

//On recommence ?
image2.addEventListener("mouseover",function(){
  image2.src="assets/image2_2.jpg";
});
image2.addEventListener("mouseout",function(){
  image2.src="assets/image2.jpg";
});

// Image 3
image3.addEventListener("mouseover",function(){
  image3.src="assets/image3_2.jpg";
});
image3.addEventListener("mouseout",function(){
  image3.src="assets/image3.jpg";
});

// Image 4
image4.addEventListener("mouseover",function(){
  image4.src="assets/image4_2.jpg";
});
image4.addEventListener("mouseout",function(){
  image4.src="assets/image4.jpg";
});

// Image5
image5.addEventListener("mouseover",function(){
  image5.src="assets/image5_2.jpg";
});
image5.addEventListener("mouseout",function(){
  image5.src="assets/image5.jpg";
});
