# Circles Social Media App

A social media app that allows users to post comments, share screen shots, and other common social media functions.

![Netlify](https://img.shields.io/netlify/90b45ef8-56d3-435a-a40f-4884f577b07e)

## Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next.js](https://img.shields.io/badge/nextjs-%2320232a.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-%234169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-%232D3748?style=for-the-badge&logo=prisma&logoColor=white)

### [Click here to try the app live!](https://circles-social-app.netlify.app/)

## Local Development

Install dependencies:

```bash
# install node modules
npm install
```

Add an `.env` file with the following keys:

```ini
# https://clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_key
CLERK_SECRET_KEY=sk_test_key

# https://neon.tech/
DATABASE_URL="postgresql://neondb_owner:user@example.neon.tech/neondb?sslmode=require"

# https://uploadthing.com/
UPLOADTHING_TOKEN='key'
```

Generate prisma client:

```bash
npm run postinstall
```

Run the server:

```bash
# dev server
npm run dev

# prod server
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
