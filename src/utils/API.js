import axios from "axios";

// const BASE_URL = "https://joes-baseball-stats-api.herokuapp.com"
const BASE_URL = "http://localhost:8080"
const API = {
    login:function(userData){
        return axios.post(`${BASE_URL}/login`,userData,{withCredentials:true})
    },
    createUser:function(userData){
        return axios.post(`${BASE_URL}/userSignup`,userData,{withCredentials:true})
    },
    getUserbyId:function(id){
        return axios.get(`${BASE_URL}/api/players/${id}`)
    },
    createStudentPost:function(userData){
        return axios.post(`${BASE_URL}/posts`,userData,{withCredentials:true})
    },
    createTeacherPost:function(userData){
        return axios.post(`${BASE_URL}/signup/teacher`,userData,{withCredentials:true})
    },
<<<<<<< HEAD
    getSkillResult:function(){
        return axios.get(`${BASE_URL}/api/searchresult`)
    },
    saveUserSkills:function(userData){
        return axios.post(`${BASE_URL}/api/userskills`, userData)
=======

    getSkillResult:function(search){
        return axios.get(`${BASE_URL}/api/searchresult`, search)
>>>>>>> 3b9c3b123d3ef3ab5cb8724d777c37f048be4ff3
    },
=======
    readSessions:function(){
        return axios.get(`${BASE_URL}/readsessions`,{withCredentials:true})
    },
    logout:function(){
        return axios.get(`${BASE_URL}/logout`,{withCredentials:true})
    }


}
export default API


/*
getTeacherResult:function(search){
    return axios.get(`${BASE_URL}/api/searchresult`)
},
potsTeacherReview:function(id){
    return axios.post(`${BASE_URL}/api/review/`)
},
getTeacherReview:function(id){
    return axios.get(`${BASE_URL}/api/review/${id}`)
},
deleteTeacherReview:function(id){
    return axios.delete(`${BASE_URL}/api/review/${id}`, {withCredentials:true})
},
updatePlayerById:function(id,playerData) {
    return axios.put(`${BASE_URL}/api/players/${id}`,playerData, {withCredentials:true},)
},
*/