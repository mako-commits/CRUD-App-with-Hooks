import React, { useState } from 'react'

const AddLoadForm = props => {

  //this sets this form to an empty value after submitting the form which is the initial state of the form
  const initialFormState ={
    id:null,
    load_name:'',
    min_watts:'',
    max_watts:'',
    quantity:'',
    usage_hours:'',
    usage_days:''
  }
  const [load, setLoad]=useState(initialFormState)


  const handleInputChange = event => {
    const {name, value} =event.target
    setLoad({...load,[name]: value})
    console.log(event)
  }

  return(
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!load.load_name || !load.min_watts || !load.max_watts || !load.quantity || !load.usage_hours || !load.usage_days) //this prevents the form from submitting if all inputs are not filled
        return
         props.addLoad(load)
         setLoad(initialFormState)
      }}
    >
      <label>Name</label>
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



      <button>Add New Load</button>
    </form>

  )
}
export default AddLoadForm
