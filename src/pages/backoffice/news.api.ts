import { New } from "../../common/interfaces/news.interface";
import API from "../../config/server";


export const NewsApi = {
    endpoints: {
        FETCH_NEWS: "",
        ADD_NEW: "",
        UPDATE_NEW: "",
        DELETE_NEW: ""
    },
    methods: {
        getNews: (): Promise<New[]> => {
            return API.get(NewsApi.endpoints.FETCH_NEWS);
        },
        addNew: (not: New) => {
            return API.post(NewsApi.endpoints.ADD_NEW, not);
        },
        updateNew: (id: string, not: New) => {
            return API.post(NewsApi.endpoints.ADD_NEW, {id, new: not});
        },
        deleteNew: (id: string) => {
            return API.delete(NewsApi.endpoints.DELETE_NEW);
        }
    }
}