
// Déclaration des constantes correspondants aux boutons
const ButtonGreen = document.getElementById("buttonGre");
const ButtonRed = document.getElementById("buttonRed");
const ButtonYellow = document.getElementById("buttonYel");
const ButtonBlue = document.getElementById("buttonBlu");
const Button_Start = document.getElementById("starter");
const Button_On = document.getElementById("ButtonOn");
const Affichage_compteur = document.getElementById("compteur");
const Label_on = document.getElementById("label");

// Variables du jeu
let GameIsActive = false;
let bloquage_clickage;
let sequence_ordinateur = [];
let sequence_joueur = [];
let Nb_tour;
let JoueurGagneTour = true;
let Tour_ordinateur; 
let IntervalActions;
let victoire_joueur = false;
var compteur_flash;

Button_On.addEventListener("click", (event)=> { //Ecouteur click sur On et réalise changements estétiques 
    Affichage_compteur.innerHTML = "Cliquez sur STARTER pour commencer.";
    Label_on.style.color = "green";
});

Button_Start.addEventListener("click", (event) => { //Bouton de lancement fonction Playgame si On checké 
    if (Button_On.checked === true) {
        GameIsActive == true;
        Playgame();
    }

})

function CaseAlea() { // Donne aléatoirement un chiffre entre 1 et 4 
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

function Sequence_Ordi_push() {//Ajoute une valeur aléatoire a la liste
    sequence_ordinateur.push(CaseAlea());
};

function Playgame() { //Fonction de démarrage du jeu 
    ResetDebut();
    Affichage_compteur.innerHTML = 1;
    Sequence_Ordi_push();
    Tour_ordinateur = true;
    IntervalActions = setInterval(Animation_ordi, 1000); //Lancement fonction Animation_ordi toutes les 1s tant que toute la liste n'ai pas été flashée
}

function ResetDebut() {//Reset valeurs début de jeu
    sequence_ordinateur = [];
    sequence_joueur = [];
    compteur_flash = 0;
    IntervalActions = 0;
    Nb_tour = 1;
    victoire_joueur = false;
    JoueurGagneTour = true;
}

function Animation_ordi() {
    bloquage_clickage = true; //Bloque le clickage pour le joueur 

    if (compteur_flash == (sequence_ordinateur.length)) { //Fin du tour de l'ordinateur si toutes les valeurs listes ont flashé, reset de l'interval et des changements de couleurs 
    clearInterval(IntervalActions); //Suppression de l'interval de l'ordi
    Tour_ordinateur = false;
    ResetChangements();
    bloquage_clickage = false;
    GameIsActive = true;
}

    if (Tour_ordinateur == true) { //Lancement animation valeur séquence correspondante si c'est le tour de l'ordinateur
        ResetChangements();
        let CaseActive = sequence_ordinateur[compteur_flash];
        setTimeout(() => {
            if (CaseActive == 1) {
                AnimationButtonGreen();
            }
            else if (CaseActive == 2) {
                AnimationButtonRed();
            }
            else if (CaseActive == 3) {
                AnimationButtonYellow();
            }
            else if (CaseActive == 4) {
                AnimationButtonBlue();
            }
            compteur_flash++; 
        }, 300)
    }
}

/// Ecouteurs d'événements click sur un des 4 boutons,
ButtonGreen.addEventListener("click", (event) => {
    Button_animation(1);
});
ButtonRed.addEventListener("click", (event) => {
    Button_animation(2);
});
ButtonYellow.addEventListener("click", (event) => {
    Button_animation(3);
});
ButtonBlue.addEventListener("click", (event) => {
    Button_animation(4);
});

function Button_animation(N) {
    if (GameIsActive == true & bloquage_clickage == false) {
        sequence_joueur.push(N);
        check();
        if (N == 1) {
    
            AnimationButtonGreen()
            if (victoire_joueur == false) {
                setTimeout(() => {
                    ResetChangements();
                }, 300);
            }
        }
        else if (N == 2) {
            AnimationButtonRed()
            if (victoire_joueur == false) {
                setTimeout(() => {
                    ResetChangements();
                }, 300);
            }
        }
        else if (N == 3) {
            AnimationButtonYellow()
            if (victoire_joueur == false) {
                setTimeout(() => {
                    ResetChangements();
                }, 300);
            }
        }
        else if (N == 4) {
            AnimationButtonBlue()
            if (victoire_joueur == false) {
                setTimeout(() => {
                    ResetChangements();
                }, 300);
            }
        }
        
}
}

// Fonction de vérification valeur par valeur de la séquence du joueur
function check() { 
    if (sequence_joueur[sequence_joueur.length - 1] !== sequence_ordinateur[sequence_joueur.length - 1]) { //Cas ou valeur joueur différente de celle de l'ordinateur
        JoueurGagneTour = false;
        CouleursFinJeu()
        Affichage_compteur.innerHTML = "Raté !!"
        Button_On.checked = false; 
        
    }
    
    else if (Nb_tour == sequence_joueur.length && JoueurGagneTour && !victoire_joueur) { //Si le joueur réussi sa séquence, passage au tour suivant
        Nb_tour ++;
        Sequence_Ordi_push();
        sequence_joueur = [];
        Tour_ordinateur = true;
        compteur_flash = 0;
        Affichage_compteur.innerHTML = Nb_tour;
        IntervalActions = setInterval(Animation_ordi, 1000);
        if (sequence_joueur.length == 20 && JoueurGagneTour == true) { //Si le joueur atteint la limite de 20 tours correspondant à la séquence aléa de l'ordinateur
            JoueurGagne();
    }
}
}

// Fonctions d'animation (changement couleur + effet Shadow) des 4 boutons différents + musique correspondante
function AnimationButtonGreen() {
    ButtonGreen.style.backgroundColor = "#B4FB7C";
    ButtonGreen.style.boxShadow = "-5px -5px 15px 1px #B4FB7C";

    var audio1 = document.getElementById("audio1");
    audio1.play(); 
}

function AnimationButtonRed() {
    ButtonRed.style.backgroundColor = "#FF9790";
    ButtonRed.style.boxShadow = "5px -5px 15px 1px #FF9790";
    var audio2 = document.getElementById("audio2");
    audio2.play();
}

function AnimationButtonYellow() {
    ButtonYellow.style.backgroundColor = "#FCFDD1";
    ButtonYellow.style.boxShadow = "5px -5px 15px 1px #FCFDD1";
    var audio3 = document.getElementById("audio3");
    audio3.play();
}

function AnimationButtonBlue() {
    ButtonBlue.style.backgroundColor = "#BAEAFF";
    ButtonBlue.style.boxShadow = "5px 5px 15px 1px #BAEAFF"
    var audio4 = document.getElementById("audio4");
    audio4.play();
}

function ResetChangements() { //Retour à l'état d'origine des couleurs clickées
    ButtonGreen.style.backgroundColor = "#00B81D";
    ButtonGreen.style.boxShadow = "none"
    ButtonRed.style.backgroundColor = "#FF0000";
    ButtonRed.style.boxShadow = "none"
    ButtonYellow.style.backgroundColor = "#FAFF00";
    ButtonYellow.style.boxShadow = "none"
    ButtonBlue.style.backgroundColor = "#2C64D2";
    ButtonBlue.style.boxShadow = "none"
}

function CouleursFinJeu () { //Change les 4 boutons en noir pour montrer au joueur qu'il a perdu
    ButtonGreen.style.backgroundColor = "black";
    ButtonRed.style.backgroundColor = "black";
    ButtonYellow.style.backgroundColor = "black";
    ButtonBlue.style.backgroundColor = "black";
}

function JoueurGagne() { //Fonction qui se lance lorsque le joueur a réussi les 20 tours
    ResetChangements();
    Affichage_compteur.innerHTML = "Bravo, vous avez gagné!";
    GameIsActive = false; 
    victoire_joueur = true;
    Button_On.checked = false; 
}







