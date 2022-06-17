/*
import {combineReducers,cr} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import news from '../reducers/news';
import user from '../reducers/user';

const sotre =configureStore(
    combineReducers({news, user})
);

export default sotre;
*/

import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store