
/* javascript lives here */

console.log("App Started");

// declare / initialize firstHeading variable
// firstHeading variable creates a link (reference) to the H1 Element
let firstHeading = document.getElementById("firstHeading");

firstHeading.style.color = "#000000";
firstHeading.style.fontWeight = "500";
firstHeading.style.opacity = "0.5";

// I can use my firstHeading variable as if it IS the Element
// DON'T USE THIS
//window.alert(firstHeading.textContent);

// DON'T DO THIS EITHER
//document.write(firstHeading.textContent);

// but this is ok
console.log(firstHeading.textContent);

// THREE Steps for injecting content onto your page
// STEP 1 - create a reference to an Element (reference variable)
var FirstParagraph = document.getElementById("FirstParagraph");

// STEP 2 - create a variable that contains your content (content variable)
var myContent = "It was a sunny day in Florida. It felt great. I love the sun.";

// STEP 3 - assign the variable with your content to the
// textContent propery of the reference variable
FirstParagraph.textContent = myContent;

var SecondParagraph = document.getElementById("SecondParagraph");

var myHTMLContent = "<h2>Second Heading</h2>"
                     + " <p>This is an inner paragraph to the Second Paragraph</p>";

SecondParagraph.innerHTML = myHTMLContent;







// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}