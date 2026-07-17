# Smart Attendance Management System (SAMS)

> An Enterprise-Grade AI, IoT, and QR-Based Attendance & Academic Management Platform for Educational Institutions.

## 📖 Overview

Smart Attendance Management System (SAMS) is a modern attendance and academic management platform designed to replace traditional attendance methods with a secure, intelligent, and automated solution.

The system combines **IoT-enabled barcode-based campus entry**, **AI-powered face recognition**, and **Dynamic QR Code verification** to ensure that attendance is recorded only for students who are physically present in the classroom.

Apart from attendance, SAMS provides a complete academic management ecosystem for **Students, Teachers, Department Admins, and Super Admins** through both **Web** and **Mobile Applications** with identical features and synchronized data.

---

# 🎯 Objectives

- Eliminate proxy attendance.
- Automate attendance management.
- Reduce faculty workload.
- Provide real-time attendance tracking.
- Maintain secure attendance records.
- Improve transparency.
- Digitalize academic attendance.
- Generate reports and analytics.
- Support multiple departments.
- Build a scalable enterprise solution.

---

# 🚀 Key Features

## Student Module

- Secure Login
- First-Time Registration
- Profile Management
- Barcode-Based Campus Entry
- Attendance Session Notifications
- AI Face Recognition
- Dynamic QR Code Attendance
- Semester Attendance Dashboard
- Subject-wise Attendance
- Daily Attendance Register
- Attendance History
- Leave & Permission Requests
- Academic Announcements
- Department Notices
- Real-Time Notifications
- Settings
- Dark/Light Theme

---

## Teacher Module

- Dashboard
- Attendance Session Management
- Dynamic QR Generation
- Live Attendance Monitoring
- Manual Attendance Approval
- Student Attendance Comparison
- Daily Reports
- Subject-wise Reports
- Section-wise Reports
- Monthly Reports
- Semester Reports
- Attendance Analytics
- Student Messaging
- Section Announcements
- Leave & Permission Approval
- Assign Substitute Teacher
- Timetable Management
- Notification Center

---

## Department Admin Module

- Dashboard
- Student Management
- Teacher Management
- Department Management
- Section Management
- Subject Management
- Classroom Management
- Timetable Management
- Attendance Monitoring
- Attendance Reports
- Leave Records
- User Credential Management
- Department Notifications
- Analytics

---

## Super Admin Module

- Institution Dashboard
- Department Management
- Department Admin Management
- User Management
- IoT Device Management
- Institution Reports
- Global Analytics
- Audit Logs
- System Configuration
- Security Management

---

# 📱 Platforms

## Web Application

Available for

- Super Admin
- Department Admin
- Teacher
- Student

---

## Mobile Application

Available for

- Super Admin
- Department Admin
- Teacher
- Student

> Both applications provide the same features, workflows, permissions, and business logic while adapting the UI to desktop and mobile devices.

---

# 📌 Attendance Workflow

```text
Student Enters College
        │
        ▼
Scan Student ID Card
(ESP32 + Barcode Scanner)
        │
        ▼
Campus Entry Recorded
        │
        ▼
Teacher Starts Attendance Session
        │
        ▼
Dynamic QR Code Generated
        │
        ▼
Students Receive Notification
        │
        ▼
Open SAMS Application
        │
        ▼
AI Face Recognition
        │
        ▼
Scan Dynamic QR Code
        │
        ▼
Attendance Verified
        │
        ▼
Present
```

---

# 📄 Manual Attendance Workflow

Students who cannot complete digital attendance due to valid reasons can receive manual attendance approval.

Reasons include:

- Approved Permission
- Face Recognition Failure
- QR Scan Failure
- Mobile Device Issue
- Technical Issue
- Medical Emergency

Every manual attendance entry is:

- Teacher Approved
- Time Stamped
- Audited
- Stored Permanently

---

# 🔐 Authentication & Security

- JWT Authentication
- Role-Based Access Control (RBAC)
- Password Encryption (BCrypt)
- AI Face Verification
- Dynamic QR Authentication
- Secure REST APIs
- Audit Logs
- Session Validation
- Duplicate Attendance Prevention

---

# 🤖 AI Module

- Student Face Registration
- Face Detection
- Face Verification
- Duplicate Face Prevention
- Attendance Verification

---

# 📡 IoT Module

Hardware

- ESP32
- Barcode Scanner
- Student ID Cards

Functions

- Campus Entry Verification
- Barcode Reading
- Student Identification
- Entry Log Creation

---

# 📊 Reports

- Daily Attendance
- Subject-wise Attendance
- Student-wise Attendance
- Section-wise Attendance
- Teacher-wise Attendance
- Department Reports
- Semester Reports
- Monthly Reports
- Manual Attendance Reports
- Attendance Analytics

---

# 🔔 Notification Center

Students

- Attendance Session
- Attendance Confirmation
- Attendance Deadline
- Academic Announcements
- Department Notices

Teachers

- Student Messages
- Leave Requests
- Attendance Alerts

Admins

- Department Updates
- User Notifications
- System Alerts

---

# 💻 Technology Stack

## Frontend

### Web

- React.js
- TypeScript
- Tailwind CSS
- Redux Toolkit

### Mobile

- React Native
- Expo
- TypeScript
- NativeWind

---

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- Maven

---

## Database

- PostgreSQL

---

## AI Service

- Python
- FastAPI
- OpenCV
- InsightFace
- ONNX Runtime

---

## IoT

- ESP32
- Barcode Scanner

---

## Notifications

- Firebase Cloud Messaging (FCM)

---

## Deployment

- Docker
- AWS
- NGINX
- GitHub Actions

---

# 🏗️ System Architecture

```text
                 Smart Attendance Management System

        ┌───────────────────────────────────────────────┐
        │          React Web Application                │
        │ (Admin • Teacher • Student • Super Admin)     │
        └───────────────────────────────────────────────┘
                           │
                           │ REST APIs
                           ▼
                 Spring Boot Backend
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 PostgreSQL         AI Face Service      IoT Service
  Database         (Python/FastAPI)      (ESP32)
```

---

# 📂 Repository Structure

```
smart-attendance-management-system/

│

├── backend/
│
├── frontend-web/
│
├── frontend-mobile/
│
├── ai-service/
│
├── iot/
│
├── database/
│
├── docs/
│
└── README.md
```

---

# 🌟 Future Enhancements

- Parent Portal
- Multi-Campus Support
- Biometric Device Integration
- RFID/NFC Support
- AI Attendance Prediction
- ERP Integration
- LMS Integration
- Cloud Deployment
- SMS & Email Notifications
- Advanced Analytics Dashboard

---

# 📈 Project Status

🚧 Under Development

This project is being developed as an enterprise-level capstone project with a focus on modern software engineering, AI, IoT, cloud deployment, and scalable architecture.

---
