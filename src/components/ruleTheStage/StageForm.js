import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import upload from "../../assets/upload.svg";
import arrow from "../../assets/arrow.svg";

import emailjs from "@emailjs/browser";

const StageForm = ({ onSetModal }) => {
  // Inputs
  const [formData, setFormData] = useState({
    name: "",
    stageName: "",
    gender: "",
    nationality: "",
    date: "",
    instagram: "",
    phone: "",
    email: "",
    bio: "",
    idNumber: "",
    soundCloud: "",
    mix: "",
  });

  const form = useRef();

  const handelData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const ref = React.useRef();

  // Files
  const idUploadRef = React.useRef();
  const logoUploadRef = React.useRef();

  

  const handelForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w3a82lt",
        "template_7vm4ic8",
        form.current,
        "4wBIQRpZCD7iPXL0l"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("not error");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
    // e.target.rest()
    console.log(idUploadRef.current.files)
    console.log(logoUploadRef.current.files)
    onSetModal((prev) => !prev);
  };

  return (
    /*<form className="form_modal_global" onSubmit={handelForm} ref={form} encType="multipart/form-data">
      <AiFillCloseCircle className="close" onClick={() => onSetModal(false)} />
      <h3>RULE THE STAGE</h3>
      <div className="form">
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Name
        </label>
        <input
          required
          placeholder="Enter your Name"
          type="text"
          name="name"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Stage Name
        </label>
        <input
          required
          placeholder="Enter your Stage Name"
          type="text"
          name="stageName"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">Gender</label>
        <div className="w600_select">
          <select
            required
            name="gender"
            id="gender"
            placeholder="gender"
            className="mymodal_select"
            onChange={handelData}
          >
            <option value="male" selected disabled hidden>
              Choose your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="arrow">
            <img src={arrow} alt="/" />
          </p>
        </div>
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Nationality
        </label>
        <input
          required
          placeholder="Enter your Nationality"
          type="text"
          name="nationality"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Date of birth (DD/MM/YYYY)
        </label>
        <input
          required
          name="date"
          placeholder="Date of birth (DD/MM/YYYY)"
          type="text"
          ref={ref}
          // onChange={(e) => console.log(e.target.value)}
          onChange={handelData}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "text")}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Paste a link of your Instagram account
        </label>
        <input
          required
          placeholder="@Instagram Account"
          type="text"
          name="instagram"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Phone Number
        </label>
        <input
          required
          placeholder="Enter your Phone Number"
          type="number"
          name="phone"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Email
        </label>
        <input
          required
          placeholder="Enter your Email"
          type="email"
          name="email"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your Bio
        </label>
        <textarea
          required
          className="mymodal_text"
          placeholder="Enter your Bio"
          name="bio"
          onChange={handelData}
        ></textarea>
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Enter your ID Number
        </label>
        <input
          required
          placeholder="Enter your ID Number"
          type="number"
          name="idNumber"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Paste a link of your SoundCloud account
        </label>
        <input
          required
          placeholder="@SoundCloud Account"
          type="text"
          name="soundCloud"
          onChange={handelData}
        />
        <label className="w-[90%] mx-auto sm:hidden px-1 pt-3">
          Paste a link of your Mix{" "}
        </label>
        <input
          required
          placeholder="Paste a link of your Mix"
          type="text"
          name="mix"
          onChange={handelData}
        />
        <div className="upload_file">
          <input
            type={"file"}
            style={{ display: "none" }}
            ref={idUploadRef}
            name="profilePhoto"
          />
          <div
            className="abs"
            onClick={(_) => {
              idUploadRef.current.click();
            }}
          >
            <img src={upload} />
            <p>Upload a photo of your ID</p>
          </div>
          <input type="file"/>
        </div>
        <div className="upload_file">
          <input
            type={"file"}
            style={{ display: "none" }}
            ref={logoUploadRef}
            name="idPhoto"
          />
          <div
            className="abs"
            onClick={(_) => {
              logoUploadRef.current.click();
            }}
          >
            <img src={upload} />
            <p>Upload a Profile Photo</p>
          </div>
          <input type="file" />
        </div>
        <button className="sub-btn" type="submit">
          Submit
        </button>
      </div>
    </form>*/
    <form className="form_modal_global" >
      <h3>RULE THE STAGE</h3>
      <AiFillCloseCircle className="close" onClick={() => onSetModal(false)} />
    <iframe src="https://my.forms.app/ptitcomsa/vendor" height="100%" width="100%" frameborder="0" allowfullscreen loading='eager'></iframe>
    </form>
  );
};

export default StageForm;
