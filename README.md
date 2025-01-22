# Shareable Modals in Next.js

This repository contains the example code for building **URL-synced shareable modals** in Next.js using **intercepting routes** and **parallel routes**. These features enable you to create modern, user-friendly modals that support deep linking, navigation consistency, and seamless state management.

## Features

* **Deep Linking**: Modals tied to specific URLs, allowing users to share and bookmark modal states.
* **Navigation Consistency**: Supports browser back/forward navigation to close or reopen modals.
* **Dynamic Routing**: Uses Next.js routing mechanisms to simplify state management.
* **Accessibility**: Implements focus trapping and ARIA roles for an inclusive user experience.

## Getting Started

Follow these steps to explore the example:

1. Clone this repository:  
bash  
CopyEdit  
`git clone https://github.com/jonasherr/nextjs-shareable-modal.git  
`
2. Navigate to the project directory:  
bash  
CopyEdit  
`cd shareable-modals-nextjs  
`
3. Install dependencies:  
bash  
CopyEdit  
`pnpm install  
`
4. Start the development server:  
bash  
CopyEdit  
`pnpm dev  
`
5. Open your browser and visit http://localhost:3000.

## Project Structure

The repository demonstrates the use of intercepting and parallel routes to build modals. Key files include:

* **`app/feedback/page.tsx`**: Renders the main feedback form page.
* **`app/@modal/(.)feedback/page.tsx`**: Displays the feedback modal using intercepting routes.
* **`app/layout.tsx`**: Defines the layout with the `@modal` slot for parallel routing.
* **`components/modal.tsx`**: Reusable modal component with accessibility features.

## Usage

This example showcases how to:

* Integrate modals with URLs for better state management.
* Ensure navigation consistency using Next.js routing.
* Enhance the user experience with a modern, scalable modal system.

## Learn More

For a detailed explanation of the code and concepts, refer to the article: [Shareable Modals in Next.js](#) _(Replace when article is published)_.

## Author

**Jonas Herrmannsdörfer**  
Trainer and fullstack developer specializing in Next.js. Check out [my workshops](http://localhost:3000/workshops) or follow me on [GitHub](https://github.com/jonasherr).
