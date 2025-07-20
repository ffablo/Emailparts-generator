const display = document.getElementById("views");
const email = document.getElementById("myEmail");
document.getElementById("check").onclick = function(){
    emailValue = email.value;
    let username = emailValue.slice(0, emailValue.indexOf("@"));
    //console.log(`Your username is: ${username}`);
    let domainName = emailValue.slice(emailValue.indexOf('@')+1, emailValue.indexOf('.'));
    let extension = emailValue.slice(emailValue.indexOf('.')+1);
    display.textContent = `Username = ${username}Domainname = ${domainName}Extension = ${extension}`;


    localStorage.setItem("username",username); 
    localStorage.setItem("domainName",domainName);
    localStorage.setItem("extension",extension);

   // window.location.href = "result.html"

}
