import { useState } from "react";

import Input from './Input';

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
      <Input
        type="text"
        placeholder="First name"
        name="name"
        value={firstName}
        changeName={(value) => setFirstName(value)}
      />

      <Input
        type="text"
        placeholder="Last name"
        name="surname"
        value={lastName}
        changeName={(value) => setLastName(value)}
      />

      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        changeName={(value) => setEmail(value)}
      />

      <button
        type="submit"
        disabled={!firstName || !lastName || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)}
        onClick={formHandler}
      >
        Save contact
      </button>
  </form>
  );
};

export default Form;
