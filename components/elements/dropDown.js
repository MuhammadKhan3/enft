import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {BiChevronDown} from 'react-icons/bi'

export default function SelectDropdown()  {
    const [toggle,setoggle]=useState( {
         dropdownOpen: false
        });
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

  const toggleHandler=()=> {
    setoggle(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

    return (
      <Dropdown className='dropdown-main' isOpen={toggle.dropdownOpen} toggle={toggleHandler}>
        <DropdownToggle className='toggle-last' >
                <div className=" ml-5 d-flex align-items-center c-pointer">
                        <div className='toggle-text'>
                             From <span className="withdraw-dropdown">Last 7 days</span>
                        </div>
                        <div className='toggle-icon'>
                             <BiChevronDown  size={20}/>
                         </div>
                </div>                                    
        </DropdownToggle>
        <DropdownMenu className='toggle-list'>
          <DropdownItem className='dropdownitem'>1 Week</DropdownItem>
          {/* <DropdownItem divider /> */}
          <DropdownItem className='dropdownitem'>1 Month</DropdownItem>
          {/* <DropdownItem divider /> */}
          <DropdownItem className='dropdownitem'>1 Year</DropdownItem>

        </DropdownMenu>
      </Dropdown>
    );
  

}