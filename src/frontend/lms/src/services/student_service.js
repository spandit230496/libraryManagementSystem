import { myaxios } from "./helper";


export const addStudent=(user)=>{

    return myaxios.post('/student/add',user).then((res)=>res.data())

}


