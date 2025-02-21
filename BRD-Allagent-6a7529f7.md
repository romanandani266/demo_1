# Project Requirements

# Business Requirements Document (BRD)

## Project Name: Retail Inventory Management System

### 1. Introduction
The Retail Inventory Management System project aims to develop a simple and efficient system for tracking product stock levels, predicting restocking needs, and minimizing waste. This system is designed to enhance the inventory management processes for retail partners, the PepsiCo supply chain team, and warehouse managers.

### 2. Business Objectives
- Develop a web-based inventory management system that provides real-time tracking of product stock levels.
- Implement automated restocking alerts to ensure optimal stock levels.
- Analyze sales trends to improve sales forecasting and minimize waste.

### 3. Scope
#### In Scope:
- Development of a web-based inventory tracking system.
- Implementation of automated stock alert notifications.
- Integration of sales trend analysis features.

#### Out of Scope:
- Advanced AI-driven forecasting capabilities.
- Development of a mobile application.

### 4. Requirements

#### Functional Requirements:
- **Real-time Inventory Tracking**: The system must provide up-to-date information on stock levels for all products.
- **Automated Restocking Alerts**: Notifications should be sent automatically when stock levels fall below a predefined threshold.
- **Sales Trend Analysis**: The system should analyze historical sales data to identify trends and assist in forecasting.

#### Non-Functional Requirements:
- **Performance**: The system should handle up to 10,000 concurrent users with minimal latency.
- **Scalability**: The architecture should support future expansion to accommodate additional features and increased user load.
- **Security**: Implement role-based access control and ensure all data is encrypted both in transit and at rest.
- **Integration**: The system should seamlessly integrate with existing ERP systems used by retail partners and the PepsiCo supply chain team.

#### Technical Requirements:
- **Preferred Platform**: Web-based application.
- **Programming Language**: Python (Flask for backend), React (for frontend).
- **Database**: PostgreSQL.
- **Security**: Role-based access control, encrypted data storage.
- **Deployment Preferences**: AWS Cloud hosting.

#### User Interface Requirements:
- **Minimalistic Dashboard**: The interface should be intuitive with easy navigation, providing quick access to key functionalities.

#### Known Constraints:
- **Budget Limitations**: Advanced analytics features are limited due to budget constraints.
- **Internet Dependency**: Real-time tracking requires a stable internet connection.

### 5. Expected Benefits
- Reduction in stock shortages and overstocking.
- Improved efficiency in the supply chain.
- Enhanced sales forecasting capabilities.

### 6. Primary Deliverables
- A web-based inventory tracking system.
- Automated stock alert notifications.

### 7. Target Audience
- Retail partners.
- PepsiCo supply chain team.
- Warehouse managers.

### 8. Stakeholders
- Retail partners.
- PepsiCo supply chain team.
- Warehouse managers.

### 9. Assumptions
- The system will be primarily used by retail partners, the PepsiCo supply chain team, and warehouse managers.
- Internet connectivity is available for real-time tracking.
- Budget constraints will limit the scope to essential features.

### 10. Competitors/References
- Coca-Cola’s retail inventory solutions.
- Unilever’s supply chain tools.

### 11. Conclusion
The Retail Inventory Management System is designed to streamline inventory processes, reduce waste, and improve forecasting for retail partners and the PepsiCo supply chain team. By focusing on essential features and leveraging web-based technologies, the project aims to deliver a cost-effective and efficient solution.

### 12. API Endpoints

#### 12.1 Authentication and Authorization
- **POST /api/auth/login**
  - **Purpose**: Authenticate users and provide a token for session management.
  - **Inputs**: JSON object with `username` and `password`.
  - **Outputs**: JSON object with `token` and `user_role`.
  - **Errors**: 401 Unauthorized if credentials are invalid.
  - **Rate Limits**: 5 requests per minute per IP.
  - **Response Time**: <200ms.

- **POST /api/auth/logout**
  - **Purpose**: Invalidate the current session token.
  - **Inputs**: Header with `Authorization` token.
  - **Outputs**: JSON object with a success message.
  - **Errors**: 401 Unauthorized if token is invalid or expired.
  - **Rate Limits**: 10 requests per minute per IP.
  - **Response Time**: <100ms.

#### 12.2 Inventory Management
- **GET /api/inventory**
  - **Purpose**: Retrieve current stock levels for all products.
  - **Inputs**: Optional query parameters for filtering (e.g., `product_id`, `category`).
  - **Outputs**: JSON array of products with stock levels.
  - **Errors**: 500 Internal Server Error for database issues.
  - **Rate Limits**: 60 requests per minute per user.
  - **Response Time**: <300ms.

- **PUT /api/inventory/{product_id}**
  - **Purpose**: Update stock levels for a specific product.
  - **Inputs**: JSON object with `stock_level`.
  - **Outputs**: JSON object with updated product details.
  - **Errors**: 404 Not Found if product does not exist, 400 Bad Request for invalid input.
  - **Rate Limits**: 30 requests per minute per user.
  - **Response Time**: <200ms.

#### 12.3 Restocking Alerts
- **GET /api/alerts**
  - **Purpose**: Retrieve all active restocking alerts.
  - **Inputs**: None.
  - **Outputs**: JSON array of alerts.
  - **Errors**: 500 Internal Server Error for database issues.
  - **Rate Limits**: 30 requests per minute per user.
  - **Response Time**: <200ms.

- **POST /api/alerts**
  - **Purpose**: Create a new restocking alert.
  - **Inputs**: JSON object with `product_id` and `threshold`.
  - **Outputs**: JSON object with alert details.
  - **Errors**: 400 Bad Request for invalid input, 409 Conflict if alert already exists.
  - **Rate Limits**: 20 requests per minute per user.
  - **Response Time**: <200ms.

