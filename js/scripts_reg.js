/*function addFacebook(){
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    form.appendChild(FN);
}*/




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

        facebookFormText.innerHTML = "Please enter a link to your Facebook account.";

        document.getElementById("test-id").appendChild(facebookFormText);

        const facebookFormField = document.createElement('input');
        facebookFormField.placeholder = 'Enter link to your facebook account';

        const container = document.getElementById('test-id');
        container.appendChild(facebookFormField);

        addFacebookFlag = false;
    }
}




