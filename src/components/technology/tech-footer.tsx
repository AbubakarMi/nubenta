import { Cpu, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function TechFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <Link href="/technology" className="flex items-center gap-2 text-2xl font-bold">
              <Cpu className="h-7 w-7 text-accent" />
              <span>Nubenta Technology</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Innovating Today, Shaping Tomorrow. We build powerful digital solutions that transform businesses and lives.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#who-we-are" className="text-primary-foreground/70 hover:text-accent transition-colors">Who We Are</Link></li>
              <li><Link href="#what-we-solve" className="text-primary-foreground/70 hover:text-accent transition-colors">What We Solve</Link></li>
              <li><Link href="#our-work" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
             <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>tech@nubenta.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+234 704 252 6071</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>No 23 Emir's palara road kano, nigeria</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nubenta Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
