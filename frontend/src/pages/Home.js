import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import TextAndVideo from '../components/TextAndVideo'
import Hero from '../components/Hero'
import Carusel from '../components/Carousel'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <TextAndVideo/>
                <Hero/>
                <Carusel/>
            </>
        )
    }
}