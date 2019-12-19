//NPM modules
import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import "jquery-mask-plugin"
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 2000,
    draggable: false,
  })
//components

const initialUserState = {
    name : '',
    job : '',
    birthday : '',
    email : ''
}

const history = createBrowserHistory();

function  UserForm (props) {
    
    const [user, setUser] = useState(props.user === undefined ? initialUserState : props.user);
    const [idUser] = useState(props.idUser === undefined ? undefined : props.idUser);

    function handleSubmit(event) {
        event.preventDefault();
        props.operationUser(user,idUser);
        event.preventDefault();
        toast.success("Operação realizada com Sucesso!", {hideProgressBar: true, className: "nave-toast-success"})
        history.goBack();
        
    }

    useEffect(() => {
       $("#birthday").mask('00/00/0000', {placeholder: "Data de Nascimento: __/__/____"})
      });
    

    return (
       <form className="nave-formularioUsuario mt-4" onSubmit={handleSubmit}>
       <div className="container">
            <div className="form-row ">
                <div className="form-group col-12 mt-4 d-flex justify-content-center justify-content-sm-start">
                    <input
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={user.name}
                    onChange={event => setUser({...user,name: event.target.value})}
                    placeholder="Nome"
                    required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-12 d-flex justify-content-center justify-content-sm-start">
                    <input
                    type="text"
                    className="form-control"
                    name="job"
                    value={user.job}
                    onChange={event => setUser({...user,job: event.target.value})}
                    placeholder="Vaga"
                    required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-12 d-flex justify-content-center justify-content-sm-start">
                    <input
                    type="text"
                    className="form-control"
                    name="birthday"
                    id="birthday"
                    minLength="10"
                    maxLength="10"
                    value={user.birthday}
                    onChange={event => setUser({...user, birthday: event.target.value})}
                    placeholder="Data de Nascimento"
                    required
                    />
                </div>
            </div>

            <div className="form-row">
                 <div className="form-group col-12 d-flex justify-content-center justify-content-sm-start">
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={event => setUser({...user,email: event.target.value})}
                    placeholder="Email: email@email.com"
                    required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-12 mt-4 d-flex justify-content-between justify-content-sm-start">
                    <button type="submit" className="btn nave-botao mr-2">
                        ENVIAR
                    </button>
                    <Link to="/user">
                        <button type="button" className="btn nave-botao">
                            cancelar
                        </button>
                    </Link>
            </div>
        </div>

       </div> 
       </form>
    )
}


export default UserForm