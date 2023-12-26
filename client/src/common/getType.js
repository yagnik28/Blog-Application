const getType = (value, inputBody) => {
    if(value.params){
        return { params: inputBody }
    }
    else if(value.query){
        if(typeof inputBody === "object"){
            return { query: inputBody._id }
        }
        else{
            return { query: inputBody }
        }
    }
    return {};
}

export default getType;