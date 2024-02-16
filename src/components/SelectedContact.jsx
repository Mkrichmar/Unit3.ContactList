import { useState, useEffect } from "react";

function SelectedContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null)
  console.log(contact);
  useEffect(() => {
    async function fetchSelectedContact() {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
          console.log("result: " , result)
          setContact(result);
        } catch (error){
          console.error(error);
        }  
    }
    fetchSelectedContact();
}, []);

  return ( 
    <>
    { contact &&
      <div> 
      <h1>{contact.name} </h1>
      <h3>username: {contact.username} </h3>
      <h3>Contact Email: {contact.email} </h3>
      <h3>Phone: {contact.phone}</h3> 
      <h3>Website: {contact.website}</h3>
      <ul>Address
        <li>Street: {contact.address.street}</li>
        <li>Suite: {contact.address.suite}</li>
        <li>City: {contact.address.city}</li>
        <li>Zipcode: {contact.address.zipcode}</li>
      </ul> 
      <ul>Company
        <li>Name: {contact.company.name}</li>
        <li>catchphrase: {contact.company.catchPhrase}</li>
        <li>BS: {contact.company.bs}</li>
      </ul> 
      </div>
      }
    </>
  )
}

export default SelectedContact;
