function createAllNews(newsObject){
    var singleAllNewsContainer = document.createElement("div"),
        allNewsImgDiv = document.createElement("div"),
        allNewsImg = document.createElement("img"),
        allNewsMeta = document.createElement("div"),
        allNewsDate = document.createElement("div"),
        allNewsAuthor = document.createElement("div"),
        metaDivider = document.createElement("div"),
        allNewsHeadline = document.createElement("div")
    
        singleAllNewsContainer.classList.add("singleAllNewsContainer");
        allNewsImgDiv.classList.add("allNewsImgDiv");
        allNewsMeta.classList.add("allNewsMeta");
        allNewsDate.classList.add("allNewsDate");
        allNewsAuthor.classList.add("allNewsAuthor");
        metaDivider.classList.add("metaDivider");
        allNewsHeadline.classList.add("allNewsHeadline")
    
        var month = newsObject.date.toLocaleString('default', { month: 'short' });
        var pubDay = `${month} ${newsObject.date.getDate()}, ${newsObject.date.getFullYear()} `;
    
        allNewsImg.setAttribute("src", newsObject.imgURL)
        allNewsDate.innerHTML = pubDay;
        allNewsAuthor.innerHTML = newsObject.author;
        allNewsHeadline.innerHTML = newsObject.title;
        //readMore.setAttribute("href", newsObject.newsURL)
    
    singleAllNewsContainer.appendChild(allNewsImgDiv);
      allNewsImgDiv.appendChild(allNewsImg)
    singleAllNewsContainer.appendChild(allNewsMeta);
      allNewsMeta.appendChild(allNewsDate);
      allNewsMeta.appendChild(metaDivider);
      allNewsMeta.appendChild(allNewsAuthor);
    singleAllNewsContainer.appendChild(allNewsHeadline);
    
    return singleAllNewsContainer;
    }
    
    export {createAllNews};