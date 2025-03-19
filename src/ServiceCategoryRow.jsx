import React from "react";

export default function ServiceCategoryRow ({category}) {
    return (
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    )
}