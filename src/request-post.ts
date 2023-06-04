import axios from "axios";
import { RequestInterface } from "./interfaces/request.interface";

export const post = <T>(
    url: string,
    params?: any,
    props?: RequestInterface<T>,
    token?: string
) => {

    // console.log(token)
    if(props && props.onStart) props.onStart();

    axios.post<T>(
        url, 
        params,
        {
            // headers must below params
            headers: { Authorization: `Bearer ${token}` }
        }
    ).then(response => {
        if(props && props.onResponse) props.onResponse(response.data)
        // finish
        if(props && props.onFinish) props.onFinish();
    }).catch(error => {
        // error
        if(props && props.onError) props.onError(error);
    });
}
