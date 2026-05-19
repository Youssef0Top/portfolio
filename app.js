// ===== Portfolio Data =====
// Edit this data directly to update your portfolio content
const portfolioData = {
    profile: {
        name: "Youssef Tamer Mostafa",
        title: "AI-Specialized Software Developer",
        subtitle: "CIS Graduate | Machine Learning Enthusiast | Problem Solver",
        bio: "A CIS graduate specialized in Artificial Intelligence with experience in software development, machine learning, and data analysis. Strong in data processing, algorithm development, and applying AI to real-world problems. Adaptable, detail-oriented, and a self-learner with strong teamwork, communication, leadership, and problem-solving skills.",
        education: "Bachelor of Computing & Information Sciences",
        university: "Egypt University of Informatics (EUI)",
        eduYears: "2021 - 2025",
        location: "Giza, Egypt",
        email: "ytamer5@gmail.com",
        phone: "+201007003357"
    },
    skills: [
        "Python", "Java", "C/C++", "C#", "OCaml",
        "HTML/CSS", "JavaScript", "Flutter",
        "MySQL", "NoSQL", ".NET",
        "Machine Learning", "Data Analysis", "AI Development",
        "Godot Engine", "Git", "React native", "Django"
    ],
    projects: [
        {
            id: 12,
            title: "Xbike",
            description: "A premium, modular full-stack cycling team platform featuring an OWASP-hardened Node.js REST API, an administrative React 19 web portal, and a native Flutter mobile app with secure verified spaces, receipt auditing, and performance-tuned caching.",
            detailedInfo: `<div class="xbike-showcase">
    <!-- Live Link Button -->
    <a href="https://xbike-production.up.railway.app/" target="_blank" class="xbike-live-btn">
        <i class="fas fa-external-link-alt"></i> Visit Live Application
    </a>

    <!-- Goal Section -->
    <div class="xbike-section-card">
        <h4 class="xbike-section-title"><i class="fas fa-bullseye"></i> Project Goal</h4>
        <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 0;">
            To engineer a highly scalable, secure, and unified digital platform for cycling teams that streamlines scheduling, bookings, member communications, receipt audits, and administrative operations while guaranteeing optimal reliability and speed under heavy dynamic traffic.
        </p>
    </div>

    <!-- Tech Stack Grid -->
    <div class="xbike-section-card">
        <h4 class="xbike-section-title"><i class="fas fa-layer-group"></i> Architecture & Tech Stack</h4>
        <div class="xbike-tech-grid">
            <div class="xbike-tech-item">
                <h5>Node.js/Express Backend</h5>
                <ul>
                    <li>TypeScript Architecture</li>
                    <li>Prisma ORM & PostgreSQL</li>
                    <li>OWASP-Hardened Middleware</li>
                    <li>Custom In-Memory Caching</li>
                </ul>
            </div>
            <div class="xbike-tech-item">
                <h5>React 19 Admin Portal</h5>
                <ul>
                    <li>Vite-Powered SPA</li>
                    <li>TypeScript & Vanilla CSS</li>
                    <li>i18next Localizations</li>
                    <li>Dynamic Configurations</li>
                </ul>
            </div>
            <div class="xbike-tech-item">
                <h5>Flutter Mobile Client</h5>
                <ul>
                    <li>Native Android & iOS</li>
                    <li>High-Perf Webviews</li>
                    <li>Firebase FCM Push</li>
                    <li>Dynamic File Uploads</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Features Grid -->
    <div class="xbike-section-card">
        <h4 class="xbike-section-title"><i class="fas fa-cogs"></i> High-Impact Features</h4>
        <div class="xbike-feature-grid">
            <div class="xbike-feature-card">
                <div class="xbike-feature-header">
                    <i class="fas fa-female" style="color: #ec4899; font-size: 1.2rem;"></i>
                    <h5>Girls-Only Gallery Room</h5>
                </div>
                <p>A specialized, secure private gallery restricted to verified female users (<code>user?.gender === 'FEMALE'</code>) and protected by an admin-managed access-code validation system (<code>/api/images/girls-only/verify</code>). Styled in a custom rose-pink dark glassmorphism theme to provide a private, safe space.</p>
            </div>
            <div class="xbike-feature-card">
                <div class="xbike-feature-header">
                    <i class="fas fa-calendar-alt" style="color: #6366f1; font-size: 1.2rem;"></i>
                    <h5>Relational Booking Engine</h5>
                </div>
                <p>Advanced logistics subsystem handling group rides, rank-gated training programs (<code>FAN</code>, <code>PRO</code>, <code>ADMIN</code>), and equipment rentals. Features a randomized discount lottery engine and cooperative date-voting mechanisms.</p>
            </div>
            <div class="xbike-feature-card">
                <div class="xbike-feature-header">
                    <i class="fas fa-file-invoice-dollar" style="color: #10b981; font-size: 1.2rem;"></i>
                    <h5>Proof of Payment Queue</h5>
                </div>
                <p>Administrative auditing engine for offline/manual cash transfers (Vodafone Cash / Instapay). Users upload screenshot receipts that are pushed directly to a verification pipeline for real-time admin review and approval.</p>
            </div>
            <div class="xbike-feature-card">
                <div class="xbike-feature-header">
                    <i class="fas fa-database" style="color: #8b5cf6; font-size: 1.2rem;"></i>
                    <h5>Database Binary Storage</h5>
                </div>
                <p>Configured database-backed fallback file hosting allowing binary receipt files to be securely uploaded as <code>Bytes</code> directly into PostgreSQL tables, ensuring zero downtime if Cloudinary CDN storage limits are reached.</p>
            </div>
            <div class="xbike-feature-card" style="grid-column: span 2;">
                <div class="xbike-feature-header">
                    <i class="fas fa-sliders-h" style="color: #ec4899; font-size: 1.2rem;"></i>
                    <h5>Dynamic Runtime Settings</h5>
                </div>
                <p>Custom in-memory Cache Service combined with a database-backed <code>GlobalConfig</code> schema. Allows administrators to fine-tune application parameters (payment methods, quotas, permissions) in real-time, instantly reflecting across all clients without server reboots.</p>
            </div>
        </div>
    </div>

    <!-- Challenges Deep Dive -->
    <div class="xbike-section-card">
        <h4 class="xbike-section-title"><i class="fas fa-tools"></i> Deep-Dive Engineering Challenges Solved</h4>
        
        <!-- Challenge 1 -->
        <div class="xbike-challenge-box">
            <span class="xbike-challenge-pill problem">The Challenge: Railway Container OOM Crashes</span>
            <div class="xbike-challenge-header">
                <i class="fas fa-exclamation-triangle" style="color: var(--danger);"></i> Dynamic Cache & Buffer Memory Bloat
            </div>
            <div class="xbike-challenge-body">
                During high-traffic ride bookings, active file receipt uploads caused the Node.js container on Railway hosting to exhaust its RAM, leading to sudden out-of-memory (OOM) container crashes. Investigation revealed that receipt image processing created huge, unbounded in-memory buffers coupled with a growing Cache Service memory footprint.
            </div>
            <div style="margin-top: 10px;">
                <span class="xbike-challenge-pill solution">The Solution: Cache Ceiling & Stream Pipe Optimization</span>
                <div class="xbike-challenge-body">
                    Implemented hard ceilings on the in-memory cache size with an automated Least Recently Used (LRU) eviction strategy. Rewrote the image parsing pipeline to process buffers via streaming pipelines instead of loading entire receipt files into memory. Tuned the Node.js garbage collector runtime configuration (adjusting <code>--max-old-space-size</code>) to aggressively release memory, achieving 100% server uptime under stress tests.
                </div>
            </div>
        </div>

        <!-- Challenge 2 -->
        <div class="xbike-challenge-box security">
            <span class="xbike-challenge-pill problem">The Challenge: Web/API Security Hardening</span>
            <div class="xbike-challenge-header">
                <i class="fas fa-shield-alt" style="color: var(--success);"></i> Compliance with OWASP Security Standards
            </div>
            <div class="xbike-challenge-body">
                The platform required robust defense systems to protect sensitive user profiles, administrative configurations, booking details, and the private gallery from malicious scanning and injection attempts.
            </div>
            <div style="margin-top: 10px;">
                <span class="xbike-challenge-pill solution">The Solution: Zero-Trust Defense-in-Depth</span>
                <div class="xbike-challenge-body">
                    Hardened the Express REST API with Helmet.js security headers (strict Content Security Policy, HSTS, anti-clickjacking headers), implemented strict rate-limiting for key authentication/verification endpoints to mitigate DDoS attacks, and sanitized inputs against SQL/NoSQL injection. Masked all sensitive database/server error stack traces in production to prevent technical information leaks.
                </div>
            </div>
        </div>
    </div>
</div>`,
            tags: ["Full Stack", "Mobile", "Security"],
            icon: "fa-bicycle",
            screenshots: ["media/Xbike1.png", "media/Xbike2.png", "media/Xbike3.png"]
        },
        {
            id: 1,
            title: "Shokran",
            description: "Shokran is your all-in-one shopping companion designed to make everyday purchasing simple, fast, and reliable.",
            detailedInfo: "Inspired from Talabat and Breadfast, this product is made for a real client in need to digitalize his store for easier ordering and delivery.\nPlay Store: https://play.google.com/store/apps/details?id=eg.khaled.shokrann\nApp Store: https://apps.apple.com/eg/app/shokran/id6755833065",
            tags: ["Full Stack", "Mobile"],
            icon: "fa-shopping-cart",
            screenshots: ["media/shokran.mp4", "media/shokran.png"]
        },
        {
            id: 2,
            title: "Smart Parking System",
            description: "Graduation project - An intelligent parking management system with real-time monitoring and automated space detection.",
            detailedInfo: "This graduation project implements an AI-based smart parking solution that uses computer vision to detect available parking spaces and checks licecnse plates in real-time. The system includes a mobile app for users to find and reserve spots, and a management dashboard for administrators.",
            tags: ["AI", "Python"],
            icon: "fa-car",
            screenshots: ["media/SPS.mp4", "media/SPS.jpeg"]
        },
        {
            id: 3,
            title: "Egyptian Arabic Text-to-Speech",
            description: "A text-to-speech model for Egyptian Arabic dialect using XTTS v2 technology.",
            detailedInfo: "Developed a custom TTS model specifically trained on Egyptian Arabic dialect using XTTS v2. The model can generate natural-sounding speech from Arabic text input, handling the nuances of the Egyptian dialect.\nCheck on linkedin: https://www.linkedin.com/posts/omar-samir-8415b2285_ai-texttospeech-egtts-ugcPost-7289034370428919809-VcMY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEBIL-YB6f5IMj2lstnEWhb7LDMFGxiZ4Hw\nRepo: https://github.com/joejoe03/Egyptian-Text-To-Speech",
            tags: ["AI", "NLP", "Python"],
            icon: "fa-volume-high",
            screenshots: ["media/EGTTS.mp4"]
        },
        {
            id: 4,
            title: "Game Development (Godot)",
            description: "Multiple games including Flappy Bird, Angry Birds clone, and Memory Game using Godot Engine.",
            detailedInfo: "Developed several game projects using Godot 4 engine including: Flappy Bird clone with custom physics, Angry Birds-style projectile game, and a Memory card matching game. Each game features custom graphics and sound effects.",
            tags: ["Game Dev", "Godot", "GDScript"],
            icon: "fa-gamepad",
            screenshots: ["media/mario.mp4", "media/toppa.mp4", "media/angry.mp4"]
        },
        {
            id: 5,
            title: "AI Social Media Agent",
            description: "An intelligent agent for automating and managing social media platform interactions.",
            detailedInfo: "Built an AI-powered agent that can automate social media tasks including content scheduling, engagement analysis, and automated responses. Uses natural language processing to understand and generate human-like content.",
            tags: ["AI", "Automation", "Python"],
            icon: "fa-robot",
            screenshots: []
        },
        {
            id: 6,
            title: "LLM Chatbot (Android)",
            description: "Android mobile application featuring a chatbot powered by Llama LLM.",
            detailedInfo: "Developed an Android application that integrates with Llama large language model to provide conversational AI capabilities. The app features a clean interface and supports context-aware conversations.",
            tags: ["Android", "LLM", "Mobile"],
            icon: "fa-mobile-screen",
            screenshots: []
        },
        {
            id: 7,
            title: "Stock Market Analysis AI",
            description: "Fundamental analysis model for stock market prediction using machine learning techniques.",
            detailedInfo: "Created a machine learning model that performs fundamental analysis on stocks using financial data, market indicators, and sentiment analysis to predict market trends and provide investment insights.",
            tags: ["AI", "Finance", "Python"],
            icon: "fa-chart-line",
            screenshots: []
        },
        {
            id: 8,
            title: "Hospital Management System",
            description: "A comprehensive hospital system for managing patients, appointments, and medical records.",
            detailedInfo: "Built a full-stack hospital management system with features including patient registration, appointment scheduling, medical records management, billing, and reporting. Includes role-based access control for different hospital staff.",
            tags: ["Full Stack", "Database", ".NET"],
            icon: "fa-hospital",
            screenshots: []
        },
        {
            id: 9,
            title: "Brain Tumor Detection",
            description: "Medical imaging AI model for detecting and classifying brain tumors from MRI scans.",
            detailedInfo: "Implemented a deep learning model using convolutional neural networks to analyze MRI brain scans. The model can detect the presence of tumors and classify them into different categories with high accuracy.",
            tags: ["AI", "Medical", "Computer Vision"],
            icon: "fa-brain",
            screenshots: []
        },
        {
            id: 10,
            title: "OCaml Chatbot",
            description: "A functional programming chatbot built using OCaml language.",
            detailedInfo: "Implemented a chatbot using functional programming principles in OCaml. The bot uses pattern matching and recursive data structures for natural language understanding and response generation.",
            tags: ["Functional", "OCaml", "NLP"],
            icon: "fa-comments",
            screenshots: []
        },
        {
            id: 11,
            title: "Image Classification Model",
            description: "Deep learning model for image classification using Python and neural networks.",
            detailedInfo: "Built an image classification model using TensorFlow/Keras with convolutional neural networks. The model was trained on a custom dataset and can classify images into multiple categories with high accuracy.",
            tags: ["AI", "Deep Learning", "Python"],
            icon: "fa-image",
            screenshots: []
        }
    ],
    certificates: [
        {
            id: 1,
            year: "2025",
            title: "IBM Internship - AI Track",
            description: "Completed AI track internship at IBM, gaining hands-on experience with enterprise AI solutions."
        },
        {
            id: 2,
            year: "2024",
            title: "Godot 4 Game Development Course",
            description: "Comprehensive course on game development using Godot 4 engine."
        },
        {
            id: 3,
            year: "2023",
            title: "Bank SAIB Internship - IT Department",
            description: "IT department internship at Bank SAIB, working on banking systems and infrastructure."
        },
        {
            id: 4,
            year: "2022",
            title: "ITI AI Course (60 Hours)",
            description: "Intensive 60-hour AI course at Information Technology Institute covering machine learning fundamentals."
        }
    ],
    languages: [
        { name: "Arabic", level: "Native Language" },
        { name: "English", level: "Very Good (Written & Spoken)" }
    ]
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderContent();
});

