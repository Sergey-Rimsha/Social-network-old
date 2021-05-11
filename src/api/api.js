import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
    }
}); 

let usersApi = {
    getProfile(userId) {
        return ( 
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getAuth() {
        return (            
            instance.get(`auth/me`)
        )
    },

    getUsersPage(carrentPage, pageSize) {
        return (
            instance.get(`users?page=${carrentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    delFollow(id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)    
        )
    },

    postFollow(id) {
        return (
            instance.post(`follow/${id}`)
                .then(response => response.data)
        )
    },

    putProfileStatus(status) {
        return (
            instance.put(`profile/status`, {status})
        )
    },
    
    getProfileStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }

}


export default usersApi;