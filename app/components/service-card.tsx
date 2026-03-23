import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  slug: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  slug,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 p-8 cursor-pointer h-full flex flex-col">
        <div className="mb-4">
          <div className="inline-flex p-3 bg-secondary bg-opacity-10 rounded-lg">
            <Icon size={32} className="text-secondary" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-text mb-3">{title}</h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-secondary font-semibold">{price}</span>
          <span className="text-cta font-semibold text-sm">
            Voir détails →
          </span>
        </div>
      </div>
    </Link>
  );
}
