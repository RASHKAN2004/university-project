
function validateName(name) {
    const trimmedName = name.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (trimmedName === "") return "Full Name cannot be empty.";
    if (!nameRegex.test(trimmedName)) return "Full Name must contain only letters and spaces.";
    return true;
}

function validateNIC(nic) {

    const oldNicRegex = /^\d{9}[VXvx]$/;
    const newNicRegex = /^\d{12}$/;
    if (nic === "") return "NIC Number is required.";
    if (!oldNicRegex.test(nic) && !newNicRegex.test(nic)) {
        return "Invalid NIC format (Use 9 digits + V/X or 12 digits).";
    }
    return true;
}

function validateContact(contact) {
    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) return "Contact Number must be exactly 10 digits.";
    return true;
}

function validateCourse(course) {
    if (course === "") return "Please select a course.";
    return true;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const nic = document.getElementById("nic").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const isAgreed = document.getElementById("agreement").checked;

    let errors = [];

    const nameCheck = validateName(fullName);
    if (nameCheck !== true) errors.push(nameCheck);

    const nicCheck = validateNIC(nic);
    if (nicCheck !== true) errors.push(nicCheck);

    const contactCheck = validateContact(contact);
    if (contactCheck !== true) errors.push(contactCheck);

    const courseCheck = validateCourse(course);
    if (courseCheck !== true) errors.push(courseCheck);

    if (!email.includes("@") || email === "") {
        errors.push("Please enter a valid Email Address.");
    }

    if (!isAgreed) {
        errors.push("You must agree to the confirmation checkbox.");
    }

    if (errors.length > 0) {
        alert("Errors found:\n- " + errors.join("\n- "));
    } else {
        alert("Registration Successful!");
        this.submit();
    }
});
