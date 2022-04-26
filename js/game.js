// global consts
const TRIVIA_API_URL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"; // see https://opentdb.com/api_config.php
const TENOR_API_URL = "https://g.tenor.com/v1/search?q=QUERY&key=API_KEY&limit=10";
const TENOR_API_KEY = ""; // you need to add your own API key from Tenor and replace API_KEY in TENOR_API_URL. See https://tenor.com/gifapi

function on_page_load() {
    console.log("Page has loaded ...");
}

window.onload = on_page_load;