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
    <div className="grid md:grid-cols-2 gap-8" data-oid="l:7t7kh">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-oid="hpx9hl_"
      >
        <h3 className="text-2xl font-bold mb-6" data-oid="87bmp9r">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-6" data-oid="uq4kklv">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <div className="space-y-4 mb-6" data-oid="cgm-bk5">
          <div className="flex items-center gap-3" data-oid="tt_eigu">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="w0giz44"
            >
              <Mail className="h-5 w-5 text-primary" data-oid="ewdd-2a" />
            </div>
            <div data-oid="-n60u88">
              <div className="text-sm text-muted-foreground" data-oid=":y:rpj8">
                Email
              </div>
              <div data-oid="16rzsi4">mr1398463@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="80wuqq9">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="1ysd-3p"
            >
              <Phone className="h-5 w-5 text-primary" data-oid="huhjh_3" />
            </div>
            <div data-oid="3j53k4o">
              <div className="text-sm text-muted-foreground" data-oid="v2_cd2t">
                Phone
              </div>
              <div data-oid="u7yfn6q">(+91)9500255291</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="zjpjlne">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="z0zj7_w"
            >
              <MapPin className="h-5 w-5 text-primary" data-oid="pfn65r1" />
            </div>
            <div data-oid="rgp91hm">
              <div className="text-sm text-muted-foreground" data-oid="skodg7f">
                Location
              </div>
              <div data-oid="tkha9g8">India,Chennai</div>
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
        data-oid="81swh3t"
      >
        {isSubmitted ? (
          <div
            className="h-full flex flex-col items-center justify-center text-center p-6"
            data-oid=":g:wc7k"
          >
            <div
              className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
              data-oid="9b.ls09"
            >
              <CheckCircle
                className="h-8 w-8 text-green-500"
                data-oid="q68vgm5"
              />
            </div>
            <h3 className="text-xl font-bold mb-2" data-oid="pmqgv59">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6" data-oid="49tn.ms">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-oid="nvpf.vt"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form} data-oid="67d5q95">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-oid="ah9:0a8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem data-oid="qb34lhi">
                    <FormLabel data-oid="81rn8:m">Name</FormLabel>
                    <FormControl data-oid="t71hqih">
                      <Input
                        placeholder="Your name"
                        {...field}
                        data-oid="9-89_xf"
                      />
                    </FormControl>
                    <FormMessage data-oid="3pflvaf" />
                  </FormItem>
                )}
                data-oid="c8vep5v"
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem data-oid="tzbp861">
                    <FormLabel data-oid="_sv848z">Email</FormLabel>
                    <FormControl data-oid="d1_4f2-">
                      <Input
                        placeholder="Your email"
                        {...field}
                        data-oid="h:d:y32"
                      />
                    </FormControl>
                    <FormMessage data-oid="gsgg5q4" />
                  </FormItem>
                )}
                data-oid="c714v6n"
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem data-oid="s7s.w_a">
                    <FormLabel data-oid="ru3kv21">Subject</FormLabel>
                    <FormControl data-oid="2c8bsxn">
                      <Input
                        placeholder="Message subject"
                        {...field}
                        data-oid="6ec:80s"
                      />
                    </FormControl>
                    <FormMessage data-oid="68dqtd1" />
                  </FormItem>
                )}
                data-oid="61b7a38"
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem data-oid="32y822r">
                    <FormLabel data-oid="-p_6ymm">Message</FormLabel>
                    <FormControl data-oid="d96sqy_">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-oid="..da4-b"
                      />
                    </FormControl>
                    <FormMessage data-oid="ro9huy9" />
                  </FormItem>
                )}
                data-oid="nu:fdgk"
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-oid="me3h7h5"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" data-oid="9llerrg">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="dz1mhpm"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="mnyuy7n"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="xhzo3ws"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" data-oid="x._iqi-">
                    Send Message
                    <Send className="h-4 w-4" data-oid="troob8h" />
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
