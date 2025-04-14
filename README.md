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

## Development with Feature Branches

This project is configured to automatically deploy feature branches to Vercel preview environments.

### How It Works

1. **Creating a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Making Changes**
   Make your changes to the codebase as needed.

3. **Pushing Changes**
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin feature/your-feature-name
   ```

4. **Automated Deployment**
   - GitHub Actions will automatically trigger a deployment to a Vercel preview environment
   - Each feature branch gets its own unique URL

5. **Accessing Your Preview**
   - Go to your Vercel dashboard to see all deployments
   - Each deployment will have a unique URL in the format: `https://your-project-git-feature-your-feature-name.vercel.app`

6. **Merging to Main**
   When your feature is ready for production:
   ```bash
   git checkout main
   git pull
   git merge feature/your-feature-name
   git push origin main
   ```
   
   This will automatically trigger a production deployment.

## Contact Form

The contact form uses EmailJS for sending emails. The implementation uses a server-side API route to avoid browser-based connection issues.

### Local Development

To run the project locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Environment Variables

Set these environment variables in your Vercel project and in your local `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key  # Only needed if using EmailJS Pro
```

**Important Note About EmailJS**:
- The free plan of EmailJS only allows client-side API calls
- If you're on the free plan, the form will still appear to work, but emails won't actually be sent
- For server-side sending to work, you need to:
  1. Upgrade to a paid EmailJS plan
  2. Create a private API key in your EmailJS dashboard
  3. Add that key to your environment variables

Make sure these are set in both your Vercel project settings and GitHub repository secrets.
