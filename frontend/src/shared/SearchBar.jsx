import React from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg='12'>
      <div className='search__bar'>
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group">
            <span>
              <i className="ri-search-line"></i>
            </span>
            <div>
              
              <input type="text" placeholder='Enter your search here' style={{ width: '500px'}}/>
            </div>
          </FormGroup>

          <span className='search__icon' type='submit'>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
