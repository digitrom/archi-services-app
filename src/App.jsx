import './App.css'
import {useState} from "react";
import FilterableServiceTable from "./FilterableServiceTable.jsx";

function App() {

    const services = [
        {name: "Sketch project", category: "Architecture", isProvided: true, price: "10$/m2"},
        {name: "Architectural project", category: "Architecture", isProvided: true, price: "15$/m2"},
        {name: "Structural project", category: "Architecture", isProvided: false, price: "20$/m2"},
        {name: "Express", category: "Interior Design", isProvided: true, price: "10$/m2"},
        {name: "Standard", category: "Interior Design", isProvided: true, price: "12$/m2"},
        {name: "Premium", category: "Interior Design", isProvided: true, price: "15$/m2"},
        {name: "VIP", category: "Interior Design", isProvided: false, price: "20$/m2"},
        {name: "Start", category: "Landscape Design", isProvided: true, price: "5$/m2"},
        {name: "Full", category: "Landscape Design", isProvided: false, price: "8$/m2"},
    ]

    const [isProvidedOnly, setIsProvidedOnly] = useState(false)
    const [filterText, setFilterText] = useState('')


    return (
        <>
            <FilterableServiceTable
                services={services}
                onIsProvidedChange={setIsProvidedOnly}
                isProvidedOnly={isProvidedOnly}
                filterText={filterText}
                onFilterTextChange={setFilterText}
            />

        </>
    )
}

export default App
