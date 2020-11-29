import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Meta from '../components/Meta'

const LoginScreen = ({location, history}) => {

    const[phone, setPhone]= useState('')
    const[password, setPassword]= useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userInfo}=userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard'
    
    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
        
    }, [history, userInfo, redirect])


    const submitHandler = (e)=>{
        e.preventDefault()
        // DISPATCH LOGIN
        dispatch(login(phone, password))
    }
   

    return (
        <>
        <Meta title='NPP | Login'/>
        <FormContainer>
            <Card className='mt-5'>
                <Card.Body>
                    <Card.Title>
                    <h1>Sign In</h1>
                    </Card.Title>
                    <Card.Text>
                    {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Phone Number' 
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {/* *********************************************** */}
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder='Enter password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-primary" size="lg" block>
                    logIn
                </Button>
            </Form>
            <Row className="py-3">
                    <Col>
                        New Customer ? 

                        <Link 
                            to={redirect ? `/register/redirect=${redirect}`: '/register' }>
                             Register
                        </Link>
                    </Col>
            </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
           

        </FormContainer>
        </>
    );
};

export default LoginScreen;