var count = 3;
var countElement = document.querySelector("#likesCount")

function add(){
    count++;
    countElement.innerText = count + " likes(s)";
    
}
