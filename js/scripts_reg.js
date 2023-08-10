

function switchLightDarkTheme(){
  var element = document.body;
  element.classList.toggle("dark-mode");

  var button = document.getElementById("switchButton");

    if (button.textContent=="Light theme") 
        button.textContent = "Dark theme";
    else button.textContent = "Light theme";
}


var addFacebookFlag = true;

function addFacebook(){
    if (addFacebookFlag){

        const facebookFormText = document.createElement("p");
        facebookFormText.setAttribute("id", "facebookFormText");
        facebookFormText.innerHTML = "Please enter a link  to your Facebook account.";


        const container = document.getElementById('test-id');
    
        container.appendChild(facebookFormText);

        const facebookFormField = document.createElement('input');
        facebookFormField.setAttribute("id", "facebookFormField");
        facebookFormField.placeholder = 'Enter link to your facebook account';


        container.appendChild(facebookFormField);

        addFacebookFlag = false;
    }
}

function removeFacebook(){
    if (!addFacebookFlag){
        const container = document.getElementById('facebookFormField');
        container.parentNode.removeChild(container);
        const container2 = document.getElementById('facebookFormText');
        container2.parentNode.removeChild(container2);

        addFacebookFlag = true;
    }

}




