function Reservation(props) {

  
  
     
      return (
          <>
               <tr className="border-b">
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{ new Intl.DateTimeFormat('en-IN').format(new Date(props.data.from))}</td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{ new Intl.DateTimeFormat('en-IN').format(new Date(props.data.to))}</td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.ship.reference}</td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.quay.reference}</td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{props.data.status}</td>
              </tr> 
                      
          </>
        );
  }
  
  export default Reservation;