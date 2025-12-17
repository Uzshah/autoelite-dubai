# Cars Fixer - Static Website

A lightweight, SEO-friendly car repair service website built with pure HTML, CSS, and JavaScript.

## Features

- **Pure HTML/CSS/JS** - No frameworks, minimal dependencies
- **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **SEO Optimized** - Structured data, meta tags, semantic HTML
- **Lightweight** - Fast loading times
- **Modern Design** - Clean and professional appearance

## File Structure

```
static-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Place your images here
├── robots.txt          # Search engine instructions
└── README.md           # This file
```

## Getting Started

### Option 1: Using Python (Easiest)

```bash
# Navigate to the static-site directory
cd static-site

# Start a simple HTTP server on port 8080
python3 -m http.server 8080

# Access locally
# Open browser: http://localhost:8080

# Access from other devices on your network
# Open browser: http://YOUR_IP_ADDRESS:8080
```

### Option 2: Using Node.js

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the static-site directory
cd static-site

# Start server
http-server -p 8080

# Access locally: http://localhost:8080
```

### Option 3: Using PHP

```bash
# Navigate to the static-site directory
cd static-site

# Start PHP built-in server
php -S 0.0.0.0:8080

# Access locally: http://localhost:8080
```

### Option 4: Deploy to a Web Server

Simply upload all files to your web hosting server:
- Via FTP/SFTP
- Via cPanel File Manager
- Via Git deployment
- Via hosting providers (Netlify, Vercel, GitHub Pages, etc.)

## Network Access

To access the website from other devices on your network (phone, tablet, etc.):

1. Find your local IP address:
   ```bash
   # On Linux/Mac
   hostname -I

   # On Windows
   ipconfig
   ```

2. Start the server with network binding:
   ```bash
   python3 -m http.server 8080 --bind 0.0.0.0
   ```

3. Access from any device on the same network:
   ```
   http://YOUR_IP_ADDRESS:8080
   ```

   Example: `http://10.40.14.130:8080`

## Customization

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #e63946;      /* Main brand color */
  --secondary-color: #1d3557;    /* Secondary color */
  --accent-color: #f4a261;       /* Accent color */
  --text-dark: #1a1a1a;          /* Dark text */
  --text-light: #6c757d;         /* Light text */
  --bg-light: #f8f9fa;           /* Light background */
  --white: #ffffff;              /* White */
}
```

### Adding Images

1. Place your images in the `images/` folder
2. Replace the SVG placeholders in `index.html` with:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Updating Content

- Edit text directly in `index.html`
- Services: Lines 167-242
- Testimonials: Lines 251-360
- Contact info: Lines 437-478

### Form Integration

The contact form currently shows a success message. To integrate with a backend:

1. Edit `js/script.js` (around line 45)
2. Replace the `setTimeout` with your API call:
   ```javascript
   fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(result => {
     // Handle success
   })
   .catch(error => {
     // Handle error
   });
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Zero build step required
- No JavaScript frameworks
- Minimal JavaScript (~2KB)
- CSS (~12KB)
- Fast page load (<1 second)

## SEO Features

- Semantic HTML5
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card tags
- Meta descriptions
- robots.txt
- Mobile-friendly
- Fast loading

## License

Free to use and modify for your projects.

## Support

For questions or issues, please contact the development team.
