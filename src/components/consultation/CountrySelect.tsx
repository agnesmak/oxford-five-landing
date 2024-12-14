import React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps } from "react-hook-form";

interface CountrySelectProps {
  field: ControllerRenderProps<any, "country">;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({ field }) => {
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
  ];

  return (
    <FormItem>
      <FormLabel className="text-black">Location / Country *</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger className="text-black">
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
  );
};