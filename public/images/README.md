# Image Placement Instructions

To properly display images on your website, please place the following files in this directory:

## Required Images

1. **Profile Photo**
   - File name: `Paula_Bassaganas_Odena.JPG`
   - Description: Your personal profile photo showing you outdoors with glasses and long dark hair
   - Used in: Hero section

2. **Logo/Icon**
   - File name: `icon.png`
   - Description: The orange logo with stylized profile and tech circuit elements
   - Used in: Header/navigation bar

3. **Timeline Photos** (optional but recommended)
   - `/images/pharma-tech.jpg` - Image representing pharmaceutical technology work
   - `/images/test-automation.jpg` - Image representing test automation processes
   - `/images/conference-speaking.jpg` - Image of conference presentation

## How to Add Images

1. Save the images from your computer to this directory (`public/images/`)
2. Make sure to use the exact filenames listed above
3. For best results, optimize your images for web:
   - Profile photo: 800-1200px wide, JPG format
   - Icon: 100-200px, PNG format with transparency
   - Timeline images: 800-1200px wide, JPG format

If you want to use different filenames, you'll need to update the references in the code:
- For profile photo: `src/components/Hero.tsx`
- For icon: `src/components/Header.tsx`
- For timeline images: `src/data/timeline-data.ts`

For now, the Timeline component is designed to handle missing images gracefully by showing a text-only version when images aren't available. 