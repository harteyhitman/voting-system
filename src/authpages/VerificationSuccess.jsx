import SuccessImg from '../assets/success-img.png'
import Button from '../components/Button'
const VerificationSuccess = () => {
  return (
    <div className='ver-success'>
       <h1>Elect.NG</h1>
       <img src={SuccessImg} alt="" />
       <h2>Verification Successful</h2>
       <p>Welcome to Elect.Ng</p>
       <div>
         <Button label="Go to Home"/>
       </div>
      
    </div>
  )
}

export default VerificationSuccess