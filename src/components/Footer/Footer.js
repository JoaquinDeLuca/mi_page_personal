import React,{useState, useEffect} from 'react'
import './Footer.css'

export default function Footer() {

  const [year, setYear] = useState(null);

  useEffect(()=> {
    let year = new Date().getFullYear()
    setYear(year)
  },[])

  return (
    <footer className='footer'>
        <p class="text-white">© {year} Copyright - Joaquin De Luca </p>
    </footer>
  )
}
