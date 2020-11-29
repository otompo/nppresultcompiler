import React, {useState, useEffect} from 'react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../components/FormContainer'
import {createResults} from '../actions/pollingResultActions'
import Sidebar from '../components/Sidebar'
import Message from '../components/Message'
import {POLLINGRESULTS_CREATE_RESET} from '../constants/pollingResultConstants'


const EnterResultScreen = ({history}) => {

    const dispatch = useDispatch()

    const [pollingStationName, setPollingStationName]=useState('')
    const [presidentialResult, setPresidetialResult]=useState('')
    const [paliamentaryResult, setPaliamentaryResult]=useState('')
    const [comment, setComment]=useState('')

    const pollingResultsCreate= useSelector((state)=>state.pollingResultsCreate)
    const {result, success, error} =pollingResultsCreate


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
            if(!userInfo){
                 history.push('/')   
            }
            if(success){
               // alert('Review Submited!')               
                setPollingStationName('')
                setPresidetialResult('')
                setPaliamentaryResult('')
                setComment('')
                dispatch({type:POLLINGRESULTS_CREATE_RESET})
                // history.push(`/dashboard`)
            }            
            // eslint-disable-next-line
        }, [userInfo, result, success, dispatch, history])



 const submitResults= (e)=>{
       e.preventDefault()
      dispatch(createResults({
        pollingStationName,
        presidentialResult,
        paliamentaryResult,
        comment
      }))
 }

    return (
        <Row>
            <Col md={4} className="my-4">
                <Sidebar/>
            </Col>
            <Col md={8}>           

                 <Card.Body>
                  <Card.Title className="text-center">{success && <Message variant='success' >RESULTS SENT SUCCESSFULLY</Message>}</Card.Title>         
                    <Card.Text>
                            <Form 
                            className='pickupform'
                            onSubmit={submitResults}
                            >
                            <>
                            <div className="dropdown-divider my-4"></div>
                            <Row>
                                <Col md={12} >
                                    <Form.Group controlId='pollingstationname'>
                                    <Form.Control
                                    type='text'
                                    style={{height:'50px'}}
                                    placeholder='Enter Polling Station Name'
                                    value={pollingStationName}
                                    required
                                    onChange={(e) => setPollingStationName(e.target.value)}
                                ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <div className="dropdown-divider my-1"></div>
                                <Col md={12} >
                                    <Form.Group controlId='presidentialResults'>
                                    <Form.Control
                                    type='text'
                                    style={{height:'50px'}}
                                    placeholder='Enter  Presidential Results'
                                    value={presidentialResult}
                                    required
                                    onChange={(e) => setPresidetialResult(e.target.value)}
                                ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <div className="dropdown-divider my-1"></div>
                                <Col md={12} >
                                    <Form.Group controlId='parliamentaryResults'>
                                    <Form.Control
                                    type='text'
                                     style={{height:'50px'}}
                                    placeholder='Enter Parliamentary Results'
                                    value={paliamentaryResult}
                                    required
                                    onChange={(e) => setPaliamentaryResult(e.target.value)}
                                ></Form.Control>
                                    </Form.Group>
                                </Col>
                               
                                <div className="dropdown-divider my-3"></div>
                                <Col md={12} >
                                    <Form.Group controlId='comment'>
                                    <Form.Control
                                     as="textarea"
                                     rows="5" 
                                    placeholder='Enter Comment'
                                    value={comment}                            
                                    onChange={(e) => setComment(e.target.value)}
                                ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <div className="dropdown-divider my-1"></div>
                            </Row>
                            </>                          
                        
                                {error && <Message variant='danger'>{error}</Message>}
                        
                            <Button 
                            type='submit' 
                            variant='primary'                               
                            block>
                            SUBMIT RESULTS
                            </Button>
                        </Form>
                    </Card.Text>                            
            </Card.Body>                 
            
        </Col>
    </Row>
    );
};

export default EnterResultScreen;