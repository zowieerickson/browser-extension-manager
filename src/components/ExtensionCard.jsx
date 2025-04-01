import data from '../data.json';
import '../styles/ExtensionCard.css'
console.log(data)


export default function ExtensionCard() {
    const items = data.map(item =>
        <article key={item.name} className='extension card'>
            <img src={item.logo} />
            <div className='card-copy'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        </article>
    )
    
    return (
        <>
            <h1>Extensions List</h1>
            <section className="extensions-list">{items}</section>
        </>
    )
}