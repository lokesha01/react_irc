import '../assets/LoginPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
function LoginPage()
{
    return(
     <div>
        <NavBar/>
        <div class= "loginPage-container">
            <h1>Login</h1>
            <br/>
            <br/>

        <form>
        <input type="email" placeholder="Email" id="email" name="email"></input>
      <input type="password" placeholder="Password" id="password" name="password"></input>
      <Link to="/">
      <button type="submit" >Login</button>
      </Link>
      <br></br>
      <center><p>Don't have an account? <Link to='/Register'>Sign up</Link>  </p></center>
        </form>
        {/* <Link to="/">    Go to Home</Link> */}
        </div>
        <Footer/>
    </div>
    );

}
export default LoginPage;
