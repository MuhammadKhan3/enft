import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import '../../public/css/style.css'
function UserSwitch(props) {
  const [state, setState] = useState('creator');

  return (
    <div className='userSwitch'>
      <div className={`${state==='creator' ? 'userSwitchActive':''}`} onClick={()=>{setState('creator')}}>
        Creator
      </div>
      <div className={`${state==='collector' ? 'userSwitchActive' : ''}`} onClick={()=>{setState('collector')}}>
        Collector
      </div>
    </div>
  );
}

export default UserSwitch;