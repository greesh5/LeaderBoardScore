import React, { useState } from 'react';
const Score = () => {
  const [scoreData, setScoreData] = useState(JSON.parse(localStorage.getItem('scoreData')) || []);

  const handleDelete = (index) => {
    let newData = [...scoreData];
    newData.splice(index, 1);
    setScoreData(newData);
    localStorage.setItem('scoreData', JSON.stringify(newData));
  }

  return (
    <div className="container mt-5" style={{background:"#ADE4DB",padding:"20px"}}>
      <h4>Scores</h4>
      {scoreData.map((score, index) => (
        <div className="card mb-3" key={index} style={{padding:"10px"}}>
          <div className="card-body" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
            <h5 className="card-title">{score.name}</h5>
            <p className="card-text">Score: {score.score}</p>
            </div>
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Score;

