# System Requirements

## Overview

This document defines the functional and non-functional requirements of the application.

The requirements are divided into:

- **Functional Requirements (FR)**  
  Define what the system must do.

- **Non-Functional Requirements (NFR)**  
  Define quality attributes, technical constraints, and operational expectations.

---

# Functional Requirements

Functional requirements describe the features and behaviors available to users.

---

# Authentication

## User Account Management

| ID | Requirement |
| --- | --- |
| RF-001 | The system shall allow users to register using email and password. |
| RF-002 | The system shall allow users to authenticate using JWT. |
| RF-003 | The system shall allow users to log out. |
| RF-004 | The system shall allow users to update their password. |

---

# Library Management

The system shall allow users to manage their personal book library.

| ID | Requirement |
| --- | --- |
| RF-005 | Users shall be able to add books to their library. |
| RF-006 | Users shall be able to edit registered books. |
| RF-007 | Users shall be able to remove books from their library. |
| RF-008 | Users shall be able to view their complete library. |
| RF-009 | Users shall be able to assign a reading status to each book. |
| RF-010 | Users shall be able to create custom reading statuses. |

---

# Reading Progress

The system shall track and maintain reading activity.

| ID | Requirement |
| --- | --- |
| RF-011 | Users shall be able to register reading progress using pages read. |
| RF-012 | The system shall store the date of each progress update. |
| RF-013 | The system shall automatically calculate completion percentage. |
| RF-014 | The system shall automatically mark a book as completed when total pages are reached. |
| RF-015 | The system shall maintain reading progress history. |

---

# Tags

The system shall provide custom organization features.

| ID | Requirement |
| --- | --- |
| RF-016 | Users shall be able to create custom tags. |
| RF-017 | Users shall be able to assign multiple tags to a book. |
| RF-018 | Users shall be able to remove tags. |

---

# Reading Goals

The system shall support personal reading objectives.

| ID | Requirement |
| --- | --- |
| RF-019 | Users shall be able to define yearly reading goals. |
| RF-020 | The system shall calculate progress toward the goal. |
| RF-021 | The system shall display goal completion projections. |

---

# Statistics and Analytics

The system shall provide reading insights.

| ID | Requirement |
| --- | --- |
| RF-022 | The system shall display completed books count. |
| RF-023 | The system shall display total pages read. |
| RF-024 | The system shall display average pages read per day. |
| RF-025 | The system shall display average books completed per month. |
| RF-026 | The system shall display reading distribution by genre. |
| RF-027 | The system shall display active reading days. |
| RF-028 | The system shall generate an annual reading heatmap. |
| RF-029 | The system shall display reading streaks. |

---

# Search and Filtering

The system shall provide tools to find and organize books.

| ID | Requirement |
| --- | --- |
| RF-030 | Users shall be able to search books by title. |
| RF-031 | Users shall be able to filter books by reading status. |
| RF-032 | Users shall be able to filter books by tag. |
| RF-033 | Users shall be able to filter books by genre. |

---

# User Profile

The system shall provide user profile information.

| ID | Requirement |
| --- | --- |
| RF-034 | Users shall be able to view their profile. |
| RF-035 | The system shall display summarized user statistics. |

---

# Non-Functional Requirements

Non-functional requirements define system quality attributes and technical constraints.

---

# Security

| ID | Requirement |
| --- | --- |
| RNF-001 | Passwords shall be stored using secure hashing algorithms (Argon2 recommended). |
| RNF-002 | Protected API endpoints shall use JWT authentication. |
| RNF-003 | Backend input validation shall be implemented. |
| RNF-004 | The system shall protect against common attacks such as XSS, CSRF when applicable, and injection attacks. |
| RNF-005 | Sensitive endpoints shall implement rate limiting. |

---

# Performance

| ID | Requirement |
| --- | --- |
| RNF-006 | Standard queries should have an average response time below 300 ms. |
| RNF-007 | Dashboards should be generated in less than 2 seconds. |

---

# Scalability

| ID | Requirement |
| --- | --- |
| RNF-008 | Frontend and backend shall maintain a decoupled architecture. |
| RNF-009 | Backend services shall be organized by domain. |
| RNF-010 | The application shall support containerization using Docker. |

---

# Availability

| ID | Requirement |
| --- | --- |
| RNF-011 | The application shall automatically recover after container restarts. |
| RNF-012 | Health check endpoints shall be available. |

---

# Usability

| ID | Requirement |
| --- | --- |
| RNF-013 | The interface shall be responsive. |
| RNF-014 | Navigation shall remain consistent across the application. |
| RNF-015 | Main actions should be accessible within a maximum of three clicks. |

---

# Accessibility

| ID | Requirement |
| --- | --- |
| RNF-016 | The application should partially comply with WCAG 2.1 AA guidelines. |
| RNF-017 | The interface should support keyboard navigation. |
| RNF-018 | The interface should provide adequate color contrast. |

---

# Compatibility

| ID | Requirement |
| --- | --- |
| RNF-019 | The application shall support modern versions of Chrome, Firefox, Edge, and Safari. |

---

# Maintainability

| ID | Requirement |
| --- | --- |
| RNF-020 | The project should maintain a minimum test coverage of 70%. |
| RNF-021 | ESLint and Prettier shall be mandatory development tools. |
| RNF-022 | The architecture shall follow a modular domain-based structure. |

---

# API Standards

| ID | Requirement |
| --- | --- |
| RNF-023 | The API shall provide automatic Swagger documentation. |
| RNF-024 | The API shall support versioning. |
| RNF-025 | API responses shall follow standardized formats. |

---

# Logging and Monitoring

| ID | Requirement |
| --- | --- |
| RNF-026 | The system shall implement structured error logging. |
| RNF-027 | The system shall maintain basic authentication audit logs. |

---

# Requirement Summary

## Functional Areas

| Area | Requirements |
| --- | --- |
| Authentication | RF-001 to RF-004 |
| Library Management | RF-005 to RF-010 |
| Reading Progress | RF-011 to RF-015 |
| Tags | RF-016 to RF-018 |
| Goals | RF-019 to RF-021 |
| Statistics | RF-022 to RF-029 |
| Search & Filters | RF-030 to RF-033 |
| Profile | RF-034 to RF-035 |

---

## Non-Functional Areas

| Area | Requirements |
| --- | --- |
| Security | RNF-001 to RNF-005 |
| Performance | RNF-006 to RNF-007 |
| Scalability | RNF-008 to RNF-010 |
| Availability | RNF-011 to RNF-012 |
| Usability | RNF-013 to RNF-015 |
| Accessibility | RNF-016 to RNF-018 |
| Compatibility | RNF-019 |
| Maintainability | RNF-020 to RNF-022 |
| API Standards | RNF-023 to RNF-025 |
| Logging | RNF-026 to RNF-027 |