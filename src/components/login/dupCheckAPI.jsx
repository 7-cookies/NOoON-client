import axios from 'axios'

export const dupCheckAPI = async(userid) =>{
    let return_val;
    await axios.post("https://www.noonsaram-server.shop/api/v1/user/login",{
        userid: userid,
    })
    .then((response)=>{
        return_val = response.data;
    })
    .catch(function (error){
        console.log(error);
        return_val = true;
    })
    return return_val
}

