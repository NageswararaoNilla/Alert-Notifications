import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="alert-container">
      {children}
      <GrFormClose />
    </div>
  )
}

export default Notification
