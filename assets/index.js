let numSlides = 1;
let getSlides = document.getElementsByClassName("questions");
let prevArrow = document.getElementsByClassName("previousArrow");
let nextArrow = document.getElementsByClassName("nextArrow");
var elements = document.getElementsByName("question");
var elementsOne = document.getElementsByName("question1");
var elementsTwo = document.getElementsByName("question2");
var elementsThree = document.getElementsByName("question3");
var elementsFour = document.getElementsByName("question4");

initCarousel(numSlides);
        
    function currentSlide(n) {
        var slideIndex = numSlides += n;

        handleDisable(slideIndex);
        
        initCarousel(slideIndex);
    }
    
    // initiate the function for carousel
    function initCarousel(n) {
        let i;
        
        if (n > getSlides.length) {
            numSlides = 1;
        }
        
        if (n < 1) {
            numSlides = getSlides.length;
        }
        
        for (let getSlide of getSlides) {
            getSlide.style.display = "none";
        } 
        
        getSlides[numSlides -1].style.display = "block";
    }

    // initally disable prev arrow 
    function handleDisable(slideIndex) {
        if (slideIndex === getSlides.length) {
            document.getElementById("nextArrow").style.visibility = "hidden";
            document.getElementById("prevArrow").style.visibility = "hidden";
        } else if (slideIndex != 1) {
            document.getElementById("prevArrow").classList.remove("disableTag");
        }
    };

    // get value of selected element for group 0 and enable next btn
        function questionaire() {
            for (var i = 0; i < elements.length; i++) {
                if(elements[i].checked){
                    return document.getElementById("btn").classList.remove("disableBtn"), elements[i].value;
                } 
            }
        }

    // get value of selected element for group 1 and enable next btn
        function questionaireOne() {
            for (var i = 0; i < elementsOne.length; i++) {
                if(elementsOne[i].checked){
                    return document.getElementById("btn1").classList.remove("disableBtn"), elementsOne[i].value;
                } 
            }
        }

    // get value of selected element for group 2 and enable next btn
        function questionaireTwo() {
            for (var i = 0; i < elementsTwo.length; i++) {
                if(elementsTwo[i].checked){
                    return document.getElementById("btn2").classList.remove("disableBtn"), elementsTwo[i].value;
                } 
            }
        }

    // get value of selected element for group 3 and enable next btn
        function questionaireThree() {
            for (var i = 0; i < elementsThree.length; i++) {
                if(elementsThree[i].checked){
                    return document.getElementById("btn3").classList.remove("disableBtn"), elementsThree[i].value;
                } 
            }
        }
   
        // get value of selected element for group 4 and enable next btn
        function questionaireFour() {
            for (var i = 0; i < elementsFour.length; i++) {
                if(elementsFour[i].checked){
                    return document.getElementById("btn4").classList.remove("disableBtn"), elementsFour[i].value;
                } 
            }
        }
       
        function results() {
            var results = questionaire();
            var result = document.getElementById("results");
            result.innerHTML = results
        }
        
        function resultsOne() {
            var resultsOne = questionaireOne();
            var resultOne = document.getElementById("resultsOne");
            resultOne.innerHTML = resultsOne
        }

        function resultsTwo() {
            var resultsTwo = questionaireTwo();
            var resultTwo = document.getElementById("resultsTwo");
            resultTwo.innerHTML = resultsTwo
        }
       
        function resultsThree() {
            var resultsThree = questionaireThree();
            var resultThree = document.getElementById("resultsThree");
            resultThree.innerHTML = resultsThree
        }

        function resultsFour() {
            var resultsFour = questionaireFour();
            var resultFour = document.getElementById("resultsFour");
            resultFour.innerHTML = resultsFour
        }



