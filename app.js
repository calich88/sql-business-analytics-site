const outcomes = {
  knowledge: [
    {
      code: "CLO1",
      text: "Explain fundamental concepts of databases, including data models, database design, and principles of data integrity.",
    },
    {
      code: "CLO2",
      text: "Describe and differentiate SQL query types, data preprocessing stages, and their applications in business contexts.",
    },
    {
      code: "CLO3",
      text: "Evaluate key tools, techniques, and methods such as SQL, Python, and ETL processes for managing and analyzing business data.",
    },
  ],
  skills: [
    {
      code: "CLO4",
      text: "Design, create, and manage relational databases to support organizational data requirements.",
    },
    {
      code: "CLO5",
      text: "Extract, transform, and analyze business data using SQL and Python to generate meaningful insights.",
    },
    {
      code: "CLO6",
      text: "Apply data-driven thinking and analytical skills to support and improve business decision-making.",
    },
  ],
  responsibility: [
    {
      code: "CLO7",
      text: "Demonstrate ethical responsibility and continuous learning in business data management, integrating professional practices and awareness of privacy and legal issues.",
    },
  ],
};

const topics = [
  {
    number: "Topic 1",
    title: "The Database Environment and Data-Analytic Thinking",
    items: ["Data-analytics thinking", "SQL and databases", "Database approaches", "Basic SQL statements"],
  },
  {
    number: "Topic 2",
    title: "Database Analysis and Logical Design",
    items: ["E-R model", "Relational databases and tables", "Entities, attributes, relationships", "Basic SQL"],
  },
  {
    number: "Topic 3",
    title: "Database Implementation and Use",
    items: ["Intermediate SQL", "String patterns and ranges", "Multiple-table queries"],
  },
  {
    number: "Topic 4",
    title: "Data Driven Decision Making",
    items: ["Decision support", "Data science and engineering", "Decision-making framework", "Python and database"],
  },
  {
    number: "Topic 5",
    title: "Data Warehousing and Data Integration",
    items: ["Warehouse concepts", "Architectures and security", "ETL processes", "Basic joins"],
  },
  {
    number: "Topic 6",
    title: "Advanced SQL and Business Reporting",
    items: ["Advanced joins", "Preparing data for analysis", "Complex data types", "Exporting data with SQL"],
  },
  {
    number: "Topic 7",
    title: "Advanced Database Topics",
    items: ["Beyond transactional databases", "Big data", "Cloud database computing", "Window functions and CTEs"],
  },
  {
    number: "Topic 8",
    title: "Business Data Analytics and Its Implications",
    items: ["Data mining concepts", "Data mining methods", "Impact of big data", "Retail database case study"],
  },
  {
    number: "Topic 9",
    title: "Legality, Privacy, and Ethics in Data Analytics",
    items: ["Data quality", "Analytics in organizations", "Legal and privacy issues", "Marketing database case study"],
  },
  {
    number: "Topic 10",
    title: "Revision and Presentation",
    items: ["Topics 1-9 revision", "Question and answer", "Student presentation"],
  },
];

const assessments = [
  {
    name: "Quizzes",
    detail: "8 quizzes with MCQs and short-answer questions.",
    weight: "50%",
    clo: "CLO1-CLO3",
  },
  {
    name: "Assignments",
    detail: "5 individual written/code reports.",
    weight: "50%",
    clo: "CLO4-CLO7",
  },
  {
    name: "Project",
    detail: "Presentation, report, and source code.",
    weight: "34%",
    clo: "CLO3-CLO7",
  },
  {
    name: "Final Exam",
    detail: "Computer-based practical exam with 6 questions in 90 minutes.",
    weight: "66%",
    clo: "CLO3-CLO6",
  },
];

const practiceMapping = [
  {
    week: "Week 1",
    theory: "Database environment, SQL, DBMS tools, data-analytic thinking.",
    practice: "Packt Ch. 1 selected: PostgreSQL setup, sqlda import, table inspection.",
    output: "Students can connect to PostgreSQL, open the sqlda database, and describe core tables.",
  },
  {
    week: "Week 2",
    theory: "E-R model, relational tables, keys, attributes, relationships.",
    practice: "Packt Ch. 1-2 selected: relational structure, table creation, constraints.",
    output: "Students can draw a simple ERD and create a small normalized business table.",
  },
  {
    week: "Week 3",
    theory: "Intermediate SQL, filtering, pattern matching, ranges, multi-table access.",
    practice: "Packt Ch. 5 + Ch. 7 selected: SELECT, WHERE, LIKE, joins, simple subqueries.",
    output: "Students can answer customer and sales questions with clean SELECT queries.",
  },
  {
    week: "Week 4",
    theory: "Decision support, Python and database, KPI thinking.",
    practice: "Packt Ch. 4 + Ch. 8 selected: SQLAlchemy, pandas, aggregate functions.",
    output: "Students can calculate KPIs in SQL and load results into Python for reporting.",
  },
  {
    week: "Week 5",
    theory: "ETL, data warehouse concepts, integration, basic joins.",
    practice: "Packt Ch. 3 selected + Ch. 7 selected: import/export workflow and joins.",
    output: "Students can import data, join business entities, and explain an ETL pipeline.",
  },
  {
    week: "Week 6",
    theory: "Advanced joins, business reporting, preparing data for analysis.",
    practice: "Packt Ch. 7 + Ch. 8 + Ch. 12 selected: joins, GROUP BY, HAVING, date/text cleanup.",
    output: "Students can prepare a report-ready dataset with filters, metrics, and cleaned fields.",
  },
  {
    week: "Week 7",
    theory: "CTEs, window functions, cloud/big data concepts.",
    practice: "Packt Ch. 7 selected + Ch. 9 selected. Ch. 10 is reading/demo only.",
    output: "Students can build readable CTEs and use ranking or moving-average window functions.",
  },
  {
    week: "Week 8",
    theory: "Business analytics implications, retail case, simple analytical reasoning.",
    practice: "Packt Ch. 8 + Ch. 9 selected + Ch. 13 light + Ch. 14 selected.",
    output: "Students can produce a short data-backed business insight from sales behavior.",
  },
  {
    week: "Week 9",
    theory: "Data quality, legality, privacy, ethics, marketing case discussion.",
    practice: "Packt Ch. 12 date/text examples as support. Ch. 11 is optional reading only.",
    output: "Students can identify risky data fields and propose responsible data handling rules.",
  },
  {
    week: "Week 10",
    theory: "Revision, Q&A, project presentation.",
    practice: "Packt Ch. 14 selected: case workflow from raw data to analytics output.",
    output: "Students present problem, data preparation, SQL analysis, Python output, and recommendation.",
  },
];

