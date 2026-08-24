# Portfolio Guidelines

## Responsibility

This repository owns Paula Bassagañas's portfolio, professional timeline, speaking content, and contact experience. It is a Next.js/TypeScript/Tailwind application deployed through Vercel. Read `README.md`, `package.json`, `next.config.js`, `next.config.ts`, `vercel.json`, and `.github/workflows/deploy.yml` before changing deployment behavior.

The site has no operational dependency on other TestingFantasy repositories. Links to talks or products are content relationships only.

## Design and Architecture

- Prefer KISS: most content belongs in typed data and focused presentation components, not a CMS or service layer without a demonstrated need.
- Keep components single-purpose, but do not split markup into abstractions used only once unless the boundary materially improves testing or readability.
- Treat EmailJS and SendGrid as external adapters. Keep provider details out of form validation and presentation logic.
- Preserve accessibility, keyboard behavior, responsive layout, metadata, and static-export compatibility.

## Testing and Validation

- Use TDD for contact validation, submission states, navigation, and other behavior. Use visual/browser checks for layout changes.
- Run lint, TypeScript/build validation, and relevant component/browser tests locally before preparing a Vercel deployment.
- Test contact flows with mocks or provider sandboxes; never send unintended real email during automated checks.

## Critical Context

- The repository contains multiple Next configuration files and documentation that may not match the current Vercel workflow. Determine which configuration is loaded before editing or deleting one.
- A static export and a server API route are potentially incompatible deployment assumptions. Characterize the current Vercel build before changing contact handling.
- Never expose SendGrid credentials or personal contact data in client bundles, logs, screenshots, or fixtures.
