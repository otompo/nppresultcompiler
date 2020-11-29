import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listUsers, deleteUser} from '../actions/userActions'
import {USER_LIST_RESET} from '../constants/userConstants'

const UserListScreen = ({history}) => {
    const dispatch = useDispatch()

    const userList = useSelector((state)=>state.userList)
    const{loading, error, users, success} =userList

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

    const userDelete = useSelector((state)=>state.userDelete)
    const{success:successDelete} =userDelete


    useEffect(()=>{
        if(success){
            dispatch({type: USER_LIST_RESET})
            history.push('/')
        }else{

            if(userInfo && userInfo.isAdmin){
                dispatch(listUsers())
            }else{
                history.push('/')
            }
            // eslint-disable-next-line 
        }
    },[dispatch, history, userInfo, successDelete, success])

const deleteHandler =(id)=>{
    if(window.confirm('Are your sure')){
        dispatch(deleteUser(id))

    }
}

    return (
        <>
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        {/* <th>USER ID</th>         */}
                        <th>USER CONTACT</th>        
                        <th>NAME</th>        
                        {/* <th>PHONE</th>         */}
                        <th>ADMIN</th>        
                        <th>ACTIONS</th> 
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {users.map((user, counter)=>(
                            <tr key={user._id}>
                               <td>{counter+1}</td>
                               {/* <td>{user._id}</td> */}
                               <td>{user.phone}</td>
                               <td>{user.name}</td>
                               {/* <td>{user.phone}</td> */}
                               <td>{user.isAdmin
                                ?(<i className='fas fa-check' style={{color:'#132f7a'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                    <Button variant='primary' className='btn-sm'>
                                    EDIT <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                <Button variant='danger' className='btn-sm'
                                onClick={()=> deleteHandler(user._id)}>
                                   DELETE <i className='fas fa-trash'></i>     
                                </Button>
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

export default UserListScreen;