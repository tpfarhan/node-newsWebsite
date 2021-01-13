function createMainNews(newsObject){

    var singleNews = document.createElement("div"),
        imgContainer = document.createElement("div"),
        newsImg = document.createElement("img"),
        newsMeta = document.createElement("div"),
        newsDate =document.createElement("div"),
        newsCategory = document.createElement("div"),
        newsHeading = document.createElement("div"),
        newsContent = document.createElement("div"),
        readMoreDiv = document.createElement("div"),
        readMore =document.createElement("a"),
        newsDataContainer = document.createElement("div"),
        divider = document.createElement("div")  
        
    singleNews.classList.add("single-news");
    imgContainer.classList.add("news-imgContainer");
    newsMeta.classList.add("news-meta");
    newsDate.classList.add("date");
    newsCategory.classList.add("category");
    newsHeading.classList.add("news-heading");
    newsContent.classList.add("news-content");
    readMoreDiv.classList.add("readMoreDiv");
    readMore.classList.add("read-more");
    newsDataContainer.classList.add("newsDataContainer")
    divider.classList.add("divider");

    var month = newsObject.date.toLocaleString('default', { month: 'short' });
    var pubDay = `${month} ${newsObject.date.getDate()}, ${newsObject.date.getFullYear()} `;
    newsImg.setAttribute("src", newsObject.imgURL)
    newsDate.innerHTML = pubDay;
    newsCategory.innerHTML = newsObject.source;
    newsHeading.innerHTML = newsObject.title;
    newsContent.innerHTML = newsObject.description;
    readMore.innerHTML = "Read More";
    readMore.setAttribute("href", newsObject.newsURL)
            
    singleNews.appendChild(imgContainer);
        imgContainer.appendChild(newsImg);
    singleNews.appendChild(newsDataContainer)
        newsDataContainer.appendChild(newsMeta);
            newsMeta.appendChild(newsDate);
            newsMeta.appendChild(divider);
            newsMeta.appendChild(newsCategory);
        newsDataContainer.appendChild(newsHeading);
        newsDataContainer.appendChild(newsContent);
        newsDataContainer.appendChild(readMore)

    return singleNews;
}

export { createMainNews }