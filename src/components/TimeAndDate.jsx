import { TimeAndDateList } from "../store"


const TimeAndDate = () => {
  return (
    <div className="date-cont">
        {TimeAndDateList.map((timedate) =>(
            <div key={timedate.id} className="split">
                <label>{timedate.label}</label>
                <input type="date" placeholder={timedate.placeholder} id="insert-image" />
            </div>
        ))}
    </div>
  )
}

export default TimeAndDate