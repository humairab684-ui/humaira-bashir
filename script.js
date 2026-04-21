// Typing Effect
const text = ["Web Developer", "Student", "Freelancer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = text[i];

    if (!deleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j === 0) {
            deleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, deleting ? 50 : 100);
}
type();


// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;

    if (name === "" || email === "" || msg === "") {
        document.getElementById("formMsg").innerHTML = "Please fill all fields!";
        document.getElementById("formMsg").style.color = "red";
        return false;
    }

    document.getElementById("formMsg").innerHTML = "Message sent successfully!";
    document.getElementById("formMsg").style.color = "green";
    return false;
}