import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../actions/userActions'
import Meta from '../components/Meta'


const RegisterScreen = ({location, history}) => {

    const[name, setName]= useState('')
    // const[email, setEmail]= useState('')
    const[phone, setPhone]= useState('')
    const[password, setPassword]= useState('')
    const[confirmPassword, setConfirmPassword]= useState('')
    const[message, setMessage]= useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const {loading, error, userInfo}=userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard'
    
    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
        
    }, [history, userInfo, redirect])


    const submitHandler = (e)=>{
        e.preventDefault()
        // DISPATCH REGISTER
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{

            dispatch(register(name, phone, password))
        }

        
    }
   

    return (
        <>
         <Meta title='NPP | Registration'/>
        <FormContainer>
            <Card className='mt-5'>            
                <Card.Body>
                <Card.Title>
                <h1>Sing Up</h1>
                </Card.Title>
                <Card.Text>
               
                
                {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

            <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Name' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {/* ******************************************** */}            

                {/* <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group> */}
                {/* *********************************************** */}

                <Form.Group controlId="phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Phone' 
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

             {/* *********************************************** */}

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder='Confirm Password' 
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

             {/* *********************************************** */}

                <Button type="submit" className="btn btn-primary"  size="lg" block>
                    Register
                </Button>
            </Form>
            <Row className="py-3">
                    <Col>
                       Have an Accounts ? 
                        <Link  
                            to={redirect ?  `/login/redirect=${redirect}`: '/login' }>
                              Login
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

export default RegisterScreen;