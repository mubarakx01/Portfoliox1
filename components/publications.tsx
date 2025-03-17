import { Book, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Publications() {
  return (
    <section id="publications" className="py-12" data-oid="dokrel:">
      <h2 className="text-3xl font-bold text-center mb-8" data-oid="w:mrhco">
        Publications & Contributions
      </h2>

      <div className="grid md:grid-cols-2 gap-8" data-oid="zz84a3v">
        <div data-oid="bl2-1u.">
          <div className="flex items-center gap-2 mb-6" data-oid="9jqm95s">
            <Book className="h-5 w-5" data-oid="z328sl8" />
            <h3 className="text-xl font-semibold" data-oid="717_14c">
              Publications
            </h3>
          </div>

          <div className="space-y-4" data-oid="2hbud0:">
            <PublicationCard
              title="Mastering Kubernetes (Third Edition)"
              type="Book"
              description="A comprehensive guide to container orchestration with Kubernetes, focusing on scalable ML deployments and community-oriented infrastructure."
              date="2023"
              link="#"
              data-oid="icbo-a1"
            />

            <PublicationCard
              title="Machine Learning for Cybersecurity Cookbook"
              type="Book"
              description="Practical recipes for implementing machine learning in cybersecurity applications, with a focus on ethical hacking and security for social justice initiatives."
              date="2022"
              link="#"
              journal="O'Reilly Media"
              data-oid="yvz.d2v"
            />

            <PublicationCard
              title="Efficient Voice Cloning with Reduced Computational Resources"
              type="Journal"
              description="Novel techniques for optimizing voice synthesis models for edge devices and resource-constrained environments."
              date="2022"
              link="#"
              journal="IEEE Transactions on Audio Processing"
              data-oid="moym6ii"
            />

            <PublicationCard
              title="Community-Centered AI: Bridging Technology and Social Impact"
              type="Conference Paper"
              description="Framework for developing AI solutions with direct community involvement and feedback loops for social change applications."
              date="2021"
              link="#"
              conference="NeurIPS Workshop on AI for Social Good"
              data-oid="n-mv_4z"
            />
          </div>
        </div>

        <div data-oid="9vb2lzz">
          <div className="flex items-center gap-2 mb-6" data-oid="ms0-nte">
            <Presentation className="h-5 w-5" data-oid="n8lbnl0" />
            <h3 className="text-xl font-semibold" data-oid="d89m-6d">
              Workshops & Talks
            </h3>
          </div>

          <div className="space-y-4" data-oid="1arjxjj">
            <WorkshopCard
              title="GraphNR Workshop 2023"
              venue="Network Analysis Conference"
              description="Hands-on workshop on combining graph neural networks with social network analysis for community mapping and resource allocation."
              date="October 2023"
              data-oid="tbhnr87"
            />

            <WorkshopCard
              title="Hacktivism & Digital Tools for Social Change"
              venue="Social Justice Tech Summit"
              description="Workshop on ethical hacking, secure communication, and digital privacy tools for activists and community organizers."
              date="August 2023"
              data-oid="a.9s.mx"
            />

            <WorkshopCard
              title="Democratizing AI Education"
              venue="STEM Education Summit"
              description="Keynote on creating accessible AI curriculum for underrepresented communities and educational institutions."
              date="May 2023"
              data-oid="--_5c.8"
            />

            <WorkshopCard
              title="MLOps for Community Organizations"
              venue="Tech for Social Impact Conference"
              description="Workshop on implementing lightweight ML pipelines for resource-constrained organizations and activist networks."
              date="February 2022"
              data-oid="wtkzxzi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface PublicationCardProps {
  title: string;
  type: string;
  description: string;
  date: string;
  link: string;
  journal?: string;
  conference?: string;
}

function PublicationCard({
  title,
  type,
  description,
  date,
  link,
  journal,
  conference,
}: PublicationCardProps) {
  return (
    <Card data-oid="-ij7mzd">
      <CardHeader className="pb-2" data-oid="ydncll4">
        <div className="flex justify-between items-start" data-oid="pf1bry8">
          <CardTitle className="text-lg" data-oid="cxhtqmk">
            {title}
          </CardTitle>
          <Badge data-oid="lhva18g">{type}</Badge>
        </div>
        {journal && (
          <div className="text-sm text-muted-foreground" data-oid="c3ax0f9">
            {journal}
          </div>
        )}
        {conference && (
          <div className="text-sm text-muted-foreground" data-oid="8.jans2">
            {conference}
          </div>
        )}
      </CardHeader>
      <CardContent data-oid="l76asza">
        <p className="text-sm mb-3" data-oid="6b8k_05">
          {description}
        </p>
        <div className="flex justify-between items-center" data-oid="j2novz8">
          <div className="text-sm text-muted-foreground" data-oid="amy6ldj">
            {date}
          </div>
          <a
            href={link}
            className="text-sm text-primary hover:underline"
            data-oid="edf:3vx"
          >
            Read Paper
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkshopCardProps {
  title: string;
  venue: string;
  description: string;
  date: string;
}

function WorkshopCard({ title, venue, description, date }: WorkshopCardProps) {
  return (
    <Card data-oid="p35s6z:">
      <CardHeader className="pb-2" data-oid="17yszys">
        <div className="flex justify-between items-start" data-oid="z81pn:c">
          <CardTitle className="text-lg" data-oid="npgjmpz">
            {title}
          </CardTitle>
          <Badge variant="outline" data-oid="ph5hi44">
            {venue}
          </Badge>
        </div>
      </CardHeader>
      <CardContent data-oid="11cpnqo">
        <p className="text-sm mb-3" data-oid="ua:tvyj">
          {description}
        </p>
        <div className="text-sm text-muted-foreground" data-oid="ct8-akl">
          {date}
        </div>
      </CardContent>
    </Card>
  );
}
