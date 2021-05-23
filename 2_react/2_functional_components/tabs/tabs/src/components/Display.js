import React from 'react';

const Display = (props) => {
    const { allTabs, tabIndex } = props;

    return(
        <div className="display">
            { allTabs[tabIndex].content }
        </div>
    )
}

export default Display;