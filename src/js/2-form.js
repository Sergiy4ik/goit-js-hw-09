const formData = {
    email: "",
    message: ""
}

const LS_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea")

function addUserData() {
    const savedData = localStorage.getItem(LS_KEY);
    if (!savedData) {
        return
    }
    const parsedData = JSON.parse(savedData);

    input.value = parsedData.email;
    textarea.value = parsedData.message;

    formData.email = parsedData.email;
    formData.message = parsedData.message;
}

addUserData()


form.addEventListener("input", onFormInput);

function onFormInput(event) {
    const target = event.target;

    if (target.name === "email") {
        formData.email = target.value;
    } else if (target.name === "message") {
        formData.message = target.value
    }

    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}


form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem(LS_KEY);
    formData.email = ""
    formData.message = ""
})


