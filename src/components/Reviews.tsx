import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
};

const GOOGLE_MAPS_REVIEW_LINK =
  'https://www.google.com/maps/place/Nature-se/@19.2323068,72.9448897,18689m/data=!3m1!1e3!4m6!3m5!1s0x4c42d5253aa6043f:0x43a14f3eea20bff8!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11ynxc29nw?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D';

export default function Reviews() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Default/fallback rating (used when live Google data is not available)
  const defaultRating = 4.7;

  const [rating, setRating] = useState<number | null>(defaultRating);
  const [topReviews, setTopReviews] = useState<GoogleReview[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY as string | undefined;
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // If API key and place id are provided, try to fetch live data from Google Places Details
    if (!apiKey || !placeId) return;

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
          placeId
        )}&fields=rating,reviews&key=${encodeURIComponent(apiKey)}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data && data.result) {
          if (typeof data.result.rating === 'number') setRating(data.result.rating);
          if (Array.isArray(data.result.reviews)) {
            const reviews: GoogleReview[] = (data.result.reviews as Array<Record<string, unknown>>)
              .slice(0, 2)
              .map((r) => ({
                author_name: String(r['author_name'] ?? ''),
                rating: Number(r['rating'] ?? 0),
                text: String(r['text'] ?? ''),
                relative_time_description: String(r['relative_time_description'] ?? ''),
              }));
            setTopReviews(reviews);
          }
        } else {
          setError('No review data returned from Google Places API.');
        }
      } catch (err: unknown) {
        // Common failure: CORS when calling Google Places Web Service from browser.
        setError(
          'Unable to fetch live Google reviews from the browser. This commonly happens due to CORS or missing API credentials. See README for server-side proxy instructions.'
        );
        console.error('Google Places fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  const renderStars = (value: number | null) => {
    const full = Math.round(value || 0);
    return (
      <div className="flex items-center space-x-2">
        <div className="flex text-amber-500">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`${s <= full ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
          ))}
        </div>
        <div className="text-gray-700 font-semibold">{value ? value.toFixed(1) : '—'}</div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="reviews" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Real experiences from real people</p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Average Rating</h3>
            {loading ? (
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
            ) : (
              <div className="flex flex-col items-center space-y-3">
                {renderStars(rating)}
                <div className="text-sm text-gray-600">Live rating from Google Maps</div>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {topReviews.length > 0 &&
            topReviews.map((r, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-800">{r.author_name}</div>
                  <div className="text-amber-500">{Array.from({ length: Math.round(r.rating) }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}</div>
                </div>
                <div className="text-sm text-gray-700">{r.text}</div>
                {r.relative_time_description && (
                  <div className="text-xs text-gray-500 mt-2">{r.relative_time_description}</div>
                )}
              </div>
            ))}
        </div>

        {error && (
          <div className="max-w-4xl mx-auto mb-6 text-center text-sm text-red-600">{error}</div>
        )}

        <div className="max-w-xs mx-auto">
          <a href={GOOGLE_MAPS_REVIEW_LINK} target="_blank" rel="noreferrer" className="block w-full text-center bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition">
            Review us
          </a>
        </div>
      </div>
    </section>
  );
}
