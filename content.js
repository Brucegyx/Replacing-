

chrome.runtime.onMessage.addListener(getMessage);

function getMessage (request, sender, sendResponse) {
    if (request.greeting === "go") {
        console.log("hi");
    let images = document.getElementsByTagName('img');
    let paragraphs = document.getElementsByTagName('p');
    let url = chrome.runtime.getURL("hacked.png");
    for (let imgElt of images) {
        //console.log(imgElt.src);
        
        console.log(url);
        imgElt.src = url;
        }
    for (let parElt of paragraphs) {
        console.log(parElt.innerHTML);
        parElt.innerHTML = "Hhhhhhhhhhaaa";
        parElt.style = "font-size: 200%";
    }
    }
    
}



