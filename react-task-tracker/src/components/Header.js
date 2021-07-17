import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
            <header className ='header'>
                <h1>{title}</h1>
                <button className = 'btn'>Add</button>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'React Learning Project',
}
 
Header.propTypes = {
    titile: PropTypes.string.isRequired,
}

/* css in js 
   const headingStyle = {
    color: 'red', backgroundColor:'white'
} */

export default Header
