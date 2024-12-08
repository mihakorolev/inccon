function wrapText(text, wrapTime) {
    setTimeout(() => {
        // Logic to wrap text after wrapTime milliseconds
        console.log('Text wrapped:', text);
    }, wrapTime);
}

let myText = "This is a sample text.";
let wrapTime = 5000; // Wrap the text after 5 seconds

wrapText(myText, wrapTime);
