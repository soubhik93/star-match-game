import React from 'react';
import utils from '../maths-utils.js'

const StarDisplay = props => {
	return <>
		{utils.range(1, props.stars).map(starId =>
			<div key={starId} className="star" />)
		}
	</>
}

export default StarDisplay;