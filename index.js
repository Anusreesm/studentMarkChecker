function checkPassOrFail(event) {  
    event.preventDefault();  //event.preventDefault();-after submitting it prevents the clearing of console
    const mark = parseInt(document.getElementById("userMarks").value);  //document.getElementById("fname") -code retrieves an element from the HTML document with the ID "fname".
                                                                    //.value- accesses the current value entered into the input field with the ID 'fname'.
                                                                    //The parseInt() function in JavaScript converts a string into a whole number
     if (mark >= 50) {
      console.log("pass");
    } else {
      console.log("fail");
    }
    return false;
  } 
  document.getElementById("markForm").addEventListener("submit", checkPassOrFail);  //addEventListener() method to add many events to the same element without overwriting existing events:
                                                                                    // submit-the first argument is submit ie, submit refers to form submission event,
                                                                                    //This event is triggered when a form is submitted,  by clicking on submit button 
                                                                                    //checkPassOrFail- function that should be executed when the first argument occurs.
                                                                                    // In this case, checkPassOrFail refers to a function named checkPassOrFail().
                                                                                    //It contains the logic to be executed when the form is submitted.
