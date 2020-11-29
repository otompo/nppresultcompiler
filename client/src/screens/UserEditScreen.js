import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Card, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getUserDetails,updateUser} from '../actions/userActions'
import {USER_UPDATE_RESET} from '../constants/userConstants'


const UserEditScreen = ({match, history}) => {
   const userId= match.params.id

    const[name, setName]= useState('')
    const[phone, setPhone]= useState('')
    const[isAdmin, setIsAdmin]= useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const {loading, error, user}=userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const {loading:loadingUpdate,error:errorUpdate,success:successUpdate}=userUpdate

   
    
    useEffect(() => {
        if(successUpdate){
            dispatch({type: USER_UPDATE_RESET})
            history.push('/admin/userlist')
        }else{
            if(!user.name || user._id !==userId){
                dispatch(getUserDetails(userId))
            }else{
                setName(user.name)
                setPhone(user.phone)
                setIsAdmin(user.isAdmin)
            }
        }
      
    }, [match, history, userId, dispatch, user, successUpdate])


    const submitHandler = (e)=>{
        e.preventDefault()
      dispatch(updateUser({_id:userId, name, phone, isAdmin}))
        
    }
   

    return (
        <>
       <FormContainer> 
            <Card className='my-5'>
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col md={6}>
                            <Link to='/admin/userlist' className='btn btn-primary my-3'>Back</Link>
                            </Col>
                            <Col md={6}>
                            <h1>Edit User</h1> 
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text>
                    {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}  
                {loading ? <Loader/>: error? <Message variant='danger'>{error}</Message>:
                (

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
                    <Form.Group controlId='isadmin'>
                <Form.Check
                    type='checkbox'
                    label='Is Admin'
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                ></Form.Check>
                </Form.Group>
                    {/* *********************************************** */}



                    <Button type="submit" className="btn btn-success" size='lg' block>
                        Update
                    </Button>
                </Form>


             )}
          
                    </Card.Text>
                </Card.Body>
            </Card>

           
            
            
        </FormContainer>
       
        </>
       
    );
};

export default UserEditScreen;