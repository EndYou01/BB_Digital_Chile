import { data } from "../../data/data";

export const getProductByID = (id)=>{

    return data.find( prod => prod.Sku == id)

}