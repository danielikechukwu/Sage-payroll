import React from 'react'
import './Header.css';

function Header() {

  return (

    <div className='parent__Header' >

      <div className='child__Header'>

        <div className='childHeader__firstText'>

          <div className='CHFN__abbrv'>SCL</div>

            <h4> Softcode Ltd.</h4>

        </div>

        <div className='childHeader__secondText'>
          
            <div className='CHSN__abbrv'>HO</div>

              <h5>Hammad Olamide</h5>

        </div>

      </div>      

    </div>
  )
}

export default Header
