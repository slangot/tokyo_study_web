"use client"

// React
import { useState } from "react"

// Next
import Image from "next/image"
import Link from "next/link"

// Icons
import { FaBars, FaMagnifyingGlass, FaRegCircleXmark } from "react-icons/fa6"

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className="flex flex-1 flex-between items-center w-screen py-2 px-5 border-b-2 border-dark bg-dark">
      <Link href="/" className="flex flex-1 flex-center">
        <Image src="/logo.png" alt="Tokyo Study logo" width={80} height={80} className="object-contain" />
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex flex-1 items-center justify-center hidden">
        <div className="flex flex-1 justify-evenly">
          <Link href="/kana" className="">
            Kana
          </Link>
          <Link href="/kanji" className="">
            Kanji
          </Link>
          <Link href="/exercices" className="">
            Exercices
          </Link>
          <Link href="/dictionary" className="flex items-center justify-center">
            <FaMagnifyingGlass />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex">
        {toggleDropdown ? (
          <div className='dropdown'>
            <button className='dropdown_close' onClick={() => setToggleDropdown(false)}><FaRegCircleXmark /></button>
            <Link href='/kana'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}>
              Kana
            </Link>
            <Link href='/kanji'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}>
              Kanji
            </Link>
            <Link href='/exercices'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}>
              Exercices
            </Link>
            <Link href='/dictionnary'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}>
              Dictionnaire
            </Link>
          </div>)
          :
          <div className="flex items-end justify-center mr-3" onClick={() => setToggleDropdown(true)}>
            <FaBars size={25} />
          </div>
        }
      </div>
    </nav>
  )
}

export default Nav