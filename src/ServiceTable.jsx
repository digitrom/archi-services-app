import React from "react";
import ServiceCategoryRow from "./ServiceCategoryRow.jsx";
import ServiceRow from "./ServiceRow.jsx";

export default function ServiceTable({services, isProvidedOnly, filterText}) {
    let row = []

    let lastCategory = null

    services.forEach(function (service) {
        if (service.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }
        if (isProvidedOnly && !service.isProvided) {
            return
        }
        if (service.category !== lastCategory) {
            row.push(
                <ServiceCategoryRow category={service.category}
                                    key={service.category}/>
            )
        }
        row.push(
            <ServiceRow service={service}
                        key={service.name}/>
        )

        lastCategory = service.category
    })


    return (
        <table>
            <thead>
            <tr>
                <th>Service name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{row}</tbody>
        </table>
    )
}