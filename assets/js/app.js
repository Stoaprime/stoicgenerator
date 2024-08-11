const card = document.querySelector(".card");

const quoteText = document.getElementById("quote-text");
const quoteCite = document.getElementById("quote-citing");

const copyBtn = document.getElementById("copy-btn");
const tweetBtn = document.getElementById("tweet-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    quoteText.textContent = quote.text;
    quoteCite.textContent = quote.author;
}

function copyQuote() {
    const textToCopy = quoteText.textContent + ` - ` + quoteCite.textContent;
    const textarea = document.createElement("textarea");

    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);
}

function tweetQuote() {
    const URL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteCite.textContent}`;
    window.open(URL, '_blank');
}

function animateQuoteContainer() {
    card.style.transform = 'translateY(-50px)';
    card.style.opacity = '0';

    card.style.transition = 'transform 1s ease, opacity 1s ease';

    requestAnimationFrame(() => {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
    });

    copyBtn.disabled = true;
    tweetBtn.disabled = true;
    newQuoteBtn.disabled = true;

    card.addEventListener('transitionend', function () {
        copyBtn.disabled = false;
        tweetBtn.disabled = false;
        newQuoteBtn.disabled = false;
    }, {once: true});
}

function generateQuote() {
    card.style.transition = 'transform 1s ease, opacity 1s ease';
    card.style.transform = 'translateY(50px)';
    card.style.opacity = '0';

    card.addEventListener('transitionend', function onFadeOut() {
        card.removeEventListener('transitionend', onFadeOut);

        const randomQuote = getRandomQuote();
        displayQuote(randomQuote);

        animateQuoteContainer();
    }, {once: true});
}

copyBtn.addEventListener('click', copyQuote);
tweetBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', generateQuote);

function initializePage() {
    generateQuote();
}

window.addEventListener('load', initializePage);
