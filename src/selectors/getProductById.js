import { data } from "../../data/data.js";

export const getProductByID = (id)=>{

    return data.find( prod => prod.Sku == id)

}