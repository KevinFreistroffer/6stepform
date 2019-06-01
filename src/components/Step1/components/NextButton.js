import React from 'react';
import { Link } from 'react-router-dom';


const NextButton = (props) => {
  return (
	<div className="next section">
		<p>Please note that the data you share as part of this registration process will be managed in accordance with MSWA's <a href="#">Privacy policy</a></p>
		<button type="submit" onClick={() => {
			//props.nextStep(); 
		}}>Next</button>
	</div>
  )
}

export default NextButton;