import React, {Component} from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

class Login extends Component {
    render(){
        return(
            <div>
                <LoginForm 
                msg="Hello World"
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  