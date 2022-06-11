import React from "react";
import "./App.css";
import { useGetContactsQuery } from "./features/contacts/contactsApi";

function App() {
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetContactsQuery();
  return (
    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <h2>{`Error: ${error}`}</h2>}
      {isSuccess && data?.map((x) => <p>{x.name}</p>)}
    </div>
  );
}

export default App;
