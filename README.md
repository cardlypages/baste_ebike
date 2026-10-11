# Baste Ebike & Ecar — NFC Landing Page

A responsive React + Vite landing page designed for an NFC card. The style uses bold black, electric yellow, and Baste red with subtle motion and a QR code linking to the Facebook page.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Import this folder into GitHub and connect the repository to Vercel, or deploy from the project directory using the Vercel CLI.

Vercel settings:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Links currently configured

- Facebook: https://www.facebook.com/Basteebike
- YouTube: https://www.youtube.com/@Basteebikeofficial
- Waze directions: search for GD Plaza in front of WalterMart Guiguinto, Bulacan

The provided screenshot does not include a confirmed phone number or email address, so those are intentionally not displayed.


## Product showcase note

The landing page now has sales-oriented showcase cards for:
- Everyday E-Bikes
- Compact E-Cars
- Utility E-Bikes

Because confirmed model names, product photos, and prices were not provided, these are category illustrations with inquiry buttons rather than claims about exact stock. Replace them with the shop's actual product photos and confirmed details when available.


## Real e-car catalog update

This version includes the 14 supplied Baste electric-car promotional posters in `public/images/products/`, with product cards and inquiry links. Product details and prices are transcribed from the supplied posters and should be confirmed with the shop before purchase. The location section uses an embedded Google Maps search for GD Plaza in front of WalterMart Guiguinto, Bulacan. Phone links: 0936 380 3524 and 0936 380 3523.


## Compact menu-style catalog
The main catalog now shows six poster tiles, with a “+8 more models” tile that opens the full 14-model catalog in an overlay. Selecting a model opens its poster in a lightbox with inquiry and call actions. This keeps the main landing page compact instead of displaying all 14 products in a long scroll.

## Navigation layout

The interface uses a fixed bottom navigation bar (Home, E-Cars, Location, Contact). Tabs switch the visible panel in place, so the main page does not scroll vertically. The all-models catalog and poster detail views open as overlays.
