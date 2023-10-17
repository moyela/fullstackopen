const Numbers = ( {person} ) => {
    return (
        <li>{person.first_name} {person.last_name}</li>
    )
}

console.log('this is the numbers component returning list item name')

export default Numbers
