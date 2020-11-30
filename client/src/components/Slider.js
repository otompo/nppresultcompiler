import React from 'react'
import { Carousel, Image} from 'react-bootstrap'
import Slider1 from '../img/slide1.jpg'
import Slider2 from '../img/slide2.jpg'
import Slider3 from '../img/slide3.jpeg'

const Slider = () => {

  return(
    <div>   
                  

                    <Carousel className='carousel'>
                        <Carousel.Item>
                                <Image 
                                // className="d-block w-100"
                                src={Slider2}
                                alt="First slide"
                                fluid
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image  
                            // className="d-block w-100"
                            src={Slider1}
                            alt="Third slide"
                                fluid
                            />
                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image 
                            // className="d-block w-100"
                            src={Slider3}
                            alt="Third slide"
                            fluid
                            />
                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </div>
          
)
}

export default Slider
