import "./CheckList.css"
const CheckList = ({participants, checked, setChecked}) => {
    const handleCheck = (event) => {
      if (event.target.checked) {
        setChecked(checked.concat(event.target.value))
      } 
      else {
        setChecked(checked.filter(e => e !== event.target.value))
      }
    }
    return (
      <div>
          <div>Select project participants</div>
            {participants.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                {item}
              </div>
            ))}
      </div>
    )
  }

export default CheckList