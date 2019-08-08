import React, {Component} from 'react'
import { connect } from 'react-redux'

class Users extends Component {
    render(){
        return(
            <div>
                <p>Users</p>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users);
  