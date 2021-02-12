//déclaration des boutons.
const button_black = document.getElementById("buttonBlack");
const button_purple = document.getElementById("buttonPurple");
const button_blue = document.getElementById("buttonBlue");
const button_green = document.getElementById("buttonGreen");
const button_yellow = document.getElementById("buttonYellow");
const button_orange = document.getElementById("buttonOrange");
const button_red = document.getElementById("buttonRed");


const button_valider = document.getElementById("valider");
const button_annuler = document.getElementById("annuler");
const button_rejouer = document.getElementById("rejouer");
const button_aide = document.getElementById("aide");

//déclaration des variables nécessaires au jeu.
let caseActive = 1;
let couleur = ["black", "purple", "blue", "green", "yellow", "orange", "red"]
var sequenceJoueur = [[],[],[],[],[],[],[]];
let GameIsActive = true;
var PionNoir = [];
var PionBlanc = [];
var T = 0;
var Pion_verif_Nb = 1;
var line = 0;

//Création de la séquence aléatoire de l'ordinateur
const sequence_ordinateur = [];
for(let i = 0; i<4; i++) {sequence_ordinateur.push(Math.floor(Math.random() * (7 - 0)) + 0)}

//Ecouteur d'évement du bouton rejouer, si clické Reset de la partie
button_rejouer.addEventListener("click", (event) => {
    Reset()
})

//Ecouteur Bouton Valider, si clické vérification sequence joueur avec celle ordinateur
button_valider.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length == 4) {
        JoueurCheck(line);
        line++;
    }
    else {
        alert("Vous devez remplir les 4 cases de la ligne avant de lancer la vérification")
    }
    
} )

// Fonction de reset des valeurs à leur état d'origine
function Reset() {
    sequenceJoueur = [[],[],[],[],[],[],[]];
    Pion_verif_Nb = 1;
    const sequence_ordinateur = [];
    for(let i = 0; i<4; i++) {sequence_ordinateur.push(Math.floor(Math.random() * (7 - 0)) + 0)}
    caseActive = 1;
    line = 0;
    color_active.reset

    //Reset de l'aspect visuel
    for (i=1; i <= 28; i++){
        document.querySelector("p.p" + i ).style.backgroundColor = "#CDDCb9";
        document.getElementById(i).style.backgroundColor = "#B6B6B6"    
    }
    return GameIsActive = true;
}

//Fonction qui prend comme paramètre les PionBlanc et Noir afin de réaliser les changements visuels sur la page des Pions Blancs
function PionBlancDisplay(PionBlanc, PionNoir) {
    let nombre_pion_blanc = PionBlanc - PionNoir;
    for (i=0; i < nombre_pion_blanc; i++){
        document.querySelector("p.p" + Pion_verif_Nb ).style.backgroundColor = "white";
        Pion_verif_Nb++;
    }  
}
//Fonction qui prend comme paramètre les PionNoir afin de réaliser les changements visuels sur la page des Pions Noirs
function PionNoirDisplay(PionNoir) {
    for (i=0; i < PionNoir; i++){
        document.querySelector("p.p" + Pion_verif_Nb).style.backgroundColor = "black";
        Pion_verif_Nb++;
}
}

//Vérifie si séquence ordinateur et joueur sont identiques
function sequence_equal(X) { 
    for (var i = 0; i < sequence_ordinateur.length; i++) {
        if (sequence_ordinateur[i] != sequenceJoueur[X][i]) {
            return T++;
        }
    }
    if (T == 0) {
        alert("Bravo")
        Reset();
    }
}
//Fonction de vérification de la séquence du Joueur à celle de l'ordinateur pour voir Pions noirs/ Pions blancs
function JoueurCheck(line) { 
    PionBlanc = 0;
    PionNoir = 0;
    sequence_equal(line);

    //Vérification des pions Noirs
    if (GameIsActive == true) {
        for (i=0; i < 4; i++) {
            if (sequenceJoueur[line][i] == sequence_ordinateur[i]) {
                PionNoir += 1;
            }
        }
    
        //Vérification des pions Blancs 
        for (i = 0; i < 4; i++) { 
            let X = sequenceJoueur[line][i];
            let v = 0;
            while (v < 4) {
                if (sequence_ordinateur[v] === X) {
                    PionBlanc +=1;
                }
                v++;
            }
                  
    }
    //Lancement des changements estétiques 
    PionBlancDisplay(PionBlanc, PionNoir);
    PionNoirDisplay(PionNoir)
    //Compensateur si jamais le nombre de Pions Blancs et Noirs est inférieur à 4.
    let Compensateur = 4 - PionBlanc;
    Pion_verif_Nb += Compensateur;
}
}
//Fonction qui ajoute la couleur séléctionner à la grille
function addColor() {
    document.getElementById(caseActive).style.backgroundColor = couleur[color_active];
    sequenceJoueur[line].push(color_active);
    color_active.reset;
    return caseActive++;
}


//Ecouteur d'événement de la couleur séléctionnée en bas
button_black.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) {
        color_active = 0;
        addColor();
    }
    else {
        alert("Vous devez d'abord valider")
    }
    
})

button_purple.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
    color_active = 1;
    addColor();
    }
    else {
        alert("Vous devez d'abord valider")
    }
})

button_blue.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
        color_active = 2;
        addColor();
        }
    else {
            alert("Vous devez d'abord valider")
        }
})

button_green.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
        color_active = 3;
        addColor();
        }
    else {
            alert("Vous devez d'abord valider")
        }
})

button_yellow.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
        color_active = 4;
        addColor();
        }
    else {
            alert("Vous devez d'abord valider")
        }
})

button_orange.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
        color_active = 5;
        addColor();
        }
    else {
            alert("Vous devez d'abord valider")
        }
})

button_red.addEventListener("click", (event) => {
    if (sequenceJoueur[line].length < 4) { 
        color_active = 6;
        addColor();
        }
    else {
            alert("Vous devez d'abord valider")
        }
})









