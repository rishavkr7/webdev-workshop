# Part 3 - Javascript (Step 1 - Pseudocode)

I usually start coding the logic of any project from scratch by writing down pseudocode. Pseudocode basically captures what (logic) we are planning to implement, without worrying about the how (language).

A simple way to write pseudocode is in the form of "When event X happens, do steps A, B, C ...". For example

```
- When the question loads:
    - update the question text
    - update the answer button options
    - fetch the clue image
```

You will notice that some steps may generate more events in the future. For example, "fetch the clue image" will generate the event "when the clue image loads".

Sometimes you may encounter a condition step. For example,

```
- When the user clicks an answer button:
    - check if the answer is correct
        - if yes, do something
        - if no, do something
```

In these cases, it becomes easy to write code later if you trigger new events for each conditional case. For example in the above case,

```
- When the user clicks an answer button:
    - check if the answer is correct and trigger "answer is correct" or "answer is wrong" event appropriately

- When answer is correct:
    - do something
    
- When answer is wrong:
    - do something
```

Think of all the event triggers for your app. Any user interaction that requires some custom logic should be an event trigger. Some event triggers can come without the user doing any action. For example when the page loads for the first time, we want to fetch the first question. Or when the question finishes loading, we want to update the question text and answer options and fetch an image for the clue.

You will probably miss a lot of functionality when you write pseudocode down for the first time for any app, especially when you don't know how the underlying technology works. You may only realise this when you start implementing the actual code.

There is also no standard way of writing pseudocode. You can use any language you want. The key here is to express the steps behind the behavior of the app, without having to worry about how those steps should be written in the final programming language.

In this part of the workshop, you need to write (in your own words) the pseudocode for the behavior of our game.html page in the above pseudocode structure.

The list of distinct events which happen in our game are:
- when the web page loads
- when a question loads
- when the image loads
- when user clicks any answer button
- when "correct answer" case
- when "wrong answer" case

## Next steps

Thinking about the logic as pseudocode upfront makes things clear when you actually sit down to code. In the next part of the workshop we will re-write our pseudocode in the form of JavaScript functions.

Push your changes to a new branch, then switch to the branch **workshop/part3-javascript-step2-functions** for the next part of the workshop.