// ===== Event Listeners =====
function initializeEventListeners() {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Project Detail Modal
    const projectDetailModal = document.getElementById('projectDetailModal');
    const projectDetailClose = document.getElementById('projectDetailClose');

    projectDetailClose.addEventListener('click', () => {
        projectDetailModal.classList.add('hidden');
    });

    projectDetailModal.querySelector('.modal-overlay').addEventListener('click', () => {
        projectDetailModal.classList.add('hidden');
    });

    // Lightbox Modal
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxClose = document.getElementById('lightboxClose');

    lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
    });

    lightboxModal.querySelector('.modal-overlay').addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
    });
}

// ===== Render Content =====
function renderContent() {
    renderSkills();
    renderProjects();
    renderCertificates();
    renderLanguages();
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';

    portfolioData.skills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.innerHTML = `<span>${skill}</span>`;
        container.appendChild(skillTag);
    });
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-icon">
                <i class="fas ${project.icon || 'fa-code'}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <button class="view-details-btn" onclick="openProjectDetail(${project.id})">
                <i class="fas fa-expand"></i> View Details
            </button>
        `;
        grid.appendChild(card);
    });
}

function renderCertificates() {
    const timeline = document.getElementById('certificatesTimeline');
    timeline.innerHTML = '';

    portfolioData.certificates.forEach(cert => {
        const item = document.createElement('div');
        item.className = 'cert-item';
        item.innerHTML = `
            <div class="cert-content">
                <span class="cert-year">${cert.year}</span>
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
            </div>
        `;
        timeline.appendChild(item);
    });
}

function renderLanguages() {
    const container = document.getElementById('languagesContainer');
    container.innerHTML = '';

    portfolioData.languages.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        item.innerHTML = `
            <h3>${lang.name}</h3>
            <p>${lang.level}</p>
        `;
        container.appendChild(item);
    });
}

// ===== Project Detail Modal =====
function openProjectDetail(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('projectDetailModal');

    // Update modal content
    document.getElementById('projectDetailIcon').innerHTML = `<i class="fas ${project.icon || 'fa-code'}"></i>`;
    document.getElementById('projectDetailTitle').textContent = project.title;
    document.getElementById('projectDetailDesc').textContent = project.description;
    const detailContent = project.detailedInfo || project.description;
    if (detailContent.trim().startsWith('<')) {
        document.getElementById('projectDetailInfo').innerHTML = detailContent;
    } else {
        document.getElementById('projectDetailInfo').innerHTML = detailContent.replace(/\n/g, '<br>');
    }

    // Update tags
    const tagsContainer = document.getElementById('projectDetailTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    // Update screenshots & videos
    const screenshotsSection = document.querySelector('.project-detail-screenshots');
    const screenshotsContainer = document.getElementById('projectScreenshots');

    if (project.screenshots && project.screenshots.length > 0) {
        screenshotsSection.style.display = 'block';
        screenshotsContainer.innerHTML = project.screenshots.map(url => {
            const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
            const isYoutube = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&]+)/);

            if (isVideo) {
                return `
                    <div class="screenshot-item video-item">
                        <video controls>
                            <source src="${url}" type="video/${url.split('.').pop()}">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                `;
            } else if (isYoutube) {
                const videoId = isYoutube[1];
                return `
                    <div class="screenshot-item video-item">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            } else {
                return `
                    <div class="screenshot-item">
                        <img src="${url}" alt="Screenshot" onclick="openLightbox('${url}')">
                    </div>
                `;
            }
        }).join('');
    } else {
        screenshotsSection.style.display = 'none';
    }

    modal.classList.remove('hidden');
}

// ===== Lightbox Functions =====
function openLightbox(url) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImage');
    img.src = url;
    modal.classList.remove('hidden');
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
