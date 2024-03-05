const checkvalidation =(email,password,name)=>{
    

    //eslint-disable-next-line
const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

//eslint-disable-next-line

const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
// const isNameValid = /([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

if(! isemailvalid)return "Please Enter Valid Id";
if(! ispasswordvalid)return"Password is not valid";
// if(! isNameValid)return" Name is not valid";


return null;

}

export default checkvalidation;