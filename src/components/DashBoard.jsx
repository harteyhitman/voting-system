import LogoutIcon from '../assets/log-out.png'
import { DashList } from '../store'

const DashBoard = () => {
    return (
        <main className='dashboard-main'>
            <div className="list-dash-con">
               {DashList.map((dash) =>(
                <div key={dash.id}>
                    <img src={dash.icons} alt="" />
                    <a href={`#${dash.id}`}><h4>{dash.texts}</h4></a>
                </div>
               ))}
            </div>
            <div className='logout-cont'>
                <img src={LogoutIcon} alt="" />
                <h4>Profile Setting</h4>
            </div>
        </main>
    )
}

export default DashBoard