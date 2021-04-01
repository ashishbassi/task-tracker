import PropTypes from 'prop-types'
import Button from './Button.js'


function Header({title}) {

    const onClick = () => {
        console.log('clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add Task' onClick={onClick}/>
        </header>
        
    )
}

Header.defaultProps = {
    title : "Default title"
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
