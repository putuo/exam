import React, { useState } from 'react';


function InputNumber(props) { 
	return (		
	 	<input type='number' {...props}  />
	)
}



function App() {
	const [value, setValue] = useState('111')
	return (
		<div>
			<div>value值：{value}</div>

		 
			<InputNumber value={value} onChange={e => { 
				setValue(e.target.value)
			}} />

		 
			<InputNumber defaultValue={value} onChange={e => {
				 console.log(e.target.value);
			}} />
		</div>
	)
}



export default App
