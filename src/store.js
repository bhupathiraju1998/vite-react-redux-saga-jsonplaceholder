import { applyMiddleware, createStore } from "redux"
import UserReducer from "./redux/users/ActionReducer"
import createSagaMiddleware from "@redux-saga/core"
import userSaga from "./redux/users/ActionSaga"

const sagaMiddleware =  createSagaMiddleware()




const store = createStore(UserReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userSaga)



export default store