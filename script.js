document.querySelector(".navbar-brand").style.transitionDuration = "2s";

document.querySelector("#sign-up-button").addEventListener("click", function() {
    const email = document.querySelector("#email-input").value;
  
    // Save the email to a text file
    saveEmailToFile(email, "emails.txt");
  });


  //Functions and Stuff
  function saveEmailToFile(email, filename) {
    // Create a new file writer object
    const fileWriter = new FileWriter();
  
    // Write the email address to the file
    fileWriter.write(email);
  
    // Close the file writer
    fileWriter.close();
  
    // Check if the file was saved successfully
    if (fileWriter.readyState === FileReader.DONE) {
      // The file was saved successfully
      console.log("Email saved successfully!");
    } else {
      // There was an error saving the file
      console.log("Error saving email:", fileWriter.error);
    }
  }
  