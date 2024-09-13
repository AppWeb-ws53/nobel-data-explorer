import axios from "axios";

//https://api.nobelprize.org/v1/laureate.json?bornDate=1900

const http = axios.create({
    baseURL: 'https://api.nobelprize.org/v1',
});

export class LaureateApiService {

    getLaureates() {
        return http.get('/laureate.json?bornDate=1900');
    }
}