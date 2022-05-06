import React from 'react';
import pic from '../../assets/images/Portrait.jpg';

export default function Home() {
  return (
    <div className= 'linear'>
      <h1>About me</h1>
      <div className='portrait'><img className='resize' src={pic} /></div>
      <p className='about'>
      My name is Chris McLeod, im a full stack web developer currently attending the University of Wisconsin Coding Bootcamp. I have a strong interest in coding and so far have specialized 
      primarily in ui/ux design but am also proficient in other areas aswell listed in my resume. I enjoy spending time learning new languages or new ways to do things with code and am 
      looking for opportunities to continue learning and become a better software developer. I work well in groups and enjoy teamwork, have good communication skills and excel at creative-thinking 
      and problem solving.
      </p>
    </div>
  );
}

