document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // You can add your form submission logic here
    // For now, let's just log the form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log(formObject);
});
