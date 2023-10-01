
import { fetchUsersStart } from './redux/users/ActionTypes'
import './App.css'
import { connect } from 'react-redux'
import { useState,useEffect } from 'react'

function App({usersList,fetchUsers}) {

  
  return (
    <> 
      <p>React - Redux - Saga - JsonPlaceholder</p>
      <button type="button" onClick={()=>fetchUsers()}>Get Users </button>
      
      <ul>
      {usersList ?  usersList.map((eachUser) => 
      <li className='main-container' key={eachUser.id}>
        <p className='paragraph'>{eachUser.name}</p>
       
        </li>) : null}
      </ul>

      
      
    </>
  )
 
  
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers : () => {
    dispatch(fetchUsersStart())
  }
})

const mapStateToProps = (state) => ({
  usersList:state.usersList
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
