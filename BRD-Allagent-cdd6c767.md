# Project Requirements

# Updated Business Requirements Document (BRD) for Retail Inventory Management System (RIMS)

## Overview
The Retail Inventory Management System (RIMS) is designed to streamline inventory management, user authentication, sales trend analysis, and automated restocking alerts. The system will provide secure, role-based access to users and ensure efficient handling of inventory-related operations. Additionally, the system will comply with all relevant regulatory and compliance standards to ensure data security, privacy, and auditability.

---

## Database Schema Design

### **1. Database Overview**
The database schema is designed to support the following functionalities:
1. User authentication and role-based access control.
2. Inventory management, including CRUD operations for inventory items.
3. Automated restocking alerts based on stock thresholds.
4. Sales trend analysis for inventory recommendations.

The schema is normalized to avoid redundancy and ensure data integrity. Below is the detailed schema design.

---

### **2. Tables and Relationships**

#### **2.1 Users Table**
- **Purpose**: Stores user information for authentication and role-based access.
- **Fields**:
  - `id` (Primary Key, UUID): Unique identifier for each user.
  - `username` (VARCHAR, 50): User's name.
  - `email` (VARCHAR, 100, UNIQUE): User's email address.
  - `password` (VARCHAR, 255): Hashed password.
  - `role` (ENUM: `admin`, `manager`, `staff`): User's role in the system.
  - `created_at` (TIMESTAMP): Timestamp of user creation.
  - `updated_at` (TIMESTAMP): Timestamp of last update.

#### **2.2 Inventory Table**
- **Purpose**: Stores information about inventory items.
- **Fields**:
  - `id` (Primary Key, UUID): Unique identifier for each inventory item.
  - `name` (VARCHAR, 100): Name of the inventory item.
  - `category` (VARCHAR, 50): Category of the item.
  - `stock` (INTEGER): Current stock level.
  - `location` (VARCHAR, 100): Warehouse location of the item.
  - `threshold` (INTEGER): Minimum stock level for restocking alerts.
  - `created_at` (TIMESTAMP): Timestamp of item creation.
  - `updated_at` (TIMESTAMP): Timestamp of last update.

#### **2.3 Sales Table**
- **Purpose**: Tracks sales data for trend analysis.
- **Fields**:
  - `id` (Primary Key, UUID): Unique identifier for each sale.
  - `item_id` (Foreign Key, UUID): References `id` in the `Inventory` table.
  - `quantity` (INTEGER): Quantity of the item sold.
  - `sale_date` (DATE): Date of the sale.
  - `created_at` (TIMESTAMP): Timestamp of sale record creation.

#### **2.4 Alerts Table**
- **Purpose**: Stores restocking alerts for inventory items.
- **Fields**:
  - `id` (Primary Key, UUID): Unique identifier for each alert.
  - `item_id` (Foreign Key, UUID): References `id` in the `Inventory` table.
  - `current_stock` (INTEGER): Current stock level at the time of the alert.
  - `threshold` (INTEGER): Stock threshold for the alert.
  - `alert_date` (TIMESTAMP): Timestamp of the alert.

---

### **3. Relationships**
1. **Users and Roles**: Each user has a role (`admin`, `manager`, or `staff`).
2. **Inventory and Sales**: Each sale is linked to an inventory item via the `item_id` foreign key.
3. **Inventory and Alerts**: Each alert is linked to an inventory item via the `item_id` foreign key.

---

### **4. Indexes and Constraints**
- **Primary Keys**:
  - `id` in all tables.
- **Foreign Keys**:
  - `item_id` in `Sales` references `id` in `Inventory`.
  - `item_id` in `Alerts` references `id` in `Inventory`.
- **Unique Constraints**:
  - `email` in `Users` to ensure no duplicate registrations.
- **Indexes**:
  - Index on `email` in `Users` for faster login queries.
  - Index on `category` and `location` in `Inventory` for efficient filtering.
  - Index on `sale_date` in `Sales` for trend analysis queries.

---

### **5. Triggers**
- **Restocking Alert Trigger**:
  - **Trigger Name**: `check_stock_threshold`
  - **Event**: AFTER UPDATE on `Inventory.stock`
  - **Condition**: If `stock` < `threshold`.
  - **Action**: Insert a new record into the `Alerts` table.

---

### **6. Entity-Relationship Diagram (ERD)**

Below is the visual representation of the database schema:

```
+------------------+       +------------------+       +------------------+       +------------------+
|     Users        |       |    Inventory     |       |      Sales       |       |     Alerts       |
+------------------+       +------------------+       +------------------+       +------------------+
| id (PK)          |       | id (PK)          |       | id (PK)          |       | id (PK)          |
| username         |       | name             |       | item_id (FK)     |       | item_id (FK)     |
| email (UNIQUE)   |       | category         |       | quantity         |       | current_stock    |
| password         |       | stock            |       | sale_date        |       | threshold        |
| role             |       | location         |       | created_at       |       | alert_date       |
| created_at       |       | threshold        |       +------------------+       +------------------+
| updated_at       |       | created_at       |
+------------------+       | updated_at       |
                           +------------------+
```

---

## Security and Compliance

### **Applicable Compliance Standards**
Based on the business requirements, the following compliance standards are applicable:
1. **General Data Protection Regulation (GDPR)**: Applicable due to the storage of user data (e.g., email, username).
2. **Payment Card Industry Data Security Standard (PCI-DSS)**: Applicable if the system integrates with payment processing for sales.
3. **Health Insurance Portability and Accountability Act (HIPAA)**: Not applicable unless the system handles health-related data.

### **Compliance Requirements and Implementation**

#### **1. GDPR**
- **Requirements**:
  - Data minimization: Only collect and store necessary user data.
  - User consent: Obtain explicit consent for data collection.
  - Right to access and delete: Allow users to access and delete their data.
  - Data encryption: Encrypt sensitive data (e.g., passwords, emails).
- **Implementation**:
  - Use hashed passwords (e.g., bcrypt).
  - Implement a user consent mechanism during registration.
  - Provide an API endpoint for users to request data deletion.
  - Encrypt sensitive data in transit (TLS) and at rest.

#### **2. PCI-DSS**
- **Requirements**:
  - Secure storage of payment data.
  - Regular vulnerability scans and penetration testing.
  - Role-based access control to limit access to payment data.
- **Implementation**:
  - Use a third-party payment processor to avoid storing payment data directly.
  - Enforce RBAC to restrict access to payment-related operations.
  - Conduct regular security audits.

---

### **Security Measures**
1. **Data Encryption**:
   - Passwords are hashed using bcrypt.
   - All data in transit is encrypted using TLS.
2. **Access Control**:
   - Role-based access control (RBAC) is enforced.
3. **Audit Controls**:
   - Maintain logs of all user actions (e.g., login, data updates).
   - Logs are stored securely and are tamper-proof.
4. **Rate Limiting**:
   - API rate limits are enforced to prevent abuse.

---

### **Validation of Compliance**
1. **During Implementation**:
   - Conduct code reviews to ensure compliance with GDPR and PCI-DSS.
   - Perform penetration testing to identify vulnerabilities.
   - Validate encryption mechanisms for data at rest and in transit.
2. **Post-Implementation**:
   - Conduct regular audits to ensure ongoing compliance.
   - Monitor logs for suspicious activities.
   - Update policies and mechanisms as regulations evolve.

---

### **Scalability Considerations**
- **Partitioning**:
  - Large tables like `Sales` can be partitioned by `sale_date` for better performance.
- **Caching**:
  - Frequently accessed data (e.g., inventory items) can be cached.
- **Replication**:
  - Database replication can be used for high availability.

---

This updated schema and compliance framework ensure that the Retail Inventory Management System (RIMS) meets both functional and regulatory requirements. Let me know if you need further refinements or additional details!