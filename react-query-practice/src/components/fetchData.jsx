import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const dataPassed = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const FetchData = () => {
    const { data, isLoading, error } = useQuery('items', dataPassed);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const halfData = data ? data.slice(0, 4) : []; // Check if data is defined

    return (
        <React.Fragment>
            <h1>Contacts</h1>
            <hr />
            {halfData.map((e) => {
                return (
                    <div key={e}>
                        <ul>
                            <li>User id:{e.userId}</li>
                            <li>id:{e.id}</li>
                            <li>Tittle:{e.title}</li>
                            <li>Body:{e.body}</li>
                        </ul>
                        <hr />
                    </div>
                );
            })}


        </React.Fragment>
    );
}

export default FetchData;