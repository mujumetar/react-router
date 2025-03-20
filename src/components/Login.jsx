import React from 'react'


export const Login = ({setUsername, setPassword, handleuser}) => {

  

  return (
    <div className='container my-5' style={{maxWidth: "500px"}}> 


  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={() => {handleuser}}>Submit</button>

    </div>
  )
}
