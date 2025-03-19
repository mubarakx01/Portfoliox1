"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8" data-oid="slzu_h1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-oid="r6bh_y_"
      >
        <h3 className="text-2xl font-bold mb-6" data-oid="az:npg:">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-6" data-oid="lb.zu_2">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <div className="space-y-4 mb-6" data-oid="9j5s-u_">
          <div className="flex items-center gap-3" data-oid="cpgg7h0">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="fnw_gem"
            >
              <Mail className="h-5 w-5 text-primary" data-oid="soh1i9l" />
            </div>
            <div data-oid="kyicmi8">
              <div className="text-sm text-muted-foreground" data-oid="2cv.5ze">
                Email
              </div>
              <div data-oid="ori8dm5">mr1398463@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="c8yd4ud">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="j-rgeqm"
            >
              <Phone className="h-5 w-5 text-primary" data-oid="cr_2o:3" />
            </div>
            <div data-oid="g-is0g1">
              <div className="text-sm text-muted-foreground" data-oid="bn:2mf4">
                Phone
              </div>
              <div data-oid="kh1cefk">(+91)9500255291</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid=".s.70y4">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="kuxbe95"
            >
              <MapPin className="h-5 w-5 text-primary" data-oid="r-90ir0" />
            </div>
            <div data-oid="_fwqbn2">
              <div className="text-sm text-muted-foreground" data-oid="sv8obop">
                Location
              </div>
              <div data-oid="m52n2xq">India,Chennai</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
        data-oid="dwftrzm"
      >
        {isSubmitted ? (
          <div
            className="h-full flex flex-col items-center justify-center text-center p-6"
            data-oid="lm:7edy"
          >
            <div
              className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
              data-oid="mpr9:.p"
            >
              <CheckCircle
                className="h-8 w-8 text-green-500"
                data-oid="5zeryx0"
              />
            </div>
            <h3 className="text-xl font-bold mb-2" data-oid="26.zdv.">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6" data-oid="5-.aaa9">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-oid="hjy18q0"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form} data-oid=":05x33x">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-oid="mxanc7e"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem data-oid="pj.__y0">
                    <FormLabel data-oid="9:kdp.a">Name</FormLabel>
                    <FormControl data-oid="jzm5a3h">
                      <Input
                        placeholder="Your name"
                        {...field}
                        data-oid="fda7qp7"
                      />
                    </FormControl>
                    <FormMessage data-oid="_850eff" />
                  </FormItem>
                )}
                data-oid="i80kmhf"
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem data-oid="yulhmk4">
                    <FormLabel data-oid="3.xd4qg">Email</FormLabel>
                    <FormControl data-oid="yi5bsql">
                      <Input
                        placeholder="Your email"
                        {...field}
                        data-oid=".dkohgl"
                      />
                    </FormControl>
                    <FormMessage data-oid="02cvis5" />
                  </FormItem>
                )}
                data-oid="u03-ovy"
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem data-oid="fbij:v8">
                    <FormLabel data-oid="6apwx3n">Subject</FormLabel>
                    <FormControl data-oid="auif9g:">
                      <Input
                        placeholder="Message subject"
                        {...field}
                        data-oid="pkz1xer"
                      />
                    </FormControl>
                    <FormMessage data-oid="-0ciel." />
                  </FormItem>
                )}
                data-oid="y15lhpz"
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem data-oid="f36obgc">
                    <FormLabel data-oid="d4s6fbp">Message</FormLabel>
                    <FormControl data-oid="rnaped9">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-oid="q04ti80"
                      />
                    </FormControl>
                    <FormMessage data-oid="l_s.l-w" />
                  </FormItem>
                )}
                data-oid="u8nn1ja"
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-oid=":gfr:oo"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" data-oid="e.to_61">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="b3wfup9"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="o5ebu_y"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="chjo6be"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" data-oid="_a.k010">
                    Send Message
                    <Send className="h-4 w-4" data-oid="3jqnlal" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        )}
      </motion.div>
    </div>
  );
}
