function Button({title = "Log in"}){
    return(
        <div>
            <button className="w-32 h-10 bg-orange-300 rounded-lg font-medium">
                {title}
            </button>
        </div>
        
    )
}
export default Button;