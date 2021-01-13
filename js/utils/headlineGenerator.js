
function createHeadlinesPage(newsData){
    var headLineContainer = document.createElement("div"),
        singleHeadlineContainer = document.createElement("div"),
        headlineImageContainer = document.createElement("div"),
        headLineImage = document.createElement("img"),
        headLineDataContainer = document.createElement("div"),
        mainHeadLine = document.createElement("div"),
        headLineDescription = document.createElement("div"),
        readMoreDiv = document.createElement("div"),
        readMoreA = document.createElement("a");
        console.log("called")
    singleHeadlineContainer.classList.add("singleHeadlineContainer");
    headlineImageContainer.classList.add("singleImageContainer");
    headLineImage.classList.add("headLineImage");
    headLineDataContainer.classList.add("headLineDataContainer");
    mainHeadLine.classList.add("mainHeadLine");
    headLineDescription.classList.add("headLineDescription");
    readMoreDiv.classList.add("readMoreDiv");
    readMoreA.classList.add("readmoreA");
  
    headLineImage.setAttribute("src", newsData.imgURL)
    mainHeadLine.innerHTML = newsData.title;
    headLineDescription.innerHTML = newsData.description;
  
  readMoreA.innerHTML="Read More";
  readMoreA.setAttribute("href", newsData.newsURL)
        singleHeadlineContainer.appendChild(headlineImageContainer);
            headlineImageContainer.appendChild(headLineImage);
        singleHeadlineContainer.appendChild(headLineDataContainer);
            headLineDataContainer.appendChild(mainHeadLine);
            headLineDataContainer.appendChild(headLineDescription);
            headLineDataContainer.appendChild(readMoreDiv);
                readMoreDiv.appendChild(readMoreA);
    
    return singleHeadlineContainer;
  }
  
  export {createHeadlinesPage};