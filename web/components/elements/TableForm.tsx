"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"


const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "Gender must be at least 2 characters.",
  }),
  age: z.number().min(1, {
    message: "Age must be at least 1.",
  }),
  email: z.string().email({
    message: "Invalid email address."
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  education: z.string().min(2, {
    message: "Education must be at least 2 characters.",
  }),
  occupation: z.string().min(2, {
    message: "Occupation must be at least 2 characters.",
  }),
  experience_years: z.number().min(1, {
    message: "Experience Years must be at least 1.",
  }),
  salary: z.number().min(1, {
    message: "Salary must be at least 1.",
  }),
  marital_status: z.string().min(2, {
    message: "Marital Status must be at least 2 characters.",
  }),
  number_of_children: z.number().min(1, {
    message: "Number Of Children must be at least 1.",
  }),
})

export default function TableForm() {
  const form = useForm<z.infer<typeof formSchema>>({resolver: zodResolver(formSchema), defaultValues: {
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    education: "",
    occupation: "",
    experience_years: "",
    salary: "",
    marital_status: "",
    number_of_children: "",
  }})

  // const router = useRouter()

  // const [shouldNavigate, setShouldNavigate] = useState(false)

  // useEffect(() => {
  //   if (shouldNavigate) {
  //     router.push("/message/success")
  //   }
  // }, [shouldNavigate, router])

  const router = useRouter()
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/message/success")
    try {
      const response = await fetch('http://localhost:8000/api/employees/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Data posted successfully');
      } else {
        console.log('Failed to post data');
      }
    } catch (error) {
      console.error('An error occurred while posting data:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-10 mb-10">
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Number field" {...field}
                      onChange={(e) => field.onChange(e.target.value === "" ? 0 : !isNaN(Number(e.target.value)) ? Number(e.target.value) : e.target.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="experience_years"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Years</FormLabel>
                  <FormControl>
                    {/* <NumericInput 
                      placeholder="Text field"
                      control={form.control}
                      name="experience_years"
                    /> */}
                    <Input placeholder="Number field" {...field}
                      onChange={(e) => field.onChange(e.target.value === "" ? 0 : !isNaN(Number(e.target.value)) ? Number(e.target.value) : e.target.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input placeholder="Number field" {...field}
                      onChange={(e) => field.onChange(e.target.value === "" ? 0 : !isNaN(Number(e.target.value)) ? Number(e.target.value) : e.target.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="lg:flex lg:space-x-8">
          <div className="w-full">
            <FormField
              control={form.control}
              name="marital_status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <FormControl>
                    <Input placeholder="Text field" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="number_of_children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number Of Children</FormLabel>
                  <FormControl>
                    <Input placeholder="Number field" {...field}
                      onChange={(e) => field.onChange(e.target.value === "" ? 0 : !isNaN(Number(e.target.value)) ? Number(e.target.value) : e.target.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
