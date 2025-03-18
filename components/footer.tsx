import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-24" data-oid="cgftkw_">
      <div className="container mx-auto px-4" data-oid="z1a1-x8">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-oid="vtr0-4a"
        >
          <div className="mb-6 md:mb-0" data-oid="3r8fj2g">
            <div className="font-bold text-xl" data-oid="qgx0sgg">
              MUBARAK A
            </div>
            <div className="text-muted-foreground" data-oid="deheg0f">
              AI Engineer & Community Builder
            </div>
          </div>

          <div className="flex gap-4" data-oid="-avss6s">
            <Button variant="ghost" size="icon" asChild data-oid="tgj9wbl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-oid="4gq78o-"
              >
                <Github className="h-5 w-5" data-oid="14g2g1a" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="1pig0m0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-oid="ql403gj"
              >
                <Linkedin className="h-5 w-5" data-oid="_b_v86o" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="s:x40o.">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                data-oid="_kdhnrg"
              >
                <Twitter className="h-5 w-5" data-oid="y_64yb2" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-oid="..:9_o7">
              <a
                href="mailto:mr1398463@gmail.com"
                aria-label="Email"
                data-oid="l_0-8ee"
              >
                <Mail className="h-5 w-5" data-oid="dgu5aco" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className="mt-8 text-center text-sm text-muted-foreground"
          data-oid="fyhhz07"
        >
          © {new Date().getFullYear()} MUBARAK A. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
