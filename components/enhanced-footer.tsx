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
            data-oid="9.e:jx6"
          >
            <CheckCircle
              className="h-5 w-5 text-green-500"
              data-oid="zc88xjj"
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
      data-oid="m5xxu9w"
    >
      <div className="container mx-auto px-4 py-12" data-oid="yxo9wti">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          data-oid="1kxgs_-"
        >
          <div data-oid="-ygk3ul">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="868.4iw"
            >
              <div className="font-bold text-xl mb-4" data-oid="cyglk:2">
                MUBARAK A
              </div>
              <p className="text-muted-foreground mb-6" data-oid="8vldp59">
                AI Engineer & Community Builder specializing in machine
                learning, generative AI, and STEM education.
              </p>

              <div className="flex gap-3" data-oid="1lis_0h">
                <SocialButton
                  icon={<Github className="h-5 w-5" data-oid="-9frb0d" />}
                  url="https://github.com/mubarakx01"
                  label="GitHub"
                  data-oid="t.4ehl:"
                />

                <SocialButton
                  icon={<Linkedin className="h-5 w-5" data-oid="dxaw4sk" />}
                  url="https://www.linkedin.com/in/mubarak-a-xyz/"
                  label="LinkedIn"
                  data-oid="f72k:27"
                />

                <SocialButton
                  icon={<Twitter className="h-5 w-5" data-oid="zrnk0.n" />}
                  url="https://twitter.com"
                  label="Twitter"
                  data-oid="h1q7h7n"
                />

                <SocialButton
                  icon={<Mail className="h-5 w-5" data-oid="ilas3ov" />}
                  url="mailto:mr1398463@gmail.com"
                  label="Email"
                  data-oid="t4mqlkh"
                />
              </div>
            </motion.div>
          </div>

          <div data-oid="j4cq9xg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="o_q5bs6"
            >
              <h3 className="font-semibold mb-4" data-oid="vwh4:8t">
                Quick Links
              </h3>
              <ul className="space-y-2" data-oid="j2i58l8">
                <FooterLink href="#" label="Home" data-oid="i0fv48t" />
                <FooterLink href="#skills" label="Skills" data-oid="6d8urwc" />
                <FooterLink
                  href="#experience"
                  label="Experience"
                  data-oid="qdo6_v4"
                />

                <FooterLink
                  href="#projects"
                  label="Projects"
                  data-oid="smozfn8"
                />

                <FooterLink
                  href="#education"
                  label="Education"
                  data-oid="tmars.i"
                />

                <FooterLink
                  href="#publications"
                  label="Publications"
                  data-oid="cy5j3bg"
                />

                <FooterLink
                  href="#contact"
                  label="Contact"
                  data-oid="0dx:xto"
                />
              </ul>
            </motion.div>
          </div>

          <div data-oid=".nsn:vt">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="dj4zz3f"
            >
              <h3 className="font-semibold mb-4" data-oid="fyu_o76">
                Contact Info
              </h3>
              <ul className="space-y-3" data-oid="yt37l4k">
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="e6giv20"
                >
                  <Mail className="h-4 w-4 text-primary" data-oid="uuzag:i" />
                  <span data-oid="_z-p-8v">mr1398463@gmail.com</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="i3ijqtr"
                >
                  <Phone className="h-4 w-4 text-primary" data-oid="9_._ob:" />
                  <span data-oid="hp.xvm.">(+91)9500255291</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="wks_18:"
                >
                  <MapPin className="h-4 w-4 text-primary" data-oid="nw9rkkl" />
                  <span data-oid="1uy4mrj">India,Chennai</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="hkyawh_"
                >
                  <Calendar
                    className="h-4 w-4 text-primary"
                    data-oid="jlv7ir7"
                  />

                  <span data-oid="618zkge">Available for projects</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6" data-oid="smaaii7">
                <ThemePreview data-oid="jvuy_mb" />
              </div>
            </motion.div>
          </div>

          <div data-oid="i3031ih">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="yx.qmxr"
            >
              <h3 className="font-semibold mb-4" data-oid="l:-7n_l">
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-4" data-oid="lwcj0ib">
                Subscribe to receive updates on new projects and articles.
              </p>

              <Form {...form} data-oid="wf:8iyg">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  data-oid="h11qzzb"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem data-oid="lb4a2:0">
                        <div className="flex gap-2" data-oid="pv791a2">
                          <FormControl data-oid="99axkj6">
                            <Input
                              placeholder="Your email"
                              {...field}
                              data-oid=":3fgxs1"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            data-oid="x7nwxae"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="o4oh88b"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="5t_x-_0"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="tw6mj7l"
                                ></path>
                              </svg>
                            ) : (
                              <Send className="h-4 w-4" data-oid="0w3uly:" />
                            )}
                          </Button>
                        </div>
                        <FormMessage data-oid="_f4.gfm" />
                      </FormItem>
                    )}
                    data-oid="4z_mh:s"
                  />
                </form>
              </Form>

              <p
                className="text-xs text-muted-foreground mt-2"
                data-oid="2:2o0nt"
              >
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          data-oid="ixh8si1"
        >
          <div
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            data-oid="k3pmfbk"
          >
            © {currentYear} MUBARAK A. All rights reserved.
          </div>

          <div className="flex items-center gap-4" data-oid="he-e1t:">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-oid="h8r96ju"
            >
              <ArrowUp className="h-4 w-4" data-oid="t6.2_t9" />
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
      data-oid="45-lxc-"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-oid="ghtpdcl"
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
    <li data-oid=".1w1ny4">
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        data-oid="5hor:ar"
      >
        {label}
      </a>
    </li>
  );
}
