"use client"
import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';

const ButtonEditInput = (props: any) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(null);

  useEffect(()=> {
    if(props.title) {
      setInputValue(props.title);
    }
  }, [props.title]);

  const handleEditButtonClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };
   
  const toogleClick = () => {
    setEditing(false);
  }
  if(!inputValue)
    return <Loading/>;

  return (
    <>
      {editing ? (
        <>
        <input
            id="filename-input"
            type="text"
            className="form-control grow me-1 border-gray-100 rounded-md"
            style={{ maxWidth: "400px" }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
        />
        <button
            id="rename-confirm"
            className="text-gray-300 bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-lg px-2.5 py-2 me-2 leading-5"
            type="button"
            onClick={toogleClick}
        >
            <span className="icon-[material-symbols--sync-saved-locally-rounded] text-slate-600"></span>
        </button>
        </>
      ) : (
        <>
            <div id="filename" className="text-black-50 truncate me-1">{inputValue}</div>
            <button
                id="rename"
                className="text-gray-800 bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-2.5 py-2 me-2 leading-5"
                type="button"
                onClick={handleEditButtonClick}
            >
                <span className="icon-[material-symbols--edit-square] text-slate-600"></span>
            </button>
            
        </>
        
      )}
    </>
  );
};

export default ButtonEditInput;