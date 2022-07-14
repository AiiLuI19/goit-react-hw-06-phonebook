import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('@CONTACT/ADD');
export const deleteContact = createAction('@CONTACT/DELETE');
export const changeFilter = createAction('@FILTER/CHANGE');
