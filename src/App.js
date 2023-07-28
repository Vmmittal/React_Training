// import logo from './logo.svg';
import './index.css';
import img1 from './images/imag.jpg'
import img2 from './images/22.jpg'
import img3 from './images/download.jpg'
import img4 from './images/32.jpg'

function App() {
  return (
    <div>
       <p className="heading">Popular Products</p>
       <hr></hr>
       <table className='tablex'  style={{ margin: 'auto' }}>
          <tr>
              <td >
              <img src={img1} alt="Image1" width="280" height="150" />
              </td>
              <td style={{textAlign: 'left' }} className='mrgnryt'>61</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Haught or not</p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>High-minded or absent-minded? You Decide</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by:</p>
                </td>
          </tr>
          <tr>
          <td >
              <img src={img2} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>54</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Supermajority:The Fantasy Congress League  </p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Earn Points when your favorite politicians pass legislature.</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by:</p>
                </td>
          </tr>
          <tr>
          <td >
                <img src={img3} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>27</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Haught or not</p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>High-minded or absent-minded? You Decide</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by:</p>
                </td>
          </tr>
          <tr>
          <td >
              <img src={img4} alt="Image1" width="280" height="150" />
              </td>
              <td className='mrgnryt'>6</td>
              <td>
                <p style={{textAlign: 'left'}} className='fnt'>Supermajority:The Fantasy Congress League  </p><br></br>
                <p style={{textAlign: 'left'}} className='bold'>Earn Points when your favorite politicians pass legislature.</p><br></br>
                <p style={{textAlign: 'left'}}>Submitted by:</p>
                </td>
          </tr>
         
          
       </table>
    </div>
    
    
  );
}

export default App;
