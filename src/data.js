export const LINKS = {
  email: 'manjureddyb997@gmail.com', phone: '+16282374029', phoneLabel: '+1 (628) 237-4029',
  calendly: 'https://calendly.com/manjureddyb97/30min',
  linkedin: 'https://www.linkedin.com/in/manju-reddy-01abba213/', github: 'https://github.com/manjureddy97',
  resume: './Manju_Reddy_Technical_Lead_Resume.pdf',
}
export const ROLES = ['Technical Lead', 'Full Stack Engineer', 'AI Systems Builder', 'Engineering Mentor']
export const STATS = [
  { n: 9, s: '+', l: 'years building production software' }, { n: 100, s: 'K+', l: 'users on the Josh video platform' },
  { n: 20, s: 'K+', l: 'concurrent users on a backend I architected' }, { n: 35, s: '%', l: 'better AI recommendation relevance' },
  { n: 40, s: '%', l: 'faster database queries' },
]
export const PILLARS = [
  ['Build', 'Scalable APIs, modern full-stack products and mobile apps that hold up under real traffic.'],
  ['Lead', 'Architecture decisions, code review standards and clear technical direction for the team.'],
  ['Deliver', 'Ownership of quality, releases and production reliability, with stakeholders kept in the loop.'],
  ['Mentor', 'Pairing, reviews and hands-on training that turn engineers into confident owners.'],
]
const dv = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/'
const t = (n, p) => ({ n, i: p ? dv + p + '.svg' : null })
export const TECH = {
  Frontend: [t('React', 'react/react-original'), t('Next.js', 'nextjs/nextjs-original'), t('TypeScript', 'typescript/typescript-original'), t('JavaScript', 'javascript/javascript-original'), t('React Native', 'react/react-original'), t('Redux', 'redux/redux-original'), t('HTML5', 'html5/html5-original'), t('CSS3', 'css3/css3-original'), t('Bootstrap', 'bootstrap/bootstrap-original'), t('Material UI', 'materialui/materialui-original'), t('Tailwind CSS', 'tailwindcss/tailwindcss-original')],
  Backend: [t('Python', 'python/python-original'), t('FastAPI', 'fastapi/fastapi-original'), t('Django', 'django/django-plain'), t('Node.js', 'nodejs/nodejs-original'), t('NestJS', 'nestjs/nestjs-original'), t('Express.js', 'express/express-original'), t('GraphQL', 'graphql/graphql-plain'), t('Ruby on Rails', 'rails/rails-plain'), t('Celery'), t('REST APIs'), t('Microservices')],
  Data: [t('PostgreSQL', 'postgresql/postgresql-original'), t('MongoDB', 'mongodb/mongodb-original'), t('MySQL', 'mysql/mysql-original'), t('Redis', 'redis/redis-original'), t('DynamoDB', 'dynamodb/dynamodb-original'), t('BigQuery'), t('Firebase', 'firebase/firebase-plain'), t('pgvector'), t('Qdrant')],
  'AI and LLMs': [t('OpenAI APIs'), t('LLM integration'), t('RAG pipelines'), t('Embeddings'), t('Vector search'), t('Multi-agent orchestration'), t('AI search and retrieval')],
  'Cloud and DevOps': [t('AWS', 'amazonwebservices/amazonwebservices-original-wordmark'), t('Google Cloud', 'googlecloud/googlecloud-original'), t('Azure', 'azure/azure-original'), t('Docker', 'docker/docker-original'), t('Kubernetes', 'kubernetes/kubernetes-original'), t('Jenkins', 'jenkins/jenkins-original'), t('CI/CD'), t('SonarQube', 'sonarqube/sonarqube-original'), t('Datadog'), t('Grafana', 'grafana/grafana-original'), t('Prometheus', 'prometheus/prometheus-original'), t('Nginx', 'nginx/nginx-original'), t('Netlify', 'netlify/netlify-original')],
  'Tools and design': [t('Git', 'git/git-original'), t('GitHub', 'github/github-original'), t('Postman', 'postman/postman-original'), t('VS Code', 'vscode/vscode-original'), t('Figma', 'figma/figma-original'), t('Adobe XD', 'xd/xd-plain'), t('Xcode', 'xcode/xcode-original'), t('Android Studio', 'androidstudio/androidstudio-original'), t('Expo')],
}
export const EXPERIENCE = [
  { co: 'Cognativ (One C1)', role: 'Senior Engineer', date: 'Jan 2026 to present', logo: '', now: true,
    d: ['Own full-stack implementation, API development, database optimization, integration evaluation, deployments and production support for vendor management, billing and school management platforms.', 'Built a Partner Directory in Next.js, NestJS and PostgreSQL with onboarding, search and filtering, CSV and PDF exports, audit logging and User, Admin and Super Admin RBAC.', 'Strengthened API authorization by removing legacy authentication fallbacks, and improved billing reliability with idempotency, billing-status validation and safer scheduled jobs.', 'Automated SLA-based invoicing from Dialogflow usage data, BigQuery and PDF generation, and assessed NetSuite REST connectivity and incremental sync.', 'Containerized services for GCP and Vercel, and delivered web, backend and mobile features for the OB2 and Spigat school platforms.'],
    s: ['Next.js', 'NestJS', 'PostgreSQL', 'GCP', 'BigQuery', 'Docker', 'RBAC'] },
  { co: 'Coforge', role: 'Senior Engineer', date: 'Aug 2025 to Dec 2025', logo: 'https://www.greatplacetowork.in/great/api/assets/uploads/8860/logo/logo.jpg',
    d: ['Led FastAPI and Next.js SRE dashboard automation, cutting dashboard creation from hours to minutes.', 'Architected reusable Datadog widget builders across 50+ dashboards, integrated AWS and Azure services and built React Native SRE modules.', 'Mentored engineers on coding standards and development practices.'],
    s: ['FastAPI', 'Next.js', 'Datadog', 'AWS', 'Azure', 'React Native'] },
  { co: 'BDNT Labs', role: 'Senior Software Engineer', date: 'Mar 2024 to Aug 2025', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO0DpltfzxawXnJJMIZjtWVaYECVq5maT9A&s',
    d: ['Built Upadhi.ai (React and Python) for 10K+ users and integrated OpenAI recommendations, improving relevance by 35%.', 'Architected Execera.ai AI governance with multi-agent orchestration, pgvector and Qdrant search across 1,000+ documents.', 'Developed the ISTS scholarship platform (Django and FastAPI) for 5K+ applicants with fraud detection and automated scoring.', 'Architected the Dhyeya Node.js and GraphQL backend for 20K+ concurrent users and cut PostgreSQL and MongoDB query times by 40%.', 'Integrated AWS Lambda, RDS, S3, SNS and SES, and established Jenkins and SonarQube practices that kept code-quality scores above 95%.'],
    s: ['OpenAI', 'RAG', 'pgvector', 'Qdrant', 'GraphQL', 'Django', 'FastAPI', 'AWS', 'Jenkins'] },
  { co: 'Aaron Software Solutions', role: 'Senior Software Engineer', date: 'Jul 2023 to Mar 2024', logo: './logos/aaron.png',
    d: ['Architected enterprise web and mobile applications with React and React Native, and led front-end development.', 'Established coding standards, state management with Redux Toolkit, and collaborated with UX and UI designers.', 'Conducted technical interviews and mentored junior developers.'],
    s: ['React', 'React Native', 'Redux Toolkit', 'Material UI'] },
  { co: 'Natsoft', role: 'Senior Software Engineer', date: 'Jul 2022 to Jun 2023', logo: 'https://media.licdn.com/dms/image/C4E0BAQEr40qQwS1DmA/company-logo_200_200/0/1630572952269/natsoft_logo?e=2147483647&v=beta&t=ZOFnorJMS18B9okXuhMIiMCH7rajsrh1fV620E34XUc',
    d: ['Developed the SOSIN IAS React Native application for 5K+ students, with collaborative mock tests.', 'Built a React and Django examination-management platform.'],
    s: ['React Native', 'React', 'Django'] },
  { co: 'Riser Tech Hub', role: 'React Native Developer', date: 'Mar 2022 to Jun 2022', logo: 'https://media.licdn.com/dms/image/C560BAQGFUXFOrwA4sA/company-logo_200_200/0/1630561994394/riser_techub_logo?e=2147483647&v=beta&t=8Ml65wHqwsjjWMNgNzzRrb2m901m1MNT0VRIER-0KSM',
    d: ['Delivered Rectra in-app purchase features and the Josh Fan App video platform (100K+ users).', 'Built recommendations that improved engagement by 45% and supported Kubernetes and Redis scaling.'],
    s: ['React Native', 'Kubernetes', 'Redis'] },
  { co: 'True Equations', role: 'React Native Developer', date: 'Oct 2021 to Mar 2022', logo: 'https://media.instahyre.com/images/profile/base/employer/29611/0268b3939c/logo_resize.webp',
    d: ['Developed the MyRingByMe iOS application for interactive 3D ring customization, with API integrations.'], s: ['React Native', 'iOS', 'REST APIs'] },
  { co: 'Seasia Infotech', role: 'Software Engineer', date: 'Jun 2021 to Oct 2021', logo: 'https://media.licdn.com/dms/image/D4D0BAQFYdIpi7JwEMA/company-logo_200_200/0/1706010439878/seasia_infotech_logo?e=2147483647&v=beta&t=ZIo8IX0iWGfcwT--SeBOm1jouin_0DQ4jizpwzjbWi8',
    d: ['Built E-Locations property-search map features and Sparkseeker real-time video and audio collaboration across web, mobile and backend services.'], s: ['React', 'React Native', 'Node.js'] },
  { co: 'Blue I Hub', role: 'UI/UX Designer and React Developer', date: 'Apr 2017 to Jun 2021', logo: 'https://content.jdmagicbox.com/comp/hyderabad/k4/040pxx40.xx40.190323001528.n4k4/catalogue/blueihub-it-services-pvt-ltd-begumpet-hyderabad-internet-website-designers-r0rw18dafb-250.jpg',
    d: ['Built a React Native and Firebase school management app adopted by 20+ schools.', 'Delivered an exam platform, calendar automation, BigQuery and Looker reporting, and a Singapore government security alert app.'], s: ['React', 'React Native', 'Firebase', 'BigQuery', 'Figma'] },
]
export const CERTS = ['Data Structures & Algorithms, HeyCoach (2024)', 'MERN/MEAN Full Stack, Simplilearn (2023)', 'Node.js (2022)', 'React.js (2022)', 'Artificial Intelligence, Intellipaat (2022)']
export const VENTURES = [['BSM Enterprise LLP', 'Business leadership, operations and technology initiatives.'], ['BSM SkillBridge', 'Hands-on training in C, Python, data structures, APIs, full stack and Generative AI.'], ['BSM Talentsolutions', 'Talent sourcing, hiring and professional development.'], ['AaxiomCrest Technologies', 'Software engineering, AI and technology solutions.']]
