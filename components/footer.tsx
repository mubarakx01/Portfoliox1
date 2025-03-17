import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-24" data-oid="6ho-87:">
      <div className="container mx-auto px-4" data-oid="6tqbwpf">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-oid="6o28eom"
        >
          <div className="mb-6 md:mb-0" data-oid="k8.lktm">
            <div className="font-bold text-xl" data-oid="94k3m5-">
              Shaquille Williams
            </div>
            <div className="text-muted-foreground" data-oid="banlno1">
              AI Engineer & Community Builder
            </div>
          </div>

          <div className="flex gap-4" data-oid="r3v63d1">
            <Button variant="ghost" size="icon" asChild data-oid="6uzw2bu">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-oid="4gj_c8u"
              >
                <Github className="h-5 w-5" data-oid="l0lrc5c" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="q1okeqy">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-oid="8lm2ovj"
              >
                <Linkedin className="h-5 w-5" data-oid="q3h-.e4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="s.h56j6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                data-oid="jh3wx1c"
              >
                <Twitter className="h-5 w-5" data-oid="6fxzs:n" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="34q_rbh">
              <a
                href="mailto:shaq.williams.ai@gmail.com"
                aria-label="Email"
                data-oid=":ygdaer"
              >
                <Mail className="h-5 w-5" data-oid="5--mlih" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className="mt-8 text-center text-sm text-muted-foreground"
          data-oid="yp4l5v5"
        >
          © {new Date().getFullYear()} Shaquille Williams. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
