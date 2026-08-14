// This is your "retrieval" step, done at zero cost: paste your resume /
// bio content as plain text below. For a single-document knowledge base
// like a resume, injecting the full text into the system prompt IS RAG —
// there's no need for embeddings or a vector DB at this scale.
//
// Lives in /api (not /src) because it must NEVER ship to the browser
// bundle — it's only read server-side by chat.js.

export const RESUME_CONTEXT = `
NAME: Aditya Kumar
ROLE: Full Stack Web Developer

SUMMARY:
Full Stack Web Developer with strong experience building scalable web applications
using JavaScript, Node.js, and React. Has foundational knowledge in machine learning,
including data analysis and model building with Python libraries such as NumPy, Pandas,
and Scikit-learn. Passionate about integrating intelligent features into real-world
applications.

SKILLS:
Programming Languages: Java, JavaScript, Python
Web Technologies: HTML, CSS, React.js, Node.js, Express.js
Databases: MongoDB, MySQL, PostgreSQL
Tools & Platforms: Git, GitHub, Postman, Vercel, Cloudinary
Machine Learning Libraries: NumPy, Pandas, Scikit-learn, Matplotlib
Other: REST API design, JWT Authentication, RBAC (Role-Based Access Control), MVC Architecture, Odoo ERP/CRM customization

EXPERIENCE:
- Software Development Intern at Bihar Industrial Area Development Authority (BIADA)
  Tech stack: Odoo 19, Python, PostgreSQL, XML, JavaScript.
  Customized the Odoo CRM for BIADA's Investor Promotion workflow — built modules for
  Investor Registration, Lead Management, Opportunity Tracking, Industrial Area, Plot,
  Shed, and Administrative Record Management. Developed custom models, views, actions,
  menus, and access control using the Odoo framework. Implemented business workflows
  including plot allocation, investor inquiry management, approval processes, and data
  validation. Used PostgreSQL with Odoo ORM to manage relational data and optimize
  business operations. Participated in requirement analysis, module customization,
  testing, and debugging as part of the BIADA IT development team.

- Webmaster at IEEE Student Branch, Amity University Patna (2024 – Present)
  Developed and maintained the official IEEE Student Branch website using HTML, CSS,
  JavaScript, and React.js. Managed website updates, resolved technical issues, and
  ensured a responsive user experience. Collaborated with the IEEE committee using
  Git and GitHub for version control and website maintenance.

PROJECTS:
- Project Camp Backend — Secure Project Management REST API
  Tech stack: Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Nodemailer, REST API, RBAC.
  A backend-only project management system with RESTful APIs for project, task, subtask,
  and note management. Implemented secure authentication using JWT with refresh tokens,
  email verification, and password reset functionality. Designed role-based access control
  (RBAC) supporting Admin, Project Admin, and Member roles for controlled resource access.
  Built 30+ API endpoints for project creation, task assignment, team management, status
  tracking, and notes handling. Integrated file upload using Multer for task attachments,
  with validation and security middleware. Structured using MVC architecture for
  scalability and maintainability.
  GitHub: https://github.com/adi-123kumar/ProjectManagementSystem

- Home Rental System — Full Stack Rental Listing Platform
  Tech stack: Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, REST API, EJS, Bootstrap.
  A full-stack rental listing platform enabling users to browse, post, and manage
  property listings with image uploads. Implemented secure authentication and
  authorization for signup/login, profile management, and personalized dashboards.
  Built CRUD operations for rental properties with image handling using Multer and
  Cloudinary. Structured using MVC architecture, server-side validation, and session
  management. Optimized data storage and retrieval using MongoDB and Mongoose.
  GitHub: https://github.com/adi-123kumar/MAJOR-PROJECT-1
  Website: https://smart-rental-eta.vercel.app/

EDUCATION:
Integrated BCA + MCA (Computer Applications), Amity University Patna — CGPA: 9.17

CONTACT:
Email: adityarishu134@gmail.com
Phone: +91 9142756328
LinkedIn: (link on portfolio navbar/footer)
GitHub: (link on portfolio navbar/footer)
`;
