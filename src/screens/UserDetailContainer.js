//NPM modules
import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
//components

//actions

const initialUserState = {
    name : '',
    job : '',
    birthday : '',
    email : ''
}


function  UserDetailContainer (props) {

    const [user, setUser] = useState(initialUserState);

    useEffect(
        () => {
            setUser(props.user);
        },
        [props.user,user]
    );
    
    return (

        
        <div className="container mt-5">
            <div className="nave-detalhe-usuario">

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                        <h4>{user === undefined ? " " : user.name}</h4>
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                        <b className="font-weight-bold">Vaga: </b>{user === undefined ? " " : user.job}
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                    <b className="font-weight-bold">Data de Nascimento: </b>{user === undefined ? " " : user.birthday}
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                    <b className="font-weight-bold">Email: </b> {user === undefined ? " " : user.email}
                    </div>
                </div>

                <div className="row mx-3 py-3 d-flex justify-content-center justify-content-sm-start">
                    <div className="col-xs-12">
                        <Link to="/user">
                            <button type="button" className="btn nave-botao">VOLTAR</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (store,props) => ({
    user: store.UserReducer.users[props.match.params.id]
  })

export default connect(mapStateToProps) (UserDetailContainer);