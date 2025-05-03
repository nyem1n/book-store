import { Order, OrderDetailItem, OrderSheet } from "../models/order.model";
import { httpClient } from "./http";


export const order = async (orderData: OrderSheet) => {
    const response = await httpClient.post("/orders", orderData);
    return response.data;
};

// export const order = async (orderData: OrderSheet) => {
//     return await requestHandler<OrderSheet>('post', "/orders", orderData);
// };

export const fetchOrders = async () => {
    const response = await httpClient.get<Order[]>("/orders");
    return response.data;
};

// export const fetchOrders = async () => {
//     return await RequestHandler("get", "/orders");
// };

export const fetchOrder = async (id: number) => {
    const response = await httpClient.get<OrderDetailItem>(`/orders/${id}`);
    return response.data;
} 

// export const fetchOrder = async () => {
//     return await RequestHandler("get", `/orders/${id}`);
// };