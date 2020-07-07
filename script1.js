
    var enregistrer = document.getElementById('envoi');
    enregistrer.addEventListener('click', f_valider);

    var prenom = document.getElementById('prenom');
    var prenom_m = document.getElementById('absence_prenom');

	var nom = document.getElementById('nom');
    var nom_m = document.getElementById('absence_nom');

	var adresse = document.getElementById('adresse');
    var adresse_m = document.getElementById('absence_adresse');

    var tel = document.getElementById('tel');
    var tel_m = document.getElementById('absence_tel');

  	var list = document.getElementById('list');
    var list_m = document.getElementById('absence_list');

    var salaire = document.getElementById('salaire');
    var salaire_m = document.getElementById('absence_salaire');
    
     var infos = document.getElementById('infos');
    var infos_m = document.getElementById('info_prenom');
    
    function f_valider(e){
		    	if (prenom.validity.valueMissing) {
		    		e.preventDefault();
		    		prenom_m.textContent ='renseignez le prenom';
		    		prenom_m.style.color ='red';
		    	}
		    	 else if (nom.validity.valueMissing) {
		    		e.preventDefault();
		    		nom_m.textContent ='renseignez le  nom';
		    		nom_m.style.color ='red';
		    	}
		    	 else if (adresse.validity.valueMissing) {
		    		e.preventDefault();
		    		adresse_m.textContent ='renseignez votre adresse';
		    		adresse_m.style.color ='red';
		    	}
		    	else if (tel.validity.valueMissing) {
		    		e.preventDefault();
		    		tel_m.textContent ='renseignez votre telephone';
		    		tel_m.style.color ='red';
		    	}
		    	else if (list.validity.valueMissing) {
		    		e.preventDefault();
		    		list_m.textContent ='renseignez votre compte';
		    		list_m.style.color ='red';
		    	}
		    	else if (list.validity.valueMissing) {
		    		e.preventDefault();
		    		salaire_m.textContent ='renseignez votre compte';
		    		salaire_m.style.color ='red';
		    	}

		    	else{
		    		alert('enregistrement valider')
		    	}

    }
