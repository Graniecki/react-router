import { useState } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const [contacts, setContacts] = useState([]);
  const addContact = (newContact) => {
    setContacts(prevContact => [...prevContact, newContact]
      .sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div className="App">
      <Form addContact={addContact} />
      <Table contacts={contacts} />
    </div>
  );
}

export default App;
