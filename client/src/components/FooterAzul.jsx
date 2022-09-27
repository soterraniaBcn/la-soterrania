import React from 'react';
import '../css/FooterAzul.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function FooterAzul(){
    return(
        <div className="divContainerAzul">
              <h3 className="h3Azul">Avís legal</h3>
              <div className="div2">
              <h3 className="h3Azul">Contacte</h3>
            
            <div className="div3Azul">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank" className="link-divAzul">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" className="link-divAzul">
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" className="link-divAzul">
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }