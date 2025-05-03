import { Banner } from "../models/banner.model";
import { httpClient } from "./http";


export const fetchBanners = async () => {
    const response = await httpClient.get<Banner[]>("/banners");
    return response.data;
}

// export const resetPasswodrd = async (data: SignupProps) => {
//     const response = await httpClient.put("/users/reset", data);
//     return response.data;
// };