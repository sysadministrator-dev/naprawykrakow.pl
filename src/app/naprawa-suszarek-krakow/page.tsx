import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePage } from "@/lib/service-pages";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";

const SLUG = "naprawa-suszarek-krakow";

export function generateMetadata(): Metadata {
  const page = getServicePage(SLUG);
  if (!page) return {};
  return {
    title: `${page.h1} | NaprawyKraków`,
    description: page.metaDescription,
  };
}

export default function Page() {
  const page = getServicePage(SLUG);
  if (!page) notFound();
  return <ServiceLandingTemplate page={page} />;
}
