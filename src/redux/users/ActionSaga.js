import {put,call,all,takeEvery,takeLatest, takeLeading} from 'redux-saga/effects'
import ActionConstants from './ActionConstants'
import { fetchUsersFailure, fetchUsersSuccess,clearUserMessages, updateTitleSuccess, updateTitleFailure, deleteTitleSuccess, deleteTitleFailure } from './ActionTypes'
import axios from 'axios'

export function* fetchUsersStartAsync(){
    try {
        const data = yield axios('https://jsonplaceholder.typicode.com/posts').then((res)=>res.data)
        console.log("data",data)
        yield put(fetchUsersSuccess(data))
        console.log("entered2")
        
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

export function* updateTitleStartAsync(action){
    try {
        const {title,id} = action.payload
        const data = yield axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,action.payload).then((res)=>res.data)
        console.log("data update successfull",data)
        yield put(updateTitleSuccess(data))
    } catch (error) {
        yield put(updateTitleFailure(error))
        
    }
}

export function* deleteTitleStartAsync(action){
    try {
        console.log("saga",action.payload)
        const{id} = action.payload
        yield axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>res.status)
        yield put(deleteTitleSuccess(id))
    } catch (error) {
        yield put(deleteTitleFailure(error))
    }
}

export function* clearMessagesStartAsync(){
    yield put(clearUserMessages())
}





export default function* userSaga () {
    yield takeLatest(ActionConstants.FETCH_USERS_START,fetchUsersStartAsync);
    yield takeLatest(ActionConstants.UPDATE_TITLE_START,updateTitleStartAsync);
    yield takeLatest(ActionConstants.DELETE_TITLE_START,deleteTitleStartAsync);
    yield takeLatest([ActionConstants.FETCH_USERS_SUCCESS,
        ActionConstants.FETCH_USERS_FAILURE,
        ActionConstants.UPDATE_TITLE_SUCCESS,
        ActionConstants.UPDATE_TITLE_FAILURE,
        ActionConstants.DELETE_TITLE_SUCCESS,
        ActionConstants.DELETE_TITLE_FAILURE,
    ],clearMessagesStartAsync);
}