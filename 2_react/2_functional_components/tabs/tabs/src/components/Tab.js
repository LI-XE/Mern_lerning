import React from 'react';
import '../App.css';

const Tab = (props) => {
    const { allTabs, tabIndex, setTabIndex } = props;

    const tabStyle = (index) => {
        if (index === tabIndex) {
          return "selectedTab";
        } else {
          return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setTabIndex(index)
    }

    return(
        <div className="tab" >
            {
                allTabs.map((item, index) => (
                    <div className={`${tabStyle(index)}`} onClick ={ (e) => setSelectedTab(index)}>
                        { item.label }
                    </div>
                ))
            }
            {
                
            }
        </div>
    )
}

export default Tab;