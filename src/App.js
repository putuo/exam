import React, { useState ,Component} from 'react';
import PropTypes from 'prop-types'
 
class InputNumber extends Component{
	constructor(props){
		super(props)
		this.state = {
			innerValue: ''
		}
	}
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func, 
	}

	static defaultProps = { 
		onChange: () => {}
	}

	get isControl(){
		return 'value' in this.props
	}

	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
	}


	render() {
		return (
			<input type="number" value={this.value}

			onChange={(e) => {
				if(!this.isControl){
					this.setState({
						innerValue: e.target.value
					})
				}
				this.props.onChange(e)
			}}
		/>
		)
	}

	componentDidMount() {
		this.setState({
			innerValue: this.props.defaultValue
		})
	}

}


function InputNumber2(props) {
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
