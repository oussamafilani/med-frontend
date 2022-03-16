function Table(){
    return(
        <>
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


                        <tr className="border-b">
                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"></td>
                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"></td>
                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"></td>
                        </tr>
                           

                        </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Table;


