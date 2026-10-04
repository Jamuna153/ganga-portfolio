let form = document.querySelector("#contact_form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    form.textContent = `Thank you, ${name} !  I will reply soon.`;
});
