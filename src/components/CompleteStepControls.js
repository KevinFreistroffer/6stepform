import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CompleteStepControls = (props) => {
  return (
	<div className="complete-step-controls section">
		{props.children}
	</div>
  )
}

export default CompleteStepControls;