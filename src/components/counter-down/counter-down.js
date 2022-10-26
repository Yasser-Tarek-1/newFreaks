import React from 'react';
import { useSelector } from "react-redux";

import Clock from './clock';

import './counter-down.css';

export default function CounterDownComponent() {
  const [deadline, setDeadline] = React.useState("November, 3, 2022")
  const language = useSelector((state) => {
    return state.language.language;
  });
  return (
    <div className='counter-down-component'>
      <div>
        <h4>
          {language === 'ar' ? "3 و 4 نوفمبر" : "November 3rd & 4th "}
        </h4>
      </div>
      <Clock deadline={deadline} displaySec={true} />
    </div>
  )
}
