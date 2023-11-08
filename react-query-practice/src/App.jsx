import React from 'react'
import FetchData from './components/fetchData';
import {QueryClient , QueryClientProvider} from "react-query";

function App() {
  const queryClient = new QueryClient(); // Create a QueryClient instance

  return(
    <QueryClientProvider client={queryClient}>
    <React.Fragment>
      <FetchData/>
    </React.Fragment>
    </QueryClientProvider>
  );
}

export default App
