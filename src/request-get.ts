import axios from "axios";
import { RequestInterface, RequestListInterface } from "./interfaces/request.interface";

export const get = <T>(url: string, props: RequestInterface<T>) => {
    // start
    if (props.onStart) props.onStart();
    
    // axios
    axios.get<T>(url).then(response => {
        // finish
        if(props.onFinish) props.onFinish();
        // data
        if(props.onResponse) props.onResponse(response.data);
    
    }).catch(error => {
        // error
        if(props.onError) props.onError(error);
    });
}