import { Star, Send, CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { supabase, Review } from '../lib/supabase';

export default function Reviews() {
  const [visible, setVisible] = useState(false);
  const [reviewStack, setReviewStack] = useState<Review[]>([]); // Stack to hold latest 6 reviews
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review_text: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

  // Stack operations
  const pushToStack = (newReview: Review, currentStack: Review[]) => {
    const updatedStack = [newReview, ...currentStack]; // Add to top of stack
    return updatedStack.slice(0, 6); // Keep only latest 6 reviews (LIFO - Last In, First Out)
  };

  const initializeStack = (allReviews: Review[]) => {
    // Sort by created_at descending (most recent first) and take first 6
    const sortedReviews = allReviews
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 6);
    return sortedReviews;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const allReviews = data || [];
      
      // Initialize stack with the 6 most recent reviews
      const stackReviews = initializeStack(allReviews);
      setReviewStack(stackReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data, error } = await supabase.from('reviews').insert([
        {
          name: formData.name,
          rating: formData.rating,
          review_text: formData.review_text,
          is_approved: true,
        },
      ]).select();

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', rating: 5, review_text: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      // Add new review to stack (LIFO behavior)
      if (data && data[0]) {
        const newReview = data[0] as Review;
        const updatedStack = pushToStack(newReview, reviewStack);
        setReviewStack(updatedStack);
      }

      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-amber-500 text-amber-500'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && setFormData({ ...formData, rating: star })}
          />
        ))}
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

        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-amber-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {reviewStack.map((review, index) => (
              <div
                key={review.id}
                className={`bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">{review.name}</h4>
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">"{review.review_text}"</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  {new Date(review.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        )}

        <div
          className={`max-w-3xl mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">Share Your Experience</h3>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">We'd love to hear from you!</p>

          {submitted && (
            <div className="mb-4 sm:mb-6 bg-green-500 text-white p-3 sm:p-4 rounded-xl flex items-center justify-center space-x-2 text-sm sm:text-base">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-semibold">Thank you for your wonderful review! 🍯</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Your Rating</label>
              {renderStars(formData.rating, true)}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Your Review</label>
              <textarea
                required
                value={formData.review_text}
                onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                placeholder="Share your experience with Nature-Se honey..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-amber-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {submitting ? (
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Review</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
