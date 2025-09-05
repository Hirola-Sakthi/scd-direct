// import React, { useState } from "react";

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phonenumber: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = "Name is required";
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!formData.phonenumber.trim()) {
//       errors.phonenumber = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phonenumber)) {
//       errors.phonenumber = "Phone number is invalid";
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length === 0) {
//       try {
//         console.log("connect php")
//         const response = await fetch(
//           "https://scddirect.com.au/contact.php",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//           }
//         );

//         console.log("response", response);
//         const data = await response.json();
//         console.log("data", data);

//         if (response.ok) {
//           if (data.status === "success") {
//             window.location.href =
//               "https://scddirect.com.au/thankyou.html";
//           } else {
//             console.error("Error:", data.message);
//             setModalMessage(
//               data.message || "An error occurred. Please try again."
//             );
//           }
//         } else {
//           console.error("Error:", data.message);
//           setModalMessage(
//             data.message || "An error occurred. Please try again."
//           );
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setModalMessage("An error occurred. Please try again later.");
//       }
//     } else {
//       setErrors(formErrors);
//       setModalMessage("Please correct the errors in the form.");
//     }
//     setIsLoading(false);
//     setShowModal(true);
//   };

//   return (
//     <>
//       <div className="contact-us-form-parent">
//         <div className="contact-us-form-subparent">
//           <div className="container">
//             <div className="form-heading">
//               <h1>Get in Touch – We're Here to Help</h1>
//             </div>
//             <div className="contact-form">
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <label className="label" htmlFor="name">
//                           Name *
//                         </label>
//                         <input
//                           className={`form-input`}
//                           type="text"
//                           name="name"
//                           id="name"
//                           placeholder="Enter Name"
//                           required
//                           value={formData.name}
//                           onChange={handleInputChange}
//                         />
//                         {errors.name && (
//                           <p className="error text-danger">{errors.name}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <label className="label" htmlFor="email">
//                           Email Address *
//                         </label>
//                         <input
//                           className={`form-input`}
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="Enter Email"
//                           required
//                           value={formData.email}
//                           onChange={handleInputChange}
//                         />
//                         {errors.email && (
//                           <p className="error text-danger">{errors.email}</p>
//                         )}
//                       </div>
//                       <div className="col-md-6">
//                         <label className="label" htmlFor="phonenumber">
//                           contact number *
//                         </label>
//                         <input
//                           className={`form-input`}
//                           type="tel"
//                           name="phonenumber"
//                           id="phonenumber"
//                           placeholder="Enter Phone Number"
//                           required
//                           value={formData.phonenumber}
//                           onChange={handleInputChange}
//                         />
//                         {errors.phonenumber && (
//                           <p className="error text-danger">
//                             {errors.phonenumber}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="col-md-12">
//                       <label className="label" htmlFor="message">
//                         Message
//                       </label>
//                       <textarea
//                         name="message"
//                         className={`form-input`}
//                         id="message"
//                         placeholder="How can we help?"
//                         rows="10"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="submit-button-parent">
//                     <button
//                           type="submit"
//                           disabled={isLoading}
//                           className={"submit-button"}
//                         >
//                           {isLoading ? (
//                             <div className="spinner">Submitting...</div>
//                           ) : (
//                             "Send Message"
//                           )}
//                         </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUsForm;

import React, { useState } from "react";
import axios from "axios";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phonenumber.trim()) {
      errors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      errors.phonenumber = "Phone number is invalid";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://scddirect.com.au/contact.php",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response)

        if (response.status === 200) {
          window.location.href = "https://scddirect.com.au/thankyou.html";
          console.log("response", response);
        } else {
          setModalMessage(
            response.data.message || "An error occurred. Please try again."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setModalMessage("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      setModalMessage("Please correct the errors in the form.");
    }
    setIsLoading(false);
    setShowModal(true);
  };

  return (
    <>
      <div className="contact-us-form-parent">
        <div className="contact-us-form-subparent">
          <div className="container">
            <div className="form-heading">
              <h1>Get in Touch – We're Here to Help</h1>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="label" htmlFor="name">
                          Name *
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <p className="error text-danger">{errors.name}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="label" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <p className="error text-danger">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="phonenumber">
                          Contact Number *
                        </label>
                        <input
                          className="form-input"
                          type="tel"
                          name="phonenumber"
                          id="phonenumber"
                          placeholder="Enter Phone Number"
                          required
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                        />
                        {errors.phonenumber && (
                          <p className="error text-danger">
                            {errors.phonenumber}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <label className="label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className={`form-input`}
                        id="message"
                        placeholder="How can we help?"
                        rows="10"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-button-parent">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="submit-button"
                    >
                      {isLoading ? (
                        <div className="spinner">Submitting...</div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
