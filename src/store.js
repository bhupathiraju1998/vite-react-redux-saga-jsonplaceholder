import { applyMiddleware, compose, createStore } from "redux"
import UserReducer from "./redux/users/ActionReducer"
import createSagaMiddleware from "@redux-saga/core"
import userSaga from "./redux/users/ActionSaga"
import {persistStore} from 'redux-persist';

const sagaMiddleware =  createSagaMiddleware()



const store = createStore(UserReducer,applyMiddleware(sagaMiddleware))




sagaMiddleware.run(userSaga)

const persistor = persistStore(store);

export  {store,persistor}