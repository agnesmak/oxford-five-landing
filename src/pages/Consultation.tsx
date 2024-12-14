import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  organization?: string;
  industry?: string;
  linkedIn?: string;
  message: string;
};

const Consultation = () => {
  const form = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/success");
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "New Zealand",
    "Singapore",
    "Hong Kong",
    "Japan",
    "South Korea",
    "India",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Switzerland",
    // Add more countries as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-dark py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-3xl font-sofia font-semibold text-oxford-white mb-8 text-center">Book a Free Consultation</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">First Name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Last Name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Email *</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              rules={{ required: "Location / Country is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Location / Country *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Organization</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Industry</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">LinkedIn Profile URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Please leave a message" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      className="min-h-[120px]"
                      placeholder="Tell us how you would want us to help with your brand and marketing strategies / Share with us your key challenges and SEO efforts regarding the impact of AI on customer search behavior."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#045EEC] to-[#0F2D6E] text-white"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Consultation;