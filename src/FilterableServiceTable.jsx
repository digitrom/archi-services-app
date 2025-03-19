import React from "react";
import SearchBar from "./SearchBar.jsx";
import ServiceTable from "./ServiceTable.jsx";

export default function FilterableServiceTable({
                                                   services,
                                                   filterText,
                                                   isProvidedOnly,
                                                   onIsProvidedChange,
                                                   onFilterTextChange
                                               }) {
    return (
        <>
            <SearchBar filterText={filterText}
                       isProvidedOnly={isProvidedOnly}
                       onIsProvidedChange={onIsProvidedChange}
                       onFilterTextChange={onFilterTextChange}
            />
            <ServiceTable services={services}
                          isProvidedOnly={isProvidedOnly}
                          filterText={filterText}
            />
        </>
    )

}