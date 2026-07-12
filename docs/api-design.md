# REST API Documentation - Version 1

## Base URL

```http
/api/v1
```

This document describes the REST API architecture, available modules, endpoints, and main application flows.

---

# Modules Overview

| Module | Main Entities | Responsibility |
| --- | --- | --- |
| **Auth** | User | Registration, login, authentication, and authorization |
| **Users** | User | User profile management |
| **Books** | Book, Author, Genre | Global book catalog and Open Library integration |
| **Library** | UserBook | Personal user library management |
| **Progress** | ProgressEntry | Reading progress history |
| **Tags** | Tag | Custom book organization |
| **Goals** | Goal | Reading objectives management |
| **Statistics** | - | Reading analytics and dashboards |

---

# 1. Authentication Module

Handles user authentication and authorization.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/refresh` | Generate a new access token *(optional for MVP)* |
| POST | `/auth/logout` | Logout user |
| GET | `/auth/me` | Get authenticated user |

---

# 2. Users Module

Manages user profile information.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/users/me` | Get current user profile |
| PATCH | `/users/me` | Update user profile |

---

# 3. Books Module

Manages the global book catalog and Open Library integration.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/books` | Search books by title, author, or ISBN |
| GET | `/books/{bookId}` | Get book details |

## Search Parameters

| Parameter | Description |
| --- | --- |
| `q` | Search text |
| `page` | Page number |
| `limit` | Number of results |

### Example

```http
GET /books?q=harry&page=1&limit=20
```

---

# 4. Library Module

Manages the user's personal book collection.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/library` | Get user's library |
| POST | `/library` | Add a book to the library |
| GET | `/library/{userBookId}` | Get book details from the library |
| PATCH | `/library/{userBookId}` | Update personal book information |
| DELETE | `/library/{userBookId}` | Remove a book from the library |

## Available Filters

| Parameter | Description |
| --- | --- |
| `status` | Reading status |
| `favorite` | Filter favorite books |
| `tag` | Filter by tag |
| `author` | Filter by author |
| `genre` | Filter by genre |
| `format` | Filter by format |
| `language` | Filter by language |
| `search` | Search by title |
| `sort` | Sort results |

### Example

```http
GET /library?status=READING&favorite=true
```

---

# 5. Progress Module

Stores reading progress history.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/library/{userBookId}/progress` | Get progress history |
| POST | `/library/{userBookId}/progress` | Create progress entry |
| DELETE | `/library/{userBookId}/progress/{progressId}` | Delete progress entry |

---

# 6. Tags Module

Handles custom tags.

## Tag Management

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/tags` | Get user tags |
| POST | `/tags` | Create tag |
| PATCH | `/tags/{tagId}` | Update tag |
| DELETE | `/tags/{tagId}` | Delete tag |

## Book Tag Association

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/library/{userBookId}/tags` | Assign tag to a book |
| DELETE | `/library/{userBookId}/tags/{tagId}` | Remove tag from a book |

---

# 7. Goals Module

Manages reading goals.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/goals` | Get all goals |
| POST | `/goals` | Create goal |
| GET | `/goals/{goalId}` | Get goal details |
| PATCH | `/goals/{goalId}` | Update goal |
| DELETE | `/goals/{goalId}` | Delete goal |

---

# 8. Statistics Module

Provides reading analytics and dashboard information.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/statistics/dashboard` | Main dashboard |
| GET | `/statistics/monthly` | Monthly statistics |
| GET | `/statistics/yearly` | Yearly statistics |
| GET | `/statistics/genres` | Statistics by genre |
| GET | `/statistics/authors` | Statistics by author |
| GET | `/statistics/formats` | Statistics by format |
| GET | `/statistics/languages` | Statistics by language |
| GET | `/statistics/reading-speed` | Reading speed statistics |
| GET | `/statistics/streaks` | Reading streaks |
| GET | `/statistics/heatmap` | Annual reading heatmap |

---

# Main System Flows

## 1. Book Search Flow

```text
User
 │
 ▼
GET /books
 │
 ▼
BooksService
 │
 ├── Search books in PostgreSQL
 │
 └── If book does not exist
          │
          ▼
    Open Library Provider
          │
          ▼
    Save book information
          │
          ▼
    Return results
```

---

## 2. Add Book to Library Flow

```text
User
 │
 ▼
POST /library
 │
 ▼
Create UserBook
```

---

## 3. Register Reading Progress Flow

```text
User
 │
 ▼
POST /library/{userBookId}/progress
 │
 ├── Create ProgressEntry
 ├── Update currentPage
 ├── Update status (if applicable)
 └── Update finishedAt (if applicable)
```

---

## 4. Statistics Flow

```text
Frontend
 │
 ▼
GET /statistics/dashboard
 │
 ▼
StatisticsService
 │
 ├── Library data
 ├── Progress data
 ├── Goals data
 └── Books data
 │
 ▼
Dashboard DTO Response
```

---

# MVP Scope Considerations

To keep the MVP realistic, the following endpoints can be moved to **Version 2**:

- `GET /statistics/authors`
- `GET /statistics/formats`
- `GET /statistics/languages`
- `GET /statistics/reading-speed`

The MVP still delivers value through:

- Main dashboard
- Monthly and yearly reading statistics
- Reading streak tracking
- Annual reading heatmap
- Personal library management

Future versions can expand analytics capabilities as the project evolves.