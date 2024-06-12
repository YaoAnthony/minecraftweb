//people
import { useState } from "react"

//data
import { people } from "./constants"

const Person = ({ person }) => {
    return(
        <div className='glass p-4 rounded-lg shadow-box'>
            <img src={person.avatar} alt={person.name} className='w-32 h-32 object-cover rounded-full mx-auto' />
            <div className='text-center'>
                <h2 className='text-lg font-semibold'>{person.name}</h2>
                <p className='text-sm text-gray-400'>{person.role}</p>
            </div>
        </div>
    
    )
}

const PeopleList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {people.map((person) => (
                <Person key={person.id} person={person} />
            ))}
        </div>
    )
}

export default PeopleList;