import {useState} from 'react'; // hook provided to us by React

function Form({addCreatureFunctionProp}) {

    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit!');
        addCreatureFunctionProp(newCreatureName, newCreatureOrigin);
        setNewCreatureName('');
        setNewCreatureOrigin('');
    };

    return (
        <>
            <h2>Add Creaturezzzz</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                onChange={ (event) => setNewCreatureName(event.target.value) } 
                value={newCreatureName}
                />
                <label>Origin:</label>
                <input 
                onChange={ (event) => setNewCreatureOrigin(event.target.value) } 
                value={newCreatureOrigin}/>
                <button type="submit">Add New Creature</button>
            </form>
        </>
    )
}

export default Form;