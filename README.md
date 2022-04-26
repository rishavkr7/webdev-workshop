# Part 3 - Javascript

Check out our website in the browser preview - it looks pretty good now! But the question text and answer button options don't change and the buttons don't do anything yet. To implement the webpage logic, you need to use the programming language of the web and one of the most popular programming languages - Javascript.

For an introduction to JavaScript [please visit this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide). We will be using many of the basic JavaScript constructs like functions, variables, control flow, loops, expressions and objects. Additionally we will use promises to interact with external web services.

JavaScript enables our websites to communicate with other web services through [APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction). Some of these APIs are related to manipulating the current web page and are provided by the user's web browser. Other APIs are related to data stored outside our web site and are provided by external web servers. Below I have explained the APIs we need to build our game.

The first API we will be working with is the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) which is provided by the browser. The DOM API is basically the way we use JavaScript to handle events and manipulate the web page. For example the DOM API has a way to listen for button click events which is useful when responding to the user clicking any of the answer button options and triggering the next steps. The DOM API also lets you update the text and other attributes of the HTML elements, which allows us to update our question text and answer button options everytime we fetch a new question.

In addition to the DOM API, the data for this game is sourced from 2 external APIs:

1. The questions data comes from [Open Trivia DB](https://opentdb.com/). Open Trivia DB has an API which gives you a list of questions along with their correct and wrong answers. You can play around with this API [here](https://opentdb.com/api_config.php). Just click the button to generate an API url then open it in a new browser tab. You should see the results of the API as a JSON response. We will talk a bit more about JSON later.
2. The image clue for the question comes from the [Tenor GIF API](https://tenor.com/gifapi). Tenor is the same service that supplies GIFs on WhatsApp. They have an API where you can request GIFs for a given query string. I haved used the correct answer to the current question fetched from Open Trivia DB as the query to the Tenor API, and it gives mostly great results. You will need an API key to use the Tenor API and you can [request for one here](https://tenor.com/developer/keyregistration). Once you have an API key, you can test the Tenor API by opening [this url](https://g.tenor.com/v1/search?q=hello&key=) in your browser and replacing the value of the `key` parameter with your API key and the value of the `q` parameter with any other string you want to search. The results are again in JSON.

Before I start coding any project in a programming language, I like to write down my thoughts in a simple language without any strict rules. This is called pseudocode and it basically captures what (logic) we are planning to implement, without worrying about how we implement it (the programming language).

A simple way to write pseudocode is in the form of "When event X happens, do steps A, B, ...". For example

```
- When the page loads:
    - do step A
    - do step B
    - do step ...
```

I have added a file js/game.pseudo.yml which contains a placeholder for the pseudocode. To begin with, let's write the pseudocode steps for when the page loads. Think of all the APIs we need to call and what needs to be done when the page loads and write it down. Don't worry about the details like "how to call the API", just write down your high-level thoughts in simple words.

Next let's start converting our pseudocode into JavaScript. I have already created a file js/game.js which is linked to our game.html page. This contains a function that prints a message to the console when the game.html page loads. Let us implement this stub function by adding all the steps from your pseudocode. For each step create a distinct function and call it in the page load function. This is how I would map my high-level thoughts into a programming language.

Lastly for each step that has a distinct function, you just need to implement the function using JavaScript, DOM APIs, external APIs, etc. I have shared some hints below.

At the end of this part of the workshop, we should be seeing a new question with its answer options and the clue image when we load your game page.

## Workshop steps

0. Create a new branch from workshop/part3-javascript
1. In js/game.pseudo.yml, complete the pseudocode steps for "when the page loads". (HINT: we need to see the first question and clue image)
2. In js/game.js, create a new function for each step in your pseudocode. Call these functions from "on_page_load".
3. Implement the functions for the distinct steps when the page loads. (HINT: refer to branch **workshop/part3-javascript-hints** for hints to do the implementation)

## Next steps

Always start by writing down what you are planning to implement in some form of pseudocode. This does not require you to learn any language - just use whatever you know to express how you think your app should behave.

Once you do this, how you are planning to implement the pseudocode is just a matter of knowing the syntax and semantics of the language. A good way to start coding is to write your pseudocode in the form of high-level functions first. Then implement each of the functions using the language constructs and APIs provided.

Using this approach you can complete the rest of the game. You will need to think about what should happen when the player clicks an answer button and break it down into distinct steps. There will also be some state you will need to track using variables, as in my game the player cannot go on making wrong answers and the game does get over at some point.

Once you are done with this part of the workshop:

- commit your changes to your working branch
- push your working branch and its changes to GitHub
- deploy your branch to GitHub pages

You can switch to **workshop/completed** branch anytime to view the complete implementation of the game.
