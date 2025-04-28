/* == Step 2: Defining variables and functions == */

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

/* Step 4: Submit on key press */
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});

function submitFeedback() {
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  // PT 3
  const experience = document.getElementById('experienceText').value;
  // END PT 3

  /* Step 3: Display user feedback on webpage */

  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;
  // PT 4
  document.getElementById('userExperience').innerHTML = experience;
  // END PT 4

  document.getElementById('userInfo').style.display = 'block';

  alert('Thank you for your valuable feedback')
}

/* == Practice Task ==
1) In this task you need to create one more text area to ask users to share
their experience with the product as well and show the result along with other
details after clicking on Submit Feedback button.
2) To complete this task, you can use <textarea> tag in html file and give
id='userExperience' as attribute for this tag.
3) Then access the details entered by user in javaScript file by accessing the
input of this textarea using document.getElementById('userExperience') and store
its value in one variable.
4) Then show the output after the button is clicked with user's other entered
details. */
