import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=',
    // withCredentials: true,
    headers: {
        "API-KEY": "5c7a7637fd830e172ecaa79e42f14f10"
    }
}); 


export const weatherAPI = {
    getWeather() {
        return (            
            instance.get(`{Barysaw}&appid={5c7a7637fd830e172ecaa79e42f14f10}`)
        )
    }

}


// api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={5c7a7637fd830e172ecaa79e42f14f10}

// api.openweathermap.org/data/2.5/weather?q={Barysaw}&appid={5c7a7637fd830e172ecaa79e42f14f10}



// api key 9df7eb563b5893dca5de1564b982aebc

// SergeyRimsha

//  =Txs6WUHDWt.Cnj


    // {
    //     "id": 630376,
    //     "name": "Barysaw",
    //     "state": "",
    //     "country": "BY",
    //     "coord": {
    //         "lon": 28.50485,
    //         "lat": 54.231232
    //     }
    // },