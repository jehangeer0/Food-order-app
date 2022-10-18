import React from "react";
import whyImg from "../assets/images/location.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/contact.css";


const Contact = () => {
  return <div>
     <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6" id="contact-img">
              <img src={whyImg} alt="why-tasty-treat" className="w-100"  style={{height:460 }}/>
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  About  <span>Developer?</span>
                </h2>
                <p className="tasty__treat-desc">
                  My Name is Muhammad Jehangeer Hassan, and i am a 
                  full stack web Developer ,i have Done Diploma from PNY tranings 
                  Lahore. Wich is located in ARFA SOFTWARE TECHNOLOGY PARK.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0" id="listgroup">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Full Name
                     
                    </p>
                    <p className="choose__us-desc">
                      Muhammad Jehangeer Hassan
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0" id="listgroup">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> 
                      Certified In
                    </p>
                    <p className="choose__us-desc">
                      Full Stack Web Development 
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0" id="listgroup">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Languages
                     {" "}
                    </p>
                    <p className="choose__us-desc">
                      Html,5 , Css , BootStarp , JavaScripct , Laravel , React js ,<br/>  Node , Mongo db.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
   
  </div>
  
};

export default Contact;
