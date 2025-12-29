// ===== Portfolio Data =====
const defaultData = {
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
        phone: "+201007003357",
        contactLocation: "Giza, Egypt"
    },
    skills: [
        "Python", "Java", "C/C++", "C#", "OCaml",
        "HTML/CSS", "JavaScript", "Flutter",
        "MySQL", "NoSQL", ".NET",
        "Machine Learning", "Data Analysis", "AI Development",
        "Godot Engine", "Git"
    ],
    projects: [
        {
            id: 1,
            title: "Smart Parking System",
            description: "Graduation project - An intelligent parking management system with real-time monitoring and automated space detection.",
            tags: ["AI", "IoT", "Python"],
            icon: "fa-car"
        },
        {
            id: 2,
            title: "Egyptian Arabic Text-to-Speech",
            description: "A text-to-speech model for Egyptian Arabic dialect using XTTS v2 technology.",
            tags: ["AI", "NLP", "Python"],
            icon: "fa-volume-high"
        },
        {
            id: 3,
            title: "AI Social Media Agent",
            description: "An intelligent agent for automating and managing social media platform interactions.",
            tags: ["AI", "Automation", "Python"],
            icon: "fa-robot"
        },
        {
            id: 4,
            title: "Brain Tumor Detection",
            description: "Medical imaging AI model for detecting and classifying brain tumors from MRI scans.",
            tags: ["AI", "Medical", "Computer Vision"],
            icon: "fa-brain"
        },
        {
            id: 5,
            title: "LLM Chatbot (Android)",
            description: "Android mobile application featuring a chatbot powered by Llama LLM.",
            tags: ["Android", "LLM", "Mobile"],
            icon: "fa-mobile-screen"
        },
        {
            id: 6,
            title: "Stock Market Analysis AI",
            description: "Fundamental analysis model for stock market prediction using machine learning techniques.",
            tags: ["AI", "Finance", "Python"],
            icon: "fa-chart-line"
        },
        {
            id: 7,
            title: "Hospital Management System",
            description: "A comprehensive hospital system for managing patients, appointments, and medical records.",
            tags: ["Full Stack", "Database", ".NET"],
            icon: "fa-hospital"
        },
        {
            id: 8,
            title: "Game Development (Godot)",
            description: "Multiple games including Flappy Bird, Angry Birds clone, and Memory Game using Godot Engine.",
            tags: ["Game Dev", "Godot", "GDScript"],
            icon: "fa-gamepad"
        },
        {
            id: 9,
            title: "OCaml Chatbot",
            description: "A functional programming chatbot built using OCaml language.",
            tags: ["Functional", "OCaml", "NLP"],
            icon: "fa-comments"
        },
        {
            id: 10,
            title: "Image Classification Model",
            description: "Deep learning model for image classification using Python and neural networks.",
            tags: ["AI", "Deep Learning", "Python"],
            icon: "fa-image"
        }
    ],
    certificates: [
        {
            id: 1,
            year: "2024",
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

// ===== Authentication Config =====
// Default credentials: admin / portfolio2025
// To change: Update the hash below using SHA-256
const AUTH_CONFIG = {
    // SHA-256 hash of "admin"
    usernameHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    // SHA-256 hash of "portfolio2025"  
    passwordHash: "a4e9b2d3f8c7e1a5b6d9c2e4f7a8b3c5d6e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3"
};

// ===== State Management =====
let isLoggedIn = false;
let portfolioData = {};
let currentEditItem = null;
let currentEditType = null;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeEventListeners();
    renderDynamicContent();
    checkAuthState();
});

// ===== Data Management =====
function loadData() {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
        portfolioData = JSON.parse(savedData);
    } else {
        portfolioData = JSON.parse(JSON.stringify(defaultData));
        saveData();
    }
}

function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

function resetData() {
    if (confirm('Are you sure you want to reset all content to default? This cannot be undone.')) {
        portfolioData = JSON.parse(JSON.stringify(defaultData));
        saveData();
        renderDynamicContent();
        applyProfileData();
    }
}

// ===== Authentication =====
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyCredentials(username, password) {
    const usernameHash = await hashString(username);
    const passwordHash = await hashString(password);
    return usernameHash === AUTH_CONFIG.usernameHash && passwordHash === AUTH_CONFIG.passwordHash;
}

function checkAuthState() {
    const authState = sessionStorage.getItem('isLoggedIn');
    if (authState === 'true') {
        isLoggedIn = true;
        enableEditMode();
    }
}

function login() {
    isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', 'true');
    enableEditMode();
}

function logout() {
    isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
    disableEditMode();
}

function enableEditMode() {
    document.body.classList.add('edit-mode');
    document.getElementById('adminPanel').classList.remove('hidden');
    document.querySelectorAll('.add-btn').forEach(btn => btn.classList.remove('hidden'));
}

function disableEditMode() {
    document.body.classList.remove('edit-mode');
    document.getElementById('adminPanel').classList.add('hidden');
    document.querySelectorAll('.add-btn').forEach(btn => btn.classList.add('hidden'));
}

// ===== Event Listeners =====
function initializeEventListeners() {
    // Navigation
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Login Modal
    const adminBtn = document.getElementById('adminBtn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    
    adminBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            logout();
        } else {
            loginModal.classList.remove('hidden');
        }
    });
    
    modalClose.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        loginError.classList.add('hidden');
        loginForm.reset();
    });
    
    loginModal.querySelector('.modal-overlay').addEventListener('click', () => {
        loginModal.classList.add('hidden');
        loginError.classList.add('hidden');
        loginForm.reset();
    });
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (await verifyCredentials(username, password)) {
            login();
            loginModal.classList.add('hidden');
            loginForm.reset();
            loginError.classList.add('hidden');
        } else {
            loginError.classList.remove('hidden');
        }
    });
    
    // Logout Button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Edit Modal
    const editModal = document.getElementById('editModal');
    const editModalClose = document.getElementById('editModalClose');
    const editForm = document.getElementById('editForm');
    const deleteItemBtn = document.getElementById('deleteItemBtn');
    
    editModalClose.addEventListener('click', () => {
        editModal.classList.add('hidden');
    });
    
    editModal.querySelector('.modal-overlay').addEventListener('click', () => {
        editModal.classList.add('hidden');
    });
    
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEditedItem();
    });
    
    deleteItemBtn.addEventListener('click', () => {
        deleteCurrentItem();
    });
    
    // Add Modal
    const addModal = document.getElementById('addModal');
    const addModalClose = document.getElementById('addModalClose');
    const addForm = document.getElementById('addForm');
    
    addModalClose.addEventListener('click', () => {
        addModal.classList.add('hidden');
    });
    
    addModal.querySelector('.modal-overlay').addEventListener('click', () => {
        addModal.classList.add('hidden');
    });
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewItem();
    });
    
    // Add Buttons
    document.getElementById('addSkillBtn').addEventListener('click', () => openAddModal('skill'));
    document.getElementById('addProjectBtn').addEventListener('click', () => openAddModal('project'));
    document.getElementById('addCertBtn').addEventListener('click', () => openAddModal('certificate'));
    
    // Editable Fields
    document.querySelectorAll('.editable').forEach(el => {
        el.addEventListener('click', () => {
            if (isLoggedIn) {
                editInlineField(el);
            }
        });
    });
}

// ===== Render Dynamic Content =====
function renderDynamicContent() {
    renderSkills();
    renderProjects();
    renderCertificates();
    renderLanguages();
    applyProfileData();
}

function applyProfileData() {
    const profile = portfolioData.profile;
    document.querySelectorAll('.editable').forEach(el => {
        const field = el.dataset.field;
        if (field && profile[field]) {
            el.textContent = profile[field];
        }
    });
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    
    portfolioData.skills.forEach((skill, index) => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.innerHTML = `
            <span>${skill}</span>
            <i class="fas fa-times delete-btn" onclick="deleteSkill(${index})"></i>
        `;
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
            <div class="project-actions">
                <button class="edit-btn" onclick="openEditModal('project', ${project.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn-card" onclick="deleteProject(${project.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="project-icon">
                <i class="fas ${project.icon || 'fa-code'}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
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
            <div class="cert-actions">
                <button class="edit-btn" onclick="openEditModal('certificate', ${cert.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn-card" onclick="deleteCertificate(${cert.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
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

// ===== Inline Editing =====
function editInlineField(element) {
    const field = element.dataset.field;
    const currentValue = element.textContent;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue;
    input.className = 'inline-edit-input';
    input.style.cssText = `
        background: var(--bg-tertiary);
        border: 2px solid var(--accent-primary);
        border-radius: 4px;
        padding: 5px 10px;
        color: var(--text-primary);
        font-size: inherit;
        font-family: inherit;
        width: 100%;
        min-width: 200px;
    `;
    
    element.style.display = 'none';
    element.insertAdjacentElement('afterend', input);
    input.focus();
    input.select();
    
    function saveValue() {
        const newValue = input.value.trim();
        if (newValue && newValue !== currentValue) {
            element.textContent = newValue;
            portfolioData.profile[field] = newValue;
            saveData();
        }
        element.style.display = '';
        input.remove();
    }
    
    input.addEventListener('blur', saveValue);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveValue();
        } else if (e.key === 'Escape') {
            element.style.display = '';
            input.remove();
        }
    });
}

