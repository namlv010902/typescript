import instance from "./config"

export const getAll=()=>{
    return instance.get("products")
}
export const get=(id)=>{
    return instance.get("products/"+id)
}
export const remove=(id)=>{
    return instance.delete("products/"+id)
}
export const add=(formData)=>{
    return instance.post("products",formData)
}
export const update=(id,formData)=>{
    return instance.put("products/"+id,formData)
}
