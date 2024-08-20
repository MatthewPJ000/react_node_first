import EditButton from "./borderButton"
import EditIcon from "../assets/svg/editIcon.svg"
import "./component.scss"
import { ReactNode } from "react"
interface departmentsProps{
    title: string;
    email: string;
    phoneNumber: string;
    operationtime: string;
    children?: ReactNode,
    }
export default function DepartmentsCard({title, email, phoneNumber, operationtime,children}: departmentsProps){
     return(
        <div className="departmentsContent">
        <div className="departmentsTitle">
            <div className="title-content">
            <div>{children}</div>
            {title}
            </div>
        </div>
        <div className="departmentsEmail">
            <div className="departmentsEmailContent">Email</div>
            <div >{email}</div>
        </div>
        <div className="departmentsPhoneNumber">
            <div className="departmentsPhoneNumberContent">Phone Number</div>
            <div >{phoneNumber}</div>
        </div>
        <div className="departmentsOperationTime">
            <div className="departmentsOperationTimeContent">Hours of Operation</div>
            <div >{operationtime}</div>
        </div>
        <div className="departmentsEdit">
        <EditButton title="Edit" icon={EditIcon} />
        </div>
        </div>
    )
}