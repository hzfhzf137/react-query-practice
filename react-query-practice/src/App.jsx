import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import FetchData from './components/fetchData';
import PostData from './components/postData';
import DeleteData from './components/deleteData';
import UpdateData from './components/updateData';

function App() {
  const queryClient = new QueryClient(); // Create a QueryClient instance

  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <FetchData />
        <PostData/>
        <DeleteData/>
        <UpdateData/>
      </React.Fragment>
    </QueryClientProvider>
  );
}

export default App
