const Password = document.querySelector("#Password")
const ConfirmPassword = document.querySelector("#Confirm-Password")
const submitButton = document.querySelector(".btn-primary")
const errorMessage = document.querySelector("#error-message")

submitButton.addEventListener("click", (e) => {

  checkPassword()
  
  if (!checkPassword()){
    e.preventDefault()
  }else{

  }


})


function checkPassword(e){
    
    if  (Password.value === ConfirmPassword.value) return true
    else {
        ConfirmPassword.className = "error"
        errorMessage.id = "error-message-visible"
       
    }

}
