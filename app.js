let slideIndex = 0;

    function showSlide(index) {
        let slides = document.getElementsByClassName("slides");
        if (index >= slides.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function changeSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    // Initial display
    showSlide(slideIndex);

    let slideIndex2 = 0;

    /*function showSlide2(index2) {
        let slides2 = document.getElementsByClassName("slides2");
        if (index2 >= slides2.length) { slideIndex2 = 0; }
        if (index2 < 0) { slideIndex2 = slides2.length - 1; }
        for (let i2 = 0; i2 < slides2.length; i2++) {
            slides2[i2].style2.display2 = "none2";
        }
        slides2[slideIndex2].style2.display2 = "block2";
    }

    function changeSlide2(n2) {
        slideIndex2 += n2;
        showSlide2(slideIndex2);
    }

    // Initial display
    showSlide2(slideIndex2);*/