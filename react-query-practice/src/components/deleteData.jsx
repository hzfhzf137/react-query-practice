import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const DeleteData=()=>
{
    const postId=1;
    const deletecontact=async(postId)=>
    {
        const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        return response.data;
    }

    const {mutate}=useMutation(deletecontact,{
        onSuccess:()=>
        {
            alert("sucessfully deleted");
        },
        onError:()=>
        {
            alert("failed to delete");
        }
    })

    const deleteContactHandler=()=>
    {
        mutate(postId);
    }

    return(
        <React.Fragment>
            <button onClick={deleteContactHandler}>delete</button>

        </React.Fragment>
    );
}

export default DeleteData;