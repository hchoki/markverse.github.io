window.addEventListener('DOMContentLoaded', function() {
    var slideshowContainer = document.getElementById('slideshow-container');

    var priorityImages = [
        'images/somna-1.png',
        'images/somna-2.png',
        'images/somna-3.png',
        'images/somna-4.png',
        'images/somna-5.png',
        'images/somna-6.png',
        'images/somna-7.png',
        'images/somna-8.png',
        'images/somna-9.png',
        'images/somna-10.png',
        'images/somna-11.png',
        'images/somna-12.png',
        'images/somna-13.png',
        'images/somna-14.png',
        'images/somna-15.png',
        'images/somna-16.png',
        'images/somna-17.png',
        'images/somna-18.png',
        'images/somna-19.png',
    ];

    var extraImages = [
        'images/VRChat_2024-06-07_22-11-09.png',
        'images/avali1.png',
        'images/umbra4.png',
        'images/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpeg',
        'images/umbra1.png',
        'images/avali2.png',
        'images/VRChat_2024-06-07_22-11-09.png',
        'images/avali3.png',
        'images/umbra5.png',
        'images/umbra2.png',
        'images/VRChat_2024-06-08_20-57-33.018_2560x1440.png',
        'images/umbra3.png',
        'images/umbra6.png',
        'images/VRChat_2024-06-07_01-37-34.697_1920x1080.png',
        'images/VRChat_2024-06-08_21-00-08.892_2560x1440.png',
        'images/avali4.png',
        'images/hecka.png',
        'images/ritualneo.jpg',
        'images/paris1.png',
        'images/heliflelfon.png',
        'images/titanic4.png',
        'images/CurtainRod.png',
        'images/Donkeysaur.png',
        'images/paris3.png',
        'images/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpeg',
        'images/avali5.png',
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

    // Fisher-Yates shuffle
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(priorityImages);
    shuffle(extraImages);

    // Combine arrays: priority first, then extra
    var imageUrls = priorityImages.concat(extraImages);

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
