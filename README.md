# Smart Attendance Management System (SAMS)

> **A secure, intelligent, and scalable academic attendance platform combining Dynamic QR authentication, AI-based face verification, and future IoT-based campus entry tracking.**

[![Java](https://img.shields.io/badge/Java-21-orange?style=flat-square\&logo=openjdk)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?style=flat-square\&logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-JavaScript-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-Expo-61DAFB?style=flat-square\&logo=react)](https://reactnative.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17+-316192?style=flat-square\&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?style=flat-square\&logo=redis)](https://redis.io/)
[![Python](https://img.shields.io/badge/Python-AI%20Service-3776AB?style=flat-square\&logo=python)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square\&logo=docker)](https://www.docker.com/)

---

## 📌 Overview

**Smart Attendance Management System (SAMS)** is a full-stack institutional platform designed to modernize academic attendance management for colleges and universities.

Instead of relying on traditional manual attendance, SAMS combines:

* 🔐 Role-based academic management
* 📱 Mobile application
* 💻 Web application
* 🔳 Dynamic QR-based attendance
* 🤖 AI-powered face verification
* 📊 Real-time attendance monitoring
* 📝 Controlled manual attendance
* 📄 Leave and permission management
* 🔔 Notifications and announcements
* 📈 Attendance analytics and reports
* 🏫 Timetable and classroom management
* 🛜 Future IoT-based campus entry verification
* 🔍 Campus-entry vs classroom-attendance comparison

The system is designed to evolve from a **software-only attendance platform** into a complete **AI + IoT-enabled institutional attendance ecosystem**.

---

# 🎯 Objectives

SAMS aims to:

* Reduce manual attendance workload.
* Prevent proxy attendance.
* Verify student identity.
* Associate attendance with the correct academic session.
* Provide real-time attendance monitoring.
* Maintain complete semester attendance history.
* Handle legitimate attendance exceptions.
* Provide academic analytics and reports.
* Support multiple departments, branches, sections, and classrooms.
* Provide a scalable architecture suitable for institutional deployment.

---

# 🧩 Core Concept

The primary software attendance flow is:

```text
Teacher creates attendance session
            ↓
Dynamic QR generated
            ↓
Students receive notification
            ↓
Student opens application
            ↓
Face verification
            ↓
Dynamic QR scanning
            ↓
Backend validation
            ↓
Attendance marked
            ↓
Real-time dashboard update
```

The software-only attendance workflow is intentionally independent of IoT so the complete application can be developed and tested before hardware integration.

---

# 👥 User Roles

SAMS contains four primary roles:

```text
                    SUPER ADMIN
                         │
                         ▼
                 DEPARTMENT ADMIN
                         │
                         ▼
                      TEACHER
                         │
                         ▼
                      STUDENT
```

The role hierarchy controls access to institutional, departmental, teaching, and personal data.

### Super Admin

Institution-wide control:

* Institution dashboard
* Department management
* Department Admin management
* User management
* Institution-wide reports
* Attendance analytics
* IoT device management
* Audit logs
* System activity monitoring

### Department Admin

Department-level management:

* Students
* Teachers
* Branches
* Years
* Sections
* Subjects
* Classrooms
* Timetables
* Faculty assignments
* Attendance
* Leave requests
* Reports
* Department analytics

### Teacher

Teaching and attendance management:

* Today's classes
* Assigned subjects
* Assigned sections
* Classrooms
* Attendance sessions
* Dynamic QR generation
* Live attendance
* Manual attendance
* Attendance corrections
* Leave/permission requests
* Announcements
* Reports

### Student

Personal academic management:

* Student dashboard
* Today's classes
* Attendance
* Dynamic QR scanning
* Face verification
* Attendance history
* Subject-wise attendance
* Attendance calendar
* Attendance analytics
* Leave/permission requests
* Notifications
* Academic announcements

---

# 🔳 Dynamic QR Attendance

Each attendance session receives a unique, short-lived QR token.

### Requirements

* Unique per session
* Secure
* Short-lived
* Automatically expires
* Cannot be reused after expiration
* Cannot be reused for another session
* Contains a secure session token rather than sensitive student information

### Attendance Validation

The backend verifies:

```text
Student authenticated?
        ↓
Session active?
        ↓
QR valid?
        ↓
QR not expired?
        ↓
Student belongs to section?
        ↓
Student enrolled in subject?
        ↓
Face verification successful?
        ↓
Attendance already recorded?
        ↓
        YES
        ↓
     PRESENT
```

## This validation flow is central to preventing invalid and duplicate attendance.

# 🤖 AI Face Verification

Face recognition provides an additional identity-verification layer.

### Registration

```text
Student profile photo
        ↓
Face detection
        ↓
Face embedding
        ↓
Secure storage
```

### Attendance

```text
Student camera
      ↓
Face detection
      ↓
Face embedding
      ↓
Compare with registered identity
      ↓
Verification result
      ↓
Attendance validation
```

### AI Service

The production architecture uses a dedicated Python service:

```text
Spring Boot
     ↓
FastAPI
     ↓
InsightFace
     ↓
ONNX Runtime
     ↓
Face verification
     ↓
Spring Boot
```

Planned AI technologies:

* Python
* FastAPI
* OpenCV
* InsightFace
* ONNX Runtime

The initial prototype may simulate face verification before the production AI service is integrated.

---

# 📝 Manual Attendance

Manual attendance is treated as a **controlled exception**, not a simple unrestricted "Mark Present" operation.

Valid reasons may include:

* Approved permission
* Face recognition failure
* QR failure
* Device problem
* Technical issue
* Medical emergency
* Other approved reason

Every manual attendance action records:

```text
Student
Teacher
Session
Reason
Remarks
Timestamp
Manual flag
```

This creates an audit trail for attendance modifications.

---

# 📝 Leave & Permission Management

Students can submit:

* Leave requests
* Permission requests
* Reason
* Date
* Optional attachment

Workflow:

```text
Student
   ↓
Submit Request
   ↓
Teacher
   ↓
Approve / Reject
   ↓
Decision Recorded
```

Approved permission can be used as a valid basis for controlled attendance handling.

---

# 📊 Attendance Analytics

Students can view:

* Overall attendance
* Subject-wise attendance
* Monthly trends
* Present vs absent
* Low-attendance subjects
* Attendance calendar
* Daily attendance history

Teachers and administrators receive progressively broader analytics based on their permissions.

---

# 📈 Reports

### Student

* Daily attendance
* Subject attendance
* Semester attendance

### Teacher

* Daily reports
* Subject reports
* Section reports
* Monthly reports
* Semester reports

### Department Admin

* Department reports
* Section reports
* Subject reports
* Teacher reports
* Student reports
* Manual attendance reports

### Super Admin

* Institution-wide statistics
* Department comparison
* Attendance trends

---

# 🗓️ Academic Management

SAMS includes:

* Departments
* Branches
* Academic years
* Semesters
* Sections
* Subjects
* Teachers
* Students
* Classrooms
* Timetables
* Teacher assignments
* Student enrollments
* Substitute teacher assignments

### Timetable

Each timetable entry associates:

```text
Subject
Teacher
Section
Classroom
Day
Period
Start Time
End Time
```

---

# 🏫 Classroom Management

Administrators can manage:

* Room number
* Building
* Capacity
* Department
* Classroom status

Future IoT devices can also be associated with classrooms or campus locations.

---

# 🔔 Notifications

### Student

* Attendance session started
* Attendance successful
* Attendance failed
* Attendance reminder
* Leave approved
* Leave rejected
* Department announcement
* Academic announcement

### Teacher

* Attendance session
* Leave request
* Student message
* Department announcement

### Admin

* System alerts
* Department updates
* User activity

Push notifications are planned through **Firebase Cloud Messaging (FCM)**.

---

# 💬 Messaging & Announcements

Teachers can:

* Send section announcements
* Send individual student messages
* Send attendance-related notifications

Department administrators can send department-wide announcements.

---

# 🔐 Security

SAMS uses multiple security layers:

* Spring Security
* JWT authentication
* Refresh tokens
* BCrypt password hashing
* Role-Based Access Control
* HTTPS
* Input validation
* API authorization
* Rate limiting
* Audit logging
* Secure QR tokens
* Short QR expiry
* Duplicate attendance prevention

### RBAC Rules

```text
SUPER_ADMIN
    → Institution-wide access

DEPARTMENT_ADMIN
    → Assigned department

TEACHER
    → Assigned classes/subjects

STUDENT
    → Own data
```

A student cannot access another student's private data, teachers cannot manage unauthorized classes, and Department Admins are restricted to their departments.

---

# 🗄️ Database Architecture

SAMS uses a **multi-component data architecture** based on data characteristics rather than using multiple databases unnecessarily.

## PostgreSQL — Primary Database

PostgreSQL is the **source of truth** for all permanent institutional and transactional data.

### Core domains

```text
Identity
├── users
├── roles
├── user_roles
└── refresh_tokens

Academic
├── institutions
├── departments
├── branches
├── academic_years
├── semesters
├── sections
├── students
├── teachers
├── subjects
└── classrooms

Assignments
├── teacher_subject_assignments
├── teacher_section_assignments
├── student_section_enrollments
└── subject_section_assignments

Scheduling
├── timetables
└── timetable_entries

Attendance
├── attendance_sessions
├── attendance_records
├── attendance_corrections
├── manual_attendance_records
└── qr_sessions

AI
└── student_face_profiles

Leave
├── leave_requests
├── permission_requests
└── decisions

Communication
├── notifications
├── announcements
└── messages

IoT
├── iot_devices
├── iot_device_events
└── campus_entry_logs

Security
└── audit_logs
```

The project's original specification establishes PostgreSQL as the primary database and identifies the core entities above.

---

## Redis — High-Speed Temporary Data

Redis is used where low latency and automatic expiration are beneficial.

### Uses

* Active QR tokens
* QR expiration/TTL
* Temporary verification state
* API rate limiting
* Caching
* Frequently accessed dashboard data
* Short-lived real-time state

Example:

```text
Teacher starts session
        ↓
Secure QR token
        ↓
Redis
        ↓
TTL expires
        ↓
QR automatically becomes invalid
```

Permanent attendance records remain in PostgreSQL.

---

## pgvector — Face Embeddings

PostgreSQL can be extended with **pgvector** for storing and comparing face embeddings.

```text
Student
   ↓
Face Profile
   ↓
Embedding Vector
   ↓
PostgreSQL + pgvector
```

Sensitive face-related information is isolated from normal user-facing APIs.

---

## Object Storage

Large files should not be stored directly in PostgreSQL.

Potential files include:

* Student profile images
* Leave attachments
* Permission attachments
* Other uploaded documents

The database stores the relevant object-storage reference/key.

---

# 🏗️ System Architecture

```text
                         SMART ATTENDANCE
                         MANAGEMENT SYSTEM
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
            React Web                       React Native
                 │                                 │
                 └────────────────┬────────────────┘
                                  │
                              REST APIs
                                  │
                         ┌────────▼────────┐
                         │   Spring Boot   │
                         │     Backend     │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼──────────────────┐
              │                   │                  │
              ▼                   ▼                  ▼
         PostgreSQL             Redis           AI Service
         Source of Truth       Cache/State        FastAPI
              │                                      │
              │                                Face Recognition
              │
              │
              ▼
         Attendance Engine
              │
       ┌──────┴─────────┐
       │                │
       ▼                ▼
  Web Dashboard    Mobile Dashboard

                         +
                         
                     Future IoT
                         │
                       ESP32
                         │
                   Barcode Scanner
                         │
                         ▼
                    Spring Boot
                         │
                         ▼
                 Campus Entry Logs
```

The overall architecture follows the project's intended separation between frontend applications, Spring Boot backend, AI service, PostgreSQL and future IoT integration.

---

# 📱 Web & Mobile Applications

The system contains two feature-complete client applications.

## Web

Built with:

* React
* JavaScript
* Vite
* Tailwind CSS
* Redux Toolkit
* React Router
* React Hook Form
* Recharts

## Mobile

Built with:

* React Native
* Expo
* JavaScript
* NativeWind
* Redux Toolkit
* React Navigation

Both applications use the same:

* Backend
* APIs
* Authentication
* Business rules
* Roles
* Permissions
* Database

Only the UI/UX adapts to the device.

---

# 🔌 IoT — Phase 2

IoT is **not required for the initial software system**.

The planned hardware layer uses:

* ESP32
* Barcode scanner
* Student ID card

### Campus Entry Flow

```text
Student ID Card
       ↓
Barcode Scanner
       ↓
ESP32
       ↓
Wi-Fi
       ↓
Spring Boot API
       ↓
Student Identification
       ↓
Campus Entry Log
```

The barcode contains the student's roll number, which the backend uses to identify the student and record campus entry.

### Important Design Principle

> **The IoT device does not contain the core business logic.**

The backend remains responsible for:

* Authentication
* Device validation
* Student identification
* Authorization
* Entry validation
* Data persistence

---

# 🧠 Campus Entry vs Classroom Attendance

Once IoT is implemented, SAMS can correlate two independent events:

```text
Campus Entry
      │
      │
      ├──────────────┐
      │              │
      ▼              ▼
Student enters   Classroom attendance
college          recorded/not recorded
      │              │
      └──────┬───────┘
             ▼
       Attendance Engine
             │
             ▼
        Comparison
```

Example:

```text
Campus Entry       ✅
Class Attendance   ❌

→ Student entered the college
→ Student did not record attendance for that class
```

This provides an additional institutional insight layer beyond conventional attendance systems.

---

# 🧪 Prototype vs Production

## Prototype

The initial UI/UX prototype can be developed using:

```text
React
+
JavaScript
+
Tailwind CSS
+
Mock Data
+
localStorage
```

The prototype can simulate:

* Face recognition
* QR scanning
* Attendance
* Notifications
* User management

Its purpose is to validate the UI and workflows before full backend integration.

## Production

```text
React Web
      +
React Native
      +
Spring Boot
      +
PostgreSQL
      +
Redis
      +
pgvector
      +
FastAPI AI Service
      +
IoT
      +
Cloud Infrastructure
```

---

# 📂 Repository Structure

```text
smart-attendance-management-system/
│
├── frontend-web/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── frontend-mobile/
│   ├── src/
│   ├── assets/
│   ├── app.json
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── README.md
│
├── ai-service/
│   ├── app/
│   ├── requirements.txt
│   └── README.md
│
├── iot/
│   ├── firmware/
│   └── README.md
│
├── database/
│   ├── migrations/
│   ├── seed/
│   ├── scripts/
│   └── README.md
│
├── docs/
│   ├── architecture/
│   ├── api/
│   ├── database/
│   ├── security/
│   └── requirements/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# 🛠️ Technology Stack

## Frontend

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| React           | Web UI                  |
| JavaScript      | Type safety             |
| Vite            | Frontend tooling        |
| Tailwind CSS    | UI styling              |
| Redux Toolkit   | State management        |
| React Router    | Routing                 |
| React Hook Form | Form management         |
| Recharts        | Analytics/visualization |

## Mobile

| Technology       | Purpose             |
| ---------------- | ------------------- |
| React Native     | Mobile application  |
| Expo             | Development/runtime |
| JavaScript       | Type safety         |
| NativeWind       | Styling             |
| Redux Toolkit    | State management    |
| React Navigation | Navigation          |

## Backend

| Technology      | Purpose                        |
| --------------- | ------------------------------ |
| Java 21         | Backend language               |
| Spring Boot 3   | Backend framework              |
| Spring Security | Authentication & authorization |
| JWT             | Token authentication           |
| Spring Data JPA | Persistence                    |
| Hibernate       | ORM                            |
| Maven           | Build management               |

## Data

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| PostgreSQL     | Primary database        |
| Redis          | Cache & temporary state |
| pgvector       | Face embeddings         |
| Object Storage | File storage            |

## AI

| Technology   | Purpose          |
| ------------ | ---------------- |
| Python       | AI service       |
| FastAPI      | AI API           |
| OpenCV       | Computer vision  |
| InsightFace  | Face recognition |
| ONNX Runtime | Model inference  |

## IoT

| Technology      | Purpose             |
| --------------- | ------------------- |
| ESP32           | Hardware controller |
| Barcode Scanner | Student ID scanning |

## Infrastructure

| Technology     | Purpose              |
| -------------- | -------------------- |
| Git            | Version control      |
| GitHub         | Repository           |
| Docker         | Containerization     |
| GitHub Actions | CI/CD                |
| NGINX          | Reverse proxy        |
| AWS            | Cloud infrastructure |
| Firebase FCM   | Push notifications   |

The technology choices follow the project's defined stack, with Redis/pgvector added as architectural components for the specific performance and AI requirements.

---

# 🚀 Development Roadmap

SAMS will be developed incrementally.

```text
Phase 1   Foundation
   ↓
Phase 2   Authentication & RBAC
   ↓
Phase 3   User Management
   ↓
Phase 4   Academic Management
   ↓
Phase 5   Web Application
   ↓
Phase 6   Mobile Application
   ↓
Phase 7   Dynamic QR Attendance
   ↓
Phase 8   AI Face Recognition
   ↓
Phase 9   Manual Attendance + Leave
   ↓
Phase 10  Notifications & Messaging
   ↓
Phase 11  Reports & Analytics
   ↓
Phase 12  IoT Campus Entry
   ↓
Phase 13  Testing
   ↓
Phase 14  Deployment
```

The project specification explicitly follows this incremental development strategy rather than attempting to build the entire system simultaneously.

---

# 🧪 Testing Strategy

Testing will cover multiple layers:

### Backend

* Unit tests
* Service tests
* Repository tests
* Integration tests

### API

* Authentication testing
* Authorization testing
* Attendance validation
* QR expiry
* Duplicate attendance
* Role restrictions

### Frontend

* Component testing
* Form validation
* Navigation
* State management

### Mobile

* Authentication
* QR scanner
* Camera/face verification
* Notifications
* Offline/error states

### Security

* RBAC testing
* JWT validation
* API authorization
* Rate limiting
* Input validation
* Sensitive data exposure

### Performance

* Concurrent attendance sessions
* Large student sections
* Multiple departments
* QR scan bursts
* Database query performance
* API response time

---

# 📈 Scalability

The architecture is designed to support:

* Multiple departments
* Multiple branches
* Multiple sections
* Thousands of students
* Multiple classrooms
* Multiple IoT scanners
* Multiple simultaneous attendance sessions

Future infrastructure can scale horizontally:

```text
                    Load Balancer
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
        Spring Boot  Spring Boot  Spring Boot
             │           │           │
             └───────────┼───────────┘
                         │
                ┌────────┴────────┐
                │                 │
            PostgreSQL          Redis
                │
                ▼
          AI Service Pool
```

The separation between clients, backend, AI service, database, cache and IoT allows individual components to scale independently when required.

---

# 🔐 Privacy Considerations

Because SAMS processes student identity and potentially biometric information:

* Face embeddings must be protected.
* Face-related data should not be exposed through ordinary student APIs.
* Authentication tokens must be protected.
* API authorization must be enforced server-side.
* Attendance modifications must be auditable.
* QR tokens must be short-lived.
* IoT devices must authenticate with the backend.
* Sensitive data should be transmitted over HTTPS.
* Access should follow least-privilege principles.

---

# 📚 Learning & Development Philosophy

SAMS is intended not only as a capstone application but also as a practical full-stack engineering project.

The development principle is:

```text
Learn
  ↓
Design
  ↓
Implement
  ↓
Test
  ↓
Integrate
  ↓
Document
```

For every feature, understand:

```text
Why is it required?
        ↓
How should it work?
        ↓
What data is required?
        ↓
What API is required?
        ↓
How does Spring Boot process it?
        ↓
How is it stored?
        ↓
How does Web consume it?
        ↓
How does Mobile consume it?
        ↓
How is it secured?
        ↓
How is it tested?
```

This approach turns SAMS into a practical learning project covering full-stack development, system design, database engineering, AI integration, mobile development, IoT and deployment.

---

# 🗺️ Project Vision

SAMS is designed as **one institutional platform**, not a collection of disconnected applications.

```text
                    SMART ATTENDANCE
                    MANAGEMENT SYSTEM
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
       Student             Teacher             Admin
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                      Central Platform
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
       Web App          Mobile App             AI
                                                │
                                                │
                                                ▼
                                               IoT
```

### Core Identity

> **A secure, intelligent, and scalable academic attendance platform that combines Dynamic QR authentication, AI-based face verification, and future IoT-based campus entry tracking to provide transparent, real-time attendance management for educational institutions.**

---

## ⭐ Project Status

> 🚧 **Currently in development**

### Current focus

* [ ] Repository setup
* [ ] Database architecture
* [ ] Spring Boot foundation
* [ ] Authentication & RBAC
* [ ] Academic management
* [ ] Web application
* [ ] Mobile application
* [ ] Dynamic QR attendance
* [ ] AI face verification
* [ ] Leave & permission management
* [ ] Notifications
* [ ] Reports & analytics
* [ ] IoT campus entry
* [ ] Testing
* [ ] Deployment

---

## 📄 License

This project is developed as an academic/capstone project.

License information will be added as the project reaches its release stage.

---

## 👨‍💻 Project

**Smart Attendance Management System (SAMS)**

Built as a comprehensive academic platform combining:

**Web + Mobile + Spring Boot + PostgreSQL + Redis + AI + IoT**
