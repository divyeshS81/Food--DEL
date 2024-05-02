import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam! Qui, natus voluptas iure sit eligendi provident ipsam dolorum. Vero eos sunt error numquam rerum voluptas porro molestiae, eum consectetur. Dolore sint velit, perspiciatis ex tenetur provident. Deleniti beatae assumenda autem pariatur magnam quasi, dolorum perferendis necessitatibus obcaecati, sint quidem esse nobis, laboriosam qui ex molestiae sunt cum nihil quis a voluptatem cumque quas aut commodi. Voluptatibus illum, nulla non pariatur quidem fuga praesentium adipisci quas? Excepturi eaque praesentium dolores eveniet optio soluta atque similique deserunt. Alias qui porro praesentium vitae officiis culpa, veritatis ad doloremque placeat consequatur? Tempora, saepe!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="footer-content-center">
            
        </div>
        <div className="footer-content-right">

        </div>
        
    </div>
  )
}

export default Footer