let cartes = [
 {url:'img/ane.jpg', nom: 'ane'},
 {url:'img/chat.jpg', nom: 'chat'},
 {url:'img/chien.jpg', nom: 'chien'},
 {url:'img/lama.jpg', nom: 'lama'},
 {url:'img/lapins.jpg', nom: 'lapins'},
 {url:'img/lionne.jpg', nom: 'lionne'},
 {url:'img/ours.jpg', nom: 'ours'},
 {url:'img/ane.jpg', nom: 'ane2'},
 {url:'img/chat.jpg', nom: 'chat2'},
 {url:'img/chien.jpg', nom: 'chien2'},
 {url:'img/lama.jpg', nom: 'lama2'},
 {url:'img/lapins.jpg', nom: 'lapins2'},
 {url:'img/lionne.jpg', nom: 'lionne2'},
 {url:'img/ours.jpg', nom: 'ours2 '},
]

let cardz = [];
recupImg = document.querySelectorAll('img');


  	for (let i = 0; i < cartes.length; i++){	
	    recupImg[i].addEventListener("click", function(e){
		e.currentTarget.setAttribute("src", cartes[i].url);
         let oui = cartes[i].url;
         cardz.push(oui);

        if (cardz.length == 2){
         		if( cardz[0] == cardz[1]){
         			alert("ok");
         			cardz = [];
         			console.log(cardz);

         		} else { 
         			if (cardz[0] != cardz[1]){
		         		setTimeout(function(){ 
		         		  
			         		 for (let j = 0; j < cardz.length; j++){
				         		recupImg[j].setAttribute("src", "img/doscarte.png");

				         	}
				         },1650)
		         		}
				         		 
		         cardz = [];	 	
         		} 
        	} 
		})
	}
		         			
	         		 




         	



