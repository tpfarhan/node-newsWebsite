
function createMainNews(newsObject){

    var singleNews = document.createElement("div"),
        imgContainer = document.createElement("div"),
        newsImg = document.createElement("img"),
        newsMeta = document.createElement("div"),
        newsDate =document.createElement("div"),
        newsCategory = document.createElement("div"),
        newsHeading = document.createElement("div"),
        newsContent = document.createElement("div"),
        readMore = document.createElement("div")
                    
    singleNews.classList.add("single-news");
    imgContainer.classList.add("news-imgContainer");
    newsMeta.classList.add("news-meta");
    newsDate.classList.add("date");
    newsCategory.classList.add("category");
    newsHeading.classList.add("news-heading");
    newsContent.classList.add("news-content");
    readMore.classList.add("read-more");

    newsImg.setAttribute("src", newsObject.imgURL)
    newsDate.innerHTML = newsObject.date;
    newsCategory.innerHTML = newsObject.source;
    newsHeading.innerHTML = newsObject.title;
    newsContent.innerHTML = newsObject.description;
            
    singleNews.appendChild(imgContainer);
        imgContainer.appendChild(newsImg);
    singleNews.appendChild(newsMeta);
        newsMeta.appendChild(newsDate);
        newsMeta.appendChild(newsCategory);
    singleNews.appendChild(newsHeading);
    singleNews.appendChild(newsContent);
    singleNews.appendChild(readMore)

    return singleNews;

}

export { createMainNews }