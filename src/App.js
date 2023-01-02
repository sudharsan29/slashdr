import './App.css';
import React,{useEffect, useState} from "react";
import Axios from 'axios';

 function App ()
{
       const [values,setvalues]=useState([]);    {/*initial the value at values,patient*/}
       const [patients,setpatients]=useState([]);
       useEffect(()=>{
       fetchresults();
       },[])

       const fetchresults=async()=>{ 
       const response=await Axios('https://jsonblob.com/api/jsonBlob/1055903745329872896'); {/*fetch the json file*/}{/*fetch the json file*/}
       const res = response.data;
       setvalues(res.result)    
       setpatients(res.patient_detail)
        }     
       return(
        
                <div className='App'>    {/*full css working*/}
                <div class="top">
                <div name="logo">
                <img src={require('./images/imagedr.png')}height ={50} width ={100}/>
                </div>
                   </div>
                
                
                  
                
                <div class="unorderlist">
                     <ul>   
                      <h1 >Mr SUDHARSAN K, 21</h1>
                      <li class="list">profile</li>
                      <li class="active">patient summary</li>
                      <li class="list">this visit</li>
                      <li class="list">prescription</li>
                      <li class="list">printing prescription</li>
                       </ul>  
                  </div>
                  <div class="head">
                  
      <div class="patient" >
      <div class="patientdetails"> <h1 > Patient  Details</h1></div>
          
          {
        patients && patients.map(patient =>{
                return(
                    <h4>{patient.content}</h4>
                      )
        })
      }
      </div> 
      <div class="full_body">
     
            <div class="year">
            {  values && values.map(value=>{
                 return(<>
                    <ul class="split"> {value.date.slice(3)}</ul>
                     </>)}
                   )}</div>

        
<div class="body">

        {  values && values.map(value=>{
               return(
                 <div class="outer">
                 <h1 class="doctor">visited:{value.doctor}</h1>
                 <h2 class="details">{value.date}</h2>
                 <h2 class="details">{value.prescription!=null ? <a href="#">prescription</a> : null} </h2>
                       {
                          value && value.summary.map(val =>{
                            return(
                               <>
                                <h5 class="content">{val.content}</h5>
                               </>
                                )}
                                )}
                                 </div>
                                )
      })    }
      </div>
      </div>
      </div>
      </div> // app div
      )}
export default App;