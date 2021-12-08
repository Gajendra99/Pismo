import React,{useState} from 'react';
import '../App.css';
import '../mediemScreen.css';
import {Link} from 'react-router-dom';

const SignUp = () => {

    const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && name && email && mobile && password && password2)
        {   
            if(password == password2){
                alert('data submited');
                setPassword('');
                setUsername('');
                setName('');
                setEmail('');
                setMobile('');
                setPassword2('');
            }
            else{
                alert('Password Not Match!');
            }
        }
        else{
            alert('insert Data');
        }
    }

    return (
        <React.Fragment>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h3 className='form-logo'>Pismo</h3>

                <input 
                    type="text" 
                    placeholder="@Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    type="text" 
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type="email" 
                    placeholder="info@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="+91 1234567890"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />    

                <input 
                    type="password" 
                    placeholder="Re-enter Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />

                <button type="submit" className='btn'>Create Account</button>
                <p>Already have an account? <Link className="link-text" to='/signin'>Sign In!</Link></p>
            </form>
          </div>
      </React.Fragment>  
    )
}

export default SignUp;
