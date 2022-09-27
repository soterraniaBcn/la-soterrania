import React from 'react';
import '../css/FooterGris.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function FooterGris(){
    return(
        <div className="divContainer1Gris">
              <h3 className="h3Gris">Avís legal</h3>
              <div className="div2">
              <h3 className="h3Gris">Contacte</h3>
            
            <div className="div3Gris">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank" className="link-divGris">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" className="link-divGris" >
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" className="link-divGris">
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }