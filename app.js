// Get the current user agent string
var userAgent = navigator.userAgent;

// Replace the current user agent with that of an iPhone
userAgent = userAgent.replace(
  /Mozilla\/[\d\.]+\s/,
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
);

// Update the user agent string
navigator.userAgent = userAgent;

// Permet d'afficher la date et l'heure----------------------------------------------------------------------------------------------------
let days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
let months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
setInterval(() => {
  let currentDate = new Date();
  let dayName = days[currentDate.getDay()];
  let monthName = months[currentDate.getMonth()];
  let day = currentDate.getDate();
  let heure = currentDate.getHours();
  let minute = currentDate.getMinutes();
  if (heure < 10) {
    heure = "0" + heure;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  document.getElementById("heurehead").innerHTML = `${heure}:${minute}`;
  document.getElementById("date").innerHTML = `${dayName} ${day} ${monthName}`;
  document.getElementById("heure").innerHTML = `${heure}:${minute}`;
}, 1000);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Bouton pour amener le lockscreen mots de pass --------------------------------------------------------------------------------------------------------
document.getElementById("barre").addEventListener("click", () => {
  document.getElementById("heure").style.display = "none";
  document.getElementById("date").style.display = "none";
  document.getElementById("mdpscreen").style.bottom = "0";
});
// *************************************************************************************************************************************************************************

// Faire un hover sur les btn du lockscreen------------------------------------------------------------------------------------------------------------------------
document.querySelectorAll(".btnmdp").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.388)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.130)";
  });
});
// *********************************************************************************************************************************************************

// Verifier si le mot passe entrer est correct ou pas--------------------------------------------------------------------------------------------------------------------------------------
lock = 0;
i = 0;
mdp = "";
document.querySelectorAll(".btnmdp").forEach((btn) => {
  btn.addEventListener("click", () => {
    i++;
    mdp += btn.innerHTML;
    console.log(mdp);
    console.log(i);
    if (i == 1) {
      document.getElementById("b1").style.background = "white";
    }
    if (i == 2) {
      document.getElementById("b2").style.background = "white";
    }
    if (i == 3) {
      document.getElementById("b3").style.background = "white";
    }
    if (i == 4) {
      document.getElementById("b4").style.background = "white";
      if (mdp == "0000") {
        document.getElementById("mdpscreen").style.display = "none";
        lock = 1;
        document.getElementById("cadena").style.display = "none";
        document.getElementById("bottomapp").style.display = "inherit";
        document.getElementById("swipbulle").style.display = "inherit";
        document.getElementById("appsection").style.top = "0";
        document.getElementById("barre").style.display = "none";
      } else {
        i = 0;
        mdp = "";
        document.getElementById("mdp").classList.add("anim");
        document.getElementById("mdp").style.translate = "0px";
        // document.getElementById("mdp").style.translate="-510px"
        setTimeout(() => {
          document.getElementById("b1").style.background = "rgba(0,0,0,0)";
          document.getElementById("b2").style.background = "rgba(0,0,0,0)";
          document.getElementById("b3").style.background = "rgba(0,0,0,0)";
          document.getElementById("b4").style.background = "rgba(0,0,0,0)";
          document.getElementById("mdp").classList.remove("anim");
        }, 300);
      }
    }
  });
});
// ***************************************************************************************************************************************************************************

// Bouton pour Enlever le lockscreen mots de pass--------------------------------------------------------------------------------------------------------
document.getElementById("annuler").addEventListener("click", () => {
  i = 0;
  mdp = "";
  document.getElementById("mdpscreen").style.bottom = "-1000%";
  document.getElementById("heure").style.display = "inherit";
  document.getElementById("date").style.display = "inherit";
  document.getElementById("b1").style.background = "rgba(0,0,0,0)";
  document.getElementById("b2").style.background = "rgba(0,0,0,0)";
  document.getElementById("b3").style.background = "rgba(0,0,0,0)";
  document.getElementById("b4").style.background = "rgba(0,0,0,0)";
  document.getElementById("mdp").classList.remove("anim");
});
// *************************************************************************************************************************************************************************

