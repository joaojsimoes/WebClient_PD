import React from 'react';
import { New } from '../../common/interfaces/news.interface';

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

interface INewsReducer {
    news: New[],
    isLoading: boolean
}

const initialValues: INewsReducer = {
    news: [],
    isLoading: false
}

/*const NewsReducer = (draft: INewsReducer, actions: any) => {
    switch()
}, initialValues);*/