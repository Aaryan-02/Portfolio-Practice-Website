import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineAim, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/25058652"} alt="Founder" />
            <h2>Aaryan Pinto</h2>
            <p>Motivation is temporary, but discipline lasts forever.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://youtube.com" target={'_blank'}><AiFillYoutube /></a>
                <a href="https://instagram.com" target={'_blank'}><AiFillInstagram /></a>
                <a href="https://github.com" target={'_blank'}><AiFillGithub /></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /></a>
      
    </footer>
  )
}

export default Footer
