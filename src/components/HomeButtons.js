import React from 'react';

export default function HomeButtons(props){

   
    return (

    <div className="homeButtons">
    <button className="homeButtons__touchdown" onClick={props.addHomeTD}>Home Touchdown</button>
    <button className="homeButtons__fieldGoal" onClick={props.addHomeFG}>Home Field Goal</button>
  </div>

    )
}

