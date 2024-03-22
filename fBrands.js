console.log(" 🦊 plugin running");

window.onload = function() {
    loadCss();
    fDaBrands();

    const timeMS = 1000;

    setInterval(function() { fDaBrands() }, timeMS);
};

function loadCss() {
    console.log(" 🦊 attempting to append css");

    let d = document;

    let head = d.getElementsByTagName('HEAD')[0];
    let link = d.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./style.css"

    head.appendChild(link);
}

function fDaBrands() {
    console.log(" 🦊 ");

    console.warn(" 🦊 TWITTER DETECTED");
    const d = document;

    const elements = document.querySelectorAll(`[aria-label="Verified account"]`);
    console.log("elements.length: " + elements.length);

    elements.forEach((e) => {
        try {
            if (!e.closest(".hidden")) { // if parent doesn't have "hidden" class
                // create a new details element
                let elem = d.createElement("details");
                elem.classList.add("hiddenBrand");

                // create a summary element
                let summary = d.createElement("summary");
                summary.textContent = "another pointless brand tweet";

                // clone the tweet element
                let tweet = e.closest(`[data-testid="tweet"]`);
                let clonedTweet = tweet.cloneNode(true);

                // append the summary and cloned tweet to the details element
                elem.appendChild(summary);
                elem.appendChild(clonedTweet);

                // append the details element to the parent of the original tweet element
                tweet.parentElement.appendChild(elem);

                // remove the original tweet element
                tweet.remove();
            }
            else {
                console.log(" 🦊 element is hidden, so I'm ignoring");
            }
        } catch (err) {
            console.warn(" 🦊 THERE WAS AN ERR" + err);
        }
    });

    console.log(" 🦊 END OF UPDATE");
};

console.log(" 🦊 END OF SCRIPT");
