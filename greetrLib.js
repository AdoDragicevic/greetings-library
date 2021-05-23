//Greetr will work with jQuery
(function(global, $){

    // Create new object without typing keyword new
    let Greetr = function(name, sirname, language){
        return new Greetr.Init(name, sirname, language);
    }


    // Function constructor
    Greetr.Init = function(name = "", sirname = "", language = "en"){
        this.name = name;
        this.sirname = sirname;
        this.language = language;
        
        if(!isLanguageSupported(language)) return `${language} not supported`; 
    }

    
    // hidden within the scope of the IIFE and never directly accessible
    const supportedLanguages = ["en", "es", "hr", "sk"];
    
    const greetings = {
        formal: {
            en: "Hello",
            es: "Hola",
            hr: "Bok",
            sk: "Ahoy" 
        },
        informal: {
            en: "Good day",
            es: "Buenos dias",
            hr: "Dobar dan",
            sk: "Dobry den"
        }
    };

    const author = {
        name: "Ado Dragicevic",
        contact: "adodragicevic@gmail.com"
    };

    const isLanguageSupported = function(lang) {
        return supportedLanguages.includes(lang);
    };


    Greetr.prototype = {

        fullName() {
            return `${this.name} ${this.sirname}`;
        },
    
        formalGreeting() {
            return `${greetings.informal[this.language]}, ${this.fullName()}`;
        },
    
        informalGreeting() {
            return `${greetings.formal[this.language]} ${this.name}!`;
        },

        // We get chainable methods by returnig "this"
        greet(formal){
            let greeting = formal ? this.formalGreeting() : this.informalGreeting();
            console.log(greeting);
            return this;
        },

        setLang(newLang) {
            if(isLanguageSupported(newLang)) this.language = newLang;
            return this;
        },

        setTxt(selector, formal){
            if (!$) return 'jQuery not loaded';
            let txt = formal ? this.formalGreeting() : this.informalGreeting();   
            $(selector).html(txt);
            return this;
        },

        changeName(firstName, lastName) {
            if(firstName) this.name = firstName;
            if(lastName) this.sirname = lastName;
            return this;
        },

        authorInfo() {
            console.log(author.name + " " + author.contact);
            return this;
        }

    };

    
    Greetr.Init.prototype = Greetr.prototype;


    global.Greetr = global._g = Greetr;


}(window, jQuery));