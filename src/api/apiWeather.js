import axios from "axios";

const instance = axios.create({
    baseURL: "https://",
    // withCredentials: true,
    // method: 'GET',
    headers: {
        // "appid": "5c7a7637fd830e172ecaa79e42f14f10"
    }
}); 


export const weatherAPI = {
    key: '5c7a7637fd830e172ecaa79e42f14f10',

    getWeather() {
        return (            
            instance.get(`api.openweathermap.org/data/2.5/weather?id=630376&appid=${this.key}`)
        )
    }

}

