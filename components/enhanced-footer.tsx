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
            data-oid="d79ts_5"
          >
            <CheckCircle
              className="h-5 w-5 text-green-500"
              data-oid="wr61z0:"
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
      data-oid="sjjeq3."
    >
      <div className="container mx-auto px-4 py-12" data-oid="iiv.gqx">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          data-oid="4l7wcs-"
        >
          <div data-oid="ajs1vty">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="ckr07x."
            >
              <div className="font-bold text-xl mb-4" data-oid="ug_11oz">
                MUBARAK A
              </div>
              <p className="text-muted-foreground mb-6" data-oid="il65s0j">
                AI Engineer & Community Builder specializing in machine
                learning, generative AI, and STEM education.
              </p>

              <div className="flex gap-3" data-oid="33:6tun">
                <SocialButton
                  icon={<Github className="h-5 w-5" data-oid="wgn12ub" />}
                  url="https://github.com/mubarakx01"
                  label="GitHub"
                  data-oid="trc3lqg"
                />

                <SocialButton
                  icon={<Linkedin className="h-5 w-5" data-oid="flfmr:t" />}
                  url="https://www.linkedin.com/in/mubarak-a-xyz/"
                  label="LinkedIn"
                  data-oid="oi-3wk3"
                />

                <SocialButton
                  icon={<Twitter className="h-5 w-5" data-oid="c49:v74" />}
                  url="https://twitter.com"
                  label="Twitter"
                  data-oid="umwv.rb"
                />

                <SocialButton
                  icon={<Mail className="h-5 w-5" data-oid="30b1p.t" />}
                  url="mailto:mr1398463@gmail.com"
                  label="Email"
                  data-oid="4_7sxok"
                />
              </div>
            </motion.div>
          </div>

          <div data-oid="9d:ve9o">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="3v704g:"
            >
              <h3 className="font-semibold mb-4" data-oid="p-u-xut">
                Quick Links
              </h3>
              <ul className="space-y-2" data-oid="q_5-yny">
                <FooterLink href="#" label="Home" data-oid="-5wm.fv" />
                <FooterLink href="#skills" label="Skills" data-oid="xfyrfg1" />
                <FooterLink
                  href="#experience"
                  label="Experience"
                  data-oid=":jn3uaf"
                />

                <FooterLink
                  href="#projects"
                  label="Projects"
                  data-oid="2y7o-e8"
                />

                <FooterLink
                  href="#education"
                  label="Education"
                  data-oid="u1g39aw"
                />

                <FooterLink
                  href="#publications"
                  label="Publications"
                  data-oid="8p0acmw"
                />

                <FooterLink
                  href="#contact"
                  label="Contact"
                  data-oid="3twov_d"
                />
              </ul>
            </motion.div>
          </div>

          <div data-oid="r-6pq_0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="-xspkis"
            >
              <h3 className="font-semibold mb-4" data-oid="6:3ag38">
                Contact Info
              </h3>
              <ul className="space-y-3" data-oid="xyq5qqy">
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid=".q_pa9w"
                >
                  <Mail className="h-4 w-4 text-primary" data-oid="wikn35i" />
                  <span data-oid="rdatowm">mr1398463@gmail.com</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="6m_dupf"
                >
                  <Phone className="h-4 w-4 text-primary" data-oid="37z1b-w" />
                  <span data-oid="aun.yzh">(+91)9500255291</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid=":hla:1w"
                >
                  <MapPin className="h-4 w-4 text-primary" data-oid="v-1c:i9" />
                  <span data-oid="rarkr:l">India,Chennai</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="7n5ne8:"
                >
                  <Calendar
                    className="h-4 w-4 text-primary"
                    data-oid="84dw11c"
                  />

                  <span data-oid=":-svlen">Available for projects</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6" data-oid="_lf-dba">
                <ThemePreview data-oid="__ycmss" />
              </div>
            </motion.div>
          </div>

          <div data-oid="33z-853">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="2r_yjm-"
            >
              <h3 className="font-semibold mb-4" data-oid="x0iy346">
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-4" data-oid="x9nopxx">
                Subscribe to receive updates on new projects and articles.
              </p>

              <Form {...form} data-oid="-1hx_4h">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  data-oid="o6x.jsq"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem data-oid="9ns5_v-">
                        <div className="flex gap-2" data-oid="v9ordxy">
                          <FormControl data-oid="0fwvn9m">
                            <Input
                              placeholder="Your email"
                              {...field}
                              data-oid="bfjd-vm"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            data-oid="gr:9qna"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="ptfollh"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="x7:xhrx"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="rp28gu4"
                                ></path>
                              </svg>
                            ) : (
                              <Send className="h-4 w-4" data-oid="a-b:o2d" />
                            )}
                          </Button>
                        </div>
                        <FormMessage data-oid="1dh11u2" />
                      </FormItem>
                    )}
                    data-oid="9g8d..n"
                  />
                </form>
              </Form>

              <p
                className="text-xs text-muted-foreground mt-2"
                data-oid="gs71x82"
              >
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          data-oid="8wk.2r1"
        >
          <div
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            data-oid="8isu5-e"
          >
            © {currentYear} MUBARAK A. All rights reserved.
          </div>

          <div className="flex items-center gap-4" data-oid="3yfej:p">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-oid="dzwojrk"
            >
              <ArrowUp className="h-4 w-4" data-oid="d_i-5a_" />
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
      data-oid="y_abfrw"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-oid="a_p:qu1"
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
    <li data-oid="dzx:igj">
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        data-oid="ut7c5t_"
      >
        {label}
      </a>
    </li>
  );
}
