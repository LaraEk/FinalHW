import axios from "axios";

export default {
    //get all articles
    getArticles: () => {
        return axios.get("/api/articles")
    },
    // get article by id
    getArticleById: (id) => {
        return axios.get("/api/articles/" + id);
    },
    // delete article with this id
    deleteThisNephew: (id) => {
        return axios.delete("/api/articles/" + id);
    },
    // save an article to DB
    saveArticle: (data) => {
        return axios.post("/api/articles", articleData);
    }
};