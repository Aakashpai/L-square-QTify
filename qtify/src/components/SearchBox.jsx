import React from 'react'

const SearchBox = ({placeholder}) => {
  return (
    <div className='d-flex align-items-center'>
        <input type='text' placeholder={placeholder}/>
        <div className='icon-box'>
            <i className="bi bi-search"></i>
        </div>
    </div>
  )
}

export default SearchBox