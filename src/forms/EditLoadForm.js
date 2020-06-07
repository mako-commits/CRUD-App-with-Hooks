import React,{ useState, useEffect} from 'react'

const EditLoadForm = props => {
  const [load, setLoad] = useState(props.currentLoad)

  useEffect(() => {
    setLoad(props.currentLoad)
  },[props])

  const handleInputChange = event => {
    const { name, value } = event.target

    setLoad({...load,[name]: value })
  }
  return(
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateLoad(load.id, load)
      }}
    >
      <label> Load Name</label>
      <input type="text" name="load_name" value={load.load_name} onChange={handleInputChange}/>

      <label>Min Watts</label>
      <input type="number" name="min_watts" value={load.min_watts} onChange={handleInputChange}/>

      <label>Max Watts</label>
      <input type="number" name="max_watts" value={load.max_watts} onChange={handleInputChange}/>

      <label>Quantity</label>
      <input type="number" name="quantity" value={load.quantity} onChange={handleInputChange}/>

      <label>Hours of Usage</label>
      <input type="number" name="usage_hours" value={load.usage_hours} onChange={handleInputChange}/>

      <label>Days of Usage</label>
      <input type="number" name="usage_days" value={load.usage_days} onChange={handleInputChange}/>

      <button>Update Load</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel </button>
    </form>
  )
}

export default EditLoadForm
