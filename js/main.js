(() => {
    let pantalla = document.getElementById("pizarra");
    pantalla.style.width = "320px";
    pantalla.style.height = "320px";

    let pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0045AD";
    pincel.fillRect(0, 0, 320, 50);
    pincel.fillRect(0, 100, 320, 50);
    //Imagen
    let bandera = new Image();
    bandera.src = "img/pngwing.com.png";

    bandera.addEventListener("load", () => {
        pincel.drawImage(bandera, 120, 60, 60, 30);
    });
})()
