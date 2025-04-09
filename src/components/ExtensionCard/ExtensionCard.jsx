import { useState } from 'react';
import data from '../../data.json';
import './ExtensionCard.css'
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal.jsx';
import NoExtensionsMessage from '../NoExtensionsMessage/NoExtensionsMessage.jsx';

export default function ExtensionCard( {isDarkMode} ) {
    const [allExtensions, setAllExtensions] = useState(data)
    const [viewFilter, setViewFilter] = useState("all")
    const [justToggledId, setJustToggledId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [extension, setExtension] = useState(null)
    const [extensionImg, setExtensionImg] = useState(null)
    const [selectedExtension, setSelectedExtension] = useState(null)

    const deleteExtension = (id) => {
        setAllExtensions(allExtensions.filter((extension) => extension.name !== id))
        setShowModal(false)
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
        setShowModal(false)
    }

    const handleInactive = function() {
        setViewFilter("inactive")
        setShowModal(false)
    }

    const handleAll = function() {
        setViewFilter("all")
        setShowModal(false)
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

    const checkIfDeleteExtension = function(id) {
        setExtensionImg(id.logo)
        setShowModal(true)
        setExtension(id.name)
        
        setSelectedExtension(id)
        console.log("Selected extensions", selectedExtension)
    }
    
    return (    
        <>
            <header className='extensions-header'>
                <h1 className='extensions-list-title'>Extensions List</h1>
                <div className='extension-controls'>
                    <button onClick={handleAll} className={viewFilter === "all" && "btn-active"}>All ({allExtensions.length})</button>
                    <button onClick={handleActive} className={viewFilter === "active" && "btn-active"}>Active ({activeExtensionsList.length})</button>
                    <button onClick={handleInactive} className={viewFilter === "inactive" && "btn-active"}>Inactive ({inactiveExtensionsList.length})</button>
                </div>
            </header>
            {filteredExtensions.length == 0 ? <NoExtensionsMessage title="No Active Extensions" description="You don't have any active extensions right now." imageColor={isDarkMode ? "#F25C54" : "#C7231A"} /> : 
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
                        <button onClick={() => checkIfDeleteExtension(item)} className='btn-remove'>Remove</button>
                        <label className="switch">
                            <input 
                                onChange={() => toggleChecked(item.name)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        toggleChecked(item.name)
                                    }
                                }}
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
            }
            {showModal && 
                (< ConfirmDeleteModal
                    extensionImg={selectedExtension.logo}
                    title={`Remove "${selectedExtension.name}"?`}
                    onConfirm={() => deleteExtension(extension)}
                    onCancel={() => setShowModal(false)}
                />)
            }

        </>
    )
}