const weeklyPractices = [
  {
    week: "Week 1",
    topic: "Database Environment and Data-Analytic Thinking",
    practices: [
      {
        title: "Explore the sqlda Business Database",
        objective: "Recognize the database as a collection of business entities and inspect the first sample records safely.",
        source: "Packt Ch. 1 selected practice",
        pageRef: "Chapter 1, pp. 14-26; Exercise 1.4 p. 23",
        tables: ["customers", "products", "sales", "dealerships"],
        diagram: [
          "customers.customer_id -> sales.customer_id",
          "products.product_id -> sales.product_id",
          "dealerships.dealership_id -> sales.dealership_id",
        ],
        questions: [
          "List the first 10 rows from customers and products.",
          "Identify one primary business question that each table can help answer.",
          "Count how many records exist in customers, products, and sales.",
        ],
        hint: "Start with SELECT * FROM table_name LIMIT 10, then use COUNT(*) for table size.",
        output: "A short table inventory: table_name, business_entity, row_count, possible_business_question.",
      },
    ],
  },
  {
    week: "Week 2",
    topic: "Database Analysis and Logical Design",
    practices: [
      {
        title: "Draw a Sales ERD from Existing Tables",
        objective: "Translate business nouns into entities, keys, and relationships before writing SQL.",
        source: "Packt Ch. 1-2 selected practice",
        pageRef: "Chapter 1, pp. 9-13; Chapter 2, pp. 28-47",
        tables: ["customers", "sales", "products", "salespeople", "dealerships"],
        diagram: [
          "customers 1..n sales",
          "products 1..n sales",
          "salespeople 1..n sales",
          "dealerships 1..n sales",
        ],
        questions: [
          "Which columns should behave as entity identifiers?",
          "Which table stores business events rather than master data?",
          "Create a simple ERD and mark one-to-many relationships.",
        ],
        hint: "Master data describes things; transaction data records events.",
        output: "ERD sketch plus a data dictionary with entity, key, and relationship notes.",
      },
      {
        title: "Create a Small Campaign Table",
        objective: "Practice table design with clear column types and constraints for a marketing use case.",
        source: "Packt Ch. 2 selected practice",
        pageRef: "Chapter 2, pp. 38-47; Exercises 2.1-2.3 pp. 41-46",
        tables: ["campaigns"],
        diagram: ["campaigns.campaign_id -> future marketing analysis table"],
        questions: [
          "Create a campaigns table with campaign_id, channel, start_date, end_date, and budget.",
          "Insert at least five campaign records.",
          "Write one query to find campaigns with budget greater than a threshold.",
        ],
        hint: "Use an integer key, text columns for labels, date columns for time, and numeric for budget.",
        output: "A campaigns table and a filtered result showing high-budget campaigns.",
      },
    ],
  },
  {
    week: "Week 3",
    topic: "Database Implementation and Use",
    practices: [
      {
        title: "Filter Customers for Business Segmentation",
        objective: "Use SELECT, aliases, ORDER BY, DISTINCT, WHERE, IN, and NULL checks to prepare customer segments.",
        source: "Packt Ch. 5 selected practice",
        pageRef: "Chapter 5, pp. 84-102; Exercise 5.1 p. 98",
        tables: ["customers"],
        diagram: ["customers contains customer profile fields used for segmentation"],
        questions: [
          "Return customer names, email, city, state, and date_added.",
          "Find customers with missing phone or email values.",
          "List distinct customer states and sort them alphabetically.",
        ],
        hint: "Combine IS NULL, DISTINCT, ORDER BY, and readable column aliases.",
        output: "A customer-quality checklist with missing_contact_flag and state list.",
      },
      {
        title: "Join Sales to Products",
        objective: "Connect transaction records to product attributes for business analysis.",
        source: "Packt Ch. 7 selected practice",
        pageRef: "Chapter 7, pp. 129-139; Exercise 7.2 p. 138",
        tables: ["sales", "products"],
        diagram: ["products.product_id -> sales.product_id"],
        questions: [
          "Join sales with products and show sale date, product name, product type, and sales amount.",
          "Filter sales above a chosen amount.",
          "Sort by sales amount descending.",
        ],
        hint: "Start from sales, then INNER JOIN products on product_id.",
        output: "A ranked transaction table with product names instead of product IDs.",
      },
    ],
  },
  {
    week: "Week 4",
    topic: "Data Driven Decision Making",
    practices: [
      {
        title: "Build KPI Queries for Management",
        objective: "Calculate business KPIs with aggregate functions before loading results into Python.",
        source: "Packt Ch. 8 selected practice",
        pageRef: "Chapter 8, pp. 145-163; Exercises 8.1-8.3 pp. 150-162",
        tables: ["sales", "products"],
        diagram: ["products.product_id -> sales.product_id"],
        questions: [
          "Calculate total sales amount by product type.",
          "Calculate average transaction value by product type.",
          "Show only product types with total sales above a management threshold.",
        ],
        hint: "Use SUM, AVG, GROUP BY, and HAVING. Keep output column names business-readable.",
        output: "product_type, total_sales, average_transaction_value, transaction_count.",
      },
      {
        title: "Read SQL Output in Python",
        objective: "Connect PostgreSQL to Python and turn a SQL result into a pandas DataFrame.",
        source: "Packt Ch. 4 selected practice",
        pageRef: "Chapter 4, pp. 65-80; Exercise 4.2 p. 76",
        tables: ["sales", "customers"],
        diagram: ["PostgreSQL sqlda -> SQLAlchemy engine -> pandas DataFrame"],
        questions: [
          "Create a database connection string for local PostgreSQL.",
          "Read a KPI query into pandas.",
          "Display the first five rows and export the result to CSV.",
        ],
        hint: "Use SQLAlchemy for the engine and pandas read_sql_query for the query result.",
        output: "A pandas DataFrame and a CSV file containing one KPI table.",
      },
    ],
  },
  {
    week: "Week 5",
    topic: "Data Warehousing and Data Integration",
    practices: [
      {
        title: "Import and Validate a Sales Extract",
        objective: "Practice a small ETL workflow: import data, check row count, and validate basic fields.",
        source: "Packt Ch. 3 selected practice",
        pageRef: "Chapter 3, pp. 49-63; Exercise 3.1 p. 58",
        tables: ["staging_sales_extract", "sales"],
        diagram: ["CSV or text extract -> staging_sales_extract -> validation query"],
        questions: [
          "Create a staging table for a simple sales extract.",
          "Import or insert sample rows.",
          "Check row count, missing IDs, and invalid negative sales amounts.",
        ],
        hint: "Keep raw data in staging first; do quality checks before merging into analysis tables.",
        output: "A validation report with total_rows, missing_key_rows, invalid_amount_rows.",
      },
      {
        title: "Combine Customer, Product, and Sales Context",
        objective: "Create an integrated view for business users.",
        source: "Packt Ch. 7 selected practice",
        pageRef: "Chapter 7, pp. 129-143; Exercises 7.1-7.3 pp. 128-141",
        tables: ["customers", "sales", "products"],
        diagram: [
          "customers.customer_id -> sales.customer_id",
          "products.product_id -> sales.product_id",
        ],
        questions: [
          "Join customers, sales, and products into one query.",
          "Return customer location, product name, product type, sale date, and amount.",
          "Explain why this output is more useful than one table alone.",
        ],
        hint: "Use table aliases and select only columns needed for analysis.",
        output: "A denormalized analysis result ready for reporting.",
      },
    ],
  },
  {
    week: "Week 6",
    topic: "Advanced SQL and Business Reporting",
    practices: [
      {
        title: "Monthly Business Report Dataset",
        objective: "Prepare a report-ready dataset using joins, grouping, HAVING, and date extraction.",
        source: "Packt Ch. 7-8 and Ch. 12 date selected practice",
        pageRef: "Chapter 7, pp. 129-143; Chapter 8, pp. 145-163; Chapter 12 date, pp. 232-239",
        tables: ["sales", "products", "dealerships"],
        diagram: [
          "products.product_id -> sales.product_id",
          "dealerships.dealership_id -> sales.dealership_id",
        ],
        questions: [
          "Group sales by month and product type.",
          "Calculate total sales and transaction count.",
          "Filter out groups with low transaction volume.",
        ],
        hint: "In PostgreSQL, DATE_TRUNC can group timestamps by month.",
        output: "sales_month, product_type, total_sales, transaction_count.",
      },
      {
        title: "Clean Text Fields for Reporting",
        objective: "Use text functions to standardize labels before presenting report data.",
        source: "Packt Ch. 12 text selected practice",
        pageRef: "Chapter 12 text, pp. 240-244; Exercise 12.2 p. 242",
        tables: ["customers", "products"],
        diagram: ["raw text fields -> standardized reporting labels"],
        questions: [
          "Create a cleaned full_name field for customers.",
          "Standardize product names or product types for display.",
          "Find records where text fields are blank or unusually short.",
        ],
        hint: "Use TRIM, LOWER, UPPER, CONCAT, LENGTH, and CASE where helpful.",
        output: "Cleaned customer or product label columns for dashboard use.",
      },
    ],
  },
  {
    week: "Week 7",
    topic: "Advanced Database Topics",
    practices: [
      {
        title: "Readable CTE for Product Performance",
        objective: "Use a CTE to separate calculation logic from final filtering and ranking.",
        source: "Packt Ch. 7 selected practice",
        pageRef: "Chapter 7, pp. 124-128 for CTEs/views; Exercise 7.1 p. 128",
        tables: ["sales", "products"],
        diagram: ["base_sales CTE -> product_summary CTE -> final ranked result"],
        questions: [
          "Create a CTE that joins sales and products.",
          "Create a second CTE that summarizes sales by product type.",
          "Return the top product types by total sales.",
        ],
        hint: "Use WITH to name each query step clearly.",
        output: "product_type, total_sales, transaction_count, rank_position.",
      },
      {
        title: "Rank Products with Window Functions",
        objective: "Apply ROW_NUMBER or RANK to compare products inside a business category.",
        source: "Packt Ch. 9 selected practice",
        pageRef: "Chapter 9, pp. 165-183; Exercises 9.1-9.2 pp. 171-179",
        tables: ["sales", "products"],
        diagram: ["sales grouped by product -> window rank within product_type"],
        questions: [
          "Calculate total sales by product.",
          "Rank products within each product type.",
          "Return only the top three products per product type.",
        ],
        hint: "Use RANK() OVER (PARTITION BY product_type ORDER BY total_sales DESC).",
        output: "product_type, product_name, total_sales, product_rank.",
      },
    ],
  },
  {
    week: "Week 8",
    topic: "Business Data Analytics and Its Implications",
    practices: [
      {
        title: "Retail Analytics Mini Case",
        objective: "Turn SQL output into a concise business recommendation.",
        source: "Packt Ch. 8-9 and Ch. 14 selected practice",
        pageRef: "Chapter 8, pp. 145-163; Chapter 9, pp. 165-183; Chapter 14, pp. 273-291",
        tables: ["customers", "sales", "products", "dealerships"],
        diagram: [
          "customer profile + sales events + product attributes + dealership context",
        ],
        questions: [
          "Which product types produce the highest total sales?",
          "Which dealerships or regions appear strongest?",
          "What one recommendation would you make to management?",
        ],
        hint: "Use aggregate queries first, then add ranking or moving totals if needed.",
        output: "One SQL-backed slide: question, query summary, result table, recommendation.",
      },
      {
        title: "Simple Statistical Thinking with SQL",
        objective: "Introduce descriptive statistics without turning the course into a statistics class.",
        source: "Packt Ch. 13 light practice",
        pageRef: "Chapter 13 selected, pp. 251-271; core concepts pp. 252-263",
        tables: ["sales"],
        diagram: ["sales_amount distribution -> summary statistics -> interpretation"],
        questions: [
          "Calculate count, average, minimum, and maximum sales amount.",
          "Compare average sales amount across product or dealership groups.",
          "Write one limitation of comparing averages only.",
        ],
        hint: "Keep the statistics descriptive and connect every number to a business interpretation.",
        output: "A short descriptive-statistics table plus one interpretation paragraph.",
      },
    ],
  },
  {
    week: "Week 9",
    topic: "Legality, Privacy, and Ethics in Data Analytics",
    practices: [
      {
        title: "Data Quality and Privacy Review",
        objective: "Identify sensitive fields and quality problems before using customer data for analytics.",
        source: "Syllabus readings + Packt Ch. 12 date/text support",
        pageRef: "MIS 443 Topic 9; Packt Chapter 12 date/text, pp. 232-244",
        tables: ["customers", "emails", "customer_survey"],
        diagram: ["customer contact data -> quality checks -> privacy risk notes"],
        questions: [
          "Identify columns that may contain personal or sensitive information.",
          "Check missing or malformed contact fields.",
          "Suggest three rules for responsible use of customer data in a marketing analysis.",
        ],
        hint: "Separate technical data quality from ethical permission and purpose limitation.",
        output: "A privacy and data-quality checklist with SQL evidence.",
      },
    ],
  },
  {
    week: "Week 10",
    topic: "Revision and Presentation",
    practices: [
      {
        title: "Final Analytics Project Outline",
        objective: "Structure a final project that connects business question, SQL analysis, Python output, and recommendation.",
        source: "Packt Ch. 14 selected case workflow",
        pageRef: "Chapter 14, pp. 273-291; Exercises 14.1-14.4 pp. 278-288",
        tables: ["customers", "sales", "products", "dealerships", "customer_sales"],
        diagram: ["raw/staging data -> cleaned tables -> analysis query -> presentation insight"],
        questions: [
          "Define one business problem and the decision it supports.",
          "List the tables and joins needed.",
          "Prepare at least three SQL outputs and one Python-generated chart or table.",
          "Present one recommendation and one limitation.",
        ],
        hint: "A strong project is judged by the clarity of the business question and the correctness of the query logic.",
        output: "Project brief, SQL file, Python notebook or report output, and presentation slides.",
      },
    ],
  },
];

