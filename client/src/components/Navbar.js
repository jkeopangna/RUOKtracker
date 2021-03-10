import React from 'react';
import './Navbar.css';
import {Navbar, Nav} from 'react-bootstrap';


function NavbarComponent() {
    return (

        <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="color-nav">
  <Navbar.Brand href="/"><img src="./images/logoIcon.png" alt="RUOK-icon" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/signup">Sign-up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



    )
}






// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton]= useState(true);


//     const handleClick = () => setClick(!click);

//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <= 960) {
//             setButton(false)
//         } else {
//             setButton(true)
//         }
//     };


//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//     return(
//         <>
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//                     {/* <img src=""></img> */}
//                 </Link>
//                 <div className="menu-icon" onClick={handleClick}>
//                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className="nav-item">
//                         <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                             Home
//                         </Link>
//                     </li>
//                 </ul>
//                     <li className="nav-item">
//                         <Link to="/clinics" className="nav-link-clinic" onClick={closeMobileMenu}>
//                             Find a Clinic
//                         </Link>
//                     </li>
//             </div>
//         </nav>

//         </>
//     )



// }

export default NavbarComponent;