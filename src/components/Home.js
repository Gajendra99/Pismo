import React,{useState} from 'react';
import '../App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Home = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <React.Fragment>
            <section>
                {
                    isLoggedIn? <h1>Welcome</h1> : <SignUp />
                }
            </section>
        </React.Fragment>
    )
}

export default Home;
