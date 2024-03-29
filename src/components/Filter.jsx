import React from 'react'

const Filter = (props) => {
  let category=props.category;
  let setCategory=props.setCategory; 
  function filterHandler(title){
    setCategory(title);
  } 
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {
        props.filterData.map((data) => {
          return <button
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-200 ${category===data.title?("border-2"):("")}`}
            key={data.id}
            onClick={()=>filterHandler(data.title)}

          >
            {data.title}
          </button>
        })
      }
    </div>
  )
}

export default Filter