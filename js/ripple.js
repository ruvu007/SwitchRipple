const alleVlakken = document.querySelectorAll('.vlak');

function maakRipple(e) {
    console.log(e);
}

for(let i=0; i<alleVlakken.length; i++) {
    alleVlakken[i].addEventListener('click', maakRipple);
}