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
import { Delete } from "lucide-react";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export default function CartProduct({ product }) {
  const cart = useCart();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>{product.name}</CardTitle>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => cart.removeFromCart(product.id)}
          >
            <X />
          </Button>
        </div>
        <div>
          <img src={product.url} alt="" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p>{product.totalPrice}</p>
          <div className="flex gap-4 items-center">
            <Button
              onClick={() => cart.minusProductAmount(product.id)}
              size="icon"
              variant="outline"
              disabled={product.amount <= 1}
            >
              <Minus />
            </Button>
            <span>{product.amount}</span>
            <Button
              onClick={() => cart.addProductAmount(product.id)}
              size="icon"
              variant="outline"
            >
              <Plus />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-2"></CardFooter>
    </Card>
  );
}
