import { useState } from "react";

const Form = ({addContact}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const formHandler = (e) => {
    e.preventDefault();

    const newContact = {
      name: firstName,
      surname: lastName,
      email,
    };

    addContact(newContact);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form action="/">
      <input
        type="text"
        placeholder="First name"
        name="name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        name="surname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        onClick={formHandler}
      >
        Save contact
      </button>
  </form>
  );
};

export default Form;
