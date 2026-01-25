import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.008 12.039a11.81 11.81 0 001.604 5.955L0 23.333l5.435-1.426a11.782 11.782 0 005.614 1.43h.005c6.635 0 12.038-5.403 12.041-12.04.001-3.214-1.252-6.234-3.528-8.51" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 py-16 border-t bg-neutral-50 text-neutral-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Business Details */}
        <div className="md:col-span-1">
          <h3 className="font-serif text-lg mb-4 text-neutral-900">Sri Gajalaxmi Canvasing Agent</h3>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <p>3-4-63, Ambedkar Nagar, Karimnagar Road<br />Siddipet, Telangana,<br />India - 502103</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/#about" className="hover:text-neutral-900 transition">About</Link></li>
            <li><Link href="/#ngos" className="hover:text-neutral-900 transition">NGOs</Link></li>
            <li><Link href="/#insights" className="hover:text-neutral-900 transition">Insights</Link></li>
            <li><Link href="/#contact" className="hover:text-neutral-900 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900">Contact</h3>
          <div className="space-y-3 text-sm">
            <a href="tel:+91944077741" className="flex items-center gap-3 hover:text-neutral-900 transition">
              <Phone className="w-4 h-4" />
              +91 94407 77741
            </a>
            <a href="mailto:gajalaxmi.naveen@gmail.com" className="flex items-center gap-3 hover:text-neutral-900 transition">
              <Mail className="w-4 h-4" />
              gajalaxmi.naveen@gmail.com
            </a>
          </div>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900">Follow Me</h3>
          <div className="flex gap-4">
            <Link
              href="https://wa.me/91944077741"
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-green-600 hover:border-green-600 transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/naveen.mankala"
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-pink-600 hover:border-pink-600 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/galaxmi.naveen"
              target="_blank"
              className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:border-blue-600 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}