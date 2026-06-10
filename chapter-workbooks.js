window.chapterWorkbooks = {
  "Chapter 03": {
    "title": "Chapter 3 Practice Exercise",
    "subtitle": "Exchanging Data Using COPY",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "3"
      ],
      [
        "Topic",
        "Exchanging Data Using COPY"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 3 (Book pp. 49-63)"
      ],
      [
        "Code Source",
        "Chapter 03 Sample SQL.txt, Exercise 03.01.txt, Actitivty 03.txt"
      ]
    ],
    "objectives": [
      "Exporting and importing PostgreSQL data for ETL and reporting workflows.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 03.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 03.01: Chapter 3 Practice",
        "source": "Textbook Chapter 3, p. 58; repository file Chapter 03/Exercise 03.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 03/Exercise 03.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCOPY \n(SELECT * FROM customers) \nTO 'c:\\Users\\Public\\customer_details.csv' \nWITH CSV HEADER DELIMITER ',';"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 03: Exchanging Data Using COPY",
        "source": "Textbook Chapter 3, p. 63; repository file Chapter 03/Actitivty 03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 03/Actitivty 03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Save the data in the salespeople table using COPY\nCOPY salespeople\nTO 'c:\\Users\\Public\\salespeople.csv' \nWITH CSV HEADER DELIMITER ',';\n\n-- Now, open this CSV file with your favorite text editor\n-- Keep the first 10 rows and delete the rest of salespeople\n-- Change the names of the salespeople to hash code such as #$%&*\n-- Save the file\n\n-- Create the salespeople_sample table to receive data\nCREATE TABLE salespeople_sample (\n  salesperson_id   INTEGER,\n  dealership_id    INTEGER,\n  title            TEXT,\n  first_name       TEXT,\n  last_name        TEXT,\n  suffix           TEXT,\n  username         TEXT,\n  gender           TEXT,\n  hire_date        TIMESTAMP,\n  termination_date TIMESTAMP\n);\n\n-- Load the data in the new CSV file into a new table\nCOPY salespeople_sample \nFROM 'c:\\Users\\Public\\salespeople.csv' \nCSV HEADER;\n\n-- Confirm the change to names have been applied\nSELECT * FROM salespeople_sample;\n\n-- After you finish all these tasks, please drop both \n-- tables to save database storage.\nDROP TABLE salespeople_sample;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 03 Sample Code Reference",
      "source": "Chapter 03/Chapter 03 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Exporting Data from PostgreSQL Database\n-- ## The COPY Command\nCOPY (\n  SELECT * FROM products LIMIT 5\n) \nTO STDOUT \nWITH CSV HEADER;\n\nCOPY (\n  SELECT * FROM products LIMIT 5\n) \nTO 'c:\\Users\\Public\\my_file.csv' \nWITH CSV HEADER;\n\n-- ## \\COPY in psql\n\\COPY (SELECT * FROM products LIMIT 5) TO 'c:\\Users\\Public\\my_file_local.csv' WITH CSV HEADER; \n\n-- ## onfiguring COPY and \\COPY\nCOPY { table_name | ( query ) }\n    TO { 'filename' | STDOUT }\n    [ [ WITH ] ( option [, ...] ) ]\n\n\\COPY products TO 'c:\\Users\\Public\\my_file.csv' WITH CSV HEADER DELIMITER '|' NULL '' QUOTE '\"'\n\n-- # Importing Data into PostgreSQL Database\n-- ## Using COPY and \\COPY to Bulk Upload Data to Your Database\nCREATE TABLE products_csv (\n  product_id            bigint,\n  model                 text,\n  year                  bigint,\n  product_type          text, \n  base_msrp             numeric,\n  production_start_date timestamp,\n  production_end_date   timestamp\n);\n\n\\COPY products_csv FROM 'c:\\Users\\Public\\my_file.csv' CSV HEADER DELIMITER '|'"
    }
  },
  "Chapter 04": {
    "title": "Chapter 4 Practice Exercise",
    "subtitle": "Manipulating Data with Python",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "4"
      ],
      [
        "Topic",
        "Manipulating Data with Python"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 4 (Book pp. 65-80)"
      ],
      [
        "Code Source",
        "Chapter 04 Sample python code.py, Exercise 04.01.py, Exercise 04.02.py, Actitivty 04.py"
      ]
    ],
    "objectives": [
      "Connecting PostgreSQL with Python, SQLAlchemy, and pandas.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 04.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 04.01: Chapter 4 Practice",
        "source": "Textbook Chapter 4, p. 67; repository file Chapter 04/Exercise 04.01.py",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 04/Exercise 04.01.py.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "# Step 5\nimport psycopg2\nconn = psycopg2.connect(\n        host=\"localhost\", \n        user=\"postgres\", \n        password=\"my_password\", \n        dbname=\"sqlda\", \n        port=5432\n) \n\n# Step 6\ncur = conn.cursor() \ncur.execute(\"SELECT * FROM customers LIMIT 2\") \nrecords = cur.fetchall()\nprint(records)"
        ],
        "questions": [
          "What does this Python code do with the database or DataFrame?",
          "Which connection, table, or file path values must be changed for your machine?",
          "What output confirms that the code ran successfully?"
        ]
      },
      {
        "title": "Exercise 04.02: Chapter 4 Practice",
        "source": "Textbook Chapter 4, p. 76; repository file Chapter 04/Exercise 04.02.py",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 04/Exercise 04.02.py.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "# Step 2\nfrom sqlalchemy import create_engine, text\nimport pandas as pd\n\n# Step 3\ncnxn_string = (\n\"postgresql+psycopg2://{username}:{pswd}@{host}:{port}/{database}\"\n)\n\nengine = create_engine(\n    cnxn_string.format( \n        username=\"postgres\", \n        pswd=\"my_password\",\n        host=\"localhost\", \n        port=5432, \n        database=\"sqlda\"\n    )\n)\n\nquery = \"SELECT * FROM customers\"\ncustomer_data = pd.read_sql_query(query, engine) \ncustomer_data.head()\n\n# Step 4\ncustomer_per_state = \\\n  customer_data[['state', 'customer_id']] \\\n    .groupby('state').count()\ncustomer_per_state.head(3)\n\n# Step 5\n%matplotlib inline\n\n# Step 6\nimport matplotlib.pyplot as plt\ncustomer_per_state.plot(kind='bar')\nplt.show()\n\n# Step 7\ncustomer_per_state.to_sql(\n    'customer_per_state', \n    engine, \n    if_exists='replace'\n)\n\n# Step 8: SQL scripts to be run in psql\n'''\nSELECT * FROM customer_per_state LIMIT 5;\nDROP TABLE customer_per_state;\n'''"
        ],
        "questions": [
          "What does this Python code do with the database or DataFrame?",
          "Which connection, table, or file path values must be changed for your machine?",
          "What output confirms that the code ran successfully?"
        ]
      },
      {
        "title": "Activity 04: Manipulating Data with Python",
        "source": "Textbook Chapter 4, p. 79; repository file Chapter 04/Actitivty 04.py",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 04/Actitivty 04.py.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "# Import required modules\nfrom sqlalchemy import create_engine, text\nimport pandas as pd\n\n# Setup connection to the server\ncnxn_string = (\n\"postgresql+psycopg2://{username}:{pswd}@{host}:{port}/{database}\"\n)\nengine = create_engine(\n    cnxn_string.format( \n        username=\"postgres\", \n        pswd=\"my_password\",\n        host=\"localhost\", \n        port=5432, \n        database=\"sqlda\"\n    )\n)\n\n# Fetch products table data\nquery = \"SELECT * FROM products\"\nproducts_data = pd.read_sql_query(query, engine) \n\n# Confirm data is properly loaded\nproducts_data.head(12)\n\n# Filter products started in 2024\nproducts_2024 = products_data[products_data['production_start_date'].dt.year == 2024]\n\n# Confirm the data has been properly filtered\nproducts_2024.head()\n\n# Save the data to a products_2024 table\nproducts_2024.to_sql(\n    'products_2024', \n    engine, \n    if_exists='replace'\n)\n\n# SQL used for validating table creation in the database\n'''\nSELECT * FROM products_2024;\nDROP TABLE products_2024;\n'''"
        ],
        "questions": [
          "What does this Python code do with the database or DataFrame?",
          "Which connection, table, or file path values must be changed for your machine?",
          "What output confirms that the code ran successfully?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 04 Sample Code Reference",
      "source": "Chapter 04/Chapter 04 Sample python code.py",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "# # Data Management using Python\n# ## Using Python with SQLAlchemy and pandas\nfrom sqlalchemy import create_engine, text\nimport pandas as pd\n\n%matplotlib inline\n\ncnxn_string = (\n    \"postgresql+psycopg2://{username}:{pswd}@{host}:{port}/{database}\"\n) \nprint(cnxn_string)\n\nengine = create_engine(\n    cnxn_string.format( \n        username=\"postgres\", \n        pswd=\"my_password\",\n        host=\"localhost\", \n        port=5432, \n        database=\"sqlda\"\n    )\n)\n\nwith engine.connect() as conn:\n  result = conn.execute(\n    text(\"SELECT * FROM customers LIMIT 2\")\n  ).fetchall()\nprint(result)\n\n# ## Reading and Writing to a Database with pandas\ncustomers_data = pd.read_sql_table('customers', engine)\n\ncustomers_data.head()"
    }
  },
  "Chapter 05": {
    "title": "Chapter 5 Practice Exercise",
    "subtitle": "Presenting Data with SELECT",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "5"
      ],
      [
        "Topic",
        "Presenting Data with SELECT"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 5 (Book pp. 83-102)"
      ],
      [
        "Code Source",
        "Chapter 05 Sample SQL.txt, Exercise 05.01.txt, Actitivty 05.txt"
      ]
    ],
    "objectives": [
      "Retrieving, filtering, sorting, and presenting data with SELECT.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 05.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 05.01: Chapter 5 Practice",
        "source": "Textbook Chapter 5, p. 98; repository file Chapter 05/Exercise 05.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 05/Exercise 05.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT * FROM customers LIMIT 3;\n\n-- Step 3\nSELECT first_name, last_name, date_added\nFROM customers\nORDER BY date_added DESC\nLIMIT 3;\n\n-- Step 4\nSELECT first_name, last_name, date_added\nFROM customers\nWHERE date_added IS NULL\nLIMIT 3;\n\n-- Step 5\nSELECT DISTINCT State\nFROM customers;\n\n-- Step 6\nSELECT first_name, last_name, state, date_added\nFROM customers\nWHERE state in ('CA', 'FL')\nAND date_added >= '01/01/2025'\nLIMIT 3;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 05: Presenting Data with SELECT",
        "source": "Textbook Chapter 5, p. 102; repository file Chapter 05/Actitivty 05.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 05/Actitivty 05.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Write a query that pulls all salespeople \n-- that were hired in 2024 and 2025 but have \n-- not been terminated, i.e., the hire_date \n-- must be later than 2024-01-01, and \n-- termination_date is null, ordered by hire \n-- date, latest first.\nSELECT * \nFROM salespeople \nWHERE hire_date >= '2024-01-01' \nAND termination_date IS NULL \nORDER BY hire_date DESC; \n\n-- Write a query that pulls all first names, \n-- last names, and emails for ZoomZoom \n-- customers in New York City in the state \n-- of New York. They should be ordered \n-- alphabetically, with the last name \n-- followed by the first name.\nSELECT first_name, last_name, email\nFROM customers \nWHERE city='New York City' AND state='NY'\nORDER BY last_name, first_name;\n\n-- Write a query that returns all customers \n-- with a phone number ordered by the date \n-- the customer was added to the database.\nSELECT * \nFROM customers \nWHERE phone IS NOT NULL \nORDER BY date_added;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 05 Sample Code Reference",
      "source": "Chapter 05/Chapter 05 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # SELECT Expressions\n-- ## SELECT … FROM\nSELECT * FROM <table_name>;\n\nSELECT product_id, model, base_msrp FROM products;\n\nSELECT 1 FROM products;\n\nSELECT model, base_msrp * 0.9 FROM products;\n\n-- ## Expression Alias\nSELECT model, base_msrp * 0.9 AS Discounted_Price\nFROM products;\n\nSELECT \n  Model Product_Name,\n  0.9 Discount, \n  base_msrp * 0.9 Discounted_Price\nFROM products;\n\n-- ## The LIMIT Clause\nSELECT * FROM products LIMIT 5;\n\n-- ## The ORDER BY Clause\nSELECT model, production_start_date \nFROM products \nORDER BY production_start_date\nLIMIT 5;\n\nSELECT model FROM products \nORDER BY production_start_date ASC;\n\nSELECT model FROM products \nORDER BY production_start_date DESC;\n\nSELECT product_id, model FROM products \nORDER BY product_id;\n\nSELECT product_id, model FROM products \nORDER BY 1;\n\nSELECT * FROM products \nORDER BY year DESC, base_msrp ASC;\n\nSELECT * FROM products \nORDER BY 3 DESC, 5 ASC;\n\n-- ## The DISTINCT and DISTINCT ON Functions\nSELECT DISTINCT model FROM products;\n\nSELECT DISTINCT year, product_type FROM products;\n\nSELECT DISTINCT ON (distinct_column)\ndistinct_column,\ncolumn_1,\ncolumn_2,\n…\nFROM table\nORDER BY order_column;\n\nSELECT DISTINCT ON (dealership_id) \n  dealership_id, first_name, last_name\nFROM salespeople\nORDER BY dealership_id , hire_date;\n\n-- # Filtering Query Result\nSELECT model FROM products \nWHERE year=2017;\n\n-- ## The AND/OR and NOT Clause\nSELECT model, year, base_msrp \nFROM products \nWHERE year=2017\nAND base_msrp<=1000;\n\nSELECT model, year, base_msrp \nFROM products \nWHERE year=2017\nOR base_msrp<=1000;\n\nSELECT * \nFROM products \nWHERE year > 2019\nAND year < 2021\nOR product_type='scooter';\n\nSELECT * \nFROM products \nWHERE (year>2019 AND year<2021) \nOR product_type='scooter';\n\nSELECT model, year, base_msrp \nFROM products \nWHERE NOT (year=2017 OR base_msrp<=1000);\n\nSELECT model, year \nFROM products \nWHERE year = 2017\nOR year = 2019 \nOR year = 2022;\n\nSELECT model, year \nFROM products \nWHERE year IN (2017, 2019, 2022);\n\nSELECT model, year \nFROM products \nWHERE year NOT IN (2017, 2019, 2022);\n\n-- ## The IS NULL/IS NOT NULL Clause\nSELECT model, production_end_date\nFROM products \nWHERE production_end_date IS NULL;\n\nSELECT *\nFROM products\nWHERE production_end_date IS NOT NULL;"
    }
  },
  "Chapter 06": {
    "title": "Chapter 6 Practice Exercise",
    "subtitle": "Transforming and Updating Data",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "6"
      ],
      [
        "Topic",
        "Transforming and Updating Data"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 6 (Book pp. 103-121)"
      ],
      [
        "Code Source",
        "Chapter 06 Sample SQL.txt, Exercise 06.01.txt, Exercise 06.02.txt, Exercise 06.03.txt, Actitivty 06.txt"
      ]
    ],
    "objectives": [
      "Updating data and using transformation functions for cleaning.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 06.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 06.01: Chapter 6 Practice",
        "source": "Textbook Chapter 6, p. 106; repository file Chapter 06/Exercise 06.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 06/Exercise 06.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCREATE TABLE products_2025 AS ( \n  SELECT * FROM products \n  WHERE year=2025\n);\n\n-- Step 3\nUPDATE Products_2025 \nSET base_msrp = base_msrp*1.10 \nWHERE model=’Model Chi’ \nAND year=2025;\n\n-- Step 4\nSELECT model, year, base_msrp \nFROM products_2025;\n\n-- Step 5\nDELETE FROM products_2025\nWHERE model = 'Lemon Zester';\n\n-- Step 6\nSELECT model, year, base_msrp \nFROM products_2025;\n\n-- Step 7\nDROP TABLE products_2025;\n\n-- Step 8\nSELECT * FROM products_2025;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 06.02: Chapter 6 Practice",
        "source": "Textbook Chapter 6, p. 112; repository file Chapter 06/Exercise 06.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 06/Exercise 06.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT \n  first_name || ' ' || last_name as Name,\n  hire_date, \n  EXTRACT(day FROM Current_Timestamp - hire_date) AS DaysServed\nFROM salespeople\nORDER BY DaysServed DESC\nLIMIT 3;\n\n-- Step 3\nSELECT\n  model, \n  CASE \n    WHEN production_end_date IS NULL THEN 'Active'\n    ELSE 'Inactive'\n  END\nFROM products;\n\n-- Step 5\nSELECT * FROM sales\nWHERE COALESCE(NULLIF(channel, 'dealership'), dealership_id::TEXT) IS NULL;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 06.03: Chapter 6 Practice",
        "source": "Textbook Chapter 6, p. 116; repository file Chapter 06/Exercise 06.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 06/Exercise 06.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCREATE FUNCTION longest_serving_salespeople(dealership INT) \nRETURNS numeric AS $serving$\nDECLARE salespersonid numeric;\nBEGIN\n  SELECT salesperson_id \n  FROM salespeople \n  INTO salespersonid\n  WHERE dealership_id = dealership\n  ORDER BY hire_date ASC\n  LIMIT 1;\nRETURN salespersonid;\nEND; $serving$\nLANGUAGE PLPGSQL;\n\n-- Step 3\nSELECT longest_serving_salespeople(1);\n\n-- Step 4\n\\df longest_serving_salespeople\n\n-- Step 5\n\\sf longest_serving_salespeople\n\n-- Step 6\nDROP FUNCTION longest_serving_salespeople;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 06: Transforming and Updating Data",
        "source": "Textbook Chapter 6, p. 120; repository file Chapter 06/Actitivty 06.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 06/Actitivty 06.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Duplicate the products table into a copy called products_new table.\nCREATE TABLE products_new AS \nSELECT * FROM products;\n\n-- Create the function to simulate the data cleansing process\nCREATE FUNCTION update_products() \nRETURNS TIMESTAMP AS $serving$\nBEGIN\n  -- a.\tAdd a column to the products_new table called last_update_date, \n  --    and populate the column with current date. \n  ALTER TABLE products_new \n  ADD COLUMN last_update_date DATE;\n\n  UPDATE products_new\n  SET last_update_date = CURRENT_DATE;\n\n  -- b.\tRemove products that have been discontinued (having a non NULL \n  --    production_end_date) and have a production_start_date earlier \n  --    than 2020\n  DELETE FROM products_new\n  WHERE EXTRACT(YEAR FROM production_start_date) < 2020\n  AND production_end_date IS NOT NULL;\n\n  -- c.\tIf the production_end_date column is NULL, replace with the \n  --    date 2999-01-01. \n  UPDATE products_new\n  SET production_end_date = '2999-01-01'\n  WHERE production_end_date IS NULL;\n\n  -- \n  RETURN CURRENT_TIMESTAMP;\nEND; $serving$\nLANGUAGE PLPGSQL;\n\n-- Run the function and check the value in the products_new table\nSELECT update_products();\nSELECT * FROM products_new;\n\n-- Drop the function and table to maintain database cleanness\nDROP FUNCTION update_products;\nDROP TABLE products_new;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 06 Sample Code Reference",
      "source": "Chapter 06/Chapter 06 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Updating Table Data\nUPDATE {table_name} SET \n    {column_1} = {column_value_1},\n    {column_2} = {column_value_2},\n    …\nWHERE {conditional};\n\nUPDATE Products SET\n  base_msrp = 299.99 \nWHERE product_type = 'scooter' \nAND year<2021;\n\nUPDATE Products SET\n  base_msrp = base_msrp * 0.9 \nWHERE product_type = 'scooter' \nAND year < 2021;\n\n-- ## Cleaning Data\nDELETE FROM {table_name}  \nWHERE {condition};\n\nDELETE FROM products\nWHERE product_type = 'scooter';\n\nDELETE FROM products;\n\nTRUNCATE TABLE products;\n\n-- # Data Transformation Functions\n-- ## The CASE WHEN Function\nCASE \n  WHEN condition1 THEN value1\n  WHEN condition2 THEN value2\n  …\n  ELSE else_value \nEND;\n\nSELECT \n  CASE \n    WHEN postal_code='33111' THEN 'Elite Customer'\n    WHEN postal_code='33124' THEN 'Premium Customer'\n    ELSE 'Standard Customer' \n  END AS customer_type\nFROM customers;\n\n-- ## Functions for Different Data Types\n-- ### The Casting Function\nSELECT 'Year of ' || year::TEXT\nFROM products;\n\n-- ## The NULL Handling Functions\n-- ### The COALESCE Function\nSELECT \n  first_name, last_name, \n  COALESCE(phone, 'NO PHONE') as phone\nFROM customers;\n\n-- ### The NULLIF Function\nSELECT customer_id,\n        NULLIF(title, 'Honorable') as title,\n        first_name, last_name\nFROM customers c;\n\n-- # User Defined Functions\nCREATE FUNCTION some_function_name (function_arguments)\nRETURNS return_type AS $return_name$\nDECLARE return_name return_type;\nBEGIN\n <function statements>;\nRETURN <some_value>;\nEND; $return_name$\nLANGUAGE PLPGSQL;\n\n-- ## The \\df and \\sf commands\n\\sf max_sale\n\n-- # Changing Table Definition\nALTER TABLE {table_name} ADD COLUMN {column_name} {data_type};\n\nALTER TABLE products ADD COLUMN weight INT;\n\nALTER TABLE {table_name} RENAME COLUMN {column_name} TO {new_column_name};\n\nALTER TABLE {table_name} RENAME TO {new_table_name};\n\nALTER TABLE {table_name} DROP COLUMN {column_name};\n\nALTER TABLE products DROP COLUMN weight;\n\nALTER TABLE products ALTER COLUMN year TYPE decimal(10, 0);"
    }
  },
  "Chapter 07": {
    "title": "Chapter 7 Practice Exercise",
    "subtitle": "Defining Datasets from Existing Datasets",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "7"
      ],
      [
        "Topic",
        "Defining Datasets from Existing Datasets"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 7 (Book pp. 123-143)"
      ],
      [
        "Code Source",
        "Chapter 07 Sample SQL.txt, Exercise 07.01.txt, Exercise 07.02.txt, Exercise 07.03.txt, Actitivty 07.txt"
      ]
    ],
    "objectives": [
      "Using subqueries, CTEs, views, joins, and set operations.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 07.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 07.01: Chapter 7 Practice",
        "source": "Textbook Chapter 7, p. 128; repository file Chapter 07/Exercise 07.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 07/Exercise 07.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT first_name, last_name, email\nFROM customers\nWHERE state IN (\n  SELECT state from dealerships\n);\n\n-- Step 3\nWITH c AS (\n  SELECT first_name, last_name, state, email\n  FROM customers\n  WHERE phone IS NOT NULL\n)\nSELECT first_name, last_name, email\nFROM c\nWHERE state IN (\n  SELECT state from dealerships\n);\n\n-- Step 4\nCREATE VIEW reachable_customer AS (\n  SELECT first_name, last_name, state, email\n  FROM customers\n  WHERE phone IS NOT NULL\n);\n\n-- Step 5\nSELECT first_name, last_name, email\nFROM reachable_customer\nWHERE state IN (\n  SELECT state from dealerships\n);\n\n-- Step 6\nDROP VIEW reachable_customer;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 07.02: Chapter 7 Practice",
        "source": "Textbook Chapter 7, p. 138; repository file Chapter 07/Exercise 07.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 07/Exercise 07.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT \n  c.customer_id, c.first_name, c.last_name, p.model\nFROM sales s\nINNER JOIN customers c \n  ON c.customer_id=s.customer_id\nINNER JOIN products p \n  ON p.product_id=s.product_id\nWHERE p.product_type='automobile'\n  AND c.phone IS NOT NULL;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 07.03: Chapter 7 Practice",
        "source": "Textbook Chapter 7, p. 141; repository file Chapter 07/Exercise 07.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 07/Exercise 07.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\n  SELECT first_name, last_name, \n    'Customer' as guest_type\n  FROM customers \n  WHERE city='Los Angeles' AND state='CA'\nUNION\n  SELECT first_name, last_name, \n'Employee' as guest_type\n  FROM salespeople s\n  INNER JOIN dealerships d \nON d.dealership_id=s.dealership_id\n  WHERE d.city='Los Angeles' AND d.state='CA';"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 07: Defining Datasets from Existing Datasets",
        "source": "Textbook Chapter 7, p. 143; repository file Chapter 07/Actitivty 07.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 07/Actitivty 07.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- The business users have been complaining that \n-- while they are able to see the sales data and \n-- see customer_id in the sales table, they have \n-- to pull data from the customers with ID filter \n-- to see the customer name. Can you run a query \n-- to return all columns of the customers table \n-- and the sales table combined, based on the \n-- criteria that the records from two tables \n-- belong to the same customer.\nSELECT s.*, c.*\nFROM sales s\nINNER JOIN customers c ON c.customer_id=s.customer_id;\n\n-- Now the user can see each customer's name with \n-- the sales figure. they want to see the columns \n-- from the customers table, products table, and \n-- sales table using one query. You should return \n-- all columns of the three tables.\nSELECT s.*, c.*, p.*\nFROM sales s\nINNER JOIN customers c ON c.customer_id=s.customer_id\nINNER JOIN products p ON p.product_id=s.product_id;\n\n-- It is known that internet sales does not have \n-- associated dealerships. To get a comprehensive \n-- view of sales, the business users want to see \n-- all columns from the sales table, together with \n-- all the columns from the dealerships table, if \n-- the sales belong to a certain dealership.\nSELECT s.*, d.*\nFROM sales s\nLEFT JOIN dealerships d \nON d.dealership_id=s.dealership_id;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 07 Sample Code Reference",
      "source": "Chapter 07/Chapter 07 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Derived Datasets\nSELECT dealership_id \nFROM dealerships \nWHERE state='CA';\n\nSELECT * FROM salespeople\nWHERE dealership_id in (2, 5);\n\nSELECT * FROM salespeople\nWHERE dealership_id in (\n  SELECT dealership_id \n  FROM dealerships \n  WHERE state='CA'\n);\n\nSELECT * FROM (\n  SELECT * FROM salespeople \n  WHERE termination_date IS NULL\n) AS s\nWHERE dealership_id IN (\n  SELECT dealership_id FROM dealerships\n  WHERE dealerships.state = 'CA'\n);\n\n-- ## Common Table Expression (CTE)\nWITH s AS (\n  SELECT * FROM salespeople \n  WHERE termination_date IS NULL\n)\nSELECT * FROM s\nWHERE dealership_id IN (\n  SELECT dealership_id FROM dealerships\n  WHERE dealerships.state = 'CA'\n);\n\n-- ## View\nCREATE VIEW active_salespeople AS (\n  SELECT * FROM salespeople \n  WHERE termination_date IS NULL\n);\n\nSELECT * FROM active_salespeople\nWHERE dealership_id IN (\n  SELECT dealership_id FROM dealerships\n  WHERE dealerships.state = 'CA'\n);\n\n-- # Joining Tables\n-- ## Inner Joins\nSELECT {columns}\nFROM {table1}\nINNER JOIN {table2} \n  ON {table1}.{common_key_1}={table2}.{common_key_2};\n\nSELECT *\nFROM salespeople\nINNER JOIN dealerships\n  ON salespeople.dealership_id = dealerships.dealership_id;\n\nSELECT *\nFROM salespeople\nINNER JOIN dealerships\n  ON salespeople.dealership_id = dealerships.dealership_id\nWHERE dealerships.state = 'CA';\n\nSELECT salespeople.*\nFROM salespeople\nINNER JOIN dealerships\n  ON dealerships.dealership_id = salespeople.dealership_id\nWHERE dealerships.state = 'CA'\nORDER BY 1;\n\nSELECT s.*\nFROM salespeople s\nINNER JOIN dealerships d\n  ON d.dealership_id = s.dealership_id\nWHERE d.state = 'CA';\n\nSELECT s.*\nFROM salespeople AS s\nINNER JOIN dealerships AS d\n  ON d.dealership_id = s.dealership_id\nWHERE d.state = 'CA'\nORDER BY 1;\n\n-- ## Outer Joins\nSELECT *\nFROM customers c\nLEFT OUTER JOIN emails e \n  ON e.customer_id=c.customer_id\nORDER BY c.customer_id\nLIMIT 1000;\n\nSELECT *\nFROM customers c\nLEFT OUTER JOIN emails e \n  ON c.customer_id = e.customer_id\nWHERE e.customer_id IS NULL\nORDER BY c.customer_id\nLIMIT 1000;\n\nSELECT *\nFROM emails e\nRIGHT OUTER JOIN customers c \n  ON e.customer_id=c.customer_id\nORDER BY c.customer_id\nLIMIT 1000;\n\nSELECT *\nFROM emails e\nFULL OUTER JOIN customers c\n  ON e.customer_id=c.customer_id;\n\n-- ## Cross Joins\nSELECT \n  P1.product_id, p1.model, P2.product_id, p2.model\nFROM products p1 \nCROSS JOIN products p2;\n\n-- # Set Operations\n-- ## Unions\nSELECT street_address, city, state, postal_code\nFROM customers\nWHERE street_address IS NOT NULL;\n\nSELECT street_address, city, state, postal_code\nFROM dealerships\nWHERE street_address IS NOT NULL;\n\n  SELECT street_address, city, state, postal_code\n  FROM customers\n  WHERE street_address IS NOT NULL\nUNION\n  SELECT street_address, city, state, postal_code\n  FROM dealerships\n  WHERE street_address IS NOT NULL\n;\n\nSELECT * FROM products\nUNION\nSELECT * FROM products\nORDER BY 1;\n\nSELECT * FROM products\nUNION ALL\nSELECT * FROM products\nORDER BY 1;"
    }
  },
  "Chapter 08": {
    "title": "Chapter 8 Practice Exercise",
    "subtitle": "Aggregating Data with GROUP BY",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "8"
      ],
      [
        "Topic",
        "Aggregating Data with GROUP BY"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 8 (Book pp. 145-163)"
      ],
      [
        "Code Source",
        "Chapter 08 Sample SQL.txt, Exercise 08.01.txt, Exercise 08.02.txt, Exercise 08.03.txt, Actitivty 08.txt"
      ]
    ],
    "objectives": [
      "Creating business KPIs with aggregate functions, GROUP BY, and HAVING.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 08.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 08.01: Chapter 8 Practice",
        "source": "Textbook Chapter 8, p. 150; repository file Chapter 08/Exercise 08.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 08/Exercise 08.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT \n  MIN(base_msrp), \n  MAX(base_msrp), \n  AVG(base_msrp), \n  STDDEV(base_msrp)\nFROM products;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 08.02: Chapter 8 Practice",
        "source": "Textbook Chapter 8, p. 157; repository file Chapter 08/Exercise 08.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 08/Exercise 08.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT product_type, \n  MIN(base_msrp), \n  MAX(base_msrp), \n  AVG(base_msrp), \n  STDDEV(base_msrp)\nFROM products\nGROUP BY 1\nORDER BY 1;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 08.03: Chapter 8 Practice",
        "source": "Textbook Chapter 8, p. 162; repository file Chapter 08/Exercise 08.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 08/Exercise 08.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT state, COUNT(*)\nFROM customers\nGROUP BY state\nHAVING COUNT(*) >= 1000\nORDER BY state;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 08: Aggregating Data with GROUP BY",
        "source": "Textbook Chapter 8, p. 163; repository file Chapter 08/Actitivty 08.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 08/Actitivty 08.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- The business users would like to calculate \n-- the total number of sales the company has \n-- made in each dealership.\nSELECT dealership_id, SUM(sales_amount)\nFROM sales\nGROUP BY dealership_id;\n\n-- They also want to calculate the total sales \n-- amount in dollars for the state of New Jersey, \n-- California and Florida. The sales of each \n-- state should be reported separately.\nSELECT d.state, SUM(s.sales_amount)\nFROM sales s\nLEFT JOIN dealerships d \nON d.dealership_id=s.dealership_id\nWHERE d.state IN ('CA', 'FL', 'NJ')\nGROUP BY d.state;\n\n-- Finally, they would like to filter out the \n-- state where the total sales is less than \n-- $10MM ($10,000,000).\nSELECT d.state, SUM(s.sales_amount)\nFROM sales s\nLEFT JOIN dealerships d \nON d.dealership_id=s.dealership_id\nWHERE d.state IN ('CA', 'FL', 'NJ')\nGROUP BY d.state\nHAVING SUM(s.sales_amount) > 10000000;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 08 Sample Code Reference",
      "source": "Chapter 08/Chapter 08 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Aggregate Functions\nSELECT MAX(hire_date) FROM salespeople; \n\nSELECT COUNT(*) FROM customers WHERE state='CA';\n\nSELECT COUNT(*)/2 FROM customers;\n\nSELECT SUM(base_msrp)/COUNT(*) AS avg_base_msrp \nFROM Products;\n\nSELECT AVG(base_msrp) AS avg_base_msrp \nFROM Products;\n\nSELECT COUNT(customer_id) FROM customers;\n\nSELECT COUNT(*) FROM customers;\n\nSELECT COUNT (DISTINCT {column1}) FROM {table1};\n\nSELECT COUNT(DISTINCT state) FROM customers;\n\nSELECT \n  COUNT(customer_id)::numeric / COUNT(DISTINCT state)\n    AS Customer_per_state \nFROM customers;\n\nSELECT\n  COUNT(customer_id) / COUNT(DISTINCT state) \n    AS Customer_per_state \nFROM customers;\n\nSELECT \n  COUNT(customer_id) * 1.0 / COUNT(DISTINCT state) \nFROM customers;\n\n--  # GROUP BY Clause\nSELECT DISTINCT state FROM customers;\n\nSELECT COUNT(*) FROM customers \nWHERE state = '{state}';\n\n--  ## The GROUP BY Clause\nSELECT {KEY}, {AGGFUNC(column1)} \nFROM {table1} \nGROUP BY {KEY}\n\nSELECT state, COUNT(*) FROM customers GROUP BY state;\n\nSELECT TO_CHAR(date_added, 'YYYY'), COUNT(*) \nFROM customers \nGROUP BY TO_CHAR(date_added, 'YYYY');\n\nSELECT TO_CHAR(date_added, 'YYYY'), COUNT(*) \nFROM customers\nGROUP BY 1;\n\nSELECT state, COUNT(*) \nFROM customers \nGROUP BY state \nORDER BY state;\n\nSELECT state, COUNT(*) \nFROM customers \nGROUP BY 1\nORDER BY 1;\n\nSELECT state, COUNT(*) \nFROM customers \nGROUP BY state \nORDER BY COUNT(*) ASC;\n\nSELECT state, COUNT(*) \nFROM customers \nWHERE gender='M' \nGROUP BY state \nORDER BY State;\n\nSELECT state, gender, COUNT(*) \nFROM customers \nGROUP BY state, gender \nORDER BY state, gender;\n\n--  ## Grouping Sets\n  SELECT state, NULL as gender, COUNT(*)\n  FROM customers\n  GROUP BY 1, 2\nUNION ALL\n  SELECT state, gender, COUNT(*)\n  FROM customers\n  GROUP BY 1, 2;\n\nSELECT state, gender, COUNT(*)\nFROM customers\nGROUP BY GROUPING SETS (\n  (state), (state, gender)\n);\n\n--  ## Ordered Set Aggregates\nSELECT {ordered_set_function} \nWITHIN GROUP (ORDER BY {order_column})\nFROM {table};\n\nSELECT PERCENTILE_CONT(0.5) \nWITHIN GROUP (ORDER BY base_msrp) AS median\nFROM products;\n\n--  # HAVING Clause\nSELECT state, COUNT(*)\nFROM customers\nWHERE COUNT(*)>=1000\nGROUP BY state;\n\nSELECT {KEY}, {AGGFUNC(column1)}\nFROM {table1}\nWHERE {Original_dataset_Conditions}\nGROUP BY {KEY}\nHAVING {ANY_AGGFUNC(any_column)_Conditions}"
    }
  },
  "Chapter 09": {
    "title": "Chapter 9 Practice Exercise",
    "subtitle": "Inter-Row Operation with Window Functions",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "9"
      ],
      [
        "Topic",
        "Inter-Row Operation with Window Functions"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 9 (Book pp. 165-183)"
      ],
      [
        "Code Source",
        "Chapter 09 Sample SQL.txt, Exercise 09.01.txt, Exercise 09.02.txt, Actitivty 09.txt"
      ]
    ],
    "objectives": [
      "Using window functions for ranking, running totals, and moving calculations.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 09.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 09.01: Chapter 9 Practice",
        "source": "Textbook Chapter 9, p. 171; repository file Chapter 09/Exercise 09.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 09/Exercise 09.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT \n  customer_id, \n  date_added::DATE,\n  COUNT(\n    CASE \n      WHEN street_address IS NOT NULL THEN customer_id \n      ELSE NULL \n    END\n  ) OVER (ORDER BY date_added::DATE) \n    as non_null_add,\n  COUNT(*) OVER (ORDER BY date_added::DATE) \n    as total_add\nFROM customers\nORDER BY date_added;\n\n-- Step 3\nWITH daily_rolling_count as (\n  SELECT \n    customer_id, \n    date_added::DATE,\n    COUNT(\n      CASE \n        WHEN street_address IS NOT NULL \n          THEN customer_id \n        ELSE NULL \n      END\n) OVER (ORDER BY date_added::DATE) \n  AS non_null_add,\nCOUNT(*) OVER (ORDER BY date_added::DATE) \n  AS total_add\n  FROM customers\n)\nSELECT DISTINCT\n  date_added,\n  non_null_add,\n  total_add,\n  1 - 1.0 * non_null_add/total_add\n    AS null_address_percentage \nFROM daily_rolling_count\nORDER BY date_added DESC;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 09.02: Chapter 9 Practice",
        "source": "Textbook Chapter 9, p. 179; repository file Chapter 09/Exercise 09.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 09/Exercise 09.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nWITH \n  daily_sales as (\n    SELECT \n      sales_transaction_date::DATE,\n      SUM(sales_amount) as total_sales\n    FROM sales\n    GROUP BY 1\n  ),\n  sales_stats_30 AS (\n    SELECT \n      sales_transaction_date, \n      total_sales,\n      MAX(total_sales) OVER (\n        ORDER BY sales_transaction_date \n        ROWS BETWEEN 30 PRECEDING and 1 PRECEDING\n      ) AS max_sales_30\n    FROM daily_sales\n    ORDER BY 1\n  )\nSELECT \n  sales_transaction_date, \n  total_sales,\n  max_sales_30\nFROM \n  sales_stats_30\nWHERE\n  sales_transaction_date>='2021-12-31'; \n\nWITH \n  daily_sales as (\n    SELECT \n      sales_transaction_date::DATE,\n      SUM(sales_amount) as total_sales\n    FROM sales\n    GROUP BY 1\n  ),\n  sales_stats_30 AS (\n    SELECT \n      sales_transaction_date, \n      total_sales,\n      MAX(total_sales) OVER (\n        ORDER BY sales_transaction_date \n        ROWS BETWEEN 30 PRECEDING and 1 PRECEDING\n      ) AS max_sales_30\n    FROM \n      daily_sales\n    ORDER BY 1\n  )\nSELECT \n  sales_transaction_date, \n  total_sales,\n  max_sales_30\nFROM sales_stats_30\nWHERE total_sales > max_sales_30 \nAND sales_transaction_date>='2021-12-31';\n\n\n-- Step 3\nWITH daily_rolling_count as (\n  SELECT \n    customer_id, \n    date_added::DATE,\n    COUNT(\n      CASE \n        WHEN street_address IS NOT NULL \n          THEN customer_id \n        ELSE NULL \n      END\n) OVER (ORDER BY date_added::DATE) \n  AS non_null_add,\nCOUNT(*) OVER (ORDER BY date_added::DATE) \n  AS total_add\n  FROM customers\n)\nSELECT DISTINCT\n  date_added,\n  non_null_add,\n  total_add,\n  1 - 1.0 * non_null_add/total_add\n    AS null_address_percentage \nFROM daily_rolling_count\nORDER BY date_added DESC;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 09: Inter-Row Operation with Window Functions",
        "source": "Textbook Chapter 9, p. 182; repository file Chapter 09/Actitivty 09.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 09/Actitivty 09.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Calculate the rolling 30-day average for the \n-- daily total sales amount for the year 2024. \n-- Calculate which decile each date would be in \n-- compared to other days based on their daily \n-- 30-day rolling sales amount.\n-- Hint: In order to calculate the rolling 30-day \n-- average for the daily total sales amount for \n-- the year 2024, you will need to calculate the \n-- total sales amount by day for all of the days \n-- in the year 2024 plus all the 30 days in 2023 \n-- that is before 2024.\nWITH \n  daily_sales as (\n    SELECT \n      sales_transaction_date::date, \n      SUM(sales_amount) sales_amount\n    FROM sales\n    WHERE sales_transaction_date::date BETWEEN '20231201' AND '20241231'\n    GROUP BY sales_transaction_date::date\n  ),\n  moving_avg AS (\n    SELECT\n      sales_transaction_date,\n      sales_amount,\n      AVG(sales_amount) OVER w AS moving_avg\n    FROM daily_sales \n    WINDOW w AS (\n      ORDER BY sales_transaction_date \n      ROWS BETWEEN 30 PRECEDING AND 1 PRECEDING\n    )\n  )\nSELECT\n  sales_transaction_date,\n  sales_amount,\n  moving_avg,\n  NTILE(10) OVER (ORDER BY moving_avg DESC) AS decile\nFROM moving_avg m\nWHERE moving_avg IS NOT NULL\nORDER BY decile;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 09 Sample Code Reference",
      "source": "Chapter 09/Chapter 09 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Window Functions\nSELECT first_name, last_name, date_added\nFROM customers\nORDER BY date_added;\n\nSELECT date_added, COUNT(*)\nFROM customers\nGROUP BY date_added\nORDER BY date_added;\n\n-- ## The Basics of Window Functions\nSELECT {columns},\n  {window_func} OVER (\n    PARTITION BY {partition_key} \n    ORDER BY {order_key}\n  )\nFROM {table};\n\nSELECT first_name, last_name, gender,\n  COUNT(*) OVER () as total_customers\nFROM customers;\n\nSELECT COUNT(*) FROM customers;\n\nSELECT first_name, last_name, gender,\n  COUNT(*) OVER (PARTITION BY gender)\nFROM customers;\n\nSELECT gender, COUNT(*) FROM customers GROUP BY 1;\n\nSELECT first_name, last_name, gender,\n  COUNT(*) OVER (ORDER BY customer_id)\nFROM customers;\n\nSELECT first_name, last_name, gender,\n  COUNT(*) OVER (\n    PARTITION BY gender \n    ORDER BY customer_id\n  ) \nFROM customers;\n\n-- # Advanced Window Definitions\n-- ## The WINDOW Keyword\nSELECT first_name, last_name, gender,\n  COUNT(*) \n    OVER (\n      PARTITION BY gender ORDER BY customer_id\n    ) as total_customers,\n  SUM(CASE WHEN title IS NOT NULL THEN 1 ELSE 0 END) \n    OVER (\n      PARTITION BY gender ORDER BY customer_id\n    ) as total_customers_title\nFROM customers;\n\nSELECT first_name, last_name, gender,\n  COUNT(*) \n    OVER w as total_customers,\n  SUM(CASE WHEN title IS NOT NULL THEN 1 ELSE 0 END) \n    OVER w as total_customers_title\nFROM customers\nWINDOW w AS (\n  PARTITION BY gender ORDER BY customer_id\n);\n\n-- ## Window Frame\nSELECT {columns},\n  {window_func} OVER (\n    PARTITION BY {partition_key} \n    ORDER BY {order_key} \n{rangeorrows} \n  BETWEEN {frame_start} AND {frame_end}\n  )\nFROM {table1};\n\nWITH \n  daily_sales as (\n    SELECT \n      sales_transaction_date::DATE,\n      SUM(sales_amount) as total_sales\n    FROM sales\n    GROUP BY 1\n  ),\n  moving_average_calculation_7 AS (\n    SELECT \n      sales_transaction_date, \n      total_sales,\n      AVG(total_sales) OVER (\n        ORDER BY sales_transaction_date \n        ROWS BETWEEN 6 PRECEDING and CURRENT ROW\n      ) AS sales_moving_average_7,\n      ROW_NUMBER() OVER (\n        ORDER BY sales_transaction_date\n      ) as row_number\n    FROM \n      daily_sales\n    ORDER BY 1\n  )\nSELECT \n  sales_transaction_date,\n  CASE \n    WHEN row_number>=7 THEN sales_moving_average_7 \n    ELSE NULL \n  END AS sales_moving_average_7\nFROM \n  moving_average_calculation_7;"
    }
  },
  "Chapter 10": {
    "title": "Chapter 10 Practice Exercise",
    "subtitle": "Performant SQL",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "10"
      ],
      [
        "Topic",
        "Performant SQL"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 10 (Book pp. 187-207)"
      ],
      [
        "Code Source",
        "Chapter 10 Sample SQL.txt, Exercise 10.01.txt, Exercise 10.02.txt, Exercise 10.03.txt, Actitivty 10.txt"
      ]
    ],
    "objectives": [
      "Reading query plans and understanding indexes conceptually.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 10.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 10.01: Chapter 10 Practice",
        "source": "Textbook Chapter 10, p. 189; repository file Chapter 10/Exercise 10.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 10/Exercise 10.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nEXPLAIN SELECT * FROM emails;\n\n-- Step 3\nEXPLAIN SELECT * FROM emails LIMIT 5;\n\n-- Step 4\nEXPLAIN \nSELECT * FROM emails \nWHERE clicked_date \n  BETWEEN '2014-01-01' and '2014-02-01';"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 10.02: Chapter 10 Practice",
        "source": "Textbook Chapter 10, p. 195; repository file Chapter 10/Exercise 10.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 10/Exercise 10.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nEXPLAIN SELECT * FROM customers WHERE state='FO';\n\n-- Step 3\nEXPLAIN SELECT DISTINCT state FROM customers;\n\n-- Step 4\nCREATE INDEX ix_state ON customers(state);\n\n-- Step 5\nEXPLAIN SELECT * FROM customers WHERE state='FO';\n\n-- Step 6\nEXPLAIN SELECT * FROM customers WHERE gender='M';\n\n-- Step 7\nCREATE INDEX ix_gender ON customers(gender);\n\n-- Step 8\n\\d customers;\n\n-- Step 9\nEXPLAIN SELECT * FROM customers WHERE gender='M';\n\n-- Step 10\nEXPLAIN SELECT * FROM customers \nWHERE (latitude < 38) AND (latitude > 30);\n\n-- Step 11\nCREATE INDEX ix_latitude ON customers(latitude);\n\n-- Step 13\nEXPLAIN ANALYZE \nSELECT * FROM customers \nWHERE (latitude < 38) AND (latitude > 30);\n\n-- Step 14\nCREATE INDEX ix_latitude_less \nON customers(latitude) \nWHERE (latitude < 38) and (latitude > 30);"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 10.03: Chapter 10 Practice",
        "source": "Textbook Chapter 10, p. 201; repository file Chapter 10/Exercise 10.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 10/Exercise 10.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nDROP INDEX ix_gender;\nDROP INDEX ix_state;\nDROP INDEX ix_latitude;\nDROP INDEX ix_latitude_less;\n\n-- Step 3\nEXPLAIN ANALYZE \nSELECT * FROM customers \nWHERE gender='M';\n\n-- Step 4\nCREATE INDEX ix_gender ON customers \nUSING btree(gender);\n\n-- Step 6\nDROP INDEX ix_gender;\nCREATE INDEX ix_gender ON customers \nUSING HASH(gender);\n\n-- Step 7\nEXPLAIN ANALYZE SELECT * FROM customers \nWHERE gender='M';\n\n-- Step 8\nEXPLAIN ANALYZE SELECT * FROM customers \nWHERE state='FO';\n\n-- Step 9\nCREATE INDEX ix_state ON customers \nUSING BTREE(state);\n\nEXPLAIN ANALYZE SELECT * FROM customers \nWHERE state='FO';\n\n-- Step 10\nDROP INDEX ix_state;\n\nCREATE INDEX ix_state ON customers \nUSING HASH(state);\n\nEXPLAIN ANALYZE SELECT * FROM customers \nWHERE state='FO';"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 10: Performant SQL",
        "source": "Textbook Chapter 10, p. 206; repository file Chapter 10/Actitivty 10.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 10/Actitivty 10.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "--------------------------------------------------------\n--\n-- Query plans without index\n--\n--------------------------------------------------------\n-- Use the EXPLAIN command to return the query plan to select all \n-- available records within the sales table which were ordered by \n-- customer_id 1.\nEXPLAIN SELECT * FROM sales WHERE customer_id = 1;\n\n-- QUERY PLAN returned:\n--------------------------------------------------------\n Seq Scan on sales  (cost=0.00..841.39 rows=1 width=49)\n   Filter: (customer_id = 1)\n(2 rows)\n\n\n-- Use the EXPLAIN command to return the query plan to select all \n-- available records within the sales table which were ordered by \n-- customer_id < 100.\nEXPLAIN SELECT * FROM sales WHERE customer_id < 100;\n\n-- QUERY PLAN returned:\n---------------------------------------------------------\n Seq Scan on sales  (cost=0.00..841.39 rows=77 width=49)\n   Filter: (customer_id < 100)\n(2 rows)\n\n\n--------------------------------------------------------\n--\n-- Query plans with B-tree index\n--\n--------------------------------------------------------\n-- Create a B-tree index based on the customer_id column.\nCREATE INDEX ix_cid ON sales(customer_id);\n\n-- Rerun the customer_id = 1 query. \n-- How long does the query take to plan and execute?\nEXPLAIN SELECT * FROM sales WHERE customer_id = 1;\n\n-- QUERY PLAN returned:\n---------------------------------------------------------------------\n Index Scan using ix_cid on sales  (cost=0.29..8.31 rows=1 width=49)\n   Index Cond: (customer_id = 1)\n(2 rows)\n\n-- Rerun the customer_id < 100 query. \n-- How long does the query take to plan and execute?\nEXPLAIN SELECT * FROM sales WHERE customer_id > 1000;\n\n-- QUERY PLAN returned:\n----------------------------------------------------------------------\n Bitmap Heap Scan on sales  (cost=4.90..198.61 rows=79 width=49)\n   Recheck Cond: (customer_id < 100)\n   ->  Bitmap Index Scan on ix_cid  (cost=0.00..4.88 rows=79 width=0)\n         Index Cond: (customer_id < 100)\n(4 rows)\n\n\n--------------------------------------------------------\n--\n-- Query plans with hash index\n--\n--------------------------------------------------------\n-- Create a hash index on the customer_id column.\nDROP INDEX ix_cid;\nCREATE INDEX ix_cid ON sales USING HASH(customer_id);\n\n-- Rerun the customer_id = 1 query. \n-- How long does the query take to plan and execute?\nEXPLAIN SELECT * FROM sales WHERE customer_id = 1;\n\n-- QUERY PLAN returned:\n---------------------------------------------------------------------\n Index Scan using ix_cid on sales  (cost=0.00..8.02 rows=1 width=49)\n   Index Cond: (customer_id = 1)\n(2 rows)\n\n-- Rerun the customer_id < 100 query. \n-- How long does the query take to plan and execute?\nEXPLAIN SELECT * FROM sales WHERE customer_id < 100;\n\n-- QUERY PLAN returned:\n---------------------------------------------------------\n Seq Scan on sales  (cost=0.00..841.39 rows=77 width=49)\n   Filter: (customer_id < 100)\n(2 rows)\n\n-- Note that hash index only works for equal conditions. \n-- PostgreSQL will not use it for range condition queries (<100)\n\n\n-- Clean up the index\nDROP INDEX ix_cid;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 10 Sample Code Reference",
      "source": "Chapter 10/Chapter 10 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Index Scanning\n-- ## The B-Tree Index\nCREATE INDEX <index name> \nON <table name>(table column);\n\nCREATE INDEX <index name> \nON <table name>(table column) WHERE [condition];\n\nCREATE INDEX <index name> ON <table name> \nUSING TYPE(table column)\n\nCREATE INDEX ix_customers ON customers \nUSING BTREE(customer_id);\n\n-- ## The Hash Index\nCREATE INDEX <index name> ON <table name> \nUSING HASH(table column)\n\nCREATE INDEX ix_gender ON customers \nUSING HASH(gender);"
    }
  },
  "Chapter 11": {
    "title": "Chapter 11 Practice Exercise",
    "subtitle": "Processing JSON and Arrays",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "11"
      ],
      [
        "Topic",
        "Processing JSON and Arrays"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 11 (Book pp. 209-228)"
      ],
      [
        "Code Source",
        "Chapter 11 Sample SQL.txt, Exercise 11.01.txt, Exercise 11.02.txt, Actitivty 11.txt"
      ]
    ],
    "objectives": [
      "Working with PostgreSQL JSONB and array data.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 11.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 11.01: Chapter 11 Practice",
        "source": "Textbook Chapter 11, p. 219; repository file Chapter 11/Exercise 11.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 11/Exercise 11.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCREATE TEMP TABLE customer_sales_single_sale_json \nAS (\n  SELECT\n    customer_json,\n    JSONB_ARRAY_ELEMENTS(\n        customer_json -> 'sales') AS sale_json\n  FROM customer_sales \n  LIMIT 10\n);\n\n-- Step 3\nSELECT DISTINCT customer_json \nFROM   customer_sales_single_sale_json \nWHERE  sale_json ->> 'product_name' = 'Blade';\n\n-- Step 4\nSELECT DISTINCT JSONB_PRETTY(customer_json) \nFROM customer_sales_single_sale_json \nWHERE sale_json ->> 'product_name' = 'Blade';\n\n-- Step 5\nCREATE TEMP TABLE blade_customer_sales AS (\n  SELECT\n    jsonb_path_query(\n      customer_json,\n      '$ ? (@.sales[*].product_name == \"Blade\")'\n    ) AS customer_json\n  FROM customer_sales\n);\n\nSELECT JSONB_PRETTY(customer_json) \nFROM blade_customer_sales;\n\n-- Step 6\nSELECT COUNT(1) FROM blade_customer_sales;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 11.02: Chapter 11 Practice",
        "source": "Textbook Chapter 11, p. 226; repository file Chapter 11/Exercise 11.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 11/Exercise 11.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCREATE TEMP TABLE customer_email_sequences AS (\n  SELECT\n    customer_id,\n    ARRAY_AGG(\n      email_subject ORDER BY sent_date\n    ) AS email_sequence\n  FROM emails\n  GROUP BY 1);\n\n-- Step 3\nCREATE TEMP TABLE top_email_sequences AS (\n  SELECT\n    email_sequence,\n    COUNT(1) AS occurrences\n  FROM customer_email_sequences\n  GROUP BY 1\n  ORDER BY 2 DESC\n  LIMIT 3);\n\nSELECT email_sequence \nFROM top_email_sequences;\n\n-- Step 4\nALTER TABLE top_email_sequences \nADD COLUMN id SERIAL PRIMARY KEY;\n\n-- Step 5\nSELECT\n  super_email_seq.id AS superset_id,\n  sub_email_seq.id AS subset_id\nFROM top_email_sequences AS super_email_seq\nCROSS JOIN top_email_sequences AS sub_email_seq\nWHERE \n  super_email_seq.email_sequence @> \n  sub_email_seq.email_sequence\nAND super_email_seq.id != sub_email_seq.id;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 11: Processing JSON and Arrays",
        "source": "Textbook Chapter 11, p. 228; repository file Chapter 11/Actitivty 11.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 11/Actitivty 11.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Use the customer_sales table and create a \n-- searchable view with one record per customer. \n-- This view should be keyed off the customer_id \n-- column and searchable on everything related to \n-- that customer: name, email address, phone \n-- number, and purchased products. It is \n-- acceptable to include other fields as well.\nCREATE TEMP VIEW customer_sales_info AS\nSELECT \n  customer_json -> 'customer_id' customer_id,\n  customer_json -> 'first_name' first_name,\n  customer_json -> 'last_name' last_name,\n  customer_json -> 'email' email,\n  customer_json -> 'phone' phone,\n  customer_json\nFROM customer_sales;\n\n-- Query your new searchable view using the \n-- Arlena keywords. There must be a filter \n-- condition that this customer made some \n-- purchases before (The sales array contains\n-- at least 1 record, which is record 0)\nSELECT *\nFROM customer_sales_info \nWHERE first_name::TEXT LIKE '%Arlena%'\n  AND jsonb_path_exists(customer_json, '$.sales[0]');"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 11 Sample Code Reference",
      "source": "Chapter 11/Chapter 11 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Using JSON \nSELECT row_to_json(c) FROM customers c limit 1;\n\nSELECT row_to_json(c, TRUE) FROM customers c limit 1;\n\n-- ## Accessing Data from a JSON or JSONB Field\nSELECT\n  '{\n    \"a\": 1,    \"b\": 2,    \"c\": 3\n  }'::JSON -> 'b' AS data;\n\nSELECT\n  '{\n    \"a\": 1,\n    \"b\": [{\"d\": 4}, {\"d\": 6}, {\"d\": 4}],\n    \"c\": 3\n  }'::JSON #> ARRAY['b', '1', 'd'] AS data;\n\nSELECT * \nFROM customer_sales \nWHERE customer_json @> '{\"customer_id\":20}'::JSONB;\n\nSELECT JSONB_PRETTY(customer_json) \nFROM customer_sales \nWHERE customer_json @> '{\"customer_id\":20}'::JSONB;\n\nSELECT\n  JSONB_OBJECT_KEYS(customer_json) AS keys,\n  customer_json -> JSONB_OBJECT_KEYS(customer_json) \nFROM customer_sales\nWHERE customer_json @> '{\"customer_id\":20}'::JSONB;\n\n-- ## Leveraging JSON Path\nSELECT jsonb_path_exists(customer_json, '$.sales[0]')\nFROM customer_sales\nLIMIT 3;\n\nSELECT\n  jsonb_path_exists(\n    customer_json, \n    '$.sales[*].sales_amount ? (@ > 400)'\n  )\nFROM customer_sales\nLIMIT 3;\n\nSELECT \n  jsonb_path_query(customer_json, \n    '$.sales[0].sales_amount')\nFROM customer_sales\nLIMIT 3;\n\nSELECT \n  jsonb_path_query('{\"test\":[1, 2, 3]}', '$.test[*]');\n\nSELECT\n  jsonb_path_query_array(\n    customer_json, \n    '$.sales[*].sales_amount ? (@ > 400)'\n  )\nFROM customer_sales\nLIMIT 3;\n\n-- ## Creating and Modifying Data in a JSONB Field\nselect \n  jsonb_insert('{\"a\":1,\"b\":\"foo\"}', ARRAY['c'], '2');\n\nselect \n  jsonb_insert(\n'{\"a\":1,\"b\":\"foo\", \"c\":[1, 2, 3, 4]}', \n    ARRAY['c', '1'], '10');\n\nSELECT '{\"a\": 1, \"b\": 2}'::JSONB - 'b';\n\n-- # Using Array\nSELECT \n  ARRAY['Lemon', 'Bat Limited Edition'] \n    AS purchased_products;\n\nSELECT   \n  product_type, \n  ARRAY_AGG(DISTINCT model) AS models \nFROM products \nGROUP BY 1;\n\nSELECT \n  product_type, \n  ARRAY_AGG(model ORDER BY year) AS models \nFROM products \nGROUP BY 1;\n\nSELECT UNNEST(ARRAY[123, 456, 789]) AS example_ids;\n\nSELECT STRING_TO_ARRAY('hello world', ' ');\n\nSELECT \n  ARRAY_TO_STRING(\n    ARRAY['Lemon', 'Bat Limited Edition'], ', '\n  ) AS example_purchased_products;"
    }
  },
  "Chapter 12": {
    "title": "Chapter 12 Practice Exercise",
    "subtitle": "Advanced Data Types: Date, Text, and Geospatial",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "12"
      ],
      [
        "Topic",
        "Advanced Data Types: Date, Text, and Geospatial"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 12 (Book pp. 231-250)"
      ],
      [
        "Code Source",
        "Chapter 12 Sample SQL.txt, Exercise 12.01.txt, Exercise 12.02.txt, Exercise 12.03.txt, Actitivty 12.txt"
      ]
    ],
    "objectives": [
      "Using date/time, text, and optional geospatial analysis patterns.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 12.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 12.01: Chapter 12 Practice",
        "source": "Textbook Chapter 12, p. 239; repository file Chapter 12/Exercise 12.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 12/Exercise 12.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT\n  TO_CHAR(sales_transaction_date, 'yyyymm')\n    AS month_date,\n  COUNT(1) AS number_of_sales \nFROM sales\nWHERE   \n  EXTRACT(year FROM sales_transaction_date)=2024\nGROUP BY 1\nORDER BY 1;\n\nSELECT\n  TO_CHAR(date_added, 'yyyymm') AS month_date,\n  COUNT(1) AS number_of_new_customers\nFROM customers\nWHERE EXTRACT(year FROM date_added) = 2024\nGROUP BY 1\nORDER BY 1;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 12.02: Chapter 12 Practice",
        "source": "Textbook Chapter 12, p. 242; repository file Chapter 12/Exercise 12.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 12/Exercise 12.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nSELECT\n  model, \n  'Release Year: ' || year::char(4) ReleaseYear\nFROM products\nWHERE model LIKE '%Limited Edition%';\n\n-- Step 3\nSELECT\n  model, \n  REPLACE(model, 'Model', 'Super Model'),\n  LENGTH(\n    REPLACE(model, 'Model', 'Super Model'))\nFROM products\nWHERE model LIKE '%Model%';\n\n-- Step 4\nSELECT model FROM products\nWHERE model LIKE 'Model%';\n\nSELECT model FROM products\nWHERE LEFT(model, 5) = 'Model';\n\nSELECT model FROM products\nWHERE SUBSTRING(model, 1, 5) = 'Model';\n\nSELECT model FROM products\nWHERE SUBSTR(model, 1, 5) = 'Model';\n\nSELECT model FROM products\nWHERE POSITION('Model' IN model) = 1;\n\nSELECT model FROM products\nWHERE STRPOS(model, 'Model') = 1;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 12.03: Chapter 12 Practice",
        "source": "Textbook Chapter 12, p. 247; repository file Chapter 12/Exercise 12.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 12/Exercise 12.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\nCREATE TEMP TABLE customer_points AS (\n  SELECT \n    customer_id,  \n    point(longitude, latitude) AS lng_lat_point\n  FROM customers\n  WHERE longitude IS NOT NULL\n  AND latitude IS NOT NULL\n);\n\n-- Step 3\nCREATE TEMP TABLE dealership_points AS (\n  SELECT\n    dealership_id,\n    point(longitude, latitude) AS lng_lat_point\n  FROM dealerships\n);\n\n-- Step 4\nCREATE TEMP TABLE customer_dealership_distance \nAS (\n  SELECT\n    customer_id,\n    dealership_id,\n    c.lng_lat_point <@> d.lng_lat_point AS dist\n  FROM customer_points c\n  CROSS JOIN dealership_points d\n);\n\n-- Step 5\nCREATE TEMP TABLE closest_dealerships AS (\n  SELECT DISTINCT ON (customer_id)\n    customer_id,\n    dealership_id,\n    dist\n  FROM customer_dealership_distance\n  ORDER BY customer_id, dist\n);\n\n-- Step 6\nSELECT\n  AVG(dist) AS avg_dist,\n  PERCENTILE_DISC(0.5) \n    WITHIN GROUP (ORDER BY dist) AS median_dist\nFROM closest_dealerships;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Activity 12: Advanced Data Types: Date, Text, and Geospatial",
        "source": "Textbook Chapter 12, p. 250; repository file Chapter 12/Actitivty 12.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 12/Actitivty 12.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Get the average daily sales for each weekday and \n-- weekend days and compare them side by side\nWITH \n  daily_sales as (\n    SELECT \n      sales_transaction_date::date, \n      SUM(sales_amount) sales_amount\n    FROM sales\n    GROUP BY sales_transaction_date::date\n  )\nSELECT\n  EXTRACT(dow FROM sales_transaction_date),\n  AVG(sales_amount) sales_amount\nFROM daily_sales \nGROUP BY 1;\n\n-- Difference in purchasing of limited edition \n-- products (the percentage of these products \n-- in average daily sales) between different \n-- days.\nWITH \n  daily_sales as (\n    SELECT \n      p.model,\n      s.sales_transaction_date::date, \n      SUM(s.sales_amount) sales_amount\n    FROM sales s\n    JOIN products p\n      ON s.product_id = p.product_id\n    WHERE p.model ILIKE '%limited edition%'\n    GROUP BY \n      p.model, \n      sales_transaction_date::date\n  )\nSELECT\n  EXTRACT(dow FROM sales_transaction_date),\n  AVG(sales_amount) sales_amount\nFROM daily_sales \nGROUP BY 1;"
        ],
        "questions": [
          "What business task does this activity simulate?",
          "Which tables or columns are used in the activity?",
          "What final output or answer should be submitted?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 12 Sample Code Reference",
      "source": "Chapter 12/Chapter 12 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "-- # Date and Time \n-- ## The DATE type\nSHOW DateStyle;\n\nSELECT '1/14/2025'::DATE;\n\nSELECT '2025-01-14'::DATE;\n\nSELECT '14/01/2025'::DATE;\n\nSET DateStyle='GERMAN, DMY';\n\nSELECT \n  NOW() AT TIME ZONE 'EST' as Eastern, \n  CURRENT_TIMESTAMP AT TIME ZONE 'PST' as Pacific;\n\nSELECT NOW();\n\n-- ## Transforming Date Data Types\nSELECT current_date,\n  EXTRACT(year FROM current_date) AS year,\n  EXTRACT(month FROM current_date) AS month,\n  EXTRACT(day FROM current_date) AS day;\n\nSELECT current_date,\n  EXTRACT(y FROM current_date) AS year,\n  EXTRACT(mon FROM current_date) AS month,\n  EXTRACT(d FROM current_date) AS day;\n\nSELECT NOW(), TO_CHAR(NOW(), 'yyyymm') AS yearmonth;\n\nSELECT \n  TO_CHAR(sales_transaction_date, 'yyyymm') yearmonth,\n  SUM(sales_amount) AS total_quarterly_sales\nFROM sales\nGROUP BY 1\nORDER BY 1 DESC;\n\n-- ## Intervals\nSELECT \n  TIMESTAMP '2025-03-01 00:00:00' – \n    TIMESTAMP '2025-02-01 00:00:00' AS days_in_feb;\n\nSELECT \n  TIMESTAMP '2025-03-06 00:00:00' + INTERVAL '7 days' \n    AS new_date;\n\nSELECT DATE '2025-06-05' + 7 AS new_date;\n\nSELECT \n  '2025-03-01'::DATE - '2025-02-01'::DATE \n    AS days_in_feb;\n\n-- # Geospatial Data\n-- ## Latitude and Longitude\nSELECT latitude, longitude\nFROM customers\nWHERE latitude IS NOT NULL\nLIMIT 3;\n\nCREATE EXTENSION cube;\nCREATE EXTENSION earthdistance;\n\nSELECT POINT(longitude, latitude)\nFROM customers\nWHERE longitude IS NOT NULL\nLIMIT 3;\n\nSELECT point(-90, 38) <@> point(-91, 37) AS dist;"
    }
  },
  "Chapter 13": {
    "title": "Chapter 13 Practice Exercise",
    "subtitle": "Inferential Statistics Using SQL",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "13"
      ],
      [
        "Topic",
        "Inferential Statistics Using SQL"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 13 (Book pp. 251-271)"
      ],
      [
        "Code Source",
        "Chapter 13 Sample SQL.txt, Exercise 13.01.txt"
      ]
    ],
    "objectives": [
      "Using SQL for descriptive statistics and simple statistical reasoning.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 13.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 13.01: Chapter 13 Practice",
        "source": "Textbook Chapter 13, p. 270; repository file Chapter 13/Exercise 13.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 13/Exercise 13.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- step 0, bring data into the SQL server database:\n-- step 0.0: create the table and add columns as following:\nDROP TABLE IF EXISTS sparcs;\n\n/*CREATE TABLE sparcs (\n    health_service_area TEXT,\n    hospital_county TEXT,\n    operating_certificate_number TEXT,\n    facility_id TEXT,\n    facility_name TEXT,\n    age_group TEXT,\n    zip_code TEXT,\n    gender TEXT,\n    race TEXT,\n    ethnicity TEXT,\n    length_of_stay INTEGER,\n    type_of_admission TEXT,\n    patient_disposition TEXT,\n    discharge_year INTEGER,\n    ccs_diagnosis_code TEXT,\n    ccs_diagnosis_description TEXT,\n    ccs_procedure_code TEXT,\n    ccs_procedure_description TEXT,\n    apr_drg_code TEXT,\n    apr_drg_description TEXT,\n    apr_mdc_code TEXT,\n    apr_mdc_description TEXT,\n    apr_severity_of_illness_code TEXT,\n    apr_severity_of_illness_description TEXT,\n    apr_risk_of_mortality TEXT,\n    apr_medical_surgical_description TEXT,\n    payment_typology_1 TEXT,\n    payment_typology_2 TEXT,\n    payment_typology_3 TEXT,\n    birth_weight TEXT,\n    emergency_department_indicator TEXT,\n    total_charges NUMERIC,\n    total_costs NUMERIC\n);\n\nOnce you created the table, you can bring in the data in two ways:\n1) use pgAdmin4 UI by right click the table you created to import Data, in the \noptions section, make sure you select \" for quote;\n2) use the command line way\" \n\\copy sparcs_2021 FROM 'file_path/file_name' WITH (FORMAT csv, HEADER true, ,QUOTE '\"')\n*/\n\n-- Step 1: Point Estimation\nSELECT 'Step 1: Average Length of Stay' AS description;\nSELECT ROUND(AVG(length_of_stay)::NUMERIC, 1) AS avg_length_of_stay FROM sparcs;\n-- output: 5.7\n\n-- Step 2: Confidence Interval\nSELECT 'Step 2: Confidence Interval for Mean Stay' AS description;\nSELECT \n  ROUND(AVG(length_of_stay)::NUMERIC, 1) AS mean,\n  ROUND(STDDEV(length_of_stay)::NUMERIC, 1) AS stddev,\n  COUNT(*) AS n,\n  ROUND(AVG(length_of_stay) - 1.96 * STDDEV(length_of_stay)/SQRT(COUNT(*))::NUMERIC, 1) AS lower_bound,\n  ROUND(AVG(length_of_stay) + 1.96 * STDDEV(length_of_stay)/SQRT(COUNT(*))::NUMERIC, 1) AS upper_bound\nFROM sparcs;\n-- mean | stddev |    n    | lower_bound | upper_bound\n-- ------+--------+---------+-------------+-------------\n--  5.7 |    7.8 | 2133685 |         5.7 |         5.7\n\n\n-- Step 3: Correlation Analysis\nSELECT 'Step 4: Correlation Between Stay and Charges' AS description;\nSELECT ROUND(CORR(length_of_stay, total_charges)::NUMERIC, 3) AS correlation FROM sparcs;\n-- output: 0.680\n\n-- Step 4: Simple Linear Regression\nSELECT 'Step 5: Predict Charges from Stay' AS description;\nSELECT \n  ROUND(REGR_SLOPE(total_charges, length_of_stay)::NUMERIC, 2) AS slope,\n  ROUND(REGR_INTERCEPT(total_charges, length_of_stay)::NUMERIC, 2) AS intercept,\n  ROUND(REGR_R2(total_charges, length_of_stay)::NUMERIC, 3) AS r_squared\nFROM sparcs;\n--   slope   | intercept | r_squared\n--  ----------+-----------+-----------\n-- 11083.61 |   8622.10 |     0.462\n\n\n-- Step 5: Hypothesis Testing\nSELECT 'Step 3: Gender Comparison of Stay' AS description;\nWITH gender_stats AS (\n  SELECT \n    gender,\n    ROUND(AVG(length_of_stay)::NUMERIC, 1) AS avg_stay,\n    ROUND(STDDEV(length_of_stay)::NUMERIC, 1) AS stddev,\n    COUNT(*) AS n\n  FROM sparcs\n  WHERE gender IN ('M', 'F')\n  GROUP BY gender\n)\nSELECT * FROM gender_stats;\n--gender | avg_stay | stddev |    n\n----------+----------+--------+---------\n-- F      |      5.2 |    7.2 | 1163068\n-- M      |      6.2 |    8.5 |  970457\n\n/*\nHypothesis Test: Two-Sample t-Test\n\nGoal: Compare whether the average hospital stay differs significantly between female and male patients.\n\nNull Hypothesis (H₀): μ₁ = μ₂ → No difference in average stay\nAlternative Hypothesis (H₁): μ₁ ≠ μ₂ → There is a difference\nWe use Welch’s t-test due to unequal variances and large sample sizes.\nThe test statistic is computed as using results from step 5:\nSE = sqrt((std_f^2 / n_f) + (std_m^2 / n_m)) = 0.0109\nt = (mean_f - mean_m) / SE  ≈ -91.74\nsubscript f and m represents male and female respectively.\nDegrees of freedom are approximated using Welch’s formula.\nWith large n, we use the standard normal distribution for decision-making.\nThe Decision Rule:\n\tSignificance level (alpha): 0.05\n\tCritical value (two-tailed): ±1.96\n\tComputed t-statistic: −91.74\nSince:\n|t∣=91.74>1.96m, we can reject the null hypothesis. The interpretation is there is a statistically significant difference in average hospital stay between female and male patients. \nThe difference is unlikely due to random chance.\n*/"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ],
    "referenceCode": {
      "title": "Chapter 13 Sample Code Reference",
      "source": "Chapter 13/Chapter 13 Sample SQL.txt",
      "note": "This is the chapter-level sample code file from the book repository. It is included so students can compare exercise tasks with the full chapter code patterns.",
      "code": "SELECT * FROM SALES ORDER BY RANDOM() LIMIT 100;\n\nSELECT ROUND(\n  CAST(AVG(number_of_customers) as numeric),0\n) AS avg_num_cust\nFROM top_cities_data;\n\nSELECT PERCENTILE_CONT(0.5) WITHIN GROUP\n  (ORDER BY number_of_customers) AS median\nFROM top_cities_data;\n\nSELECT COUNT(number_of_customers) AS frequency\nFROM top_cities_data\nORDER BY frequency DESC\nLIMIT 1;\n\nSELECT\n  MAX(number_of_customers)\n  -MIN(number_of_customers)\n  AS Range\nFROM top_cities_data;\n\nSELECT\n  VAR_SAMP(number_of_customers) AS sample_variance,\n  STDDEV_SAMP(number_of_customers) AS sample_standard_deviation\nFROM top_cities_data;\n\nSELECT\n  COUNT(*) as cnt,\n  ROUND(CAST(AVG(sales_amount) AS numeric),0) AS avg_sales,\n  ROUND(CAST(STDDEV(sales_amount) AS numeric),0) AS stddev_sales,\n  PRODUCT_ID\nFROM SALES\nWHERE product_id IN (4,6,9,10,11)\nGROUP BY product_id\nORDER BY product_id;\n\nSELECT\n  COUNT(*) as cnt,\n  ROUND(CAST(AVG(sales_amount) AS numeric),0) AS avg_sales,\n  ROUND(CAST(STDDEV(sales_amount) AS numeric),0) AS stddev_sales,\n  ROUND(CAST(AVG(sales_amount)-1.96* STDDEV(sales_amount)/SQRT(COUNT(*))\n    AS numeric),0) AS lower_CI,\n  ROUND(CAST(AVG(sales_amount)+1.96* STDDEV(sales_amount)/SQRT(COUNT(*))\n    AS numeric),0) AS upper_CI,\n  PRODUCT_ID\nFROM SALES\nWHERE product_id IN (4,6,9,10,11)\nGROUP BY product_id\nORDER BY product_id;\n\nSELECT\n  ROUND(CAST(CORR(\n    public_transportation_pct,\n    public_transportation_population\n  ) AS numeric),4) AS correlation_coefficient\nFROM PUBLIC_TRANSPORTATION_BY_ZIP;\n\nSELECT\n  REGR_SLOPE(\n    public_transportation_pct,\n    public_transportation_population\n  ) AS beta_1,\n  REGR_INTERCEPT(\n    public_transportation_pct,\n    public_transportation_population\n  ) AS beta_0\nFROM PUBLIC_TRANSPORTATION_BY_ZIP;\n\nWITH regmodel AS (\n  SELECT\n    REGR_SLOPE(\n      public_transportation_pct,\n      public_transportation_population\n    ) AS beta_1,\n    REGR_INTERCEPT(\n      public_transportation_pct,\n      public_transportation_population\n    ) AS beta_0,\n    REGR_R2(public_transportation_pct  , public_transportation_population\n    )\n  FROM PUBLIC_TRANSPORTATION_BY_ZIP\n)\nSELECT\n  500 as population,\n  regmodel.beta_1 * 500 + regmodel.beta_0 AS prediction\nFROM regmodel;\n\nWITH regmodel AS (\n  SELECT\n    REGR_SLOPE(\n      public_transportation_pct,\n      public_transportation_population\n    ) AS beta_1,\n    REGR_INTERCEPT(\n      public_transportation_pct,\n      public_transportation_population\n    ) AS beta_0,\n    REGR_R2  (\n      public_transportation_pct,\n      public_transportation_population\n    ) AS r_squared\n  FROM PUBLIC_TRANSPORTATION_BY_ZIP\n)\nSELECT\n  500 as population,\n  regmodel.beta_1 * 500 + regmodel.beta_0 AS prediction,\n  regmodel.r_squared as r_squared\nFROM regmodel;"
    }
  },
  "Chapter 14": {
    "title": "Chapter 14 Practice Exercise",
    "subtitle": "A Case Study for Analytics Using SQL",
    "meta": [
      [
        "Course",
        "Business Data Management / SQL for Data Analytics"
      ],
      [
        "Chapter",
        "14"
      ],
      [
        "Topic",
        "A Case Study for Analytics Using SQL"
      ],
      [
        "Estimated Time",
        "90-120 minutes"
      ],
      [
        "Book Source",
        "SQL for Data Analytics, Fourth Edition, Chapter 14 (Book pp. 273-291)"
      ],
      [
        "Code Source",
        "Exercise 14.01.txt, Exercise 14.02.txt, Exercise 14.03.txt, Exercise 14.04.txt"
      ]
    ],
    "objectives": [
      "Building an analytics workflow from raw data to reporting output.",
      "Run the chapter code from the official repository and inspect the result.",
      "Connect the code behavior to the MIS 443 business data management workflow.",
      "Document commands, outputs, and short answers for submission."
    ],
    "tools": [
      "PostgreSQL and pgAdmin or psql.",
      "The sqlda database imported in Chapter 1 / Week 1.",
      "Book code folder: Chapter 14.",
      "A text editor or SQL/Python notebook for saving commands and answers."
    ],
    "preNote": "Run the exercises in order. Keep the original repository code visible, and only adjust local paths, passwords, or machine-specific values when execution requires it.",
    "exercises": [
      {
        "title": "Exercise 14.01: Chapter 14 Practice",
        "source": "Textbook Chapter 14, p. 278; repository file Chapter 14/Exercise 14.01.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 14/Exercise 14.01.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\n\nCREATE TABLE customer_sales_json (\n  customer_json JSONB\n);\n\n\\COPY customer_sales_json FROM 'c:\\UsersPublic\\customer_sales.txt'"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 14.02: Chapter 14 Practice",
        "source": "Textbook Chapter 14, p. 281; repository file Chapter 14/Exercise 14.02.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 14/Exercise 14.02.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\n\nSELECT \n  TO_TIMESTAMP(\n    (csj.customer_json->>'date_added'), \n    'YYYY-MM-DDXHH24:MI:SS'\n  ) AS date_added\nFROM customer_sales_json csj;\n\n\n-- Step 3\n\nSELECT COUNT(*) FROM customer_sales;\n\nSELECT COUNT(DISTINCT customer_json->'customer_id') \nFROM customer_sales_json;\n\n\n-- Step 4\n\nSELECT *\nFROM customer_sales_json\nWHERE (customer_json->'customer_id')::integer NOT IN (\n  SELECT customer_id FROM customers c\n);\n\nSELECT \n  c.first_name, c.last_name, \n  replace((csj.customer_json->'first_name')::TEXT, '\"', '') AS new_first_name,\n  replace((csj.customer_json->'last_name')::TEXT, '\"', '') AS new_last_name\nFROM customer_sales_json csj\nJOIN customers c\n  ON c.customer_id = (csj.customer_json->'customer_id')::integer\nWHERE c.first_name != (csj.customer_json->>'first_name')\n  OR c.last_name != (csj.customer_json->>'last_name');"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 14.03: Chapter 14 Practice",
        "source": "Textbook Chapter 14, p. 284; repository file Chapter 14/Exercise 14.03.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 14/Exercise 14.03.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\n\nSELECT \n  (csj.customer_json->'customer_id')::integer AS customer_id,\n  jsonb_array_elements(csj.customer_json->'sales') AS sales_record\nFROM customer_sales_json csj;\n\n\n\nCREATE TABLE customer_sales_flattened AS\nSELECT \n  (csj.customer_json->'customer_id')::INTEGER AS customer_id,\n  (csj.customer_json->>'first_name') AS first_name,\n  (csj.customer_json->>'last_name') AS last_name,\n  (csj.customer_json->>'email') AS email,\n  (csj.customer_json->>'phone') AS phone,\n  (jsonb_array_elements(\n    csj.customer_json->'sales')->'product_id'\n  )::INTEGER AS product_id,\n  (jsonb_array_elements(\n    csj.customer_json->'sales')->>'product_name'\n  ) AS product_name,\n  (jsonb_array_elements(\n    csj.customer_json->'sales')->'sales_amount'\n  )::NUMERIC(10,2) AS sales_amount,\n  TO_TIMESTAMP(\n    (\n      jsonb_array_elements(\n        csj.customer_json->'sales'\n      )->>'sales_transaction_date'\n    ), 'YYYY-MM-DDXHH24:MI:SS'\n  ) AS sales_date\nFROM customer_sales_json csj;\n\n\n-- Stpe 3\n\nCREATE TABLE customer_sales_dimension AS\nSELECT \n  (csj.customer_json->'customer_id')::INTEGER AS customer_id,\n  (csj.customer_json->>'first_name') AS first_name,\n  (csj.customer_json->>'last_name') AS last_name,\n  (csj.customer_json->>'email') AS email,\n  (csj.customer_json->>'phone') AS phone\nFROM customer_sales_json csj;\n\n\n-- Stpe 4\n\n\\d customer_sales_flattened \n\nALTER TABLE customer_sales_flattened DROP COLUMN first_name;\nALTER TABLE customer_sales_flattened DROP COLUMN last_name;\nALTER TABLE customer_sales_flattened DROP COLUMN email;\nALTER TABLE customer_sales_flattened DROP COLUMN phone;\nALTER TABLE customer_sales_flattened DROP COLUMN product_name;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      },
      {
        "title": "Exercise 14.04: Chapter 14 Practice",
        "source": "Textbook Chapter 14, p. 288; repository file Chapter 14/Exercise 14.04.txt",
        "objective": "Complete the task using the exact code file from the book repository, then explain the result in business data management terms.",
        "instructions": [
          "Open Chapter 14/Exercise 14.04.txt.",
          "Read the comments and code before executing anything.",
          "Run the code in PostgreSQL, psql, pgAdmin, or Python as appropriate.",
          "Adjust only local paths, credentials, or environment-specific values when necessary.",
          "Record the output and answer the questions below."
        ],
        "codeBlocks": [
          "-- Step 2\n\nSELECT \n  c.city, c.state,\n  p.product_type,\n  csj.sales_date,\n  SUM(csj.sales_amount) AS total_sales\nFROM customer_sales_flattened csj\nJOIN customers c\n  ON csj.customer_id = c.customer_id\nJOIN products p\n  ON csj.product_id = p.product_id\nGROUP BY \n  c.city, c.state,\n  p.product_type,\n  csj.sales_date;\n\n\n-- Step 3\n\nCREATE VIEW customer_sales_agg_sales AS\nSELECT\n  c.city, c.state,\n  p.product_type,\n  csj.sales_date,\n  SUM(csj.sales_amount) AS total_sales\nFROM customer_sales_flattened csj\nJOIN customers c\n  ON csj.customer_id = c.customer_id\nJOIN products p\n  ON csj.product_id = p.product_id\nGROUP BY\n  c.city, c.state,\n  p.product_type,\n  csj.sales_date;\n\n\n-- Step 4\n\nSELECT city, state, SUM(total_sales) total_sales\nFROM customer_sales_agg_sales\nGROUP BY 1, 2\nORDER BY total_sales DESC\nLIMIT 10;"
        ],
        "questions": [
          "What is the purpose of this exercise?",
          "Which SQL statements or Python commands are most important in this file?",
          "What output should you check to confirm the exercise worked?"
        ]
      }
    ],
    "submission": [
      "The SQL or Python commands used for each exercise/activity.",
      "Screenshots or copied query outputs showing that each exercise ran successfully.",
      "Short answers to the questions under each exercise.",
      "A short note explaining how the chapter code supports business data management practice."
    ],
    "expectedOutput": [
      "All chapter exercises or activities have been attempted using the sqlda database or chapter files.",
      "Students can explain the purpose of the main commands used in the chapter.",
      "Students can identify the output that confirms each exercise worked."
    ],
    "notes": [
      "Some repository files contain encoding artifacts from the source files. Preserve them for reference, but use standard SQL/Python characters when running code if needed.",
      "If a table already exists, drop the practice table or use a new temporary table name as instructed by the lecturer.",
      "Save your commands because later chapters reuse the sqlda database and earlier concepts."
    ]
  }
};
