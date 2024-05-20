import React from 'react';
import '../styles/home.css';

import {Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpeg';
import heroImg02 from '../assets/images/hero-img02.jpeg';
import heroVideo from '../assets/images/hero-video.mp4';
import partyImg from '../assets/images/party.png';
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return <>

  {/* ========== hero section start ========= */}

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle = {'Making Every Occasion Extraordinary'}/>
              <img src={partyImg} alt="" />
            </div>
            <h1>
            Crafting Moments, Celebrating {" "}
              <span className='highlight'>Milestones</span>
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus veritatis 
                harum saepe alias? Quod magnam in temporibus repellendus ipsum omnis at exercitationem porro ut. 
                Iste non quis obcaecati excepturi aut.
            </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt='' />
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt='Description of the video content' controls muted autoPlay loop  />
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt='' />
          </div>
        </Col>

        <SearchBar />


      </Row>
    </Container>
  </section>

  {/* ========== hero section start ========= */}

  <section>
    <Container>
    <Row>
      <Col lg='3'>
        <h5 className="services__subtitle">What we serve</h5>
        <h2 className="services__title">We offer our best services</h2>
      </Col>
      <ServiceList />
    </Row>
    </Container>
    
  </section>
  
  </>;

};

export default Home;