import React from 'react';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import ButtonMain from './Button-Main';
import './style.scss';


function Landing() {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt='Plataforma de estudos' className='hero-image' />

        <div className='buttons-container'>
          <ButtonMain label='Estudar' img={studyIcon} />
          <ButtonMain label='Dar aulas' img={giveClassesIcon} styleType='secondary' />
        </div>
        <span className='total-connections'>
          Total de 200 conexões realizadas <img src={purpleHeartIcon} alt='Coração roxo' />
        </span>
      </div>
    </div>
  );
}

export default Landing;
