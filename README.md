## FRC-Timer

This is a Timer designed for FRC matches (mainly for summer camp use), but can be extended for anything needing a timer and points system.

Use the web version [here](https://netlockj.github.io/frc-timer/).

Use the buttons below the timer circle to start/stop the timer, reset the timer, and upload matches.

<img src="./images/example.png">

---

Matches must be done in JSON formatting, which [matches.json](./matches.json) has an example for. Use the upload button to load your match files, formatted as in the example.

```json
{
    "m1" : {
        "red": "Alliance 1",
        "blue": "Alliance 2"
    },
    ...
}
```
The names provided in each match will be the names displayed for each alliance color in the current score, and also in the final score reveal.

Resetting the timer after a match (with matches data uploaded) has finished will result in the next match being brought up. This process will continue until there are no matches left, in which case no more matches will be played.

---

Once a match has finished, (when the timer has counted down to zero), clicking the 'r' key on the keyboard will reveal the final scores and the winner. Clicking the 'r' key again will toggle the final scores off. Note that any changes to scoring will not reflect on the final scores unless they are toggled off and back on after being revealed.

<img src="./images/final-reveal.png">

---

Scoring uses the 1-8 keys on the keyboard, each pair containing an increment and decrement for points and penalties. So clicking 1 will give 1 point to red while clicking 2 will take the point back off.

The way that we have used the scoring feature is with [micro:bit](https://microbit.org/) controllers acting as bluetooth keyboard, and their buttons acting as the respective keys, which makes scoring with multiple much simpler. 

- 1/2 - Increment/Decrement Red Score
- 3/4 - Increment/Decrement Blue Score
- 5/6 - Increment/Decrement Red Penalties
- 7/8 - Increment/Decrement Blue Penalties