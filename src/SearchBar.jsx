import React from "react";

export default function SearchBar ({onIsProvidedChange, isProvidedOnly, filterText, onFilterTextChange}) {
    return (
        <>
            <form>
                <input type={"text"}
                value={filterText}
                       placeholder="Search..."
                       onChange={onFilterTextChange}
                />
                <label>
                    <input type="checkbox"
                           checked={isProvidedOnly}
                           onChange={onIsProvidedChange}/>
                    {' '}
                    Only show available services
                </label></form>

        </>
    )
}