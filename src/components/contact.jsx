
import React from "react";
import { useForm} from "react-hook-form";
import axios from "axios";

const Contact = ({ toggleDetails }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const onSubmit =(data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    reset();
  };


  const saveData = () => {
    const formData = {
      Firstname: document.getElementById("First").value,
      Lastname: document.getElementById("Last").value,
      number: document.getElementById("number").value,
      email: document.getElementById("email").value,
      link: document.getElementById("link").value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Data saved to local storage:", formData);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="title box">
        <p className="blueLine"></p>
        <h1 className="heading">Web Dev - Intern Recruitment Task</h1>
        <div className="line"></div>
        <div className="texts">
          <p className="accouunt">
            at37907@gmail.com <a href="#">Switch accounts</a>
          </p>
          <i className="fa-solid fa-cloud-arrow-up" onClick={()=>{
            saveData()
            alert("data saved")
          }}></i>
        </div>
        <div className="description">
          The name, email address, and photo associated with your Google Account
          will be recorded when you upload files and submit this form
        </div>
      </div>

      <div className="names box">
        <div className="subBox">
          <label htmlFor="First">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="First"
            {...register("Firstname", { required: "First Name is required" })}
          />
          {errors.Firstname && (
            <span className="error">{errors.Firstname.message}</span>
          )}
        </div>
      </div>

      <div className="lastname box">
        <div className="subBox">
          <label htmlFor="Last">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="Last"
            {...register("Lastname", { required: "Last Name is required" })}
          />
          {errors.Lastname && (
            <span className="error">{errors.Lastname.message}</span>
          )}
        </div>
      </div>

      <div className="phone box">
        <div className="subBox">
          <label htmlFor="number">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            id="number"
            {...register("number", { required: "Phone number is required" })}
          />
          {errors.number && (
            <span className="error">{errors.number.message}</span>
          )}
        </div>
      </div>
      
      <div className="email box">
        <div className="subBox">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
      </div>
      
      <div className="link box">
        <div className="subBox">
          <label htmlFor="link">Link</label>
          <input
            type="url"
            placeholder="Link"
            id="link"
            {...register("link", { required: "Link is required" })}
          />
          {errors.link && (
            <span className="error">{errors.link.message}</span>
          )}
        </div>
      </div>
      
      <div className="file box">
        <div className="subBox">
          <p>Upload a file</p>
          <label htmlFor="fileInput" className="uploadButton">
            <i className="fa-solid fa-upload"></i>
            <p>Add file</p>
          </label>
          <input
            type="file"
            id="fileInput"
            {...register("file", { required: "File upload is required" })}
            className="fileInput"
          />
          {errors.file && <span className="error">{errors.file.message}</span>}
        </div>
      </div>
      
      <div className="submit box">
        <div className="subBox">
          <div className="buttons">
            <button type="submit">Submit</button>
            <div className="formsoption">
            <p className="clear" onClick={() => window.location.reload()}>Clear form</p>
            <p className="clear" onClick={toggleDetails }>/Show form</p>
            </div>
          </div>
          <div className="para">
            Never submit passwords through Google Forms.
          </div>

          <div className="footer">
            <p className="paralast">
              This form was created inside omniversity. Report Abuse
            </p>
            <h1 className="headinglast">Google Forms</h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