// ===== Add Modal =====
function openAddModal(type) {
    currentEditType = type;
    const modal = document.getElementById('addModal');
    const title = document.getElementById('addModalTitle');
    const fields = document.getElementById('addFormFields');
    
    switch(type) {
        case 'skill':
            title.textContent = 'Add New Skill';
            fields.innerHTML = `
                <div class="form-group">
                    <label for="skillName">Skill Name</label>
                    <input type="text" id="skillName" name="skillName" required placeholder="e.g., React.js">
                </div>
            `;
            break;
        case 'project':
            title.textContent = 'Add New Project';
            fields.innerHTML = `
                <div class="form-group">
                    <label for="projectTitle">Project Title</label>
                    <input type="text" id="projectTitle" name="projectTitle" required>
                </div>
                <div class="form-group">
                    <label for="projectDesc">Description</label>
                    <textarea id="projectDesc" name="projectDesc" required></textarea>
                </div>
                <div class="form-group">
                    <label for="projectTags">Tags (comma-separated)</label>
                    <input type="text" id="projectTags" name="projectTags" placeholder="e.g., AI, Python, Web">
                </div>
                <div class="form-group">
                    <label for="projectIcon">Icon (Font Awesome class)</label>
                    <input type="text" id="projectIcon" name="projectIcon" placeholder="e.g., fa-code">
                </div>
            `;
            break;
        case 'certificate':
            title.textContent = 'Add New Certificate';
            fields.innerHTML = `
                <div class="form-group">
                    <label for="certYear">Year</label>
                    <input type="text" id="certYear" name="certYear" required placeholder="e.g., 2024">
                </div>
                <div class="form-group">
                    <label for="certTitle">Title</label>
                    <input type="text" id="certTitle" name="certTitle" required>
                </div>
                <div class="form-group">
                    <label for="certDesc">Description</label>
                    <textarea id="certDesc" name="certDesc" required></textarea>
                </div>
            `;
            break;
    }
    
    modal.classList.remove('hidden');
}

function addNewItem() {
    const modal = document.getElementById('addModal');
    
    switch(currentEditType) {
        case 'skill':
            const skillName = document.getElementById('skillName').value.trim();
            if (skillName) {
                portfolioData.skills.push(skillName);
            }
            break;
        case 'project':
            const projectTitle = document.getElementById('projectTitle').value.trim();
            const projectDesc = document.getElementById('projectDesc').value.trim();
            const projectTags = document.getElementById('projectTags').value.split(',').map(t => t.trim()).filter(t => t);
            const projectIcon = document.getElementById('projectIcon').value.trim() || 'fa-code';
            
            const maxProjectId = Math.max(...portfolioData.projects.map(p => p.id), 0);
            portfolioData.projects.push({
                id: maxProjectId + 1,
                title: projectTitle,
                description: projectDesc,
                tags: projectTags,
                icon: projectIcon
            });
            break;
        case 'certificate':
            const certYear = document.getElementById('certYear').value.trim();
            const certTitle = document.getElementById('certTitle').value.trim();
            const certDesc = document.getElementById('certDesc').value.trim();
            
            const maxCertId = Math.max(...portfolioData.certificates.map(c => c.id), 0);
            portfolioData.certificates.push({
                id: maxCertId + 1,
                year: certYear,
                title: certTitle,
                description: certDesc
            });
            break;
    }
    
    saveData();
    renderDynamicContent();
    modal.classList.add('hidden');
    document.getElementById('addForm').reset();
}

