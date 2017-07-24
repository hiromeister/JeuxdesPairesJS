let cartes = ['img/ane.jpg', 'img/chat.jpg', 'img/chien.jpg', 'img/lama.jpg', 'img/lapins.jpg', 'img/lionne.jpg', 'img/ours.jpg', 'img/ane.jpg', 'img/chat.jpg', 'img/chien.jpg', 'img/lama.jpg', 'img/lapins.jpg', 'img/lionne.jpg', 'img/ours.jpg'];

let cardz=[];

// change img

let recup = document.querySelectorAll('img');

for (let i=0; i < cartes.length; i++){ 
		recup[i].addEventListener("click", function(){
			recup[i].setAttribute("src",cartes[i]);
			console.log(cartes[i]);
		  let zz = cartes[i];
		  cardz.push(zz);
		  console.log(cardz);

		  if (cardz[i] == cartes[i]){
		  	console.log("YIIIIIIIIIIIIIIIIIIIIIIIIIII")
		  }


		})
	}

			

	
		// if (cartes.src == cardz.src){
		// 	console.log("azerty");
		// }
