import React,{useState} from 'react';
import '../App.css';
import '../mediemScreen.css';
import {Link} from 'react-router-dom';

const SignIn = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password){
            alert('data submited');
            setPassword('');
            setUsername('');
        }
        else{
            alert('insert Data');
        }
    }

    return (
      <article>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h3 className='form-logo'>Pismo</h3>

                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />                
                <button type="submit" className='btn'>Log In</button>
                <p>Don't have an account? <Link className="link-text" to='/signup'>Sign Up!</Link></p>
                <p>Forgot Password? Click Here!</p>
            </form>
          </div>
      </article>  
    );
}

export default SignIn;