const theoryNotes = {
  "Explore the sqlda Business Database": {
    definitions: [
      "A relational database organizes business data into tables with rows and columns.",
      "A primary key identifies one record; a foreign key connects one table to another.",
      "Inspection queries help analysts understand data shape before analysis.",
    ],
    codeMeaning: [
      "SELECT chooses columns or rows to display.",
      "LIMIT keeps early exploration small and readable.",
      "COUNT(*) gives a quick table-size check.",
    ],
    sampleCode: `SELECT *
FROM customers
LIMIT 10;

SELECT COUNT(*) AS total_sales_rows
FROM sales;`,
    sampleOutput: `total_sales_rows
----------------
100000`,
  },
  "Draw a Sales ERD from Existing Tables": {
    definitions: [
      "An entity is a business object such as customer, product, dealership, or sale.",
      "An ERD shows how entities relate before the database is queried or redesigned.",
      "Transaction tables usually record events; master tables describe stable business objects.",
    ],
    codeMeaning: [
      "Column inspection helps identify candidate keys and relationships.",
      "Joining keys should represent the same business identifier in both tables.",
    ],
    sampleCode: `SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'sales'
ORDER BY ordinal_position;`,
    sampleOutput: `column_name       data_type
---------------- -----------
customer_id       integer
product_id        integer
sales_amount      numeric`,
  },
  "Create a Small Campaign Table": {
    definitions: [
      "DDL statements create or change database structure.",
      "Column types control the kind of values a table can store.",
      "Constraints protect data quality by enforcing rules at insert time.",
    ],
    codeMeaning: [
      "CREATE TABLE defines the table schema.",
      "NOT NULL requires a value.",
      "NUMERIC is suitable for money-like values that need decimal precision.",
    ],
    sampleCode: `CREATE TABLE campaigns (
  campaign_id INTEGER PRIMARY KEY,
  channel TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  budget NUMERIC(12, 2)
);

SELECT campaign_id, channel, budget
FROM campaigns
WHERE budget > 10000;`,
    sampleOutput: `campaign_id channel budget
----------- ------- --------
3           Online  15000.00`,
  },
  "Filter Customers for Business Segmentation": {
    definitions: [
      "Filtering reduces a dataset to records relevant to a business question.",
      "NULL means a missing or unknown value, not zero or an empty string.",
      "DISTINCT returns unique values and is useful for profiling categories.",
    ],
    codeMeaning: [
      "WHERE applies row-level conditions.",
      "IS NULL checks missing values correctly.",
      "ORDER BY makes output easier to review.",
    ],
    sampleCode: `SELECT first_name, last_name, email, phone
FROM customers
WHERE email IS NULL OR phone IS NULL
ORDER BY last_name;`,
    sampleOutput: `first_name last_name email                 phone
---------- --------- --------------------- -----
Arlena     Riveles   ariveles0@example.com NULL`,
  },
  "Join Sales to Products": {
    definitions: [
      "A join combines related rows from two or more tables.",
      "INNER JOIN keeps rows where matching keys exist in both tables.",
      "Joins replace opaque IDs with business-readable context.",
    ],
    codeMeaning: [
      "Table aliases keep multi-table queries short.",
      "ON defines how the tables are matched.",
      "ORDER BY can rank transactions by value.",
    ],
    sampleCode: `SELECT s.sales_transaction_date,
       p.product_name,
       p.product_type,
       s.sales_amount
FROM sales s
JOIN products p ON s.product_id = p.product_id
WHERE s.sales_amount > 500
ORDER BY s.sales_amount DESC;`,
    sampleOutput: `product_name           product_type sales_amount
--------------------- ------------ ------------
Lemon Limited Edition  premium      799.99`,
  },
  "Build KPI Queries for Management": {
    definitions: [
      "A KPI is a metric designed to support a business decision.",
      "Aggregation summarizes many transaction rows into meaningful groups.",
      "HAVING filters aggregated groups, while WHERE filters individual rows.",
    ],
    codeMeaning: [
      "SUM calculates total value.",
      "AVG calculates typical transaction value.",
      "GROUP BY sets the business grain of the result.",
    ],
    sampleCode: `SELECT p.product_type,
       SUM(s.sales_amount) AS total_sales,
       AVG(s.sales_amount) AS avg_transaction_value,
       COUNT(*) AS transaction_count
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY p.product_type
HAVING SUM(s.sales_amount) > 10000
ORDER BY total_sales DESC;`,
    sampleOutput: `product_type total_sales avg_transaction_value transaction_count
------------ ----------- --------------------- -----------------
premium      184500.00   612.90                301`,
  },
  "Read SQL Output in Python": {
    definitions: [
      "Python connects database results to analysis, visualization, and reporting workflows.",
      "SQLAlchemy manages the database connection layer.",
      "pandas stores query results in a DataFrame for further analysis.",
    ],
    codeMeaning: [
      "create_engine defines how Python connects to PostgreSQL.",
      "read_sql_query runs SQL and returns a DataFrame.",
      "head() previews the result before exporting or charting.",
    ],
    sampleCode: `from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("postgresql+psycopg2://postgres:password@localhost:5432/sqlda")
query = "SELECT product_id, SUM(sales_amount) AS total_sales FROM sales GROUP BY product_id"
kpis = pd.read_sql_query(query, engine)
kpis.head()`,
    sampleOutput: `product_id total_sales
---------- -----------
1          54200.00
2          78100.00`,
  },
  "Import and Validate a Sales Extract": {
    definitions: [
      "ETL means extract, transform, and load data for reliable analysis.",
      "A staging table stores raw imported data before it is trusted.",
      "Validation queries catch missing keys, invalid amounts, and other quality issues.",
    ],
    codeMeaning: [
      "COPY or \\copy imports file data in PostgreSQL.",
      "CASE converts validation rules into readable flags.",
      "COUNT with conditions summarizes quality problems.",
    ],
    sampleCode: `SELECT COUNT(*) AS total_rows,
       SUM(CASE WHEN customer_id IS NULL THEN 1 ELSE 0 END) AS missing_customer_id,
       SUM(CASE WHEN sales_amount < 0 THEN 1 ELSE 0 END) AS invalid_amount
FROM staging_sales_extract;`,
    sampleOutput: `total_rows missing_customer_id invalid_amount
---------- ------------------- --------------
5000       12                  3`,
  },
  "Combine Customer, Product, and Sales Context": {
    definitions: [
      "Integrated analysis combines facts with descriptive dimensions.",
      "A denormalized result is useful for reporting, even when storage stays normalized.",
      "Selecting only relevant columns keeps analysis outputs clear.",
    ],
    codeMeaning: [
      "Multiple JOIN clauses add context step by step.",
      "Aliases label tables by role, such as c for customers and p for products.",
    ],
    sampleCode: `SELECT c.customer_id,
       c.city,
       p.product_name,
       p.product_type,
       s.sales_transaction_date,
       s.sales_amount
FROM sales s
JOIN customers c ON s.customer_id = c.customer_id
JOIN products p ON s.product_id = p.product_id
LIMIT 20;`,
    sampleOutput: `customer_id city     product_name sales_amount
----------- -------- ------------ ------------
101         Seattle  Lemon        499.99`,
  },
  "Monthly Business Report Dataset": {
    definitions: [
      "Report datasets should have a clear grain, such as month by product type.",
      "Date functions transform timestamps into business periods.",
      "A reporting query should produce stable columns for dashboards or slides.",
    ],
    codeMeaning: [
      "DATE_TRUNC groups timestamps into calendar periods in PostgreSQL.",
      "GROUP BY repeats each metric per reporting period and category.",
    ],
    sampleCode: `SELECT DATE_TRUNC('month', s.sales_transaction_date) AS sales_month,
       p.product_type,
       SUM(s.sales_amount) AS total_sales,
       COUNT(*) AS transaction_count
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY sales_month, p.product_type
HAVING COUNT(*) >= 10
ORDER BY sales_month, total_sales DESC;`,
    sampleOutput: `sales_month product_type total_sales transaction_count
----------- ------------ ----------- -----------------
2025-01-01  premium      21000.00    34`,
  },
  "Clean Text Fields for Reporting": {
    definitions: [
      "Text cleaning makes labels consistent before reporting or joining.",
      "Whitespace, casing, and blank values often create misleading categories.",
      "CASE expressions can create standardized reporting labels.",
    ],
    codeMeaning: [
      "TRIM removes extra spaces.",
      "LOWER or UPPER standardizes casing.",
      "LENGTH helps detect suspiciously short text.",
    ],
    sampleCode: `SELECT customer_id,
       TRIM(first_name || ' ' || last_name) AS full_name,
       LOWER(email) AS normalized_email,
       CASE WHEN LENGTH(TRIM(first_name)) = 0 THEN 'missing' ELSE 'ok' END AS name_quality
FROM customers;`,
    sampleOutput: `customer_id full_name       normalized_email       name_quality
----------- --------------- ---------------------- ------------
1           Arlena Riveles  ariveles0@example.com  ok`,
  },
  "Readable CTE for Product Performance": {
    definitions: [
      "A CTE names an intermediate result inside a query.",
      "CTEs improve readability when a business question needs multiple steps.",
      "Each CTE should represent a clear analytical step.",
    ],
    codeMeaning: [
      "WITH starts the CTE block.",
      "The final SELECT queries the named intermediate result.",
      "CTEs are useful for testing logic piece by piece.",
    ],
    sampleCode: `WITH product_sales AS (
  SELECT p.product_type,
         p.product_name,
         SUM(s.sales_amount) AS total_sales
  FROM sales s
  JOIN products p ON s.product_id = p.product_id
  GROUP BY p.product_type, p.product_name
)
SELECT *
FROM product_sales
ORDER BY total_sales DESC;`,
    sampleOutput: `product_type product_name total_sales
------------ ------------ -----------
premium      Lemon Pro    92500.00`,
  },
  "Rank Products with Window Functions": {
    definitions: [
      "Window functions calculate values across related rows without collapsing detail.",
      "PARTITION BY defines comparison groups.",
      "RANK and ROW_NUMBER are useful for top-N business questions.",
    ],
    codeMeaning: [
      "RANK() OVER assigns a ranking based on an ORDER BY rule.",
      "PARTITION BY product_type restarts the rank inside each product type.",
    ],
    sampleCode: `WITH product_sales AS (
  SELECT p.product_type,
         p.product_name,
         SUM(s.sales_amount) AS total_sales
  FROM sales s
  JOIN products p ON s.product_id = p.product_id
  GROUP BY p.product_type, p.product_name
)
SELECT *,
       RANK() OVER (PARTITION BY product_type ORDER BY total_sales DESC) AS product_rank
FROM product_sales;`,
    sampleOutput: `product_type product_name total_sales product_rank
------------ ------------ ----------- ------------
standard     Lemon        54200.00    1`,
  },
  "Retail Analytics Mini Case": {
    definitions: [
      "An analytics case connects a business question to evidence and action.",
      "Good SQL output is not enough; students must interpret what the result means.",
      "A recommendation should include a limitation or next data need.",
    ],
    codeMeaning: [
      "Aggregation finds performance patterns.",
      "Ranking helps prioritize where management should act first.",
    ],
    sampleCode: `SELECT p.product_type,
       COUNT(*) AS transactions,
       SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY p.product_type
ORDER BY total_sales DESC;`,
    sampleOutput: `product_type transactions total_sales
------------ ------------ -----------
premium      301          184500.00`,
  },
  "Simple Statistical Thinking with SQL": {
    definitions: [
      "Descriptive statistics summarize a dataset before deeper modeling.",
      "Average alone can hide spread, outliers, and segment differences.",
      "Statistics in this course should support business interpretation, not replace it.",
    ],
    codeMeaning: [
      "MIN and MAX show range.",
      "AVG shows central tendency.",
      "COUNT confirms the sample size behind the metric.",
    ],
    sampleCode: `SELECT COUNT(*) AS n_transactions,
       AVG(sales_amount) AS avg_sales,
       MIN(sales_amount) AS min_sales,
       MAX(sales_amount) AS max_sales
FROM sales;`,
    sampleOutput: `n_transactions avg_sales min_sales max_sales
-------------- --------- --------- ---------
100000         486.25    5.00      999.99`,
  },
  "Data Quality and Privacy Review": {
    definitions: [
      "Data quality asks whether data is complete, valid, consistent, and usable.",
      "Privacy asks whether the data should be used, shared, or exposed for the purpose.",
      "Ethical analytics requires both technical correctness and responsible use.",
    ],
    codeMeaning: [
      "Missing-value checks identify incomplete customer records.",
      "Pattern checks can flag suspicious email or phone values.",
      "The output should support a policy recommendation, not just a count.",
    ],
    sampleCode: `SELECT COUNT(*) AS total_customers,
       SUM(CASE WHEN email IS NULL THEN 1 ELSE 0 END) AS missing_email,
       SUM(CASE WHEN phone IS NULL THEN 1 ELSE 0 END) AS missing_phone
FROM customers;`,
    sampleOutput: `total_customers missing_email missing_phone
--------------- ------------- -------------
50000           820           12400`,
  },
  "Final Analytics Project Outline": {
    definitions: [
      "A final analytics project should have a clear question, reproducible data preparation, and defensible interpretation.",
      "The strongest projects connect SQL evidence to a business decision.",
      "Documentation matters because another analyst should be able to rerun the work.",
    ],
    codeMeaning: [
      "Staging queries prepare raw data.",
      "Analysis queries answer business questions.",
      "Python outputs can support visualization and presentation.",
    ],
    sampleCode: `WITH monthly_sales AS (
  SELECT DATE_TRUNC('month', sales_transaction_date) AS sales_month,
         SUM(sales_amount) AS total_sales
  FROM sales
  GROUP BY sales_month
)
SELECT sales_month,
       total_sales,
       AVG(total_sales) OVER (
         ORDER BY sales_month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS three_month_moving_avg
FROM monthly_sales;`,
    sampleOutput: `sales_month total_sales three_month_moving_avg
----------- ----------- ----------------------
2025-03-01  72000.00    68100.00`,
  },
};

