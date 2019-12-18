//NPM modules
import React from 'react'
import { Link } from 'react-router-dom'

function  HomeContainer (props) {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Nave Jobs</h1>
            </div>
        </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>Bem Vindo!</h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/user">
                        <button type="button" className="btn nave-botao">Consultar Usuários</button>
                    </Link>
                </div>
            </div>
        </div>
    )
  
}

export default HomeContainer