function createImage(){
    var imgContainer = document.getElementById("all-img-container"),
        imgDiv =document.createElement("div"),
        singleImg = document.createElement("img");
  
        imgDiv.classList.add("allImgDiv");
        singleImg.classList.add("singleImg");
  
        singleImg.setAttribute("src", "https://picsum.photos/300/300?grayscale");
  
        imgDiv.appendChild(singleImg)
        return imgDiv;
  }
  export { createImage }