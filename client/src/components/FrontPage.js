import React from 'react'
import { Link  } from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap'
import Typical from 'react-typical'
import Slider from './Slider';

const FrontPage = () => {
    return (
        
            <>
        <Row  className='frontpage'>
       
            <Col sm={6}  md={6} className='d-flex align-items-center justify-content-center  '>
                <Slider />
            </Col>

            <Col md={6} className='d-flex align-items-center justify-content-center animate_text'>
                <Row>
                    <Col md={6} className=''>
                    <h3 className='info_text'>         
                     NPP 2020 RESULTS COMPILER-BEREKUM EAST                                       
                    </h3>
                    {/* <p ></p> */}
                    <Typical
                        steps={['FOUR MORE', 1000, 'TO DO MORE', 800]}
                        loop={Infinity}
                        wrapper="p"
                        className='text-center'                       
                    />
                    </Col>
                    <Col md={6}>
                     <Link to='/login'>                         
                        <Button style={{backgroundColor:'#132f7a'}} size="lg" className='mt-5 button_signup' block>
                            SIGN-IN
                        </Button>
                     </Link>

                    </Col>
                </Row>
            </Col>
            
        </Row>
       </>
    );
};

export default FrontPage;