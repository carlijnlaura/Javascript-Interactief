pics = document.getElementById("pics");
createPicsHolders();
createRuimteImages();

function createPicsHolders() {
    for(var i = 0; i < 6; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createRuimteImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
         favoriet = document.createElement("div");
         favoriet.className = "favoriet";
         favoriet.id = "favoriet_" + (i+1);
         ruimtePlaatje = document.createElement("img");
         ruimtePlaatje.src = "img/ruimte" + (i+1) + ".jpg";
         ruimtePlaatje.id = (i+1);
         ruimtePlaatje.addEventListener("click", function () {
             maakFavoriet(this.id);
         });
         pictureHolders[i].appendChild(favoriet);
         pictureHolders[i].appendChild(ruimtePlaatje);

    }
}

function maakFavoriet(id) {
    console.log("Maak mij favoriet! het gaat om plaatje..." + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";
}