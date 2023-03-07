import * as React from "react"
import HeroSection from "../sections/hero-section";
import {Header} from "../components/header";
import ProductSection from "../sections/product-section";
import {Footer} from "../components/footer";
import ContactSection from "../sections/contact-section";
import BoxSection from "../sections/box-section";


const IndexPage = () => {
  return (
    <>
        <Header/>
        <HeroSection/>
        <ProductSection index={0}/>
        <ProductSection index={1}/>
        <BoxSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default IndexPage