const exerciseAdaptations = {
  "Explore the sqlda Business Database": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 1",
    pages: "pp. 14-26; Exercises 1.1-1.4",
    objective: "Install PostgreSQL, open a query tool, restore the sqlda sample database, and confirm that the main business tables are available.",
    exerciseItems: [
      {
        id: "Exercise 1.1",
        title: "Installing PostgreSQL on your local machine",
        page: "p. 14",
        sourceFile: "No code file; setup exercise in textbook",
        goal: "Set up PostgreSQL locally so students have a database server for the rest of the course.",
        steps: [
          "Go to the official PostgreSQL download page and choose the installer for your operating system.",
          "Install PostgreSQL with the default components unless your instructor gives a different setup.",
          "Set and record the password for the default postgres superuser.",
          "Keep the default port unless another PostgreSQL service already uses it.",
          "Confirm that the PostgreSQL service is running after installation.",
        ],
        hint: "Use a simple password in class only if the machine is temporary; for personal machines, use a stronger password and store it safely.",
        code: `-- No SQL query is required yet.
-- Installation target:
-- PostgreSQL server + pgAdmin + psql`,
        output: "PostgreSQL is installed, and students can open pgAdmin or psql.",
      },
      {
        id: "Exercise 1.2",
        title: "Accessing and understanding PostgreSQL",
        page: "p. 17",
        sourceFile: "No code file; pgAdmin/psql navigation exercise",
        goal: "Open PostgreSQL tools and understand the server, database, schema, and table hierarchy.",
        steps: [
          "Open pgAdmin and connect to the local PostgreSQL server.",
          "Enter the postgres password created during installation.",
          "Expand the server tree to find Databases and Schemas.",
          "Locate the default postgres database and public schema.",
          "Explain the difference between a server, database, schema, and table.",
        ],
        hint: "Students often confuse PostgreSQL the server with one database. Emphasize that one server can contain many databases.",
        code: `-- Concept hierarchy:
-- Server
--   Database
--     Schema
--       Table`,
        output: "Students can navigate pgAdmin and identify where tables live.",
      },
      {
        id: "Exercise 1.3",
        title: "Utilizing PostgreSQL query tools",
        page: "p. 21",
        sourceFile: "Chapter 01/Exercise 01.03.txt",
        goal: "Run the first SQL command in pgAdmin or psql and confirm the query tool works.",
        steps: [
          "Open the Query Tool in pgAdmin or launch psql.",
          "Run a simple system query.",
          "Read the result grid or terminal output.",
          "Repeat the query after changing capitalization to show that SQL keywords are case-insensitive.",
          "Save the query in a class notes file.",
        ],
        hint: "If the query does not run, first check that the selected database connection is active.",
        code: `SELECT current_timestamp;`,
        output: "A one-row result showing the current database timestamp.",
      },
      {
        id: "Exercise 1.4",
        title: "Import a sample sqlda database",
        page: "p. 23",
        sourceFile: "Chapter 01/Exercise 01.04.txt",
        goal: "Create the sqlda database, restore the provided data.dump file, and preview core tables.",
        steps: [
          "Download or locate the data.dump file from the book code repository.",
          "Open psql and connect to PostgreSQL.",
          "Create a database named sqlda.",
          "Switch the current connection to sqlda.",
          "Run the import command for data.dump.",
          "Preview products, customers, and sales to confirm the import.",
        ],
        hint: "Paths with spaces can fail in psql. Put the dump path inside quotes and use forward slashes if needed.",
        code: `CREATE DATABASE sqlda;
\\c sqlda
\\i 'D:/path/to/data.dump'

SELECT *
FROM products
LIMIT 5;`,
        output: "The sqlda database is restored, and SELECT queries return sample business data.",
      },
      {
        id: "Activity 1",
        title: "Preview every table in sqlda",
        page: "p. 26",
        sourceFile: "Chapter 01/Actitivty 01.txt",
        goal: "Use the exact activity file from the book repository to preview every table and answer the two checking questions.",
        steps: [
          "Open Chapter 01/Actitivty 01.txt.",
          "Run each SELECT statement in the sqlda database.",
          "Answer the two questions included at the bottom of the activity file.",
        ],
        hint: "This block is intentionally kept the same as the repository file. If PostgreSQL rejects the full-width semicolon, replace it with a normal semicolon only when running the query.",
        code: `-- Create SQL statements to fetch the first 20 rows of each table in your sqlda database. 

select * from countries limit 20；
select * from customer_sales limit 20；
select * from customer_survey limit 20；
select * from customers limit 20；
select * from dealerships limit 20；
select * from emails limit 20；
select * from products limit 20；
select * from public_transportation_by_zip limit 20；
select * from sales limit 20；
select * from salespeople limit 20；

-- Answer the following two questions: 
-- Q: Which table is empty?
-- A: The countries table is empty.
-- Q: Which table has less than 20 records? 
-- A: The products table has only 12 records.`,
        output: `-- Q: Which table is empty?
-- A: The countries table is empty.
-- Q: Which table has less than 20 records?
-- A: The products table has only 12 records.`,
      },
    ],
    steps: [
      "Install PostgreSQL using the official installer or your operating system package manager.",
      "Open pgAdmin or psql and connect to the local PostgreSQL server.",
      "Create a database named sqlda.",
      "Restore the book dataset from data.dump.",
      "Run quick inspection queries against customers, products, and sales.",
    ],
    sampleCode: `CREATE DATABASE sqlda;

-- In psql, connect to the database first.
\\c sqlda

-- Restore the provided dump file.
\\i 'path/to/data.dump'

SELECT *
FROM products
LIMIT 5;`,
    expectedOutput: "A working sqlda database and a five-row preview of the products table.",
    visualNote: "Use an instructor-made screenshot of pgAdmin/psql connection and a simple database icon diagram; do not reuse book screenshots.",
  },
  "Draw a Sales ERD from Existing Tables": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapters 1-2",
    pages: "Chapter 1 pp. 9-13; Chapter 2 pp. 28-47",
    objective: "Identify entities, keys, and relationships in the sqlda database before writing multi-table queries.",
    steps: [
      "Inspect column lists for customers, sales, products, salespeople, and dealerships.",
      "Classify each table as master data or transaction data.",
      "Mark primary-key-like and foreign-key-like columns.",
      "Draw the relationship path from customers to sales to products.",
      "Write one sentence explaining why the sales table is the central fact table.",
    ],
    sampleCode: `SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_name IN ('customers', 'sales', 'products', 'salespeople', 'dealerships')
ORDER BY table_name, ordinal_position;`,
    expectedOutput: "A data dictionary and ERD sketch showing customers, sales, products, salespeople, and dealerships.",
    visualNote: "Create a simple instructor-made ERD; label one-to-many relationships clearly.",
  },
  "Create a Small Campaign Table": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 2",
    pages: "pp. 38-47; Exercises 2.1-2.3",
    objective: "Design a small marketing table with suitable data types and constraints.",
    steps: [
      "Define the business purpose of the campaigns table.",
      "Create columns for ID, channel, start date, end date, and budget.",
      "Insert at least five campaign rows.",
      "Query high-budget campaigns.",
      "Drop or revise the table if the first schema design is not suitable.",
    ],
    sampleCode: `CREATE TABLE campaigns (
  campaign_id INTEGER PRIMARY KEY,
  channel TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  budget NUMERIC(12, 2)
);

INSERT INTO campaigns VALUES
  (1, 'Email', '2026-01-01', '2026-01-31', 8500.00),
  (2, 'Online Ads', '2026-02-01', '2026-02-28', 15000.00);

SELECT *
FROM campaigns
WHERE budget >= 10000;`,
    expectedOutput: "A campaigns table and a filtered list of campaigns above the budget threshold.",
    visualNote: "Show a small table schema diagram instead of textbook images.",
  },
  "Filter Customers for Business Segmentation": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 5",
    pages: "pp. 84-102; Exercise 5.1",
    objective: "Use foundational SELECT syntax to profile and segment customer records.",
    steps: [
      "Preview selected customer columns instead of using SELECT * for final output.",
      "Use aliases to make output readable.",
      "Filter missing contact values.",
      "List distinct locations or categories.",
      "Sort the output for review.",
    ],
    sampleCode: `SELECT first_name || ' ' || last_name AS customer_name,
       email,
       phone,
       city,
       state
FROM customers
WHERE email IS NULL OR phone IS NULL
ORDER BY state, city;`,
    expectedOutput: "A list of customers with incomplete contact details for data quality review.",
    visualNote: "Use a before/after table preview to show raw fields versus readable output.",
  },
  "Join Sales to Products": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 7",
    pages: "pp. 129-139; Exercise 7.2",
    objective: "Use joins to enrich sales transactions with product information.",
    steps: [
      "Start with the sales table and identify product_id.",
      "Join products using the shared product_id field.",
      "Select transaction date, product name, product type, and amount.",
      "Filter high-value transactions.",
      "Sort the largest transactions first.",
    ],
    sampleCode: `SELECT s.sales_transaction_date,
       p.product_name,
       p.product_type,
       s.sales_amount
FROM sales s
JOIN products p ON s.product_id = p.product_id
WHERE s.sales_amount >= 500
ORDER BY s.sales_amount DESC;`,
    expectedOutput: "A high-value sales table with product names instead of only IDs.",
    visualNote: "Use a two-table join diagram with product_id highlighted.",
  },
  "Build KPI Queries for Management": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 8",
    pages: "pp. 145-163; Exercises 8.1-8.3",
    objective: "Aggregate transaction data into business KPIs for management reporting.",
    steps: [
      "Define the business grain: product type, month, channel, or dealership.",
      "Calculate total sales, average transaction value, and transaction count.",
      "Use HAVING to keep only meaningful groups.",
      "Sort by the KPI that supports the decision.",
      "Write one interpretation sentence from the output.",
    ],
    sampleCode: `SELECT p.product_type,
       SUM(s.sales_amount) AS total_sales,
       ROUND(AVG(s.sales_amount), 2) AS avg_transaction_value,
       COUNT(*) AS transaction_count
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY p.product_type
HAVING COUNT(*) >= 20
ORDER BY total_sales DESC;`,
    expectedOutput: "A KPI table by product type with total sales, average value, and transaction count.",
    visualNote: "Show a KPI card layout or simple bar chart made by the instructor.",
  },
  "Read SQL Output in Python": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 4",
    pages: "pp. 65-80; Exercise 4.2",
    objective: "Run a SQL query from Python and store the result in a pandas DataFrame.",
    steps: [
      "Install required Python packages for PostgreSQL access.",
      "Create a SQLAlchemy engine using the local database credentials.",
      "Write a KPI SQL query.",
      "Load the result into pandas.",
      "Preview and export the DataFrame.",
    ],
    sampleCode: `from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("postgresql+psycopg2://postgres:password@localhost:5432/sqlda")

query = """
SELECT product_id, SUM(sales_amount) AS total_sales
FROM sales
GROUP BY product_id
ORDER BY total_sales DESC
"""

df = pd.read_sql_query(query, engine)
df.head()`,
    expectedOutput: "A pandas DataFrame containing product_id and total_sales.",
    visualNote: "Use a Jupyter Notebook screenshot created by the instructor.",
  },
  "Import and Validate a Sales Extract": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 3",
    pages: "pp. 49-63; Exercise 3.1",
    objective: "Practice a small import/export workflow and validate imported data before analysis.",
    steps: [
      "Create a staging table that matches the extract structure.",
      "Import or insert the extract rows.",
      "Check row count after loading.",
      "Check missing keys and invalid numeric values.",
      "Record validation results before analysis.",
    ],
    sampleCode: `SELECT COUNT(*) AS total_rows,
       SUM(CASE WHEN customer_id IS NULL THEN 1 ELSE 0 END) AS missing_customer_id,
       SUM(CASE WHEN sales_amount < 0 THEN 1 ELSE 0 END) AS invalid_sales_amount
FROM staging_sales_extract;`,
    expectedOutput: "A validation summary with total rows and quality issue counts.",
    visualNote: "Show an ETL flow diagram: source file -> staging table -> validation report.",
  },
  "Combine Customer, Product, and Sales Context": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 7",
    pages: "pp. 129-143; Exercises 7.1-7.3",
    objective: "Build an analysis-ready joined dataset across customers, products, and transactions.",
    steps: [
      "Identify the fact table and dimension tables.",
      "Join sales to customers using customer_id.",
      "Join sales to products using product_id.",
      "Select only business-readable columns.",
      "Explain what analysis this joined result enables.",
    ],
    sampleCode: `SELECT c.customer_id,
       c.city,
       p.product_name,
       p.product_type,
       s.sales_transaction_date,
       s.sales_amount
FROM sales s
JOIN customers c ON s.customer_id = c.customer_id
JOIN products p ON s.product_id = p.product_id
LIMIT 25;`,
    expectedOutput: "A denormalized analysis table with customer, product, and sales context.",
    visualNote: "Use a star-like diagram with sales in the center.",
  },
  "Monthly Business Report Dataset": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapters 7, 8, and 12",
    pages: "Ch. 7 pp. 129-143; Ch. 8 pp. 145-163; Ch. 12 pp. 232-239",
    objective: "Prepare a monthly reporting dataset using joins, aggregation, and date logic.",
    steps: [
      "Convert transaction timestamps to a monthly reporting period.",
      "Join product or dealership context.",
      "Aggregate total sales and transaction count.",
      "Filter unstable groups using HAVING.",
      "Sort by reporting period and KPI.",
    ],
    sampleCode: `SELECT DATE_TRUNC('month', s.sales_transaction_date) AS sales_month,
       p.product_type,
       SUM(s.sales_amount) AS total_sales,
       COUNT(*) AS transactions
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY sales_month, p.product_type
HAVING COUNT(*) >= 10
ORDER BY sales_month, total_sales DESC;`,
    expectedOutput: "A monthly product-type report suitable for dashboards or slides.",
    visualNote: "Show a simple timeline table and highlight reporting grain.",
  },
  "Clean Text Fields for Reporting": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 12",
    pages: "pp. 240-244; Exercise 12.2",
    objective: "Clean and standardize text fields before reporting.",
    steps: [
      "Create readable customer names.",
      "Normalize email casing.",
      "Trim extra spaces.",
      "Flag blank or suspiciously short values.",
      "Explain how text quality affects reporting.",
    ],
    sampleCode: `SELECT customer_id,
       TRIM(first_name || ' ' || last_name) AS full_name,
       LOWER(email) AS normalized_email,
       CASE
         WHEN email IS NULL THEN 'missing email'
         ELSE 'ok'
       END AS email_quality
FROM customers;`,
    expectedOutput: "A cleaned customer output with full_name, normalized_email, and quality flag.",
    visualNote: "Show raw text versus standardized text in two columns.",
  },
  "Readable CTE for Product Performance": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 7",
    pages: "pp. 124-128; Exercise 7.1",
    objective: "Use CTEs to make multi-step product performance analysis readable.",
    steps: [
      "Create one CTE for joined product-sales records.",
      "Create a second CTE for aggregated product metrics.",
      "Filter or rank the aggregated result.",
      "Compare readability with a single nested query.",
      "Add comments explaining each step.",
    ],
    sampleCode: `WITH base_sales AS (
  SELECT p.product_type, p.product_name, s.sales_amount
  FROM sales s
  JOIN products p ON s.product_id = p.product_id
),
product_summary AS (
  SELECT product_type, product_name, SUM(sales_amount) AS total_sales
  FROM base_sales
  GROUP BY product_type, product_name
)
SELECT *
FROM product_summary
ORDER BY total_sales DESC;`,
    expectedOutput: "A product performance table produced through readable CTE steps.",
    visualNote: "Show CTEs as stacked boxes feeding the final SELECT.",
  },
  "Rank Products with Window Functions": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 9",
    pages: "pp. 165-183; Exercises 9.1-9.2",
    objective: "Use window functions to rank products within business categories.",
    steps: [
      "Aggregate total sales by product and product type.",
      "Use RANK or ROW_NUMBER over each product type.",
      "Filter to top products per category.",
      "Interpret which category leaders matter most.",
      "Discuss ties when using RANK.",
    ],
    sampleCode: `WITH product_sales AS (
  SELECT p.product_type,
         p.product_name,
         SUM(s.sales_amount) AS total_sales
  FROM sales s
  JOIN products p ON s.product_id = p.product_id
  GROUP BY p.product_type, p.product_name
)
SELECT *,
       RANK() OVER (PARTITION BY product_type ORDER BY total_sales DESC) AS sales_rank
FROM product_sales;`,
    expectedOutput: "A ranked product table with sales_rank restarted within each product_type.",
    visualNote: "Show a ranked list with partition boundaries between product types.",
  },
  "Retail Analytics Mini Case": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapters 8, 9, and 14",
    pages: "Ch. 8 pp. 145-163; Ch. 9 pp. 165-183; Ch. 14 pp. 273-291",
    objective: "Turn SQL analysis into a short business recommendation.",
    steps: [
      "Define one retail performance question.",
      "Choose the tables needed for the question.",
      "Write at least two aggregate or ranking queries.",
      "Convert the results into a simple finding.",
      "State one action and one limitation.",
    ],
    sampleCode: `SELECT p.product_type,
       COUNT(*) AS transactions,
       SUM(s.sales_amount) AS total_sales
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY p.product_type
ORDER BY total_sales DESC;`,
    expectedOutput: "A short insight table plus one management recommendation.",
    visualNote: "Use one instructor-made slide with question, result table, and recommendation.",
  },
  "Simple Statistical Thinking with SQL": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 13",
    pages: "pp. 251-271; focus on pp. 252-263",
    objective: "Use basic descriptive statistics to support business interpretation.",
    steps: [
      "Calculate count, average, minimum, and maximum sales amount.",
      "Group the same statistics by one business category.",
      "Compare the difference between groups.",
      "Write a limitation of using averages only.",
      "Suggest one next metric that would improve the analysis.",
    ],
    sampleCode: `SELECT COUNT(*) AS n_transactions,
       ROUND(AVG(sales_amount), 2) AS avg_sales,
       MIN(sales_amount) AS min_sales,
       MAX(sales_amount) AS max_sales
FROM sales;`,
    expectedOutput: "A descriptive statistics table and one interpretation sentence.",
    visualNote: "Use a box-summary style diagram; keep inferential statistics optional.",
  },
  "Data Quality and Privacy Review": {
    source: "Adapted from MIS 443 Topic 9 and SQL for Data Analytics, 4th ed., Chapter 12",
    pages: "MIS 443 Topic 9; Packt Ch. 12 pp. 232-244",
    objective: "Connect technical data quality checks with responsible data use.",
    steps: [
      "Identify personal fields in the customer-related tables.",
      "Check missing email and phone values.",
      "Flag records that may be unsuitable for marketing use.",
      "Write three privacy-aware rules for analysis.",
      "Explain the difference between available data and appropriate data.",
    ],
    sampleCode: `SELECT COUNT(*) AS total_customers,
       SUM(CASE WHEN email IS NULL THEN 1 ELSE 0 END) AS missing_email,
       SUM(CASE WHEN phone IS NULL THEN 1 ELSE 0 END) AS missing_phone
FROM customers;`,
    expectedOutput: "A data quality summary and a privacy checklist for marketing analytics.",
    visualNote: "Use a risk checklist, not customer-identifying screenshots.",
  },
  "Final Analytics Project Outline": {
    source: "Adapted from SQL for Data Analytics, 4th ed., Chapter 14",
    pages: "pp. 273-291; Exercises 14.1-14.4",
    objective: "Plan a reproducible analytics project from raw data to business presentation.",
    steps: [
      "Define a business problem and decision owner.",
      "List required tables and relationships.",
      "Create SQL outputs for preparation, validation, and analysis.",
      "Use Python for at least one table export or chart.",
      "Present recommendation, evidence, limitation, and next data need.",
    ],
    sampleCode: `WITH monthly_sales AS (
  SELECT DATE_TRUNC('month', sales_transaction_date) AS sales_month,
         SUM(sales_amount) AS total_sales
  FROM sales
  GROUP BY sales_month
)
SELECT sales_month,
       total_sales,
       AVG(total_sales) OVER (
         ORDER BY sales_month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS three_month_moving_avg
FROM monthly_sales;`,
    expectedOutput: "A final project package: problem statement, SQL file, Python output, and presentation slides.",
    visualNote: "Use an instructor-made project flow diagram from raw data to recommendation.",
  },
};

