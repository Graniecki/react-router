import './Table.scss';

const Table = ({contacts}) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th className="table__cell">First name</th>
          <th className="table__cell">Last name</th>
          <th className="table__cell">Email</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {contacts.map((contact, index) => {
          return (
            <tr key={index}>
              <td className="table__cell">{contact.name}</td>
              <td className="table__cell">{contact.surname}</td>
              <td className="table__cell">{contact.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
