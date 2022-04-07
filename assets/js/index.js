let examplePhoto = [
    "/assets/images/content/blue_dress.jpeg",
    "/assets/images/content/pink_dress.jpeg",
    "/assets/images/content/family.jpeg",
    "/assets/images/content/family2.jpg",
    "/assets/images/content/family6.jpg",
    "/assets/images/content/food.jpeg",
    "/assets/images/content/food4.jpeg",
    "/assets/images/content/in_flowers.jpeg",
    "/assets/images/content/people1.jpeg",
    "/assets/images/content/under_the_bridge.jpeg",
    "/assets/images/content/wedding2.jpeg"
]

let photoCounter = -1;

function photoImgPrev() {
    let img = document.getElementById("photo");
    if (photoCounter < examplePhoto.length - 1)
        photoCounter ++
    else {
        photoCounter = 0
    }
    img.src = examplePhoto[photoCounter];
}

function photoImgNext() {
    let img = document.getElementById("photo");
    if (photoCounter > 0)
        photoCounter --
    else {
        photoCounter = examplePhoto.length - 1
    }
    img.src = examplePhoto[photoCounter];
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});