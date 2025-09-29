# Overview

This is an Astro-powered blog application designed for fast, content-focused static site generation. The blog features built-in support for Markdown/MDX content, type-safe content collections, and GitHub Discussions-powered comments via Giscus. The application is optimized for minimal JavaScript delivery and exceptional performance.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Astro 5.14.1**: Static site generator chosen for its zero-JavaScript-by-default approach and optimal performance for content-heavy sites
- **TypeScript**: Strict type checking enabled for improved code quality and developer experience
- Ships minimal JavaScript to the client, prioritizing fast page loads

## Content Management
- **Content Collections**: Type-safe content organization using Astro's built-in content collections API
- **Markdown/MDX Support**: Blog posts written in Markdown (`.md`) or MDX (`.mdx`) for enhanced functionality
  - MDX via `@astrojs/mdx` package allows embedding components within content
  - Schema validation using Zod ensures content integrity
- **Frontmatter Schema**: Posts require `title` and `pubDate`, with optional `description` and `updatedDate` fields

## Comment System
- **Giscus Integration**: Comments powered by GitHub Discussions for a developer-friendly, database-free commenting solution
- Requires users to have GitHub accounts to comment
- Configuration happens in `BlogPost.astro` layout with repository-specific values
- Customizable theme, language, and reaction settings

## Build & Deployment
- **Development Server**: Runs on host `0.0.0.0` port `5000` for accessibility
- **Static Build**: Optimized build process generates static HTML files
- **Preview Mode**: Built-in preview capability for testing production builds locally

## Directory Structure
- `/src/content/blog/`: Blog post content files
- `/src/content/config.ts`: Content collection schema definitions
- `/src/layouts/BlogPost.astro`: Blog post layout template (includes Giscus component)
- `/src/components/Giscus.astro`: Reusable Giscus comment component

## Design Principles
- **Zero JS by Default**: Astro's islands architecture ensures JavaScript only loads when necessary
- **Type Safety**: Strict TypeScript configuration and Zod schemas prevent runtime errors
- **Content-First**: Optimized for reading experience with minimal distractions
- **Performance**: Fast builds and fast page loads prioritized throughout

# External Dependencies

## Core Framework
- **Astro** (5.14.1): Static site generator and core framework
- **@astrojs/mdx** (4.3.6): MDX support for enhanced content capabilities
- **@astrojs/rss** (4.0.12): RSS feed generation for blog syndication

## Comment Integration
- **Giscus**: Third-party service using GitHub Discussions API
  - Requires GitHub repository with Discussions enabled
  - Requires Giscus GitHub App installation
  - Configuration obtained from https://giscus.app
  - No backend database needed; comments stored in GitHub Discussions

## Content Processing
- **github-slugger**: URL slug generation from headings
- **remark-gfm**: GitHub Flavored Markdown support
- **remark-smartypants**: Typography enhancements
- **Shiki**: Syntax highlighting for code blocks
- **rehype**: HTML processing pipeline

## Build Tools
- **TypeScript**: Type checking and compilation
- **Vite**: Build tool (bundled with Astro)

## Future Considerations
- No database currently used; if data storage becomes necessary, the architecture supports adding a database layer
- RSS feed generation is available but requires implementation in the codebase
- Image optimization capabilities are available through Astro but not yet configured