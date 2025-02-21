# Project Requirements

# Business Requirements Document (BRD)

## Project Name: Retail Inventory Management System

---

### 1. Introduction

The Retail Inventory Management System project aims to develop a simple and efficient system for tracking product stock levels, predicting restocking needs, and minimizing waste. This system is designed to enhance the inventory management processes for retail partners, the PepsiCo supply chain team, and warehouse managers.

### 2. Business Objectives

- **Objective 1:** Develop a system that provides real-time inventory tracking to ensure accurate stock levels.
- **Objective 2:** Implement automated restocking alerts to prevent stock shortages and overstocking.
- **Objective 3:** Analyze sales trends to improve sales forecasting and supply chain efficiency.

### 3. Scope

#### In-Scope
- Development of a web-based inventory tracking system.
- Implementation of automated stock alert notifications.
- Integration of sales trend analysis features.

#### Out of Scope
- Advanced AI-driven forecasting capabilities.
- Development of a mobile application.

### 4. Requirements

#### 4.1 Functional Requirements
- **Real-time Inventory Tracking:** The system must provide up-to-date information on stock levels, allowing users to view current inventory status at any time.
- **Automated Restocking Alerts:** The system should automatically notify users when stock levels fall below predefined thresholds, prompting restocking actions.
- **Sales Trend Analysis:** The system should analyze historical sales data to identify trends and provide insights for better inventory management.

#### 4.2 Non-Functional Requirements
- **Platform:** The system will be a web-based application accessible via standard web browsers.
- **Programming Language:** The application will be developed using Python for backend logic, Flask for web framework, PostgreSQL for database management, and React for frontend development.
- **Database:** PostgreSQL will be used to store inventory data, sales records, and user information.
- **Security:** Implement role-based access control to ensure that only authorized users can access specific features. Data should be stored using encryption to protect sensitive information.
- **User Interface:** The system should feature a minimalistic dashboard with intuitive navigation, allowing users to easily access key functionalities.
- **Performance:** The system should handle concurrent users efficiently and provide quick response times for data retrieval and processing.
- **Scalability:** The architecture should support future growth, allowing for additional features and increased data volume without significant performance degradation.

#### 4.3 Compliance Requirements

To ensure the system complies with relevant regulatory and compliance standards, the following regulations have been identified as applicable:

- **General Data Protection Regulation (GDPR):**
  - **Compliance Requirements:**
    - Data Minimization: Only collect data necessary for inventory management.
    - Consent: Obtain user consent for data collection and processing.
    - Right to Access: Allow users to access their data upon request.
    - Data Breach Notification: Implement procedures to notify users of data breaches within 72 hours.
  - **System Measures:**
    - Implement data encryption and anonymization techniques.
    - Provide a user interface for consent management and data access requests.
    - Establish a data breach response plan.

- **Payment Card Industry Data Security Standard (PCI-DSS):**
  - **Compliance Requirements:**
    - Secure Storage: Encrypt cardholder data and sensitive authentication data.
    - Access Control: Restrict access to cardholder data to authorized personnel only.
    - Regular Audits: Conduct regular security audits and vulnerability assessments.
  - **System Measures:**
    - Use encryption for any payment-related data.
    - Implement strict access controls and logging for payment data access.
    - Schedule regular security audits and vulnerability scans.

#### 4.4 Validation of Compliance

- **During Implementation:**
  - Conduct a compliance assessment to ensure all system components meet regulatory requirements.
  - Perform security testing, including penetration testing and vulnerability assessments.
  - Review data handling processes to ensure they align with GDPR and PCI-DSS standards.

- **Post-Implementation:**
  - Schedule regular compliance audits to verify ongoing adherence to regulations.
  - Monitor system logs and access controls to detect and respond to potential compliance violations.
  - Update compliance documentation and procedures as regulations evolve.

### 5. Expected Benefits

- Reduction in stock shortages and overstocking.
- Improved efficiency in the supply chain.
- Enhanced accuracy in sales forecasting.

### 6. Primary Deliverables

- A web-based inventory tracking system.
- Automated stock alert notifications.

### 7. Deployment Preferences

- AWS Cloud hosting for deployment to ensure scalability, reliability, and security.

### 8. Target Audience

- Retail partners.
- PepsiCo supply chain team.
- Warehouse managers.

### 9. Stakeholders

- Retail partners.
- PepsiCo supply chain team.
- Warehouse managers.
- IT development team.

### 10. Assumptions

- The system will be primarily used by retail partners and warehouse managers.
- Internet connectivity is available for real-time tracking.
- Budget constraints will limit the scope of advanced analytics features.

### 11. Competitors/References

- Coca-Cola’s retail inventory solutions.
- Unilever’s supply chain tools.

### 12. Conclusion

The Retail Inventory Management System is designed to streamline inventory processes, reduce waste, and enhance supply chain efficiency. By focusing on real-time tracking, automated alerts, and sales trend analysis, the system aims to provide significant benefits to its target audience while staying within the defined scope and constraints.

---

## Database Schema

### Entity-Relationship Diagram (ERD)

![ERD](https://via.placeholder.com/500x300.png?text=ERD+Placeholder)

### Tables and Relationships

1. **Users**
   - **user_id** (Primary Key, UUID)
   - **username** (VARCHAR, Unique)
   - **password_hash** (VARCHAR)
   - **role** (VARCHAR) - e.g., admin, manager, staff
   - **created_at** (TIMESTAMP)
   - **updated_at** (TIMESTAMP)

2. **Products**
   - **product_id** (Primary Key, UUID)
   - **product_name** (VARCHAR)
   - **quantity** (INTEGER)
   - **threshold** (INTEGER)
   - **created_at** (TIMESTAMP)
   - **updated_at** (TIMESTAMP)

3. **Inventory**
   - **inventory_id** (Primary Key, UUID)
   - **product_id** (Foreign Key, UUID, References Products(product_id))
   - **quantity** (INTEGER)
   - **last_updated** (TIMESTAMP)

4. **Sales**
   - **sale_id** (Primary Key, UUID)
   - **product_id** (Foreign Key, UUID, References Products(product_id))
   - **quantity_sold** (INTEGER)
   - **sale_date** (DATE)

5. **Alerts**
   - **alert_id** (Primary Key, UUID)
   - **product_id** (Foreign Key, UUID, References Products(product_id))
   - **alert_type** (VARCHAR) - e.g., restock
   - **created_at** (TIMESTAMP)
   - **resolved** (BOOLEAN)

### Indexes and Constraints

- **Indexes:**
  - Index on `username` in Users for quick authentication.
  - Index on `product_name` in Products for fast search.
  - Index on `sale_date` in Sales for trend analysis.

- **Constraints:**
  - Foreign key constraints to ensure referential integrity between tables.
  - Unique constraint on `username` in Users to prevent duplicates.

### Triggers

- **Inventory Update Trigger:**
  - Trigger to automatically create an alert when a product's quantity falls below its threshold.

- **Sales Insert Trigger:**
  - Trigger to update inventory levels when a sale is recorded.

This schema is designed to support the application's functionality while ensuring data integrity and performance. The use of UUIDs for primary keys ensures uniqueness across distributed systems, and the triggers help automate critical business processes.