import React from "react";
import './login.css'


export function Login(){

    return(

        <form
      action={''}
      onSubmit={''}
      target=""
      action="mailto:rsoto90@gmail.com" method="post" 
    >
      <section className="login-section">
          <div className='login-text'>Log in</div>
        <div className=''>
          <input
            type="text"
            placeholder="Email"
            name="name"
            className=""
            required
          />
        </div>
        <div className="">
          <input
            type=""
            placeholder="Password"
            name=""
            className=""
            required
          />
        </div>
        <div>New Here? Register</div>

        <div className=''>
            <div className=''>Email</div>
          <input
            type="text"
            placeholder="Email"
            name="name"
            className=""
            required
          />
        </div>
        <div className="">
        <div className=''>Password</div>
          <input
            type=""
            placeholder="Create a Password"
            name=""
            className=""
            required
          />
        </div>

        
      </section>
    </form>

        )

}