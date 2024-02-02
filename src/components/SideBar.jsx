import React from 'react';
import './SideBar.css';
import './root.css'

const sideBar = () => {
    $(document).ready(function () {
        $('.menu-tab').click(function () {
            $('.menu-hide').toggleClass('show');
            $('.menu-tab').toggleClass('active');
        });
        $('a').click(function () {
            $('.menu-hide').removeClass('show');
            $('.menu-tab').removeClass('active');
        });
    });

  return (
    <div>
      <div class="menu-hide menu-bg">  
        <div className='side-nav flex  justify-between align-center px-[16px] py-[10px] '>
          <div>
          <div className="side-nav-item">
            <img className='w-[18px]' src="https://angular-material.fusetheme.com/assets/images/logo/logo.svg" alt="" /> 
          </div>
          </div>
          <div className='flex'>
          <div className="side-nav-item w-[15px] me-2 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
            </svg>
          </div>
          <div className="side-nav-item  w-[15px] text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          </div>
      </div> 
      </div>
    </div>
  );
}

export default sideBar;
