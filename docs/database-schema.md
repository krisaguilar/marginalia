## Overview

The database design follows the same domain separation used in the application architecture.

The system has two main concepts:

1. **Global Book Catalog**
    - Shared information about books.
    - Retrieved from external providers such as Open Library.
    - Independent from user activity.
2. **Personal Reading Experience**
    - Private user information.
    - Reading progress.
    - Goals.
    - Favorites.
    - Personal organization.

The database separates these responsibilities to avoid mixing global book data with user-specific information.

---

# Entity Relationship Overview

```
User
 │
 ├──< UserBook >──── Book
 │          │            │
 │          │            ├──< BookAuthor >── Author
 │          │            │
 │          │            └──< BookGenre >── Genre
 │          │
 │          ├──< ProgressEntry
 │          │
 │          └──< UserBookTag >── Tag
 │
 └──< Goal
```

---

# Entities

# User

Represents a registered user in the application.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `email` | User email address |
| `passwordHash` | Encrypted password |
| `displayName` | Public username |
| `createdAt` | Account creation timestamp |
| `updatedAt` | Last update timestamp |

## Relationships

```
User

1:N UserBook

1:N Goal

1:N Tag
```

---

# Book

Represents a book from the global catalog. Users **do not create books manually**.

Books are retrieved from Open Library and stored locally when they are first required by the application.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Internal identifier |
| `openLibraryId` | External Open Library identifier |
| `isbn13` | ISBN-13 identifier (optional) |
| `title` | Book title |
| `description` | Book description (optional) |
| `coverUrl` | Cover image URL (optional) |
| `pageCount` | Number of pages (optional) |
| `publishedDate` | Publication date (optional) |
| `language` | Book language (optional) |
| `createdAt` | Creation timestamp |

## Relationships

```
Book

N:M Author

N:M Genre

1:N UserBook
```

## Design Note

There is no single `author` or `genre` field.

A book may have:

- Multiple authors
- Multiple genres

Therefore, many-to-many relationships are used.

---

# Author

Represents an author from the global catalog.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `name` | Author name |

## Relationships

```
Author

N:M Book
```

---

# Genre

Represents a book category or genre.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `name` | Genre name |

## Relationships

```
Genre

N:M Book
```

---

# UserBook

Represents the relationship between a user and a book.

This entity contains all personal information related to a user's interaction with a book.

Examples:

- Reading status
- Progress
- Favorite state
- Personal rating

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `status` | Current reading status |
| `currentPage` | Current reading position |
| `startedAt` | Date reading started (optional) |
| `finishedAt` | Date reading finished (optional) |
| `personalRating` | User rating (optional) |
| `isFavorite` | Favorite flag |
| `createdAt` | Creation timestamp |
| `updatedAt` | Last update timestamp |

## Relationships

```
UserBook

N:1 User

N:1 Book

1:N ProgressEntry

N:M Tag
```

---

# ProgressEntry

Represents a single reading progress update.

Each entry records a point in the user's reading history.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `pageNumber` | Page reached |
| `recordedAt` | Date of progress update |

## Relationships

```
ProgressEntry

N:1 UserBook
```

## Importance

This is one of the most important entities in the system.

With progress history, the application can generate:

- Reading heatmaps
- Reading streaks
- Pages per day
- Reading speed
- Timeline charts
- Monthly dashboards
- Yearly dashboards

without storing pre-calculated statistics.

---

# Goal

Represents a user's reading objective.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `startDate` | Goal start date |
| `endDate` | Goal end date |
| `goalType` | Goal category (`BOOKS` for MVP, expandable later) |
| `targetValue` | Target amount |
| `createdAt` | Creation timestamp |

## Relationships

```
Goal

N:1 User
```

---

# Tag

Represents a custom label created by a user.

Tags allow users to organize their personal library.

## Attributes

| Field | Description |
| --- | --- |
| `id` | Unique identifier |
| `name` | Tag name |

## Relationships

```
Tag

N:1 User

N:M UserBook
```

## Design Note

Tags belong to users.

Two different users can create a tag with the same name:

```
User A

Tag:
"Favorites"

User B

Tag:
"Favorites"
```

These are different entities because each user owns their own organization system.

---

# Relationship Details

## User and Library

```
User

1 ───────── N

UserBook
```

A user can have many books in their personal library.

---

## Book and Library

```
Book

1 ───────── N

UserBook
```

A book can belong to many different users.

Example:

```
User A
 └── Dune

User B
 └── Dune
```

The book information is shared, but the reading experience is personal.

---

## Book Authors

```
Book

N ───────── M

Author
```

A book can have multiple authors.

An author can write multiple books.

---

## Book Genres

```
Book

N ───────── M

Genre
```

A book can belong to multiple genres.

---

## Reading Progress

```
UserBook

1 ───────── N

ProgressEntry
```

Each book in a user's library can have multiple progress records.

---

## User Tags

```
UserBook

N ───────── M

Tag
```

Users can organize their books with multiple custom tags.

---

# Final Database Design Principles

This schema follows these principles:

## Separation of Concerns

Global book data is separated from personal user data.

```
Book

≠

UserBook
```

A book describes the catalog item.

A UserBook describes a user's relationship with that book.

---

## No Precomputed Statistics

Statistics are generated dynamically from:

```
UserBook

+

ProgressEntry

+

Goal
```

This avoids duplicated data and keeps analytics flexible.

---

## Extensible Design

The schema is prepared for future features:

- Multiple goal types
- More reading metrics
- Additional book providers
- Advanced analytics
- Social features
- Recommendations

The database structure supports growth without major redesign.