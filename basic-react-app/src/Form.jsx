function handleFormSubmit(event){
    event.preventDefault();
    console.log("submited!");
}

export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>
    );
}