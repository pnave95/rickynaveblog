# Giscus Comments Setup Guide

Your Astro blog is ready! To enable comments on your blog posts, follow these steps to configure Giscus:

## Step 1: Enable GitHub Discussions

1. Go to your GitHub repository (create one if you haven't)
2. Go to **Settings** → **General** → scroll down to **Features**
3. Check the box for **Discussions**

## Step 2: Install Giscus App

1. Visit [https://github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **Install** and select your repository

## Step 3: Get Your Giscus Configuration

1. Visit [https://giscus.app](https://giscus.app)
2. Enter your repository in the format: `username/repo-name`
3. Choose your Discussion category (e.g., "Announcements" or "General")
4. The site will generate your configuration values

## Step 4: Update Your Blog

Open `src/layouts/BlogPost.astro` and replace the placeholder values in the `<Giscus>` component:

```astro
<Giscus 
  repo="your-username/your-repo"
  repoId="YOUR_REPO_ID"
  category="Announcements"
  categoryId="YOUR_CATEGORY_ID"
/>
```

Replace with the values from giscus.app (step 3).

## Done!

Your comments should now work. When visitors view your blog posts, they'll see a comment section powered by GitHub Discussions. Users need a GitHub account to comment.

## Optional Customizations

In `src/components/Giscus.astro`, you can customize:
- `data-theme`: Change to "dark", "preferred_color_scheme", or other themes
- `data-lang`: Change language (default is "en")
- `data-reactions-enabled`: Set to "0" to disable reactions