// Defilement de l'ecran d'aceuille---------------------------------------------------------------------------------------------------------------------------------------------
let appsection = document.getElementById("appsection");
tailleapp = 0;
appsection.offsetWidth = tailleapp;
appsection.addEventListener("mousedown", function () {
  currentLeft = appsection.offsetLeft;
  appsection.offsetWidth = tailleapp;
  initialMouseX = event.clientX;
  function mousemv() {
    appsection.style.left = currentLeft + event.clientX - initialMouseX + "px";
  }
  document.addEventListener("mousemove", mousemv);

  document.addEventListener("mouseup", function () {
    if (appsection.offsetLeft <= -140) {
      appsection.style.left = -appsection.offsetWidth / 2 + "px";
      document.getElementById("bswp2").style.background = "white";
      document.getElementById("bswp1").style.background =
        "rgba(255, 255, 255, 0.35)";
    } else {
      appsection.style.left = 0 + "px";
      document.getElementById("bswp1").style.background = "white";
      document.getElementById("bswp2").style.background =
        "rgba(255, 255, 255, 0.35)";
    }

    //   if (currentLeft > -131) {
    // //   appsection.style.left = 0 + "px";}

    document.removeEventListener("mousemove", mousemv);
    document.getElementById("pose").innerHTML = currentLeft;
  });
});

// La calculatrice--------------------------------------------------------------------------------------------------------------------------------------------
a = 0;
b = 0;
val = 0;
op = "";
nombre = "";
document.querySelectorAll(".btncalc").forEach((calc) => {
  calc.addEventListener("click", () => {
    val = calc.innerHTML;

    if (val == "÷" || val == "x" || val == "-" || val == "+") {
      // document.getElementById("calres").innerHTML = "0"
      calc.style.background = "white";
      calc.style.color = "#f69906";
      if (val == "x") {
        op = "*";
      } else if (val == "÷") {
        op = "/";
      } else {
        op = val;
      }

      a = nombre;
      nombre = "";
    }
    if (val == "=" && op != "") {
      document.getElementById("_/").style.background = "#f69906";
      document.getElementById("_/").style.color = "white";
      document.getElementById("_X").style.background = "#f69906";
      document.getElementById("_X").style.color = "white";
      document.getElementById("_m").style.background = "#f69906";
      document.getElementById("_m").style.color = "white";
      document.getElementById("_+").style.background = "#f69906";
      document.getElementById("_+").style.color = "white";
      b = nombre;
      if (op == "/") {
        document.getElementById("calres").innerHTML = parseFloat(
          eval(a + op + b)
        ).toPrecision(5);
        nombre = "";
      } else {
        document.getElementById("calres").innerHTML = eval(a + op + b);
        nombre = "";
      }
    }
    if (val === "C") {
      document.getElementById("calres").innerHTML = "0";
      nombre = "";
    }
    if (
      val != "C" &&
      val != "+/-" &&
      val != "%" &&
      val != "÷" &&
      val != "x" &&
      val != "-" &&
      val != "+" &&
      val != "="
    ) {
      if (val == ",") {
        val = ".";
        nombre += val;
        document.getElementById("calres").innerHTML = nombre;
      } else {
        nombre += val;
        document.getElementById("calres").innerHTML = nombre;
      }
    }
  });
});
// ************************************************************************************************************************************************************************************************************

// affichage des differente application----------------------------------------------------------------------------------------------------------
const isDarkMode = () =>
  globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;

