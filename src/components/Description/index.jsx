import React from 'react'
import styles from './styles.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function index() {
  const phrases = [
    "The majestic peaks of the Himalayas touch the sky.",
    "Exploring the rugged terrain of the Rocky Mountains is a thrilling adventure.",
    "Mountains are nature's silent giants, standing tall for millennia.",
    "The view from the summit is worth every step of the climb.",
    "Mountain air is pure and invigorating, a true breath of fresh air."
  ];
  


  return (
    <div className={styles.description}>
      {
        phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>
        })
      }
    </div>
  )
}

function AnimatedText({ children }) {

  const text = useRef(null)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      left: "-200px",
      opacity: 0
    })
  }, [])

  return (
    <p ref={text}>{children}</p>
  )
}