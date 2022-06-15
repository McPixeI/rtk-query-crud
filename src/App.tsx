import React from "react";
import {
  useAddContactMutation,
  useGetContactQuery,
  useGetContactsQuery,
} from "./features/contacts/contactsApi";

function App() {
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetContactsQuery();
  return (
    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <h2>Oopsie</h2>}
      {isSuccess && (
        <>
          {data?.map((contact) => (
            <>
              <p>{contact.name}</p>
              <ContactDetail id={contact.id} />
            </>
          ))}
        </>
      )}
      <div>
        <AddContact />
      </div>
    </div>
  );
}

export const ContactDetail = ({ id }: { id: string }) => {
  const { data } = useGetContactQuery(id);
  return <pre>data: {JSON.stringify(data, undefined, 2)}</pre>;
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const contact = {
    id: "4",
    name: "yisus",
    email: "yisus@gmail.com",
  };

  const addHandler = async () => {
    await addContact(contact);
  };

  return (
    <>
      <button onClick={addHandler}>Add new contact</button>
    </>
  );
};

export default App;
