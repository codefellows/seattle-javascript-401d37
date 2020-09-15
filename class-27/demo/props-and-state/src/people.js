import React from 'react';
import './styles.scss';

const People = (props) => {

  return (
    <div className={`loading-${props.loading}`}>
      <h3>Count: {props.count}</h3>
      <ul>
        {Object.keys(props.people).map((key, idx) => {
          return (
            <li key={idx}>
              <a href={props.people[key]}>{key}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )

}

export default People;
