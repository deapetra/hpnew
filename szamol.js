document.querySelector("#szam").addEventListener('change', updateValue);
document.querySelector("#szam2").addEventListener('change', updateValue);
let num3 = 0;
function updateValue(){
    szamol();
    document.getElementById("pontok").innerHTML = "pont: " + num3;
}
function szamol(){
    if (document.getElementById("szam").value>=0 && document.getElementById("szam2").value >=0 && document.getElementById("szam2").value <= 1) {
        num3 = document.getElementById("szam").value*10 + document.getElementById("szam2").value*150;
    }else{
        if (document.getElementById("szam2").value < 0 || document.getElementById("szam").value < 0) {
            document.getElementById("szam2").value = 0;
            document.getElementById("szam").value = 0;
            num3 = document.getElementById("szam").value*10 + document.getElementById("szam2").value*150;
            alert("Nem lehet negív értéket megadni!");

        }else{
            if (document.getElementById("szam2").value > 1) {
                document.getElementById("szam2").value = 0;
                document.getElementById("szam").value = 0;
                num3 = document.getElementById("szam").value*10 + document.getElementById("szam2").value*150;
                alert("Csak egyszer lehet elkapni az aranycikeszt!");
            }
        }
    }
}