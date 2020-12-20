// Creating a class library and implimenting the class library
// Constructor must take  the book list as an assignment
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


class Library{
    constructor(bookname,department,id, subject,username) {
        this.bookname  = bookname;
        this.department = department;
        this.id = id;
        this.subject = subject;
        this.username = username;
    }
    getBookList(){
        let booksAvalible = ["Seven Habbit","Complete Refference of java ","Python Programming CookBook"]
    }
}