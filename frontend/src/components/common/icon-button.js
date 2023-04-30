export default function IconButton(props) {
    const {children, className, onClick, ...otherProps} = props;


    return (
        <div {...props} className={`${className} flex justify-center items-center bg-transparent
         rounded-full w-8 h-8 p-1`}>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}