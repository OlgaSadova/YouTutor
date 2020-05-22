import axios from "axios";

const BASE_URL = "https://string2020.herokuapp.com"
const API = {
    login:function(userData){
        return axios.post(`${BASE_URL}/login`,userData,{withCredentials:true})
    },
    createUser:function(userData){
        return axios.post(`${BASE_URL}/userSignup`,userData,{withCredentials:true})
    },
    getUserbyId:function(id){
        return axios.get(`${BASE_URL}/api/players/${id}`)  // what is players?
    },
    createStudentPost:function(userData){
        return axios.post(`${BASE_URL}/posts`,userData,{withCredentials:true})
    },
    createTeacherPost:function(userData){
        return axios.post(`${BASE_URL}/signup/teacher`,userData,{withCredentials:true})
    },
    deleteTeacherCurrentPost:function(userData){
        return axios.delete(`${BASE_URL}/posts/deleteTeacher/currentuser`,{withCredentials:true})
    },
    deleteCurrentPost:function(userData){
        return axios.delete(`${BASE_URL}/posts/delete/currentuser`,{withCredentials:true})
    },
    deleteStudentSkills:function(){
        return axios.delete(`${BASE_URL}/api/userskillsdelete`,{withCredentials:true})
    },
    saveStudentSkills:function(userData){
        return axios.post(`${BASE_URL}/api/userskills`, userData,{withCredentials:true})
    },
    deleteTeacherSkills:function(){
        return axios.delete(`${BASE_URL}/api/techerskillsdelete`,{withCredentials:true})
    },
    saveTeacherSkills:function(userData){
        return axios.post(`${BASE_URL}/skillsteacher`, userData,{withCredentials:true})
    },
    getTeacherSkills:function(id){
        return axios.get(`${BASE_URL}/getTeacherSkills/${id}`, {withCredentials:true})
    },
    getSkillResult:function(search){
        return axios.get(`${BASE_URL}/api/searchresult`, search,{withCredentials:true})
        
    },
    readSessions:function(){
        return axios.get(`${BASE_URL}/readsessions`,{withCredentials:true})
    },
    logout:function(){
        return axios.get(`${BASE_URL}/logout`,{withCredentials:true})
    },
    getTeacherMatch: function(teacherData){
        return axios.post(`${BASE_URL}/api/matchteacherskills`, teacherData)
    },
    getStudentMatch: function(teacherData){
        return axios.post(`${BASE_URL}/api/matchstudentskills`, teacherData)
    }


}
export default API

