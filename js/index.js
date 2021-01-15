import News from "./models/newsAPI"
import {createMainNews} from "./utils/mainNewsContent"
import {createImage} from "./utils/imageGenerator"
import {createHeadlinesPage} from "./utils/headlineGenerator"
import {createAllNews} from "./utils/allNewsGenerator"
var navigation = document.getElementById("navigation"),
    close= document.getElementById("close"),
    menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay"),
    newsContainer =document.getElementById("news-container"),
    imgBtn = document.getElementById("imgButton"),
    loader = document.getElementById("loader");

var headLineContainer = document.getElementById("headlines-container");
var allImgContainer = document.getElementById("all-img-container");
var newsContentContainer = document.getElementById("news-content-container");

var fullNav = window.matchMedia("(min-width:1025px")
window.addEventListener("resize",()=>{
    if(fullNav.matches){
        fullOverlay.classList.add("fadeout")
        navigation.style.width = "100%";
        setTimeout(() => {
            fullOverlay.style.display="none";
        }, 1000);
    }
    else{
        navigation.style.width = "0";
    }
})


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

if(newsContainer!==null){
    loader.classList.remove("hidden")
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
    .then(()=>{
        loader.classList.add("hidden")
    })
    .catch((error) => {
        console.log(error);
      });
    }
    
if(headLineContainer!==null){
    loader.classList.remove("hidden")
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
    .then(()=>{
        loader.classList.add("hidden")
    })
    .catch((error) => {
        console.log(error);
      });
    }

if(newsContentContainer!==null){
    loader.classList.remove("hidden")
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
        .then(()=>{
            loader.classList.add("hidden")
        })
        .catch((error) => {
            console.log(error);
          });
        }
        
if(allImgContainer!==null){
    loader.classList.remove("hidden")
    setTimeout(() => {
        for( var i = 0; i< 6 ;i++){
            allImgContainer.appendChild(createImage(i))
                loader.classList.add("hidden")
            } 
    }, 4000); 

        imgBtn.addEventListener("click",()=>{
            for( var i = 0; i< 6 ;i++){
                allImgContainer.appendChild(createImage())
                }
        })
    }