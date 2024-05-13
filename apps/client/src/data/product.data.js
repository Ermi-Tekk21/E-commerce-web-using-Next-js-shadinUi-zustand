"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function createProduct(data) {
  const res = fetcher(`/products`, {
    method: "PRODUCT",
    body: JSON.stringify(data),
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["PRODUCTS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getManyProducts(query) {
  const res = await fetcher(`/products?${query ?? ""}`, {
    method: "GET",
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getOneProduct(id) {
  const res = await fetcher(`/products/${id}`, {
    method: "GET",
    next: { tags: [`PRODUCTS:${id}`], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function updateProduct(id, data) {
  const res = await fetcher(`/products/${id}`, {
    method: "PRODUCT",
    body: JSON.stringify(data),
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["PRODUCTS", `PRODUCTS:${id}`] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function deleteProduct(id) {
  const res = await fetcher(`/products/${id}`, {
    method: "DELETE",
    next: { tags: ["PRODUCTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["PRODUCTS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}