#### 12.4 Sales Trend Analysis
- **GET /api/sales/trends**
  - **Purpose**: Retrieve sales trends for analysis.
  - **Inputs**: Optional query parameters for date range and product filters.
  - **Outputs**: JSON object with sales trend data.
  - **Errors**: 500 Internal Server Error for database issues.
  - **Rate Limits**: 30 requests per minute per user.
  - **Response Time**: <400ms.

### 13. Security and Compliance

#### Applicable Compliance Standards
- **GDPR (General Data Protection Regulation)**: As the system may handle personal data of users, GDPR compliance is necessary.
- **PCI-DSS (Payment Card Industry Data Security Standard)**: If the system processes any payment information, PCI-DSS compliance is required.

#### Compliance Requirements and Implementation

**GDPR Compliance:**
- **Data Minimization**: Only collect data necessary for the system's functionality.
- **User Consent**: Obtain explicit consent from users before collecting personal data.
- **Right to Access and Erasure**: Implement features allowing users to access their data and request deletion.
- **Data Protection by Design**: Incorporate data protection measures from the outset of system design.
- **How Compliance is Met**: Implement user consent forms, data access and deletion features, and ensure data encryption.

**PCI-DSS Compliance:**
- **Secure Network**: Use firewalls and encryption to protect cardholder data.
- **Access Control**: Restrict access to cardholder data to authorized personnel only.
- **Regular Monitoring and Testing**: Conduct regular security audits and vulnerability assessments.
- **How Compliance is Met**: Implement network security measures, role-based access control, and schedule regular security audits.

#### Security Measures
- **Role-Based Access Control**: Ensure users can only access resources they are authorized to.
- **Data Encryption**: Encrypt data both in transit and at rest.
- **Regular Security Audits**: Conduct regular audits to identify and mitigate security vulnerabilities.

#### Data Privacy Rules
- **User Consent**: Obtain explicit consent for data collection and processing.
- **Data Access and Deletion**: Provide users with the ability to access and delete their data.
- **Data Anonymization**: Anonymize personal data where possible to enhance privacy.

#### Audit Controls
- **Logging and Monitoring**: Implement logging of user activities and system events.
- **Regular Audits**: Schedule regular audits to ensure compliance with security and privacy standards.

### 14. Database Schema

#### Tables and Relationships

1. **Users**
   - **Fields**: 
     - `user_id` (Primary Key, Integer, Auto-increment)
     - `username` (Varchar, Unique)
     - `password_hash` (Varchar)
     - `role` (Varchar)
   - **Indexes**: 
     - `username` (Unique)

2. **Products**
   - **Fields**: 
     - `product_id` (Primary Key, Integer, Auto-increment)
     - `product_name` (Varchar)
     - `category` (Varchar)
     - `price` (Decimal)
   - **Indexes**: 
     - `product_name`

3. **Inventory**
   - **Fields**: 
     - `inventory_id` (Primary Key, Integer, Auto-increment)
     - `product_id` (Foreign Key, Integer, References Products(product_id))
     - `stock_level` (Integer)
     - `last_updated` (Timestamp)
   - **Indexes**: 
     - `product_id`

4. **Alerts**
   - **Fields**: 
     - `alert_id` (Primary Key, Integer, Auto-increment)
     - `product_id` (Foreign Key, Integer, References Products(product_id))
     - `threshold` (Integer)
     - `is_active` (Boolean)
   - **Indexes**: 
     - `product_id`

5. **Sales**
   - **Fields**: 
     - `sale_id` (Primary Key, Integer, Auto-increment)
     - `product_id` (Foreign Key, Integer, References Products(product_id))
     - `quantity_sold` (Integer)
     - `sale_date` (Date)
   - **Indexes**: 
     - `product_id`, `sale_date`

#### Constraints and Triggers
- **Constraints**:
  - Foreign key constraints to ensure referential integrity between tables.
  - Unique constraints on `username` in the Users table.
- **Triggers**:
  - Trigger to update `last_updated` in Inventory table whenever `stock_level` is updated.

#### Entity-Relationship Diagram (ERD)

```plaintext
+----------------+     +----------------+     +----------------+     +----------------+     +----------------+
|     Users      |     |    Products    |     |    Inventory   |     |     Alerts     |     |     Sales      |
+----------------+     +----------------+     +----------------+     +----------------+     +----------------+
| user_id (PK)   |     | product_id (PK)|     | inventory_id (PK)|   | alert_id (PK)  |     | sale_id (PK)   |
| username (U)   |     | product_name   |     | product_id (FK) |     | product_id (FK)|     | product_id (FK)|
| password_hash  |     | category       |     | stock_level     |     | threshold      |     | quantity_sold  |
| role           |     | price          |     | last_updated    |     | is_active      |     | sale_date      |
+----------------+     +----------------+     +----------------+     +----------------+     +----------------+
```

### 15. Conclusion
The database schema is designed to support the core functionalities of the Retail Inventory Management System, ensuring data integrity and efficient data retrieval. The schema is normalized to avoid redundancy and includes necessary constraints and triggers to maintain data consistency.

### 16. Compliance Validation
- **During Implementation**: Conduct regular reviews and testing to ensure compliance with GDPR and PCI-DSS standards. Implement automated testing for data privacy and security features.
- **Post-Implementation**: Schedule regular audits and assessments to ensure ongoing compliance. Update policies and procedures as necessary to reflect changes in regulations or business processes.