const workbooks = {
  "Week 1": {
    title: "Week 1 Practice Exercise",
    subtitle: "Introduction to Data Management Systems and PostgreSQL Setup",
    meta: [
      ["Course", "Business Data Management / SQL for Data Analytics"],
      ["Week", "1"],
      ["Topic", "Introduction to Relational Databases and PostgreSQL"],
      ["Estimated Time", "90-120 minutes"],
      ["Book Source", "SQL for Data Analytics, Fourth Edition, Chapter 1"],
      ["Code Source", "Chapter 01/Exercise 01.03.txt, Exercise 01.04.txt, Actitivty 01.txt"],
    ],
    objectives: [
      "Explain basic concepts of data management systems, including database, table, row, column, primary key, and foreign key.",
      "Understand the role of PostgreSQL as a relational database management system.",
      "Use PostgreSQL tools such as pgAdmin and psql to connect to a database server.",
      "Create and connect to a sample database named sqlda.",
      "Import a sample database file and explore tables using basic SQL queries.",
      "Use simple SQL commands such as SELECT, LIMIT, and CREATE DATABASE.",
    ],
    tools: [
      "A computer with internet access.",
      "PostgreSQL installed on the local machine.",
      "PostgreSQL download link: https://www.postgresql.org/download/",
      "pgAdmin 4 or psql command-line tool.",
      "The sample database dump file: data.dump.",
      "Dataset source: https://github.com/PacktPublishing/SQL-for-Data-Analytics-Fourth-Edition/tree/main/Datasets",
      "Basic knowledge of SQL commands such as CREATE DATABASE, SELECT, and LIMIT.",
    ],
    preNote: "Students should download and install PostgreSQL before starting Exercise 1.1. They should also download the required dataset file from the GitHub repository before starting Exercise 1.3.",
    exercises: [
      {
        title: "Exercise 1.1: Install and Access PostgreSQL",
        source: "Textbook Chapter 1, p. 14; no repository code file",
        objective: "This exercise helps students install PostgreSQL and understand the basic structure of a PostgreSQL database system.",
        instructions: [
          "Download PostgreSQL from the official PostgreSQL website.",
          "Select the operating system that matches your computer, such as Windows, macOS, or Linux.",
          "Download and run the PostgreSQL installer.",
          "During installation, keep the default installation settings, set a password for the default superuser postgres, remember the password, and skip Stack Builder if it is not required for this course.",
          "After installation, open pgAdmin 4.",
          "Connect to the local PostgreSQL server using the postgres password.",
          "Explore the object hierarchy in pgAdmin, including Server, Database, Schema, and Table.",
        ],
        codeBlocks: ["https://www.postgresql.org/download/"],
        questions: [
          "What is PostgreSQL?",
          "What is the role of the postgres user?",
          "What is the difference between a database and a table?",
          "Why is it important to remember the password created during PostgreSQL installation?",
        ],
      },
      {
        title: "Exercise 1.2: Use PostgreSQL Query Tool",
        source: "Textbook Chapter 1, p. 21; repository file Chapter 01/Exercise 01.03.txt",
        objective: "This exercise helps students run their first SQL command in PostgreSQL and confirm that the database server is working correctly.",
        instructions: [
          "Open pgAdmin 4.",
          "Select the local PostgreSQL server.",
          "Open the Query Tool.",
          "Run the following SQL command from the book code file.",
          "Observe the result returned by PostgreSQL.",
        ],
        codeBlocks: ["select current_timestamp;"],
        questions: [
          "What result does the query return?",
          "Why is this query useful for checking whether PostgreSQL is working properly?",
          "What does SELECT do in SQL?",
        ],
      },
      {
        title: "Exercise 1.3: Create and Import the Sample Database",
        source: "Textbook Chapter 1, p. 23; repository file Chapter 01/Exercise 01.04.txt",
        objective: "This exercise helps students create the sample sqlda database and import the provided dataset.",
        instructions: [
          "Download the sample dataset from the GitHub repository.",
          "Locate the file named data.dump and save it to an easy-to-find folder on your computer, such as Downloads or Documents.",
          "Open psql or the PostgreSQL query tool.",
          "Create a new database named sqlda.",
          "Connect to the sqlda database.",
          "Import the sample database using the downloaded data.dump file.",
          "After the import is completed, test whether the database was imported successfully.",
        ],
        codeBlocks: [
          "https://github.com/PacktPublishing/SQL-for-Data-Analytics-Fourth-Edition/tree/main/Datasets",
          "CREATE DATABASE sqlda;\n\\c sqlda;",
          "\\i '<local path of the data.dump file>'",
          "\\i 'C:/Users/YourName/Downloads/data.dump'",
          "\\i '/Users/YourName/Downloads/data.dump'",
          "SELECT *\nFROM public.products\nLIMIT 5;",
        ],
        questions: [
          "What is the purpose of the CREATE DATABASE command?",
          "What does the command \\c sqlda do?",
          "Why should we run a SELECT query after importing the database?",
          "Why is it important to know the exact local path of the data.dump file?",
        ],
      },
      {
        title: "Exercise 1.4: Explore Tables in the sqlda Database",
        source: "Textbook Chapter 1 Activity 1, p. 26; repository file Chapter 01/Actitivty 01.txt",
        objective: "This exercise helps students explore the structure and content of the sample database using basic SQL queries.",
        instructions: [
          "Write SQL queries to display the first 20 rows from each table in the sqlda database.",
          "Use the standard query format SELECT * FROM table_name LIMIT 20.",
          "Run the activity queries from the repository file.",
          "Answer the checking questions after reviewing the outputs.",
        ],
        codeBlocks: [
          "SELECT * FROM table_name LIMIT 20;",
          `-- Create SQL statements to fetch the first 20 rows of each table in your sqlda database. 

select * from countries limit 20；
select * from customer_sales limit 20；
select * from customer_survey limit 20；
select * from customers limit 20；
select * from dealerships limit 20；
select * from emails limit 20；
select * from products limit 20；
select * from public_transportation_by_zip limit 20；
select * from sales limit 20；
select * from salespeople limit 20；

-- Answer the following two questions: 
-- Q: Which table is empty?
-- A: The countries table is empty.
-- Q: Which table has less than 20 records? 
-- A: The products table has only 12 records.`,
        ],
        questions: [
          "Which table is empty?",
          "Which table has fewer than 20 records?",
          "Which table seems to contain customer information?",
          "Which table seems to contain product information?",
          "Which table seems to contain sales transaction data?",
        ],
      },
    ],
    submission: [
      "Screenshots showing that PostgreSQL and pgAdmin are working.",
      "SQL commands used in Exercises 1.2, 1.3, and 1.4.",
      "Query results for at least three tables in Exercise 1.4.",
      "Short answers to all questions in the four exercises.",
    ],
    expectedOutput: [
      "Successfully installed and accessed PostgreSQL.",
      "Created the sqlda database.",
      "Imported the sample database from data.dump.",
      "Executed basic SQL queries using SELECT and LIMIT.",
      "Identified key tables in the sample database.",
      "Developed an initial understanding of how relational databases organize data into tables, rows, and columns.",
    ],
    notes: [
      "Use the standard semicolon ; at the end of SQL statements. PostgreSQL meta-commands such as \\c and \\i do not need a semicolon.",
      "If the import command does not work, check whether the file path to data.dump is correct.",
      "If your file path contains spaces, keep the path inside single quotation marks.",
      "If a table returns no rows, it may be an empty table.",
      "If a table returns fewer than 20 rows, it means the table contains fewer records than the limit specified in the query.",
      "Students should keep a copy of their SQL commands because the same sqlda database will be used in later weeks.",
    ],
  },
  "Week 2": {
    title: "Week 2 Practice Exercise",
    subtitle: "Creating Tables with Solid Structures",
    meta: [
      ["Course", "Business Data Management / SQL for Data Analytics"],
      ["Week", "2"],
      ["Topic", "Creating Tables, Data Types, Constraints, Insert, and Drop"],
      ["Estimated Time", "90-120 minutes"],
      ["Book Source", "SQL for Data Analytics, Fourth Edition, Chapter 2"],
      ["Code Source", "Chapter 02 Sample SQL.txt, Exercise 02.01.txt, Exercise 02.02.txt, Exercise 02.03.txt, Actitivty 02.txt"],
    ],
    objectives: [
      "Create tables from existing query results and from explicit table definitions.",
      "Describe table columns and inspect data types using psql and information_schema.",
      "Understand common SQL data types used for business data.",
      "Insert single and multiple records into a table.",
      "Copy rows from an existing table into a new table.",
      "Drop temporary practice tables safely after completing the exercise.",
    ],
    tools: [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported from Week 1.",
      "Book code folder: Chapter 02.",
      "Basic knowledge of SELECT, LIMIT, CREATE TABLE, INSERT, and DROP TABLE.",
    ],
    preNote: "Students should complete Week 1 first because Chapter 2 uses the sqlda database and its products/customers tables.",
    referenceCode: {
      title: "Chapter 02 Sample SQL Reference",
      source: "Chapter 02/Chapter 02 Sample SQL.txt",
      note: "This is the chapter-level sample code file from the book repository. Some characters are kept exactly as they appear in the file.",
      code: `-- # Table Creation
-- ## Creating Tables with SELECT

CREATE TABLE {table_name} AS (
    {select_query}
);


SELECT * FROM products LIMIT 5;

CREATE TABLE first_products_sample AS ( 
    SELECT * FROM products LIMIT 5
);

SELECT * FROM first_products_sample;

SELECT * 
INTO second_products_sample
FROM products LIMIT 5;

-- ## Describing Columns
\\d first_products_sample

SELECT COLUMN_NAME, DATA_TYPE, ORDINAL_POSITION 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'first_products_sample';

-- # Basic Data Types of SQL

-- # Create Table with Explicit Definition
-- ## Creating Blank Tables
CREATE TABLE {table_name} (
  {column_name_1} {data_type_1} {column_constraint_1},
  {column_name_2} {data_type_2} {column_constraint_2},
  {column_name_3} {data_type_3} {column_constraint_3},
  â€¦
);

CREATE TABLE employees (
    employee_name VARCHAR(100),
    salary NUMERIC(12,2ï¼‰
);

SELECT * FROM employees;

-- ## Column Constraints and Table Constraints

CREATE TABLE employees (
    employee_name VARCHAR(100) NOT NULL,
    employee_ssn CHAR(9) UNIQUE,
    salary NUMERIC(12,2ï¼‰CHECK (salary > 0),
    employee_vacation INTEGER DEFAULT 20
);

CREATE TABLE employees (
  employee_name VARCHAR(100) NOT NULL,
  employee_ssn CHAR(9) UNIQUE,
  salary NUMERIC(12,2),
  bonus NUMERIC(12,2),
  employee_vacation INTEGER DEFAULT 20,
  CHECK (salary + bonus > 0),
  CHECK (employee_vacation > 0)
);

CREATE TABLE employees (
  employee_name VARCHAR(100),
  employee_ssn CHAR(9) PRIMARY KEY,
  salary NUMERIC(12,2)
);

CREATE TABLE employee_dependents (
  employee_ssn CHAR(9),
  employee_dependent_name VARCHAR(100),
  PRIMARY KEY (employee_ssn, employee_dependent_name)
);

CREATE TABLE sales (
  sales_order_id integer,
  product_id integer 
    REFERENCES products (product_id),
  customer_id integer 
    REFERENCES customers (customer_id),
  sales_amount money
);

-- ## Insert Values into Table
INSERT INTO {table_name} ({column_1], {column_2}, â€¦)
VALUES ({column_value_1}, {column_value_2}, â€¦ );

INSERT INTO products_new (
  product_id, model, year, product_type, base_msrp,
  production_start_date, production_end_date
) VALUES (
  13, 'Nimbus 5000', 2017, 'scooter', 500.00,
  '2017-03-03', '2023-03-03'
);

INSERT INTO products_new (
  product_id, model, year, product_type, base_msrp,
  production_start_date, production_end_date
) VALUES 
(
  14, 'Nimbus 6000', 2017, 'scooter', 600.00,
  '2017-04-03', '2023-04-03'
),
(
  15, 'Nimbus 7000', 2017, 'scooter', 700.00,
  '2017-05-03', '2023-05-03'
);

INSERT INTO {table_name} ({column_1], {column_2}, â€¦}
{select_query};

INSERT INTO products_new ( 
    product_id, model, year, product_type, base_msrp,
    production_start_date, production_end_date
) 
SELECT * 
FROM products;

-- # Dropping Tables
DROP TABLE {table_name};

DROP TABLE products_new;

DROP TABLE IF EXISTS products_new;`,
    },
    exercises: [
      {
        title: "Exercise 2.1: Creating and Populating Tables",
        source: "Textbook Chapter 2, p. 41; repository file Chapter 02/Exercise 02.01.txt",
        objective: "This exercise helps students inspect an existing table and create new product tables using explicit definitions and CREATE TABLE AS.",
        instructions: [
          "Connect to the sqlda database.",
          "Describe the products table.",
          "Create a new blank table named products_new with the same major columns and data types.",
          "Create another table named products_new_2 from the existing products table.",
          "Confirm that both new tables exist.",
        ],
        codeBlocks: [
          `-- Step 2
\\d products

-- Step 3
CREATE TABLE products_new ( 
  product_id            bigint,
  model                 text,
  year                  bigint,
  product_type          text, 
  base_msrp             numeric,
  production_start_date timestamp,
  production_end_date   timestamp
);

-- Step 4
CREATE TABLE products_new_2 as 
SELECT * FROM products;`,
        ],
        questions: [
          "What information does \\d products show?",
          "What is the difference between products_new and products_new_2?",
          "Why might an analyst create a copy of a table before experimenting?",
          "Which columns in products look most useful for product performance analysis?",
        ],
      },
      {
        title: "Exercise 2.2: Populating a Table",
        source: "Textbook Chapter 2, p. 44; repository file Chapter 02/Exercise 02.02.txt",
        objective: "This exercise helps students insert new product rows and copy existing rows from one table to another.",
        instructions: [
          "Insert three new scooter products into products_new.",
          "Insert all rows from products into products_new.",
          "Query products_new to review the inserted rows.",
          "Compare rows inserted manually with rows copied from the existing products table.",
        ],
        codeBlocks: [
          `-- Step 2
INSERT INTO products_new (
  product_id, model, year, product_type,base_msrp,
  production_start_date, production_end_date
) VALUES 
( 13, 'Nimbus 5000', 2017, 'scooter', 500.00,
  '2017-03-03', '2023-03-03'),
( 14, 'Nimbus 6000', 2017, 'scooter', 600.00,
  '2017-04-03', '2023-04-03'),
( 15, 'Nimbus 7000', 2017, 'scooter', 700.00,
  '2017-05-03', '2023-05-03');

-- Step 3
INSERT INTO products_new (
  product_id, model, year, product_type,base_msrp,
  production_start_date, production_end_date
)
SELECT * FROM products; 

-- Step 4
SELECT * FROM products_new;`,
        ],
        questions: [
          "How many rows were inserted manually?",
          "What does INSERT INTO ... SELECT * FROM products do?",
          "Why should the column order match when inserting from SELECT *?",
          "What business meaning could the new Nimbus products represent?",
        ],
      },
      {
        title: "Exercise 2.3: Deleting an Unnecessary Table",
        source: "Textbook Chapter 2, p. 46; repository file Chapter 02/Exercise 02.03.txt",
        objective: "This exercise helps students remove temporary tables and understand what happens after a table is dropped.",
        instructions: [
          "Drop the products_new table.",
          "Drop products_new_2 only if it exists.",
          "Try to query products_new after dropping it.",
          "Observe the error or result and explain why it happens.",
        ],
        codeBlocks: [
          `-- Step 2
DROP TABLE products_new;

DROP TABLE IF EXISTS products_new_2;

-- Step 3
SELECT * FROM products_new;`,
        ],
        questions: [
          "What is the difference between DROP TABLE and DROP TABLE IF EXISTS?",
          "What happens when you query a table after it has been dropped?",
          "Why should temporary practice tables be removed after use?",
        ],
      },
      {
        title: "Activity 2: Customer Segment Practice Table",
        source: "Textbook Chapter 2 Activity 2, p. 47; repository file Chapter 02/Actitivty 02.txt",
        objective: "This activity asks students to create safe working copies and a simple customer segment table for a business request.",
        instructions: [
          "Create customers_copy as a complete copy of customers.",
          "Create customer_segment with the fields specified in the activity.",
          "Insert the sample customer segment.",
          "Review the value in customer_segment.",
          "Drop the temporary tables after finishing the activity.",
        ],
        codeBlocks: [
          `-- To ensure that this study will not impact the everyday 
-- activities in the production system, they would like to 
-- use a new table customers_copy which is a complete copy 
-- of the existing customers table, instead of directly 
-- running queries against the production customers table. 
CREATE TABLE customers_copy AS (
  SELECT * FROM customers
);


-- They also want to create a new table called 
-- customer_segment, which contains the following 3 fields:
-- customer_segment_id: An integer number that comes from 
-- the source system.
-- customer_segment_desc: A text field that contains up to 
-- 100 characters of the segment name, such as â€œ50 year 
-- old male with wife, kids, and petsâ€.
-- segment_creation_date: A date field indicating when the 
-- segment was created.
-- Please create this table 
CREATE TABLE customer_segment (
  customer_segment_id INTEGER,
  customer_segment_desc VARCHAR(100),
  segment_creation_date DATE
);

-- For now, the business user has only one sample segment 
-- with ID 1. The segment name is â€œ50 year old male with 
-- wife, kids, and petsâ€ and the creation date was 
-- 01/01/2025. Please insert the sample record into the 
-- table.
INSERT INTO customer_segment 
(customer_segment_id, customer_segment_desc, segment_creation_date) 
VALUES
(1, '50 year old male with wife, kids, and pets', '01/01/2025');

-- Review the value in the customer_segment table
SELECT * FROM customer_segment;

-- After you finish all these tasks, please drop both 
-- tables to save database storage.
DROP TABLE customers_copy;
DROP TABLE customer_segment;`,
        ],
        questions: [
          "Why does the business user want customers_copy instead of using customers directly?",
          "Which data type is used for customer_segment_desc, and why?",
          "Which command confirms that the inserted customer segment exists?",
          "Why should both temporary tables be dropped at the end?",
        ],
      },
    ],
    submission: [
      "SQL commands used in Exercises 2.1, 2.2, 2.3, and Activity 2.",
      "Screenshots or copied query outputs showing products_new, products_new_2, and customer_segment.",
      "Short answers to all questions in the exercises.",
      "One short explanation of why analysts use copied tables for experimentation.",
    ],
    expectedOutput: [
      "Created products_new using an explicit table definition.",
      "Created products_new_2 using CREATE TABLE AS SELECT.",
      "Inserted new product rows and copied existing products into products_new.",
      "Dropped temporary tables after completing the exercise.",
      "Created and reviewed a customer_segment table for a business segmentation request.",
    ],
    notes: [
      "Run Week 2 exercises inside the sqlda database.",
      "Temporary practice tables should be dropped after the exercise unless the instructor asks you to keep them.",
      "If a CREATE TABLE command fails because the table already exists, drop the old practice table or use a new table name.",
      "Some repository text contains encoding artifacts; keep the source visible, but use standard SQL characters when executing queries if needed.",
    ],
  },
};

if (window.chapterWorkbooks) {
  Object.assign(workbooks, window.chapterWorkbooks);
}

function renderOutcomeList(selector, list) {
  if (!document.querySelector(selector)) return;

  document.querySelector(selector).innerHTML = list
    .map(
      outcome => `
        <article class="outcome-card">
          <span>${outcome.code}</span>
          <p>${outcome.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderTopics() {
  if (!document.querySelector("#topicGrid")) return;

  document.querySelector("#topicGrid").innerHTML = topics
    .map(
      topic => `
        <article class="topic-card">
          <span>${topic.number}</span>
          <h3>${topic.title}</h3>
          <ul>${topic.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderAssessments() {
  if (!document.querySelector("#assessmentGrid")) return;

  document.querySelector("#assessmentGrid").innerHTML = assessments
    .map(
      assessment => `
        <article class="assessment-card">
          <div>
            <span>${assessment.weight}</span>
            <small>${assessment.clo}</small>
          </div>
          <h3>${assessment.name}</h3>
          <p>${assessment.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderPracticeMapping() {
  if (!document.querySelector("#mappingTable")) return;

  const rows = practiceMapping
    .map(
      item => `
        <tr>
          <td><strong>${item.week}</strong></td>
          <td>${item.theory}</td>
          <td>${item.practice}</td>
          <td>${item.output}</td>
        </tr>
      `,
    )
    .join("");

  document.querySelector("#mappingTable").innerHTML = `
    <thead>
      <tr>
        <th>Week</th>
        <th>Theory Focus</th>
        <th>Selected Practice</th>
        <th>Lab Output</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

function renderPracticeMenu() {
  if (!document.querySelector("#practiceMenu")) return;

  document.querySelector("#practiceMenu").innerHTML = weeklyPractices
    .map(
      week => `
        <a href="${weekFile(week.week)}">
          <span>${week.week}</span>
          <small>${week.topic}</small>
        </a>
      `,
    )
    .join("");
}

function renderPracticeWeeks() {
  if (!document.querySelector("#practiceWeeks")) return;

  document.querySelector("#practiceWeeks").innerHTML = weeklyPractices
    .map(
      week => `
        <section class="practice-week" id="${slugify(week.week)}">
          <div class="practice-week-heading">
            <div>
              <span>${week.week}</span>
              <h3>${week.topic}</h3>
            </div>
            <a class="text-link" href="${weekFile(week.week)}">Open week page</a>
          </div>
          <div class="practice-card-list">
            ${week.practices.map(renderPracticeCard).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderCurrentWeek() {
  const target = document.querySelector("#weekDetail");
  if (!target) return;

  const weekName = document.body.dataset.week;
  const workbookName = document.body.dataset.workbook;
  if (workbookName) {
    renderWorkbookPage(target, workbookName);
    return;
  }

  const week = weeklyPractices.find(item => item.week === weekName);
  if (!week) {
    target.innerHTML = "<p>Practice week not found.</p>";
    return;
  }

  document.title = `${week.week} Practice - MIS 443`;
  target.innerHTML = `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">${week.week}</p>
        <h1>${week.topic}</h1>
        <p class="hero-text">Detailed practice activities for this week, aligned with the MIS 443 syllabus and selected Packt textbook sections.</p>
      </div>
    </section>
    <section class="content-band">
      <div class="week-nav">
        <a class="text-link" href="practice.html">Back to Practice Mapping</a>
        <a class="text-link" href="dataset.html">Dataset Guide</a>
        <a class="text-link" href="tools.html">Tools Setup</a>
      </div>
      ${renderWorkbook(weekName)}
    </section>
  `;
}

function renderWorkbookPage(target, workbookName) {
  const workbook = workbooks[workbookName];
  if (!workbook) {
    target.innerHTML = "<p>Workbook not found.</p>";
    return;
  }

  document.title = `${workbookName} Practice - MIS 443`;
  target.innerHTML = `
    <section class="page-hero compact">
      <div>
        <p class="eyebrow">${workbookName}</p>
        <h1>${workbook.subtitle}</h1>
        <p class="hero-text">Workbook-style practice page generated from the chapter code files and aligned with SQL for Data Analytics, Fourth Edition.</p>
      </div>
    </section>
    <section class="content-band">
      <div class="week-nav">
        <a class="text-link" href="practice.html">Back to Practice Mapping</a>
        <a class="text-link" href="dataset.html">Dataset Guide</a>
        <a class="text-link" href="tools.html">Tools Setup</a>
      </div>
      ${renderWorkbook(workbookName)}
    </section>
  `;
}

function renderChapterPracticeLinks() {
  const target = document.querySelector("#chapterPracticeLinks");
  if (!target) return;

  const chapterLinks = [
    {
      key: "Chapter 01",
      href: "week-1.html",
      title: "Chapter 1: Introduction to Data Management Systems",
      source: "SQL for Data Analytics, Fourth Edition, Chapter 1",
    },
    {
      key: "Chapter 02",
      href: "week-2.html",
      title: "Chapter 2: Creating Tables with Solid Structures",
      source: "SQL for Data Analytics, Fourth Edition, Chapter 2",
    },
    ...Object.keys(workbooks)
      .filter(key => key.startsWith("Chapter "))
      .sort((a, b) => Number(a.split(" ")[1]) - Number(b.split(" ")[1]))
      .map(key => {
        const chapterNo = key.split(" ")[1].padStart(2, "0");
        return {
          key,
          href: `chapter-${chapterNo}.html`,
          title: `${key}: ${workbooks[key].subtitle}`,
          source: workbooks[key].meta.find(row => row[0] === "Book Source")?.[1] || "",
        };
      }),
  ];

  target.innerHTML = chapterLinks
    .map(item => {
      return `
        <a href="${item.href}">
          <h3>${item.title}</h3>
          <p>${item.source}</p>
        </a>
      `;
    })
    .join("");
}

function renderWorkbook(weekName) {
  const workbook = workbooks[weekName];
  if (!workbook) return "";

  return `
    <article class="workbook">
      <div class="workbook-title">${workbook.title}</div>
      <div class="workbook-subtitle">${workbook.subtitle}</div>
      <table class="workbook-meta">
        <tbody>
          ${workbook.meta.map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`).join("")}
        </tbody>
      </table>

      <h2>1. Learning Objectives</h2>
      <p>After completing this practice exercise, students should be able to:</p>
      <ul>${workbook.objectives.map(item => `<li>${item}</li>`).join("")}</ul>

      <h2>2. Required Tools and Files</h2>
      <p>Before starting this exercise, students must prepare:</p>
      <ul>${workbook.tools.map(item => `<li>${linkify(item)}</li>`).join("")}</ul>
      <p>${workbook.preNote}</p>
      ${workbook.referenceCode ? renderWorkbookReferenceCode(workbook.referenceCode) : ""}

      ${workbook.exercises.map(renderWorkbookExercise).join("")}

      <h2>3. Submission Requirements</h2>
      <p>Students must submit one file containing:</p>
      <ul>${workbook.submission.map(item => `<li>${item}</li>`).join("")}</ul>

      <h2>4. Expected Output</h2>
      <ul>${workbook.expectedOutput.map(item => `<li>${item}</li>`).join("")}</ul>

      <h2>5. Notes</h2>
      <ul>${workbook.notes.map(item => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function renderWorkbookReferenceCode(referenceCode) {
  return `
    <section class="workbook-reference">
      <h1>${referenceCode.title}</h1>
      <div class="source-file workbook-source">
        <strong>Source</strong>
        <span>${referenceCode.source}</span>
      </div>
      <p>${referenceCode.note}</p>
      <pre><code>${escapeHtml(referenceCode.code)}</code></pre>
    </section>
  `;
}

function renderWorkbookExercise(exercise) {
  return `
    <section class="workbook-exercise">
      <h1>${exercise.title}</h1>
      <div class="source-file workbook-source">
        <strong>Source</strong>
        <span>${exercise.source}</span>
      </div>
      <h2>Objective</h2>
      <p>${exercise.objective}</p>
      <h2>Instructions</h2>
      <ol>${exercise.instructions.map(item => `<li>${linkify(item)}</li>`).join("")}</ol>
      ${exercise.codeBlocks.map(code => `<pre><code>${escapeHtml(code)}</code></pre>`).join("")}
      <h2>Questions</h2>
      <ol>${exercise.questions.map(item => `<li>${item}</li>`).join("")}</ol>
    </section>
  `;
}

function linkify(value) {
  return String(value).replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noreferrer">$1</a>',
  );
}

function renderPracticeCard(practice) {
  const theory = theoryNotes[practice.title];
  const adaptation = exerciseAdaptations[practice.title];

  return `
    <article class="practice-card">
      <div class="practice-card-header">
        <div>
          <span>${practice.source}</span>
          <h4>${practice.title}</h4>
        </div>
        <small>${practice.tables.length} tables</small>
      </div>
      <div class="page-reference">
        <strong>Chapter / Pages</strong>
        <span>${practice.pageRef}</span>
      </div>
      <p>${practice.objective}</p>
      ${theory ? renderTheoryBlock(theory) : ""}
      ${adaptation ? renderExerciseAdaptation(adaptation) : ""}
      <div class="practice-detail-grid">
        <div>
          <h5>Dataset / Tables</h5>
          <div class="tag-list">${practice.tables.map(table => `<span>${table}</span>`).join("")}</div>
        </div>
        <div>
          <h5>Diagram</h5>
          <div class="mini-diagram">${practice.diagram.map(item => `<code>${item}</code>`).join("")}</div>
        </div>
      </div>
      <div class="practice-questions">
        <h5>Questions</h5>
        <ol>${practice.questions.map(question => `<li>${question}</li>`).join("")}</ol>
      </div>
      <div class="hint-output">
        <div>
          <h5>Hint</h5>
          <p>${practice.hint}</p>
        </div>
        <div>
          <h5>Sample Output</h5>
          <p>${practice.output}</p>
        </div>
      </div>
    </article>
  `;
}

function renderExerciseAdaptation(adaptation) {
  return `
    <section class="exercise-adaptation">
      <div class="exercise-adaptation-heading">
        <div>
          <h5>Textbook Exercise Adaptation</h5>
          <p>${adaptation.source}, ${adaptation.pages}</p>
        </div>
      </div>
      <p>${adaptation.objective}</p>
      ${adaptation.exerciseItems ? renderExerciseItems(adaptation.exerciseItems) : renderSingleAdaptation(adaptation)}
    </section>
  `;
}

function renderExerciseItems(items) {
  return `
    <div class="exercise-item-list">
      ${items.map(item => `
        <article class="exercise-item">
          <div class="exercise-item-heading">
            <div>
              <span>${item.id} • ${item.page}</span>
              <h6>${item.title}</h6>
            </div>
          </div>
          <div class="source-file">
            <strong>Book Code File</strong>
            <span>${item.sourceFile}</span>
          </div>
          <p>${item.goal}</p>
          <div class="adaptation-grid">
            <div>
              <h6>Compact Steps</h6>
              <ol>${item.steps.map(step => `<li>${step}</li>`).join("")}</ol>
            </div>
            <div>
              <h6>Hint</h6>
              <p>${item.hint}</p>
              <h6>Expected Output</h6>
              <p>${item.output}</p>
            </div>
          </div>
          <div class="code-output-grid">
            <div>
              <h6>Code / Command</h6>
              <pre><code>${escapeHtml(item.code)}</code></pre>
            </div>
            <div>
              <h6>Result Check</h6>
              <pre><code>${escapeHtml(item.output)}</code></pre>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSingleAdaptation(adaptation) {
  return `
    <div class="adaptation-grid">
      <div>
        <h6>Adapted Steps</h6>
        <ol>${adaptation.steps.map(step => `<li>${step}</li>`).join("")}</ol>
      </div>
      <div>
        <h6>Visual Note</h6>
        <p>${adaptation.visualNote}</p>
        <h6>Expected Output</h6>
        <p>${adaptation.expectedOutput}</p>
      </div>
    </div>
    <div class="code-output-grid">
      <div>
        <h6>Practice Code</h6>
        <pre><code>${escapeHtml(adaptation.sampleCode)}</code></pre>
      </div>
      <div>
        <h6>Expected Result</h6>
        <pre><code>${escapeHtml(adaptation.expectedOutput)}</code></pre>
      </div>
    </div>
  `;
}

function renderTheoryBlock(theory) {
  return `
    <section class="theory-block">
      <div class="theory-heading">
        <h5>Theory for Practice</h5>
        <span>Book-aligned summary</span>
      </div>
      <div class="theory-grid">
        <div>
          <h6>Key Definitions</h6>
          <ul>${theory.definitions.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h6>Code Meaning</h6>
          <ul>${theory.codeMeaning.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="code-output-grid">
        <div>
          <h6>Sample Code</h6>
          <pre><code>${escapeHtml(theory.sampleCode)}</code></pre>
        </div>
        <div>
          <h6>Sample Output</h6>
          <pre><code>${escapeHtml(theory.sampleOutput)}</code></pre>
        </div>
      </div>
    </section>
  `;
}

function slugify(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

function weekFile(value) {
  return `${slugify(value)}.html`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

renderOutcomeList("#knowledgeOutcomes", outcomes.knowledge);
renderOutcomeList("#skillOutcomes", outcomes.skills);
renderOutcomeList("#responsibilityOutcomes", outcomes.responsibility);
renderTopics();
renderAssessments();
renderPracticeMapping();
renderPracticeMenu();
renderPracticeWeeks();
renderCurrentWeek();
renderChapterPracticeLinks();
