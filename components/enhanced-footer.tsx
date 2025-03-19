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
            data-oid="ox-5sur"
          >
            <CheckCircle
              className="h-5 w-5 text-green-500"
              data-oid="7cftp6v"
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
      data-oid="j:hgk8x"
    >
      <div className="container mx-auto px-4 py-12" data-oid="5asg6a.">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          data-oid="k-p2xdv"
        >
          <div data-oid="zotycp2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-oid="hkstl77"
            >
              <div className="font-bold text-xl mb-4" data-oid="6okdbhq">
                MUBARAK A
              </div>
              <p className="text-muted-foreground mb-6" data-oid="zq9aiuc">
                AI Engineer & Community Builder specializing in machine
                learning, generative AI, and STEM education.
              </p>

              <div className="flex gap-3" data-oid="4:c8vzm">
                <SocialButton
                  icon={<Github className="h-5 w-5" data-oid="9xro_uo" />}
                  url="https://github.com/mubarakx01"
                  label="GitHub"
                  data-oid="dr9.7br"
                />

                <SocialButton
                  icon={<Linkedin className="h-5 w-5" data-oid="3r0mcfr" />}
                  url="https://www.linkedin.com/in/mubarak-a-xyz/"
                  label="LinkedIn"
                  data-oid="pvn6qnh"
                />

                <SocialButton
                  icon={<Twitter className="h-5 w-5" data-oid="6azz.g2" />}
                  url="https://twitter.com"
                  label="Twitter"
                  data-oid="d6ef7ix"
                />

                <SocialButton
                  icon={<Mail className="h-5 w-5" data-oid="wsu0-w6" />}
                  url="mailto:mr1398463@gmail.com"
                  label="Email"
                  data-oid=":b:2vbc"
                />
              </div>
            </motion.div>
          </div>

          <div data-oid="jfcarye">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-oid="iodymtn"
            >
              <h3 className="font-semibold mb-4" data-oid="ox.5tlk">
                Quick Links
              </h3>
              <ul className="space-y-2" data-oid="mwwby3h">
                <FooterLink href="#" label="Home" data-oid="6_lawa." />
                <FooterLink href="#skills" label="Skills" data-oid="nzkrd60" />
                <FooterLink
                  href="#experience"
                  label="Experience"
                  data-oid="96k7:mv"
                />

                <FooterLink
                  href="#projects"
                  label="Projects"
                  data-oid="332iym_"
                />

                <FooterLink
                  href="#education"
                  label="Education"
                  data-oid="z1cbjx6"
                />

                <FooterLink
                  href="#publications"
                  label="Publications"
                  data-oid="atsbzs:"
                />

                <FooterLink
                  href="#contact"
                  label="Contact"
                  data-oid="_8-cqtd"
                />
              </ul>
            </motion.div>
          </div>

          <div data-oid="lpa.zb:">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-oid="_73qi14"
            >
              <h3 className="font-semibold mb-4" data-oid="9gi52x7">
                Contact Info
              </h3>
              <ul className="space-y-3" data-oid="y4z.c26">
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="9tv-01b"
                >
                  <Mail className="h-4 w-4 text-primary" data-oid="3fuets9" />
                  <span data-oid="uz3mvv3">mr1398463@gmail.com</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="q_-i-r9"
                >
                  <Phone className="h-4 w-4 text-primary" data-oid="vw6oe.g" />
                  <span data-oid="7f5o3:5">(+91)9500255291</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="_bh7h:0"
                >
                  <MapPin className="h-4 w-4 text-primary" data-oid="fjwr-5v" />
                  <span data-oid="i3clv7m">India,Chennai</span>
                </li>
                <li
                  className="flex items-center gap-3 text-muted-foreground"
                  data-oid="pog4dqb"
                >
                  <Calendar
                    className="h-4 w-4 text-primary"
                    data-oid="kjz-9ja"
                  />

                  <span data-oid="ncc:-mi">Available for projects</span>
                </li>
              </ul>

              {/* Add Theme Preview */}
              <div className="mt-6" data-oid="ihejh2q">
                <ThemePreview data-oid="xj0gnzm" />
              </div>
            </motion.div>
          </div>

          <div data-oid="-ki-_3c">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-oid="5sr:93t"
            >
              <h3 className="font-semibold mb-4" data-oid="3o5sqfv">
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-4" data-oid="ug33jen">
                Subscribe to receive updates on new projects and articles.
              </p>

              <Form {...form} data-oid="2071_mk">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  data-oid="ju6ao4f"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem data-oid="b1av4ak">
                        <div className="flex gap-2" data-oid="7axgniz">
                          <FormControl data-oid="atel6bm">
                            <Input
                              placeholder="Your email"
                              {...field}
                              data-oid="iv_y_:p"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isSubmitting}
                            data-oid="c9sbw_2"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                data-oid="q0g-z9u"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  data-oid="8k_sbn5"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  data-oid="m.7p8t8"
                                ></path>
                              </svg>
                            ) : (
                              <Send className="h-4 w-4" data-oid="cpmnq_p" />
                            )}
                          </Button>
                        </div>
                        <FormMessage data-oid="l7_9p3:" />
                      </FormItem>
                    )}
                    data-oid="ag7spoq"
                  />
                </form>
              </Form>

              <p
                className="text-xs text-muted-foreground mt-2"
                data-oid="vgmg3vh"
              >
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          data-oid="w6ubk-8"
        >
          <div
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            data-oid="s6g4.1j"
          >
            © {currentYear} MUBARAK A. All rights reserved.
          </div>

          <div className="flex items-center gap-4" data-oid="9o340dd">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-oid="twk_jal"
            >
              <ArrowUp className="h-4 w-4" data-oid="6.md_0s" />
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
      data-oid="g0oy72u"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-oid="_i_4z0z"
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
    <li data-oid="kdek_5z">
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        data-oid="r8x:vvy"
      >
        {label}
      </a>
    </li>
  );
}
