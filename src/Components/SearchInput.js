import React from 'react';
import { Card, FormControl, InputGroup, Button, } from 'react-bootstrap';

const SearchInput = (props) => {

  function getValue() {
    let input = document.getElementById('input').value;
    props.getValue(input);
    document.getElementById('input').value = "";
  }
    return (
      <Card>
        <InputGroup className="mb-12">
        <FormControl
          id='input'
          type="text"
          // value={value}
          placeholder="Search Books..."
          
        />
          <Button onClick={getValue} variant="outline-secondary">Button</Button>
        </InputGroup>
      </Card>
    )
}

export default SearchInput;