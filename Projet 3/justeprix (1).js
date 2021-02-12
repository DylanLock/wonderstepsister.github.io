
var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100

var buttonValider = document.getElementById('valider');
var result = document.getElementById('result');
var propo = document.getElementById('propo')
var indice = document.getElementById('indice');
var input = document.getElementById('Input_joueur');
var sequence_joueur = [];
var coup = 1;
var ordi;
var scorejoueur = document.getElementById('scorejoueur');
var manche = document.getElementById('manche')
var manche2 = document.getElementById('manche2')
var pointjoueur=0;
var GameIsActive;

   
buttonValider.addEventListener("click", (event) => {
    let input_joueur = Number(input.value);
    propo.style.display = "block"
    result.textContent = sequence_joueur + ("\n");
    Check(input_joueur);
    input.value = '';
    return sequence_joueur.push(input_joueur);

});


function Check(input_joueur){   
     if (input_joueur > solution){
        indice.style.backgroundColor = "#ff010180";    
        indice.textContent = input_joueur + " est trop grand";
    }

    else if (input_joueur < solution){ // comparent la valeur "essai" à la valeur "solution"
        indice.style.backgroundColor = "#ff010180";    
        indice.textContent = input_joueur + " est trop petit "; 
    } 

    else if (input_joueur === solution) {
        result.textContent = "Bravo, Vous avez trouvé en " + sequence_joueur.length + " essai(s)";
        result.style.backgroundColor = '#01ff0166';
        pointjoueur += sequence_joueur.length ;
        scorejoueur.textContent = "Score: " + pointjoueur;
        indice.style.display = 'none'; // si Gagné, il cache la zone indice
        buttonValider.style.display ='none';
        buttonNvlleManche.style.display = 'block';
    } 
    else if (sequence_joueur.length === 10) {
        result.style.backgroundColor = '#ff010180';
        result.textContent = '!!! PERDU !!!';
        buttonValider.style.display = "none";
        input.style.display= "none";
        buttonNvlleManche.style.display = 'block';
        input.value = '';        
     }

}
    
buttonValider.addEventListener( "click", Check);

var buttonNvlleManche = document.getElementById('secondemanche');

buttonNvlleManche.addEventListener("click", function buttonmanche(){
    manche.style.display = 'none';
    manche2.style.display = 'block';
    buttonNvlleManche.style.display = "none";
    resultordi.textContent = ordi;
    GameIsActive = true;
    Playgame()

  });

var inputordi = document.getElementById('Input_ordi');
var buttonPlus = document.getElementById('plus');
var buttonMoins = document.getElementById('moins');
var buttonOK = document.getElementById('ok');
var buttonenregister = document.getElementById('enregistrer');
var resultordi = document.getElementById('resultordi');
var scoreordi = document.getElementById('scoreordi')
var pointordi = 0;
var sequence_ordi = [];
var min = -1; // definir le nombre le plus bas que l'ordinateur puisse donner
var max = 101; // definir le nombre le plus haut que l'ordinateur puisse donner
var ordi = 50;
var depart = 50;
var valeurhaute = "Je propose" + ordi + ",si ma réponse est trop haute cliquer sur 'MOINS'";
var buttonResultat = document.getElementById('Resultat');


buttonOK.addEventListener("click", (event) => { //Fin de la partie 
    GameIsActive = false;
    resultordi.textContent = "Bravo, Vous avez trouvé en " + sequence_ordi.length + " essai(s)";
    resultordi.style.backgroundColor = 'green';
    pointordi += sequence_ordi.length ;
    scoreordi.textContent = "Score: " + pointordi;
    buttonMoins.style.display='none';
    buttonPlus.style.display='none';
    buttonResultat.style.display = 'block';

});

buttonResultat.addEventListener( "click", Resultat);


function Playgame() {
    if (GameIsActive == true) {
        buttonMoins.addEventListener("click", (event) => {
            let inputordi = Number(input.value);
            resultordi.textContent = sequence_ordi + ("\n");
            Playgame(inputordi);
            input.value = '';
            max = ordi;
            ordi = Math.floor((min+max) / 2); 
            resultordi.textContent = "Je propose " + ordi + ", si ma réponse est trop grande cliquer sur 'MOINS'" ;
            return sequence_ordi.push(inputordi)
        })
    
       
        buttonPlus.addEventListener("click", (event) => {
            min = ordi;
            ordi = Math.floor((min + max)/2); 
            resultordi.textContent = "Je propose " + ordi + ", si ma réponse est trop petite cliquer sur 'PLUS'" ;
            return ordi;    
         })
    }
}

function Resultat(){
    if (sequence_joueur > sequence_joueur){
        resultordi.textContent = "Joueur à gagner!";
        alert('Le Joueur à gagner');
    }
    else if (sequence_joueur < sequence_ordi){
        resultordi.textContent = "Joueur à gagner!";
        alert("L'ordinateur à gagner!" )
    }
    else{
        alert('EGALITE!')
    }
}




