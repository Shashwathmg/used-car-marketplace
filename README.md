# Used Car Marketplace

A modern Next.js application featuring a Calculator module and a Used Car Marketplace built with React, TypeScript, Zustand, and Tailwind CSS.

## Live Demo

https://used-car-marketplace-sigma.vercel.app/

## GitHub Repository

https://github.com/Shashwathmg/used-car-marketplace

---

## Features

### Calculator

- Addition
- Subtraction
- Multiplication
- Division
- Clear functionality
- Backspace functionality
- Keyboard support
- Responsive UI

### Used Car Marketplace

- Car listing page
- Dynamic mock API integration
- Search cars by make and model
- Sort cars by:
  - Price Low to High
  - Price High to Low
  - Newest
  - Oldest

- Car details modal popup
- Responsive design
- Interactive hover effects

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### State Management

- Zustand

### Animations

- Framer Motion
- GSAP

### Deployment

- Vercel

---

## Project Structure

```text
app/
├── api/
│   └── cars/
├── cars/
├── page.tsx
├── layout.tsx

components/
├── calculator/
├── cars/

hooks/
├── useCalculator.ts
├── useCars.ts

store/
├── calculatorStore.ts
├── carsStore.ts

types/
├── car.ts

public/
├── favicon.ico
├── og-image.png
```

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Shashwathmg/used-car-marketplace.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Build Production Version

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## Architecture Decisions

### Why Next.js?

- App Router architecture
- File-based routing
- Built-in optimization
- SEO support

### Why TypeScript?

- Type safety
- Better maintainability
- Improved developer experience

### Why Zustand?

- Lightweight state management
- Minimal boilerplate
- Easy scalability

### Why Tailwind CSS?

- Rapid UI development
- Responsive design
- Utility-first styling

---

## SEO Features

- Metadata API
- Custom page title
- Meta description
- Open Graph tags
- Twitter Card support
- Favicon support
- Social sharing image

---

## AI Usage

AI-assisted tools were used throughout the development process for:

- Architecture brainstorming
- UI/UX improvements
- Component structure reviews
- Code optimization suggestions
- Technical validation

All generated suggestions were reviewed, tested, modified where required, and fully understood before being incorporated into the final solution.

---

## Future Improvements

- Advanced filtering
- Pagination
- Wishlist functionality
- Authentication
- Favorites management
- Real backend integration
- Unit and integration tests

---

## Author

Shashwathagowda M

GitHub:
https://github.com/Shashwathmg

Live Demo:
https://used-car-marketplace-sigma.vercel.app/
