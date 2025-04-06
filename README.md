# Paula Bassagañas Òdena - Personal Portfolio

This is a personal branding website for Paula Bassagañas Òdena, an IT Architect specialized in test automation and the pharmaceutical field.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern, clean and professional UI
- Timeline display for professional experience and conferences
- Contact form for visitors to reach out
- Dark/light mode support
- Fast and optimized for performance

## Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Bassaganas/bassagan_about_us.git
   cd bassagan_about_us
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

The deployment is handled by GitHub Actions using the workflow defined in `.github/workflows/deploy.yml`.

## Customization

To update the timeline information:
- Edit the `src/data/timeline-data.ts` file to add or modify experiences and conferences

To update contact information:
- Edit the email in `src/components/Contact.tsx` and `src/components/Footer.tsx`

## License

This project is licensed under the MIT License.
