//NPM modules
import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//components
import PageTitle from "../components/PageTitle"
import UserForm from "../components/UserForm"
//actions
import { addNewUser } from "../redux/modules/user/actions/UserActions"


function  UserNewContainer (props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <PageTitle title={"Criar Usuário"}/>
                </div>
            </div>
            <UserForm addNewUser={props.addNewUser}/>
        </div>
    )
}

export default connect(undefined, {addNewUser}) (UserNewContainer);
