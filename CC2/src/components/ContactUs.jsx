import '../assets/ContactUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
function ContactUs ()
{
  return (
   <div class="container">
    <NavBar/>
    <h2>Contact Us</h2>
    <form >
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required></input>

      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required></input>

      <label for="message">Your Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Submit</button>
    </form>
    <Footer/>
  </div>
  );
}

 export default ContactUs;