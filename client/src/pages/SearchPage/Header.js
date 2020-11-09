import React from 'react'
import './temp.scss'
export const Header = () => {
    return (
        <div className="headerSearchPage ">
          <div className="headerSearchIcon">
          <svg viewBox="0 0 32 32" height="30px" width="30px"  xmlns="http://www.w3.org/2000/svg">
        <title/>
        <g data-name="Layer 2" id="Layer_2">
        <path d="M13,23A10,10,0,1,1,23,13,10,10,0,0,1,13,23ZM13,5a8,8,0,1,0,8,8A8,8,0,0,0,13,5Z"/>
        <path d="M28,29a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/>
        </g><g id="frame"><rect className="cls-1" height="32" width="32"/></g></svg> 
          </div>
          <div> 
            <input className="headerSearchflexInput form-control" placeholder="Введите что-то" />
          </div>
          <div className="sortFilter">
            <div>
            <svg   version="1.1" viewBox="0 0 139 139" height="30px" width="30px"  xmlns="http://www.w3.org/2000/svg" >
              <line className="st0" id="XMLID_3_" x1="46.4" x2="46.4" y1="26" y2="112.2"/><line className="st0" id="XMLID_8_" x1="33.7" x2="46.4" y1="94.2" y2="111.2"/><line className="st0" id="XMLID_21_" x1="46.4" x2="59.1" y1="111.2" y2="94.2"/><rect className="st1" height="1.4" id="XMLID_23_" width="4.8" x="44" y="111.6"/><line className="st0" id="XMLID_9_" x1="92.7" x2="92.7" y1="26.4" y2="112.6"/><line className="st0" id="XMLID_7_" x1="92.7" x2="80" y1="27.4" y2="44.4"/><line className="st0" id="XMLID_6_" x1="105.4" x2="92.7" y1="44.4" y2="27.4"/><rect className="st1" height="1.4" id="XMLID_5_" width="4.8" x="90.3" y="25.6"/></svg>
            </div>
            <div >
            <svg fill="none" height="30" viewBox="0 0 28 28" width="30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M4.40675 7.25H3C2.44772 7.25 2 6.80228 2 6.25C2 5.69772 2.44772 5.25 3 5.25H4.40675C4.82853 3.94437 6.05398 3 7.5 3C8.94602 3 10.1715 3.94437 10.5933 5.25H25C25.5523 5.25 26 5.69772 26 6.25C26 6.80228 25.5523 7.25 25 7.25H10.5933C10.1715 8.55563 8.94602 9.5 7.5 9.5C6.05398 9.5 4.82853 8.55563 4.40675 7.25ZM5.75 6.25C5.75 5.2835 6.5335 4.5 7.5 4.5C8.4665 4.5 9.25 5.2835 9.25 6.25C9.25 7.2165 8.4665 8 7.5 8C6.5335 8 5.75 7.2165 5.75 6.25Z" fill="black" fillRule="evenodd"/>
<path clipRule="evenodd" d="M3 15.25H17.4458C17.8676 16.5556 19.093 17.5 20.5391 17.5C21.9851 17.5 23.2105 16.5556 23.6323 15.25H25C25.5523 15.25 26 14.8023 26 14.25C26 13.6977 25.5523 13.25 25 13.25H23.6323C23.2105 11.9444 21.9851 11 20.5391 11C19.093 11 17.8676 11.9444 17.4458 13.25H3C2.44772 13.25 2 13.6977 2 14.25C2 14.8023 2.44772 15.25 3 15.25ZM20.5391 12.5C19.5726 12.5 18.7891 13.2835 18.7891 14.25C18.7891 15.2165 19.5726 16 20.5391 16C21.5056 16 22.2891 15.2165 22.2891 14.25C22.2891 13.2835 21.5056 12.5 20.5391 12.5Z" fill="black" fillRule="evenodd"/><path clipRule="evenodd" d="M10.4067 23.25H3C2.44772 23.25 2 22.8023 2 22.25C2 21.6977 2.44772 21.25 3 21.25H10.4067C10.8285 19.9444 12.054 19 13.5 19C14.946 19 16.1715 19.9444 16.5933 21.25H25C25.5523 21.25 26 21.6977 26 22.25C26 22.8023 25.5523 23.25 25 23.25H16.5933C16.1715 24.5556 14.946 25.5 13.5 25.5C12.054 25.5 10.8285 24.5556 10.4067 23.25ZM11.75 22.25C11.75 21.2835 12.5335 20.5 13.5 20.5C14.4665 20.5 15.25 21.2835 15.25 22.25C15.25 23.2165 14.4665 24 13.5 24C12.5335 24 11.75 23.2165 11.75 22.25Z" fill="black" fillRule="evenodd"/></svg>
            </div>
          </div>
      </div>
    )
}