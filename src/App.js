import React, { useEffect, useState } from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(robots => {
        setRobots(robots);
      });
  }, []);

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
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
