import Link from 'next/link'
import React from 'react'
import { navLists } from './nav-lists'

export default function Navigation() {
  return (
    <nav className='h-96 flex flex-col p-2'>
      <div>
        <h2>Tag</h2>
        {navLists.map((list, i) => (
          <Link href='#' key={i} className='shadow p-2 w-20 text-xs'>
            {list}
          </Link>
        ))}
      </div>

      <div>
        <h2>Tag</h2>
        {navLists.map((list, i) => (
          <Link href='#' key={i} className='shadow p-2 w-20 text-xs'>
            {list}
          </Link>
        ))}
      </div>
    </nav>
  )
}
