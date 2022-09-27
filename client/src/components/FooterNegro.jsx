import React from 'react';
import '../css/FooterNegro.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function Footer(){
    return(
        <div className="divContainerNegro">
              <h3 className="h3Negro">Avís legal</h3>
              <div className="div2">
                <h3 className="h3Negro">Contacte</h3>
            
            <div className="div3Negro">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }