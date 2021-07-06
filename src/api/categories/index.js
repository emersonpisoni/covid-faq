import { api } from "..";

export const getAllCategories = () => api.get('/categories')
export const updateCategories = (id, body) => api.put(`/categories/${id}`, body)
export const newCategory = body => api.post(`/categories`, body)
export const deleteCategory = id => api.delete(`/categories/${id}`)
