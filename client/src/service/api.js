import axios from "axios"
import { API_MSG, SERVICE_URLS } from "../constants/config"
import getAccessToken from "../common/getAccessToken";
import getType from "../common/getType"

const API_URL = "http://localhost:3000";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

const processResponse = (res) => {
    // status code 2XX.
    if(res?.status === 200){
        return {isSuccess: true, data: res.data};
    }
    return {
            isSuccess: false,
            msg: res?.msg,
            status: res?.status,
            code: res?.code
        }    
}

const processError = (error) => {
    if(error.response){
        // request reached to backend and error from backend side. Server responds with status code other than 2XX.
        console.log("Reponse Error", error.toJSON());
        return {
            isError: true,
            msg: API_MSG.responseError,
            code: error.response.status,
        }
    }
    else if(error.request){
        // request sent but no response from backend, can be because of connectivity issue b/w frontend and backend.
        console.log("Request Error", error.toJSON());
        return {
            isError: true,
            msg: API_MSG.requestError,
            code: ""
        }
    }
    else{
        // error from user or frontend side and data didn't reach to backend.
        console.log("Network Error", error.toJSON());
        return {
            isError: true,
            msg: API_MSG.networkError,
            code: ""
        }
    }
};

const applyChangeToConfig = (config) => {
    if(config.TYPE.params) {
        config.params = config.TYPE.params;
    }
    else if(config.TYPE.query) {
        config.url = config.url + "/" + config.TYPE.query;
    }
    return config;
};

const API = {}; 
/* API[key] = function() => API[userSignup] = function() => API.userSignup = function()
   =>    API: {
            userSignup: function(),
            ...,
            ...
        }
*/

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = async (inputBody , showUploadProgress, onDownloadProgress) => {
        try {
            let config = {
                method: value.method,
                url: value.route,
                data: value.method === "DELETE" ? {} : inputBody,
                responseType: value.responseType,
                headers: {
                    authorization: getAccessToken()
                },
                TYPE: getType(value, inputBody),
                onUploadProgress: (event) => {
                    if(showUploadProgress) {
                        let percentageCompleted = Math.round((event.loaded * 100) / event.total);
                        showUploadProgress(percentageCompleted);
                    }
                },
                onDownloadProgress: (event) => {
                    if(showUploadProgress) {
                        let percentageCompleted = Math.round((event.loaded * 100) / event.total);
                        onDownloadProgress(percentageCompleted);
                    }
                }
            };

            applyChangeToConfig(config);

            const res = await axiosInstance(config);
            return processResponse(res);    
        } 
        catch (error) {
            return processError(error);
        }

    }
}

export default API;