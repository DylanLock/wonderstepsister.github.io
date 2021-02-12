var buttonChiffrer = document.getElementsByClassName('chiffrer');
var buttonDechiffrer = document.getElementsByClassName('déchiffrer');
var messageDechiffrer = document.getElementsByClassName('conteneur3');
var buttonClear = document.getElementsByClassName('clear');
var lettre = Array[a, b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z];



function Chiffrer() {
    var input = document.getElementById("conteneur1").value;
    document.getElementById("conteneur3").innerHTML = input;
  }