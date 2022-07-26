--Part: 1

    --1.
        CREATE TABLE Customer(
            customer_id SERIAL PRIMARY KEY,
            first_name text NOT NULL,
            last_name text NOT NULL

        );

        CREATE TABLE Customer_profile(
            customerprofile_id SERIAL NOT NULL PRIMARY KEY,
            isLoggedIn boolean DEFAULT false,
            customer_id INTEGER UNIQUE REFERENCES Customer (customer_id)
        );
        SELECT * FROM Customer_profile
    --2.
        INSERT INTO Customer(first_name , last_name)
        VALUES('John', 'Doe'),
             ('Jerome', 'Lalu'),
             ('Lea', 'Rive');
    --3.
        INSERT INTO Customer_profile(isLoggedIn, customer_id)
        VALUES(true, (SELECT customer_id FROM Customer WHERE first_name='John')),
              (false, (SELECT customer_id FROM Customer WHERE first_name='Jerome'));

    --4.
        SELECT first_name
        FROM Customer
        INNER JOIN Customer_profile 
        ON Customer.customer_id = Customer_profile.customerprofile_id
        WHERE isLoggedIn=true;

        SELECT *
        FROM Customer
        LEFT JOIN Customer_profile 
        ON Customer.customer_id = Customer_profile.customerprofile_id

        SELECT COUNT(*)
        FROM Customer
        FULL JOIN Customer_profile 
        ON Customer.customer_id = Customer_profile.customerprofile_id
        WHERE isLoggedIn= false;

   
   
   
--Part: 2
    
    --1.
    
    CREATE TABLE Book(
        book_id SERIAL PRIMARY KEY,
        title text NOT NULL,
        author text NOT NULL
    );
    --2.
    INSERT INTO Book(title, author)
    VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee'); --BTW this book was my fav lol
          
        
    --3.
    
        CREATE TABLE Student(
            student_id SERIAL PRIMARY KEY,
            name text NOT NULL UNIQUE,
            age smallint CHECK (age <= 15)
        );
        
    --4.
        INSERT INTO Student(name, age)
        VALUES
        ('John', 12),
        ('Lera', 11),
        ('Patrick', 10),
        ('Bob', 14);
    --5.
        CREATE TABLE Library(
            book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
            student_fk_id smallint REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
            borrowed_date date NOT NULL,
            PRIMARY KEY (book_fk_id, student_fk_id)
        );
        
    --6.
      INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
      VALUES
      ( (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name='John'), '2022-02-15'), 
      ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name='Bob'), '2021-03-03'),
      ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name='Lera'), '2021-05-23'),
      ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name='Bob'), '2021-08-12');
    

    --7.
    
        --1.
            SELECT * 
            FROM Library;
        --2.
            SELECT name, title 
            FROM Student, Book;
        --3.
            SELECT AVG(age) 
            FROM Student, Book 
            WHERE title='Alice In Wonderland';
            
        --4.
            DELETE from Student WHERE name='John';
            --it deleted John without any problem.
      
            
            
        
        
        
        

