import React from 'react'

function Notification({showAlert}) {

  return (

    <div>Notification

        <p>{showAlert ==true ? "You have a new notification!" : "There are no notifications."}</p>
    </div>
  )
}

export default Notification