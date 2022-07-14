import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

import s from './components/Phonebook.module.css';

function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
export default App;
