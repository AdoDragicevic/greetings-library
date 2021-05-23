// Library supports method chaining

//Create new object without keyword new
_g("Ado", "Dragicevic", "en").

//console.log informal greeting in English
greet().

//change language to Spanish
setLang("hr").

//update h1.innerText with formal greeting in Spanish
setTxt("h1", true).

//change language to Slovak
setLang("es").

//update h1.innerText with informal greeting in Slovak
setTxt("h2").

//console log formal greeting in Slovak
greet(true).

//change English formal greeting (public)
changeName("Bob", "Dylan", true).

//change to English
setLang("en").

//console log new formal greeting in English
greet(true).

//console log authors info (private)
authorInfo();