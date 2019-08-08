import React, {Component} from 'react'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                email:'',
                password:'',
            }
        }
    }

    handleChangeUser = (e) => {
        const {user} = this.state
        user[e.target.name] = e.target.value 
        this.setState({
            user:user
        })
    }
    

    render(){
        const {email, password} = this.state.user
        return(
            <form className="login-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                value ={email}
                name="email"
                onChange={this.handleChangeUser}
                className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                value={password}
                name="password"
                onChange={this.handleChangeUser} 
                className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
    }
}
export default LoginForm  