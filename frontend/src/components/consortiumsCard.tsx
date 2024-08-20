import React, {useState} from 'react'
import myCompanyCard from '../assets/images/company.png'
import "./component.scss"

interface ConsortiumsProps {
  title?: string,
  email?: string,
  adress?: string,
  phonenumber?: string,
  children?: React.ReactNode,
  onClick?: any
}

export default function ConsortiumsCard({title, email, adress, phonenumber, children, onClick}: ConsortiumsProps) {
  const [activeTab, setActiveTab] = useState("View")
  // const [editModal, setEditModal] = useState(false)
  // const [currentUser, setCurrentUser] = useState<UserInfo | null>(null)
  return (
    <div className='consortiumsCard'>
      <div className='circleimage'>
        <img src={myCompanyCard} alt='svg'  />
      </div>
      <div className='noti-container'>
        <div className='noti-content'>
          <div className='title-part'><div className='title-word'>{title}</div></div>
          <div className='content-part'><div className='content-word'>{email}</div></div>
          <div className='content-part'><div className='content-word'>{adress}</div></div>
          <div className='content-part'><div className='content-word'>{phonenumber}</div></div>
          </div>
          <div className="tabBox1">
          <div className={`tab1 ${activeTab === "View" && "active"}`} onClick={() => setActiveTab('View')}>View</div>
          <div className={`tab1 ${activeTab === "Inactivate" && "active"}`} onClick={() => setActiveTab('Inactivate')}>Inactivate</div>
          {/* <div className={`tab ${activeTab === "users" && "active"}`} onClick={() => setActiveTab('users')}>Users</div> */}
        </div>
          </div>
          
            {children}
    </div>
  )
}