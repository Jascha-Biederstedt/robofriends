import React, { useState } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');

  const onSearchChange = event => {
    setSearch(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
