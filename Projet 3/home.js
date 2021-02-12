var anim = document.getElementById("effet");
var txt = anim.dataset.label;
let i 	= 0 ;
function affichetexte()
{
  let timeOut ;
  if(i < txt.length)
	{
	  anim.innerHTML += `<span>${txt[i]}</span>` ;
	  timeOut = setTimeout(affichetexte,15)
	  i++
	}
	else
	{
	  clearTimeout(timeOut);
	  console.log("end")
	}
}
affichetexte();

