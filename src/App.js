import React,{useState, Fragment} from 'react';
import LoadTable from './tables/LoadTable'
import AddLoadForm from './forms/AddLoadForm'
import EditLoadForm from './forms/EditLoadForm'
import Columns from './tables/LoadTable'


const App = () => {
  const loadsData = [
    {
      id:1,
      load_name: 'TV',
      min_watts: 23,
      max_watts: 30,
      quantity: 2,
      usage_hours:4,
      usage_days:7
    },
    {
      id:2,
      load_name: 'Fridge',
      min_watts: 150,
      max_watts: 200,
      quantity: 2,
      usage_hours:4,
      usage_days:7
    },
    {
      id:3,
      load_name: 'Iron',
      min_watts: 500,
      max_watts: 650,
      quantity: 2,
      usage_hours:4,
      usage_days:7
    },
  ]

  const initialFormState={
    id:null,
    load_name:'',
    min_watts:'',
    max_watts:'',
    quantity:'',
    usage_hours:'',
    usage_days:''
  } //initial empty useState

  //Setting state
  const [loads, setLoads] = useState(loadsData)
  const [currentLoad, setCurrentLoad]= useState(initialFormState)  //to see and update the current load being updated
  const [editing, setEditing] = useState(false)

  //CRUD operations
  const addLoad = load => {
    load.id = loads.length + 1      //auto-incrementing the id when adding new load
    setLoads([...loads,load])      //the ...users code ensures that all the previous loads remain in the array
  }


  const deleteLoad = id => {
      setEditing(false)
    setLoads(loads.filter(load => load.id !== id)) //this will take the id of the load and filter them out of the load array

  }


  const updateLoad = (id, updatedLoad) =>{
    setEditing(false)

    setLoads(loads.map(load => (load.id === id ? updatedLoad : load)))
  }


  const editRow = load => {
    setEditing(true)

    setCurrentLoad({
      id: load.id,
      load_name:load.load_name,
      min_watts:load.min_watts,
      max_watts:load.max_watts,
      quantity:load.quantity,
      usage_hours:load.usage_hours,
      usage_days:load.usage_days
    })
  }



  return(

    <div className= "container">

      <h1>Daily AC Load Calculator</h1>
      <small>CRUD App with Hooks</small>
      <div className="flex-row">
        <div className="flex-small">
        {editing ? (
          <Fragment>
          <h2>Edit Load</h2>
          <EditLoadForm
            editing={editing}
            setEditing={setEditing}
            currentLoad={currentLoad}
            updateLoad={updateLoad}
            />
          </Fragment>
        ):(
          <Fragment>
            <h2>Add Load</h2>
            <AddLoadForm addLoad={addLoad}/>
          </Fragment>
        )}
        </div>
        <div className="flex-small">
          <h2>Load Table</h2>
          <LoadTable loads={loads} editRow={editRow} deleteLoad={deleteLoad} />

        </div>

      </div>

    </div>

  )

}

export default App;
