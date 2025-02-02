import React from 'react'


import "../style/home.css"
import { HomeNav } from '../components/HomeNav'
import { HomeBody } from '../components/HomeBody'
import { Footer } from '../components/Footer'
import Advertisement from '../components/Advertisement'
export const Home = () => {
  return (
    <>
      <HomeNav/>
      <HomeBody/>
      <Advertisement/>
      <Footer/>
    </>
  )
}
