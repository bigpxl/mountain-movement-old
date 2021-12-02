mt-mvmt-theme

## Push theme live
shopify login --store mt-movement.myshopify.com

## Tailwind CSS
Tailwind is not added via buld tools, rather it's added via the Tailwind CLI by running the below
command.

npx tailwindcss build src/app.css -o assets/tailwind.css