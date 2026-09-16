/**
 * Some files under public/images are brand marks or product shots on a white
 * background rather than photographs. They must be shown whole on a light
 * background instead of being cropped, and they carry their caption below the
 * image rather than over it. Add the distinctive part of a file name here when
 * you add a new one.
 */
const LOGO_IMAGES = [
    'boehringer_ingelheim',
    'upf',
    'lidl_pay',
    'cobas_infinity',
    'cobas_liat',
    'cobas_711_511',
];

export function isLogo(path: string): boolean {
    return LOGO_IMAGES.some((name) => path.includes(name));
}
