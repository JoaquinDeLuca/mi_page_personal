'use client'
import React,{useState, useEffect} from 'react'
import style from './Footer.module.css'

export default function Footer() {

  const [year, setYear] = useState(0);

  useEffect(()=> {
    let year = new Date().getFullYear()
    setYear(year)
  },[])

  return (
    <footer className={style.footer}>
        <p className="text-white">© {year} Copyright - Joaquin De Luca </p>
    </footer>
  )
}
