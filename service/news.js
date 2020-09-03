import { articles_url, country_name, category, API_KEY } from "../config/rest_config";

export async function getArticles(category = "general") {
    try {
        let articles = await fetch(`${articles_url}?country=${country_name}&category=${category}&apiKey=${API_KEY}`);

        let result = await articles.json();
        articles = null;
        return result.articles;

    } catch (error) {
        throw error;
    }
}