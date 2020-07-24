import React from 'react';
import './App.css';

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Panel } from './components/Panel';

const SELECTED_KEY = 'selected';

const regions = [
  'All Regions', 'North', 'East', 'South', 'West'
];

function App() {
  const [selected, setSelected] = React.useState(
    parseInt(localStorage.getItem(SELECTED_KEY), 10) || 0
  );

  const onTabSelect = (e) => {
    setSelected(e.selected);
    localStorage.setItem(SELECTED_KEY, e.selected);
  }

  return (
    <>
      <h1>
        <span role="img" aria-label="">🍕</span>
        Pizza-o-matic
        <span role="img" aria-label="">🍕</span>
      </h1>

      <TabStrip
        selected={selected}
        onSelect={onTabSelect}
        tabPosition="left"
      >
        {regions.map(region => (
          <TabStripTab title={region} key={region}>
            <Panel region={region} />
          </TabStripTab>
        ))}
      </TabStrip>
    </>
  );
}

export default App;
