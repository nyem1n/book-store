import { BookReviewItem, BookReviewItemWrite } from "../models/book.model";
import { httpClient } from "./http";

export const fetchBookReview = async (bookId: string) => {
    const response = await httpClient.get<BookReviewItem[]>( `/reviews/${bookId}`);
    return response.data;
};

interface addBookReviewResponse {
    message: string;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
    const response = await httpClient.post<addBookReviewResponse>(`/reviews/${bookId}`, data);
    return response.data;
};

export const fetchReviewAll = async () => {
    const response = await httpClient.get<BookReviewItem[]>(`/reviews`);
    return response.data;
}