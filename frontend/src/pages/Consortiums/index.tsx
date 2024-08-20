import React, { useState } from 'react';
import ConsortiumsCard from '../../components/consortiumsCard';
import MainButton from '../../components/mainButton';
import BorderButton from '../../components/borderButton';
import Pagination from '../../components/layout/pagination'; // Assuming you've imported the Pagination component
import './style.scss';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import OutsideClickHandler from 'react-outside-click-handler';
import Filter from '../../assets/svg/filter.svg';
// import DropdownButton from '../../components/dropdownButton';

interface ItemType {
  id: number;
  title: string;
  email: string;
  adress: string;
  phonenumber: string;
}

export default function Consortiums() { 
  const [showLevel, setShowLevel] = useState(false);
	const [level, setLevel] = useState("");


	const toggleRole = () => {
		setShowLevel(!showLevel);
	};
  const items: ItemType[] = [
    {
      id: 1,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576",
    },
    {
      id: 2,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 3,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 4,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 5,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 6,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 7,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 8,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 9,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 10,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    },
    {
      id: 11,
      title: "Consortiums1",
      email: "11@outlook.com",
      adress: "123 Main Street, Anytown, USA",
      phonenumber: "+1 (928) 321-4576"
    }
  ];

  const itemsPerPage = 6; // Define the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = items.slice(startIndex, endIndex);
  const [buttonFilter, setButtonFilter] = useState(true);

  const toggleDropdown = () => {
    setButtonFilter(!buttonFilter);
  };


  return (
    <div className='page'>
      <div className='page-title'>
        <div className='title'>Consortiums</div>
        <div className='left-buttons'>
          <BorderButton title="Create New Consortiums "/>
          <MainButton title="View" />
        </div>
      </div>
      <div className="filter-button">
      <OutsideClickHandler
							onOutsideClick={() => {
								if (showLevel === true) {
									setShowLevel(false);
								}
							}}
						>
							<div className='selectRole' onClick={toggleRole}>
              <div className='dropdown-button'><img src={Filter} /></div> 
							<div className='dropown-name'>{level === "" ? "Filter by" : level}</div>
							<div className='dropdown-view'>{showLevel ? <IoIosArrowUp color='#949CA9' /> : <IoIosArrowDown color='#949CA9' />}</div>
								{
									showLevel && <div className='dropBox'>
										<div className='role' onClick={() => setLevel("Administrator")}>Administrator</div>
										<div className='role' onClick={() => setLevel("Consortium")}>Consortium</div>
										<div className='role' onClick={() => setLevel("Employer")}>Employer</div>
									</div>
								}
								</div>
						</OutsideClickHandler>
            </div>
       <div className="consortiums-container">
        <div className="consortiumsCardBox">
          {currentItems.map((item, index) => (
            <ConsortiumsCard key={index} title={item.title} email={item.email} adress={item.adress} phonenumber={item.phonenumber} />
          ))}
        </div>
      </div>
      <div className="pagination">
      <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
    </div>
  );
}