# System Architecture

## Overview

The application has **two main domains**:

1. **Book Catalog**  
   A global and shared collection of books.

2. **User Reading Experience**  
   A personal and private space where users manage their reading activity.

---

# High-Level Architecture

```text
                        ┌──────────────────────────┐
                        │      React Frontend      │
                        └─────────────┬────────────┘
                                      │
                                REST API (JWT)
                                      │
                        ┌─────────────▼────────────┐
                        │       NestJS Backend     │
                        └─────────────┬────────────┘
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │
          ▼                           ▼                           ▼
   Authentication               Book Catalog               User Library
          │                           │                           │
          ▼                           ▼                           ▼
     PostgreSQL                 Open Library API            PostgreSQL
                                      │
                                      ▼
                           Catalog Persistence
```

## External Integrations

Open Library is **not the application's database**.

It is only an external provider used to retrieve book information.

The flow is:

```text
Open Library API

        ↓

External DTO

        ↓

Internal DTO

        ↓

Book Entity

        ↓

PostgreSQL
```

---

# Backend Architecture (NestJS)

The backend follows a **domain-based architecture**.

Each module owns its own business logic and responsibilities.

```text
src/
│
├── auth/
│
├── users/
│
├── books/
│   ├── controllers/
│   ├── services/
│   ├── providers/
│   ├── repositories/
│   ├── dto/
│   ├── entities/
│   └── books.module.ts
│
├── library/
│
├── progress/
│
├── goals/
│
├── statistics/
│
├── tags/
│
├── common/
│
└── config/
```

---

# Database Design

The database follows the same domain separation.

```text
                 User
                   │
        ┌──────────┴──────────┐
        │                     │
      Goal                  UserBook
                                │
                    ┌───────────┼────────────┐
                    │           │            │
             ProgressEntry   UserBookTag   Book
                                             │
                    ┌────────────────────────┴─────────────┐
                    │                                      │
                 BookAuthor                           BookGenre
                    │                                      │
                 Author                                Genre
```

---

# Final Architecture Decision

The project uses:

- Domain-driven module organization
- Layer separation inside modules
- Repository pattern
- Provider abstraction for external APIs
- Service-based business logic

This approach provides:

- Good maintainability
- Clear separation of responsibilities
- Realistic production-style architecture
- Enough complexity to demonstrate good engineering practices without unnecessary overengineering