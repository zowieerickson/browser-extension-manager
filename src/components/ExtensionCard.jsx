import { useState } from 'react';
import data from '../data.json';
import '../styles/ExtensionCard.css'

export default function ExtensionCard() {
    const [extensions, setExtensions] = useState(data)

    const deleteExtension = (id) => {
        setExtensions(extensions.filter((extension) => extension.name !== id))
    }


    const items = extensions.map(item =>
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
                <p>Insert toggle here</p>
            </div>
        </article>
    )
    
    return (
        <>
            <h1 className='extensions-list-title'>Extensions List</h1>
            <section className='extensions-list'>{items}</section>
        </>
    )
}