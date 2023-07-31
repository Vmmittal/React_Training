

function Header(){
    return (
        <div>
            <img src = {require('./images/download.png')} alt='logo2' height='38' width='300' className='logo' />
        <div className='maindiv'>
            <div className='navbar'>
              <ul >
                <li>Products</li>
                <li>For Teams</li>
                <li>Support</li>
              </ul>
            </div>
           
            <div className='navbar2'>
              <ul>
                <button>Try Now</button>
                {/* <li>Try Free</li> */}
                <li>Buy Now</li>
                <li>Login</li>
              </ul>
            </div>
                
        </div>
        </div>  
    )
}

export default Header;