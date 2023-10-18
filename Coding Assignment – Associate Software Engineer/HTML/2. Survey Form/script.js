function displayFormData(event) {
    event.preventDefault();  // Prevent the default form submission behavior
  
    // Get the form element
    const form = document.getElementById('form');
  
    // Get the form data
    const formData = new FormData(form);
    const formValues = {};
  
    // Iterate through form data and store in an object
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
  
    // Create a string representation of the form data
    const formString = JSON.stringify(formValues, null, 2);
  
    // Display the form data in a popup
    alert('Form Data:\n' + formString);
    form.reset();
  }
  