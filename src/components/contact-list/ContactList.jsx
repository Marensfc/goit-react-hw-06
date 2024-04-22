import css from "./ContactList.module.css";

import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
