// PART 1
// Select submit button and call it submitButton
let submitButton = document.getElementById("addHero");

// Select reset button and call it resetButton
let resetButton = document.getElementById("resetForm");

// Select main content area and call it main
let main = document.getElementsByClassName("row main");

// Select how to use element and call it howToUse
let howToUse = document.getElementById("howTo");

// Create an empty array for all heroes and call it heroes
let heroes = [];

// Create an empty string for all cards of heroes and call it cards
let cards = "";

// PART 2
//create an event listener to the following:
    //submitButton = click, createHeroesArray
    // resetButton = click, resetForm
    // howToUse = click, howToUsePopup

    // document.querySelector('#addHero').addEventListener('click', function(){
    //     createHeroesArray();
    // });
   
    submitButton.addEventListener('click', function (){
        createHeroesArray();
    });
    
    // document.querySelector('#resetForm').addEventListener('click', function(){
    //     resetForm();
    // });

    resetButton.addEventListener('click', function (){
        resetForm();
    });
    
    // document.querySelector('howTo').addEventListener('click', function(){
    //     howToUsePopup();
    // });
    howToUse.addEventListener('click', function (){
        howToUsePopup();
    });

    
// PART 3
// Create a function called createHeroesArray that takes in an event object

function createHeroesArray(event){
    
    
    // Prevent the button from doing what it naturally does (redirect to a new page)
    //event may need to change if line 53 (event) naming is diff..side note..
    event.preventDefault();

    //reference link...
    // https://www.w3schools.com/jsref/event_preventdefault.asp

    // Create a Hero constructor that takes in - name, quote, imgURL
    function Hero(name, quote, imgURL){    
        this.hero = name;
        this.quote = quote;
        this.imgURL = imgURL;
    }
    
    // Create a new Hero object that stores the values of each input field (name, quote, imgURL)

    let name = document.getElementById ("name");
    let quote = document.getElementById ("quote");
    let imgURL = document.getElementById ("imgURL");
    let hero = new Hero (name, quote, imgURL);

    //reference link..
    // https://javascript.info/constructor-new

    // Push the new object into the heroes array
     heroes.push(hero);

    // call the createCard function (you will make this shortly)
    createCard();
    
    // call the addHero function (you will make this shortly)
    addHero();


// PART 4
// Create a function called createCard
    function createCard(){

    // create a loop to go through the heroes array
    for (i = 0; i < heroes.length; i++){

    
        // CREATE A CARD
        //create elements for div.card, h3, img, p
        let card = document.createElement("div"["card", "h3", "img", "p"]);
    }


        // add a class called hero-card to div.card element
        
        

        // add a class called heroImg to the img element
        

        // set attribute src to the img element with the imgURL from the heroes array
        

        // create textnode with the hero's name and append it into the h3 element
        

        // create textnode with the hero's quote and append into the p element
       

        // append h3 to card
        

        // apend img to card
        

        // apend p to card
        

        // append card to main
 


// PART 5
// create a function called addHero

    // clear the main div of any content
    

    // call the createCard function
 


// PART 7
// create a function called resetForm 

    // select the form tag and use the reset method to clear the content
 


// PART 8
// create a function called howToUsePopup that takes in an event object

    // Prevent the button from doing what it naturally does (redirect to a new page)
  

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"
 



