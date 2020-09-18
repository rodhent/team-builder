import React from "react";
import "../App.css";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <h2>Add a New Team Member</h2>
        <button
          disabled={
            !values.username || !values.email || !values.role ? true : false
          }
        >
          Submit
        </button>
      </div>

      <div className="inputs">
        <label>
          Username:&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            placeholder="type username"
            maxLength="20"
            type="text"
          />
        </label>

        <label>
          Email:&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="enter email"
            maxLength="30"
            type="email"
          />
        </label>

        <label>
          Role:&nbsp;
          <select onChange={onChange} value={values.role} name="role">
            <option value="">Select a role</option>
            <option value="Front-end">Front End Engineer</option>
            <option value="Back-end">Back End Engineer</option>
            <option value="UX">UX Designer</option>
            <option value="Full-stack">Full Stack Engineer</option>
          </select>
        </label>
      </div>
    </form>
  );
}
