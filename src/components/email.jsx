// import React, {useState} from "react";
// const Contacts=()=>{
//     const [formState, setFormState]= useState({});

    
//     const SubmitHandle=()=>{
//         ev.preventDefault;
//         const config={
//             Username: 'recipeaday@yopmail.com',
//             Password: '8F019654C5C623964752DFB8048D0009A101',
//             Host: 'smtp.elasticemail.com',
//             Port: '2525',
//             // SecureToken: '97b88ed8-1840-4776-aec1-94daf13761bc',
//             To : 'abhishek19402@iiitd.ac.in',
//             From : formState.email,
//             Subject : "A Recipe A Day!!",
//             Body : '${formState.name} connected to email';
//         }
//         if(window.Email){
//             window.Email.send(config);

//         }
//     }
//     function s(){
//         <div>
            
//         </div>
//     }
//     // const changeHandler= (ev) ={
//     //     setFormState({...formState,[ev.target.name]: ev.target.value});
        
//     // };
//     // return(
//     //     <div>
//     //         <form className="flex flex-col "></form> 
//     //     </div>
//     // )
// }

import { send, init } from "emailjs-com";

const serviceId = "service_qw58usq";
const templateId = "template_8ru9brk";
const userID = "kp6PXRAhy_x3UQA9Q";


const sendEmail = (name,emailid)=>{
  init(userID);
  const toSend = {
    from_name: "A Recipe A Day",
    to_name: name,
    to_email: emailid,
    message: "Today's recipe for a day is Rajma Chawal",
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {sendEmail};