import demoBank from '../assets/demobank.png';
import demoHairSalon from '../assets/demohairsalon.png';
import demoMovie from '../assets/demomovie.png';
import demoCarCare from '../assets/democarcare.png'
import demoShop from '../assets/demoshop.png';
import demoTaskApp from '../assets/demotaskapp.png';
import demoChat from '../assets/demochat.png';
import demoEC2 from '../assets/demoEC2.png'
import demoEC3 from '../assets/demoEC3.png';
import lootGame from '../assets/loot.png'
import { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import useMediaQuery from '../hooks/useMediaQuery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const toggleShowMore = () => setShowMore(!showMore)

  const isSmall = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    const projectsArray = gsap.utils.toArray('.dProject0, .dProject1, .dProject2, .dProject3, .dProject4, .dProject5, .dProject6, .dProject7, .dProject8, .dProject9')

    const mobilleProjects = gsap.utils.toArray('.project1, .project2, .project3')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 70%',
        toggleActions: 'play none none none',
        // markers: true, // for debugging
      }
    });

    tl.fromTo('.projects', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })

    tl.fromTo(
      projectsArray,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2
      },
      '-=0.2'
    );

    if (isSmall) {
      tl.fromTo(
        mobilleProjects,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2
        },
        '-=0.2'
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
    
  }, [isSmall]);
  
  return (
    <section id='projects' className='px-4 pb-20 w-full flex flex-col items-center'>
      <h1 className='projects text-4xl font-bold mb-8'>Projects</h1>
      {isSmall ? (
        <div className='grid sm:grid-cols-2 gap-y-10 justify-items-center w-full'>
          <div className='project0 flex flex-col'>
            <h2 className='text-xl mb-3'>Board Game(Loot)</h2>
            <a target='_blank' href="https://loot-frontend.onrender.com/" className='rounded-lg'>
              <img src={lootGame} alt="loot image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='project1 flex flex-col'>
            <h2 className='text-xl mb-3'>Bank HP</h2>
            <a target='_blank' href="https://tomoya300.github.io/easybank-landing-page-master/" className='rounded-lg'>
              <img src={demoBank} alt="demo bank image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='project2 flex flex-col'>
            <h2 className='text-xl mb-3'>Hair salon HP</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-final-project-web2-final-team5.git" className='rounded-lg'>
              <img src={demoHairSalon} alt="demo hair salon image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='project3 flex flex-col'>
            <h2 className='text-xl mb-3'>Movie site</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-midterm-project-Tomoya300.git" className='rounded-lg'>
              <img src={demoMovie} alt="demo movie site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <Collapse isOpened={showMore} >
            <div className={`flex flex-col`}>
              <h2 className='text-xl mb-3'>Car care site</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-final-project-web2-final-team5.git" className='rounded-lg'>
                <img src={demoCarCare} alt="demo Car Care site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
            <div className={`flex flex-col`}>
              <h2 className='text-xl mb-3'>Online store</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/oop-and-ts-midterm-Tomoya300.git" className='rounded-lg'>
                <img src={demoShop} alt="demo shop image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
            <div className={`flex flex-col`}>
              <h2 className='text-xl mb-3'>Task app</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/oop-and-ts-final-project-team4-theawesometeam.git" className='rounded-lg'>
                <img src={demoTaskApp} alt="demo task app image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
            <div className={`flex flex-col`}>
              <h2 className='text-xl mb-3'>Chat app</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/nodejs-final-project-nodejs-final-pj.git" className='rounded-lg'>
                <img src={demoChat} alt="demo chat app image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
            <div className={`flex flex-col`}>
              <h2 className='text-xl mb-3'>EC site</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/react-js-midterm-dinc.git" className='rounded-lg'>
                <img src={demoEC2} alt="demo EC site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
            <div className={`flex flex-col ${showMore ? '' : 'max-sm:hidden'}`}>
              <h2 className='text-xl mb-3'>EC site 2</h2>
              <a target='_blank' href="https://github.com/Cornerstone-CICCC/react-js-final-project-lets-picnic.git" className='rounded-lg'>
                <img src={demoEC3} alt="demo EC site 2 image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
              </a>
            </div>
          </Collapse>
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 gap-y-10 justify-items-center w-full'>
          <div className='dProject0 flex flex-col'>
            <h2 className='text-xl mb-3'>Board Game(Loot)</h2>
            <a target='_blank' href="https://loot-frontend.onrender.com/" className='rounded-lg'>
              <img src={lootGame} alt="loot image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='dProject1 flex flex-col'>
            <h2 className='text-xl mb-3'>Bank HP</h2>
            <a target='_blank' href="https://tomoya300.github.io/easybank-landing-page-master/" className='rounded-lg'>
              <img src={demoBank} alt="demo bank image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='dProject2 flex flex-col'>
            <h2 className='text-xl mb-3'>Hair salon HP</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-final-project-web2-final-team5.git" className='rounded-lg'>
              <img src={demoHairSalon} alt="demo hair salon image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className='dProject3 flex flex-col'>
            <h2 className='text-xl mb-3'>Movie site</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-midterm-project-Tomoya300.git" className='rounded-lg'>
              <img src={demoMovie} alt="demo movie site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject4 flex flex-col`}>
            <h2 className='text-xl mb-3'>Car care site</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/web-2-final-project-web2-final-team5.git" className='rounded-lg'>
              <img src={demoCarCare} alt="demo Car Care site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject5 flex flex-col`}>
            <h2 className='text-xl mb-3'>Online store</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/oop-and-ts-midterm-Tomoya300.git" className='rounded-lg'>
              <img src={demoShop} alt="demo shop image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject6 flex flex-col`}>
            <h2 className='text-xl mb-3'>Task app</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/oop-and-ts-final-project-team4-theawesometeam.git" className='rounded-lg'>
              <img src={demoTaskApp} alt="demo task app image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject7 flex flex-col`}>
            <h2 className='text-xl mb-3'>Chat app</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/nodejs-final-project-nodejs-final-pj.git" className='rounded-lg'>
              <img src={demoChat} alt="demo chat app image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject8 flex flex-col`}>
            <h2 className='text-xl mb-3'>EC site</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/react-js-midterm-dinc.git" className='rounded-lg'>
              <img src={demoEC2} alt="demo EC site image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
          <div className={`dProject9 flex flex-col ${showMore ? '' : 'max-sm:hidden'}`}>
            <h2 className='text-xl mb-3'>EC site 2</h2>
            <a target='_blank' href="https://github.com/Cornerstone-CICCC/react-js-final-project-lets-picnic.git" className='rounded-lg'>
              <img src={demoEC3} alt="demo EC site 2 image" className='w-[300px] rounded-sm shadow-[0px_0px_8px_gray] hover:shadow-[0_3px_8px_gray] hover:scale-101 transition'/>
            </a>
          </div>
        </div>
      )}
      <button onClick={toggleShowMore} className='hover:underline mt-10 sm:hidden'>
        {showMore ? 'See Less' : 'See More'}
        <br />
        <span>{showMore ? '\u25B2' : '\u25BC'}</span>
      </button>
    </section>
  )
}

export default Projects