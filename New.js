const username = localStorage.getItem("username");
const domain = localStorage.getItem("domainName");
const extension = localStorage.getItem("extension");

const resultDiv = document.getElementById("result");
if(username && domain && extension) {
    resultDiv.textContent = `username: ${username}, Domain:${domain}, Extension: ${extension}`;}
else {
    resultDiv.textContent = "No data found."
}   