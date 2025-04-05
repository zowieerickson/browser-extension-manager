import { useState } from 'react';
import data from '../data.json';
import '../styles/ExtensionCard.css'

export default function ExtensionCard() {
    const [allExtensions, setAllExtensions] = useState(data)
    const [viewFilter, setViewFilter] = useState("all")
    let arr = allExtensions


    const deleteExtension = (id) => {
        console.log(viewFilter)
        setAllExtensions(allExtensions.filter((extension) => extension.name !== id))
    }

    const toggleChecked = (id) => {
        setAllExtensions(prevExtensions => 
            prevExtensions.map(ext => {
                console.log(prevExtensions)
                if (ext.name === id) {
                    console.log(ext)
                    return {...ext, isActive: !ext.isActive}
                } else {
                    return ext
                }
                // return ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
            })
        )
    }

    const handleActive = function() {
        setViewFilter("active")
    }

    const handleInactive = function() {
        setViewFilter("inactive")
    }

    const handleAll = function() {
        setViewFilter("all")
    }

    const Items2 = function() {

        if (viewFilter === "all") {
            arr = allExtensions;
        } else if (viewFilter === "active") {
            arr = allExtensions.filter((ext) => {
                return ext.isActive === true
            })
        }  else if (viewFilter === "inactive") {
            arr = allExtensions.filter((ext) => {
                return ext.isActive === false
            })
        }

        return arr.map(item =>
            <article key={item.name} className='extension card'>
                <div className='card-info'>
                    <img src={item.logo} />
                    <div className='card-copy'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className='card-settings'>
                    <button onClick={() => deleteExtension(item.name)} className='btn-remove'>Remove</button>
                    <label className="switch">
                        <input 
                            onChange={() => toggleChecked(item.name)}
                            type="checkbox"
                            checked={item.isActive}
                            id="check"
                            className='toggle'/>
                        <span className="slider"></span>
                    </label>
                </div>
            </article>
        )
    }
    
    return (
        <>
            <h1 className='extensions-list-title'>Extensions List</h1>
            <button onClick={handleAll}>All</button>
            <button onClick={handleActive}>Active</button>
            <button onClick={handleInactive}>Inactive</button>
            <section className='extensions-list'><Items2/></section>
        </>
    )
}