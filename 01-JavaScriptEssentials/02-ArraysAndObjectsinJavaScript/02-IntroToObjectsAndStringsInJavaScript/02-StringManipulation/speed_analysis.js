/* == Step 2: Defining variables and functions == */

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  // rest user input
  document.getElementById("userInput").readOnly = false;
  document.getElementById("userInput").value = "";

  // Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeElapsed = (endTime - startTime) / 1000; // in seconds
  var userTypedText = document.getElementById("userInput").value;
  var typedLength = userTypedText.length;

  var correctChars = 0;
  for (var i = 0; i < testText.length; i++) {
    if (testText[i] == userTypedText[i]) {
      correctChars++;
    }
  }
  var accuracy = correctChars / testText.length;
  var percentage = roundToThreeSF(accuracy * 100);




  // Split the text using regex to count words correctly
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0; // Default value

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  var modWPM = roundToThreeSF(wpm * accuracy);

  // Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
    "<p>Total Length: " + typedLength + "</p>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>" +
    "<p>Accuracy: " + percentage + "%</p > " +
    "<p> Modified WPM: " + modWPM + "</p>";

  // Reset the button
  var button = document.getElementById("btn");
  button.innerHTML = "Start Test";
  button.onclick = startTest;
}

/* == Practice Task ==
You can also calculate the total length of text which you have captured in
variable userTypedText that user has entered. For this you need to utilize:
- length property to check the length of entire text using variable userTypedText.
- Include in the output result as well. */

roundToThreeSF = (x) => Math.round(10 * x) / 10;
