import { useEffect } from 'react';
import myImage from '../assets/me001.jpg'
import { gsap } from 'gsap'


const Home = () => {
  // GSAP animation for the image
  // gsap.fromTo('.home-text', { scale: 0 }, { scale: 1, duration: 1, ease: 'elastic.out(1, 0.3)' });
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 0.7 })
      .fromTo('.home-text', { opacity: 0 }, { opacity: 1, duration: 0.7,  }, '-=0.3')
      .fromTo('.home-image', { opacity: 0 }, { opacity: 1, duration: 0.7,  }, '-=0.3');

    return () => {
      tl.kill()
    }
  }, [])
  
  return (
    <section className='flex flex-col items-center w-full justify-center gap-4 sm:px-4 pt-4 pb-20 '>
      <div className='name w-full text-center p-16'>
        <h1 className='text-5xl font-bold'>TOMOYA TAKESHIMA</h1>
      </div>
      <div className='flex max-sm:flex-col max-sm:gap-8 items-center gap-8 justify-center'>
        <div className='sm:w-1/2 p-2'>
          <p className='home-text text-2xl leading-relaxed'>Hello! 
            <br />
            I am a web development student at <abbr title="Cornerstone International Community College of Canada">CICCC</abbr>.
          <br />
          I'm currently learning React and Next.js, and I'm excited to apply my skills to real-world projects. I truly enjoy the process of building web applications and am especially interested in creating functional and well-designed user experiences. I'm always looking for opportunities to grow as a developer, so if you have any suggestions, feedback, or opportunities, feel free to reach out!
          </p>
        </div>
        <div className='home-image'>
          <img src={myImage} alt="My Image" className='w-[300px] h-[300px] rounded-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Home