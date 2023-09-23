import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
 
const Contact = () => {
  return (
    <section className='lg:section py-16' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together~

              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
              <div className='bg-transparent py-3 w-full'>
                <h2 className='h2 text-accent'>My Info</h2>
                <div className='flex gap-x-4 items-center mb-4'>
                  <AiOutlineMail className='text-[30px]'/>
                  <p>thangvu.3397@gmail.com</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                  <AiOutlinePhone className='text-[30px]'/>
                  <p>0327146888</p>
                </div>
              </div>
              <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email' />
              <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none' placeholder='Your message' >
              </textarea>
              <button className='btn btn-lg'>Send Message</button>
          </motion.form>
          
        </div>
      </div>
    </section>
  )
};

export default Contact;
