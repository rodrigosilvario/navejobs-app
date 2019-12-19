//NPM modules
import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//components
import PageTitle from "../components/PageTitle"
import UserForm from "../components/UserForm"
//actions
import { editUser } from "../redux/modules/user/actions/UserActions"


function  UserEditContainer (props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <PageTitle title={"Editar Usuário"}/>
                </div>
            </div>
            <UserForm operationUser={props.editUser} user={props.user} idUser={props.match.params.id}/>
        </div>
    )
}

const mapStateToProps = (store,props) => ({
    user: store.UserReducer.users[props.match.params.id]
    
  })

export default connect(mapStateToProps, {editUser}) (UserEditContainer);
