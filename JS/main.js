var quote = document.getElementById("quote");
var auther = document.getElementById("auther");
var quotes=[
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    `“Don’t walk in front of me… I may not follow
      Don’t walk behind me… I may not lead
      Walk beside me… just be my friend”`,
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"
];
var authers=[
    "-- Albert Einstein",
    "-- Bernard M. Baruch",
    "-- Dr. Seuss",
    "-- Albert Camus",
    "-- Maya Angelou"
];
function randomQuote(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    var randomAuthers = authers[Math.floor(Math.random()*authers.length)];
    quote.innerHTML=randomQuotes;
    auther.innerHTML=randomAuthers;
}