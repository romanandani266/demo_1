# Project Requirements

# Business Requirements Document (BRD)

## Project Name: Retail Inventory Management System (RIMS)

---

### 1. **Introduction**
The Retail Inventory Management System (RIMS) is a web-based application designed to streamline inventory tracking, restocking, and sales trend analysis for retail businesses. The system will provide real-time inventory updates, notifications for low stock, and sales trend insights to improve operational efficiency and decision-making. By leveraging modern technologies, RIMS aims to enhance operational efficiency, reduce waste, and improve decision-making for all stakeholders.

---

### 2. **Objectives**
- **Inventory Management**: Enable businesses to track stock levels, update inventory, and manage restocking thresholds.
- **Notifications**: Provide timely alerts for low stock and other critical updates.
- **Sales Trend Analysis**: Offer insights into sales trends to support data-driven decisions.
- **User Management**: Facilitate secure user authentication, role-based access, and user registration.
- **System Monitoring**: Ensure system health and uptime through monitoring endpoints.
- **Data Flow Validation**: Ensure proper handling, routing, and transformation of data between system components.
- **User Experience (UX)**: Ensure a seamless, intuitive, and accessible user journey across all system interfaces.

---

### 3. **Stakeholders**
- **Retail Partners**: Manage inventory and receive notifications.
- **Warehouse Managers**: Oversee stock levels and restocking.
- **Supply Chain Teams**: Analyze sales trends and optimize supply chain operations.
- **Data Compliance Officers**: Ensure adherence to data privacy and security standards.
- **End Users**: Interact with the system for inventory management, notifications, and analytics.

---

### 4. **Scope**
#### **In-Scope**
- Development of a web-based inventory tracking system.
- Implementation of real-time inventory tracking functionality.
- Automated notifications for restocking alerts.
- Sales trend analysis for better forecasting.
- Role-based access control and encrypted data storage for security.

#### **Out of Scope**
- Advanced AI-driven forecasting capabilities.
- Development of a mobile application.

---

### 5. **Key Features/Functionalities**
1. **User Authentication and Authorization**:
   - Secure login/logout functionality.
   - Role-based access control.
   - User registration with role assignment.

2. **Inventory Management**:
   - Add, update, delete, and retrieve inventory items.
   - Set restocking thresholds for items.
   - Paginated inventory list retrieval.

3. **Notifications**:
   - Generate and retrieve notifications for low stock and other events.
   - Mark notifications as read.

4. **Sales Trend Analysis**:
   - Retrieve sales trends for specified date ranges.

5. **System Monitoring**:
   - Health check endpoint to monitor system status.

6. **Data Flow Validation**:
   - Map and validate data flows between system components.
   - Ensure data integrity, reliability, and security during data transformations and routing.

7. **User Experience (UX)**:
   - Ensure intuitive navigation, responsive design, and accessibility compliance.
   - Provide clear feedback loops for user actions (e.g., success/failure messages).
   - Optimize workflows for different user personas.

---

### 6. **Expected Benefits**
- **Reduced Stock Shortages and Overstocking**: Ensures optimal stock levels to meet demand without overstocking.
- **Improved Supply Chain Efficiency**: Streamlines inventory management processes and reduces waste.
- **Better Sales Forecasting**: Enhances decision-making with data-driven insights.

---

### 7. **Primary Deliverables**
- A fully functional web-based inventory tracking system.
- Automated stock alert notifications integrated into the system.
- Wireframes and prototypes validated against user personas and workflows.
- Accessibility audit ensuring compliance with WCAG 2.1 standards.
- UX testing reports documenting usability findings and stakeholder feedback.

---

### 8. **Preferred Platform and Technology Stack**
- **Platform**: Web-based application.
- **Programming Language**: Python (Flask for backend), React (for frontend).
- **Database**: PostgreSQL.
- **Deployment**: AWS Cloud hosting.
- **Monitoring**: Tools for system health and performance monitoring.
- **Authentication**: JWT-based authentication.

---

### 9. **Security Requirements**
- **Role-Based Access Control (RBAC)**: Ensures that users have access only to the features and data relevant to their roles.
- **Encrypted Data Storage**: Protects sensitive data from unauthorized access.
- **Multi-Factor Authentication (MFA)**: Adds an additional layer of security for all users.
- **Compliance**: Adherence to GDPR, CCPA, and other relevant data privacy standards.

---

### 10. **User Interface Requirements**
- A minimalistic dashboard with easy navigation.
- Intuitive design to ensure a seamless user experience.
- Responsive design for compatibility across devices (desktop, tablet, mobile).
- Clear feedback loops for user actions (e.g., success/failure messages).

