function Registration(){
    return(
    <div class="register-container">
      <h2>Register to Get Started!</h2>
      <form>
      <label for="fullName">Full Name:</label>
      <input type="text" placeholder="Enter Full Name" id="fullName" name="fullName"></input>
  
      <label for="email">Email:</label>
      <input type="email" placeholder="Email" id="email" name="email"></input>

      <label for="password">Password:</label>
      <input type="password" placeholder="Enter new Password" id="password" name="password"></input>
 
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" placeholder=" Confirm your password" id="confirmPassword" name="confirmPassword"></input>
  
      <button type="submit">Sign Up</button>
    </form>
  </div>
);
}
export default Registration;