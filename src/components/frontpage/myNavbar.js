import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';



class MyNavbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const itemMapping = this.props.items.map((item, index) => {
                return(
                    <NavItem key={index} eventKey={index+1}>
                        {item}
                    </NavItem>
                );
        });

        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">{this.props.title}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {itemMapping}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;