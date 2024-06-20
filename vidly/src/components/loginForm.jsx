import React, { Component } from 'react';
class LoginForm extends Component {
  handelSubmit=(e)=>{
  e.preventDefault();
  }
    render() { 
        return <div>
            <h1>login</h1>
         <form onSubmit={this.handelSubmit}>
                <div className="form-group"><label htmlFor="username">username</label>
                <input id="username"type="text" className="form-control" />
            </div>
                <div className="form-group"><label htmlFor="password">password</label>
                <input id="password" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">login</button>
         </form>

            
        </div>
    }
}
 
export default LoginForm;