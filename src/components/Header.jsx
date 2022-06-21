import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text }) {
  const headerStyle = { backgroundColor: 'royalblue', color: 'rosybrown' }

  return (
    <header style={headerStyle}>
      <div className='container' >
        <Link to='/' style={{ textDecoration: 'none' }}> <h2>{text}</h2></Link>

      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header