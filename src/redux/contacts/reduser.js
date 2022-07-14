import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const init = {
  items: [],
};
export const reducer = createReducer(init, {
  [addContact]: (state, { payload }) => ({
    items: [...state.items, payload],
  }),

  [deleteContact]: (state, { payload }) => ({
    items: state.items.filter(contact => contact.id !== payload),
  }),
});
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
