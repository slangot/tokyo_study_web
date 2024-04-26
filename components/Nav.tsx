"use client"

// next
import Image from "next/image"
import Link from "next/link"

const Nav = () => {

  return (
    <nav className="flex flex-between items-center w-full mb-4 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/logo.png" alt="Tokyo Study logo" width={80} height={80} className="object-contain" />
      </Link>
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
        <Link href="/dictionary" className="">
          Dictionnaire
        </Link>
      </div>
    </nav>
  )
}

export default Nav