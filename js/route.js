


var quotes = [  
   "Be yourself; everyone else is already taken.”Oscar Wilde",
   "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.― Albert Einstein" ,
   "“A room without books is like a body without a soul.― Marcus Tullius Cicero" ,
   "You only live once, but if you do it right, once is enough.― Mae West" ,
   "“Be the change that you wish to see in the world.― Mahatma Gandhi"
];  

let currentIndex = 0;  

function getRandomQuote() {  
    if (currentIndex >= quotes.length) {  
        currentIndex = 0;  
    }  
    document.getElementById('quote').innerText = quotes[currentIndex];  
    currentIndex++;  
}  

window.onload = getRandomQuote;  

document.getElementById('newQuoteBtn').addEventListener('click', getRandomQuote);  