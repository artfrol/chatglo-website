
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal('')),
  requestType: z.enum(["advertising", "monetization"])
});

type FormValues = z.infer<typeof formSchema>;

const Request = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'advertising';
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      website: "",
      requestType: mode === 'monetization' ? "monetization" : "advertising"
    }
  });

  // Update form value when mode changes in URL
  useEffect(() => {
    form.setValue("requestType", mode === 'monetization' ? "monetization" : "advertising");
  }, [mode, form]);

  // Animate elements when page loads
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    toast.success("Thank you for your request! We'll review and get back to you soon.");
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Get access to private beta
            </h1>
            <p className="mt-3 text-muted-foreground">
              Request access below. We'll review and send setup instructions upon approval.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">I want to...</h3>
                  <FormField
                    control={form.control}
                    name="requestType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="advertising" id="advertising" />
                              <Label htmlFor="advertising">Start AI advertising</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monetization" id="monetization" />
                              <Label htmlFor="monetization">Monetize my AI app</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://your-website.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit"
                className="w-full text-lg px-8 py-6 shadow-lg interactive-btn"
              >
                Request Access
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Request;
