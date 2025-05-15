export function Input({label,id}){
    return <p className="control">
        <label htmlFor={id}></label>
        <input type="text" />
    </p>
}