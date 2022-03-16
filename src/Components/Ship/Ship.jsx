function Ship(props) {

  // console.log(props.data)


   
    return (
        <>




             <tr className="border-b">
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.reference}</td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.nationality}</td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.tonnage}</td>
            </tr> 
                    
        </>
      );
}

export default Ship;