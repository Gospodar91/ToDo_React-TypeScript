import React from "react";
import {useHistory} from  'react-router-dom'
export const AboutUs: React.FC = () => {
    const history=useHistory()
  return (
    <>
      <h1>Info page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt
        culpa nihil asperiores quibusdam voluptates fugit sint ipsa maxime
        aliquam.
      </p>
      <button className='btn' onClick={()=>history.push('/')}>Back to todos</button>
    </>
  );
};
