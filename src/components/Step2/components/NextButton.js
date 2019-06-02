import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const NextButton = (props) => {
  return (
	<div className="next section">
		<p>Please note that the data you share as part of this registration process will be managed in accordance with MSWA's <a href="#" target="_blank">Privacy policy</a></p>
		<Button variant="contained" type="submit" onClick={() => {
			//props.nextStep(); 
		}}>Next</Button> 
	</div>
  )
}

export default NextButton;