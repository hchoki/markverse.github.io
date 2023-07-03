window.addEventListener('DOMContentLoaded', function() {
    var slideshowContainer = document.getElementById('slideshow-container');
    var imageUrls = [
        'images/paris1.png',
        'images/titanic4.png',
        'images/CurtainRod.png',
        'images/Donkeysaur.png',
        'images/paris3.png',
        'images/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpeg',
        'images/image1.png',
        'images/mouthplay2.png',
        'images/image.png',
        'images/titanic3.png',
        'images/paris4.png',
        'images/VRChat_2023-05-27_02-27-31.591_1920x1080.png',
        'images/mouthplay3.png',
        'images/nerdy1.png',
        'images/VRChat_2023-06-02_05-32-49.894_1920x1080.png',
        'images/titanic2.png',
        'images/nerdy2.png',
        'images/paris2.png',
        'images/mouthplay1.png',
        'images/VRChat_2023-06-03_00-20-16.117_1920x1080.png',  
        'images/titanic1.png',
        'images/nerdy3.png',
        'images/VRChat_2023-06-03_00-22-20.975_1920x1080.png',
        'images/nerdy4.png',
    ];

    function createSlide(imageUrl) {
        var slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = 'url(' + imageUrl + ')';
        return slide;
    }

    function createSlides(imageUrls) {
        var slides = [];

        imageUrls.forEach(function(imageUrl) {
            var slide = createSlide(imageUrl);
            slides.push(slide);
            slideshowContainer.appendChild(slide);
        });

        return slides;
    }

    function showSlides(slides) {
        var slideIndex = 0;

        slides[slideIndex].style.opacity = '1'; // Set the initial opacity of the first slide to 1

        setInterval(function() {
            slides.forEach(function(slide) {
                slide.style.opacity = '0';
            });

            slideIndex++;

            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            slides[slideIndex].style.opacity = '1';
        }, 5000);
    }

    var slides = createSlides(imageUrls);
    showSlides(slides);
    slideshowContainer.style.opacity = '1'; // Set opacity to 1 after the page loads
});
