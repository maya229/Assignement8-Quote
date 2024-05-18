
var quotes = [
    "“Be yourself; everyone else is already taken.”<br><br>― Oscar Wilde",
    "“So many books, so little time.”<br><br>― Frank Zappa",
    "“A room without books is like a body without a soul.”<br><br>― Marcus Tullius Cicero",
    "“You only live once, but if you do it right, once is enough.”<br><br>― Mae West",
    "“Be the change that you wish to see in the world.”<br><br>― Mahatma Gandhi",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”<br><br>― J.K. Rowling, Harry Potter and the Goblet of Fire",
    "“In three words I can sum up everything I've learned about life: it goes on.”<br><br>― Robert Frost",
    "“If you tell the truth, you don't have to remember anything.”<br><br>― Mark Twain",
    "“A friend is someone who knows all about you and still loves you.”<br><br>― Elbert Hubbard",
    "“To live is the rarest thing in the world. Most people exist, that is all.”<br><br>― Oscar Wilde",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br><br>― Mahatma Gandhi"
];
// var quotes =[1,2,3,4,5,6,7,8,9,10]
var usedIndices = [];
function getRandomIndex() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedIndices.includes(randomIndex));
    usedIndices.push(randomIndex);
    return randomIndex;
}
function displayQuotes(){
    if (usedIndices.length === quotes.length) {
        usedIndices = [];
        var randomIndex = getRandomIndex();
        var item = quotes[randomIndex];
        document.getElementById('quotes').innerHTML = item;
        return;
    }
    var randomIndex = getRandomIndex();
    var item = quotes[randomIndex];
    document.getElementById('quotes').innerHTML = item;
}