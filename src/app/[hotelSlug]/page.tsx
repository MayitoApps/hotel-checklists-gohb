import { notFound } from 'next/navigation';
import { HOTELS } from '@/data/initialData';
import HotelKiosk from '@/components/HotelKiosk';

interface HotelPageProps {
  params: Promise<{
    hotelSlug: string;
  }>;
}

export function generateStaticParams() {
  return HOTELS.map((hotel) => ({
    hotelSlug: hotel.slug,
  }));
}

export default async function HotelPage({ params }: HotelPageProps) {
  const resolvedParams = await params;
  const hotel = HOTELS.find((h) => h.slug === resolvedParams.hotelSlug);

  if (!hotel) {
    notFound();
  }

  return <HotelKiosk hotel={hotel} />;
}
