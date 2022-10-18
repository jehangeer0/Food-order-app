import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const[email, setEmail]= useState('');
  const[password,setPasword]=useState('');
  const[data, setData]=useState([])
 
  useEffect(() => {
    getData();
}, [])

   const getData = async()=> {
     let result = await fetch ("http://localhost:8000/login");
     result= await result.json();
     if(result){
       setData(result)
     }else{
       alert("No record found")
     }
   }

const registerUser = async (e) =>{

 e.preventDefault();
 if(!password || !email ){
   alert("fill all the fields")
 }
 


 let result = await fetch('http://localhost:8080/login',{
     method: 'post',
     body: JSON.stringify({password, email}),
     headers: {
         'Content-Type': 'application/json'
     },
 })

 result = await result.json();
 console.log(result);
 if(result){
   alert("Login successfully")
 }else{
   alert("Invail details")
 }
 


}
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={registerUser}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e=>setEmail(e.target.value))}
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPasword(e.target.value)}
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" onClick={registerUser} className="addTOCart__btn">
                  submit
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
     {/* <div>
       <table>
         <tr>
                 <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e=>setEmail(e.target.value))}
                    />
          </tr>
          <tr>
                 <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e=>setPasword(e.target.value))}
                    />
          </tr>
          <button className="btn btn-danger" onClick={registerUser}>login</button>
       </table>
     </div> */}

    </Helmet>
    

    
  );
  
};

export default Login;
