# Portfolio-Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This project showcases a full-stack developer's work, skills, and experience through a clean, professional interface with dark/light theme support.

## Features

- **Responsive Design** - Mobile-first layout that adapts seamlessly across devices
- **Dark/Light Theme Toggle** - Persistent theme switching with localStorage support
- **Contact Form** - Integrated email functionality using Nodemailer
- **Component Library** - Extensive UI component system using Radix UI primitives
- **Smooth Animations** - Tailwind animations and transitions for enhanced UX
- **SEO Optimized** - Proper metadata, structured data, and Vercel Analytics integration

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 4.2.0 with PostCSS
- **UI Components**: Radix UI primitives and custom components
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Email**: Nodemailer for contact form functionality
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React

## Installation

```bash
# Clone the repository
git clone https://github.com/rohan2519y/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies using npm
npm install

# Or using pnpm
pnpm install
```

## Usage

```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Start production server
npm start
# or
pnpm start

# Run linting
npm run lint
# or
pnpm lint
```

## Configuration

The project uses environment variables for email configuration. Create a `.env.local` file in the root directory:

```env
# Email configuration for contact form
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── api/
│   │   └── send-email/route.ts    # API endpoint for contact form
│   ├── layout.tsx                 # Root layout with theme provider
│   ├── page.tsx                   # Main page component
│   └── globals.css                # Global styles
├── components/
│   ├── ui/                        # Radix UI component wrappers
│   ├── theme-provider.tsx         # Theme context provider
│   ├── theme-switcher.tsx         # Theme toggle component
│   ├── hero.tsx                   # Hero section
│   ├── about.tsx                  # About section
│   ├── skills.tsx                 # Skills section
│   ├── projects.tsx               # Projects section
│   ├── experience.tsx             # Experience section
│   ├── contact.tsx                # Contact section
│   └── footer.tsx                 # Footer component
├── lib/
│   └── utils.ts                   # Utility functions (cn helper)
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── postcss.config.mjs            # PostCSS configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is not explicitly licensed. Please contact the repository owner for usage permissions.

## Support

- **Live Demo**: https://rohankumarportfolio.vercel.app/
- **Issues**: Report issues through the GitHub repository issues tab
