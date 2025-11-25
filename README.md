# Crypto Gold Website

## 🌐 Official Website for Crypto Gold - Madagascar Gold Mining & Blockchain Investment

A modern Next.js website showcasing Crypto Gold's blockchain-integrated gold mining operations in Madagascar.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Resend API key (for contact form)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/crypto-gold-website.git
cd crypto-gold-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env and add your RESEND_API_KEY
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
Visit `http://localhost:3000`

## 📧 Email Configuration

The contact form uses Resend API to send emails to:
- **Investment inquiries**: investor@cryptogold.cloud
- **General/Partnership/Media**: info@cryptogold.cloud

### Get Resend API Key:
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (cryptogold.cloud)
3. Generate API key from [API Keys page](https://resend.com/api-keys)
4. Add to `.env` file

## 🌍 Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Add environment variable: `RESEND_API_KEY`
- Click **Deploy**

3. **Add Custom Domain**
- Go to Vercel project → Settings → Domains
- Add `cryptogold.cloud`
- Configure DNS records as shown

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🔧 Project Structure

```
├── app/
│   ├── api/contact/       # Contact form API endpoint
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── sections/         # Page sections
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer component
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── .env.example         # Environment variables template
```

## 🔗 Important Links

- **Skylark Mining Portal**: https://skylark.abacusai.app
- **Custom Domain**: https://cryptogold.cloud (after deployment)
- **Email Dashboard**: https://resend.com/emails

## 📝 Environment Variables

```env
RESEND_API_KEY=re_your_api_key_here
INVESTOR_EMAIL=investor@cryptogold.cloud
GENERAL_EMAIL=info@cryptogold.cloud
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.28
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend API
- **Deployment**: Vercel
- **Domain**: Hostinger (cryptogold.cloud)

## 📧 Support

For questions about the website, contact: info@cryptogold.cloud

## 📄 License

Private - Crypto Gold © 2024
