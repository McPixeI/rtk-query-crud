import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => "contacts",
    }),
    getContact: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactQuery } = contactsApi;
