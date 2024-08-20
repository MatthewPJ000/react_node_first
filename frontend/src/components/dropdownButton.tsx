import React, { useState } from 'react';
import './component.scss';
import Filter from '../assets/svg/filter.svg';
import Group from '../assets/svg/Group.svg';

type Props = {
  title: string,
  key1?: string,
  key2?: string,
  key3?: string,
};

export default function DropdownButton({ title, key1, key2, key3 }: Props) {
  const [buttonFilter, setButtonFilter] = useState(false);

  const toggleDropdown = () => {
    setButtonFilter(!buttonFilter);
  };

  return (
    <button className='dropdown' onClick={toggleDropdown}>
      <div className='dropdown-button'><img src={Filter} alt='svg' />
      <div>{title}</div>
      <img src={Group} alt='svg' /></div>
      {buttonFilter && (
        <div className="dropdown-content">
          <a href={key1}>Name</a><br></br>
          <a href={key2}>Email</a><br></br>
          <a href={key3}>Phone Number</a>
        </div>
      )}
      </button>
    )
}