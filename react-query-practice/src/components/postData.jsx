import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const PostData = () => {
    const createItem = async (newData) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newData);
        return response.data;
    }

    const { mutate } = useMutation(
        (newData) => createItem(newData),
        {
            onSuccess: ()=>
            {
                alert("Contact Added succesfully");
            },
            onError:()=>
            {
                alert("Error occured");
            }
        }
    );

    const handlePostData = () => {
        const newData = {
            "userId": 1,
            "id": 101,
            "title": "sunta funta aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscbhjvbjhvjhvipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        mutate(newData);
    };

    return (
        <React.Fragment>
            <button onClick={handlePostData}>Post Data</button>
        </React.Fragment>
    );
}

export default PostData;
