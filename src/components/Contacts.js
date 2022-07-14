import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact } from '../redux/contacts/actions';
import { filterContacts } from '../redux/contacts/selectors';
import s from './Phonebook.module.css';
const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContacts);

  const contactDelete = id => dispatch(deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          <ContactItem
            name={name}
            deleteContact={contactDelete}
            id={id}
            number={number}
          />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
