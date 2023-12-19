import { Link } from "react-router-dom"

const ToggleMin = () => {
  return (
    <div className='toggle-min'>
     <Link to="/Login/Admin"><div>Admin</div></Link>  
      <Link to="/Login/Admin/UserAccount"><div>User</div></Link> 
    </div>
  )
}

export default ToggleMin