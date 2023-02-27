import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://63fcb564859df29986c2b998.mockapi.io/',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post(`/contacts`, contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//variant 2
// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const { data } = await instance.get('/contacts');
//   console.log(data);
//   //   return data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const { data } = await instance.post(`/contacts`, contact);
//     return data;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     const { data } = await instance.delete(`contacts/${contactId}`);
//     return data;
//   }
// );
