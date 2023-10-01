
import { fetchUsersStart } from './redux/users/ActionTypes'
import './App.css'
import { connect } from 'react-redux'

function App({usersList,fetchUsers}) {
  
  console.log("users",usersList)
  return (
    <> 
      <p>React - Redux - Saga - JsonPlaceholder</p>
      <button type="button" onClick={()=>fetchUsers()}>Get List </button>
      <ul>
      {usersList ?  usersList.map((eachUser) => <li key={eachUser.id}><p>{eachUser.name}</p></li>) : null}

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
