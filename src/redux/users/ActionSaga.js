import {put,call,all,takeEvery,takeLatest} from 'redux-saga/effects'
import ActionConstants from './ActionConstants'
import { fetchUsersFailure, fetchUsersSuccess,clearUserMessages } from './ActionTypes'
import axios from 'axios'

export function* fetchUsersStartAsync(){
    try {
        const data = yield axios('https://jsonplaceholder.typicode.com/users').then((res)=>res.data)
        console.log("data",data)
        yield put(fetchUsersSuccess(data))
        console.log("entered2")
        
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }

}

export function* clearMessagesStartAsync(){
    yield put(clearUserMessages())
}





export default function* userSaga () {
    yield takeLatest(ActionConstants.FETCH_USERS_START,fetchUsersStartAsync);
    yield takeLatest([ActionConstants.FETCH_USERS_SUCCESS,ActionConstants.FETCH_USERS_FAILURE],clearMessagesStartAsync);
}