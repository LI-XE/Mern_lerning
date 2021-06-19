import React from 'react';
import { Spinner } from 'react-bootstrap';

const Display = (props) => {
    const { allTabs, tabIndex } = props;

    return(
        <div className="display">
            <Spinner animation="border" variant="primary" /><hr/>
            { allTabs[tabIndex].content }
        </div>
    )
}

export default Display;