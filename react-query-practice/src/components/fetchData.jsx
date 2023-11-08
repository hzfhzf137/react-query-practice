import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const dataPassed = async () => {
    const response = await axios.get("https://randomuser.me/api");
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
    return (
        <React.Fragment>
            <h1>Contacts</h1>
            {data.results.map((e) => {
                return (
                    <div key={e}>
                        <hr />
                        <ul>
                            <li>Name:{e.name.first + " " + e.name.last}</li>
                            <li>Age:{e.dob.age}</li>
                            <li>Gender:{e.gender}</li>
                            <li>Phone:{e.phone}</li>
                        </ul>
                        <hr />
                    </div>
                );
            })}


        </React.Fragment>
    );
}

export default FetchData;