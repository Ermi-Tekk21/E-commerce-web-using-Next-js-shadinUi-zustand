"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@app/client/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@app/client/components/ui/form";
import { Input } from "@app/client/components/ui/input";
import { createProductSchema } from "@lib/common";
import { Textarea } from "../ui/textarea";
import useMutation from "@app/client/hooks/use-mutation";
import { createProduct } from "@app/client/data/product.data";

export default function ProductForm() {
  const { startMutation, isMutating } = useMutation();
  const form = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  console.log({ isMutating });
  function onSubmit(values) {
    startMutation(async () => {
      const result = await createProduct(values);
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title.." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="content.." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >
          {isMutating ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
