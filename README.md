# MetaCodeQuiz
---
## Functionality

In this program the user is prompted questions about programming.

## Where to start?

To do/Needed.

- [ ] Inititalize values

- [ ] Populate HTML

- [ ] make it dynamic-- maybe use .innerHTML to generate the next set of questions? Hmmm. Or what is a better way of doing it? research.

- [ ] Timer in all pages (or the 1 page) at the top of page. How much time should they get. Per question or for the whole quiz? For the whole quiz would be easier.

```

            document.getElementById("timer").innerHTML =  hours + "h "+ minutes + "m " + seconds + "s ";

            still need end text i.e. innerhtml = "EXPIRED"

            should all answers after timer expire = false? create a variable that checks truthiness on answers

``` 

- [ ] score counter
if score = true then +1 to score. Maybe a for loop? we'll need a variable init for score
else if score = false "execute.this"

- [ ] High Score will need to be an array. We're going to append and/or add to the array of high scores. Hmmm maybe we should do an empty [] to start, then use shift or another array adder to start adding scores. We're going to do the two value-pairs:

initials & scoreValue

user input on initials. We'll need a user gui input. what is relevant js. include it here. 

- [ ] ~~~Develop at least 4 options to pick from on each question. math.floor(math.random +1)   ????? we'll need a plus 1 and make it a range of 4 options. Does that mean 0-3 so that we have 4 total indexes? hmmmm. or 1-4 doesn't really matter~~

- [x] woff2 file added and `ROBOTO` font added. Waded through @font-face hell. Pretty cool.








## Questions: 

1. If the dev wants to console log multiple object properties in the same console.log() '&&' does not work. How do we print multiple properties on the same line?

1. ,
2. andAlso
3. || pipe it!
4. &



4. If a test-taker wanted to take "full-advantage" of their resources... In other words potentially <i>cheat</i> on this test how would they do it?

1. Eliminate the most improbable answers then make an educated guess.
2. Ask their instructor/mentor.
3. Google it.
4. Inspect ELement for class/id.


## Cheating -- Revise Later

User can cheat by inspecting elements. If answer is called by class and other answers are called by something else--user can find the right answer without actually knowing it. Consider revising in the future.

Will closures reduce cheating? Research. can minify and obfuscate code to decrease readability--one option?

