import React, { Component } from 'react'
import Usuarios from './usuarios'
import history from '../history'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            credenciales : { usuario : '', contrasena : ''},
            isLoggedIn : false
        }
    }

    login = event =>{

        console.log("USUARIO",this.state.credenciales.usuario)
        console.log("CONTRASENA",this.state.credenciales.contrasena)

        const usuario = Usuarios.find(x=> x.usuario.toString() === this.state.credenciales.usuario.toString())

        if(usuario){
            if(usuario.contrasena.toString() === this.state.credenciales.contrasena.toString()){
                console.log("HAS INICIADO SESIÓN")
                history.push('/dashboard')
                
            }
            else {
                console.log("USUARIO Y/O CONTRASEÑA INCORRECTA")
            }
        } 
        else {
            console.log("USUARIO Y/O CONTRASEÑA INCORRECTA")
        }

    }

    inputChanged = event =>{
        const cred = this.state.credenciales;
        cred[event.target.name] = event.target.value;
        this.setState({credenciales : cred})
    }

    render() {
        return(
            <div className="login">
                <h1>Inicio Sesión</h1>
                <label>Usuario</label>
                <input type="text" name = "usuario" value = {this.state.credenciales.usuario} onChange = {this.inputChanged}/>
                <br/>
                <label>Contraseña</label>
                <input type="password" name="contrasena" value = {this.state.credenciales.contrasena} onChange = {this.inputChanged} />
                <br/>
                <button type="button" onClick= {this.login}>Iniciar Sesión</button>
                <br/>
                
            </div>
        )
    }
    
}

export default Login