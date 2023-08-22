import React, { useState } from "react"
import "./Employee.css"

function Employee(props) {
  const [position, setPosition] = useState(props.position)
  const [newPosition, setNewPosition] = useState("")

  const changePosition = () => {
    setPosition(newPosition)
    setNewPosition("")
    props.incrementEmployeeCount() // Incrementar el contador global
  }

  return (
    <div>
      <p1 className="info">
        ID: {props.id}, Name. {props.name}, Position: {position}, Salary: ${props.salary}
      </p1>
      <input
        type="text"
        value={newPosition}
        onChange={(event) => setNewPosition(event.target.value)}
        placeholder="Write new position"
      />
      <button
        className="button"
        onClick={changePosition}>
        Change position
      </button>
    </div>
  )
}

export default Employee
