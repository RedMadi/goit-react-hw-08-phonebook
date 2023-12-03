import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('oops.... something was wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    const { name, phone } = contacts;

    try {
      const response = await axios.post('/contacts', {
        name: name,
        number: phone,
      });
      toast.info(`${response.data.name} added to contacts.`);
      return response.data;
    } catch (error) {
      toast.error('oops.... something was wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       toast.info(`${response.name} removed from contacts.`);
//       return response.data;
//     } catch (error) {
//       toast.error('oops.... something was wrong');
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      toast.error('Oops... something went wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);
