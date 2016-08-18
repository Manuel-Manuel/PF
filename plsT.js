var gf = document.getElementsByClassName('cambionome');
var d= document.getElementById('ChiediNome');
var ik, i, user;
d.addEventListener("mouseenter", ddd);
d.addEventListener("mouseleave", rdm);
d.onclick = d3;
ee();
function d3() {
    ik = prompt("Come ti chiami?","");
        if (ik != null) {
    	for (i=0; i < gf.length; i++) {
        fk(i);
        }
        if (ik != null) {
        setCookie("Nome inserito", ik, 30);
        }
    }
}
function fk (i)  {
        gf[i].innerHTML = ' ' + ik;
        ww();
    }
function ddd() {
        d.className = 'bttCTCHv';
    }
function rdm() {
        d.className = 'bttCTCUp';
    }
function ww () {
        ferte = d.style.display;
        if (ferte != 'none') {
        	d.style.display = 'none';
        }
    }
function setCookie(crr,frrr,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var de = "expires=" + d.toUTCString();
    document.cookie = crr+"="+frrr+"; "+de+"; path=/;";
}

function hhh(crr) {
    var rr = crr + "=";
    var ca = document.cookie.split(';');
    for(i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(rr) == 0) {
            return c.substring(rr.length, c.length);
        }
    }
    return "";
}

function ee() {
    user = hhh("Nome inserito");
    if (user != "") {
    	for (i=0; i < gf.length; i++) {
        ss(i);
        }
        ww();
      } else {
        return
      }
}
function ss (i)  {
        gf[i].innerHTML = ' ' + user;
        ww();
    }
