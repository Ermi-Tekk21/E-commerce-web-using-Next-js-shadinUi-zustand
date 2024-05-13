"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/client/components/ui/sheet";
import { useCart } from "@app/client/stores/cart-store";

import React from "react";
import ProductCard from "../products/product-card";
import CartProduct from "./cart-product";
import { ScrollArea } from "../ui/scroll-area";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@app/client/lib/utils";

export default function Cart() {
  const cart = useCart();
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            class="cursor-pointer hover:fill-[#007bff] inline"
            viewBox="0 0 512 512"
          >
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"
            ></path>
          </svg>
        </span>
        <span className="absolute bg-red-500 top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full px-1">
          {cart.cartProducts.length}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Here is your cart</SheetTitle>
          <ScrollArea className="h-[calc(100vh_-_8rem)] pe-3">
            {cart.cartProducts.map((product) => (
              <CartProduct key={product} product={product} />
            ))}
            {!cart.cartProducts.length && (
              <div className="flex flex-col gap-10 w-full h-full justify-center items-center">
                <h1 className="text-center mt-16">your cart is empty</h1>
                <SheetTrigger asChild>
                  <a href="/"><Button>Go To Shop</Button></a>
                </SheetTrigger>
              </div>
            )}
          </ScrollArea>
          <div className="">
            <SheetTrigger asChild>

            <Link className={cn(buttonVariants(), "w-full")} href={"/checkout"}>

              Checkout
            </Link>
            </SheetTrigger>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
