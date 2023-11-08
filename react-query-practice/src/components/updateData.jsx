import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const UpdateData = () => {
    const newData = {
        "userId": 1,
        "id": 1,
        "title": "hello excepturi optio reprehenderit",
        "body": "hjye body"
    };
    const postId = 1;

    const updatedData = async (postId, newData) => {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, newData);
        return response.data;
    };

    const { mutate } = useMutation(
        () => updatedData(postId, newData),
        {
            onSuccess: () => {
                alert("Contact Updated successfully");
            },
            onError: () => {
                alert("Error occurred");
            }
        }
    );

    const updateDataHandler = () => {
        mutate();
    };

    return (
        <React.Fragment>
            <button onClick={updateDataHandler}>Update Data</button>
        </React.Fragment>
    );
};

export default UpdateData;