document.getElementById("homebtn").addEventListener("click", () => {
  document.getElementById("calcontain").style.display = "none";
  document.getElementById("homebtn").style.display = "none";
  document.getElementById("link").style.background = "white";
  document.getElementById("link").style.display = "none";
  document.getElementById("heurehead").style.color = "white";
  document.getElementById("head").style.background = "rgb(255,255,255,0)";
  document.getElementById("rwb").src = "./img/rwb.png";
  document.getElementById("message").style.display = "none";
  document.getElementById("camera").style.display = "none";
  document.getElementById("pellicule").style.display = "none";

});
document.getElementById("calcimg").addEventListener("click", () => {
  document.getElementById("calcontain").style.display = "inherit";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
});
document.getElementById("phticon").addEventListener("click", () => {
  document.getElementById("pellicule").style.display = "inherit";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
});
document.getElementById("previewphoto").addEventListener("click", () => {
  document.getElementById("pellicule").style.display = "inherit";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
});
document.getElementById("insta").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.instagram.com/?hl=fr";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("twitter").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://m.twitter.com";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
  document.getElementById("heurehead").style.color = "white";
  document.getElementById("rwb").src = "./img/rwb.png";
});
document.getElementById("appstore").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.apple.com/app-store/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "white";
  document.getElementById("rwb").src = "./img/rwb.png";
});
document.getElementById("whatsapp").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.whatsapp.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("youtube").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.youtube.com/";
  document.getElementById("homebtn").style.display = "inherit";
  if (isDarkMode()) {
    document.getElementById("homebtn").style.background = "white";
    document.getElementById("heurehead").style.color = "white";
    document.getElementById("link").style.background = "#0f0f0f";

    document.getElementById("rwb").src = "./img/rwb.png";
  } else {
    document.getElementById("homebtn").style.background = "black";
    document.getElementById("heurehead").style.color = "black";
    document.getElementById("rwb").src = "./img/rwbb.png";
    document.getElementById("head").style.background = "white";
    document.getElementById("link").style.background = "white";
  }
});
document.getElementById("snapchat").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.snapchat.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
  document.getElementById("link").style.background = "#fffc00";
});
document.getElementById("linkdin").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.linkedin.com";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("Facebook").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://m.facebook.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("paypal").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.paypal.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("spotify").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.spotify.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("disney+").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.disneyplus.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("telegram").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.telegram.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("gmail").addEventListener("click", () => {
  document.getElementById("link").style.display = "inherit";
  document.getElementById("link").src = "https://www.gmail.com/";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "black";
  document.getElementById("heurehead").style.color = "black";
  document.getElementById("rwb").src = "./img/rwbb.png";
});
document.getElementById("messapp").addEventListener("click", () => {
  document.getElementById("message").style.display = "inherit";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
});

// document.addEventListener("DOMContentLoaded", function () {
//   var iframe = document.getElementById("link");
//   iframe.style.padding = "20px";
// });
// ***************************************************************************************************************************************************************************

// Utiliser la camera---------------------------------------------------------------------------------------------------------------------------------

document.getElementById("txtpht").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 41.5) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "#FFD50A";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "white";
});
document.getElementById("txtpano").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 11) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "white";
  document.getElementById("txtpano").style.color = "#FFD50A";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "white";
});
document.getElementById("txtport").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 26.28) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "white";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "#FFD50A";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "white";
});
document.getElementById("txtvideo").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 55.4) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "white";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "#FFD50A";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "white";
});
document.getElementById("txtralenti").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 70.61) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "white";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "#FFD50A";
  document.getElementById("txtacc").style.color = "white";
});
document.getElementById("txtacc").addEventListener("click", () => {
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 86.65) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "white";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "#FFD50A";
});
document.getElementById("appphoto").addEventListener("click", () => {
  document.getElementById("camera").style.display = "inherit";
  document.getElementById("homebtn").style.display = "inherit";
  document.getElementById("homebtn").style.background = "white";
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      var videoElement = document.getElementById("video");
      videoElement.srcObject = stream;
      videoElement.play();
      document.getElementById("homebtn").addEventListener("click", () => {
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  const txtphoto = document.getElementById("txtphoto");
  const main = document.getElementById("main");
  txtphoto.style.left =
    -(txtphoto.offsetWidth * 40.69) / 100 + main.offsetWidth / 2 + "px";
  document.getElementById("txtpht").style.color = "#FFD50A";
  document.getElementById("txtpano").style.color = "white";
  document.getElementById("txtport").style.color = "white";
  document.getElementById("txtvideo").style.color = "white";
  document.getElementById("txtralenti").style.color = "white";
  document.getElementById("txtacc").style.color = "white";
});
// Prendre une photo---------------------------------------------------------------------------------------------------------------------------------------------------------
let p = 0
document.getElementById("phtbtn").addEventListener("click", () => {
 p++
  var canvas = document.getElementById("previewphoto");
  var context = canvas.getContext("2d");
  // Dessine l'image de l'élément vidéo sur le canvas
  var videoElement = document.getElementById("video");
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  var imageData = canvas.toDataURL();
  // -----------------------------------------------------
  cv = "cv"+p
  var cv = document.getElementById("cv"+p);
  var context = cv.getContext("2d");
  // Dessine l'image de l'élément vidéo sur le canvas
  context.drawImage(videoElement, 0, 0, cv.width, cv.height);
  var imageData = cv.toDataURL();
});
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementById("mobile").style.display="inherit";

}