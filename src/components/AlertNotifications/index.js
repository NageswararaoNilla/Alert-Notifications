import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotification extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Alert Notifications</h1>
        <Notification>
          <div className="message-container">
            <div className="icon-container">
              <AiFillCheckCircle className="success-icon green" />
            </div>
            <div>
              <h1 className="green">Success</h1>
              <p>You can access all the files in the folder</p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="message-container">
            <div className="icon-container">
              <RiErrorWarningFill className="success-icon red" />
            </div>
            <div>
              <h1 className="red">Error</h1>
              <p>
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="message-container">
            <div className="icon-container">
              <MdWarning className="success-icon yellow" />
            </div>
            <div>
              <h1 className="yellow">Warning</h1>
              <p>Viewers of this file can see comments and suggestions</p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="message-container">
            <div className="icon-container">
              <MdInfo className="success-icon blue" />
            </div>
            <div>
              <h1 className="blue">Info</h1>
              <p>Anyone on the internet can view these files</p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotification
