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
    <div className="grid md:grid-cols-2 gap-8" data-oid="q3qk2_5">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-oid="b--9n4f"
      >
        <h3 className="text-2xl font-bold mb-6" data-oid="82-_pmc">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-6" data-oid="9yoi.1u">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <div className="space-y-4 mb-6" data-oid="5f68-cv">
          <div className="flex items-center gap-3" data-oid="uogyxt_">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="r8511ji"
            >
              <Mail className="h-5 w-5 text-primary" data-oid="csbns8u" />
            </div>
            <div data-oid="u3nmy0r">
              <div className="text-sm text-muted-foreground" data-oid="2905qrw">
                Email
              </div>
              <div data-oid=".kmut1l">mr1398463@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="cf47lzj">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="_drkjm."
            >
              <Phone className="h-5 w-5 text-primary" data-oid="if4r8j." />
            </div>
            <div data-oid="bw6grq4">
              <div className="text-sm text-muted-foreground" data-oid="53ule3l">
                Phone
              </div>
              <div data-oid="7lu1ofn">(+91)9500255291</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="u7pvf47">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="di3uj6."
            >
              <MapPin className="h-5 w-5 text-primary" data-oid="ggr3r_s" />
            </div>
            <div data-oid="g689_2t">
              <div className="text-sm text-muted-foreground" data-oid="y8da-86">
                Location
              </div>
              <div data-oid="o:md1c0">India,Chennai</div>
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
        data-oid="zzld-9w"
      >
        {isSubmitted ? (
          <div
            className="h-full flex flex-col items-center justify-center text-center p-6"
            data-oid=":fhmgo."
          >
            <div
              className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
              data-oid="-d1_99j"
            >
              <CheckCircle
                className="h-8 w-8 text-green-500"
                data-oid="m-4aisa"
              />
            </div>
            <h3 className="text-xl font-bold mb-2" data-oid="77jfg8m">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6" data-oid="vpa59gv">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-oid=".6tk6z9"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form} data-oid="s85c61p">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-oid="v8gbf.-"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem data-oid="mx-zm22">
                    <FormLabel data-oid="a1yve7j">Name</FormLabel>
                    <FormControl data-oid="kzu-sab">
                      <Input
                        placeholder="Your name"
                        {...field}
                        data-oid="guavqtk"
                      />
                    </FormControl>
                    <FormMessage data-oid="oqmhymb" />
                  </FormItem>
                )}
                data-oid="uwe.nn4"
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem data-oid="xs48jr9">
                    <FormLabel data-oid="cssdqsn">Email</FormLabel>
                    <FormControl data-oid="-sw32u:">
                      <Input
                        placeholder="Your email"
                        {...field}
                        data-oid="4r3w.a:"
                      />
                    </FormControl>
                    <FormMessage data-oid="c45fa9n" />
                  </FormItem>
                )}
                data-oid="g.p-dzx"
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem data-oid="64b9q8c">
                    <FormLabel data-oid="rz28zvl">Subject</FormLabel>
                    <FormControl data-oid="q66wq-d">
                      <Input
                        placeholder="Message subject"
                        {...field}
                        data-oid="evaix-g"
                      />
                    </FormControl>
                    <FormMessage data-oid="q77frrb" />
                  </FormItem>
                )}
                data-oid="8ffrki1"
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem data-oid="byv58p2">
                    <FormLabel data-oid="2o5mcy0">Message</FormLabel>
                    <FormControl data-oid="rqjp10:">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-oid="9h_6_p8"
                      />
                    </FormControl>
                    <FormMessage data-oid="15pf4pn" />
                  </FormItem>
                )}
                data-oid="l00627x"
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-oid="83jskcx"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" data-oid="mirg26b">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="_p0-_dk"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="p_p_6n6"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="-plbx6o"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" data-oid="7poimpp">
                    Send Message
                    <Send className="h-4 w-4" data-oid="8dw6k3f" />
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
