import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CountrySelect } from "./CountrySelect";
import { sendConsultationEmail } from "./consultationUtils";

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

const ConsultationForm = () => {
  const form = useForm<FormData>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendConsultationEmail(data);
      toast({
        title: "Success!",
        description: result.message,
      });
      navigate("/success");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  return (
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
                  <Input {...field} className="text-black" />
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
                  <Input {...field} className="text-black" />
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
                <Input type="email" {...field} className="text-black" />
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
            <CountrySelect field={field} />
          )}
        />

        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Organization</FormLabel>
              <FormControl>
                <Input {...field} className="text-black" />
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
                <Input {...field} className="text-black" />
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
                <Input {...field} className="text-black" />
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
                  className="min-h-[120px] text-black"
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
  );
};

export default ConsultationForm;