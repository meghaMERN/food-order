export default function Button({children, textOnly, className, ...pr}){
    let cssClasses = textOnly ? 'text-button':'button';
    cssClasses += '' + className
    return <button className={cssClasses}>{children}</button>
}