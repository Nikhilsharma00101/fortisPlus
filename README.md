# FortisPlus – Advancing Healthcare with Trust

FortisPlus is a professional, production-ready medical firm website built with modern web technologies. Designed for healthcare providers to showcase services, manage doctor profiles, and facilitate easy patient appointments via WhatsApp.

## 🚀 Live Features

-   **WhatsApp Appointment System**: Seamless client-side booking that redirects users to WhatsApp with pre-filled, formatted consultation requests.
-   **Dynamic Doctor Directory**: Profile cards for specialists with image support and a customizable "Available Today" status toggle.
-   **Service Showcases**: Modern UI cards for various medical departments (Cardiology, Pediatrics, Diagnostics, etc.).
-   **Patient Resources**: FAQ accordions, insurance guides, and billing information.
-   **Responsive & Premium UI**: Mobile-first design with smooth scroll animations, glassmorphism navbars, and a professional medical color palette.
-   **SEO Optimized**: Semantic HTML5, metadata management per page, and optimized images using `next/image`.

## 🛠️ Tech Stack

-   **Frontend**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Fonts**: Outfit (via Google Fonts)

## 📁 Project Structure

```text
├── app/                  # App router pages (Home, About, Doctors, etc.)
├── components/           # Reusable UI components (Navbar, Hero, Cards)
├── public/               # Static assets & Doctor portraits
├── lib/                  # Utility functions (cn helper)
└── globals.css           # Tailwind v4 theme and custom utilities
```

## ⚙️ Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build

```bash
npm run build
npm start
```

## 🏥 Customization Guide

### Changing Doctor Availability
In `app/doctors/page.tsx`, find the doctor object and toggle the `isAvailable` boolean:
```tsx
{ name: "Dr. Name", ..., isAvailable: false }
```

### Updating WhatsApp Contact
In `components/WhatsAppButton.tsx` and `app/appointment/page.tsx`, update the `PHONE_NUMBER` constant to your hospital's support number.

### Map Location
The contact map uses a Google Maps embed in `app/contact/page.tsx`. Currently configured for **Fortis Vasant Kunj, New Delhi**.

## 🛡️ Legal
Includes predefined templates for:
-   Privacy Policy
-   Terms of Service
-   Medical Disclaimer

---
*Built for excellence in healthcare digital presence.*