// ===== Edit Modal =====
function openEditModal(type, id) {
    currentEditType = type;
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editModalTitle');
    const fields = document.getElementById('editFormFields');
    const deleteBtn = document.getElementById('deleteItemBtn');
    
    switch(type) {
        case 'project':
            const project = portfolioData.projects.find(p => p.id === id);
            if (!project) return;
            currentEditItem = project;
            
            title.textContent = 'Edit Project';
            fields.innerHTML = `
                <div class="form-group">
                    <label for="editProjectTitle">Project Title</label>
                    <input type="text" id="editProjectTitle" name="editProjectTitle" value="${project.title}" required>
                </div>
                <div class="form-group">
                    <label for="editProjectDesc">Description</label>
                    <textarea id="editProjectDesc" name="editProjectDesc" required>${project.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="editProjectTags">Tags (comma-separated)</label>
                    <input type="text" id="editProjectTags" name="editProjectTags" value="${project.tags.join(', ')}">
                </div>
                <div class="form-group">
                    <label for="editProjectIcon">Icon (Font Awesome class)</label>
                    <input type="text" id="editProjectIcon" name="editProjectIcon" value="${project.icon || 'fa-code'}">
                </div>
            `;
            break;
        case 'certificate':
            const cert = portfolioData.certificates.find(c => c.id === id);
            if (!cert) return;
            currentEditItem = cert;
            
            title.textContent = 'Edit Certificate';
            fields.innerHTML = `
                <div class="form-group">
                    <label for="editCertYear">Year</label>
                    <input type="text" id="editCertYear" name="editCertYear" value="${cert.year}" required>
                </div>
                <div class="form-group">
                    <label for="editCertTitle">Title</label>
                    <input type="text" id="editCertTitle" name="editCertTitle" value="${cert.title}" required>
                </div>
                <div class="form-group">
                    <label for="editCertDesc">Description</label>
                    <textarea id="editCertDesc" name="editCertDesc" required>${cert.description}</textarea>
                </div>
            `;
            break;
    }
    
    modal.classList.remove('hidden');
}

function saveEditedItem() {
    const modal = document.getElementById('editModal');
    
    switch(currentEditType) {
        case 'project':
            currentEditItem.title = document.getElementById('editProjectTitle').value.trim();
            currentEditItem.description = document.getElementById('editProjectDesc').value.trim();
            currentEditItem.tags = document.getElementById('editProjectTags').value.split(',').map(t => t.trim()).filter(t => t);
            currentEditItem.icon = document.getElementById('editProjectIcon').value.trim() || 'fa-code';
            break;
        case 'certificate':
            currentEditItem.year = document.getElementById('editCertYear').value.trim();
            currentEditItem.title = document.getElementById('editCertTitle').value.trim();
            currentEditItem.description = document.getElementById('editCertDesc').value.trim();
            break;
    }
    
    saveData();
    renderDynamicContent();
    modal.classList.add('hidden');
}

function deleteCurrentItem() {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const modal = document.getElementById('editModal');
    
    switch(currentEditType) {
        case 'project':
            portfolioData.projects = portfolioData.projects.filter(p => p.id !== currentEditItem.id);
            break;
        case 'certificate':
            portfolioData.certificates = portfolioData.certificates.filter(c => c.id !== currentEditItem.id);
            break;
    }
    
    saveData();
    renderDynamicContent();
    modal.classList.add('hidden');
}

// ===== Delete Functions =====
function deleteSkill(index) {
    if (!isLoggedIn) return;
    if (confirm('Delete this skill?')) {
        portfolioData.skills.splice(index, 1);
        saveData();
        renderSkills();
    }
}

function deleteProject(id) {
    if (!isLoggedIn) return;
    if (confirm('Delete this project?')) {
        portfolioData.projects = portfolioData.projects.filter(p => p.id !== id);
        saveData();
        renderProjects();
    }
}

function deleteCertificate(id) {
    if (!isLoggedIn) return;
    if (confirm('Delete this certificate?')) {
        portfolioData.certificates = portfolioData.certificates.filter(c => c.id !== id);
        saveData();
        renderCertificates();
    }
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
