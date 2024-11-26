function rices(event){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('My image/rice.jpg')";

    document.querySelector('.mayon').innerHTML = "Rice<br>Terrace";
    document.querySelector('.info').innerHTML = "In the Philippines, rice terraces are primarily found in the Cordillera Mountains<br> on the island of Luzon. The most famous are the Ifugao Rice Terraces, located<br> in the province of Ifugao, particularly in the towns of Batad, Banaue, and Hapao.<br> These terraces are recognized as a UNESCO World Heritage site and are known<br> for their cultural and agricultural significance.";
    document.querySelector('.loc').innerHTML = '<i class="fa-solid fa-location-dot"></i> Cordillera region, Philippines';

    const boxes = document.querySelectorAll('.contain, .contain2, .contain3, .contain4, .contain5');

    boxes.forEach(function(box){
        box.classList.remove('clicked')
    });

    event.currentTarget.classList.add('clicked');

}
function mayon(event){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('My image/Mayon.jpg')";

    document.querySelector('.mayon').innerHTML = "Mayon<br>Volcano";
    document.querySelector('.info').innerHTML = "Mayon Volcano is an active stratovolcano located in Albay, Bicol Region, Philippines.<br>Known for its near-perfect cone shape, it stands at 2,462 meters and is one of the country’s<br>most active volcanoes, with frequent eruptions posing risks to nearby communities.";
    document.querySelector('.loc').innerHTML = '<i class="fa-solid fa-location-dot"></i> Albay, Philippines';

    const boxes = document.querySelectorAll('.contain, .contain2, .contain3, .contain4, .contain5');

    boxes.forEach(function(box){
        box.classList.remove('clicked')
    });

    event.currentTarget.classList.add('clicked');

}
function vigan(event){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('My image/Vigan.jpg')";

    document.querySelector('.mayon').innerHTML = "Vigan";
    document.querySelector('.info').innerHTML = "Vigan is a historic city in Ilocos Sur, known for its well-preserved Spanish colonial architecture and cobblestone streets. A UNESCO World Heritage Site, it offers a glimpse into the Philippines' past with attractions like Calle Crisologo and Vigan Cathedral.";
    document.querySelector('.loc').innerHTML = '<i class="fa-solid fa-location-dot"></i> Ilocos, Philippines'

    const boxes = document.querySelectorAll('.contain, .contain2, .contain3, .contain4, .contain5');

    boxes.forEach(function(box){
        box.classList.remove('clicked')
    });

    event.currentTarget.classList.add('clicked');

}
function taals(event){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('My image/taal.jpg')";

    document.querySelector('.mayon').innerHTML = "Taal<br>Volcano";
    document.querySelector('.info').innerHTML = "Taal Volcano is an active stratovolcano located in Batangas province,<br> on the island of Luzon, Philippines. It sits within Taal Lake,<br> about 70 kilometers south of Manila. Known for its frequent eruptions<br> and picturesque setting, it is one of the most active volcanoes in the country.";
    document.querySelector('.loc').innerHTML = '<i class="fa-solid fa-location-dot"></i> Batangas, Philippines'

    const boxes = document.querySelectorAll('.contain, .contain2, .contain3, .contain4, .contain5');

    boxes.forEach(function(box){
        box.classList.remove('clicked')
    });

    event.currentTarget.classList.add('clicked');

}
function bgc(event){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('My image/manila.jpg')";

    document.querySelector('.mayon').innerHTML = "Bonifacio Global City (BGC)";
    document.querySelector('.info').innerHTML = "Bonifacio Global City (BGC) is a modern, upscale urban development located<br> in Taguig, Metro Manila, Philippines. Known for its cosmopolitan vibe,<br> BGC is home to high-rise office buildings, residential complexes, shopping malls,<br> restaurants, and cultural attractions. It is a hub for business, lifestyle, and entertainment,<br> attracting both locals and international visitors";
    document.querySelector('.loc').innerHTML = '<i class="fa-solid fa-location-dot"></i> Taguig, Philippines'

    const boxes = document.querySelectorAll('.contain, .contain2, .contain3, .contain4, .conatain5');

    boxes.forEach(function(box){
        box.classList.remove('clicked')
    });

    event.currentTarget.classList.add('clicked');

}