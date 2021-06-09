import { New } from "../../common/interfaces/news.interface";
import API from "../../config/server";


export const NewsApi = {
    endpoints: {
        FETCH_NEWS: "/noticias",
        ADD_NEW: "/noticias",
        UPDATE_NEW: "/noticias/:id",
        DELETE_NEW: "/noticias/:id"
    },
    methods: {
        getNews: () => {
            return API.get(NewsApi.endpoints.FETCH_NEWS);
        },
        addNew: (not: New) => {
            return API.post(NewsApi.endpoints.ADD_NEW, not);
        },
        updateNew: (id: string, not: New) => {
            return API.put(NewsApi.endpoints.UPDATE_NEW.replace(":id",id), not);
        },
        deleteNew: (id: string) => {
            return API.delete(NewsApi.endpoints.DELETE_NEW.replace(":id",id));
        }
    }
}