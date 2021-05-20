import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
    }
}); 


export let authAPI = {
    me() {
        return (            
            instance.get(`auth/me`)
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

export let usersAPI = {
    getUsersPage(carrentPage, pageSize) {
        return (
            instance.get(`users?page=${carrentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    }

}

export let profileAPI = {
    getProfile(userId) {
        return ( 
            instance.get(`profile/${userId}`)
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
    putSavePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export let followAPI = {
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
}
