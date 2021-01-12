class News{
    constructor(newsDataFromAPI){
        this.source = newsDataFromAPI.source.name;
        this.author = newsDataFromAPI.author;
        this.title = newsDataFromAPI.title;
        this.description = newsDataFromAPI.description;
        this.newsURL = newsDataFromAPI.url;
        this.imgURL = newsDataFromAPI.urlToImage;
        this.date = new Date(newsDataFromAPI.publishedAt);
        this.content = newsDataFromAPI.content;
    }
}
export default News;