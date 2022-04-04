

import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'


function Search({ handleSearch, handleOnClick }) {
    return (
        <Form className="mb-3">
       
            <Form.Group as={Col}>
                <Form.Label>Organizations</Form.Label>
                <Form.Control onChange={handleSearch} placeholder="Search..."/> 
               
            </Form.Group>
            <Button onClick={handleOnClick}>Search</Button>
        </Form>
    )

}

export default Search