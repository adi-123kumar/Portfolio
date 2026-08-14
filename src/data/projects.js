// Single source of truth for project content.
// Adding a new project = adding one object here. No component edits needed.
export const projects = [
  {
    id: 'proj-1',
    title: 'Project Camp Backend',
    problem:
      'Teams need a reliable way to manage projects, tasks, and permissions without building auth and access control from scratch every time.',
    solution:
      'Built a backend-only project management system with 30+ REST API endpoints covering projects, tasks, subtasks, and notes. Implemented JWT authentication with refresh tokens, email verification, and password reset, plus role-based access control (Admin, Project Admin, Member) so permissions are enforced at the API level.',
    impact:
      'Delivered a production-style backend with secure auth, file uploads via Multer, and validation/security middleware — structured with MVC architecture for scalability and maintainability.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Nodemailer', 'RBAC'],
    demoUrl: '',
    repoUrl: 'https://github.com/adi-123kumar/ProjectManagementSystem',
    image: '/assets/images/project-camp-backend.png',
  },
  {
    id: 'proj-2',
    title: 'Home Rental System',
    problem:
      'Renters and landlords need a simple platform to list, browse, and manage rental properties with real photos and secure accounts.',
    solution:
      'Built a full-stack rental listing platform with signup/login, profile management, and personalized dashboards. Implemented full CRUD for property listings with image uploads handled via Multer and Cloudinary, backed by server-side validation and session management.',
    impact:
      'Shipped a live, publicly accessible platform with optimized data storage and retrieval using MongoDB and Mongoose, structured with an MVC architecture.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'EJS', 'Bootstrap'],
    demoUrl: 'https://smart-rental-eta.vercel.app/',
    repoUrl: 'https://github.com/adi-123kumar/MAJOR-PROJECT-1',
    image: '/assets/images/home-rental-system.png',
  },
];
