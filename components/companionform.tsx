"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 
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
import { subjects, voices, languages } from "@/constants"
import { Textarea } from "@/components/ui/textarea"
 
const formSchema = z.object({
  name: z.string().min(1, {message:'companion is requred.'}),
  subject: z.string().min(1, {message:'subject is required.'}),
  topic: z.string().min(1, {message: 'topic is required.'}),
  voice: z.string().min(1, {message: 'voice is required.'}),
  style: z.string().min(1, {message: 'style is required.'}),
  duration:z.coerce.number().min(1, {message: 'duration is required.'}),
  languages: z.string().min(1, {message: 'language is required.'}),

})


const CompanionForm = () => {
    // 1. Define your form.
  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
      languages: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.output<typeof formSchema>> = (values) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input placeholder="enter the companion name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} value={field.value}
              defaultValue={field.value}>
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                    {subjects.map((subject: string) => (
                        <SelectItem value={subject} key={subject} 
                        className="capitalize">
                            {subject}
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should this companion teach? </FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Derivatives & Integrals" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
         <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} value={field.value}
              defaultValue={field.value}>
                <SelectTrigger className="input">
                    <SelectValue placeholder="Select a Voice" />
                </SelectTrigger>
                <SelectContent>
                    { Object.keys(voices).map((voice: string) => (
                        <SelectItem value={voice} key={voice} 
                        className="capitalize">
                            {voice}
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speaking Style</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} value={field.value}
              defaultValue={field.value}>
                <SelectTrigger className="input">
                    <SelectValue placeholder="Select the style" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration</FormLabel>
              <FormControl>
               <Input type="number" placeholder="15" {...field} className="input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} value={field.value}
              defaultValue={field.value}>
                <SelectTrigger className="input">
                    <SelectValue placeholder="Select the language" />
                </SelectTrigger>
                <SelectContent>
                    {Object.keys(languages).map((language: string) => (
                        <SelectItem value={language} key={language} 
                        className="capitalize">
                            {language}
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />        
        
        <Button type="submit" className="w-full cursor-pointer">Build your companion</Button>
      </form>
      
    </Form>
  )
}

export default CompanionForm