import axios from 'axios'
import { useState, useEffect } from "react"
export default function Modal(props) {

  const [showModal, setShowModal] = props.toggle;
  const [data, setData] = useState({reference : '', nationality :'' , tonnage:''})

  useEffect(() =>{
  

    // It will be called before unmounting.
 return () => {
    console.log('componentWillUnmount!');
  };
  }
  
  ,[data])

  const  handleSubmit = () => {
    axios.post(`http://localhost:3000/api/v1/ships`, {
      reference: data.reference,
      nationality: data.nationality,
      tonnage: data.tonnage,
    })
    .then((response) => {
      
    }, (error) => {
      console.log(error);
    })
   
  }


  return (


    <>
     {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-ml font-semibold">
                   Create Ship
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="mb-4 p-4">
                  
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Reference"
                value={data.reference}
                  onChange={e => setData({...data, reference : e.target.value})}
                />
                </div>
  
                <div class="mb-4 p-4">
                 
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nationality"
                    value={data.nationality}
                    onChange={e => setData({...data, nationality : e.target.value})}
                    
                    />
                </div>
  
                <div class="mb-4 p-4">
                    
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="number" placeholder="Tonnage"
                    value={data.tonnage}
                    onChange={e => setData({...data, tonnage : e.target.value})}

                    />
                </div>
  
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}

                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}