---

### 11. **Known Constraints**
- **Budget Limitations**: Advanced analytics features are not feasible within the current budget.
- **Internet Dependency**: Real-time tracking requires a stable internet connection.

---

### 12. **Competitors/References**
- **Coca-Cola’s Retail Inventory Solutions**: Known for their efficient inventory management tools.
- **Unilever’s Supply Chain Tools**: Provide insights into supply chain optimization.

---

### 13. **Assumptions**
- All stakeholders will have access to the internet to use the system.
- The system will be hosted on AWS Cloud, ensuring scalability and reliability.
- The project will adhere to the defined budget and timeline.

---

### 14. **Database Schema**
The database schema is designed to support the functional requirements of the system while ensuring data integrity and avoiding redundancy.

#### **Tables and Relationships**
1. **Users Table**:
   - Fields: `id`, `name`, `email`, `password`, `role`, `created_at`.
   - Unique index on `email`.

2. **Inventory Table**:
   - Fields: `id`, `name`, `stock`, `threshold`, `last_updated`.
   - Index on `name`.

3. **Notifications Table**:
   - Fields: `id`, `message`, `is_read`, `created_at`.
   - Index on `is_read`.

4. **Sales Table**:
   - Fields: `id`, `item_id`, `date`, `sales`.
   - Composite index on `item_id` and `date`.

#### **Constraints**
- Primary Keys: Ensure unique identification of records.
- Foreign Keys: Maintain referential integrity between related tables.
- Unique Constraints: Prevent duplicate entries (e.g., unique email in `Users` table).

#### **Triggers**
- **Inventory Update Trigger**: Automatically update the `last_updated` field in the `Inventory` table whenever a record is modified.

---

### 15. **Entity-Relationship Diagram (ERD)**
```
+------------------+       +------------------+       +------------------+       +------------------+
|     Users        |       |    Inventory     |       |  Notifications   |       |      Sales       |
+------------------+       +------------------+       +------------------+       +------------------+
| id (PK)          |       | id (PK)          |       | id (PK)          |       | id (PK)          |
| name             |       | name             |       | message          |       | item_id (FK)     |
| email (Unique)   |       | stock            |       | is_read          |       | date             |
| password         |       | threshold        |       | created_at       |       | sales            |
| role             |       | last_updated     |       +------------------+       +------------------+
| created_at       |       +------------------+
+------------------+
```

---

### 16. **Data Flow Diagrams (DFDs)**
#### **Level 0 DFD**
- **Data Sources**: User inputs, inventory updates, sales data.
- **Processes**: Authentication, inventory management, notification generation, sales trend analysis.
- **Data Stores**: Users table, Inventory table, Notifications table, Sales table.
- **Destinations**: User interfaces, notification systems, analytics dashboards.

#### **Level 1 DFD**
- **Authentication**:
  - Input: User credentials.
  - Process: Validate credentials, generate JWT token.
  - Output: Access token for authenticated users.
- **Inventory Management**:
  - Input: Inventory updates, restocking thresholds.
  - Process: Update inventory records, trigger notifications if thresholds are breached.
  - Output: Updated inventory data, notifications.
- **Sales Trend Analysis**:
  - Input: Sales data for a specified date range.
  - Process: Aggregate and analyze sales data.
  - Output: Sales trend insights.

---

### 17. **Process Flow Validation**
#### **Key Process Flows**
1. **User Authentication**:
   - User submits credentials.
   - System validates credentials and generates a JWT token.
   - User gains access to authorized features based on their role.

2. **Inventory Management**:
   - User adds or updates inventory items.
   - System checks stock levels against thresholds.
   - Notifications are generated for low stock.

3. **Sales Trend Analysis**:
   - User requests sales data for a specific date range.
   - System aggregates and analyzes data.
   - Insights are presented to the user.

#### **Identified Bottlenecks and Resolutions**
- **Bottleneck**: High volume of inventory updates causing delays.
  - **Resolution**: Implement batch processing and asynchronous updates.
- **Bottleneck**: Notification overload for users.
  - **Resolution**: Introduce notification grouping and prioritization.

---

### 18. **Conclusion**
The Retail Inventory Management System (RIMS) will address critical challenges in inventory management by providing real-time tracking, automated alerts, and sales trend analysis. By leveraging modern technologies and adhering to best practices, the system will enhance operational efficiency, reduce waste, and improve decision-making for all stakeholders. This document serves as a comprehensive guide for the development and implementation of RIMS.