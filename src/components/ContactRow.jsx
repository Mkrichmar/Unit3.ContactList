
// import {contacts} from "./ContactList";
// const [contacts, setContacts] = useState(dummyContacts)

function ContactRow({contact , setSelectedContactId}) {
    // console.log("contact in contactrow: ", contact);
    return (
        <tr onClick={() => setSelectedContactId(contact.id)}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
      );
}

export default ContactRow;