import React from "react";

export default function SearchBar ({onIsProvidedChange, isProvidedOnly, filterText, onFilterTextChange}) {
    return (
        <>
            <form>
                <input type={"text"}
                value={filterText}
                       placeholder="Search..."
                       onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label>
                    <input type="checkbox"
                           checked={isProvidedOnly}
                           onChange={(e) => onIsProvidedChange(e.target.checked)}/>
                    {' '}
                    Only show available services
                </label></form>

        </>
    )
}