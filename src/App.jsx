import { deleteTitleStart, fetchUsersStart, postTitleStart, updateTitleStart } from "./redux/users/ActionTypes";
import "./App.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Trash2, Pencil } from "lucide-react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function App({ usersList, fetchUsers ,updateTitle,deleteTitle,postTitle}) {
  const [editName, setEditName] = useState({});
  const [deleteUser, setDeleteUser] = useState({});
  const [modalIsOpenEdit, setModalisOpenEdit] = useState(false);
  const [modalIsOpenDelete, setModalisOpenDelete] = useState(false);
  

  const callEditName = (name) => {
    setModalisOpenEdit(true);
    setEditName(name);
  };

  const callEditClosePopUp = (editedTitle) => {
    setModalisOpenEdit(false);
    updateTitle(editedTitle)
  }

  const callDeleteUser = (user) => {
    setModalisOpenDelete(true);
    setDeleteUser(user);
  };

  

  const deleteTitleClosePopUp = (deleteUser) => {
    setModalisOpenDelete(false)
    deleteTitle(deleteUser)
  }
 console.log("editname",usersList)
  return (
    <div >
      <p>React - Redux - Saga - JsonPlaceholder</p>
      <button type="button" onClick={() => fetchUsers()}>
        Get Titles from Json placeholder{" "}
      </button>
      <br/>
      <div className="add-title-cont">
      <button type="button" onClick={()=>postTitle("Hello how r u ? 😁")}>
        Add Title : Hello how r u ? 😁
      </button>
      </div>
      

      <ul>
        {usersList
          ? usersList.map((eachUser) => (
              <li className="main-container" key={eachUser.id}>
                <p className="paragraph">{eachUser.title}</p>
                <span
                  className="icon-style"
                  onClick={() => {
                    callEditName(eachUser);
                  }}
                >
                  <Pencil color="white" size={18} />
                </span>
                <ReactModal
                  style={{
                    overlay: {
                      backgroundColor: "#1a1a1a",
                    },
                    content: {
                      height: "200px",
                      width: "700px",
                    },
                  }}
                  isOpen={modalIsOpenEdit}
                  onRequestClose={() => setModalisOpenEdit(false)}
                >
                  <p className="edit-para">
                    Edit Title :
                    <span>
                      <input
                        onChange={(e) => setEditName((prevState) => ({...prevState,title:e.target.value}))}
                        value={editName.title}
                        className="edit-input"
                      />
                    </span>
                  </p>
                  <hr />
                  <div className="button-div">
                    <button
                      className="modal-button"
                      onClick={() => setModalisOpenEdit(false)}
                    >
                      Cancel
                    </button>
                    <button className="modal-button" onClick={()=>callEditClosePopUp(editName)} type="button">Submit</button>
                  </div>
                </ReactModal>
                <span
                  className="icon-style"
                  onClick={() => {
                    callDeleteUser(eachUser);
                  }}
                >
                  <Trash2 color="white" size={18} />
                </span>
                <ReactModal
                  style={{
                    overlay: {
                      backgroundColor: "#1a1a1a",
                    },
                    content: {
                      height: "200px",
                      width: "700px",
                    },
                  }}
                  isOpen={modalIsOpenDelete}
                  onRequestClose={() => setModalisOpenDelete(false)}
                >
                  <p className="edit-para">
                    Are you sure to delete Title : " {deleteUser.title} "
                  </p>
                  <hr />
                  <div className="button-div">
                    <button
                      className="modal-button"
                      onClick={() => setModalisOpenDelete(false)}
                    >
                      Cancel
                    </button>
                    <button className="modal-button" type="button" onClick={()=>deleteTitleClosePopUp(deleteUser)}>Delete</button>
                  </div>
                </ReactModal>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsersStart());
  },
  updateTitle:(editName)=>{
  dispatch(updateTitleStart(editName))
  },
  deleteTitle:(deleteUser)=>{
    dispatch(deleteTitleStart(deleteUser))
  },
  postTitle:(title)=>{
    dispatch(postTitleStart(title))
  }
});

const mapStateToProps = (state) => ({
  usersList: state.usersList,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
