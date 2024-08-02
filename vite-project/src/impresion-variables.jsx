// variable impression

// in javascript 

const data = {
    message: 'Hello World',
    name: 'John Doe',
    age: 25,
    country: 'United States'
} 

// function greeting() {

const greeting = (data)=> {
    return `Hello ${data.name}, you are ${data.age} years old, welcome to ${data.country}`
}

export const ImpresionVariables = () => {
    return (
        <>
            <h1>{greeting(data)}</h1>
            {/* I need to print the object 
            <code>{JSON.stringify ( data ) }</code> */}
        </>
        )
}