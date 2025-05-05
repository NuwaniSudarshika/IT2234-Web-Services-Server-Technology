
![Screenshot (133)](https://github.com/user-attachments/assets/b038005f-08ab-4fc6-bc8a-2e78846e0df3)
📚 MongoDB Shell Commands – Library and University Databases
This project demonstrates how to perform basic MongoDB operations using the shell (mongosh). It includes creating databases and collections, inserting documents, and running common queries and updates.

🔸 Library Database: librarydb
Setup
Create and switch to librarydb

Create a books collection

Insert book documents (single and multiple)

js
Copy
Edit
use librarydb

// Insert one book
db.books.insertOne({
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "published_year": 1937,
  "genres": ["Fantasy", "Adventure"],
  "pages": 310,
  "available": true,
  "rating": 4.8
})

// Insert multiple books
db.books.insertMany([
  { /* 1984 */ },
  { /* To Kill a Mockingbird */ },
  { /* The Great Gatsby */ },
  { /* Brave New World */ }
])
Queries and Updates
Find all books:
db.books.find()

Find books published after 1950:
db.books.find({ published_year: { $gt: 1950 } })

Find available books:
db.books.find({ available: true })

Find books in the "Dystopian" genre:
db.books.find({ genres: "Dystopian" })

Project only title and author fields:
db.books.find({}, { title: 1, author: 1, _id: 0 }).pretty()

Update a book's availability:
db.books.updateOne({ title: "1984" }, { $set: { available: false } })

Increase rating of a book:
db.books.updateOne({ title: "Brave New World" }, { $inc: { rating: 0.1 } })

Add a new genre:
db.books.updateOne({ title: "The Great Gatsby" }, { $addToSet: { genres: "Classic" } })

Sort by published year (ascending):
db.books.find().sort({ published_year: 1 })

Sort by rating (descending):
db.books.find().sort({ rating: -1 })

Delete books with low rating (< 4.5):
db.books.deleteMany({ rating: { $lt: 4.5 } })

🔸 Database Maintenance
Drop a database:

js
Copy
Edit
use sampledb
db.dropDatabase()
Drop a collection:

js
Copy
Edit
use checkdb
db.sampledata.drop()
🎓 University Database: unidb
In degrees collection
Delete one by ID

Find and project specific fields

Update one document by ID

Increment duration where duration >= 4

Delete many where duration < 4

In students collection
Update array field (skills) using $push
