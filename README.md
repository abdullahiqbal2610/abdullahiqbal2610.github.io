# Abdullah Iqbal - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Science student specializing in Data Science, NLP, and Full-Stack Development.

## 🌟 Features

- **Animated Boot Screen**: Custom logo animation on page load with elegant fade-in effect
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Sleek black and white Grok-inspired UI with smooth animations
- **Dynamic Typewriter Effect**: Animated hero section with typewriting name display
- **Interactive Navigation**: Mobile-friendly burger menu with smooth transitions
- **Skill Visualizations**: Animated progress bars that trigger on scroll
- **Project Showcase**: Expandable project grid with "Show More" functionality
- **Smooth Scrolling**: ScrollReveal animations throughout the page
- **Contact Section**: Easy-to-access social media links and downloadable resume

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties, animations, flexbox, and grid layouts
- **JavaScript**: Vanilla JS for interactivity and animations
- **ScrollReveal.js**: Scroll-based animations
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter and JetBrains Mono typography

## 📂 Project Structure
```
portfolio/
│
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/
│       ├── profile.jpg     # Profile picture
│       ├── favicon.png     # Browser favicon
│       └── project-*.png   # Project screenshots
└── resume.pdf              # Downloadable resume
```

## 🎨 Key Sections

### 1. Hero Section
- Animated typewriter effect displaying name
- Professional tagline
- Call-to-action buttons with pulse animation

### 2. About Section
- Animated profile picture with rotating gradient border
- Educational timeline with scroll animations
- Brief professional summary

### 3. Skills Section
- Categorized technical skills
- Animated progress bars
- Covers Programming, Web Development, Databases, and Data Science

### 4. Projects Section
- Featured project cards with hover effects
- "Show More" functionality to display additional projects
- Direct GitHub repository links
- Showcases 6 major projects:
  - ABX Browser Extension
  - Automated Likert Scoring System (NLP)
  - CineMAK Movie Reservation App
  - Sudoku Game (Assembly)
  - FASTBOOK Social Network
  - Solitaire Game

### 5. Contact Section
- Social media links (Email, LinkedIn, GitHub)
- Downloadable resume button
- Animated icon hover effects

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Local server for development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdullahiqbal2610/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

4. Visit `http://localhost:8000` (or your server's address) in your browser

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## ⚡ Performance Optimizations

- Minimal external dependencies
- Optimized animations with CSS transforms
- Lazy-loaded scroll animations
- Efficient JavaScript event listeners
- Compressed image assets

## 🎯 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-bg: #000000;
  --accent-primary: #ffffff;
  /* Modify other variables as needed */
}
```

### Adding New Projects
1. Add a new project card in `index.html` with class `hidden-project`
2. Update the project image and details
3. No JavaScript changes needed - automatically works with "Show More" button

### Modifying Boot Animation
Adjust timing in `style.css`:
```css
animation: fadeOut 0.5s ease 4.5s forwards; /* Change 4.5s to desired duration */
```

Update JavaScript timeout in `main.js`:
```javascript
setTimeout(function() {
    document.body.classList.remove('loading');
}, 4500); // Match CSS timing
```

## 🐛 Known Issues

- Mobile burger menu may require testing on actual devices (not just browser inspect mode)
- Boot animation timing should be adjusted based on connection speed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdullah Iqbal**
- GitHub: [@abdullahiqbal2610](https://github.com/abdullahiqbal2610)
- LinkedIn: [Muhammad Abdullah Iqbal](https://www.linkedin.com/in/muhammad-abdullah-iqbal-a42b5b301/)
- Email: abdullahiqbal27122004@gmail.com
- Portfolio: [https://abdullahiqbal2610.github.io/](https://abdullahiqbal2610.github.io/)

## 🙏 Acknowledgments

- Inspired by modern minimalist design principles
- Color scheme influenced by Grok AI's dark theme
- ScrollReveal.js for smooth scroll animations
- Font Awesome for beautiful icons
- Google Fonts for typography

## 📈 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering by technology
- [ ] Include testimonials section
- [ ] Add interactive contact form with backend
- [ ] Implement project detail modals
- [ ] Add loading progress indicator
- [ ] Integrate Google Analytics

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abdullahiqbal2610/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Last Updated**: November 2025
