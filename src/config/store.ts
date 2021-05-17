import React from 'react';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, Store } from '@reduxjs/toolkit';
import { INewsReducer, newsReducer } from '../pages/backoffice/news.store';
    
export interface IStore {
    newsReducer: INewsReducer;
}

const shouldReadPreviousStoreState=true;

const saveStore = (reducers: IStore) => {
    localStorage.setItem('store', JSON.stringify(reducers));
}

const retrieveStore = (): IStore | undefined => {
    try {
        const previousStoreState = localStorage.getItem('store');

        if(previousStoreState) {
            const parsedState = JSON.parse(previousStoreState);
            return parsedState;
        }
    }catch{

    }
    return undefined;
}

const getStore = () => {
    const logger = createLogger({collapsed: true});

    const reducers = combineReducers({
        newsReducer
    });

    const store: Store  = createStore(reducers, shouldReadPreviousStoreState ? retrieveStore():{}, applyMiddleware(logger));

    store.subscribe(()=> {
        saveStore(store.getState());
    })

    return store;
}

export default getStore();