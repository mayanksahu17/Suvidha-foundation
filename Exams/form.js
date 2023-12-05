document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbQPxVyJRWy6FIY-Hc5MhGRmowBMB9tQdTnSa0_4Cs5rOVznLLkUNcJASQ9YpckCyYTg/exec';
    const form = document.forms['submit-to-google-sheet'];
  
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            console.log('Success!', response);
            alert("Your response was recorded");
  
            // Clear input values
            const formControls = document.getElementsByClassName("form-control");
            Array.from(formControls).forEach(control => {
              control.value = '';
            });
          })
          .catch(error => console.error('Error!', error.message));
      });
    } else {
      console.error("Form not found!");
    }
  });
  