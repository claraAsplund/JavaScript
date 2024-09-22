const quotes = [
    {
        quote: "The way to get started.",
        author : "Walt Disney",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:second-child");


const todaysQuote  = console.log(quotes[Math.floor(Math.random * quotes.length)]);


/*Math.random() offer between 0 and 1
Math.random() * 10 
Math.round(1.1) return 1
Math.round(1.5) returns 2 1.5   부터 반올림

Math.ceil(1.0) return 1
Math.ceil(1.0001)  returns 2


Math.floor(1.9999) return 1
*/
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

