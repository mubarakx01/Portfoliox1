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
    <div className="grid md:grid-cols-2 gap-8" data-oid="nudmyf_">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-oid="hwfybbr"
      >
        <h3 className="text-2xl font-bold mb-6" data-oid="svq32jn">
          Get in Touch
        </h3>
        <p className="text-muted-foreground mb-6" data-oid="q3haaa3">
          Have a question or want to work together? Fill out the form and I'll
          get back to you as soon as possible.
        </p>

        <div className="space-y-4 mb-6" data-oid="-evaf_o">
          <div className="flex items-center gap-3" data-oid="6ocn1ib">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="n6q23md"
            >
              <Mail className="h-5 w-5 text-primary" data-oid="z-4zf3c" />
            </div>
            <div data-oid="l5v1foh">
              <div className="text-sm text-muted-foreground" data-oid="s59.9cn">
                Email
              </div>
              <div data-oid="o7tfocs">shaq.williams.ai@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="bxujoc6">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="8e:1avu"
            >
              <Phone className="h-5 w-5 text-primary" data-oid="zv1mhtz" />
            </div>
            <div data-oid="j8n80u2">
              <div className="text-sm text-muted-foreground" data-oid="em1i27j">
                Phone
              </div>
              <div data-oid="b9qidb0">(917) 831-2482</div>
            </div>
          </div>

          <div className="flex items-center gap-3" data-oid="0_uy0n1">
            <div
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
              data-oid="ern88n1"
            >
              <MapPin className="h-5 w-5 text-primary" data-oid="0elf72g" />
            </div>
            <div data-oid="z2_r6p:">
              <div className="text-sm text-muted-foreground" data-oid="7edzyqj">
                Location
              </div>
              <div data-oid="87a6o_1">New York, NY</div>
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
        data-oid="kv0zlfv"
      >
        {isSubmitted ? (
          <div
            className="h-full flex flex-col items-center justify-center text-center p-6"
            data-oid="vpnr15i"
          >
            <div
              className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
              data-oid="e84ra6v"
            >
              <CheckCircle
                className="h-8 w-8 text-green-500"
                data-oid="jm7yl01"
              />
            </div>
            <h3 className="text-xl font-bold mb-2" data-oid="42lykmk">
              Message Sent!
            </h3>
            <p className="text-muted-foreground mb-6" data-oid="d508np6">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              data-oid="8rivpx5"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form} data-oid="udotee1">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              data-oid="6e76850"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem data-oid="hsx2gbp">
                    <FormLabel data-oid="z4zusc9">Name</FormLabel>
                    <FormControl data-oid="_sz_lvj">
                      <Input
                        placeholder="Your name"
                        {...field}
                        data-oid="r2f34jb"
                      />
                    </FormControl>
                    <FormMessage data-oid="zbt0rpl" />
                  </FormItem>
                )}
                data-oid="xj5fezp"
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem data-oid="jbppew-">
                    <FormLabel data-oid="132z0zy">Email</FormLabel>
                    <FormControl data-oid="l2bkfdj">
                      <Input
                        placeholder="Your email"
                        {...field}
                        data-oid="u9cs48c"
                      />
                    </FormControl>
                    <FormMessage data-oid="r-g9lbm" />
                  </FormItem>
                )}
                data-oid="5tmk3y5"
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem data-oid="u1:lmr8">
                    <FormLabel data-oid="bqh69v_">Subject</FormLabel>
                    <FormControl data-oid="sz4f0-3">
                      <Input
                        placeholder="Message subject"
                        {...field}
                        data-oid="zdu:_:t"
                      />
                    </FormControl>
                    <FormMessage data-oid="tsgyim1" />
                  </FormItem>
                )}
                data-oid="xfrmhdt"
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem data-oid="3yparen">
                    <FormLabel data-oid="54x-1ut">Message</FormLabel>
                    <FormControl data-oid="ba:9:c-">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] resize-none"
                        {...field}
                        data-oid="3kv_m43"
                      />
                    </FormControl>
                    <FormMessage data-oid="eb04rx0" />
                  </FormItem>
                )}
                data-oid="uyyz5qp"
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-oid="5qq.80j"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2" data-oid="ibvdy15">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="iyvwyie"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="y4p7740"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="mdm176j"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2" data-oid="zm0etvg">
                    Send Message
                    <Send className="h-4 w-4" data-oid=".8brme_" />
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
