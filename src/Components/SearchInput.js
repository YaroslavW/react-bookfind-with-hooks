import React, { useState } from 'react';
import { Card, FormControl } from 'react-bootstrap';

const SearchInput = (props) => {

const [value, setValue] = useState(props.value);

  function onChange(e) {
    setValue( e.target.value );
    props.onChange(value);
  }

  
    return (
      <Card>
        <FormControl
          type="text"
          value={value}
          placeholder="Search Books..."
          onChange={onChange.bind(this)}
        />
      </Card>
    )
}

export default SearchInput;