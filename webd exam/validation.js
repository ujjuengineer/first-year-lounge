// question 11 , js for validation of email and number

function validateEmail(email) {
    // Regular expression for validating email format
    const myMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return myMail.test(email);
  }
  
  function validatePhoneNumber(phoneNumber) {
    // Regular expression for validating phone number format (e.g., +1234567890 or 123-456-7890)
    const myPhone = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return myPhone.test(phoneNumber);
  }
  
  // Example usage
  const email = "example@example.com";
  const phoneNumber = "+1234567890";
  
  if (validateEmail(email)) {
    console.log("Valid email");
  } else {
    console.log("Invalid email");
  }
  
  if (validatePhoneNumber(phoneNumber)) {
    console.log("Valid phone number");
  } else {
    console.log("Invalid phone number");
  }

  