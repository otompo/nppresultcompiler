import React, {useEffect} from 'react';
import {Row, Col, Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Meta from '../components/Meta';


const DashboardScreen = ({history}) => {
           

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
            if(!userInfo){
                 history.push('/')   
            }

    }, [userInfo, history])



    return (
        <>
        <Meta title='NPP | Dashboard'/>
            <Row >
                 
                <Col md={4} className='my-5'>
                   <Sidebar/>
                </Col>
                     
                {/* ******************************* */}
                <Col  md={8} className='feature' >
                 <Row>
                    <Col md={6} className='py-5'>
                     <Link to='/enterresult'>
                        <Card style={{backgroundColor:'#132f7a'}}>
                            <Card.Body className='feature-wrap'>                            
                                <i className="fas fa-edit"></i>
                            </Card.Body>
                            <Card.Title>
                               Enter Results
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    <Col md={6} className='py-5'>
                     <Link to='/viewresult'>
                        <Card style={{backgroundColor:'#132f7a'}}>
                            <Card.Body className='feature-wrap'>                            
                            <i class="fas fa-eye"></i>
                            </Card.Body>
                            <Card.Title>
                               Veiw Result
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    {/* <Col md={4} className='py-5'>
                     <Link to='/orderbin'>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fab fa-first-order-alt"></i>
                            </Card.Body>
                            <Card.Title>
                                 Order for bin
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col> */}
                    {/* ************************ */}
                 </Row>
                
                     
                </Col>
            </Row>
        </>
    );
};

export default DashboardScreen;