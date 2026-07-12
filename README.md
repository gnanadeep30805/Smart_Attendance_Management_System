# Smart Attendance Management System

An enterprise-grade **AI and IoT-powered attendance management system** that automates student attendance using **barcode-based campus entry**, **AI face recognition**, and **dynamic QR code verification**. The system provides secure, accurate, and real-time attendance management for educational institutions through dedicated web and mobile applications.

---

## Features

### Student

* Barcode-based campus entry
* AI face recognition attendance
* Dynamic QR code attendance verification
* Real-time attendance notifications
* Semester attendance dashboard
* Subject-wise attendance register
* Daily attendance history
* Leave request management
* Profile management

### Teacher

* Create attendance sessions
* Generate dynamic QR codes
* Live attendance monitoring
* Compare campus entry and classroom attendance
* Manual attendance override
* Attendance reports and analytics

### Department Admin

* Manage students
* Manage teachers
* Manage subjects and sections
* Manage timetables
* Generate department reports
* User credential management

### Super Admin

* Manage departments
* Create department admins
* Manage IoT devices
* Institution-wide analytics
* System configuration
* Audit logs

---

## Attendance Workflow

```text
College Entry
      │
Barcode Scan
      │
Campus Entry Recorded
      │
Teacher Starts Session
      │
Dynamic QR Generated
      │
Session Notification
      │
Open Mobile App
      │
AI Face Recognition
      │
Dynamic QR Scan
      │
Attendance Verified
      │
Present
```

---

## Tech Stack

### Frontend (Web)

* React.js
* TypeScript
* Tailwind CSS
* Redux Toolkit

### Mobile

* React Native
* Expo
* TypeScript

### Backend

* Java 21
* Spring Boot 3
* Spring Security
* Spring Data JPA
* Hibernate

### Database

* PostgreSQL

### AI Service

* Python
* FastAPI
* OpenCV
* InsightFace
* ONNX Runtime

### IoT

* ESP32
* Barcode Scanner

### Notifications

* Firebase Cloud Messaging (FCM)

### Deployment

* Docker
* GitHub Actions
* AWS
* NGINX

---

## System Architecture

```text
React Web (Admin & Teacher)
            │
            │
React Native (Student App)
            │
            ▼
      Spring Boot REST API
            │
    ┌───────┴────────┐
    ▼                ▼
PostgreSQL      AI Service
                  │
                  ▼
          Face Recognition

            │
            ▼
      ESP32 Barcode Scanner
```

---

## Project Structure

```text
smart-attendance-management-system/

├── frontend-web/
├── frontend-mobile/
├── backend/
├── ai-service/
├── iot/
├── docs/
└── README.md
```

---

## Future Enhancements

* Multi-campus support
* Parent portal
* Student analytics dashboard
* Attendance prediction using AI
* ERP integration
* Cloud deployment
* SMS and Email notifications
* Offline attendance synchronization

---

## Project Status

🚧 Currently under development as a Capstone Project.

---

## License

This project is developed for educational and research purposes.
