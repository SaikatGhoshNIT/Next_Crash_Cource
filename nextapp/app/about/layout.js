import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "About",
  description: "About Layout",
};

export default function Aboutlayout({children}) {
  return (
    <>
    <nav className="mb-4 font-bold">
          <ul className="flex gap-4">
            <li><Link href="/about/message">Message</Link></li>
            <li><Link href="/">Vision</Link></li>
          </ul>
          <hr/>
        </nav>
    <div>{children}</div>
    </>
  )
}
