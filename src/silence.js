// This line makes javascript behave better.
// If you're curious: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict"

// The below line and the last line in the file `})();` are just javascript nonsense.
// If you're curious why: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
    // Call the function below when this script loads, and it will loop every frame.
    mute();

    // This function just calls the other two
    function mute() {
        // Try to click both buttons
        try {
            clickMuteButton();
            clickMuteSvgButton();
        } catch(e) {
            // If anything goes wrong, we'll just do nothing instead until the next frame.
            // It's not like we need to log an error every frame or anything.
        }

        // Run the mute function (this function) every frame.
        // Is this overkill?  Yes.  Should spelltable let us disable microphone access while using the camera?  Yes.
        requestAnimationFrame(mute);
    }

    // Clicking a <button> is straightforward
    // The mute <button> is a lot harder to find on the page, but it's only visible when you're not in a game yet.
    // Since it's not a high priority and it's likely to break, we'll not bother to implement this function.
    function clickMuteButton() {
        // Do nothing.
    }

    // On the actual gameplay page, the "button" is really an <svg>.  Luckily it has a reliable ARIA label we can find it with.
    // Clicking an <svg> is different from clicking a button.
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
    function clickMuteSvgButton() {
        // Make an SVG click event
        const click = document.createEvent("SVGEvents");
        click.initEvent("click",true,true);

        // Get the mute button if it exists.  Does not grab the unmute button.
        const button = document.querySelector('[aria-label="Toggle Microphone Off"]');

        // Make sure we found a button before we try to click it.
        if(button !== null) {
            // Fake a click on the button.
            button.dispatchEvent(click);
        }
    }
})();
