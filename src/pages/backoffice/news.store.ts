import React from 'react';
import { New } from '../../common/interfaces/news.interface';
import produce from "immer";

export const NewsActions = {
    types: {
        FETCH_NEWS: "FETCH_NEWS",
        FETCH_NEWS_SUCCESS: "FETCH_NEWS_SUCCESS",
        FETCH_NEWS_ERROR: "FETCH_NEWS_ERROR",
        ADD_NEW: "ADD_NEW",
        DELETE_NEW: "DELETE_NEW",
        UPDATE_NEW: "UPDATE_NEW"
    },
    creators: {
        fetchNews: () => ({
            type: NewsActions.types.FETCH_NEWS
        }),
        fetchNewsSuccess: (news: New[]) => ({
            type: NewsActions.types.FETCH_NEWS_SUCCESS,
            payload: { news: news}
        }),
        fetchNewsError: () => ({
            type: NewsActions.types.FETCH_NEWS_ERROR
        }),
        addNew: (not: New) => ({
            type: NewsActions.types.ADD_NEW,
            payload: { new: not}
        }),
        deleteNew: (id: string) => ({
            type: NewsActions.types.DELETE_NEW,
            payload: { id: id }
        }),
        updateNew: (id: string, not: New) => ({
            type: NewsActions.types.UPDATE_NEW,
            payload: { id: id, new: not}
        })
    }
};

export interface INewsReducer {
    news: New[],
    isLoading: boolean
}

const initialValues: INewsReducer = {
    news: [],
    isLoading: false
}

export const newsReducer = produce((draft: INewsReducer, action: any) => {
    switch(action.type){
        case NewsActions.types.FETCH_NEWS: 
            draft.isLoading = true;
        return;
        case NewsActions.types.FETCH_NEWS_SUCCESS: 
            draft.news = initialValues.news.concat(action.payload.news);
            draft.isLoading = false;
        return;
        case NewsActions.types.FETCH_NEWS_ERROR: 
            draft.isLoading = false;
        return;
        case NewsActions.types.ADD_NEW: 
            draft.news = [...draft.news, action.payload.new];
        return;
        case NewsActions.types.UPDATE_NEW: 
            const idx = draft.news.findIndex(not => not._id === action.payload.id);
            if(idx > -1){
                draft.news[idx] = action.payload.new;
            }
        return;
        case NewsActions.types.DELETE_NEW: 
            draft.news = draft.news.filter(not => not._id !== action.payload.id);
        return;
        default: return draft;
    }
}, initialValues);