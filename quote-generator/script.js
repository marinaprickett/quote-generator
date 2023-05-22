function generate(){
    var quotes = {
        "- Oscar Wilde" : '“Be yourself; everyone else is already taken.”',
        "- Maya Angelou" : '“There is no greater agony than bearing an untold story inside you.”',
        "- Aaron Lauritsen" : '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "- Maurice Switzer" : '“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”',
        "- Albert Einstein" : '“Any fool can know. The point is to understand.”',
        "- W.P. Kinsella" : '“Success is getting what you want, happiness is wanting what you get”',
        "- Walt Disney" : '“The way to get started is to quit talking and begin doing. ”',
        "- Woody Allen" : '“Eighty percent of success is showing up.”',
        "- Marthe Troly-Curtin" : '“Time you enjoy wasting is not wasted time.”',
        "- Dalai Lama XIV" : '“Happiness is not something ready made. It comes from your own actions.”',
        "- Honoré de Balzac" : '“All happiness depends on courage and work.”',
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}