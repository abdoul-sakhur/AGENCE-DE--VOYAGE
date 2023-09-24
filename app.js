var fin = new Date("april 10, 2023 14:17:25").getTime();
var x = setInterval( function () {
       
        var now = new Date().getTime();
        var temps = fin - now;
        var jours = Math.floor(temps / (1000 * 60 * 60 * 24));
        var heure= Math.floor(temps % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minute = Math.floor(temps % (1000 * 60 * 60) / (1000 * 60));
        var seconde = Math.floor(temps % (1000 * 60) / 1000);

        document.getElementById('compte').innerHTML = jours + "  J  " + heure + "  H  " + minute + "  min  " + seconde + "  s ";

       if (temps <0){
        clearInterval(x);
        document.getElementById('compte').innerHTML=  ' fin du compte a rebours !!! ';

    }
    if (temps <13){
        let nouvelleelement= document.createElement('h1');
        nouvelleelement.innerText= "C'EST BIENTOT LA FIN";
    }
    },1000);

