import React from 'react'
// import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
// import SearchBox from './SearchBox'
import logo from '../img/logo.jpg'
// import { logout } from '../actions/userActions'

const Header = () => {
  // const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // const logoutHandler = () => {
  //   dispatch(logout())
  // }

  return (
    <header>
      <Navbar style={{backgroundColor:'#132f7a'}} variant='dark' expand="md"  collapseOnSelect fixed="top"  fluid="true">
        {/* <Container> */}
          <LinkContainer to='/'>
            <Navbar.Brand>
             <Image src={logo} alt="NPP" width="150px"  fluid  className='logo'/>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
           
            <Nav  defaultActiveKey="/home" className='ml-auto'>                
         
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
            
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/binreportslist'>
                    <NavDropdown.Item>Bin Reports</NavDropdown.Item>
                  </LinkContainer>                 
                  <div className="dropdown-divider"></div>
                </NavDropdown>
              )}
           
             {userInfo ? (                
                  <LinkContainer to='/dashboard'>
                    <Nav.Link >Dashboard</Nav.Link>
                  </LinkContainer>                
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                   Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </header>
  )
}

export default Header
