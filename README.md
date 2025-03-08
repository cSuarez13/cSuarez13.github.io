# Claudia Suarez - Portfolio Website

A modern and responsive personal portfolio website built with Next.js, Tailwind CSS, and React. This site showcases my skills, projects, education, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully mobile-friendly and responsive on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive UI**: Smooth animations and transitions for an engaging user experience
- **Accessible**: Designed with accessibility in mind
- **Contact Form**: Integrated with Formspree for easy contact form submission
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Static Export**: Built as a static site for easy deployment on GitHub Pages

## 🛠️ Technologies Used

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library for building user interfaces
- **Lucide React**: Simple and consistent icon set
- **React Intersection Observer**: For scroll-based animations
- **Formspree**: For handling contact form submissions

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/cSuarez13/cSuarez13.github.io.git
   cd cSuarez13.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root with:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-formspree-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Project Structure

```
/
├── public/              # Static files (images, resume, etc.)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── contact/     # Contact form components
│   │   ├── education/   # Education and experience components
│   │   ├── home/        # Home page components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── projects/    # Project showcase components
│   ├── data/            # Data files for content
│   ├── pages/           # Next.js pages
│   └── styles/          # Global CSS and Tailwind configuration
└── ...config files
```

## 📋 Content Management

### Updating Personal Information

Personal information is stored in data files within the `src/data` directory. To update:

1. **Experience/Education**: Edit `src/data/experienceData.js`
2. **Projects**: Edit `src/data/projectsData.js` 
3. **Skills**: Edit `src/data/skillsData.js`
4. **Contact Info**: Update in both `src/components/layout/Footer.js` and `src/pages/contact.js`

### Adding Projects

To add a new project:

1. Add the project details to `src/data/projectsData.js`
2. Add project images to `public/images/projects/`

## 🌐 Deployment

This portfolio is configured for deployment on GitHub Pages using a GitHub Action workflow.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory.

3. Commit and push the changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

### GitHub Actions Deployment

The repository includes a GitHub Actions workflow file (`.github/workflows/nextjs.yml`) that automatically builds and deploys the site whenever changes are pushed to the main branch.

## ✅ Form Submission Setup

The contact form uses Formspree for form submission:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and copy the endpoint
3. Add the endpoint to your GitHub repository as a secret named `FORMSPREE_ENDPOINT`
4. The contact form will now send submissions to your email

## 🎨 Customization

### Theme Colors

Theme colors can be customized in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      purple: {
        // Customize color values here
      },
      dark: {
        // Customize dark mode colors here
      }
    }
  }
}
```

### Typography

Font settings can be adjusted in `tailwind.config.js` and `src/styles/globals.css`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/cSuarez13/cSuarez13.github.io/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Formspree](https://formspree.io/)
- Special thanks to all open-source contributors whose tools made this project possible.