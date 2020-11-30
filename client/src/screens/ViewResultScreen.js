import React, {useEffect} from 'react'
//import {LinkContainer} from 'react-router-bootstrap'
import {Row,Col,Card,Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listResults} from '../actions/pollingResultActions'


const ViewResultScreen = ({history}) => {

    const dispatch = useDispatch()
    
    const pollingResultsList = useSelector((state)=>state.pollingResultsList)
    const{loading, error, results} =pollingResultsList

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin
    
    const [parlimentary,setParlimentary] = useState(0)
    const [presidential,setPresidential] = useState(0)


    useEffect(()=>{  
              
            if(userInfo && userInfo.isAdmin){
                dispatch(listResults())
            }else{
                history.push('/')
            }
    // eslint-disable-next-line 
        
       //lets loop through and sum all the presidential and parlimentary results
        var parliment = 0;
        var president = 0;
        results.map(result=>{
            parliment += result.paliamentaryResult;
            president += result.presidentialResult;
         })
        setParlimentary(parliment);
        setPresidential(president);
    },[dispatch, history, userInfo])


    return (
        <>
            <h1>RESULTS</h1>
           <Row>
                    <Col md={8} className='mb-5'>
                        <Row>
                           <Col md={6} className='feature'>
                                <Card style={{ width: '18rem', backgroundColor:'#132f7a', color:'#ffffff' }}>                                
                                <Card.Body>
                                    <Card.Title>PRESIDENTIAL RESULTS</Card.Title>
                                    <Card.Text>                             
                                       {presidential}                            
                                    </Card.Text>
                                   
                                </Card.Body>
                                </Card>
                        
                           </Col> 
                           <Col md={6} className='feature'>
                                <Card style={{ width: '18rem', backgroundColor:'#132f7a', color:'#ffffff' }}>                                
                                <Card.Body>
                                    <Card.Title>PALIAMENTARY RESULTS</Card.Title>
                                    <Card.Text>
                                    {parlimentary}
                                    </Card.Text>
                                   
                                </Card.Body>
                                </Card>
                           </Col> 
                        </Row>      
                    </Col>            
                </Row>
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <>
                <Table striped responsive  hover bordered className='table-sm  '>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>AGENT NAME</th>        
                        <th>AGENT CONTACT</th>        
                        <th>POLLING STATION NAME</th>        
                        <th>PRESIDENTIAL RESULTS</th>      
                        <th>PALIAMENTARY RESULTS</th>        
                        <th>COMMENTS</th>        
                        <th>DATE</th>       
                      
                        {/* <th>PAID</th> 
                        <th>DELIVERED</th> 
                        <th>ACTIONS</th>  */}
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {results.map((result, count)=>(
                            
                            <tr key={result._id}>   
                            <td>{count+1}</td>                                                          
                               <td>{result.user && result.user.name}</td>
                               <td>{result.user && result.user.phone}</td>                               
                               <td>{result.pollingStationName}</td>
                               <td>{result.presidentialResult}</td>
                               <td>{result.paliamentaryResult}</td>
                               <td>{result.comment}</td>
                               <td>{result.createdAt.substring(0,10)}</td>
                              
                              
                            </tr>
                        ))}
                    </tbody>
                </Table>
                 
                </>
               
            )}
        </>
    );
};

export default ViewResultScreen;




