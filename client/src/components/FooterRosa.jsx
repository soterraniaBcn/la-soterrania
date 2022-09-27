import React from 'react';
import '../css/FooterRosa.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function Footer(){
    return(
        <div className="divContainer1">
              <h3 id="h3">Avís legal</h3>
              <div className="div2">
                <h3 id="h3">Contacte</h3>
            
            <div className="div3">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank" className="link-div">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" className="link-div">
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" className="link-div">
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }