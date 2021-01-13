import News from "./models/newsAPI"
import {createMainNews} from "./utils/mainNewsContent"
import {createImage} from "./utils/imageGenerator"
import {createHeadlinesPage} from "./utils/headlineGenerator"
import {createAllNews} from "./utils/allNewsGenerator"
var navigation = document.getElementById("navigation"),
    navigationFull = document.getElementById("navigation-full"),
    close= document.getElementById("close"),
    menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay"),
    newsContainer =document.getElementById("news-container")


var headLineContainer = document.getElementById("headlines-container");
var allImgContainer = document.getElementById("all-img-container");
var newsContentContainer = document.getElementById("news-content-container");
/*if(window.matchMedia("(min-width: 1025px)"))
{
    navigationFull.classList.remove("hidden")
    navigation.classList.add("hidden")
}
if(window.matchMedia("(max-width: 1024px)")){
    navigationFull.classList.add("hidden");
    navigation.classList.remove("hidden");
}*/
menuBtn.addEventListener("click",() =>{
    navigation.style.width = "15em";
    fullOverlay.style.display="block";
    fullOverlay.classList.remove("fadeout")
    fullOverlay.classList.add("fadein")
});
close.addEventListener("click",()=>{
    navigation.style.width = "0";
    fullOverlay.classList.add("fadeout")
    setTimeout(() => {
        fullOverlay.style.display="none";
    }, 1000);
})


fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
})
    .then((response) =>{
        return response.json();
    })
    .then((jsonResponse) =>{
        if(jsonResponse.articles){
            for(var i = 0; i < 6 ; i++){
                var newsData = new News(jsonResponse.articles[i]);
                newsContainer.appendChild(createMainNews(newsData));   
            }
        }
    })
    .then((jsonResponse) =>{
        if(jsonResponse.articles){
            for(var i = 0; i < 2 ; i++){
                var newsData = new News(jsonResponse.articles[i]);
                headLineContainer.appendChild(createHeadlinesPage(newsData))
            }
        }
    })
    .catch((error) => {
        console.log(error);
      });


fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
})
    .then((response) =>{
        return response.json(); 
    })
    .then((jsonResponse) =>{
        if(jsonResponse.articles){
            for(var i = 0; i < 2 ; i++){
                var newsData = new News(jsonResponse.articles[i]);
                headLineContainer.appendChild(createHeadlinesPage(newsData))
            }
        }
    })
    .catch((error) => {
        console.log(error);
      });


      fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
        method: "GET"
    })
        .then((response) =>{ 
            return response.json();
        })
        .then((jsonResponse) =>{
            if(jsonResponse.articles){
                for(var i = 0; i < 6 ; i++){
                    var newsData = new News(jsonResponse.articles[i]);

                    newsContentContainer.appendChild(createAllNews(newsData))
                }
            }
        })
        .catch((error) => {
            console.log(error);
          });

      for( var i = 0; i< 12 ;i++){
        allImgContainer.appendChild(createImage())
        }
