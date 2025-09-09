import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Social = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.socials',
        start: 'top 70%', // when top of section hits 80% of viewport
      },
    });
    tl.fromTo('.socials', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      .fromTo('.contact', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }, '-=0.3')
      .fromTo('.github', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'power2.out' })
      .fromTo('.linkedin', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'power2.out' }, '-=0.3')
      .fromTo('.instagram', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'power2.out' }, '-=0.3');
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, [])
  
  return (
    <section className='sm:py-20'>
      <h1 className='socials text-4xl font-bold text-center mb-14'>Socials</h1>
      <div className='w-full text-center'>
        <Link to='/contact' className="contact font-bold py-4 rounded bg-neutral-300 px-8 py-2 uppercase w-[180px] hover:bg-neutral-800 hover:text-white transition">Contact</Link>
      </div>
      <div className='flex gap-4 mt-12 justify-center'>
        <a href="https://github.com/Tomoya300" className='github'><FaGithub title='Github' className='w-[50px] h-[50px] hover:scale-110 transition'/></a>
        <a href="https://www.linkedin.com/in/tomoya-takeshima" className='linkedin'><FaLinkedin title='Linkedin' className='w-[50px] h-[50px] hover:scale-110 transition'/></a>
        <a href="https://www.instagram.com/tomoya_3.0" className='instagram'><FaInstagram title='Instagram' className='w-[50px] h-[50px] hover:scale-110 transition'/></a>
      </div>
    </section>
  )
}

export default Social