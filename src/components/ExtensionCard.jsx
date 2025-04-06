import { act, useState } from 'react';
import data from '../data.json';
import '../styles/ExtensionCard.css'

export default function ExtensionCard() {
    const [allExtensions, setAllExtensions] = useState(data)
    const [viewFilter, setViewFilter] = useState("all")
    const [justToggledId, setJustToggledId] = useState(null)

    const deleteExtension = (id) => {
        setAllExtensions(allExtensions.filter((extension) => extension.name !== id))
    }

    const toggleChecked = (id) => {
        setJustToggledId(id)

        setAllExtensions(prevExtensions => 
            prevExtensions.map(ext => {
                if (ext.name === id) {
                    return {...ext, isActive: !ext.isActive}
                } else {
                    return ext
                }
            })
        )

        setTimeout(() => {
            setJustToggledId(null)
        }, 550)
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

    const filteredExtensions = viewFilter === "all"
        ? allExtensions
        : allExtensions.filter(ext =>
            ext.name === justToggledId ||
            (viewFilter === "active" ? ext.isActive : !ext.isActive)
        );

    const activeExtensionsList = allExtensions.filter(ext => {
        return ext.isActive;
    })

    const inactiveExtensionsList = allExtensions.filter(ext => {
        return !ext.isActive;
    })

    console.log(activeExtensionsList)

    
    return (
        <>
            <header className='extensions-header'>
                <h1 className='extensions-list-title'>Extensions List</h1>
                <div className='extension-controls'>
                    <button onClick={handleAll} className={viewFilter === "all" ? "btn-active" : ""}>All ({allExtensions.length})</button>
                    <button onClick={handleActive} className={viewFilter === "active" ? "btn-active" : ""}>Active ({activeExtensionsList.length})</button>
                    <button onClick={handleInactive} className={viewFilter === "inactive" ? "btn-active" : ""}>Inactive ({inactiveExtensionsList.length})</button>
                </div>
            </header>
            <section className='extensions-list'>
            {filteredExtensions.map(item => (
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
            ))}
            </section>

        </>
    )
}