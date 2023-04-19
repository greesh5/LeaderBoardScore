import React, { useState } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Dashboard = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;
    const data = { name, score };
    let scoreData = JSON.parse(localStorage.getItem('scoreData')) || [];
    scoreData.push(data); 
    localStorage.setItem('scoreData', JSON.stringify(scoreData));
    console.log(localStorage)
    alert('Score added successfully!');
    setName('');
    setScore('');
    history.push('/score');
  };
  
  return (
    <div className="container mt-5" style={{background:"#FFF",padding:"20px"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4>Add Score</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Player Name:</label>
              <input
                type='text'
                id='name'
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Score:</label>
              <input
                type='text'
                id='score'
                className="form-control"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type='submit'>Add Score</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








