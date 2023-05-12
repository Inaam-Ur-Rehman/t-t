import Image from 'next/image'
import React from 'react'
import styles from './about.module.scss'
import Logo from '../../images/team-logo.png'
import data from '../../utils/data.json'

import { motion } from 'framer-motion'
import { useInView } from 'react-hook-inview'
import Head from 'next/head'

const About = () => {
  const [done, setDone] = React.useState(false)
  const [ref, inView] = useInView({
    threshold: 0.5,
    defaultInView: false,
    onEnter: () => {
      // wait for 4 seconds before setting done to true
      setTimeout(() => {
        setDone(true)
      }, 2000)
    },
  })

  return (
    <>
      <Head>
        <title>About Us | T & T Marketing</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className={styles.aboutWrapper}>
        <div>
          <div>
            <span></span>
          </div>
          <p className={styles.aboutPara}>
            {/* We are a social media and marketing agency run by people that truly
            understand how digital marketing works specifically for industries
            such as gaming, technology, crypto and esports. Our number one goal
            is to always deliver the best results to our clients, and to ensure
            no stone is left unturned in making them happy and successful on
            their social media channels. Although everyone on our team is a
            professional with years of experience, we can guarantee working with
            us will be a blast! We’re devoted to a small number of clients and
            always have someone available to handle any social media
            emergencies. */}
            We are a social media and marketing agency run by people that truly
            understand how digital marketing works. Our main expertise lies in
            industries such as gaming, technology, crypto, and esports. Our
            number one priority is to always deliver the best results to our
            clients and to ensure no stone is left unturned in achieving their
            goals. We’re devoted to a limited number of clients and always have
            someone available to handle any social media emergency. We combine
            professionalism and efficiency with a good sense of humor and
            guarantee that working with us will be a blast!
          </p>
          <div>
            <span></span>
          </div>
        </div>

        {/* TEAM MEMBERS  */}

        <div className={styles.teamWrapper}>
          {data?.members?.map((member, i) => (
            <div key={i} className={styles.teamCard} ref={ref}>
              <motion.div
                initial={{ transform: 'rotate(0deg)' }}
                animate={{
                  transform: inView ? 'rotate(360deg)' : 'rotate(360deg)',
                }}
                transition={{ duration: 2 }}
              >
<<<<<<< HEAD
                <Image
                  loading='eager'
                  src={done ? member?.image : Logo}
                  alt={'Logo'}
                  fill={done ? true : false}
                />
=======

                <div>
                  <Image
                      className={styles.imageWrapper}
                      loading='eager'
                      src={done ? member?.image : Logo}
                      alt={'Logo'}
                      fill={done ? true : false}
                  />
                </div>
>>>>>>> 838e655 (Updated Name)
              </motion.div>
              <div className={styles.teamInfo}>
                <p>{member?.name}</p>
                <p>{member?.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
