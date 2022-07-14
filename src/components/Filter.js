import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/contacts/actions';
import { getFilter } from '../redux/contacts/selectors';

import s from './Phonebook.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterContacts = evt => {
    dispatch(changeFilter(evt.currentTarget.value.toLowerCase()));
  };
  return (
    <div className={s.wrapFilter}>
      <label htmlFor="filter" className={s.find}>
        Find contacts by name
      </label>
      <input
        id="filter"
        value={filter}
        onChange={filterContacts}
        className={s.input}
      />
    </div>
  );
};

export default Filter;
