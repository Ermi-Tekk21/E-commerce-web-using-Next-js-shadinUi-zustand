"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import { useCart } from "@app/client/stores/cart-store";
import { Button } from "../ui/button";
import { useMemo } from "react";

export default function ProductCard({ product }) {
  const cart = useCart();
  
  const isAdded = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  return (
    <Card>
      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img
              src={product.url}
              alt="slow internet connection"
              className="h-full w-full object -cover object-top"
            />
          </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.price}</p>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button
          onClick={() =>
            isAdded ? cart.removeFromCart(product.id) : cart.addToCart(product)
          }
        >
          {isAdded ? "remove from cart" : "add to cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
