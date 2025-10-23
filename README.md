# Nature-Se - Wild Forest Honey Website

A modern, responsive website for Nature-Se, showcasing premium wild forest honey products with a focus on purity, quality, and ethical sourcing.

## 🍯 About Nature-Se

Nature-Se brings you the raw richness of wild forest honey sourced directly from the pristine forests of India. Our honey is:
- **Untamed** - Captures the raw spirit of wilderness
- **Unfiltered** - Preserves natural pollen, enzymes, and nutrients
- **Unmatched** - Offers flavor and purity that mass-produced honey cannot replicate

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Interactive Product Gallery** - Multiple product images with hover effects
- **Nutritional Information** - Complete nutritional breakdown per 100g
- **Customer Reviews** - Dynamic review system with star ratings
- **Smooth Animations** - Engaging scroll-triggered animations
- **Modern UI/UX** - Clean, professional design with intuitive navigation

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (for reviews and data storage)
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with company story
│   ├── Footer.tsx         # Footer with contact info and links
│   ├── Hero.tsx           # Landing hero section with banner
│   ├── MythBuster.tsx     # Educational content section
│   ├── Navbar.tsx         # Navigation bar
│   ├── Products.tsx       # Product showcase with nutritional info
│   ├── Reviews.tsx        # Customer reviews with submission form
│   └── WhyChoose.tsx      # Benefits and value proposition
├── lib/
│   └── supabase.ts        # Supabase configuration
├── App.tsx                # Main app component
└── main.tsx              # App entry point

public/
├── banner.jpg             # Hero section background
├── logo1.png              # Logo for dark backgrounds
├── logo2.png              # Main logo for light backgrounds
└── product1-5.jpg         # Product images
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-7
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**
   - Go to your Supabase project: https://supabase.com/dashboard/project/wnlzmqfydxqzeuxjhntz
   - Navigate to Settings > API
   - Copy your "Project URL" and "anon/public" API key
   - Update the `.env` file with your actual API key:
     ```env
     VITE_SUPABASE_URL=https://wnlzmqfydxqzeuxjhntz.supabase.co
     VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
     ```

4. **Set up database**
   - The reviews table will be created automatically using the migration file
   - Or run the SQL from `supabase/migrations/20251022114050_create_reviews_table.sql` in your Supabase SQL editor

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 📱 Product Information

### Nature-Se Wild Forest Honey
- **Size**: 250g jar
- **Price**: ₹500
- **Source**: Indian forest regions
- **Processing**: Raw, unfiltered, unprocessed

### Nutritional Values (per 100g)
- Calories: 340 kcal
- Carbohydrates: 82g
- Sugar: 80g
- Fat: 0g
- Protein: 0g
- Sodium: 10mg

## 📞 Contact Information

- **Email**: the.laxmidhar@gmail.com
- **Location**: Thane, Maharashtra
- **Business Focus**: Ethical sourcing, women empowerment, pure natural products

## 🌱 Our Mission

Every jar supports ethical practices and empowers women workers through training and employment. We believe in:
- 🌿 100% Pure & Natural products
- 🐝 Ethical sourcing practices
- 💛 Women empowerment initiatives

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

© 2025 Nature-Se. All rights reserved.

---

*Choose Nature-Se – Real honey doesn't have a season — it has a reason.*
