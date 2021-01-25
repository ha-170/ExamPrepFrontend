import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Welcome</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>                    
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/external-api">External API</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;