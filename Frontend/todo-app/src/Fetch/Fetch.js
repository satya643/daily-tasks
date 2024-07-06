import axios from "axios";

export const GetTodoData = ( ) =>{
    return axios.get(`http://localhost:8080/todo`, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}


export const PostTodoData = (payload) =>{
    return axios.post(`http://localhost:8080/todo/create`, payload, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const ToggleTodoData = (payload,id) =>{
    return axios.patch(`http://localhost:8080/todo/edit/${id}`, payload, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const DeleteTodoData = (id) =>{
    return axios.delete(`http://localhost:8080/todo/delete/${id}`, {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("UserToken")}`
        }
    })
}

export const GetTodoCompletedData = ( ) =>{
    return axios.get(`http://localhost:8080/todo?status=true`)
}

export const SignUpData = (payload) =>{
    return axios.post(`http://localhost:8080/users/signup`, payload)
}

export const LoginData = (payload) =>{
    return axios.post(`http://localhost:8080/users/login`, payload)
}