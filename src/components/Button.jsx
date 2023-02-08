const Button = (props) => {
    const buttonStyle = {
        padding: '0.5em 1em',
        backgroundColor: '#5D3891',
        color: '#f5f5f5',
        border: 'none',
    }

    return (
        <button style={buttonStyle}  onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;