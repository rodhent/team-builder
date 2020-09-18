import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./Components/Form.js";
import TeamMember from "./Components/TeamMember";
import axios from "axios";

const initialTeamList = [
  {
    id: uuid(),
    username: "Lex Luthor",
    email: "lex@luthor.com",
    role: "Front End Engineer",
  },
];

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList });
};
const fakeAxiosPost = (url, { username, email, role }) => {
  const newTeamMember = { id: uuid(), username, email, role };
  return Promise.resolve({ status: 200, success: true, data: newTeamMember });
};

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const teamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!teamMember.username || !teamMember.email) {
      return;
    }

    fakeAxiosPost("fake.com", teamMember)
      .then((res) => {
        setTeamMembers([res.data, ...teamMembers]);
      })
      .catch((err) => {
        debugger;
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  useEffect(() => {
    fakeAxiosGet("fakeapi.com").then((res) => setTeamMembers(res.data));
    submitForm();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Team Builder App</h1>
      </header>
      <Form values={formValues} update={updateForm} submit={submitForm} />

      {teamMembers.map((member) => {
        return <TeamMember details={member} />;
      })}
    </div>
  );
}
