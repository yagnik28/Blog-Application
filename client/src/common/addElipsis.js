const addElipsis = (str, limit) => {
    return (str.length > limit ? str.substring(str, limit) + "..." : str);
} 

export default addElipsis;