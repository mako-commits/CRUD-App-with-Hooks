import React from 'react'


const LoadTable = (props) =>(


  <table>
    <thead>
      <tr>
        <th>Load Name</th>
        <th>Min Watt</th>
        <th>Max Watt</th>
        <th accessor="average_watt">Average Watt</th>
        <th>Quantity</th>
        <th>Total Watts</th>
        <th>Usage Hours</th>
        <th>Usage Days</th>
        <th>Average Watt-Hours</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.loads.length > 0 ? ( props.loads.map(load =>(
        <tr key={load.id}>
          <td>{load.load_name}</td>
          <td>{load.min_watts}</td>
          <td>{load.max_watts}</td>
          <td>{(parseInt(load.max_watts) + parseInt(load.min_watts))/2}</td>
          <td>{load.quantity}</td>
          <td>{((parseInt(load.max_watts) + parseInt(load.min_watts))/2)*load.quantity}</td>
          <td>{load.usage_hours}</td>
          <td>{load.usage_days}</td>
          <td>{(((parseInt(load.max_watts) + parseInt(load.min_watts))/2)*parseInt(load.quantity)*parseInt(load.usage_hours)*parseInt(load.usage_days))/7}</td>
          <td>
            <button onClick={() => {props.editRow(load)}} className="button muted-button">Edit</button>
            <button onClick={() => props.deleteLoad(load.id)} className="button muted-button">Delete</button>
          </td>
        </tr>
      ))
    ):(
      <tr>
        <td colSpan={9}>No Loads</td>
      </tr>
    )}

    </tbody>
    <tfoot>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    </tfoot>
  </table>



)


export default LoadTable
