import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import {persistor,store} from './store.js'
import { PersistGate } from 'redux-persist/integration/react'
import {Suspense,Fragment,lazy} from 'react';
const AppComponent = lazy(()=>import("./App.jsx"))

const LoadingScreen = () => <div>Loading...</div>;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<LoadingScreen />}>
        <AppComponent/>

        </Suspense>
      </PersistGate>
    </Provider>
  
  </React.StrictMode>,
)
