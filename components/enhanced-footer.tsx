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
            data-oid="b5xzb9a"
          >
            <CheckCircle
              className="h-5 w-5 text-green-500"
              data-oid="o.djevv"
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
      data-oid="xt5hbu9"
    >
      <div className="container mx-auto px-4 py-12" data-oid="dpculx_">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          data-oid="nqwq9oy"
        >
          <div data-oid="oj-7h4p">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="2cr:siv"
            >
              <div className="font-bold text-xl mb-4" data-oid="_.bvupm">
                MUBARAK A
              </div>
              <p className="text-muted-foreground mb-6" data-oid="x1foxs6">
                AI Engineer & Community Builder specializing in machine
                learning, generative AI, and STEM education.
              </p>

              <div className="flex gap-3" data-oid="alnqndu">
                <SocialButton
                  icon={<Github className="h-5 w-5" data-oid="q0eek14" />}
                  url="https://github.com/mubarakx01"
                  label="GitHub"
                  data-oid="im2:zb_"
                />

                <SocialButton
                  icon={<Linkedin className="h-5 w-5" data-oid="mtaaodj" />}
                  url="https://www.linkedin.com/in/mubarak-a-xyz/"
                  label="LinkedIn"
                  data-oid=".c_t0_9"
                />

                <SocialButton
                  icon={<Twitter className="h-5 w-5" data-oid="_pitdlg" />}
                  url="https://twitter.com"
                  label="Twitter"
                  data-oid="m:_agge"
                />

                <SocialButton
                  icon={<Mail className="h-5 w-5" data-oid="r9e645k" />}
                  url="mailto:mr1398463@gmail.com"
                  label="Email"
                  data-oid="1jlvf6b"
                />
              </div>
            </motion.div>
          </div>

          <div data-oid="3sq.g46">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="thxysxe"
            >
              <h3 className="font-semibold mb-4" data-oid="c.kzf41">
                Quick Links
              </h3>
              <ul className="space-y-2" data-oid="t--r7yb">
                <FooterLink href="#" label="Home" data-oid="b.qu305" />
                <FooterLink href="#skills" label="Skills" data-oid="_rd.6v5" />
                <FooterLink
                  href="#experience"
                  label="Experience"
                  data-oid="l_vi0yp"
                />

                <FooterLink
                  href="#projects"
                  label="Projects"
                  data-oid="wqoyydq"
                />

                <FooterLink
                  href="#education"
                  label="Education"
                  data-oid="rm39d5:"
                />

                <FooterLink
                  href="#publications"
                  label="Publications"
                  data-oid="sg28l8z"
                />

                <FooterLink
                  href="#contact"
                  label="Contact"
                  data-oid="7a0s-n8"
                />
              </ul>
            </motion.div>
          </div>

          <div data-oid=".6lp03p">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="a6aix.x"
            >
              <h3 className="font-semibold mb-4" data-oid="ph-xiac">
                Contact Info
              </h3>
              <ul className="space-y-3" data-oid="jor.rfz">
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="69:n8g-"
                >
                  <Mail className="h-4 w-4 text-primary" data-oid="ckq46fu" />
                  <span data-oid="wi.oq_r">mr1398463@gmail.com</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="0guplh7"
                >
                  <Phone className="h-4 w-4 text-primary" data-oid="e9m1_ac" />
                  <span data-oid="61lhi.d">(+91)9500255291</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="0-sdsql"
                >
                  <MapPin className="h-4 w-4 text-primary" data-oid="s_.8-6_" />
                  <span data-oid="_jwb13m">India,Chennai</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="rjv_iai"
                >
                  <Calendar
                    className="h-4 w-4 text-primary"
                    data-oid="vackg1q"
                  />

                  <span data-oid="12gymb5">Available for projects</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6" data-oid="jd9hfls">
                <ThemePreview data-oid="ninobsj" />
              </div>
            </motion.div>
          </div>

          <div data-oid="wd5c9_l">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="rrbhlxh"
            >
              <h3 className="font-semibold mb-4" data-oid="zohjcqv">
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-4" data-oid="a_j5g0o">
                Subscribe to receive updates on new projects and articles.
              </p>

              <Form {...form} data-oid="sjowh2w">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  data-oid="mfslkt5"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem data-oid="7:7x:pq">
                        <div className="flex gap-2" data-oid="7cp5bkr">
                          <FormControl data-oid="vujk0c9">
                            <Input
                              placeholder="Your email"
                              {...field}
                              data-oid="nfuvt7f"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            data-oid="trrdfeb"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="w_6g.i-"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="5nleulx"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="mt65hdr"
                                ></path>
                              </svg>
                            ) : (
                              <Send className="h-4 w-4" data-oid="rpzhld_" />
                            )}
                          </Button>
                        </div>
                        <FormMessage data-oid="dk:mla6" />
                      </FormItem>
                    )}
                    data-oid="-r2zxpm"
                  />
                </form>
              </Form>

              <p
                className="text-xs text-muted-foreground mt-2"
                data-oid="yk:dp_8"
              >
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          data-oid="hhn3w_a"
        >
          <div
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            data-oid="22q9_6v"
          >
            © {currentYear} MUBARAK A. All rights reserved.
          </div>

          <div className="flex items-center gap-4" data-oid="r9tpqzd">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-oid="n2wp5nm"
            >
              <ArrowUp className="h-4 w-4" data-oid="ut.we3q" />
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
      data-oid="t1po.jm"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-oid="831a-vz"
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
    <li data-oid="exkzqzi">
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        data-oid="g592f75"
      >
        {label}
      </a>
    </li>
  );
}
