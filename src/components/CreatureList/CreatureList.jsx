function CreatureList({creatureListProp}) { // creatureListProp is another example of destructuring
    // write a jsx element
    return (
        <>
            {/* {JSON.stringify(props.creatureListProp)}  //props maps the array */}
            <h2>All Creatures</h2>
            <ul>
                {creatureListProp.map(creature => 
                    (<li key={creature.id}>{creature.name} is from {creature.origin}</li>)
                )}
            </ul>    
        </>
    )
}

export default CreatureList;    
// CreatureList starts uppercase because it is the name of a component

