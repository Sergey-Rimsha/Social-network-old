import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e5cbdff8-bfc4-4357-a463-37ef77fb49d3"
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
                .then(response => response.data)
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
    }

}

export default usersApi;