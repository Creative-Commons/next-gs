import API_BASE_URL from "../../constants";
import axios from "axios";


export default function validateToken (token) {
    axios.post(API_BASE_URL + "/validate_token/",{},
        {
            headers: {
                "token": token
            }
        }
    ).then((response) => {
        //console.log(response)
        if (response.data.success === true){
            return true;
        }
    }).catch(function(error){
        console.log(error.message);
    });
    return true
}