import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/projects/project-1.png'
import Img2 from '../assets/projects/project-2.png'
import Img3 from '../assets/projects/project-3.png'
import Img4 from '../assets/projects/project-4.png'
import Img5 from '../assets/projects/project-5.png'
import Img6 from '../assets/projects/project-6.png'





const projectsData = [
  {
    id: 1,
    title: 'Pet Grooming Landing Page',
    img: Img1,
    demoUrl : 'https://vuduythang-dog-care-web.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/dog-care-app',
  },
  {
    id: 2,
    title: 'Restaurant Landing Page',
    img: Img2,
    demoUrl : 'https://thangvu-restaurant-app.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/restaurant-app',
  },
  {
    id: 3,
    title: 'Movie Trailer Web',
    img: Img3,
    demoUrl : 'https://thangvu-movie-trailer-app.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/movie-trailer-app',
  },
  {
    id: 4,
    title: 'Estate Web',
    img: Img4,
    demoUrl : 'https://thangvu-estate-app.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/estate-app',
  },
  {
    id: 5,
    title: 'Booking Hotel',
    img: Img5,
    demoUrl : 'https://vuduythang-hotel-booking-web.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/hotel-booking-web',
  },
  {
    id: 6,
    title: 'Ecommercer Shop Web',
    img: Img6,
    demoUrl : 'https://vuduythang-ecommerce-shop-web.netlify.app',
    sourceCodeUrl : 'https://github.com/thangvu33/ecommerce-book-app',
  },
]

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='mb-10'>
          <h2 className='h2 text-accent leading-tight'>My Portfolio</h2>
          <p className='text-[20px]'>Here are some of my personal projects.</p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {projectsData.map((project) => {
            const {id, img, title, demoUrl, sourceCodeUrl} = project
            return (
              <div key={id} className='group relative overflow-hidden border-2 border-white/20 rounded-xl min-h-[250px]'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={img} alt="" />
                <div className='absolute -bottom-full left-5 group-hover:bottom-16 transition-all duration-700 z-50'>
                  <span className='text-2xl text-white'>{title}</span>
                </div>
                <div className='absolute -bottom-full px-5 group-hover:bottom-6 transition-all duration-700 z-50 flex flex-row justify-between items-center w-full'>
                    <a href={demoUrl}>
                      <button className='btn btn-sm h-[34px] text-[10px]'>
                        DEMO
                      </button>
                    </a>
                    
                    <a href={sourceCodeUrl}>
                      <button className='btn h-[34px] text-[10px] px-6'>
                          CODE
                      </button>
                    </a>
                    
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
};


export default Work;
