import React, {Component} from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render(){
        return(
            <div>
                <p>User</p>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(User);
  