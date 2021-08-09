import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import TextAndVideo from '../components/TextAndVideo'
import Hero from '../components/Hero'
import Carusel from '../components/Carousel'
import Footer from '../components/Footer'


export default class Home extends React.Component{
     arrayCities = [
        [
          { id: 1, name: "Mexico City", url: 'https://th.bing.com/th/id/R.f124a63611bfdcec864d7a22cfe0d2b7?rik=3EK6hlHoJWa%2baQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-0q9rkfRVfPU%2fUxW9bpbouJI%2fAAAAAAAAd3Y%2ffh5Eb9jsn9w%2fs1600%2fMexico-City-Mexico.jpg&ehk=8hLyAwb74rVYzHHpsJpdPGMRXSdBg5x472ixn%2bo9DHc%3d&risl=&pid=ImgRaw&r=0', slide: "A" },
          { id: 2, name: "Iquitos", url: 'https://www.miviaje.info/wp-content/uploads/2019/03/amazonas-peruano-belleza-sin-fin.jpg' },
          { id: 3, name: "Fanjingshan", url: 'https://s.yimg.com/uu/api/res/1.2/VST036KhGikkkHkqSOcrDw--~B/aD0xOTI0O3c9Mjg4NztzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en_US/News/US-AFPRelax/04_fanjingshan_.93ef7155937.original.jpg' },
          { id: 4, name: "Dakar", url: 'https://images.lonelyplanetitalia.it/static/places/dakar-4469.jpg?q=80&p=slider&s=b8c2fcfabffe1f1fdf2bb826714a2996' },
        ]
        ,
        [
          { id: 5, name: " Dordogne", url: 'https://th.bing.com/th/id/OIP.v7tlUBpGZgvwgflPoWb3dQHaFR?pid=ImgDet&rs=1', slide: "B" },
          { id: 6, name: "Greenland", url: 'https://th.bing.com/th/id/OIP.9WilmeY7H723cjs4V-GV3wHaE8?pid=ImgDet&rs=1' },
          { id: 7, name: "Papeete", url: 'https://th.bing.com/th/id/OIP.uAte1uOToJFkVfMOWFiSiAHaE8?pid=ImgDet&rs=1' },
          { id: 8, name: "Vevey", url: 'https://viajes.nationalgeographic.com.es/medio/2018/12/28/vevey-suiza_27e0b3f4_1500x1124.jpg' },
        ]
        ,
        [
          { id: 9, name: "Bisti/De-Na-Zin", url: 'https://th.bing.com/th/id/R.c3285b22c228ccd85b5d18a1e61a524c?rik=BARCQoSiQowpbg&riu=http%3a%2f%2fstatic.asiawebdirect.com%2fm%2fbangkok%2fportals%2fbali-indonesia-com%2fhomepage%2ftop10%2ftop10-attractions-ubud%2fpagePropertiesImage%2fbali-indonesia-travel-tours-guide74.jpg&ehk=DeDylUdF%2fn2QQbN0aKMFZP4x1w3v9i%2fc%2bngmYDD%2fQ3Q%3d&risl=&pid=ImgRaw&r=0', slide: "C" },
          { id: 10, name: "Matera", url: 'https://th.bing.com/th/id/R.bb5c964479ba4b84448fd2a01ec8a9e8?rik=kEY47KdjvT99eA&riu=http%3a%2f%2fwww.albergoitalia.com%2fimg%2fTOP%2fmatera2.jpg&ehk=5y3mL28uvRn%2fsGeR9EqjUu0Hs8v3V6II3h6A7ULMF5U%3d&risl=&pid=ImgRaw&r=0' },
          { id: 11, name: '"Caño Cristales" river', url: 'https://th.bing.com/th/id/R.b9cc39a6a32530f8e0d4b971651ec44a?rik=WhdCjrQdoASKhw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-u-x-KRsOKvU%2fVFdJcWrNTPI%2fAAAAAAABCcg%2ftSwtD8lXBSA%2fs1600%2fColombia_Cano_Cristales.jpg&ehk=CAmy%2fKWzdRjU7HOEm%2bYGoEOANeK9pROjHA0Pvg5rexg%3d&risl=&pid=ImgRaw&r=0' },
          { id: 12, name: "Cairo", url: 'https://th.bing.com/th/id/R.3385a2178e70c0e1d374967c6bdaf22c?rik=iRsec%2bWlpgwZFA&pid=ImgRaw&r=0' },
    
        ]
      ]

    render(){
        return(
            <>
                <Header/>
                <TextAndVideo/>
                <Hero/>
                <Carusel cities = {this.arrayCities} />
                <Footer />
            </>
        )
    }
}