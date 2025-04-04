import { useState } from 'react';
import data from '../data.json';
import '../styles/ExtensionCard.css'

export default function ExtensionCard() {
    const [allExtensions, setAllExtensions] = useState(data)
    const [visibleExtensions, setVisibleExtensions] = useState(data)
    const [viewFilter, setViewFilter] = useState("all")

    const deleteExtension = (id) => {
        console.log(allExtensions)
        console.log(id)
        setVisibleExtensions(allExtensions.filter((extension) => extension.name !== id))
        console.log(allExtensions)
        console.log("trying to remove")
    }

    const toggleChecked = (id) => {
        setVisibleExtensions(prevExtensions => 
            prevExtensions.map(ext => {
                return ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
            })
        )
    }

    let filteredList;

    const handleActive = function() {
        setViewFilter("active")
        setVisibleExtensions(allExtensions)
        filteredList = allExtensions.filter((ext) => {
            return ext.isActive === true
        })
        setVisibleExtensions(filteredList)
    }

    const handleInactive = function() {
        setViewFilter("inactive")
        setVisibleExtensions(allExtensions)
        const filteredList = allExtensions.filter((ext) => {
            return ext.isActive === false
        })
        setVisibleExtensions(filteredList)
    }

    const handleAll = function() {
        setViewFilter("all")
    }

    const handleFilterSwitch = function() {
        console.log("test")
    }

    const Items2 = function() {
        let arr;
        if (viewFilter === "all") {
            arr = allExtensions
        } else {
            arr = visibleExtensions
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