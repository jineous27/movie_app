import axios from "axios";

// const api = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "",
//          api_key: "364e6dbed7580a285a3cea838db315f2",
//         language: "en-US"
//     }
// });
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8597e491ed6e80f0de12e349eb60ea6e",
        language: "en-US"
    }
});
//Movie와 관련된 API를 불러오는 걸 만든것 //
export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),

}

export const tvApi= {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),

}
export default api;