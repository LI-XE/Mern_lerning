import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './components/Tab';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];
  
  const [ allTabs, setAllTabs] = useState(tabsArray);
  const [ tabIndex, setTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tab className="tab"
        allTabs = { allTabs }
        tabIndex = { tabIndex }
        setTabIndex = { setTabIndex }
      />
      <Display allTabs = { allTabs } tabIndex = { tabIndex } />
    </div>
  );
}

export default App;
