# Photo Portfolio Website

A beautiful, responsive photography portfolio website.

## Preview

Open `index.html` in your browser to see it!

## How to Customize

### 1. Add Your Photos

Edit `script.js` and replace the `photos` array with your own images:

```javascript
const photos = [
    {
        src: 'your-photo-1.jpg',
        title: 'My Photo 1',
        desc: 'Description here'
    },
    // Add more photos...
];
```

**Tip:** Put your photos in a folder called `images/` and use paths like `images/photo1.jpg`

### 2. Edit Your Bio

In `index.html`, find the `about` section and edit:

```html
<p class="bio">Tell visitors about yourself here...</p>
```

### 3. Update Skills

In `index.html`, edit the skill bars:

```html
<div class="skill-fill" style="width: 90%"></div>
```
Change `90%` to your skill level.

### 4. Add Social Links

In `index.html`, replace `#` with your actual links:

```html
<a href="https://instagram.com/yourprofile" class="social-btn">Instagram</a>
```

## How to Publish for Free

### Option 1: GitHub Pages (Easiest)

1. Create a GitHub account at github.com
2. Create a new repository called `username.github.io`
3. Upload all files from this folder
4. Your site is live at: `https://username.github.io`

### Option 2: Netlify (Drag & Drop)

1. Go to netlify.com
2. Sign up (free)
3. Drag this folder onto the page
4. Done! You get a free URL like `random-name.netlify.app`

### Option 3: Vercel

1. Go to vercel.com
2. Sign up with GitHub
3. Import this project
4. Deploy!

## Custom Domain (Optional)

All platforms let you add a custom domain (like `yourname.com`) for ~$10/year.

## Features

- Responsive design (works on phone & desktop)
- Grid gallery with hover effects
- Lightbox for viewing photos full-size
- Smooth scrolling navigation
- Animated skill bars
- Modern dark theme

## Files

```
portfolio/
├── index.html    # Main page
├── style.css     # Styling
├── script.js     # Gallery & interactions
└── README.md     # This file
```

---

Need help? Just ask!
