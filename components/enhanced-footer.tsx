"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  ArrowUp,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ThemePreview } from "@/components/theme-preview";

// Form validation schema
const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function EnhancedFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof subscribeSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();

      toast({
        title: "Subscribed!",
        description: "You've been added to the newsletter.",
        action: (
          <div
            className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center"
            data-oid="ts83f9b"
          >
            <CheckCircle
              className="h-5 w-5 text-green-500"
              data-oid="g8iji2q"
            />
          </div>
        ),
      });
    }, 1000);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-b from-background to-background/80 border-t"
      data-oid="rk_y1sf"
    >
      <div className="container mx-auto px-4 py-12" data-oid="8my3kaw">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          data-oid="izwd7dm"
        >
          <div data-oid="5l6qyjn">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="f13jkgc"
            >
              <div className="font-bold text-xl mb-4" data-oid="t6aets5">
                Shaquille Williams
              </div>
              <p className="text-muted-foreground mb-6" data-oid="363h7wk">
                AI Engineer & Community Builder specializing in machine
                learning, generative AI, and STEM education.
              </p>

              <div className="flex gap-3" data-oid="cgf_jj0">
                <SocialButton
                  icon={<Github className="h-5 w-5" data-oid="csxqu.j" />}
                  url="https://github.com/swilliams9772"
                  label="GitHub"
                  data-oid="m1qsjcm"
                />

                <SocialButton
                  icon={<Linkedin className="h-5 w-5" data-oid="8q7.ciu" />}
                  url="https://www.linkedin.com/in/shaquille-williams-957970129"
                  label="LinkedIn"
                  data-oid="ta8idab"
                />

                <SocialButton
                  icon={<Twitter className="h-5 w-5" data-oid="38_:..e" />}
                  url="https://twitter.com"
                  label="Twitter"
                  data-oid="-zr4-.a"
                />

                <SocialButton
                  icon={<Mail className="h-5 w-5" data-oid="tf0wal0" />}
                  url="mailto:shaq.williams.ai@gmail.com"
                  label="Email"
                  data-oid=":1b1j--"
                />
              </div>
            </motion.div>
          </div>

          <div data-oid="tw8gb59">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="9g7wy2t"
            >
              <h3 className="font-semibold mb-4" data-oid="ysk8i.6">
                Quick Links
              </h3>
              <ul className="space-y-2" data-oid="_zp2wis">
                <FooterLink href="#" label="Home" data-oid="_4zrow4" />
                <FooterLink href="#skills" label="Skills" data-oid="owklqua" />
                <FooterLink
                  href="#experience"
                  label="Experience"
                  data-oid="i5rvr:3"
                />

                <FooterLink
                  href="#projects"
                  label="Projects"
                  data-oid="srx7t3q"
                />

                <FooterLink
                  href="#education"
                  label="Education"
                  data-oid="g3mn2wv"
                />

                <FooterLink
                  href="#publications"
                  label="Publications"
                  data-oid="vsfifx4"
                />

                <FooterLink
                  href="#contact"
                  label="Contact"
                  data-oid="a57zi4e"
                />
              </ul>
            </motion.div>
          </div>

          <div data-oid="w4958fv">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="-1--lh4"
            >
              <h3 className="font-semibold mb-4" data-oid="isl3mgk">
                Contact Info
              </h3>
              <ul className="space-y-3" data-oid="b.azzr9">
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="fdlh8u8"
                >
                  <Mail className="h-4 w-4 text-primary" data-oid="q8fg.o4" />
                  <span data-oid="-p-8-2q">shaq.williams.ai@gmail.com</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="mtako2q"
                >
                  <Phone className="h-4 w-4 text-primary" data-oid="ma487qs" />
                  <span data-oid="zeon0op">(917) 831-2482</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="0isy7b7"
                >
                  <MapPin className="h-4 w-4 text-primary" data-oid="v7jdgq2" />
                  <span data-oid="qcpel3h">New York, NY</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="88ud_tr"
                >
                  <Calendar
                    className="h-4 w-4 text-primary"
                    data-oid="aim50yp"
                  />

                  <span data-oid="5k87m9h">Available for projects</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6" data-oid="v.ax..s">
                <ThemePreview data-oid="lhc50u5" />
              </div>
            </motion.div>
          </div>

          <div data-oid=":nyhwol">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="fo2ajql"
            >
              <h3 className="font-semibold mb-4" data-oid="b8zii2q">
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-4" data-oid="twgam-y">
                Subscribe to receive updates on new projects and articles.
              </p>

              <Form {...form} data-oid="p-ahe0:">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  data-oid="vwe2xla"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem data-oid="dect1yk">
                        <div className="flex gap-2" data-oid="34t9y.s">
                          <FormControl data-oid="p6hs358">
                            <Input
                              placeholder="Your email"
                              {...field}
                              data-oid="8wy.i11"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            data-oid=".q02_nk"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="hpqvke:"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="ocz6ar3"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="n:6jqld"
                                ></path>
                              </svg>
                            ) : (
                              <Send className="h-4 w-4" data-oid="cay4jfg" />
                            )}
                          </Button>
                        </div>
                        <FormMessage data-oid="w53j3pi" />
                      </FormItem>
                    )}
                    data-oid="s-7ap9e"
                  />
                </form>
              </Form>

              <p
                className="text-xs text-muted-foreground mt-2"
                data-oid="1hm8eni"
              >
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          data-oid="a:tyz8x"
        >
          <div
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            data-oid="tozi_36"
          >
            © {currentYear} Shaquille Williams. All rights reserved.
          </div>

          <div className="flex items-center gap-4" data-oid="xqpun5-">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-oid="5j-pegh"
            >
              <ArrowUp className="h-4 w-4" data-oid="ved7cg0" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialButtonProps {
  icon: React.ReactNode;
  url: string;
  label: string;
}

function SocialButton({ icon, url, label }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      data-oid="4uf01y7"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-oid="yuai4fa"
      >
        {icon}
      </a>
    </Button>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li data-oid="eyemy--">
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        data-oid=":g73c7b"
      >
        {label}
      </a>
    </li>
  );
}
