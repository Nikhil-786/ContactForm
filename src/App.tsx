
import { useState } from "react";
import "./App.css";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const data = { firstName: "", lastName: "", email: "", message: "" };

  const [inputValue, setInputValue] = useState(data);
  const [errorValue, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    QueryType: "",
    conscent: "",
  });
  function handleData(e: React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement >) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    const errorValidation: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      QueryType: string;
      conscent: string;
    } = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      QueryType: "",
      conscent: "",
    };
    const queryType1 = e.currentTarget[3] as HTMLInputElement;
    const queryType2 = e.currentTarget[4] as HTMLInputElement;
    const consentCheckbox = e.currentTarget[6] as HTMLInputElement;
    if (!inputValue.firstName.trim()) {
      errorValidation.firstName = "This field is required";
    }
    if (!inputValue.lastName.trim()) {
      errorValidation.lastName = "This field is required";
    }
    if (!inputValue.email.trim()) {
      errorValidation.email = "This field is required";
    }

    if (!inputValue.message.trim()) {
      errorValidation.message = "This field is required";
    }
    if (queryType1.checked === false && queryType2.checked === false) {
      console.log("query type called");
      errorValidation.QueryType = "Please Select the query Type";
    }
    if (consentCheckbox.checked === false) {
      console.log("conscent called");
      errorValidation.conscent =
        "To submit this form, Please conscent to being contacted";
    }

    setError(errorValidation);

    if (
      inputValue.firstName &&
      inputValue.lastName &&
      inputValue.email &&
      inputValue.message &&
      (queryType1.value == "General Enquiry" ||
        queryType2.value == "Support Request") &&
        consentCheckbox.checked
    ) {
      toast.success("Thank for completing the form.We'll be in touch Soon!");
      consentCheckbox.checked = false;

      setInputValue(data);
    }
  }

  return (
    <>
      <div className="mainDiv">
        <div>
          <Toaster />
        </div>
        <h2 id="heading">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="firstDiv">
            <label htmlFor="First Name *" className="firstName">
              First Name*
            </label>
            <input
              type="text"
              className="inputDetails"
              name="firstName"
              value={inputValue.firstName}
              onChange={handleData}
            />
            {errorValue.firstName && (
              <span id="errorFn">{errorValue.firstName}</span>
            )}
            <label htmlFor="Last Name *" id="lname">
              Last Name*
            </label>

            <input
              type="text"
              className="inputDetails"
              name="lastName"
              value={inputValue.lastName}
              onChange={handleData}
            />
            {errorValue.lastName && (
              <span id="errorLn">{errorValue.lastName}</span>
            )}
            <label htmlFor="First Name *" className="email">
              Email Address*
            </label>
            <input
              type="text"
              name="email"
              className="enterEmail"
              value={inputValue.email}
              onChange={handleData}
            />
            {errorValue.email && (
              <span id="errorEmail">{errorValue.email}</span>
            )}
          </div>
          <br />
          <div className="secDiv">
            <label htmlFor="First Name *">Query Type*</label>
            <div className="radio1">
              <input type="radio" value="General Enquiry" name="radio1" />
              <label htmlFor="General Enquiry">General Enquiry</label>
            </div>
            <div className="radio2">
              <input
                type="radio"
                value="Support Request"
                id="radio1"
                name="radio1"
              />
              <label htmlFor="Support Request">Support Request</label>
            </div>
            {errorValue.QueryType && (
              <span id="queryType">{errorValue.QueryType}</span>
            )}
            <br />

            <label htmlFor="First Name *" id="message">
              Message*
            </label>
            <textarea
              name="message"
              id="textId"
              value={inputValue.message}
              onChange={handleData}
            ></textarea>

            <br />
            {errorValue.message && (
              <span id="errorEmail">{errorValue.message}</span>
            )}
          </div>
          <div className="thirdDiv">
            <input type="checkbox" value="conscent" />
            <h4>I Consent to being contacted by team *</h4>
          </div>
          {errorValue.conscent && (
            <label id="errorConscent">{errorValue.conscent}</label>
          )}

          <input type="submit" className="submitBTN" />
        </form>
      </div>
    </>
  );
}

export default App;
