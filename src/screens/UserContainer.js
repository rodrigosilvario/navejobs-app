//NPM modules
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//components
import PageTitle from "../components/PageTitle"
import UserTable from "../components/UserTable"


function  UserContainer (props) {
    return (
        <div>
            
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-6 d-flex justify-content-start">
                        <PageTitle title={"Usuários"}/>
                    </div>

                    <div className="col-6 d-flex justify-content-end">
                        <Link to="/user/new">
                            <button type="button" className="btn nave-botao">
                                <img src="./img/plus-solid.svg" width="20px" className="img-fluid mr-2" alt="Plus Icon"/> <strong>CRIAR</strong>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <UserTable users={props.users}/>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

const mapStateToProps = store => ({
    users: store.UserReducer.users
  })
  
export default connect(mapStateToProps) (UserContainer);