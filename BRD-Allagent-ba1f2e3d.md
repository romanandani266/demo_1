# Project Requirements

### Updated Business Requirements Document (BRD) with Database Schema

---

### 14. **Database Schema**

The database schema for the Retail Inventory Management System (RIMS) is designed to support the business logic and technical requirements outlined in the BRD. The schema is normalized to avoid redundancy and ensure data integrity. Below is the detailed schema, including tables, relationships, field types, constraints, and indexes.

---

#### **Tables and Relationships**

1. **Users Table**
   - **Purpose**: Stores user information and role-based access control.
   - **Fields**:
     - `user_id` (Primary Key, UUID): Unique identifier for each user.
     - `name` (VARCHAR(100)): Full name of the user.
     - `email` (VARCHAR(150), UNIQUE): Email address of the user.
     - `password_hash` (TEXT): Encrypted password.
     - `role` (ENUM: 'retail_partner', 'supply_chain_team', 'warehouse_manager'): Role of the user.
     - `created_at` (TIMESTAMP): Timestamp of user creation.
     - `updated_at` (TIMESTAMP): Timestamp of last update.
   - **Indexes**:
     - Unique index on `email` for quick lookups.
   - **Relationships**:
     - One-to-Many with `notifications` (a user can receive multiple notifications).

2. **Inventory Table**
   - **Purpose**: Stores inventory item details.
   - **Fields**:
     - `inventory_id` (Primary Key, UUID): Unique identifier for each inventory item.
     - `name` (VARCHAR(100)): Name of the inventory item.
     - `category` (VARCHAR(50)): Category of the item (e.g., beverages, snacks).
     - `quantity` (INTEGER): Current stock level.
     - `location` (VARCHAR(100)): Location of the inventory item.
     - `supplier` (VARCHAR(100)): Supplier of the inventory item.
     - `threshold` (INTEGER): Minimum stock level before triggering a notification.
     - `created_at` (TIMESTAMP): Timestamp of item creation.
     - `updated_at` (TIMESTAMP): Timestamp of last update.
   - **Indexes**:
     - Index on `category` and `location` for filtering.
   - **Relationships**:
     - None directly, but referenced in notifications.

3. **Notifications Table**
   - **Purpose**: Stores notifications for stock alerts and other events.
   - **Fields**:
     - `notification_id` (Primary Key, UUID): Unique identifier for each notification.
     - `user_id` (Foreign Key): References `user_id` in the `users` table.
     - `inventory_id` (Foreign Key): References `inventory_id` in the `inventory` table.
     - `type` (ENUM: 'low_stock', 'restock_needed'): Type of notification.
     - `message` (TEXT): Notification message.
     - `status` (ENUM: 'unread', 'read'): Status of the notification.
     - `created_at` (TIMESTAMP): Timestamp of notification creation.
   - **Indexes**:
     - Index on `user_id` for quick retrieval of user-specific notifications.
   - **Relationships**:
     - Many-to-One with `users` (a user can have multiple notifications).
     - Many-to-One with `inventory` (a notification is linked to an inventory item).

4. **Audit Logs Table**
   - **Purpose**: Tracks changes to inventory and user actions for auditing purposes.
   - **Fields**:
     - `log_id` (Primary Key, UUID): Unique identifier for each log entry.
     - `user_id` (Foreign Key): References `user_id` in the `users` table.
     - `action` (ENUM: 'add', 'update', 'delete', 'login', 'logout'): Type of action performed.
     - `details` (TEXT): Additional details about the action.
     - `timestamp` (TIMESTAMP): Timestamp of the action.
   - **Indexes**:
     - Index on `user_id` and `timestamp` for filtering logs by user and time.
   - **Relationships**:
     - Many-to-One with `users` (a user can have multiple log entries).

---

#### **Entity-Relationship Diagram (ERD)**

Below is the visual representation of the database schema:

```
+------------------+       +------------------+       +------------------+       +------------------+
|     Users        |       |    Inventory     |       |  Notifications   |       |   Audit Logs     |
+------------------+       +------------------+       +------------------+       +------------------+
| user_id (PK)     |       | inventory_id (PK)|       | notification_id (PK)|     | log_id (PK)      |
| name             |       | name            |       | user_id (FK)     |       | user_id (FK)     |
| email (UNIQUE)   |       | category        |       | inventory_id (FK)|       | action           |
| password_hash    |       | quantity        |       | type            |       | details          |
| role             |       | location        |       | message         |       | timestamp        |
| created_at       |       | supplier        |       | status          |       +------------------+
| updated_at       |       | threshold       |       | created_at      |
+------------------+       | created_at      |       +------------------+
                           | updated_at      |
                           +------------------+
```

---

#### **Triggers**

1. **Low Stock Notification Trigger**
   - **Purpose**: Automatically create a notification when the stock level of an inventory item falls below the threshold.
   - **Trigger Logic**:
     - On `UPDATE` of the `quantity` field in the `inventory` table:
       - If `quantity < threshold`, insert a new record into the `notifications` table with `type = 'low_stock'`.

2. **Audit Log Trigger**
   - **Purpose**: Log all changes to the `inventory` table for auditing purposes.
   - **Trigger Logic**:
     - On `INSERT`, `UPDATE`, or `DELETE` in the `inventory` table:
       - Insert a new record into the `audit_logs` table with details of the action.

---

#### **Indexes**

- **Users Table**:
  - Unique index on `email` for quick user lookups.
- **Inventory Table**:
  - Index on `category` and `location` for efficient filtering.
- **Notifications Table**:
  - Index on `user_id` for quick retrieval of user-specific notifications.
- **Audit Logs Table**:
  - Index on `user_id` and `timestamp` for filtering logs by user and time.

---

#### **Constraints**

- **Primary Keys**:
  - `user_id` in `users`.
  - `inventory_id` in `inventory`.
  - `notification_id` in `notifications`.
  - `log_id` in `audit_logs`.
- **Foreign Keys**:
  - `user_id` in `notifications` references `user_id` in `users`.
  - `inventory_id` in `notifications` references `inventory_id` in `inventory`.
  - `user_id` in `audit_logs` references `user_id` in `users`.
- **Unique Constraints**:
  - `email` in `users` must be unique.

---

This schema ensures data integrity, supports the application's functionality, and aligns with the business and technical requirements outlined in the BRD.