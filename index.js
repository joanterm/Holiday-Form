let formCollector = document.getElementById("form-collector")
let mainCover = document.getElementById("main-cover")

formCollector.addEventListener("submit", submitForm)

function submitForm(event) {
    event.preventDefault() //it will prevent page from re-loading once you click register
    let myNewForm = new FormData(event.target) 
    let userFirstName = myNewForm.get("first-name")

    let updatedContent = `

    <h1>Hello, ${userFirstName}!</h1>

    <h2>Thank you for signing-up for this year's holiday event!</h2>

    <h2>You will shortly receive an e-mail confirming you submission and containinig all important information you need to know prior to this event.</h2>  

`
    mainCover.innerHTML = updatedContent;
}

