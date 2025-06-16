import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiAstro, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
    tl.fromTo('.skills', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })

    tl.fromTo(
      '.html, .css, .sass, .js, .ts, .react, .tailwind, .astro, .next',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2, stagger: 0.1, ease: 'power2.out' }
    )

    tl.fromTo(
      '.nodejs, .express, .mongodb, .postgreSQL',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.2, stagger: 0.1, ease: 'power2.out' },
      '+=0.2' // delay after frontend
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      tl.kill()
    }

  }, []);

  const handleHoverEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.out'
    });
  }
  const handleHoverLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.1,
      ease: 'power2.out'
    });
  }

  
  return (
    <section id='skills' className='w-full flex flex-col items-center pb-20'>
      <h1 className='skills text-4xl font-bold mb-4 text-center w-full'>Skills</h1>
      <div className='px-4 flex flex-col'>
        <div>
          <h2 className='text-3xl mb-4'>Frontend</h2>
          <ul className='flex flex-wrap gap-y-2'>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='html flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiHtml5 title='HTML'/>HTML</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='css flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiCss3 title='CSS'/> CSS</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='sass flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiSass title='SASS'/>SASS</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='js flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiJavascript title='JavaScript'/>JavaScript</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='ts flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiTypescript title='TypeScript'/>TypeScript</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='react flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiReact title='React'/>React</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='tailwind flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiTailwindcss title='Tailwindcss'/>TailwindCSS</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='astro flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiAstro title='Astro'/>Astro</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='next flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 transition hover:bg-neutral-900 w-[200px]'><SiNextdotjs title='Next.js'/>Next.js</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl mb-4 mt-12'>Backend</h2>
          <ul className='flex flex-wrap gap-y-2'>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='nodejs flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 hover:scale-105 transition hover:bg-neutral-900 w-[200px]'><SiNodedotjs title='Node.js'/>Node.js</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='express flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 hover:scale-105 transition hover:bg-neutral-900 w-[200px]'><SiExpress title='Express'/>Express</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='mongodb flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 hover:scale-105 transition hover:bg-neutral-900 w-[200px]'><SiMongodb title='MongoDB'/>MongoDB</li>
            <li onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='postgreSQL flex gap-1 text-xl items-center mr-4 bg-neutral-500 text-white p-2 hover:scale-105 transition hover:bg-neutral-900 w-[200px]'><SiPostgresql title='PostgreSQL'/>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills