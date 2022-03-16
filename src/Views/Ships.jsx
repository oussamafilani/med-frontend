import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import Ship from '../Components/Ship/Ship'
import AppButton from "../Components/AppButton";
import Modal from "../Components/Modal/ShipModal";

function Ships() {

    const [toggle, setToggle] = useState(false)


    const { data: quote, loading, error } = useFetch('http://localhost:3000/api/v1/ships');




    return (
        <>
        { loading && <p>{loading}</p> }

        { quote &&
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
           <div className="container mx-auto">
           <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">Ships</h1>
                <AppButton>
                    <span onClick={() => setToggle(!toggle)}>
                        New Ship
                    </span>
                </AppButton>
            </div>
              
                <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gray-50 rounded shadow">
                        <table className="min-w-full">
                        <thead className="border-b">
                              <tr>
                                <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left" >Reference</th>
                                <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left" >Nationality</th>
                                <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left" >Tonnage</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                            quote?.data?.map((quote, index) =>
                            <Ship key={quote._id}  data = {quote}/>
                            )
                            } 

                        </tbody>
                            
                        </table>
                    </div>
            </div>
        </div>
                






                 <Modal toggle={[toggle, setToggle]}/>

             </div>
            </div>
         </div>
}
{ error && <p>{error}</p> }
       
       </>
      );
}

export default Ships;