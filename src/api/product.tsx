import { ProductType } from "../types/product";
import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}

export const get = (id: string) => {
    const url = `/product/${id}`;
    return instance.get(url);
}

export const add = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product);
}

export const remove = (id: string) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}

export const update = (id: string, product: ProductType) => {
    const url = `/product/${id}`;
    return instance.patch(url, product);
}