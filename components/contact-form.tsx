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
    <div className="grid md:grid-cols-2 gap-8" data-oid="4:ylv9q">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-oid="t_79xyz"
      >
        <h3 className="text-2xl font-bold mb-6" data-oid="w1ryod:">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-6" data-oid="_l_h_w3">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <div className="space-y-4 mb-6" data-oid="gk7md64">
          <div className="flex items-center gap-3" data-oid="a0mi7qe">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="f2anwki"
            >
              <Mail className="h-5 w-5 text-primary" data-oid="pj2asav" />
            </div>
            <div data-oid="6r7ofq4">
              <div className="text-sm text-muted-foreground" data-oid="jy0f30w">
                Email
              </div>
              <div data-oid="f:z7aci">mr1398463@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="5v0.h_n">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="fbh69lw"
            >
              <Phone className="h-5 w-5 text-primary" data-oid="h23jtlb" />
            </div>
            <div data-oid="fs5sdm6">
              <div className="text-sm text-muted-foreground" data-oid="n_9.8kw">
                Phone
              </div>
              <div data-oid="1.c:3rj">(+91)9500255291</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="azbqm0y">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="-ubs8ix"
            >
              <MapPin className="h-5 w-5 text-primary" data-oid="x7dgpzx" />
            </div>
            <div data-oid="51vod9d">
              <div className="text-sm text-muted-foreground" data-oid="qjg0.p1">
                Location
              </div>
              <div data-oid="qj:_yen">India,Chennai</div>
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
        data-oid="g_ntp02"
      >
        {isSubmitted ? (
          <div
            className="h-full flex flex-col items-center justify-center text-center p-6"
            data-oid="gxpz87u"
          >
            <div
              className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
              data-oid="qzbtf9t"
            >
              <CheckCircle
                className="h-8 w-8 text-green-500"
                data-oid="e69hn20"
              />
            </div>
            <h3 className="text-xl font-bold mb-2" data-oid="zfgusf2">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6" data-oid="0ir7iaa">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-oid="5n1jngz"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form} data-oid="mlhp3dv">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-oid="ztu2okv"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem data-oid="0v06ry2">
                    <FormLabel data-oid="bh8j4sy">Name</FormLabel>
                    <FormControl data-oid="sdb7mdy">
                      <Input
                        placeholder="Your name"
                        {...field}
                        data-oid="8itqq8l"
                      />
                    </FormControl>
                    <FormMessage data-oid="8fn8_p3" />
                  </FormItem>
                )}
                data-oid="b68361e"
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem data-oid="1i-_lfh">
                    <FormLabel data-oid="xhgn57a">Email</FormLabel>
                    <FormControl data-oid="9ls.i9g">
                      <Input
                        placeholder="Your email"
                        {...field}
                        data-oid="lc1h9o1"
                      />
                    </FormControl>
                    <FormMessage data-oid="-yvqfzb" />
                  </FormItem>
                )}
                data-oid=".sfmenq"
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem data-oid="0.s83zh">
                    <FormLabel data-oid="v0blc0c">Subject</FormLabel>
                    <FormControl data-oid="8yb7q::">
                      <Input
                        placeholder="Message subject"
                        {...field}
                        data-oid="dfpzwto"
                      />
                    </FormControl>
                    <FormMessage data-oid="zucpdl4" />
                  </FormItem>
                )}
                data-oid="c97qs.e"
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem data-oid="-r5a9tj">
                    <FormLabel data-oid="zotpk44">Message</FormLabel>
                    <FormControl data-oid="eaw34q8">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-oid="vj:694o"
                      />
                    </FormControl>
                    <FormMessage data-oid="pimqr:f" />
                  </FormItem>
                )}
                data-oid="96.y_dg"
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-oid="rfh1l2-"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" data-oid="e.fqlv.">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="gl2bppa"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="7uhupuy"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="p4ha6pm"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" data-oid="ddgc0em">
                    Send Message
                    <Send className="h-4 w-4" data-oid="d8pwj4j" />
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
