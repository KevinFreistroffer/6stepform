import React from 'react'; 

export const StepHeader = (props) => {
    return (
	    <div className="step-header section">
        	{props.children}
    	</div>    		
    ); 
};

export default StepHeader;
