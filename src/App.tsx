import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="mainDiv">
        <h2 id="heading">Contact Us</h2>
        <form action="">
          <div className="firstDiv">
            <label htmlFor="First Name *" className="firstName">
              First Name*
            </label>

            <input type="text" className="inputDetails " />
              
            <label htmlFor="First Name *" id="lname">
              Last Name*
            </label>

            <input type="text" className="inputDetails" />

            <label htmlFor="First Name *" className="email">
              Email Address*
            </label>
            <input type="text" className="enterEmail" />
          </div>
          <br />
          <div className="secDiv">
            <label htmlFor="First Name *">Query Type*</label>
            <div className="radio1">
              <input type="radio" value="" />
              <label htmlFor="General Enquiry">General Enquiry</label>
            </div>
            <div className="radio2">
              <input type="radio" value="Support Request" id="radio1" />
              <label htmlFor="Support Request">Support Request</label>
            </div>
            <br />

            <label htmlFor="First Name *" id="message">
              Message*
            </label>
            <textarea name="" id="textId"></textarea>
            <br />
          </div>
          <div className="thirdDiv">
            <input type="checkbox" />
            <h4>I Consent to being contacted by team *</h4>
          </div>
          <input type="submit" className="submitBTN" />
        </form>
      </div>
    </>
  );
}

export default App;
