import axios from "axios"

export const signUp = (farmer) => {
    axios.post("http://localhost:8080/farmer", farmer, {
        header: { 'Content-Type': 'application/json' }
    }).then((response) => {
        return response.data;
    }).catch((err) => {
        console.log(err.response.data)
        return err.response.data;
    })

}