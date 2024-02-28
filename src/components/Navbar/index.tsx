import { hstack } from "../../../styled-system/patterns"; 
import { css } from '../../../styled-system/css'

const Navbar = () => {
  return (
    <nav className={hstack({ h: '100px', bg: 'hsl(209, 23%, 22%)', color: 'hsl(0, 0%, 100%)', padding: '10px', boxShadow: ' #cccccc 0px 5px 15px 3px' })}>
      <h6 className={css({ fontWeight: 800 })}> Where in the World?</h6>
    </nav>
  );
}



export default Navbar;