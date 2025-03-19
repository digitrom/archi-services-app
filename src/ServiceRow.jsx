import React from "react";

export default function ServiceRow ({service}) {

    let serviceName = service.isProvided ? service.name :
        <span style={
            {color: "red"}
        }>
            {service.name}
        </span>

    let servicePrice = service.isProvided ? service.price :
        <span style = {
            {color: "red"}
        }>
            {service.price}
        </span>

    return (
           <tr>
               <td>
                   {serviceName}
               </td>
               <td>
                   {servicePrice}
               </td>
           </tr>
    )

}