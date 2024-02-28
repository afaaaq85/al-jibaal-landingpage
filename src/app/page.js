'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';

export default function Home() {

  useEffect(() => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            // Adjust the speed parameter to decrease scrolling speed
            smooth: true,
            smoothMobile: false,
            getSpeed: true,
            speed: 0.1, // Adjust this value to decrease or increase speed
          });
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description/>
        <Projects/>
      </main>
  )
}
