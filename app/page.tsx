"use client"
import React from 'react'
import Link from 'next/link';
import { BrowserRouter } from 'react-router-dom';
const Main = () => {
  return (
    <BrowserRouter>
    <div>
      <div>
        <Link href={"/mapdashboard"}>dashboard</Link>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Main