// Questions and answers stored in an object
const qaData = {
    "Code Quality and standards": [
        {
            question: "What are the key points you would look for during a code review of a Java application?",
            answer: `
                <strong>Key points include:</strong><br>
                - <strong>Code readability:</strong> Clear variable names, consistent formatting, and comments where necessary.<br>
                - <strong>Error handling:</strong> Proper use of exceptions, avoiding silent failures, and ensuring exceptions are logged appropriately.<br>
                - <strong>Performance:</strong> Checking for inefficient algorithms, unnecessary object creation, or resource leaks.<br>
                - <strong>Testing:</strong> Ensuring there are adequate unit tests and that they cover edge cases.<br>
                - <strong>Adherence to standards:</strong> Following naming conventions, design patterns, and architectural guidelines.
            `
        },
        {
            question: "What would you consider a red flag in a Java method?",
            answer: `
                A red flag might include:<br>
                - <strong>Long methods:</strong> Methods that exceed a certain line count should be refactored into smaller, more manageable methods.<br>
                - <strong>Complexity:</strong> Methods with high cyclomatic complexity should be simplified.<br>
                - <strong>Multiple responsibilities:</strong> Methods doing too many things should adhere to the Single Responsibility Principle (SRP).
            `
        },
        {
            question: "How would you evaluate the use of try-catch blocks in a code snippet? Provide an example of bad usage.",
            answer: `
                I would check if exceptions are caught at the appropriate level, whether specific exceptions are caught rather than general exceptions, and if there’s proper logging. A bad usage example:
                <pre><code>try {
    // risky operation
} catch (Exception e) {
    // Swallowing the exception without logging
}</code></pre>
            `
        },
        {
            question: "What is wrong with the following code, and how would you improve it?",
            answer: `
                <pre><code>public void processList(List<String> items) {
    for (String item : items) {
        if (item != null) {
            System.out.println(item.toUpperCase());
        }
    }
}</code></pre>
                This code could be improved by using Java Streams to avoid explicit null checks and enhance readability:
                <pre><code>items.stream()
    .filter(Objects::nonNull)
    .map(String::toUpperCase)
    .forEach(System.out::println);</code></pre>
            `
        },
        {
            question: "How do you handle the situation where a performance issue is identified in a code review? What steps do you take?",
            answer: `
                I would:<br>
                - Profile the application to identify bottlenecks.<br>
                - Analyze the code to find inefficient algorithms or data structures.<br>
                - Suggest optimizations, such as using appropriate collections, reducing database calls, or implementing caching strategies.<br>
                - Consider algorithmic complexity and suggest alternative approaches if necessary.
            `
        },
        {
            question: "What security concerns would you look for during a code review of a Java application?",
            answer: `
                Key concerns include:<br>
                - <strong>SQL injection vulnerabilities:</strong> Ensuring all database queries use prepared statements.<br>
                - <strong>Input validation:</strong> Checking for proper validation and sanitization of user inputs.<br>
                - <strong>Sensitive data handling:</strong> Ensuring sensitive information (like passwords) is hashed and not hard-coded in the application.<br>
                - <strong>Error handling:</strong> Avoiding exposure of stack traces or sensitive information in error messages.
            `
        },
        {
            question: "Examine this code snippet for exception handling:",
            answer: `
                <pre><code>public void readFile(String filePath) {
    try {
        BufferedReader reader = new BufferedReader(new FileReader(filePath));
        // Read file logic
    } catch (IOException e) {
        System.out.println("Error reading file: " + e.getMessage());
    }
}</code></pre>
                The code catches an <code>IOException</code>, but it should also ensure the <code>BufferedReader</code> is closed. Using try-with-resources would be better:
                <pre><code>public void readFile(String filePath) {
    try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
        // Read file logic
    } catch (IOException e) {
        e.printStackTrace(); // Better logging practice
    }
}</code></pre>
            `
        },
        {
            question: "What aspects of unit tests would you evaluate during a code review?",
            answer: `
                I would evaluate:<br>
                - <strong>Coverage:</strong> Ensuring a sufficient percentage of code is covered by tests, including edge cases.<br>
                - <strong>Readability:</strong> Tests should be clear and easy to understand.<br>
                - <strong>Isolation:</strong> Tests should not rely on external systems (e.g., databases) unless specifically testing integration.<br>
                - <strong>Naming:</strong> Test methods should clearly indicate what they are testing.
            `
        },
        {
            question: "How would you review code that lacks comments or documentation? What suggestions would you make?",
            answer: `
                I would suggest adding comments to explain complex logic and providing Javadoc for public methods and classes. Clear, concise comments can enhance maintainability. Additionally, I would recommend following coding standards that emphasize documentation.
            `
        },
	{
    question: "What should you check for in a multi-threaded Java application during a code review?",
    answer: `
        <pre><code>I would check for:
        - Proper synchronization: Ensuring shared mutable state is properly synchronized.
        - Usage of concurrent collections: Using ConcurrentHashMap, CopyOnWriteArrayList, etc., where appropriate.
        - Thread safety: Ensuring that class methods are thread-safe, especially in shared resources.
        - Potential deadlocks: Analyzing the code for patterns that could lead to deadlocks.
        </code></pre>
    `
},
{
    question: "Analyze the following code for potential concurrency issues:",
    answer: `
        <pre><code>public class Counter {
    private int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}</code></pre>
        The <code>increment()</code> method is not thread-safe; if multiple threads call it concurrently, it may lead to a race condition. To make it thread-safe, you can synchronize the method:
        <pre><code>public synchronized void increment() {
    count++;
}</code></pre>
    `
},
{
    question: "What would you do if you found a class with too many responsibilities during a code review?",
    answer: `
        <pre><code>I would suggest refactoring the class to adhere to the Single Responsibility Principle (SRP). This might involve creating new classes to handle distinct functionalities and ensuring that each class has one reason to change.
        </code></pre>
    `
},
{
    question: "What is wrong with the following code regarding immutability?",
    answer: `
        <pre><code>public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name; // What is the problem?
}</code></pre>
        The <code>Person</code> class is mutable due to the presence of the <code>setName</code> method, which allows changing the state after object creation. To make it immutable, you should remove the setter and only provide a constructor and getter.
    `
},
{
    question: "How would you handle a situation where a code review reveals a heavy reliance on static methods?",
    answer: `
        <pre><code>I would suggest refactoring static methods into instance methods where appropriate to facilitate better testability and flexibility. Static methods can be harder to mock in unit tests, so leveraging dependency injection can improve maintainability.
        </code></pre>
    `
},
{
    question: "What is the significance of using `@SuppressWarnings` during a code review, and when is it appropriate?",
    answer: `
        <pre><code>The @SuppressWarnings annotation is used to suppress compiler warnings for a specific section of code. It should be used judiciously and only when you are confident that the warning can be ignored, as overusing it may hide potential issues.
        </code></pre>
    `
},
{
    question: "What are the naming conventions for classes, methods, and variables in Java? Provide examples.",
    answer: `
        <pre><code>
        - Classes: Use PascalCase (e.g., CustomerAccount).
        - Methods: Use camelCase (e.g., calculateTotal()).
        - Variables: Use camelCase (e.g., totalAmount).
        - Constants: Use UPPER_SNAKE_CASE (e.g., MAX_COUNT).
        </code></pre>
    `
},
{
    question: "What is the significance of using access modifiers in Java, and how do they relate to coding standards?",
    answer: `
        <pre><code>Access modifiers (public, protected, private, default) control the visibility of classes and class members. Following coding standards recommends using the most restrictive access level appropriate to enhance encapsulation and maintainability.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet if it violates the coding standards?",
    answer: `
        <pre><code>public class MyClass {
    int x = 0;
    public void setX(int x) {
        this.x = x;
    }
}</code></pre>
        The output itself will be valid, but the use of a single-letter variable <code>x</code> is not compliant with coding standards for readability. A better practice would be to name the parameter something more descriptive, like <code>value</code>.
    `
},
{
    question: "How does the usage of comments affect code readability and maintainability? Provide an example of both good and bad comments.",
    answer: `
        <pre><code>
        - Good comment: Explains the "why" behind complex logic.
          // Calculate the total price after discount
          double totalPrice = price - discount;
        - Bad comment: Restates what the code does.
          // This line sets totalPrice to price minus discount
          double totalPrice = price - discount; // Bad comment
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet regarding indentation and formatting?",
    answer: `
        <pre><code>public class IndentationExample {
    public static void main(String[] args) {
    System.out.println("Hello World");
    }
}</code></pre>
        The code will compile and run, printing <code>Hello World</code>. However, the inconsistent indentation does not follow coding standards and reduces readability.
    `
},
{
    question: "What is wrong with the following error handling approach, and how can it be improved?",
    answer: `
        <pre><code>public void readFile(String path) {
    try {
        FileReader fr = new FileReader(path);
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    }
}</code></pre>
        The use of <code>e.printStackTrace()</code> is generally not recommended as it does not provide meaningful feedback to the user. A better approach would be to log the exception properly and possibly rethrow it or handle it in a way that informs the user of the issue:
        <pre><code>catch (FileNotFoundException e) {
    logger.error("File not found: " + path, e);
    throw new CustomException("File not found", e);
}</code></pre>
    `
},
{
    question: "How should you format multiline comments in Java according to coding standards?",
    answer: `
        <pre><code>Multiline comments should be used judiciously, and if necessary, formatted to improve readability:
        /*
         * This method performs the following tasks:
         * - Task 1
         * - Task 2
         * - Task 3
         */
        public void performTasks() {
            // Implementation
        }
        </code></pre>
    `
},
{
    question: "What is the significance of using a consistent brace style in Java? Provide an example of good vs. bad brace placement.",
    answer: `
        <pre><code>Consistent brace style improves code readability. For example, the following is a good practice:
        if (condition) {
            // Do something
        } else {
            // Do something else
        }
        A bad practice would be:
        if (condition)
        {
            // Do something
        }
        Mixing styles can confuse readers and lead to maintenance issues.
        </code></pre>
    `
},
{
    question: "What are the implications of using magic numbers in your code? Provide an example and a better alternative.",
    answer: `
        <pre><code>Magic numbers can make code difficult to understand and maintain. For example:
        double area = 3.14 * radius * radius; // What is 3.14?
        A better alternative would be:
        final double PI = Math.PI; // Use a named constant
        double area = PI * radius * radius;
        </code></pre>
    `
},
{
    question: "What is the output of the following code regarding variable naming standards?",
    answer: `
        <pre><code>public class VariableNaming {
    public static void main(String[] args) {
        int 1stNumber = 5; // Will this compile?
    }
}</code></pre>
        The code will not compile due to the variable name <code>1stNumber</code>, which starts with a digit and is not compliant with Java naming conventions. Variable names should start with a letter, underscore, or dollar sign.
    `
},
{
    question: "Why is it important to use generics in collections, and what would happen if you don't?",
    answer: `
        <pre><code>Using generics helps ensure type safety and eliminates the need for casting when retrieving elements. Without generics, you might encounter <code>ClassCastException</code> at runtime:
        List list = new ArrayList();
        list.add("String");
        Integer number = (Integer) list.get(0); // This will throw ClassCastException
        </code></pre>
    `
},
{
    question: "How would you assess the use of synchronization in a multi-threaded Java application during a code review?",
    answer: `
        <pre><code>I would check for:
        - Unnecessary synchronization: Over-synchronizing can lead to performance bottlenecks.
        - Proper use of synchronized blocks: Ensure that synchronization is used at the appropriate granularity.
        - Potential deadlocks: Look for nested synchronized blocks that may cause deadlocks.
        </code></pre>
    `
},
{
    question: "What is the significance of using `@Override` annotation in method definitions?",
    answer: `
        <pre><code>The @Override annotation indicates that a method is intended to override a method from a superclass. It provides compile-time checking, helping to prevent errors such as misnamed methods or incorrect signatures. Omitting it can lead to bugs that are hard to diagnose.
        </code></pre>
    `
},
{
    question: "What is wrong with the following Java code snippet regarding resource management?",
    answer: `
        <pre><code>public void readData() {
    FileReader fr = null;
    try {
        fr = new FileReader("data.txt");
        // Read data
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        fr.close(); // What is the issue here?
    }
}</code></pre>
        The <code>fr.close()</code> call in the <code>finally</code> block can throw a <code>NullPointerException</code> if the <code>FileReader</code> instantiation fails. A better approach is to use try-with-resources:
        <pre><code>try (FileReader fr = new FileReader("data.txt")) {
    // Read data
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
    `
},
{
    question: "How would you address a situation where the code has inconsistent naming conventions? What steps would you take?",
    answer: `
        <pre><code>I would:
        - Suggest a naming convention that adheres to Java standards (camelCase for methods and variables, PascalCase for classes).
        - Refactor the code to rename variables, methods, and classes to follow the agreed-upon convention.
        - Communicate the importance of consistency for maintainability and readability in future code reviews.
        </code></pre>
    `
}

    ],
    "DateFormatter": [
	{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
Date date = sdf.parse("2024-11-05");
System.out.println(sdf.format(date));</code></pre>
        The output will be <code>2024-11-05</code>. The <code>parse()</code> method creates a <code>Date</code> object from the string, and the <code>format()</code> method converts it back to the same string representation.
    `
},
{
    question: "How can you format a date to display the full name of the month (e.g., 'November') using `SimpleDateFormat`?",
    answer: `
        <pre><code>SimpleDateFormat sdf = new SimpleDateFormat("MMMM");
Date date = new Date();
System.out.println(sdf.format(date)); // Outputs the full month name</code></pre>
    `
},
{
    question: "What happens if you try to parse an incorrectly formatted date string using `SimpleDateFormat`?",
    answer: `
        <pre><code>try {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    Date date = sdf.parse("2024-13-05"); // Invalid month
} catch (ParseException e) {
    e.printStackTrace(); // Outputs error
}</code></pre>
        If you try to parse an incorrectly formatted date string, a <code>ParseException</code> will be thrown.
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String dateStr = "2024-11-05 25:00:00";
Date date = sdf.parse(dateStr);
System.out.println(date);</code></pre>
        A <code>ParseException</code> will be thrown because <code>25:00:00</code> is an invalid hour in the time format.
    `
},
{
    question: "How do you convert a `LocalDate` to a formatted string in Java 8? Provide an example.",
    answer: `
        <pre><code>LocalDate date = LocalDate.now();
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String formattedDate = date.format(formatter);
System.out.println(formattedDate); // Outputs the date in the specified format</code></pre>
    `
},
{
    question: "What will happen if you try to format a `LocalDateTime` with a `DateTimeFormatter` that includes a timezone?",
    answer: `
        <pre><code>If you use a <code>DateTimeFormatter</code> that includes timezone information on a <code>LocalDateTime</code>, it will throw an <code>UnsupportedTemporalTypeException</code> because <code>LocalDateTime</code> does not hold timezone information. You should use <code>ZonedDateTime</code> instead.</code></pre>
    `
},
{
    question: "What is the output of the following code snippet involving different date formats?",
    answer: `
        <pre><code>SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
SimpleDateFormat sdf2 = new SimpleDateFormat("MM/dd/yyyy");
String dateStr = "2024-11-05";
Date date = sdf1.parse(dateStr);
System.out.println(sdf2.format(date));</code></pre>
        The output will be <code>11/05/2024</code>. The first format parses the string into a <code>Date</code>, and the second format converts that <code>Date</code> back into the specified string format.
    `
},
{
    question: "How can you safely handle parsing dates that may have different formats? Provide an example.",
    answer: `
        <pre><code>String dateStr = "05/11/2024"; // ambiguous format
String[] formats = {"yyyy-MM-dd", "MM/dd/yyyy", "dd/MM/yyyy"};
Date date = null;
for (String format : formats) {
    try {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        date = sdf.parse(dateStr);
        break; // Exit loop if parsing is successful
    } catch (ParseException e) {
        // Ignore and try the next format
    }
}</code></pre>
    `
},
{
    question: "What will be the result of the following code snippet that manipulates date formatting?",
    answer: `
        <pre><code>SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
Date date = sdf.parse("2024-11-05");
sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
System.out.println(sdf.format(date));</code></pre>
        The output will still be <code>2024-11-05</code> because the <code>SimpleDateFormat</code> will format the date without showing time components. However, if the time were included, the output would reflect the GMT timezone.
    `
},
{
    question: "What happens when you try to format a `Date` using a `DateTimeFormatter` intended for `LocalDate`?",
    answer: `
        <pre><code>Attempting to format a <code>Date</code> with a <code>DateTimeFormatter</code> designed for <code>LocalDate</code> will lead to an <code>UnsupportedTemporalTypeException</code> because the <code>Date</code> type does not implement the <code>Temporal</code> interface that <code>DateTimeFormatter</code> uses.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code?",
    answer: `
        <pre><code>LocalDate date = LocalDate.of(2024, 2, 29); // Leap year
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
System.out.println(date.format(formatter));</code></pre>
        The output will be <code>2024/02/29</code>. The <code>LocalDate</code> object represents February 29, 2024, which is a valid date since 2024 is a leap year.
    `
},
{
    question: "Explain the impact of using `Locale` when formatting dates.",
    answer: `
        <pre><code>Using <code>Locale</code> in date formatting allows you to customize the output format according to regional preferences. For example:
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy", Locale.FRANCE);
LocalDate date = LocalDate.now();
System.out.println(date.format(formatter)); // Outputs in French format</code></pre>
    `
},
{
    question: "How would you parse a date string in a format that includes the timezone information, such as `2024-11-05T10:15:30+01:00`? Provide an example.",
    answer: `
        <pre><code>String dateStr = "2024-11-05T10:15:30+01:00";
ZonedDateTime zdt = ZonedDateTime.parse(dateStr);
System.out.println(zdt); // Outputs the parsed ZonedDateTime</code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
String dateStr = "2024/11/05";
Date date = sdf.parse(dateStr);
System.out.println(date);</code></pre>
        The output will be the internal representation of the date in milliseconds since epoch, e.g., <code>Tue Nov 05 00:00:00 UTC 2024</code>. The actual output format may vary based on the system's default timezone.
    `
},
{
    question: "Can you format a `LocalDateTime` to display only the time component? Provide an example.",
    answer: `
        <pre><code>LocalDateTime dateTime = LocalDateTime.now();
DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
String time = dateTime.format(timeFormatter);
System.out.println(time); // Outputs current time in HH:mm:ss format</code></pre>
    `
}

           ],
    "threadLocal": [
      {
    question: "What is the purpose of `ThreadLocal` in Java, and how does it work?",
    answer: `
        <pre><code><code>ThreadLocal</code> provides thread-local variables, meaning each thread has its own, independently initialized copy of the variable. It is used to maintain data that is only relevant to a particular thread, avoiding shared state between threads.
        </code></pre>
    `
},
{
    question: "What will happen if you access a `ThreadLocal` variable from a different thread?",
    answer: `
        <pre><code>Accessing a <code>ThreadLocal</code> variable from a different thread will return <code>null</code> (or the default value if one is specified). Each thread has its own separate instance of the <code>ThreadLocal</code> variable.
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>public class ThreadLocalExample {
    private static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 1);

    public static void main(String[] args) {
        System.out.println(threadLocal.get());
        threadLocal.set(5);
        System.out.println(threadLocal.get());

        new Thread(() -> {
            System.out.println(threadLocal.get());
            threadLocal.set(10);
            System.out.println(threadLocal.get());
        }).start();
    }
}</code></pre>
        The output will be:
        <pre><code>
        1
        5
        1
        10
        </code></pre>
        The main thread prints <code>1</code> (the initial value) and then <code>5</code> after setting it. The new thread, when started, prints <code>1</code> because it does not inherit the value set by the main thread, and then it sets it to <code>10</code> and prints <code>10</code>.
    `
},
{
    question: "Explain what happens if you call `remove()` on a `ThreadLocal` variable.",
    answer: `
        <pre><code>Calling <code>remove()</code> on a <code>ThreadLocal</code> variable removes the value for the current thread, effectively clearing the variable's value. This is useful for avoiding memory leaks, especially in long-lived threads like servlets.
        </code></pre>
    `
},
{
    question: "What is the difference between `ThreadLocal` and using instance variables in a multithreaded context?",
    answer: `
        <pre><code><code>ThreadLocal</code> provides a separate instance of a variable for each thread, while instance variables are shared among all instances of the class. Using instance variables requires synchronization to avoid concurrency issues, whereas <code>ThreadLocal</code> does not require synchronization for thread-local variables.
        </code></pre>
    `
},
{
    question: "What will be the result of the following code snippet?",
    answer: `
        <pre><code>public class ThreadLocalTest {
    private static ThreadLocal<String> threadLocal = new ThreadLocal<>();

    public static void main(String[] args) {
        threadLocal.set("Hello");
        System.out.println(threadLocal.get());

        new Thread(() -> {
            System.out.println(threadLocal.get()); // What will this print?
        }).start();
    }
}</code></pre>
        The output of the main thread will be <code>"Hello"</code>, and the new thread will print <code>null</code> because it does not inherit the value set in the main thread.
    `
},
{
    question: "How can `ThreadLocal` be used to implement connection pooling? Provide a brief example.",
    answer: `
        <pre><code>You can use <code>ThreadLocal</code> to store a connection for each thread, ensuring that each thread has its own connection instance. Example:
public class ConnectionManager {
    private static ThreadLocal<Connection> connectionHolder = ThreadLocal.withInitial(() -> {
        // Create a new connection
        return createNewConnection();
    });

    public static Connection getConnection() {
        return connectionHolder.get();
    }
}</code></pre>
    `
},
{
    question: "What happens if a `ThreadLocal` variable is not cleared after its use?",
    answer: `
        <pre><code>If a <code>ThreadLocal</code> variable is not cleared, it can lead to memory leaks, particularly in environments like application servers, where threads may be reused. The values will persist for the lifetime of the thread, potentially holding references to objects that should be garbage collected.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet involving multiple threads?",
    answer: `
        <pre><code>public class ThreadLocalMultiple {
    private static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 0);

    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                int value = threadLocal.get();
                threadLocal.set(value + 1);
                System.out.println(threadLocal.get());
            }).start();
        }
    }
}</code></pre>
        The output will vary, but each thread will print <code>1</code> when it runs for the first time. However, because each thread's <code>ThreadLocal</code> value starts at <code>0</code>, and they each increment it separately, you will see <code>1</code> printed three times, but potentially not in order.
    `
},
{
    question: "Can you inherit `ThreadLocal` variables in subclasses? Explain your answer with an example.",
    answer: `
        <pre><code>No, <code>ThreadLocal</code> variables are not inherited by subclasses. Each thread that accesses a <code>ThreadLocal</code> variable will have its own separate instance. Example:
public class Parent {
    protected static ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 1);
}

public class Child extends Parent {
    public void display() {
        System.out.println(threadLocal.get()); // Always returns 1, does not inherit.
    }
}</code></pre>
    `
},
{
    question: "How does `ThreadLocal` behave with Java's garbage collection?",
    answer: `
        <pre><code><code>ThreadLocal</code> instances can lead to memory leaks if not handled properly, as the references to the values stored in <code>ThreadLocal</code> can prevent garbage collection. If the thread that holds the <code>ThreadLocal</code> is long-lived, it may keep objects in memory longer than necessary.
        </code></pre>
    `
},
{
    question: "What will happen if you attempt to use a `ThreadLocal` variable after the thread that set its value has completed?",
    answer: `
        <pre><code>After a thread completes, the <code>ThreadLocal</code> variable will still exist, but its value is specific to that thread and will not be accessible in other threads. If the thread is not cleared properly, the data will linger until the thread is terminated.
        </code></pre>
    `
}
  
    ],
    "linux commands": [
      {
    question: "What will be the output of the following command?",
    answer: `
        <pre><code>echo "Hello World" | cut -d' ' -f1</code></pre>
        The output will be <code>Hello</code>. The <code>cut</code> command splits the input string on spaces (<code>-d' '</code>), and <code>-f1</code> extracts the first field.
    `
},
{
    question: "What is the difference between `rm`, `rm -r`, and `rm -rf`?",
    answer: `
        <pre><code>
        - <code>rm</code> deletes a file.
        - <code>rm -r</code> recursively deletes a directory and its contents.
        - <code>rm -rf</code> forces the deletion without prompting for confirmation, even if the files are write-protected.
        </code></pre>
    `
},
{
    question: "What does the command `ls -l | grep '^d'` do?",
    answer: `
        <pre><code>This command lists all directories in the current directory. <code>ls -l</code> provides a long listing format, and <code>grep '^d'</code> filters out lines that start with <code>d</code>, which indicates a directory.
        </code></pre>
    `
},
{
    question: "What will happen when you run the following command?",
    answer: `
        <pre><code>touch file1.txt file2.txt file3.txt
ls -1 file?.txt</code></pre>
        The command will list <code>file1.txt</code>, <code>file2.txt</code>, and <code>file3.txt</code>. The <code>?</code> is a wildcard that matches any single character.
    `
},
{
    question: "Explain what `chmod 755` does to a file or directory.",
    answer: `
        <pre><code>The command <code>chmod 755</code> sets the permissions of a file or directory to allow the owner to read, write, and execute (7), while the group and others can only read and execute (5). The numeric permissions correspond to:
        - Owner: <code>rwx</code> (4+2+1 = 7)
        - Group: <code>r-x</code> (4+0+1 = 5)
        - Others: <code>r-x</code> (4+0+1 = 5)
        </code></pre>
    `
},
{
    question: "What does the command `find /path -name '*.txt' -exec wc -l {} \\;` do?",
    answer: `
        <pre><code>This command finds all <code>.txt</code> files in the specified <code>/path</code> directory and executes the <code>wc -l</code> command on each found file, which counts and displays the number of lines in each file.
        </code></pre>
    `
},
{
    question: "What will the output of the following command be?",
    answer: `
        <pre><code>echo $((5 * 2 + 3))</code></pre>
        The output will be <code>13</code>. The command evaluates the arithmetic expression inside the double parentheses.
    `
},
{
    question: "What does the command `ps aux | grep [p]ython` accomplish?",
    answer: `
        <pre><code>This command lists all running processes and filters them for <code>python</code>. The brackets prevent the <code>grep</code> command itself from appearing in the output, as the pattern <code>[p]ython</code> does not match the literal string <code>grep python</code>.
        </code></pre>
    `
},
{
    question: "How does the command `tail -f /var/log/syslog` behave, and in what scenario would you use it?",
    answer: `
        <pre><code>The command <code>tail -f /var/log/syslog</code> continuously outputs the last few lines of the <code>syslog</code> file and updates in real-time as new log entries are added. This is useful for monitoring log files during system troubleshooting.
        </code></pre>
    `
},
{
    question: "What will happen when you execute the command `mkdir -p /tmp/test/dir1/dir2`?",
    answer: `
        <pre><code>The command creates the entire directory structure <code>/tmp/test/dir1/dir2</code>. If any of the parent directories (<code>test</code> or <code>dir1</code>) do not exist, they will be created as well due to the <code>-p</code> (parents) option.
        </code></pre>
    `
},
{
    question: "What does the `tar -czf archive.tar.gz /path/to/directory` command do?",
    answer: `
        <pre><code>This command creates a compressed (<code>-z</code>) tarball named <code>archive.tar.gz</code> from the contents of <code>/path/to/directory</code>. The <code>-c</code> option creates a new archive, and <code>-f</code> specifies the filename.
        </code></pre>
    `
},
{
    question: "Explain the difference between `cp file1.txt file2.txt` and `cp -i file1.txt file2.txt`.",
    answer: `
        <pre><code><code>cp file1.txt file2.txt</code> copies <code>file1.txt</code> to <code>file2.txt</code> without any prompts. <code>cp -i file1.txt file2.txt</code> prompts the user for confirmation before overwriting <code>file2.txt</code> if it already exists.
        </code></pre>
    `
},
{
    question: "What is the output of the command `echo {1..5}`?",
    answer: `
        <pre><code>The output will be <code>1 2 3 4 5</code>. This uses brace expansion to generate a sequence of numbers.
        </code></pre>
    `
},
{
    question: "How does the command `grep -r \"pattern\" /path/to/dir` differ from `grep \"pattern\" /path/to/dir/*`?",
    answer: `
        <pre><code><code>grep -r "pattern" /path/to/dir</code> searches recursively for the pattern in all files within <code>/path/to/dir</code> and its subdirectories. In contrast, <code>grep "pattern" /path/to/dir/*</code> searches only in the files directly within <code>/path/to/dir</code>, not in subdirectories.
        </code></pre>
    `
},
{
    question: "What will be the output of the following command?",
    answer: `
        <pre><code>cat file.txt | sort | uniq -c</code></pre>
        This command displays the count of unique lines in <code>file.txt</code>. <code>cat</code> outputs the file's contents, <code>sort</code> arranges them, and <code>uniq -c</code> counts the occurrences of each unique line.
    `
},
{
    question: "What does the command `ping -c 4 google.com` do?",
    answer: `
        <pre><code>This command sends 4 ICMP Echo Request packets to <code>google.com</code> and displays the response times. The <code>-c 4</code> option limits the number of packets sent to 4.
        </code></pre>
    `
},
{
    question: "Explain the purpose of the `netstat -tuln` command.",
    answer: `
        <pre><code>The <code>netstat -tuln</code> command displays the current network connections (TCP and UDP) along with their listening ports. The options mean:
        - <code>-t</code>: Show TCP connections
        - <code>-u</code>: Show UDP connections
        - <code>-l</code>: Show only listening sockets
        - <code>-n</code>: Show numerical addresses instead of resolving hostnames
        </code></pre>
    `
},
{
    question: "What will be the output of the following command?",
    answer: `
        <pre><code>df -h | grep '/dev/sda1'</code></pre>
        This command displays the disk usage statistics for the mounted filesystem <code>/dev/sda1</code>, formatted in a human-readable form (sizes in KB, MB, GB, etc.). If <code>/dev/sda1</code> is not mounted, it will return no output.
    `
},
{
    question: "How can you display the last 10 lines of a file continuously as it is being written to?",
    answer: `
        <pre><code>You can use the <code>tail -f</code> command:
tail -f filename.log</code></pre>
    `
},
{
    question: "What will happen when you run the following command?",
    answer: `
        <pre><code>rm -rf /some/directory/*</code></pre>
        This command forcefully removes all files and subdirectories within <code>/some/directory</code>, without prompting for confirmation. Be cautious, as this can lead to data loss.
    `
}


    ],
    "Java Primitives": [
       {
    question: "What are the eight primitive data types in Java? Provide their default values.",
    answer: `
        <pre><code>byte: 0
short: 0
int: 0
long: 0L
float: 0.0f
double: 0.0d
char: '\u0000' (null character)
boolean: false
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class PrimitiveTest {
    public static void main(String[] args) {
        int x = 5;
        x = x++ + ++x; // What is the value of x after this statement?
        System.out.println(x);
    }
}</code></pre>
        The output will be <code>12</code>. The operation is evaluated as follows:
        - <code>x++</code> returns <code>5</code>, then <code>x</code> becomes <code>6</code>.
        - <code>++x</code> increments <code>x</code> to <code>7</code> and returns <code>7</code>.
        - The expression becomes <code>5 + 7</code>, so <code>x</code> is assigned <code>12</code>.
    `
},
{
    question: "Explain what happens during implicit type conversion (widening conversion) and give an example.",
    answer: `
        <pre><code>Implicit type conversion (or widening conversion) occurs when a smaller primitive type is converted to a larger primitive type without data loss. For example:
int intValue = 100;
long longValue = intValue; // int is automatically widened to long
        </code></pre>
    `
},
{
    question: "What will be the result of the following code?",
    answer: `
        <pre><code>public class Test {
    public static void main(String[] args) {
        char c = 'A';
        int i = c + 1;
        System.out.println(i); // What is the output?
    }
}</code></pre>
        The output will be <code>66</code>. The character <code>'A'</code> has an ASCII value of <code>65</code>, so <code>65 + 1</code> results in <code>66</code>.
    `
},
{
    question: "What will be the output of the following code snippet involving primitives and arithmetic operations?",
    answer: `
        <pre><code>public class PrimitiveArithmetic {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 20;
        byte c = a + b; // Will this compile?
        System.out.println(c);
    }
}</code></pre>
        The code will not compile due to a "possible lossy conversion" error. The result of <code>a + b</code> is an <code>int</code>, so it cannot be directly assigned to a <code>byte</code> variable without explicit casting:
        <pre><code>byte c = (byte) (a + b); // Correct way to compile</code></pre>
    `
},
{
    question: "What will happen if you try to compare two `float` values using the `==` operator? Provide an example where this might lead to unexpected results.",
    answer: `
        <pre><code>Comparing <code>float</code> values with <code>==</code> can lead to unexpected results due to precision issues. For example:
float a = 0.1f + 0.2f;
float b = 0.3f;
System.out.println(a == b); // This may print false due to precision loss
        </code></pre>
    `
},
{
    question: "What is the result of the following code involving arithmetic on primitives?",
    answer: `
        <pre><code>public class PrimitiveOverflow {
    public static void main(String[] args) {
        byte b = 127;
        b += 1; // Is this a valid operation?
        System.out.println(b); // What will be printed?
    }
}</code></pre>
        The output will be <code>-128</code>. The operation causes overflow, as <code>byte</code> has a maximum value of <code>127</code>. When <code>b</code> is incremented, it wraps around to <code>-128</code>.
    `
},
{
    question: "How can you safely convert a `double` to an `int` without losing precision? Provide an example.",
    answer: `
        <pre><code>To convert a <code>double</code> to an <code>int</code> without losing precision, you can use <code>Math.round()</code> to round the value before casting:
double d = 9.99;
int i = (int) Math.round(d); // i will be 10
        </code></pre>
    `
},
{
    question: "What is the effect of using the `==` operator when comparing two `Integer` objects? Provide an example.",
    answer: `
        <pre><code>The <code>==</code> operator compares the references of the two <code>Integer</code> objects, not their values. For example:
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true (due to caching for values -128 to 127)

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // false (different references)
        </code></pre>
    `
},
{
    question: "What will be the output of the following code?",
    answer: `
        <pre><code>public class TestPrimitive {
    public static void main(String[] args) {
        int x = 5;
        int y = 5;
        System.out.println(x == y); // true or false?
        System.out.println(x = y); // What is the output and what happens?
    }
}</code></pre>
        The output of <code>x == y</code> will be <code>true</code>. The line <code>System.out.println(x = y);</code> will print <code>5</code> (the new value of <code>x</code>), and it assigns the value of <code>y</code> to <code>x</code>.
    `
},
{
    question: "What is the result of the following code snippet involving implicit casting?",
    answer: `
        <pre><code>public class ImplicitCasting {
    public static void main(String[] args) {
        int a = 10;
        double b = a; // Implicitly casted to double
        System.out.println(b); // Output?
    }
}</code></pre>
        The output will be <code>10.0</code> because the integer value is implicitly cast to a double.
    `
},
{
    question: "What happens if you try to assign a larger primitive type to a smaller one without casting?",
    answer: `
        <pre><code>You will encounter a compile-time error due to "possible lossy conversion." For example:
long l = 100L;
int i = l; // Compile-time error
        </code></pre>
    `
},
{
    question: "Can you use `null` with primitive types in Java? What will happen if you attempt to do so?",
    answer: `
        <pre><code>You cannot assign <code>null</code> to primitive types as they cannot hold null values. Doing so will result in a compile-time error. However, you can assign <code>null</code> to their corresponding wrapper classes (e.g., <code>Integer</code>, <code>Double</code>).
        </code></pre>
    `
},
{
    question: "What is the output of the following code involving primitive and wrapper types?",
    answer: `
        <pre><code>Integer x = 10; // Autoboxing
int y = x; // Unboxing
x = null;
System.out.println(y); // What will be printed?
        </code></pre>
        The output will be <code>10</code>. The value of <code>y</code> is unboxed before <code>x</code> is set to <code>null</code>.
    `
},
{
    question: "What happens in the following code?",
    answer: `
        <pre><code>public class TestCasting {
    public static void main(String[] args) {
        byte b = 10;
        int i = b + 5; // What is the output?
        System.out.println(i);
    }
}</code></pre>
        The output will be <code>15</code>. The expression <code>b + 5</code> results in an <code>int</code> due to automatic type promotion in arithmetic operations.
    `
}



    ],
    "Java KeyWords": [
        {
    question: "What is the purpose of the `final` keyword in Java, and how does it behave when applied to variables, methods, and classes?",
    answer: `
        <pre><code>The <code>final</code> keyword is used to indicate that a variable's value cannot be changed (for variables), a method cannot be overridden (for methods), and a class cannot be subclassed (for classes). For example:
final int x = 10; // x cannot be reassigned
final void myMethod() { /* cannot be overridden */ }
final class MyFinalClass { /* cannot be subclassed */ }
        </code></pre>
    `
},
{
    question: "What happens if you attempt to override a method in a subclass that is marked as `final` in the parent class?",
    answer: `
        <pre><code>Attempting to override a <code>final</code> method in a subclass will result in a compile-time error, as <code>final</code> methods cannot be modified.
        </code></pre>
    `
},
{
    question: "Explain the `static` keyword and its implications when applied to variables and methods. Provide examples.",
    answer: `
        <pre><code>The <code>static</code> keyword indicates that a variable or method belongs to the class rather than instances of the class. Static variables are shared across all instances, while static methods can be called without an instance. For example:
static int count = 0; // Shared among all instances
static void staticMethod() { /* logic */ }
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>class Base {
    void show() {
        System.out.println("Base");
    }
}

class Derived extends Base {
    final void show() {
        System.out.println("Derived");
    }
}

class Test {
    public static void main(String[] args) {
        Base b = new Derived();
        b.show();
    }
}</code></pre>
        The output will be <code>"Derived"</code> because method resolution in Java is based on the actual object type at runtime, even though the reference type is <code>Base</code>.
    `
},
{
    question: "Can you declare a `static` method in an interface in Java? What are the implications?",
    answer: `
        <pre><code>Yes, starting from Java 8, you can declare <code>static</code> methods in interfaces. These methods can be called on the interface itself and are not inherited by the implementing classes:
interface MyInterface {
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
}
        </code></pre>
    `
},
{
    question: "What is the difference between `this` and `super` keywords in Java? Provide examples of their usage.",
    answer: `
        <pre><code>The <code>this</code> keyword refers to the current instance of the class, while <code>super</code> refers to the superclass's instance or methods. Examples:
class Parent {
    void display() { System.out.println("Parent"); }
}

class Child extends Parent {
    void display() {
        super.display(); // Calls Parent's display
        System.out.println("Child");
    }
}
        </code></pre>
    `
},
{
    question: "What is the significance of the `transient` keyword in Java?",
    answer: `
        <pre><code>The <code>transient</code> keyword is used to indicate that a field should not be serialized. If an object is serialized, transient fields will not be included in the serialized representation:
class User implements Serializable {
    String username;
    transient String password; // Will not be serialized
}
        </code></pre>
    `
},
{
    question: "How does the `volatile` keyword affect a variable in a multi-threaded environment?",
    answer: `
        <pre><code>The <code>volatile</code> keyword indicates that a variable's value may be changed by different threads. It ensures that reads and writes to the variable are directly from and to the main memory, providing visibility guarantees across threads:
volatile boolean flag = false; // Changes made by one thread are visible to others
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet involving the `default` keyword?",
    answer: `
        <pre><code>interface MyInterface {
    default void display() {
        System.out.println("Default method");
    }
}

class MyClass implements MyInterface {
    public void display() {
        System.out.println("Overridden method");
    }
}

public class Test {
    public static void main(String[] args) {
        MyInterface obj = new MyClass();
        obj.display();
    }
}</code></pre>
        The output will be <code>"Overridden method"</code> because the method in <code>MyClass</code> overrides the default method from the interface.
    `
},
{
    question: "Explain the purpose of the `synchronized` keyword and how it affects method execution in a multi-threaded environment.",
    answer: `
        <pre><code>The <code>synchronized</code> keyword is used to restrict access to a method or block of code to a single thread at a time, preventing race conditions. When a method is marked as synchronized, a thread must acquire the lock on the object (or class) before executing it:
synchronized void synchronizedMethod() {
    // Critical section
}
        </code></pre>
    `
},
{
    question: "What is the effect of using the `throws` keyword in a method declaration?",
    answer: `
        <pre><code>The <code>throws</code> keyword indicates that a method may throw one or more exceptions, and the calling method must handle or declare these exceptions. This allows the developer to be aware of potential exceptions during method execution:
void myMethod() throws IOException { /* logic */ }
        </code></pre>
    `
},
{
    question: "How does the `@Override` annotation work, and why is it recommended to use it?",
    answer: `
        <pre><code>The <code>@Override</code> annotation indicates that a method is intended to override a method in a superclass. It helps the compiler check that the method signature matches the parent method, preventing errors if the method does not override anything:
@Override
public void display() { /* logic */ }
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet regarding exception handling?",
    answer: `
        <pre><code>public class ExceptionTest {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}</code></pre>
        The output will be:
        <pre><code>Caught: / by zero
Finally block executed
        </code></pre>
    `
},
{
    question: "Can a class extend multiple classes in Java? What keyword is used to enforce this?",
    answer: `
        <pre><code>No, Java does not support multiple inheritance for classes. The <code>extends</code> keyword is used for single inheritance. However, a class can implement multiple interfaces using the <code>implements</code> keyword.
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }
}

class C extends B {
    void show() {
        System.out.println("C");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new C();
        obj.show();
    }
}</code></pre>
        The output will be <code>"C"</code> because method resolution in Java is based on the actual object type at runtime.
    `
},
{
    question: "What is the impact of the `static` keyword when applied to inner classes?",
    answer: `
        <pre><code>A static inner class can be accessed without an instance of the outer class. It does not have a reference to the outer class instance. For example:
class Outer {
    static class StaticInner {
        void display() {
            System.out.println("Static Inner Class");
        }
    }
}
        </code></pre>
    `
},
{
    question: "How do you use the `native` keyword in Java, and in what scenarios is it applied?",
    answer: `
        <pre><code>The <code>native</code> keyword is used to declare that a method is implemented in native code (typically C or C++) rather than Java. It is used for interfacing with platform-specific code or libraries:
public native void nativeMethod();
        </code></pre>
    `
},
{
    question: "What will be the result of the following code snippet regarding variable shadowing?",
    answer: `
        <pre><code>class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;

    void display() {
        System.out.println(x); // Which x is printed?
    }
}

public class Test {
    public static void main(String[] args) {
        Child c = new Child();
        c.display();
    }
}</code></pre>
        The output will be <code>20</code> because the <code>x</code> variable in the <code>Child</code> class shadows the <code>x</code> variable in the <code>Parent</code> class.
    `
},
{
    question: "Can you use the `strictfp` keyword in Java? What is its purpose?",
    answer: `
        <pre><code>Yes, the <code>strictfp</code> keyword is used to restrict floating-point calculations to ensure portability and consistent results across different platforms. It can be applied to classes or methods. For example:
strictfp class StrictClass {
    // Floating-point operations will adhere to strict rules
}
        </code></pre>
    `
},
{
    question: "What is the result of using the `final` keyword with a method parameter?",
    answer: `
        <pre><code>Using the <code>final</code> keyword with a method parameter indicates that the parameter cannot be reassigned within the method. However, it does not affect the objects that the parameter references:
void myMethod(final int x) {
    // x = 10; // This will cause a compile-time error
}
        </code></pre>
    `
}


    ],
    "Sql Programatically": [
       {
    question: "What will be the output of the following SQL query?",
    answer: `
        <pre><code>SELECT COUNT(*) FROM employees WHERE department_id IN (SELECT department_id FROM departments WHERE location_id = 1400);
        </code></pre>
        The query counts the number of employees whose <code>department_id</code> is found in the list of <code>department_id</code>s from departments located in <code>location_id</code> 1400. If no departments exist for that location, the count will be <code>0</code>.
    `
},
{
    question: "How can you retrieve unique values from a column while ignoring nulls? Provide an example.",
    answer: `
        <pre><code>SELECT DISTINCT column_name FROM table_name WHERE column_name IS NOT NULL;
        </code></pre>
        You can use the <code>DISTINCT</code> keyword along with a <code>WHERE</code> clause to filter out nulls.
    `
},
{
    question: "What is the purpose of using the `HAVING` clause in SQL? Give an example.",
    answer: `
        <pre><code>SELECT department_id, COUNT(*) 
FROM employees 
GROUP BY department_id 
HAVING COUNT(*) > 10; // Only departments with more than 10 employees
        </code></pre>
        The <code>HAVING</code> clause is used to filter groups based on aggregate functions.
    `
},
{
    question: "What is the difference between `INNER JOIN` and `LEFT JOIN`? Provide a practical example.",
    answer: `
        <pre><code>SELECT e.name, d.department_name 
FROM employees e 
LEFT JOIN departments d ON e.department_id = d.department_id;
        </code></pre>
        An <code>INNER JOIN</code> returns only the rows that have matching values in both tables, while a <code>LEFT JOIN</code> returns all rows from the left table and the matched rows from the right table, with nulls for non-matching rows.
    `
},
{
    question: "Explain the concept of a subquery and provide an example of a correlated subquery.",
    answer: `
        <pre><code>SELECT e.name 
FROM employees e 
WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);
        </code></pre>
        A subquery is a query nested inside another SQL query. A correlated subquery refers to a subquery that references columns from the outer query.
    `
},
{
    question: "What will be the result of the following SQL statement?",
    answer: `
        <pre><code>UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10 AND salary < (SELECT AVG(salary) FROM employees);
        </code></pre>
        The query increases the salary of employees in department 10 by 10% only if their current salary is below the average salary of all employees. The number of affected rows will depend on the current salaries.
    `
},
{
    question: "How can you find the second highest salary from the employees table without using the `LIMIT` clause?",
    answer: `
        <pre><code>SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);
        </code></pre>
        You can use a subquery to find the second highest salary.
    `
},
{
    question: "What happens when you run the following SQL statement?",
    answer: `
        <pre><code>DELETE FROM employees WHERE employee_id = 100;
SELECT * FROM employees WHERE employee_id = 100;
        </code></pre>
        The first statement deletes the employee with <code>employee_id</code> 100 from the <code>employees</code> table. The second statement will return no rows since the employee has been deleted.
    `
},
{
    question: "Explain how to perform a self-join and give an example scenario.",
    answer: `
        <pre><code>SELECT a.name AS Employee, b.name AS Manager 
FROM employees a 
JOIN employees b ON a.manager_id = b.employee_id;
        </code></pre>
        A self-join is a regular join but the table is joined with itself. It is useful for comparing rows within the same table.
    `
},
{
    question: "How can you retrieve records from a table that match a specific pattern using SQL?",
    answer: `
        <pre><code>SELECT * FROM employees WHERE name LIKE 'A%'; // Names starting with 'A'
        </code></pre>
        You can use the <code>LIKE</code> operator with wildcard characters <code>%</code> (zero or more characters) and <code>_</code> (exactly one character).
    `
},
{
    question: "What is the purpose of indexing in a database, and how does it improve query performance?",
    answer: `
        <pre><code>Indexing creates a data structure that improves the speed of data retrieval operations on a database table at the cost of additional storage space and slightly slower write operations. It allows the database to find rows more quickly without scanning the entire table.
        </code></pre>
    `
},
{
    question: "What will happen if you create an index on a large table?",
    answer: `
        <pre><code>Creating an index on a large table can take significant time and resources. It will temporarily lock the table for the duration of the index creation, and the index will consume additional disk space. However, it will improve query performance for operations involving the indexed columns.
        </code></pre>
    `
},
{
    question: "How do you determine which columns to index in a SQL table?",
    answer: `
        <pre><code>You should index columns that are frequently used in <code>WHERE</code>, <code>JOIN</code>, and <code>ORDER BY</code> clauses. Additionally, consider indexing columns that have a high degree of uniqueness and are queried frequently to improve performance.
        </code></pre>
    `
},
{
    question: "What is a composite index, and when would you use it?",
    answer: `
        <pre><code>A composite index is an index that includes multiple columns. It is used when queries filter on more than one column, improving performance when those columns are frequently used together. For example:
CREATE INDEX idx_name ON employees (last_name, first_name);
        </code></pre>
    `
},
{
    question: "How can you check the execution plan of a SQL query, and why is it important?",
    answer: `
        <pre><code>You can check the execution plan of a SQL query using commands like <code>EXPLAIN</code> in PostgreSQL or <code>EXPLAIN PLAN</code> in Oracle. It shows how the database engine will execute the query, which is important for optimizing performance and understanding potential bottlenecks.
        </code></pre>
    `
},
{
    question: "What will be the output of the following SQL query?",
    answer: `
        <pre><code>SELECT department_id, COUNT(*) 
FROM employees 
GROUP BY department_id 
HAVING COUNT(*) > 5;
        </code></pre>
        The query will return the <code>department_id</code> and the count of employees for each department that has more than 5 employees. If no departments meet this condition, the result will be empty.
    `
},
{
    question: "How can you rollback a transaction in SQL? Provide an example of how to use it in a script.",
    answer: `
        <pre><code>BEGIN;
INSERT INTO employees (name, department_id) VALUES ('John Doe', 10);
ROLLBACK; // This will undo the insert
        </code></pre>
        You can use the <code>ROLLBACK</code> statement to undo changes made during the transaction.
    `
},
{
    question: "What will be the result of executing the following SQL statement?",
    answer: `
        <pre><code>UPDATE employees SET salary = salary + 5000 WHERE employee_id = 100;
COMMIT;
SELECT * FROM employees WHERE employee_id = 100;
        </code></pre>
        The statement updates the salary of the employee with <code>employee_id</code> 100 by adding 5000 and then commits the transaction. The subsequent <code>SELECT</code> statement will return the updated salary.
    `
},
{
    question: "How can you use a subquery in the `FROM` clause? Provide an example.",
    answer: `
        <pre><code>SELECT avg_salary.department_id, AVG(avg_salary.salary) AS avg_salary 
FROM (SELECT department_id, salary FROM employees) AS avg_salary 
GROUP BY avg_salary.department_id;
        </code></pre>
        You can use a subquery in the <code>FROM</code> clause to create a derived table.
    `
},
{
    question: "What is a common mistake when using joins, and how can you avoid it?",
    answer: `
        <pre><code>A common mistake is forgetting to specify the join condition, which can result in a Cartesian product. To avoid this, always ensure that you include an appropriate <code>ON</code> clause when using <code>JOIN</code>. Example:
SELECT * FROM employees e JOIN departments d ON e.department_id = d.department_id; // Correct
        </code></pre>
    `
}


    ],
    "Exceptions-Programatically": [
        {
    question: "What is the difference between checked and unchecked exceptions in Java? Provide examples.",
    answer: `
        <pre><code>Checked exceptions are exceptions that must be either caught or declared in the method signature (e.g., <code>IOException</code>, <code>SQLException</code>). Unchecked exceptions are not required to be handled or declared (e.g., <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>).
        </code></pre>
    `
},
{
    question: "How does the `try-with-resources` statement work, and what is its benefit?",
    answer: `
        <pre><code>The <code>try-with-resources</code> statement automatically closes resources (like files or sockets) that implement the <code>AutoCloseable</code> interface at the end of the statement. This helps prevent resource leaks. Example:
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
        </code></pre>
    `
},
{
    question: "What happens if you throw an exception from a `finally` block?",
    answer: `
        <pre><code>If an exception is thrown from a <code>finally</code> block, it will override any exception thrown in the <code>try</code> block. The exception from the <code>finally</code> block will be the one propagated. For example:
try {
    throw new Exception("From try");
} catch (Exception e) {
    System.out.println(e.getMessage()); // "From try"
} finally {
    throw new Exception("From finally");
}
// The second exception overrides the first.
        </code></pre>
    `
},
{
    question: "Can you catch multiple exceptions in a single `catch` block? Provide an example.",
    answer: `
        <pre><code>Yes, starting from Java 7, you can catch multiple exceptions in a single <code>catch</code> block using the pipe operator (<code>|</code>). For example:
try {
    // some code that may throw exceptions
} catch (IOException | SQLException e) {
    e.printStackTrace();
}
        </code></pre>
    `
},
{
    question: "What is the significance of the `Throwable` class in Java?",
    answer: `
        <pre><code><code>Throwable</code> is the superclass of all errors and exceptions in Java. It has two main subclasses: <code>Error</code> and <code>Exception</code>. The <code>Throwable</code> class defines methods for obtaining stack traces and messages related to the error or exception.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class ExceptionExample {
    public static void main(String[] args) {
        try {
            throw new ArithmeticException("Division by zero");
        } catch (Exception e) {
            System.out.println("Caught: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException");
        }
    }
}
        </code></pre>
        The output will be <code>"Caught: Division by zero"</code> because <code>ArithmeticException</code> is a subclass of <code>Exception</code>, and the first catch block will handle it.
    `
},
{
    question: "How can you create a custom exception in Java? Provide an example.",
    answer: `
        <pre><code>You can create a custom exception by extending the <code>Exception</code> class or one of its subclasses. For example:
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}
        </code></pre>
    `
},
{
    question: "What happens when an exception is thrown in a thread but not caught?",
    answer: `
        <pre><code>If an exception is thrown in a thread and not caught, it will terminate the thread and print the stack trace to the console. The rest of the application will continue running unless it is the main thread that terminates.
        </code></pre>
    `
},
{
    question: "Explain the difference between `throw` and `throws` in Java.",
    answer: `
        <pre><code><code>throw</code> is used to explicitly throw an exception within a method, while <code>throws</code> is used in a method signature to declare that a method may throw exceptions, requiring callers to handle or declare them. Example:
public void method() throws IOException {
    throw new IOException("Error occurred");
}
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class TestException {
    public static void main(String[] args) {
        try {
            methodA();
        } catch (Exception e) {
            System.out.println("Caught Exception");
        }
    }

    public static void methodA() {
        throw new RuntimeException("Runtime Exception");
    }
}
        </code></pre>
        The output will be <code>"Caught Exception"</code> because <code>RuntimeException</code> is an unchecked exception, and it is caught by the <code>catch</code> block.
    `
},
{
    question: "How can you create a chained exception in Java? Provide an example.",
    answer: `
        <pre><code>You can create a chained exception by passing the cause of the exception when throwing it. For example:
public void method() throws CustomException {
    try {
        // Some code that throws an exception
    } catch (IOException e) {
        throw new CustomException("Custom exception occurred", e);
    }
}
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class ExceptionOrder {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }

    public static void method1() {
        try {
            throw new NullPointerException("Null value");
        } finally {
            throw new IllegalArgumentException("Illegal argument");
        }
    }
}
        </code></pre>
        The output will be <code>"Exception: Illegal argument"</code> because the <code>IllegalArgumentException</code> thrown in the <code>finally</code> block overrides the <code>NullPointerException</code>.
    `
},
{
    question: "How does the Java runtime handle an uncaught exception in a thread?",
    answer: `
        <pre><code>When a thread encounters an uncaught exception, the default behavior is to terminate that thread and print the stack trace to the console. If it is the main thread, the entire application will terminate.
        </code></pre>
    `
},
{
    question: "What is the purpose of the `try-catch-finally` construct, and how is it used?",
    answer: `
        <pre><code>The <code>try-catch-finally</code> construct is used to handle exceptions in a controlled manner. The <code>try</code> block contains code that may throw an exception, the <code>catch</code> block handles the exception, and the <code>finally</code> block executes regardless of whether an exception was thrown, typically for cleanup operations.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class ExceptionTest {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException");
        } catch (Exception e) {
            System.out.println("Caught Exception");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
        </code></pre>
        The output will be:
        <pre><code>Caught ArithmeticException
Finally block executed
        </code></pre>
    `
},
{
    question: "What is a best practice when dealing with exceptions in Java?",
    answer: `
        <pre><code>Some best practices include: 
- Use specific exception types instead of generic exceptions.
- Avoid using exceptions for control flow.
- Clean up resources in the <code>finally</code> block or use <code>try-with-resources</code>.
- Log exceptions with sufficient detail for troubleshooting.
        </code></pre>
    `
},
{
    question: "What happens if you don't catch an exception in Java?",
    answer: `
        <pre><code>If an exception is not caught, it propagates up the call stack. If it reaches the main method without being caught, the Java Virtual Machine (JVM) terminates the program and prints the stack trace to the console.
        </code></pre>
    `
},
{
    question: "Can you throw a checked exception from an unchecked exception?",
    answer: `
        <pre><code>Yes, you can throw a checked exception from within an unchecked exception. However, the checked exception must be caught or declared. For example:
try {
    throw new RuntimeException("Unchecked exception");
} catch (RuntimeException e) {
    throw new IOException("Checked exception", e); // This is valid
}
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>public class ExceptionOutput {
    public static void main(String[] args) {
        try {
            methodThatThrows();
        } catch (RuntimeException e) {
            System.out.println("Caught: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Caught Exception");
        }
    }

    public static void methodThatThrows() {
        throw new RuntimeException("Error occurred");
    }
}
        </code></pre>
        The output will be <code>"Caught: Error occurred"</code>.
    `
},
{
    question: "How can you ensure that a specific type of exception is logged or handled in a custom way?",
    answer: `
        <pre><code>You can use specific catch blocks for the exception type you want to handle or log. Additionally, you can create a custom exception handler by implementing the <code>Thread.UncaughtExceptionHandler</code> interface or using a logging framework to log exceptions as they occur.
        </code></pre>
    `
}


    ],
    "Wrappers": [
       {
    question: "What are wrapper classes in Java, and why are they used?",
    answer: `
        <pre><code>Wrapper classes in Java are classes that encapsulate primitive data types into objects. They are used to provide object-oriented features to primitive types, such as being able to store them in collections, pass them to methods that require objects, and leverage features like nullability.
        </code></pre>
    `
},
{
    question: "Can you name the wrapper classes for each primitive data type?",
    answer: `
        <pre><code>
- <code>int</code> → <code>Integer</code>
- <code>byte</code> → <code>Byte</code>
- <code>short</code> → <code>Short</code>
- <code>long</code> → <code>Long</code>
- <code>float</code> → <code>Float</code>
- <code>double</code> → <code>Double</code>
- <code>char</code> → <code>Character</code>
- <code>boolean</code> → <code>Boolean</code>
        </code></pre>
    `
},
{
    question: "Explain the concept of autoboxing and unboxing in Java. Provide an example.",
    answer: `
        <pre><code>Autoboxing is the automatic conversion of a primitive type to its corresponding wrapper class, while unboxing is the reverse process. For example:
int primitive = 5;
Integer wrapped = primitive; // Autoboxing
int unwrapped = wrapped; // Unboxing
        </code></pre>
    `
},
{
    question: "What will be the result of comparing two wrapper objects using the `==` operator? Explain why.",
    answer: `
        <pre><code>The <code>==</code> operator compares the references of the wrapper objects rather than their values. If the wrapper objects are cached (like <code>Integer</code> values between -128 and 127), it may return true for equal values. For example:
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true (autoboxing with cached values)

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // false (different references)
        </code></pre>
    `
},
{
    question: "What is the impact of using `Integer.valueOf(int)` compared to `new Integer(int)`?",
    answer: `
        <pre><code><code>Integer.valueOf(int)</code> utilizes caching for values between -128 and 127, returning the cached instance when possible. In contrast, <code>new Integer(int)</code> always creates a new instance, which can lead to unnecessary object creation and increased memory usage.
        </code></pre>
    `
},
{
    question: "What happens when you attempt to assign a `null` value to a primitive wrapper class?",
    answer: `
        <pre><code>Assigning <code>null</code> to a primitive wrapper class variable will result in a <code>NullPointerException</code> if you try to unbox it to a primitive type. For example:
Integer number = null;
int value = number; // Throws NullPointerException
        </code></pre>
    `
},
{
    question: "Can you use wrapper classes as keys in a HashMap? What are the implications?",
    answer: `
        <pre><code>Yes, wrapper classes can be used as keys in a <code>HashMap</code>. However, it's important to remember that they are compared based on their <code>equals()</code> method, which checks for value equality. Using mutable wrapper classes or relying on reference equality can lead to unexpected behavior.
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>Integer x = 200;
Integer y = 200;
System.out.println(x == y);
System.out.println(x.equals(y));
        </code></pre>
        The output will be:
        <pre><code>false
true
        </code></pre>
        This is because <code>x</code> and <code>y</code> refer to different objects (not cached), so <code>==</code> compares references, while <code>equals()</code> compares their values.
    `
},
{
    question: "What happens when you perform arithmetic operations on wrapper classes? Provide an example.",
    answer: `
        <pre><code>Arithmetic operations on wrapper classes require unboxing before the operation can be performed, as they are objects. For example:
Integer a = 10;
Integer b = 20;
Integer sum = a + b; // Autoboxing and unboxing occur
System.out.println(sum); // Result: 30
        </code></pre>
    `
},
{
    question: "How does the `compareTo()` method work for wrapper classes? Can you provide an example?",
    answer: `
        <pre><code>The <code>compareTo()</code> method is used to compare two wrapper objects and returns an integer value indicating their order. For example:
Integer a = 5;
Integer b = 10;
int result = a.compareTo(b); // Result: -1 (since 5 < 10)
        </code></pre>
    `
},
{
    question: "How can you handle scenarios where you need to convert a collection of primitive types to a collection of wrapper classes?",
    answer: `
        <pre><code>You can use Java Streams to map primitive types to their corresponding wrapper classes. For example:
int[] primitiveArray = {1, 2, 3};
List<Integer> wrapperList = Arrays.stream(primitiveArray)
    .boxed()
    .collect(Collectors.toList());
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>Integer a = 100;
Integer b = 100;
Integer c = 200;
Integer d = 200;
System.out.println(a == b); // true
System.out.println(c == d); // false
System.out.println(a.equals(b)); // true
System.out.println(c.equals(d)); // true
        </code></pre>
        The output will be:
        <pre><code>true
false
true
true
        </code></pre>
    `
},
{
    question: "How do you convert a string to a primitive wrapper type? Provide an example.",
    answer: `
        <pre><code>You can use the wrapper class's <code>valueOf</code> method or <code>parseXxx</code> methods for conversion. For example:
String str = "123";
Integer number = Integer.valueOf(str); // Using valueOf
// or
int num = Integer.parseInt(str); // Converting directly to int
        </code></pre>
    `
},
{
    question: "Explain the use of `Optional` in conjunction with wrapper classes and how it can help avoid null references.",
    answer: `
        <pre><code><code>Optional<T></code> is used to represent an optional value that may or may not be present, allowing for better null handling. For example, instead of returning <code>null</code>, you can return <code>Optional<Integer></code>:
public Optional<Integer> findNumber() {
    Integer number = ...; // Fetch or calculate number
    return Optional.ofNullable(number); // Return Optional<Integer>
}
        </code></pre>
    `
},
{
    question: "How would you create a method that takes a variable number of integer parameters and returns their sum using wrapper classes?",
    answer: `
        <pre><code>You can use varargs in the method signature:
public int sum(Integer... numbers) {
    return Arrays.stream(numbers).mapToInt(Integer::intValue).sum();
}
        </code></pre>
    `
},
{
    question: "What is the result of trying to compare two wrapper objects that have the same value but are created using `new`?",
    answer: `
        <pre><code>The comparison using <code>==</code> will return <code>false</code> because they are different object instances, even if they hold the same value. For example:
Integer a = new Integer(100);
Integer b = new Integer(100);
System.out.println(a == b); // false
System.out.println(a.equals(b)); // true
        </code></pre>
    `
},
{
    question: "How do you handle a scenario where a wrapper class is expected but a primitive type is provided?",
    answer: `
        <pre><code>Java will automatically perform autoboxing to convert the primitive type to its corresponding wrapper class when required:
Integer wrapped = 5; // Autoboxing from int to Integer
        </code></pre>
    `
},
{
    question: "Can you use wrapper classes in switch statements? Why or why not?",
    answer: `
        <pre><code>No, you cannot use wrapper classes (like <code>Integer</code>) in switch statements in Java prior to Java 7. You can only use primitive types (like <code>int</code>) or their corresponding enumerated types or strings (from Java 7 onwards).
        </code></pre>
    `
},
{
    question: "What will happen if you try to use a wrapper class with a non-compatible type in a generic method?",
    answer: `
        <pre><code>You will receive a compilation error due to type incompatibility. For example:
public <T> void printValue(T value) {
    System.out.println(value);
}
printValue("Hello"); // Works
printValue(new Integer(100)); // Works
printValue(new Object()); // Works
        </code></pre>
    `
},
{
    question: "How can you check if a given string can be successfully converted to a specific wrapper type, such as Integer?",
    answer: `
        <pre><code>You can use a try-catch block around the parsing method to catch potential exceptions:
String str = "123";
try {
    Integer number = Integer.valueOf(str);
    System.out.println("Valid Integer: " + number);
} catch (NumberFormatException e) {
    System.out.println("Invalid Integer");
}
        </code></pre>
    `
}


    ],
    "Spring Transactions": [
       {
    question: "What is transaction management in Spring, and why is it important?",
    answer: `
        <pre><code>Transaction management in Spring ensures that a series of operations are executed as a single unit of work, maintaining data integrity. It is important because it helps to handle failures gracefully and ensures that either all operations succeed or none do, thus preventing data inconsistency.
        </code></pre>
    `
},
{
    question: "Explain the role of the `@Transactional` annotation in Spring.",
    answer: `
        <pre><code>The <code>@Transactional</code> annotation is used to specify that a method (or class) should be executed within a transactional context. It can be applied at the method level or class level and controls the transaction behavior such as propagation, isolation level, and rollback rules.
        </code></pre>
    `
},
{
    question: "What are the default propagation and isolation levels for a Spring transaction?",
    answer: `
        <pre><code>The default propagation level is <code>Propagation.REQUIRED</code>, which means that the method will join an existing transaction if one is already in progress or create a new one if not. The default isolation level is <code>Isolation.DEFAULT</code>, which uses the default isolation level of the underlying database.
        </code></pre>
    `
},
{
    question: "How does transaction propagation affect method calls in a Spring application? Provide an example.",
    answer: `
        <pre><code>Transaction propagation controls how transactions are managed when methods call each other. For example:
@Service
public class TransactionService {
    @Transactional
    public void methodA() {
        // Method A logic
        methodB(); // Calls method B within the same transaction
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void methodB() {
        // Method B logic in a new transaction
    }
}
        </code></pre>
        In this example, <code>methodB()</code> runs in a new transaction regardless of whether <code>methodA()</code> is already in a transaction.
    `
},
{
    question: "What happens if a method annotated with `@Transactional` throws a runtime exception?",
    answer: `
        <pre><code>If a method annotated with <code>@Transactional</code> throws a runtime exception (unchecked exception), the transaction will be rolled back automatically. However, if a checked exception is thrown, the transaction will not be rolled back unless specified by the <code>rollbackFor</code> attribute.
        </code></pre>
    `
},
{
    question: "Explain the difference between `@Transactional` at the class level vs. the method level.",
    answer: `
        <pre><code>When <code>@Transactional</code> is applied at the class level, all public methods in that class participate in the same transaction context. When applied at the method level, only that specific method will be transactional, and it can have its own configuration independent of the class-level settings.
        </code></pre>
    `
},
{
    question: "How do you configure a Spring application to manage transactions using an XML configuration? Provide an example.",
    answer: `
        <pre><code>You can configure transaction management in XML by defining a transaction manager and enabling annotation-driven transaction management. For example:
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/tx
           http://www.springframework.org/schema/tx/spring-tx.xsd">

    <bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
        <!-- DataSource configuration -->
    </bean>

    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource" />
    </bean>

    <tx:annotation-driven transaction-manager="transactionManager" />
</beans>
        </code></pre>
    `
},
{
    question: "How can you programmatically manage transactions in Spring without using annotations? Provide an example.",
    answer: `
        <pre><code>You can manage transactions programmatically using the <code>TransactionTemplate</code>. Here’s an example:
@Service
public class MyService {
    @Autowired
    private TransactionTemplate transactionTemplate;

    public void performTransaction() {
        transactionTemplate.execute(status -> {
            // Your transactional logic here
            return null; // Return a value if needed
        });
    }
}
        </code></pre>
    `
},
{
    question: "What is the purpose of the `@Transactional(readOnly = true)` attribute, and how does it affect performance?",
    answer: `
        <pre><code>The <code>readOnly = true</code> attribute indicates that the transaction is read-only and can optimize performance by allowing the underlying database to apply optimizations for read operations, such as not acquiring exclusive locks. This helps reduce overhead in read-only transaction scenarios.
        </code></pre>
    `
},
{
    question: "How do you test a service method annotated with `@Transactional` using Spring's testing support?",
    answer: `
        <pre><code>You can use <code>@Transactional</code> in your test configuration to roll back transactions after each test method. For example:
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {TestConfig.class})
@Transactional
public class MyServiceTest {
    @Autowired
    private MyService myService;

    @Test
    public void testTransactionalMethod() {
        myService.performTransaction();
        // Assert conditions
    }
}
        </code></pre>
    `
},
{
    question: "What will happen if a method annotated with `@Transactional` is called from another method within the same class?",
    answer: `
        <pre><code>The transaction will not be propagated as expected because Spring uses proxy-based AOP. The inner method will not be executed within a transactional context unless it is called from outside the class, resulting in no transaction being created for that call.
        </code></pre>
    `
},
{
    question: "How do you handle multiple data sources in a Spring application with transactions?",
    answer: `
        <pre><code>You can configure multiple <code>DataSource</code> beans and their respective transaction managers. Use the <code>@Primary</code> annotation on the main transaction manager and specify the desired transaction manager in your <code>@Transactional</code> annotation when using different data sources:
@Transactional("secondTransactionManager")
public void methodUsingSecondDataSource() {
    // Logic using the second data source
}
        </code></pre>
    `
},
{
    question: "What are the implications of using `PROPAGATION_REQUIRES_NEW`?",
    answer: `
        <pre><code>Using <code>PROPAGATION_REQUIRES_NEW</code> means that the method will always execute in a new transaction, suspending any existing transactions. This can lead to issues where changes made in the suspended transaction are not visible to the new transaction, and it can complicate rollback scenarios.
        </code></pre>
    `
},
{
    question: "How would you configure a custom rollback policy in a Spring application?",
    answer: `
        <pre><code>You can specify a custom rollback policy using the <code>rollbackFor</code> and <code>noRollbackFor</code> attributes of the <code>@Transactional</code> annotation, indicating which exceptions should trigger a rollback:
@Transactional(rollbackFor = CustomException.class)
public void myMethod() {
    // Logic
}
        </code></pre>
    `
},
{
    question: "What will happen to the transaction if a method annotated with `@Transactional` is called from a method that is not annotated within the same bean?",
    answer: `
        <pre><code>The transaction context will not be applied because the call to the <code>@Transactional</code> method happens internally within the same bean. The transaction will not be started, and no transactional behavior will occur.
        </code></pre>
    `
}

    ],
    "Spring Bean Scopes": [
        {
    question: "What are the different scopes available for Spring beans? Explain each scope briefly.",
    answer: `
        <pre><code>
- <b>Singleton</b>: A single instance of the bean is created and shared across the entire Spring container.
- <b>Prototype</b>: A new instance of the bean is created each time it is requested from the container.
- <b>Request</b>: A new instance of the bean is created for each HTTP request (only applicable in a web context).
- <b>Session</b>: A new instance of the bean is created for each HTTP session (only applicable in a web context).
- <b>Application</b>: A single instance of the bean is created for the lifecycle of a ServletContext (web applications).
- <b>WebSocket</b>: A new instance is created for each WebSocket session (only applicable in a WebSocket context).
        </code></pre>
    `
},
{
    question: "How do you define the scope of a Spring bean in the configuration file using XML? Provide an example.",
    answer: `
        <pre><code>You can define the scope using the <code>scope</code> attribute in the <code><bean></code> tag. For example:
<bean id="myBean" class="com.example.MyBean" scope="prototype"/>
        </code></pre>
    `
},
{
    question: "How do you define the scope of a Spring bean using annotations? Provide an example.",
    answer: `
        <pre><code>You can define the scope using the <code>@Scope</code> annotation in conjunction with <code>@Component</code>, <code>@Service</code>, or other stereotype annotations. For example:
@Component
@Scope("singleton")
public class MyBean {
    // Bean implementation
}
        </code></pre>
    `
},
{
    question: "What will happen if you request a prototype-scoped bean from a singleton-scoped bean? Provide an example scenario.",
    answer: `
        <pre><code>Each time the singleton bean requests the prototype bean, a new instance of the prototype bean will be created. For example:
@Component
public class SingletonBean {
    @Autowired
    private ApplicationContext context;

    public PrototypeBean getPrototypeBean() {
        return context.getBean(PrototypeBean.class);
    }
}
        </code></pre>
    `
},
{
    question: "What is the effect of changing the scope of a bean from singleton to prototype? How would it impact the application's behavior?",
    answer: `
        <pre><code>Changing from singleton to prototype means that a new instance will be created each time the bean is requested, leading to potential changes in state if the bean maintains internal data. This can affect the application’s behavior, especially in scenarios where statefulness is important.
        </code></pre>
    `
},
{
    question: "How can you inject a prototype-scoped bean into a singleton-scoped bean in Spring?",
    answer: `
        <pre><code>To inject a prototype bean into a singleton bean, you can use the <code>@Lookup</code> annotation to ensure that a new instance of the prototype bean is retrieved each time it is needed:
@Component
public abstract class SingletonBean {
    @Lookup
    public abstract PrototypeBean getPrototypeBean();
}
        </code></pre>
    `
},
{
    question: "What happens to a request-scoped bean when a user logs out from a web application?",
    answer: `
        <pre><code>A request-scoped bean is tied to the lifecycle of an HTTP request. When the user logs out, any request-scoped beans created during that request will be eligible for garbage collection once the request is complete, as they are no longer in use.
        </code></pre>
    `
},
{
    question: "How can you manage bean scopes in a Spring Boot application? Provide a code example.",
    answer: `
        <pre><code>In Spring Boot, you can manage bean scopes using annotations. For example:
@Configuration
public class AppConfig {
    @Bean
    @Scope("session")
    public SessionScopedBean sessionScopedBean() {
        return new SessionScopedBean();
    }
}
        </code></pre>
    `
},
{
    question: "How would you test the behavior of a session-scoped bean in a web application?",
    answer: `
        <pre><code>You can test a session-scoped bean by creating multiple HTTP sessions (using MockMvc or similar tools) and verifying that each session has its own instance of the bean. This can be done using Spring's testing support for web applications.
        </code></pre>
    `
},
{
    question: "What are the implications of using a prototype bean in a singleton service, and how can you handle it properly?",
    answer: `
        <pre><code>Using a prototype bean in a singleton service may lead to stale references or unintended state sharing. To handle it properly, you should retrieve the prototype bean from the <code>ApplicationContext</code> each time it is needed or use <code>@Lookup</code> to get a new instance.
        </code></pre>
    `
},
{
    question: "How can you scope a bean in a Spring application to be the same as the HTTP session?",
    answer: `
        <pre><code>You can define a session-scoped bean by annotating it with <code>@Scope("session")</code> in a web application. For example:
@Component
@Scope("session")
public class UserSessionBean {
    // Bean implementation
}
        </code></pre>
    `
},
{
    question: "What is the difference between `@SessionScope` and `@RequestScope` annotations in Spring?",
    answer: `
        <pre><code><code>@SessionScope</code> defines a bean that is created once per HTTP session, while <code>@RequestScope</code> defines a bean that is created for each HTTP request. The former lasts for the entire session duration, while the latter is short-lived.
        </code></pre>
    `
},
{
    question: "Explain how Spring manages the lifecycle of beans with different scopes.",
    answer: `
        <pre><code>Spring manages the lifecycle of beans based on their scope. Singleton beans are created at the startup of the application context and live for the entire application lifecycle. Prototype beans are created each time they are requested. Request and session beans are created with each HTTP request or session, respectively, and are cleaned up at the end of their lifecycle.
        </code></pre>
    `
},
{
    question: "How can you customize the behavior of a bean based on its scope? Provide an example using `@PostConstruct` and `@PreDestroy`.",
    answer: `
        <pre><code>You can customize behavior using lifecycle annotations. For example:
@Component
@Scope("prototype")
public class MyPrototypeBean {
    @PostConstruct
    public void init() {
        // Initialization logic
    }

    @PreDestroy
    public void cleanup() {
        // Cleanup logic
    }
}
        </code></pre>
    `
},
{
    question: "What will happen if you try to use a session-scoped bean in a standalone application (not a web context)?",
    answer: `
        <pre><code>In a standalone application, the session scope will not be applicable since there is no HTTP session. If you attempt to use a session-scoped bean, Spring will throw an exception indicating that no session exists.
        </code></pre>
    `
}

    ],
    "Functional Interfaces": [
       {
    question: "What is a functional interface in Java, and how is it defined?",
    answer: `
        <pre><code>A functional interface is an interface that contains exactly one abstract method, allowing it to be used as the target type for a lambda expression or method reference. It can have multiple default or static methods. It is often annotated with <code>@FunctionalInterface</code>, though the annotation is optional.
        </code></pre>
    `
},
{
    question: "Can you provide an example of a built-in functional interface and explain its purpose?",
    answer: `
        <pre><code>An example of a built-in functional interface is <code>Predicate<T></code>, which represents a boolean-valued function of one argument. It has a method <code>boolean test(T t)</code> that evaluates a condition. It is commonly used for filtering elements in streams.
        </code></pre>
    `
},
{
    question: "How does the `@FunctionalInterface` annotation affect the definition of an interface?",
    answer: `
        <pre><code>The <code>@FunctionalInterface</code> annotation indicates that the interface is intended to be a functional interface, providing a compile-time check. If the interface contains more than one abstract method, a compilation error will occur.
        </code></pre>
    `
},
{
    question: "Can an interface with default methods still be considered a functional interface? Explain why or why not.",
    answer: `
        <pre><code>Yes, an interface with default methods can still be a functional interface as long as it has only one abstract method. Default methods do not count towards the abstract method limit.
        </code></pre>
    `
},
{
    question: "What is the signature of the `Function` functional interface, and how is it used?",
    answer: `
        <pre><code>The <code>Function<T, R></code> interface has the method <code>R apply(T t)</code>, which takes an argument of type T and returns a result of type R. It is used for transforming data, such as mapping one type to another in streams:
Function<String, Integer> stringLength = String::length;
int length = stringLength.apply("Hello"); // Result: 5
        </code></pre>
    `
},
{
    question: "What is the difference between `Consumer<T>` and `BiConsumer<T, U>`?",
    answer: `
        <pre><code><code>Consumer<T></code> is a functional interface that takes a single argument of type T and performs an action without returning a result (void). <code>BiConsumer<T, U></code> takes two arguments of types T and U and also performs an action without returning a result. For example:
Consumer<String> print = System.out::println;
BiConsumer<String, Integer> printWithLength = (str, len) -> System.out.println(str + " has length: " + len);
        </code></pre>
    `
},
{
    question: "Can you provide an example of using `Supplier<T>` and explain its use case?",
    answer: `
        <pre><code><code>Supplier<T></code> is a functional interface with a method <code>T get()</code> that returns a value without taking any input. It is often used for lazy generation of values or for creating instances. For example:
Supplier<Double> randomValue = Math::random;
double value = randomValue.get(); // Generates a random double
        </code></pre>
    `
},
{
    question: "Explain the purpose of the `UnaryOperator<T>` and `BinaryOperator<T>` interfaces.",
    answer: `
        <pre><code><code>UnaryOperator<T></code> is a specialization of <code>Function<T, T></code>, representing a function that takes one argument and returns a result of the same type. <code>BinaryOperator<T></code> is a specialization of <code>BiFunction<T, T, T></code>, representing a function that takes two arguments of the same type and returns a result of that type. For example:
UnaryOperator<Integer> square = x -> x * x;
BinaryOperator<Integer> sum = (x, y) -> x + y;
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Function<String, String> toUpperCase = String::toUpperCase;
List<String> upperNames = names.stream()
    .map(toUpperCase)
    .collect(Collectors.toList());
System.out.println(upperNames);
        </code></pre>
        The output will be <code>[ALICE, BOB, CHARLIE]</code>, as it maps each name to its uppercase version.
    `
},
{
    question: "How do you use `Predicate<T>` to filter a list of integers based on a specific condition? Provide an example.",
    answer: `
        <pre><code>You can use <code>Predicate<T></code> to define a condition and then use it to filter a list:
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Predicate<Integer> isEven = n -> n % 2 == 0;
List<Integer> evenNumbers = numbers.stream()
    .filter(isEven)
    .collect(Collectors.toList()); // Result: [2, 4]
        </code></pre>
    `
},
{
    question: "Can a functional interface extend another functional interface? What will happen if the extending interface has more than one abstract method?",
    answer: `
        <pre><code>Yes, a functional interface can extend another functional interface. However, if the extending interface adds more abstract methods, it will no longer be a functional interface, leading to a compilation error.
        </code></pre>
    `
},
{
    question: "What happens if you try to create a lambda expression for a non-functional interface?",
    answer: `
        <pre><code>A compilation error will occur if you try to create a lambda expression for an interface that has more than one abstract method or does not meet the criteria of a functional interface.
        </code></pre>
    `
},
{
    question: "How can you combine multiple `Predicate<T>` instances? Provide an example.",
    answer: `
        <pre><code>You can combine multiple <code>Predicate<T></code> instances using the <code>and()</code>, <code>or()</code>, and <code>negate()</code> methods. For example:
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;
Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);

List<Integer> numbers = Arrays.asList(-2, -1, 0, 1, 2, 3);
List<Integer> result = numbers.stream()
    .filter(isEvenAndPositive)
    .collect(Collectors.toList()); // Result: [2]
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>List<Integer> values = Arrays.asList(1, 2, 3, 4);
Predicate<Integer> isGreaterThan2 = n -> n > 2;
long count = values.stream()
    .filter(isGreaterThan2)
    .count();
System.out.println(count);
        </code></pre>
        The output will be <code>2</code>, as there are two values (3 and 4) that are greater than 2.
    `
},
{
    question: "How do you use `Function<T, R>` in a stream to transform a list of integers to their string representations?",
    answer: `
        <pre><code>You can use <code>Function<T, R></code> to convert integers to their string representations:
List<Integer> numbers = Arrays.asList(1, 2, 3);
List<String> stringValues = numbers.stream()
    .map(String::valueOf)
    .collect(Collectors.toList()); // Result: ["1", "2", "3"]
        </code></pre>
    `
},
{
    question: "What are the potential performance impacts of using functional interfaces in streams?",
    answer: `
        <pre><code>The use of functional interfaces can introduce overhead due to method calls, especially in large data sets or when using complex lambda expressions. However, they can also enable better optimization by the JVM through inlining.
        </code></pre>
    `
},
{
    question: "How can you handle checked exceptions in a lambda expression for a functional interface?",
    answer: `
        <pre><code>You cannot throw checked exceptions directly from a lambda. You can wrap the call in a try-catch block or create a custom functional interface that allows checked exceptions, handling them appropriately.
        </code></pre>
    `
},
{
    question: "What happens if you use a lambda expression that captures mutable state from the enclosing scope?",
    answer: `
        <pre><code>If a lambda captures mutable state, modifications to that state can lead to unexpected behavior, especially in concurrent scenarios. It can result in race conditions or inconsistent results.
        </code></pre>
    `
},
{
    question: "How would you define a functional interface that allows throwing checked exceptions?",
    answer: `
        <pre><code>You can create a custom functional interface that declares a checked exception:
@FunctionalInterface
public interface CheckedFunction<T, R> {
    R apply(T t) throws Exception;
}
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>Function<String, String> toUpperCase = s -> s.toUpperCase();
Function<String, String> addExclamation = s -> s + "!";
Function<String, String> combined = toUpperCase.andThen(addExclamation);
String result = combined.apply("hello");
System.out.println(result);
        </code></pre>
        The output will be <code>"HELLO!"</code>, as the string is first converted to uppercase and then an exclamation mark is appended.
    `
},
{
    question: "How can you create a stream of function compositions using functional interfaces?",
    answer: `
        <pre><code>You can create a stream of functions and then compose them using <code>andThen</code> or <code>compose</code>:
Function<Integer, Integer> addOne = x -> x + 1;
Function<Integer, Integer> multiplyByTwo = x -> x * 2;

Function<Integer, Integer> combinedFunction = addOne.andThen(multiplyByTwo);
int result = combinedFunction.apply(3); // Result: (3 + 1) * 2 = 8
        </code></pre>
    `
},
{
    question: "Can you use method references with functional interfaces? Provide an example.",
    answer: `
        <pre><code>Yes, method references can be used with functional interfaces. For example:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println); // Method reference to print each name
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>Function<Integer, Integer> multiplyByTwo = x -> x * 2;
Function<Integer, Integer> multiplyByThree = x -> x * 3;

Integer result = multiplyByTwo.compose(multiplyByThree).apply(2);
System.out.println(result);
        </code></pre>
        The output will be <code>12</code>, as it first applies <code>multiplyByThree</code> (2 * 3 = 6) and then <code>multiplyByTwo</code> (6 * 2 = 12).
    `
},
{
    question: "How can you create a list of squared values from a list of integers using functional interfaces?",
    answer: `
        <pre><code>You can use the <code>Function</code> interface in combination with the <code>map</code> operation:
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
List<Integer> squares = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList()); // Result: [1, 4, 9, 16]
        </code></pre>
    `
},
{
    question: "What is the result of the following code?",
    answer: `
        <pre><code>List<String> words = Arrays.asList("hello", "world");
Predicate<String> isLongerThan3 = word -> word.length() > 3;
long count = words.stream()
    .filter(isLongerThan3)
    .count();
System.out.println(count);
        </code></pre>
        The output will be <code>2</code>, as both "hello" and "world" are longer than 3 characters.
    `
}


    ],
    "Terinary operations Java8": [
        {
    question: "What is the syntax of a ternary operator in Java? Provide a simple example.",
    answer: `
        <pre><code>The syntax is <code>condition ? expressionIfTrue : expressionIfFalse;</code>. For example:
int a = 5;
int b = 10;
int max = (a > b) ? a : b; // max will be 10
        </code></pre>
    `
},
{
    question: "How does the ternary operator differ from a traditional if-else statement?",
    answer: `
        <pre><code>The ternary operator is a single expression that returns a value, making it concise for assignments. In contrast, an if-else statement is a block of code that can perform multiple actions but does not directly return a value.
        </code></pre>
    `
},
{
    question: "Can you use the ternary operator to assign values of different types? Provide an example.",
    answer: `
        <pre><code>Yes, but the types must be compatible or one must be cast to the other. For example:
Object result = (5 > 3) ? "Greater" : 2; // result is of type Object
        </code></pre>
    `
},
{
    question: "What happens if you use the ternary operator with incompatible types?",
    answer: `
        <pre><code>If the two expressions after the <code>?</code> and <code>:</code> are incompatible types and cannot be implicitly cast, a compilation error will occur. For instance:
String result = (5 > 3) ? "Greater" : 2; // Compilation error
        </code></pre>
    `
},
{
    question: "Explain the precedence of the ternary operator compared to other operators.",
    answer: `
        <pre><code>The ternary operator (<code>?:</code>) has lower precedence than most operators (like arithmetic, relational, etc.) but higher precedence than assignment operators. This means parentheses may be needed to ensure the correct order of evaluation.
        </code></pre>
    `
},
{
    question: "What will be the result of the following expression?",
    answer: `
        <pre><code>int a = 10, b = 20;
String result = (a > b) ? "A is greater" : (a == b) ? "A equals B" : "B is greater";
        </code></pre>
        The result will be <code>"B is greater"</code> because <code>a</code> is not greater than <code>b</code>, and <code>a</code> does not equal <code>b</code>.
    `
},
{
    question: "Can you use the ternary operator to return the result of a method call? Provide an example.",
    answer: `
        <pre><code>Yes, the ternary operator can return the result of method calls:
public static String getMessage(int value) {
    return (value > 0) ? "Positive" : "Negative or Zero";
}
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>int x = 5;
String result = (x < 10) ? (x > 5 ? "Greater than 5" : "Less than or equal to 5") : "Greater than or equal to 10";
System.out.println(result);
        </code></pre>
        The output will be <code>"Less than or equal to 5"</code> since <code>x</code> is 5, which is less than 10 but not greater than 5.
    `
},
{
    question: "How does the ternary operator handle null values?",
    answer: `
        <pre><code>If a null value is used in the expressions, it can be assigned without causing a <code>NullPointerException</code>, as long as the type is compatible. For example:
String str = null;
String result = (str == null) ? "Null value" : str; // result will be "Null value"
        </code></pre>
    `
},
{
    question: "Can the ternary operator be nested? Provide an example.",
    answer: `
        <pre><code>Yes, the ternary operator can be nested. For example:
int x = 15;
String result = (x > 20) ? "Greater than 20" : (x > 10) ? "Greater than 10" : "10 or less";
// Result: "Greater than 10"
        </code></pre>
    `
},
{
    question: "What will be the output of the following code?",
    answer: `
        <pre><code>int a = 5, b = 10;
String result = (a < b) ? "A is smaller" : "B is smaller";
System.out.println(result + " and " + ((a + b) > 10 ? "Sum is greater than 10" : "Sum is 10 or less"));
        </code></pre>
        The output will be <code>"A is smaller and Sum is greater than 10"</code>.
    `
},
{
    question: "How can the ternary operator be used to simplify an if-else statement? Provide an example.",
    answer: `
        <pre><code>The ternary operator can replace simple if-else statements for assigning values. For example:
int a = 10;
String result = (a > 5) ? "Greater than 5" : "Not greater than 5"; // Simplifies if-else
        </code></pre>
    `
},
{
    question: "What happens if you use the ternary operator for assignment in a loop? Give an example.",
    answer: `
        <pre><code>The ternary operator can be used for assignment within a loop, evaluating the condition for each iteration. Example:
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    String result = (num % 2 == 0) ? "Even" : "Odd";
    System.out.println(num + " is " + result);
}
// Outputs: "1 is Odd", "2 is Even", etc.
        </code></pre>
    `
},
{
    question: "Can you use the ternary operator to check for multiple conditions? How would you implement this?",
    answer: `
        <pre><code>Yes, you can check multiple conditions using nested ternary operators, though this can reduce readability:
int score = 85;
String grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "D";
        </code></pre>
    `
},
{
    question: "What will be the result of the following code?",
    answer: `
        <pre><code>String str = null;
String result = (str != null) ? str.toUpperCase() : "No string";
System.out.println(result);
        </code></pre>
        The output will be <code>"No string"</code> since <code>str</code> is <code>null</code>.
    `
},
{
    question: "How does the ternary operator behave when used with generics? Provide an example.",
    answer: `
        <pre><code>The ternary operator can be used with generics, but the types must be compatible. For example:
List<String> list = true ? new ArrayList<String>() : new ArrayList<Integer>(); // Compilation error due to incompatible types
        </code></pre>
    `
},
{
    question: "What happens if you try to use a ternary operator with a void method call?",
    answer: `
        <pre><code>You cannot use a void method in the expressions of a ternary operator, as the ternary operator requires both branches to return a value. For example:
System.out.println((true) ? printMessage() : "Hello"); // Compilation error
        </code></pre>
    `
},
{
    question: "How can you avoid a `NullPointerException` when using the ternary operator with object properties?",
    answer: `
        <pre><code>You can use a null-safe check before accessing properties or methods:
String str = null;
String result = (str != null && str.equals("test")) ? "Matched" : "Not matched"; // Safe check
        </code></pre>
    `
},
{
    question: "Explain how the ternary operator interacts with type promotion in Java.",
    answer: `
        <pre><code>The ternary operator promotes types according to the rules of Java's type promotion. If the two expressions return different types, Java will attempt to promote them to a common type. For instance:
int a = 5;
double result = (a > 3) ? a : 2.5; // result is double, promoted from int to double
        </code></pre>
    `
},
{
    question: "What will happen if you attempt to assign the result of a ternary operator that returns incompatible types?",
    answer: `
        <pre><code>You will encounter a compilation error if the two types are incompatible and cannot be implicitly cast to a common type. For example:
String str = (1 > 0) ? "Positive" : 100; // Compilation error
        </code></pre>
    `
},
{
    question: "How can you use the ternary operator for conditional logging? Provide an example.",
    answer: `
        <pre><code>The ternary operator can be used to conditionally log messages based on a certain condition:
boolean debug = true;
String logMessage = debug ? "Debugging info" : "Production info";
System.out.println(logMessage);
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>int x = 10, y = 20;
String result = (x > y) ? "X is greater" : (x < y) ? "Y is greater" : "Both are equal";
System.out.println(result);
        </code></pre>
        The output will be <code>"Y is greater"</code> because <code>x</code> is less than <code>y</code>.
    `
},
{
    question: "Can the ternary operator be used in method parameters? Provide an example.",
    answer: `
        <pre><code>Yes, you can use the ternary operator in method parameters:
public static void printMessage(String message) {
    System.out.println(message);
}

public static void main(String[] args) {
    int a = 5;
    printMessage((a > 3) ? "Greater than 3" : "Not greater than 3"); // Outputs: "Greater than 3"
}
        </code></pre>
    `
},
{
    question: "How can you use the ternary operator to simplify a multi-line if-else statement?",
    answer: `
        <pre><code>The ternary operator can replace simple multi-line if-else statements:
String result;
if (a > b) {
    result = "A is greater";
} else {
    result = "B is greater";
}
// Can be simplified to:
String result = (a > b) ? "A is greater" : "B is greater";
        </code></pre>
    `
},
{
    question: "What happens if you use the ternary operator without a proper condition that evaluates to a boolean?",
    answer: `
        <pre><code>You will encounter a compilation error. The condition in a ternary operator must evaluate to a boolean expression. For example:
int a = 5;
String result = (a); // Compilation error
        </code></pre>
    `
}


    ],
    "Intermidiate operations Java8": [
       {
    question: "What are intermediate operations in the Stream API, and how do they differ from terminal operations?",
    answer: `
        <pre><code>Intermediate operations transform a stream into another stream and are lazy in nature, meaning they are not executed until a terminal operation is called. Terminal operations, such as <code>collect()</code>, <code>forEach()</code>, or <code>reduce()</code>, trigger the processing of the stream and produce a result or side effect.
        </code></pre>
    `
},
{
    question: "Can you chain multiple intermediate operations on a stream? Provide an example.",
    answer: `
        <pre><code>Yes, you can chain multiple intermediate operations. For example:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
List<String> result = names.stream()
    .filter(name -> name.startsWith("A") || name.startsWith("B"))
    .map(String::toUpperCase)
    .collect(Collectors.toList()); // Result: ["ALICE", "BOB"]
        </code></pre>
    `
},
{
    question: "What happens if you call an intermediate operation after a terminal operation?",
    answer: `
        <pre><code>A stream can be consumed only once; invoking a terminal operation on a stream causes it to be closed. If you try to call an intermediate operation after a terminal operation, an <code>IllegalStateException</code> will be thrown.
        </code></pre>
    `
},
{
    question: "How does the `filter()` method work, and what will be the result of calling it with a condition that always returns false?",
    answer: `
        <pre><code>The <code>filter()</code> method returns a stream consisting of elements that match the given predicate. If the predicate always returns false, the resulting stream will be empty.
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> filtered = numbers.stream()
    .filter(n -> n > 3)
    .map(n -> n * 2)
    .collect(Collectors.toList());
System.out.println(filtered);
        </code></pre>
        The output will be <code>[8, 10]</code>, as it first filters the numbers greater than 3 (which are 4 and 5) and then doubles them.
    `
},
{
    question: "Can you use `filter()` with multiple conditions? How would you implement it?",
    answer: `
        <pre><code>Yes, you can combine multiple conditions using logical operators. For example:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
List<String> filteredNames = names.stream()
    .filter(name -> name.startsWith("A") || name.length() > 4)
    .collect(Collectors.toList()); // Result: ["Alice", "Charlie"]
        </code></pre>
    `
},
{
    question: "Explain how the `map()` function works when applied to a stream of objects. Provide an example.",
    answer: `
        <pre><code>The <code>map()</code> function transforms each element in the stream into another object based on the provided function. For example:
List<String> words = Arrays.asList("hello", "world");
List<Integer> lengths = words.stream()
    .map(String::length)
    .collect(Collectors.toList()); // Result: [5, 5]
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>List<String> words = Arrays.asList("one", "two", "three");
List<String> result = words.stream()
    .map(String::toUpperCase)
    .filter(w -> w.length() > 3)
    .collect(Collectors.toList());
System.out.println(result);
        </code></pre>
        The output will be <code>["THREE"]</code>, as it converts all words to uppercase and then filters based on the length.
    `
},
{
    question: "What does the `distinct()` method do, and how does it determine uniqueness?",
    answer: `
        <pre><code>The <code>distinct()</code> method returns a stream consisting of unique elements by applying the <code>equals()</code> method to determine whether elements are duplicates.
        </code></pre>
    `
},
{
    question: "How would you sort a list of strings in reverse order using the Stream API?",
    answer: `
        <pre><code>You can use <code>sorted(Comparator.reverseOrder())</code> to sort strings in reverse order:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> sortedNames = names.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList()); // Result: ["Charlie", "Bob", "Alice"]
        </code></pre>
    `
},
{
    question: "What does the `limit()` method do, and how would you use it in a stream?",
    answer: `
        <pre><code>The <code>limit(n)</code> method returns a stream consisting of the first <code>n</code> elements of the original stream. For example:
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> limitedNumbers = numbers.stream()
    .limit(3)
    .collect(Collectors.toList()); // Result: [1, 2, 3]
        </code></pre>
    `
},
{
    question: "What is the output of the following code snippet?",
    answer: `
        <pre><code>List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 5, 4, 3, 2, 1);
List<Integer> distinctNumbers = numbers.stream()
    .distinct()
    .sorted()
    .limit(5)
    .collect(Collectors.toList());
System.out.println(distinctNumbers);
        </code></pre>
        The output will be <code>[1, 2, 3, 4, 5]</code>, as it removes duplicates, sorts the numbers, and limits the result to the first 5 unique elements.
    `
},
{
    question: "How does `flatMap()` work with a stream of collections? Provide an example.",
    answer: `
        <pre><code><code>flatMap()</code> is used to flatten a stream of collections into a single stream. For example:
List<List<String>> listOfLists = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));
List<String> flatList = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList()); // Result: ["a", "b", "c", "d"]
        </code></pre>
    `
},
{
    question: "What is the purpose of the `peek()` method, and how should it be used?",
    answer: `
        <pre><code>The <code>peek()</code> method is used to perform a side effect on each element as it passes through the stream, typically for debugging purposes. However, it should not be relied upon for modifying the stream’s data:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream()
    .peek(System.out::println) // Prints each name
    .map(String::toUpperCase)
    .collect(Collectors.toList());
        </code></pre>
    `
},
{
    question: "What happens if you use `peek()` in a stream pipeline without a terminal operation?",
    answer: `
        <pre><code>If <code>peek()</code> is used without a terminal operation, it will have no effect, as intermediate operations are not executed until a terminal operation is invoked.
        </code></pre>
    `
},
{
    question: "How can you use `collect()` with a custom collector to summarize data from a stream?",
    answer: `
        <pre><code>You can create a custom collector using the <code>Collector</code> interface. For example, to count the number of occurrences of each element:
Map<String, Long> frequency = list.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        </code></pre>
    `
},
{
    question: "What does the `groupingBy()` collector do, and how can it be used to classify objects in a stream?",
    answer: `
        <pre><code>The <code>groupingBy()</code> collector groups elements by a classifier function, returning a <code>Map</code> where the keys are the result of applying the classifier and the values are lists of items. For example:
Map<Integer, List<String>> groupedByLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
        </code></pre>
    `
},
{
    question: "How would you implement a stream pipeline to compute the average of a list of integers while ignoring negative values?",
    answer: `
        <pre><code>You can filter out negative values and then compute the average:
List<Integer> numbers = Arrays.asList(-1, 2, 3, -4, 5);
double average = numbers.stream()
    .filter(n -> n >= 0)
    .mapToInt(Integer::intValue)
    .average()
    .orElse(0.0); // Result: 3.0
        </code></pre>
    `
},
{
    question: "What will be the output of the following code snippet?",
    answer: `
        <pre><code>List<String> strings = Arrays.asList("abc", "def", "ghi");
String result = strings.stream()
    .map(String::toUpperCase)
    .reduce("", (s1, s2) -> s1 + s2);
System.out.println(result);
        </code></pre>
        The output will be <code>"ABCDEFHI"</code>, as it concatenates the uppercase strings into a single string.
    `
},
{
    question: "Explain the use of `Collectors.toMap()` and provide an example of how to use it.",
    answer: `
        <pre><code><code>Collectors.toMap()</code> is used to create a <code>Map</code> from the elements of a stream. You must provide two functions: one for the key and one for the value. For example:
List<Person> people = Arrays.asList(new Person("Alice", 30), new Person("Bob", 25));
Map<String, Integer> ageMap = people.stream()
    .collect(Collectors.toMap(Person::getName, Person::getAge));
        </code></pre>
    `
},
{
    question: "What happens if you attempt to use `Collectors.toMap()` with duplicate keys?",
    answer: `
        <pre><code>If there are duplicate keys, <code>Collectors.toMap()</code> will throw an <code>IllegalStateException</code>. You can handle this by providing a merge function to resolve conflicts:
Map<String, Integer> ageMap = people.stream()
    .collect(Collectors.toMap(Person::getName, Person::getAge, (age1, age2) -> age1)); // Keep the first age
        </code></pre>
    `
},
{
    question: "How does using `flatMap()` affect performance when processing large datasets?",
    answer: `
        <pre><code><code>flatMap()</code> can introduce overhead due to the need to flatten the structure and manage multiple stream sources. However, it can lead to more efficient data processing when used correctly, especially when combined with parallel streams for large datasets.
        </code></pre>
    `
},
{
    question: "What will happen if you call `collect()` without any terminal operation after an intermediate operation?",
    answer: `
        <pre><code>You will receive an <code>IllegalStateException</code> because a stream can only be consumed once. After invoking a terminal operation, the stream is closed, and further operations cannot be performed.
        </code></pre>
    `
},
{
    question: "How do you handle `NullPointerExceptions` in a stream pipeline?",
    answer: `
        <pre><code>You can use <code>filter(Objects::nonNull)</code> to remove null values before processing the stream, or ensure that the source data is validated and cleaned before streaming.
        </code></pre>
    `
},
{
    question: "Can you create an empty stream using the Stream API? If so, how?",
    answer: `
        <pre><code>Yes, you can create an empty stream using <code>Stream.empty()</code>:
Stream<String> emptyStream = Stream.empty();
        </code></pre>
    `
}


    ],
    "Map FlatMap": [
        {
    question: "What is the primary difference between `map()` and `flatMap()` in Java Streams?",
    answer: `
        <pre><code><code>map()</code> transforms each element in the stream into another object, resulting in a stream of the transformed elements. <code>flatMap()</code>, on the other hand, is used to flatten nested streams into a single stream, applying a function that returns a stream for each element and merging the results.
        </code></pre>
    `
},
{
    question: "How does the output of `map()` differ when applied to a stream of strings to convert them to their lengths versus `flatMap()` with the same operation?",
    answer: `
        <pre><code><code>map()</code> would produce a stream of integers representing the lengths of each string, while <code>flatMap()</code> is not applicable here since the mapping function does not return a stream. Thus, <code>flatMap()</code> would be used when the transformation results in another stream of values.
        </code></pre>
    `
},
{
    question: "Can you provide an example where `flatMap()` is necessary to handle a collection of collections?",
    answer: `
        <pre><code>Yes, if you have a list of lists and want to create a single list of elements, <code>flatMap()</code> is required. For example:
List<List<String>> listOfLists = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));
List<String> flatList = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList()); // Result: ["a", "b", "c", "d"]
        </code></pre>
    `
},
{
    question: "What happens if you apply `flatMap()` to a stream of strings and the function returns `null`?",
    answer: `
        <pre><code>If the function returns <code>null</code>, it will cause a <code>NullPointerException</code> at runtime. It's important to ensure that the mapping function does not produce null results when using <code>flatMap()</code>.
        </code></pre>
    `
},
{
    question: "Can `map()` and `flatMap()` be used in the same stream pipeline? Provide an example.",
    answer: `
        <pre><code>Yes, they can be used together. For example:
List<List<String>> listOfLists = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));
List<String> result = listOfLists.stream()
    .flatMap(List::stream)
    .map(String::toUpperCase)
    .collect(Collectors.toList()); // Result: ["A", "B", "C", "D"]
        </code></pre>
    `
},
{
    question: "How can you use `map()` to extract a specific property from a list of objects? Provide an example.",
    answer: `
        <pre><code>You can use <code>map()</code> to transform a stream of objects by extracting a specific property. For example, if you have a <code>List&lt;Person&gt;</code>, you can extract the names:
List<Person> people = Arrays.asList(new Person("Alice"), new Person("Bob"));
List<String> names = people.stream()
    .map(Person::getName)
    .collect(Collectors.toList()); // Result: ["Alice", "Bob"]
        </code></pre>
    `
},
{
    question: "What would be the result of applying `flatMap()` on a stream of optional values?",
    answer: `
        <pre><code>When applied to a stream of <code>Optional&lt;T&gt;</code>, <code>flatMap()</code> would flatten the stream by filtering out empty <code>Optional</code> values and extracting the present values:
List<Optional<String>> optionals = Arrays.asList(Optional.of("Hello"), Optional.empty(), Optional.of("World"));
List<String> result = optionals.stream()
    .flatMap(Optional::stream)
    .collect(Collectors.toList()); // Result: ["Hello", "World"]
        </code></pre>
    `
},
{
    question: "How would you use `flatMap()` to convert a list of sentences into a list of words?",
    answer: `
        <pre><code>You can split each sentence into words and flatten the resulting lists:
List<String> sentences = Arrays.asList("Hello world", "Java Streams are powerful");
List<String> words = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .collect(Collectors.toList()); // Result: ["Hello", "world", "Java", "Streams", "are", "powerful"]
        </code></pre>
    `
},
{
    question: "Explain how `map()` can be used in conjunction with `Collectors.toMap()` to create a map from a list of objects.",
    answer: `
        <pre><code>You can use <code>map()</code> to transform the list into key-value pairs and then collect them into a map:
List<Person> people = Arrays.asList(new Person("Alice", 30), new Person("Bob", 25));
Map<String, Integer> ageMap = people.stream()
    .collect(Collectors.toMap(Person::getName, Person::getAge)); // Result: {"Alice": 30, "Bob": 25}
        </code></pre>
    `
},
{
    question: "How does using `flatMap()` change the output when dealing with a stream of streams?",
    answer: `
        <pre><code>Using <code>flatMap()</code> on a stream of streams merges all inner streams into a single stream. For example:
List<Stream<String>> streamOfStreams = Arrays.asList(Stream.of("a", "b"), Stream.of("c", "d"));
List<String> result = streamOfStreams.stream()
    .flatMap(s -> s)
    .collect(Collectors.toList()); // Result: ["a", "b", "c", "d"]
        </code></pre>
    `
},
{
    question: "What is the performance impact of using `flatMap()` compared to `map()`?",
    answer: `
        <pre><code><code>flatMap()</code> may have a higher overhead due to the need to flatten nested structures, especially if the number of nested elements is large. However, it is essential for handling cases where elements are already streams. Using <code>map()</code> is generally less complex and more performant when only a simple transformation is needed.
        </code></pre>
    `
},
{
    question: "Can you chain `map()` and `flatMap()`? If so, provide a use case where this is useful.",
    answer: `
        <pre><code>Yes, chaining <code>map()</code> and <code>flatMap()</code> is common. For example, converting a list of sentences into a list of words and then transforming those words to uppercase:
List<String> sentences = Arrays.asList("Hello world", "Java streams");
List<String> upperCaseWords = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .map(String::toUpperCase)
    .collect(Collectors.toList()); // Result: ["HELLO", "WORLD", "JAVA", "STREAMS"]
        </code></pre>
    `
},
{
    question: "What happens if you use `flatMap()` with a function that returns an empty stream?",
    answer: `
        <pre><code>If <code>flatMap()</code> is used with a function that returns an empty stream for an element, that element will be ignored in the final result. The resulting stream will only contain elements from non-empty streams.
        </code></pre>
    `
},
{
    question: "How does `flatMap()` handle elements that are `null` when processing a stream?",
    answer: `
        <pre><code>If the mapping function used in <code>flatMap()</code> returns <code>null</code>, it will throw a <code>NullPointerException</code>. It's important to ensure that the mapping function never returns <code>null</code>, typically by using <code>Optional</code> or filtering out null values beforehand.
        </code></pre>
    `
},
{
    question: "What is the output of a stream pipeline that contains a `flatMap()` followed by a `distinct()` operation?",
    answer: `
        <pre><code>The <code>flatMap()</code> operation will flatten the stream, and then <code>distinct()</code> will remove any duplicate elements from the resulting flattened stream. This results in a stream with unique values based on the entire flattened output.
        </code></pre>
    `
},
{
    question: "What exception will be thrown if you attempt to use `flatMap()` on a null stream?",
    answer: `
        <pre><code>If you attempt to use <code>flatMap()</code> on a null stream, a <code>NullPointerException</code> will be thrown. Streams must be non-null to be processed.
        </code></pre>
    `
},
{
    question: "How would you handle an exception thrown during a lambda expression within a `map()` operation?",
    answer: `
        <pre><code>Since lambda expressions cannot throw checked exceptions directly, you can wrap the lambda in a try-catch block or create a utility method that handles the checked exceptions appropriately.
        </code></pre>
    `
},
{
    question: "What will be the result of applying `flatMap()` to an empty stream?",
    answer: `
        <pre><code>Applying <code>flatMap()</code> to an empty stream will simply result in an empty stream. No elements will be processed or transformed.
        </code></pre>
    `
},
{
    question: "How do you ensure that the results of a `flatMap()` operation are not duplicated?",
    answer: `
        <pre><code>To ensure uniqueness, you can follow <code>flatMap()</code> with a <code>distinct()</code> operation to filter out duplicate elements in the resulting stream.
        </code></pre>
    `
},
{
    question: "What happens when you use `flatMap()` on a stream where some elements are null?",
    answer: `
        <pre><code>If the mapping function returns a stream for some elements and <code>null</code> for others, you must ensure the function handles null values gracefully. Returning <code>null</code> from the function will result in a <code>NullPointerException</code>. Use Optional or filter nulls before flattening.
        </code></pre>
    `
},
{
    question: "How can you use `flatMap()` to transform a list of JSON objects represented as strings into a list of specific fields?",
    answer: `
        <pre><code>You can parse each JSON string and extract specific fields using <code>flatMap()</code> combined with a JSON parsing library:
List<String> jsonStrings = Arrays.asList("{\"name\":\"Alice\"}", "{\"name\":\"Bob\"}");
List<String> names = jsonStrings.stream()
    .flatMap(json -> {
        // Assume parseJson is a method that extracts names from JSON strings
        return parseJson(json).stream();
    })
    .collect(Collectors.toList());
        </code></pre>
    `
},
{
    question: "What would happen if you apply a `flatMap()` operation on a stream of collections that may have empty collections?",
    answer: `
        <pre><code>If the inner collections are empty, they will be ignored in the final flattened result. Only elements from non-empty collections will be included in the resulting stream.
        </code></pre>
    `
},
{
    question: "How would you implement a function that takes a list of lists of integers and returns a list of their sums using `flatMap()`?",
    answer: `
        <pre><code>You can use <code>flatMap()</code> to flatten the lists, and then use <code>collect()</code> to sum them:
List<List<Integer>> lists = Arrays.asList(Arrays.asList(1, 2), Arrays.asList(3, 4));
List<Integer> sums = lists.stream()
    .map(list -> list.stream().mapToInt(Integer::intValue).sum())
    .collect(Collectors.toList()); // Result: [3, 7]
        </code></pre>
    `
},
{
    question: "Can `flatMap()` be used to process a stream of optional values? How?",
    answer: `
        <pre><code>Yes, you can convert a stream of optional values into a single stream of present values:
List<Optional<String>> optionals = Arrays.asList(Optional.of("A"), Optional.empty(), Optional.of("B"));
List<String> results = optionals.stream()
    .flatMap(Optional::stream)
    .collect(Collectors.toList()); // Result: ["A", "B"]
        </code></pre>
    `
},
{
    question: "How can you use `flatMap()` in a scenario where you need to create a unique list of characters from multiple strings?",
    answer: `
        <pre><code>You can use <code>flatMap()</code> to convert each string to a stream of characters, then collect unique characters:
List<String> words = Arrays.asList("hello", "world");
Set<Character> uniqueChars = words.stream()
    .flatMap(word -> word.chars().mapToObj(c -> (char) c))
    .collect(Collectors.toSet()); // Result: Set of unique characters
        </code></pre>
    `
}
],
    "Streams": [
    {
        "question": "What is a Stream in Java, and how does it differ from a Collection?",
        "answer": "<pre><code>A Stream is a sequence of elements that supports aggregate operations. Unlike Collections, which store data, Streams are used to process data in a functional style and do not store elements themselves. Streams are also designed to be processed in a pipeline, allowing operations to be performed on the data without modifying the underlying data structure.</code></pre>"
    },
    {
        "question": "What are the main characteristics of a Stream in Java?",
        "answer": "<pre><code>Streams are:<br>- <code>Not a data structure</code>: They do not store elements; they compute them on demand.<br>- <code>Functional in nature</code>: They support functional programming operations like map, filter, and reduce.<br>- <code>Lazy</code>: Operations are not executed until a terminal operation is invoked.<br>- <code>Possibly unbounded</code>: Streams can represent infinite sequences of data.</code></pre>"
    },
    {
        "question": "How do you create a Stream from a List? Provide an example.",
        "answer": "<pre><code>You can create a Stream from a List using the <code>stream()</code> method. For example:<br>List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");<br>Stream<String> nameStream = names.stream();</code></pre>"
    },
    {
        "question": "Explain the difference between `Stream.of()` and `Arrays.stream()`.",
        "answer": "<pre><code><code>Stream.of()</code> can create a Stream from a variable number of arguments or an array, while <code>Arrays.stream()</code> specifically creates a Stream from an array. The former allows flexibility with a list of items, whereas the latter is used exclusively for arrays.</code></pre>"
    },
    {
        "question": "What is the significance of the `parallelStream()` method, and how does it differ from `stream()`?",
        "answer": "<pre><code><code>parallelStream()</code> creates a parallel stream that utilizes multiple threads for processing, leveraging multi-core processors. In contrast, <code>stream()</code> processes elements sequentially. Parallel streams can improve performance for large datasets but may introduce overhead for smaller datasets.</code></pre>"
    },
    {
        "question": "What are intermediate operations in the Stream API, and how do they differ from terminal operations?",
        "answer": "<pre><code>Intermediate operations are operations that transform or filter the elements of a stream and return a new stream (e.g., <code>map()</code>, <code>filter()</code>). They are lazy, meaning they are not executed until a terminal operation is invoked. Terminal operations (e.g., <code>collect()</code>, <code>forEach()</code>) trigger the processing of the stream and produce a result or side effect.</code></pre>"
    },
    {
        "question": "How does the `map()` function work, and when would you use it?",
        "answer": "<pre><code>The <code>map()</code> function applies a given function to each element in the stream, transforming the elements. Use it when you need to convert or transform data types, such as converting a list of strings to their lengths:<br>List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");<br>List<Integer> nameLengths = names.stream().map(String::length).collect(Collectors.toList()); // Result: [5, 3, 7]</code></pre>"
    },
    {
        "question": "What does the `filter()` method do, and how would you use it to remove null values from a stream?",
        "answer": "<pre><code>The <code>filter()</code> method returns a stream consisting of elements that match a given predicate. To remove null values:<br>List<String> names = Arrays.asList(\"Alice\", null, \"Bob\", \"Charlie\", null);<br>List<String> nonNullNames = names.stream().filter(Objects::nonNull).collect(Collectors.toList()); // Result: [\"Alice\", \"Bob\", \"Charlie\"]</code></pre>"
    },
    {
        "question": "Explain how `flatMap()` works and provide an example where it is useful.",
        "answer": "<pre><code><code>flatMap()</code> is used to flatten nested streams by applying a function that returns a stream for each element and merging the results into a single stream. It's useful when dealing with collections of collections. For example:<br>List<List<String>> listOfLists = Arrays.asList(Arrays.asList(\"a\", \"b\"), Arrays.asList(\"c\", \"d\"));<br>List<String> flatList = listOfLists.stream().flatMap(List::stream).collect(Collectors.toList()); // Result: [\"a\", \"b\", \"c\", \"d\"]</code></pre>"
    },
    {
        "question": "What is the effect of using `distinct()` in a stream, and how does it work under the hood?",
        "answer": "<pre><code>The <code>distinct()</code> method removes duplicate elements from a stream based on the <code>equals()</code> method. It uses a <code>HashSet</code> internally to track seen elements and ensure that only unique elements are retained in the resulting stream.</code></pre>"
    },
    {
        "question": "What are terminal operations in the Stream API, and how do they differ from intermediate operations?",
        "answer": "<pre><code>Terminal operations are operations that trigger the processing of the stream and produce a result or side effect (e.g., <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code>). They are not lazy and will execute all intermediate operations that have been defined on the stream.</code></pre>"
    },
    {
        "question": "Explain the `reduce()` operation in the Stream API and provide an example of its use.",
        "answer": "<pre><code>The <code>reduce()</code> operation combines elements of a stream into a single result using a binary operator. It can take an identity value and a combiner. For example, to sum a list of integers:<br>List<Integer> numbers = Arrays.asList(1, 2, 3, 4);<br>int sum = numbers.stream().reduce(0, Integer::sum); // Result: 10</code></pre>"
    },
    {
        "question": "How would you use the `collect()` method to group elements in a stream by a specific property?",
        "answer": "<pre><code>Use <code>Collectors.groupingBy()</code> to group elements based on a property. For example, grouping a list of employees by department:<br>Map<String, List<Employee>> employeesByDept = employees.stream().collect(Collectors.groupingBy(Employee::getDepartment));</code></pre>"
    },
    {
        "question": "What does the `forEach()` method do in the Stream API, and when should it be used?",
        "answer": "<pre><code>The <code>forEach()</code> method performs an action for each element of the stream. It is typically used for side effects (e.g., printing elements) but should be used cautiously as it does not return a new stream or allow further processing.</code></pre>"
    },
    {
        "question": "What happens if you call multiple terminal operations on the same stream?",
        "answer": "<pre><code>A stream can be consumed only once; invoking a terminal operation on a stream causes it to be closed. Subsequent terminal operations will throw an <code>IllegalStateException</code>, as the stream cannot be reused.</code></pre>"
    },
    {
        "question": "What are some performance considerations to keep in mind when using parallel streams?",
        "answer": "<pre><code>Performance considerations include the size of the data set (large sets benefit from parallelism), the overhead of managing threads, the nature of operations (computationally intensive tasks benefit more than I/O bound tasks), and the potential for thread contention. It's also important to ensure thread safety when sharing mutable state.</code></pre>"
    },
    {
        "question": "How does the `limit()` method work in a stream, and how is it different from `skip()`?",
        "answer": "<pre><code>The <code>limit(n)</code> method returns a stream consisting of the first <code>n</code> elements of the original stream. In contrast, <code>skip(n)</code> skips the first <code>n</code> elements and returns the remaining elements. Both methods are useful for controlling the size of the stream.</code></pre>"
    },
    {
        "question": "What does it mean for a stream operation to be stateless, and why is this important?",
        "answer": "<pre><code>A stateless operation does not depend on any mutable state or external factors. This is important for parallel processing, as it ensures that operations can be safely executed concurrently without side effects.</code></pre>"
    },
    {
        "question": "Can you perform operations on an infinite stream? If so, how?",
        "answer": "<pre><code>Yes, you can perform operations on an infinite stream, but you must use short-circuiting terminal operations like <code>findFirst()</code>, <code>findAny()</code>, or <code>limit()</code>, which will stop processing once the desired result is obtained.</code></pre>"
    },
    {
        "question": "How can you measure the performance of a stream operation?",
        "answer": "<pre><code>You can measure performance using <code>System.nanoTime()</code> before and after the stream operation, or use profiling tools like VisualVM or Java Mission Control to analyze performance metrics during execution.</code></pre>"
    },
    {
        "question": "How can you create a stream of numbers from 1 to 100 and calculate the sum of all even numbers?",
        "answer": "<pre><code>You can create an <code>IntStream</code> and use filtering to select even numbers, then sum them:<br>int sum = IntStream.rangeClosed(1, 100).filter(n -> n % 2 == 0).sum(); // Result: 2550</code></pre>"
    },
    {
        "question": "How would you create a stream from a string and count the number of vowels?",
        "answer": "<pre><code>You can convert the string into a stream of characters and filter for vowels:<br>String text = \"Hello World\";<br>long vowelCount = text.chars().mapToObj(c -> (char) c).filter(c -> \"AEIOUaeiou\".indexOf(c) != -1).count(); // Result: 3</code></pre>"
    },
    {
        "question": "How can you use `Collectors.partitioningBy()` to group elements into two categories?",
        "answer": "<pre><code><code>Collectors.partitioningBy()</code> partitions elements into two groups based on a predicate, returning a Map with Boolean keys. For example, partitioning a list of names based on length:<br>Map<Boolean, List<String>> partitioned = names.stream().collect(Collectors.partitioningBy(name -> name.length() > 3)); // Result: Map with true key for names longer than 3, false for others</code></pre>"
    },
    {
        "question": "How does the `reduce()` operation differ when used with associative vs. non-associative operations?",
        "answer": "<pre><code>The <code>reduce()</code> operation works best with associative operations (e.g., addition, multiplication), where the order of application does not affect the result. Associative operations ensure consistent results, especially when used with parallel streams. Non-associative operations may yield different results depending on the order of processing, leading to unpredictable outcomes when used with parallel streams.</code></pre>"
    }
]
,
 "Java 8 Features": [
        {
    "question": "What are lambda expressions, and how do they differ from anonymous inner classes?",
    "answer": `
        <pre><code>Lambda expressions provide a clear and concise way to represent a functional interface implementation. Unlike anonymous inner classes, they do not require a full class declaration and can access final or effectively final variables from the enclosing scope, leading to more readable code.
        </code></pre>
    `
},
{
    "question": "How does Java 8 handle type inference for lambda expressions?",
    "answer": `
        <pre><code>Java 8 uses the context of the functional interface to infer the types of the parameters in a lambda expression. The target type is determined by the expected type of the functional interface assigned to the lambda.
        </code></pre>
    `
},
{
    "question": "What is a functional interface, and how is it defined in Java 8?",
    "answer": `
        <pre><code>A functional interface is an interface that has exactly one abstract method, making it suitable for lambda expressions. It can have multiple default or static methods. It is defined using the <code>@FunctionalInterface</code> annotation (optional but recommended for clarity).
        </code></pre>
    `
},
{
    "question": "What are method references, and how do they relate to lambda expressions?",
    "answer": `
        <pre><code>Method references provide a shorthand syntax for calling methods in a lambda expression. They are used to reference a method by its name, which can be static, an instance method, or a constructor. For example, <code>ClassName::methodName</code>.
        </code></pre>
    `
},
{
    "question": "Explain the difference between `Consumer`, `Supplier`, `Function`, and `Predicate` functional interfaces.",
    "answer": `
        <pre><code>
- <code>Consumer<T></code>: Accepts a single input and returns no result (e.g., <code>void accept(T t)</code>).
- <code>Supplier<T></code>: Takes no input and returns a result (e.g., <code>T get()</code>).
- <code>Function<T, R></code>: Accepts one input and produces a result (e.g., <code>R apply(T t)</code>).
- <code>Predicate<T></code>: Accepts one input and returns a boolean (e.g., <code>boolean test(T t)</code>).
        </code></pre>
    `
},
{
    "question": "What is the purpose of the Stream API introduced in Java 8?",
    "answer": `
        <pre><code>The Stream API provides a functional approach to processing sequences of elements (e.g., collections) in a declarative way. It allows for operations such as filtering, mapping, and reducing, enabling more readable and concise code.
        </code></pre>
    `
},
{
    "question": "How does the `filter()` method work in the Stream API? Provide an example.",
    "answer": `
        <pre><code>The <code>filter()</code> method creates a new stream consisting of elements that match a given predicate. For example:
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> filteredNames = names.stream()
    .filter(name -> name.startsWith("A"))
    .collect(Collectors.toList()); // Result: ["Alice"]
        </code></pre>
    `
},
{
    "question": "Explain the difference between `map()` and `flatMap()` in the Stream API.",
    "answer": `
        <pre><code><code>map()</code> transforms each element in the stream to another object, returning a stream of the transformed elements. <code>flatMap()</code> flattens the structure by applying a function that returns a stream for each element, effectively merging multiple streams into one.
        </code></pre>
    `
},
{
    "question": "How do you achieve parallel processing with the Stream API?",
    "answer": `
        <pre><code>Use the <code>parallelStream()</code> method on a collection, which creates a parallel stream that can process elements concurrently, leveraging multi-core architectures for performance improvements.
        </code></pre>
    `
},
{
    "question": "What is the difference between intermediate and terminal operations in the Stream API?",
    "answer": `
        <pre><code>Intermediate operations (e.g., <code>filter()</code>, <code>map()</code>) are lazy and return a new stream, allowing for method chaining. They are not executed until a terminal operation (e.g., <code>collect()</code>, <code>forEach()</code>) is invoked, which triggers the processing of the stream.
        </code></pre>
    `
},
{
    "question": "What is the purpose of the `Optional` class introduced in Java 8?",
    "answer": `
        <pre><code><code>Optional</code> is a container for potentially null values, used to avoid <code>NullPointerExceptions</code> and provide a more expressive way to handle absence of values. It encourages writing safer code by enforcing checks for presence or absence.
        </code></pre>
    `
},
{
    "question": "How can you create an `Optional` object? Provide examples of various methods.",
    "answer": `
        <pre><code>You can create an <code>Optional</code> using:
- <code>Optional.of(value)</code>: for non-null values (throws exception if null).
- <code>Optional.ofNullable(value)</code>: for values that can be null (creates an empty <code>Optional</code> if null).
- <code>Optional.empty()</code>: to create an empty <code>Optional</code>.
        </code></pre>
    `
},
{
    "question": "What are the benefits of using `Optional` in method return types?",
    "answer": `
        <pre><code>Using <code>Optional</code> makes it clear that a method may return a value or not, reducing the risk of <code>NullPointerExceptions</code>. It also encourages better handling of absent values through methods like <code>ifPresent()</code>, <code>orElse()</code>, and <code>map()</code>.
        </code></pre>
    `
},
{
    "question": "How do you handle a value wrapped in an `Optional`?",
    "answer": `
        <pre><code>Use methods like <code>ifPresent()</code>, <code>orElse()</code>, <code>orElseGet()</code>, and <code>map()</code> to process the value safely. For example:
Optional<String> optionalName = Optional.ofNullable(name);
optionalName.ifPresent(n -> System.out.println("Hello, " + n));
        </code></pre>
    `
},
{
    "question": "What is the difference between `orElse()` and `orElseGet()` methods in `Optional`?",
    "answer": `
        <pre><code><code>orElse()</code> evaluates the provided default value immediately, while <code>orElseGet()</code> takes a <code>Supplier</code> and evaluates it only if the <code>Optional</code> is empty, which can be more efficient if the default value is expensive to create.
        </code></pre>
    `
},
{
    "question": "What are the main advantages of the new Date-Time API introduced in Java 8 over the old `java.util.Date` and `java.util.Calendar`?",
    "answer": `
        <pre><code>The new Date-Time API (e.g., <code>java.time.LocalDate</code>, <code>java.time.LocalDateTime</code>) is immutable, thread-safe, and offers a more fluent API for date and time manipulation. It provides better support for time zones, periods, durations, and clearer models for date-time representations.
        </code></pre>
    `
},
{
    "question": "How do you represent a date without a time zone using the new Date-Time API?",
    "answer": `
        <pre><code>Use <code>LocalDate</code> to represent a date without a time zone. For example:
LocalDate date = LocalDate.of(2024, Month.NOVEMBER, 5); // Represents November 5, 2024
        </code></pre>
    `
},
{
    "question": "What is the difference between `LocalDateTime` and `ZonedDateTime` in the Date-Time API?",
    "answer": `
        <pre><code><code>LocalDateTime</code> represents date and time without any time zone information, while <code>ZonedDateTime</code> includes time zone information, allowing for accurate representation of date and time across different geographical locations.
        </code></pre>
    `
},
{
    "question": "How can you parse a date string into a `LocalDate` object?",
    "answer": `
        <pre><code>Use the <code>LocalDate.parse()</code> method along with a defined pattern if needed. For example:
LocalDate date = LocalDate.parse("2024-11-05"); // ISO format
        </code></pre>
    `
},
{
    "question": "How do you format a `LocalDate` into a specific string pattern?",
    "answer": `
        <pre><code>Use the <code>DateTimeFormatter</code> class to define the desired format. For example:
LocalDate date = LocalDate.now();
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
String formattedDate = date.format(formatter); // Outputs date in "dd-MM-yyyy" format
        </code></pre>
    `
},
{
    "question": "What are Collectors in the Stream API, and how are they used?",
    "answer": `
        <pre><code>Collectors are utility classes in the Stream API that facilitate the accumulation of elements into collections, such as Lists, Sets, Maps, or summarization operations. Common collectors include <code>Collectors.toList()</code>, <code>Collectors.toSet()</code>, and <code>Collectors.groupingBy()</code>.
        </code></pre>
    `
},
{
    "question": "How can you use the `Collectors.groupingBy()` method in a practical scenario?",
    "answer": `
        <pre><code><code>Collectors.groupingBy()</code> groups elements by a specified classifier. For example, grouping a list of employees by department:
Map<String, List<Employee>> employeesByDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
        </code></pre>
    `
},
{
    "question": "What is the difference between `Collectors.toMap()` and `Collectors.groupingBy()`?",
    "answer": `
        <pre><code><code>Collectors.toMap()</code> transforms elements into a <code>Map</code> with specified keys and values, requiring unique keys. In contrast, <code>Collectors.groupingBy()</code> creates a <code>Map</code> with collections of elements grouped by a common key, allowing multiple values per key.
        </code></pre>
    `
},
{
    "question": "How does the `flatMap()` function work in conjunction with `Collectors`?",
    "answer": `
        <pre><code><code>flatMap()</code> can flatten nested streams before collection. For example, if you have a list of lists, you can use <code>flatMap()</code> to process each inner list as a single stream:
List<String> allNames = nestedList.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
        </code></pre>
    `
},
{
    "question": "What are the performance implications of using parallel streams in Java 8?",
    "answer": `
        <pre><code>Parallel streams can significantly improve performance on large datasets by leveraging multiple cores. However, they may introduce overhead due to thread management and synchronization. For smaller datasets, the overhead might outweigh the benefits, so careful benchmarking is recommended.
        </code></pre>
    `
},
{
    "question": "What is the significance of the `@FunctionalInterface` annotation, and what happens if a functional interface violates the contract?",
    "answer": `
        <pre><code>The <code>@FunctionalInterface</code> annotation indicates that the interface is intended to be a functional interface, providing a compile-time check. If it violates the contract by having more than one abstract method, a compilation error occurs.
        </code></pre>
    `
},
{
    "question": "How can you create a stream from an array in Java 8?",
    "answer": `
        <pre><code>Use <code>Arrays.stream(array)</code> to create a stream from an array. For example:
String[] array = {"a", "b", "c"};
Stream<String> stream = Arrays.stream(array);
        </code></pre>
    `
},
{
    "question": "What are method references, and how do they differ from lambda expressions?",
    "answer": `
        <pre><code>Method references provide a way to refer to methods by their names and can replace lambda expressions when the lambda expression simply calls a method. They make the code cleaner and more concise. For example, <code>list.forEach(System.out::println)</code>.
        </code></pre>
    `
},
{
    "question": "Explain the `default` methods in interfaces and how they affect backward compatibility.",
    "answer": `
        <pre><code>Default methods allow adding new methods to interfaces without breaking existing implementations. They provide a default implementation, ensuring that existing classes can still implement the interface without modification, promoting backward compatibility.
        </code></pre>
    `
},
{
    "question": "How do you handle exceptions in lambda expressions, especially checked exceptions?",
    "answer": `
        <pre><code>Lambda expressions cannot throw checked exceptions directly. You can wrap the lambda in a try-catch block, or create a custom functional interface that allows checked exceptions, using a utility method to handle the conversion.
        </code></pre>
    `
}


    ],
"StringFunctions": [
        {
    "question": "What does the `substring(int beginIndex, int endIndex)` method do, and what happens if `endIndex` is greater than the string length?",
    "answer": `
        <pre><code><code>substring(int beginIndex, int endIndex)</code> extracts a substring from <code>beginIndex</code> to <code>endIndex</code> (excluding <code>endIndex</code>). If <code>endIndex</code> is greater than the string length, <code>StringIndexOutOfBoundsException</code> is thrown.
        </code></pre>
    `
},
{
    "question": "Explain how the `concat(String str)` method works. What is the difference between `concat()` and `+` for string concatenation?",
    "answer": `
        <pre><code><code>concat()</code> appends the specified string to the end of another string, creating a new <code>String</code>. Both <code>concat()</code> and <code>+</code> create new strings due to <code>String</code> immutability, but <code>+</code> is more commonly optimized by the compiler into a <code>StringBuilder</code> when used in a loop.
        </code></pre>
    `
},
{
    "question": "What is the difference between `equals()` and `==` when comparing strings?",
    "answer": `
        <pre><code><code>equals()</code> checks for content equality, while <code>==</code> checks for reference equality. <code>equals()</code> should be used to compare actual string content, whereas <code>==</code> only returns <code>true</code> if both references point to the same memory location.
        </code></pre>
    `
},
{
    "question": "How does `equalsIgnoreCase(String str)` differ from `equals(String str)`, and when would you use it?",
    "answer": `
        <pre><code><code>equalsIgnoreCase()</code> compares two strings for equality while ignoring case differences, whereas <code>equals()</code> is case-sensitive. Use <code>equalsIgnoreCase()</code> when you need to check for equality without caring about case (e.g., comparing user input to keywords).
        </code></pre>
    `
},
{
    "question": "What does the `charAt(int index)` method do, and what happens if `index` is out of bounds?",
    "answer": `
        <pre><code><code>charAt()</code> returns the character at the specified <code>index</code>. If <code>index</code> is out of bounds (less than 0 or greater than or equal to the string length), it throws <code>StringIndexOutOfBoundsException</code>.
        </code></pre>
    `
},
{
    "question": "Explain how `compareTo(String anotherString)` works. What is returned if the two strings are equal?",
    "answer": `
        <pre><code><code>compareTo()</code> compares two strings lexicographically. If the strings are equal, it returns <code>0</code>. If the invoking string is lexicographically less, it returns a negative integer, and if greater, it returns a positive integer.
        </code></pre>
    `
},
{
    "question": "How does `indexOf(String str)` differ from `lastIndexOf(String str)`?",
    "answer": `
        <pre><code><code>indexOf()</code> returns the index of the first occurrence of the specified substring, while <code>lastIndexOf()</code> returns the index of the last occurrence. Both return <code>-1</code> if the substring is not found.
        </code></pre>
    `
},
{
    "question": "What does the `contains(CharSequence s)` method do, and how does it differ from `indexOf(String str)`?",
    "answer": `
        <pre><code><code>contains()</code> checks if a given <code>CharSequence</code> (e.g., <code>String</code>) exists within the string and returns a boolean. <code>indexOf()</code> returns the position of the substring if it exists or <code>-1</code> otherwise. <code>contains()</code> is more readable when you just need a boolean result.
        </code></pre>
    `
},
{
    "question": "How would you check if a string starts with or ends with a particular substring?",
    "answer": `
        <pre><code>Use <code>startsWith(String prefix)</code> to check if the string begins with a specific prefix, and <code>endsWith(String suffix)</code> to check if it ends with a specific suffix.
        </code></pre>
    `
},
{
    "question": "What is the difference between `matches(String regex)` and `contains(CharSequence s)`?",
    "answer": `
        <pre><code><code>matches()</code> checks if the entire string matches a regular expression, while <code>contains()</code> checks if a specific sequence of characters exists within the string. <code>matches()</code> allows pattern matching with regular expressions, while <code>contains()</code> is a simpler, direct check.
        </code></pre>
    `
},
{
    "question": "What does `toUpperCase()` do, and how does it handle locale-specific characters?",
    "answer": `
        <pre><code><code>toUpperCase()</code> converts all characters in the string to uppercase using the default locale. For locale-sensitive transformations (e.g., Turkish <code>i</code>), use <code>toUpperCase(Locale locale)</code> to specify the appropriate locale.
        </code></pre>
    `
},
{
    "question": "How does `trim()` differ from `strip()` in Java 11?",
    "answer": `
        <pre><code><code>trim()</code> removes leading and trailing spaces but not other whitespace characters, while <code>strip()</code> removes all leading and trailing whitespace characters (including non-breaking spaces and Unicode whitespace) according to Unicode.
        </code></pre>
    `
},
{
    "question": "How would you check if a string is empty or only contains whitespace characters?",
    "answer": `
        <pre><code>Use <code>isEmpty()</code> to check if the string has zero length, and <code>isBlank()</code> (Java 11+) to check if it is either empty or contains only whitespace characters.
        </code></pre>
    `
},
{
    "question": "What is the difference between `replace(char oldChar, char newChar)` and `replaceAll(String regex, String replacement)`?",
    "answer": `
        <pre><code><code>replace()</code> performs a literal replacement of characters or substrings, while <code>replaceAll()</code> allows regular expressions. <code>replace()</code> is faster and more efficient for direct character replacements.
        </code></pre>
    `
},
{
    "question": "How would you remove all whitespace from a string?",
    "answer": `
        <pre><code>Use <code>replaceAll("\\\\s", "")</code> to remove all whitespace characters (including spaces, tabs, and line breaks) from the string.
        </code></pre>
    `
},
{
    "question": "How does `split(String regex)` behave, and what happens if the string doesn’t contain the delimiter?",
    "answer": `
        <pre><code><code>split()</code> divides the string into an array based on the specified delimiter. If the delimiter is not found, it returns an array containing the original string as a single element.
        </code></pre>
    `
},
{
    "question": "What is the difference between `substring()` and `split()` for extracting parts of a string?",
    "answer": `
        <pre><code><code>substring()</code> extracts a specific range of characters by index, while <code>split()</code> divides the string based on a delimiter, returning an array of substrings. Use <code>substring()</code> for fixed indices and <code>split()</code> for dynamic, delimiter-based splitting.
        </code></pre>
    `
},
{
    "question": "How does `split(String regex, int limit)` differ from `split(String regex)`?",
    "answer": `
        <pre><code>The <code>limit</code> parameter in <code>split()</code> specifies the maximum number of substrings to return. A positive <code>limit</code> will split up to that number of elements, zero behaves like no limit, and a negative <code>limit</code> allows trailing empty strings to be included in the result.
        </code></pre>
    `
},
{
    "question": "How would you extract the domain name from an email address string in Java?",
    "answer": `
        <pre><code>Use <code>substring()</code> with <code>indexOf("@")</code> to find the <code>@</code> character:
String email = "user@example.com";
String domain = email.substring(email.indexOf("@") + 1);
        </code></pre>
    `
},
{
    "question": "How does `replaceFirst(String regex, String replacement)` differ from `replaceAll(String regex, String replacement)`?",
    "answer": `
        <pre><code><code>replaceFirst()</code> replaces only the first match of the regular expression, while <code>replaceAll()</code> replaces all matches. Use <code>replaceFirst()</code> when only the initial occurrence needs to be modified.
        </code></pre>
    `
},
{
    "question": "Why is `String` immutable in Java, and what are the benefits of this design?",
    "answer": `
        <pre><code><code>String</code> immutability improves security, thread-safety, and caching. It prevents modification after creation, allowing strings to be safely shared between threads and used as constants or keys in hash-based collections without risk of alteration.
        </code></pre>
    `
},
{
    "question": "What happens when you concatenate two strings using the `+` operator inside a loop?",
    "answer": `
        <pre><code>Concatenating with <code>+</code> in a loop creates multiple temporary <code>String</code> objects, which is inefficient due to repeated allocations. Instead, use <code>StringBuilder</code> for in-place modifications to avoid unnecessary object creation.
        </code></pre>
    `
},
{
    "question": "How would you measure the performance difference between using `String`, `StringBuffer`, and `StringBuilder` for repeated concatenations?",
    "answer": `
        <pre><code>Measure execution time by concatenating large strings in a loop with each option. <code>StringBuilder</code> typically performs best in single-threaded contexts, followed by <code>StringBuffer</code> (synchronized) and <code>String</code> (inefficient due to immutability).
        </code></pre>
    `
},
{
    "question": "Why is `intern()` used with strings, and what is the potential downside of frequent usage?",
    "answer": `
        <pre><code><code>intern()</code> stores strings in the string pool, ensuring that identical strings share the same reference. Excessive use of <code>intern()</code> can lead to memory overhead in the pool, especially if many unique strings are interned unnecessarily.
        </code></pre>
    `
},
{
    "question": "How does `String.format()` compare to `+` concatenation in terms of readability and performance?",
    "answer": `
        <pre><code><code>String.format()</code> improves readability for complex formats but is slower than <code>+</code> concatenation due to formatting overhead. It is best suited for static formats rather than high-performance, repeated concatenations.
        </code></pre>
    `
},
{
    "question": "What is the String pool in Java, and how does it help with memory management?",
    "answer": `
        <pre><code>The String pool is a special memory region for storing interned <code>String</code> literals. It allows reuse of identical strings, reducing memory usage by avoiding duplicate string objects.
        </code></pre>
    `
},
{
    "question": "How does the `new String(\"example\")` differ from `\"example\"` in terms of memory allocation?",
    "answer": `
        <pre><code><code>"example"</code> directly uses the string pool, while <code>new String("example")</code> creates a new object in the heap, even if <code>"example"</code> is already in the pool.
        </code></pre>
    `
},
{
    "question": "What does `intern()` do, and when would you use it?",
    "answer": `
        <pre><code><code>intern()</code> moves a string to the string pool, ensuring that identical literals share the same reference. It is useful for reducing memory usage when dealing with many duplicate strings but should be used sparingly due to pool size limitations.
        </code></pre>
    `
},
{
    "question": "What is the risk of using `intern()` with dynamically generated strings in a memory-intensive application?",
    "answer": `
        <pre><code>Interning dynamically generated strings can flood the string pool, leading to high memory consumption and potentially exhausting the available pool space, especially if the strings are not reused.
        </code></pre>
    `
},
{
    "question": "How does Java manage memory for `substring()` in Java 6 vs Java 7 and later?",
    "answer": `
        <pre><code>In Java 6, <code>substring()</code> created a new <code>String</code> referencing the original string’s character array, potentially causing memory leaks. Java 7 and later create a new array for the substring, improving memory management but slightly impacting performance.
        </code></pre>
    `
},
{
    "question": "What happens if you call `substring()` with identical `beginIndex` and `endIndex`?",
    "answer": `
        <pre><code><code>substring(beginIndex, endIndex)</code> returns an empty string if <code>beginIndex</code> and <code>endIndex</code> are the same.
        </code></pre>
    `
},
{
    "question": "How would you handle a `NullPointerException` when using `length()` on a potentially null string?",
    "answer": `
        <pre><code>Use a null check or <code>Optional<String></code> to handle potential null values safely:
int length = (str == null) ? 0 : str.length();
        </code></pre>
    `
},
{
    "question": "Explain the behavior of `split(String regex)` when the regex is an empty string.",
    "answer": `
        <pre><code>Splitting on an empty string (<code>""</code>) breaks the string into individual characters, returning each character as an array element.
        </code></pre>
    `
},
{
    "question": "What will happen if `replaceAll()` is given a null value as a replacement string?",
    "answer": `
        <pre><code>Passing <code>null</code> to <code>replaceAll()</code> throws a <code>NullPointerException</code>, as it expects a non-null replacement string.
        </code></pre>
    `
},
{
    "question": "How does `valueOf(Object obj)` differ from `toString()` in converting an object to a string?",
    "answer": `
        <pre><code><code>valueOf(Object obj)</code> returns <code>"null"</code> if the object is <code>null</code>, whereas <code>toString()</code> throws a <code>NullPointerException</code>. Use <code>valueOf()</code> for safe, null-tolerant string conversion.
        </code></pre>
    `
},
{
    "question": "How would you check if a string contains only digits?",
    "answer": `
        <pre><code>Use <code>matches("\\d+")</code> to check if the string contains only numeric characters (digits 0–9).
        </code></pre>
    `
},
{
    "question": "What is the behavior of `String.split(\"regex\")` if the regex contains multiple spaces?",
    "answer": `
        <pre><code><code>split()</code> interprets multiple spaces as a regular expression pattern. To split by multiple spaces, use <code>"\\\\s+"</code> to treat one or more whitespace characters as delimiters.
        </code></pre>
    `
},
{
    "question": "How would you count the occurrences of a substring in a given string?",
    "answer": `
        <pre><code>Use a loop with <code>indexOf()</code> to locate each occurrence of the substring and increment a counter, or use <code>split(substring, -1).length - 1</code>.
        </code></pre>
    `
},
{
    "question": "How does the `matches()` method differ from `find()` in `Pattern` and `Matcher` classes?",
    "answer": `
        <pre><code><code>matches()</code> requires the entire string to match the regex, while <code>find()</code> looks for a partial match anywhere in the string. <code>find()</code> is often more flexible for locating patterns within larger texts.
        </code></pre>
    `
},
{
    "question": "How would you reverse a string without using a library function in Java?",
    "answer": `
        <pre><code>Use a loop to swap characters from the beginning and end until the middle, or convert the string to a <code>char</code> array, reverse it manually, and construct a new <code>String</code> from the reversed array.
        </code></pre>
    `
}


    ],
"StringBuffer and StringBuilder": [
        {
    "question": "What are `StringBuffer` and `StringBuilder`, and how do they differ from `String` in Java?",
    "answer": `
        <pre><code><code>StringBuffer</code> and <code>StringBuilder</code> are mutable classes used for string manipulation, allowing modifications without creating new objects. <code>String</code>, on the other hand, is immutable, meaning any modification creates a new <code>String</code> object.
        </code></pre>
    `
},
{
    "question": "What is the difference between `StringBuffer` and `StringBuilder`?",
    "answer": `
        <pre><code>The main difference is that <code>StringBuffer</code> is synchronized and thread-safe, making it suitable for multi-threaded environments, while <code>StringBuilder</code> is not synchronized and offers better performance in single-threaded scenarios due to reduced overhead.
        </code></pre>
    `
},
{
    "question": "Why were `StringBuffer` and `StringBuilder` introduced when `String` exists?",
    "answer": `
        <pre><code><code>String</code> is immutable, leading to performance overhead when performing multiple modifications, as each change creates a new object. <code>StringBuffer</code> and <code>StringBuilder</code> were introduced to allow efficient string manipulation without creating multiple objects.
        </code></pre>
    `
},
{
    "question": "When would you choose `StringBuilder` over `StringBuffer`?",
    "answer": `
        <pre><code>Use <code>StringBuilder</code> in single-threaded scenarios where thread-safety is not a concern, as it offers better performance than <code>StringBuffer</code> due to the absence of synchronization.
        </code></pre>
    `
},
{
    "question": "Why is `StringBuffer` thread-safe while `StringBuilder` is not?",
    "answer": `
        <pre><code><code>StringBuffer</code> methods are synchronized, meaning that only one thread can access a method at a time, ensuring thread-safety. <code>StringBuilder</code> lacks this synchronization, making it faster but unsuitable for concurrent use.
        </code></pre>
    `
},
{
    "question": "How does `StringBuffer` manage its internal memory when appending strings?",
    "answer": `
        <pre><code><code>StringBuffer</code> maintains a dynamic array of characters with an initial capacity. When the array is full, <code>StringBuffer</code> automatically expands by allocating a new array with larger capacity (typically double) and copying the existing data to it.
        </code></pre>
    `
},
{
    "question": "What is the default initial capacity of `StringBuffer` and `StringBuilder`?",
    "answer": `
        <pre><code>Both <code>StringBuffer</code> and <code>StringBuilder</code> have a default initial capacity of 16 characters. This capacity grows automatically as more characters are added.
        </code></pre>
    `
},
{
    "question": "How can you improve performance by setting an initial capacity for `StringBuffer` or `StringBuilder`?",
    "answer": `
        <pre><code>Setting an appropriate initial capacity can reduce the need for resizing and reallocation, improving performance. This is especially beneficial when the approximate size of the final string is known beforehand.
        </code></pre>
    `
},
{
    "question": "What happens to the capacity of `StringBuffer` if it exceeds the current capacity when appending?",
    "answer": `
        <pre><code>If <code>StringBuffer</code> exceeds its current capacity, it doubles its capacity (or increases by the necessary size) and allocates a new array, copying the existing characters into this expanded array.
        </code></pre>
    `
},
{
    "question": "Is it possible to reduce the capacity of `StringBuffer` or `StringBuilder`?",
    "answer": `
        <pre><code>Yes, you can reduce the capacity by calling <code>trimToSize()</code>, which reduces the capacity to the current length. This can free up unused memory, especially when the buffer is oversized.
        </code></pre>
    `
},
{
    "question": "What are the trade-offs of using `StringBuffer` in a multi-threaded environment?",
    "answer": `
        <pre><code>While <code>StringBuffer</code> provides thread-safety through synchronization, it introduces performance overhead due to locking, which can slow down execution in heavily multi-threaded environments. This overhead can be avoided with <code>StringBuilder</code> in single-threaded cases.
        </code></pre>
    `
},
{
    "question": "Is `StringBuffer` always thread-safe? Why or why not?",
    "answer": `
        <pre><code><code>StringBuffer</code> is thread-safe at the method level due to synchronized methods. However, it does not guarantee safety at the block or object level if multiple threads modify a <code>StringBuffer</code> instance across different methods, which may still lead to race conditions.
        </code></pre>
    `
},
{
    "question": "How does the `StringBuilder` class improve performance compared to `StringBuffer`?",
    "answer": `
        <pre><code><code>StringBuilder</code> lacks synchronized methods, so there is no locking overhead. This improves performance in single-threaded contexts, as operations on <code>StringBuilder</code> are faster due to the absence of synchronization.
        </code></pre>
    `
},
{
    "question": "How can you ensure thread-safety while using `StringBuilder` in a multi-threaded application?",
    "answer": `
        <pre><code>Use external synchronization, such as wrapping <code>StringBuilder</code> operations in synchronized blocks or using explicit locks. Alternatively, use <code>StringBuffer</code> for built-in thread safety if performance isn’t a primary concern.
        </code></pre>
    `
},
{
    "question": "Is it possible to encounter inconsistent results when using `StringBuffer` in a multi-threaded application? Explain.",
    "answer": `
        <pre><code>Yes, if different methods on the same <code>StringBuffer</code> instance are accessed concurrently by multiple threads, it can lead to inconsistent results due to lack of block-level synchronization. This can be avoided by synchronizing on the <code>StringBuffer</code> object.
        </code></pre>
    `
},
{
    "question": "Why would you use `StringBuffer` or `StringBuilder` for complex string manipulations over `String`?",
    "answer": `
        <pre><code>Since <code>String</code> is immutable, each modification creates a new <code>String</code> object, which is inefficient for repeated modifications. <code>StringBuffer</code> and <code>StringBuilder</code> are mutable, allowing efficient in-place modifications without creating multiple objects.
        </code></pre>
    `
},
{
    "question": "How would you convert a `StringBuilder` or `StringBuffer` object back to a `String`?",
    "answer": `
        <pre><code>Use the <code>toString()</code> method, which converts the contents of <code>StringBuilder</code> or <code>StringBuffer</code> to a <code>String</code> instance.
        </code></pre>
    `
},
{
    "question": "In what scenarios would using `String` concatenation (+ operator) be preferred over `StringBuilder`?",
    "answer": `
        <pre><code><code>String</code> concatenation is preferred for a small number of concatenations or when readability is a higher priority. For instance, using <code>+</code> is preferred in single-statement concatenations, especially when dealing with a fixed number of strings.
        </code></pre>
    `
},
{
    "question": "How would you concatenate strings in a loop, and why should you choose `StringBuilder` or `StringBuffer` for this?",
    "answer": `
        <pre><code>Use <code>StringBuilder</code> (or <code>StringBuffer</code> in multi-threaded cases) because each concatenation modifies the same instance, avoiding the creation of intermediate <code>String</code> objects. Using <code>+</code> in a loop creates many temporary <code>String</code> objects, which is inefficient.
        </code></pre>
    `
},
{
    "question": "How would you reverse a string using `StringBuilder` or `StringBuffer`?",
    "answer": `
        <pre><code>Use the <code>reverse()</code> method, which reverses the character sequence in place.
<pre><code>
StringBuilder sb = new StringBuilder("Hello");
sb.reverse();  // Output: "olleH"
</code></pre>
        </code></pre>
    `
},
{
    "question": "What is the `ensureCapacity(int minimumCapacity)` method in `StringBuilder` and `StringBuffer`, and when would you use it?",
    "answer": `
        <pre><code><code>ensureCapacity()</code> pre-allocates the buffer to a specified minimum capacity. It is useful when the approximate final length of the content is known in advance, reducing reallocation overhead and improving performance.
        </code></pre>
    `
},
{
    "question": "What will happen if the capacity of `StringBuilder` is set to a value lower than the current length?",
    "answer": `
        <pre><code>Setting a capacity lower than the current length has no effect; the capacity will not be reduced below the length of the content already in <code>StringBuilder</code>.
        </code></pre>
    `
},
{
    "question": "What are the differences in `append()` behavior when `null` is passed to `StringBuffer` or `StringBuilder`?",
    "answer": `
        <pre><code>When <code>null</code> is passed to the <code>append()</code> method, <code>StringBuffer</code> and <code>StringBuilder</code> append the string "null" rather than throwing a <code>NullPointerException</code>.
        </code></pre>
    `
},
{
    "question": "What are some potential performance pitfalls when using `StringBuilder` or `StringBuffer`?",
    "answer": `
        <pre><code>Performance issues can arise from frequent resizing if the buffer capacity is too small or undefined, or from using <code>StringBuffer</code> in single-threaded contexts where <code>StringBuilder</code> would be more efficient due to synchronization overhead.
        </code></pre>
    `
},
{
    "question": "What is the behavior of `insert(int offset, String str)` in `StringBuffer` if the offset is beyond the current length?",
    "answer": `
        <pre><code><code>StringBuffer</code> will throw an <code>IndexOutOfBoundsException</code> if the offset is greater than the current length. The offset must be within the valid range.
        </code></pre>
    `
},
{
    "question": "What is the difference between `substring()` in `String` and `substring()` in `StringBuilder`?",
    "answer": `
        <pre><code><code>String</code>'s <code>substring()</code> creates a new <code>String</code> object and shares the underlying character array. In contrast, <code>StringBuilder</code>'s <code>substring()</code> copies the characters into a new <code>String</code>, avoiding memory leaks associated with sharing.
        </code></pre>
    `
},
{
    "question": "How does `StringBuilder` compare two `StringBuilder` instances for equality?",
    "answer": `
        <pre><code><code>StringBuilder</code> does not override <code>equals()</code>, so it uses <code>Object</code>'s default implementation, which compares references rather than content. To compare content, you must convert <code>StringBuilder</code> to <code>String</code> and use <code>equals()</code>.
        </code></pre>
    `
},
{
    "question": "Is it possible to create a synchronized version of `StringBuilder` without using `StringBuffer`? If so, how?",
    "answer": `
        <pre><code>Yes, use <code>Collections.synchronizedList(new ArrayList<>())</code> to wrap a <code>StringBuilder</code> in a synchronized wrapper, or create a synchronized block around <code>StringBuilder</code> operations to ensure thread-safety.
        </code></pre>
    `
},
{
    "question": "What will happen if you use `delete(int start, int end)` in `StringBuilder` with `end` greater than `length()`?",
    "answer": `
        <pre><code><code>StringBuilder</code> throws an <code>IndexOutOfBoundsException</code> if <code>end</code> exceeds the current length. Both <code>start</code> and <code>end</code> indices must be within bounds.
        </code></pre>
    `
},
{
    "question": "Can `StringBuilder` or `StringBuffer` handle Unicode characters properly when reversing or inserting?",
    "answer": `
        <pre><code>Yes, <code>StringBuilder</code> and <code>StringBuffer</code> support Unicode characters. However, care should be taken when handling surrogate pairs or special characters that may require custom handling, especially during reversal.
        </code></pre>
    `
},
{
    "question": "What are some best practices for using `StringBuilder` and `StringBuffer` in Java applications?",
    "answer": `
        <pre><code>
        - Use <code>StringBuilder</code> for single-threaded applications and <code>StringBuffer</code> for multi-threaded contexts.
        - Set an initial capacity if the final size is predictable.
        - Avoid using <code>+</code> in loops; prefer <code>StringBuilder.append()</code> for repeated concatenations.
        - Use <code>toString()</code> only when necessary to avoid creating unnecessary <code>String</code> objects.
        </code></pre>
    `
},
{
    "question": "In what situations might using `StringBuffer` lead to reduced performance in a multi-threaded application?",
    "answer": `
        <pre><code>If multiple threads frequently block each other due to <code>StringBuffer</code>’s synchronization, performance may degrade. Consider using external synchronization with <code>StringBuilder</code> or a non-blocking string manipulation library to mitigate this.
        </code></pre>
    `
},
{
    "question": "How would you design a logging system using `StringBuilder` or `StringBuffer` in Java?",
    "answer": `
        <pre><code>Use <code>StringBuilder</code> in single-threaded logging to accumulate log messages efficiently, appending information as needed. Use <code>StringBuffer</code> if log operations are multi-threaded, or consider other thread-safe logging mechanisms if performance is critical.
        </code></pre>
    `
},
{
    "question": "How would you use `StringBuilder` or `StringBuffer` to build a JSON string efficiently in Java?",
    "answer": `
        <pre><code>Use <code>StringBuilder</code> or <code>StringBuffer</code> to construct the JSON string by appending key-value pairs in a loop. This approach is more efficient than concatenating strings, especially for large JSON objects.
        </code></pre>
    `
},
{
    "question": "How can improper use of `StringBuffer` or `StringBuilder` lead to memory leaks in Java?",
    "answer": `
        <pre><code>Using overly large buffers that remain in memory due to retained references can lead to memory leaks. This is mitigated by calling <code>trimToSize()</code> or by discarding <code>StringBuilder</code> or <code>StringBuffer</code> instances when they’re no longer needed.
        </code></pre>
    `
}


    ],
"interfaces": [
        {
    "question": "What is an interface in Java, and why is it important?",
    "answer": `
        <pre><code>An interface in Java is a contract that specifies a set of methods that a class must implement, without providing their implementations. It supports multiple inheritance of type, promotes loose coupling, and enables polymorphic behavior by defining shared behaviors without dictating specific implementations.
        </code></pre>
    `
},
{
    "question": "What is the default access modifier for methods in an interface, and why?",
    "answer": `
        <pre><code>By default, methods in an interface are <code>public</code> because an interface is a contract that must be fully accessible to any implementing classes. This access level ensures that implementing classes can use and override the interface methods.
        </code></pre>
    `
},
{
    "question": "Can an interface extend another interface in Java? What is the purpose of this feature?",
    "answer": `
        <pre><code>Yes, an interface can extend another interface, allowing the inheriting interface to combine the behaviors of multiple interfaces. This promotes the reuse of contracts and supports a hierarchy of types without implementing methods.
        </code></pre>
    `
},
{
    "question": "How does Java handle multiple inheritance with interfaces, and how is it different from multiple inheritance with classes?",
    "answer": `
        <pre><code>Java allows multiple inheritance of interfaces, enabling a class to implement multiple interfaces, which supports polymorphism. This is different from multiple inheritance with classes, which is not supported in Java, avoiding complexity and ambiguity in method resolution.
        </code></pre>
    `
},
{
    "question": "What is the difference between an abstract class and an interface in Java?",
    "answer": `
        <pre><code>An abstract class can contain both abstract and concrete methods, state (fields), and constructors. An interface, prior to Java 8, could only declare method signatures. Java 8 and later allow default and static methods in interfaces, but interfaces cannot have fields except constants.
        </code></pre>
    `
},
{
    "question": "What are default methods in interfaces, and why were they introduced in Java 8?",
    "answer": `
        <pre><code>Default methods are methods with implementations in an interface, introduced in Java 8 to allow interface evolution without breaking existing implementations. They provide backward compatibility, letting new functionality be added without forcing changes in all implementing classes.
        </code></pre>
    `
},
{
    "question": "Can a class override a default method in an interface?",
    "answer": `
        <pre><code>Yes, a class that implements an interface with a default method can override that method. If the class does not override it, the default method’s implementation will be inherited.
        </code></pre>
    `
},
{
    "question": "What happens if two interfaces contain the same default method and a class implements both interfaces?",
    "answer": `
        <pre><code>The implementing class must override the method to resolve the conflict. If the class doesn’t provide an override, Java will raise a compilation error due to the ambiguity.
        </code></pre>
    `
},
{
    "question": "What is a static method in an interface, and when would you use it?",
    "answer": `
        <pre><code>A static method in an interface is a method that belongs to the interface itself, not to any instance of a class implementing the interface. It is useful for utility or helper methods that are related to the interface but do not depend on any instance.
        </code></pre>
    `
},
{
    "question": "Can default methods in interfaces access instance variables? Why or why not?",
    "answer": `
        <pre><code>No, default methods cannot access instance variables because interfaces do not have instance variables (only static final constants). Default methods operate without any instance-specific state.
        </code></pre>
    `
},
{
    "question": "What is a functional interface in Java, and how does it relate to lambda expressions?",
    "answer": `
        <pre><code>A functional interface is an interface with a single abstract method (SAM). It enables lambda expressions by allowing a lambda to provide an implementation for the single abstract method, making code more concise and expressive.
        </code></pre>
    `
},
{
    "question": "How does Java ensure that an interface is a functional interface?",
    "answer": `
        <pre><code>Java provides the <code>@FunctionalInterface</code> annotation, which ensures that an interface meets the criteria for a functional interface (only one abstract method). It is optional but serves as a compile-time check.
        </code></pre>
    `
},
{
    "question": "Can an interface with a default or static method still be a functional interface?",
    "answer": `
        <pre><code>Yes, a functional interface can have default and static methods, as long as it has only one abstract method. Default and static methods do not affect its functional nature.
        </code></pre>
    `
},
{
    "question": "Explain how the `Comparator` interface is a functional interface and give an example of using it with a lambda expression.",
    "answer": `
        <pre><code><code>Comparator</code> is a functional interface because it has a single abstract method <code>compare()</code>. A lambda expression can be used to provide a <code>Comparator</code> implementation, for example:
<pre><code>Comparator<String> comparator = (s1, s2) -> s1.length() - s2.length();
        </code></pre>
    `
},
{
    "question": "How would you handle a situation where a functional interface needs to throw a checked exception in a lambda expression?",
    "answer": `
        <pre><code>Use a wrapper method to catch and handle the exception, or create a custom functional interface that allows throwing checked exceptions. Another option is to use <code>try-catch</code> within the lambda body.
        </code></pre>
    `
},
{
    "question": "Can an interface extend multiple interfaces in Java? Why is this feature useful?",
    "answer": `
        <pre><code>Yes, an interface can extend multiple interfaces. This allows combining multiple contracts into a single interface, promoting flexible design, code reuse, and a common type hierarchy across unrelated classes.
        </code></pre>
    `
},
{
    "question": "If a class implements two interfaces with methods of the same name but different return types, what happens?",
    "answer": `
        <pre><code>The class cannot implement both interfaces in this case because it would lead to a conflict in return types, which Java cannot resolve. A compilation error will occur.
        </code></pre>
    `
},
{
    "question": "How does Java resolve method conflicts when a class implements multiple interfaces with default methods of the same name?",
    "answer": `
        <pre><code>Java requires the implementing class to override the conflicting default method to resolve ambiguity. If the class doesn’t provide an override, a compilation error will be raised.
        </code></pre>
    `
},
{
    "question": "Explain how the Diamond Problem is avoided in Java interfaces with default methods.",
    "answer": `
        <pre><code>Java requires the class implementing multiple interfaces with the same default method to explicitly override it, thus resolving ambiguity. Unlike multiple inheritance in C++, Java doesn’t automatically inherit conflicting default methods.
        </code></pre>
    `
},
{
    "question": "How would you resolve a situation where two interfaces have the same static method, and a class implements both interfaces?",
    "answer": `
        <pre><code>Since static methods belong to the interface itself, they are not inherited by implementing classes. The class can call each static method by prefixing it with the interface name, e.g., <code>Interface1.staticMethod()</code>.
        </code></pre>
    `
},
{
    "question": "How does the Strategy design pattern leverage interfaces?",
    "answer": `
        <pre><code>The Strategy pattern defines a family of algorithms by encapsulating them in separate classes that implement a common interface. This allows for interchangeable behavior without modifying the client code.
        </code></pre>
    `
},
{
    "question": "What role do interfaces play in the Dependency Injection (DI) principle in Spring?",
    "answer": `
        <pre><code>Interfaces allow Spring to inject different implementations at runtime, promoting loose coupling. Clients depend on interfaces rather than concrete classes, enabling flexible configuration and easier testing.
        </code></pre>
    `
},
{
    "question": "How would you design an interface for a file processing system that supports multiple file formats?",
    "answer": `
        <pre><code>Define an interface <code>FileProcessor</code> with a method like <code>processFile()</code>. Each file type (e.g., <code>CsvProcessor</code>, <code>XmlProcessor</code>) implements <code>FileProcessor</code>, providing file-specific processing logic. This design allows easily adding support for new file formats.
        </code></pre>
    `
},
{
    "question": "What is the Adapter pattern, and how do interfaces support it?",
    "answer": `
        <pre><code>The Adapter pattern allows incompatible interfaces to work together by creating an adapter that implements the target interface and translates calls to the adaptee. Interfaces define the expected behavior, while the adapter bridges differences.
        </code></pre>
    `
},
{
    "question": "Explain how interfaces support the Open/Closed Principle (OCP) in Java.",
    "answer": `
        <pre><code>Interfaces allow extending functionality by creating new implementations without modifying existing code. This keeps the system open for extension but closed for modification, as new behavior can be introduced by implementing additional classes.
        </code></pre>
    `
},
{
    "question": "Can interfaces have fields in Java? If so, what are the constraints on these fields?",
    "answer": `
        <pre><code>Yes, interfaces can have fields, but they are implicitly <code>public</code>, <code>static</code>, and <code>final</code>. This means they are effectively constants and cannot be modified after being assigned.
        </code></pre>
    `
},
{
    "question": "Why are fields in interfaces implicitly `public`, `static`, and `final`?",
    "answer": `
        <pre><code>Fields in interfaces are constants by design, meant to provide global variables that are accessible by implementing classes. Making them <code>static</code> and <code>final</code> enforces immutability and ensures they belong to the interface itself, not to any instance.
        </code></pre>
    `
},
{
    "question": "Can an interface define a mutable object as a constant? What are the risks?",
    "answer": `
        <pre><code>Technically, an interface can define a mutable object (e.g., a <code>List</code>) as a constant, but it is risky because the object’s contents can be modified. This violates immutability, which can lead to unexpected behaviors.
        </code></pre>
    `
},
{
    "question": "How would you handle a requirement to provide non-final fields in an interface in Java?",
    "answer": `
        <pre><code>Since interfaces cannot have non-final fields, use an abstract class if shared mutable state is required, or use dependency injection to provide state through implementations rather than directly in the interface.
        </code></pre>
    `
},
{
    "question": "Is it a good practice to define constants in an interface? Why or why not?",
    "answer": `
        <pre><code>Generally, it’s discouraged to define constants in an interface, as it can lead to "constant interfaces" (interfaces used solely to hold constants), which violates good design practices. Instead, use a class or enum for constants.
        </code></pre>
    `
},
{
    "question": "Can you instantiate an interface in Java? Why or why not?",
    "answer": `
        <pre><code>No, you cannot instantiate an interface because it lacks implementation. However, you can create an instance of an anonymous class or a lambda expression (for functional interfaces) that implements the interface.
        </code></pre>
    `
},
{
    "question": "Can an interface be marked as `final` in Java? Explain why or why not.",
    "answer": `
        <pre><code>No, an interface cannot be marked as <code>final</code> because <code>final</code> prevents inheritance, and interfaces are meant to be implemented by other classes.
        </code></pre>
    `
},
{
    "question": "Why can’t interfaces in Java have constructors?",
    "answer": `
        <pre><code>Interfaces cannot have constructors because they are not meant to be instantiated directly. They define a contract without any implementation details that would require construction.
        </code></pre>
    `
},
{
    "question": "How would you make sure that all classes implementing an interface are instantiable only through a factory method?",
    "answer": `
        <pre><code>Make the constructors of implementing classes <code>private</code> or <code>protected</code> and provide a public static factory method in the interface or a utility class to create instances. This approach enforces controlled instantiation.
        </code></pre>
    `
},
{
    "question": "Can a class implement two interfaces that define methods with identical signatures but different behaviors?",
    "answer": `
        <pre><code>Yes, a class can implement two interfaces with methods having the same signatures. However, it must choose one behavior to implement or create a combined behavior, as only one implementation is allowed.
        </code></pre>
    `
},
{
    "question": "What is the significance of marker interfaces in Java? Give an example.",
    "answer": `
        <pre><code>Marker interfaces are interfaces with no methods, used to provide metadata to classes. For example, <code>Serializable</code> indicates that a class can be serialized. Marker interfaces provide a way for certain behaviors to be associated with a class without modifying its implementation.
        </code></pre>
    `
},
{
    "question": "How does implementing the `Cloneable` interface impact a class’s design?",
    "answer": `
        <pre><code>Implementing <code>Cloneable</code> allows a class to be cloned. However, the <code>clone()</code> method must be overridden carefully to avoid shallow copying issues, as <code>Cloneable</code> does not enforce how the clone is created.
        </code></pre>
    `
},
{
    "question": "Is it possible to declare an interface inside a class? If so, when would you do this?",
    "answer": `
        <pre><code>Yes, it’s possible to declare an interface inside a class. This is useful for creating a nested interface that is closely related to the enclosing class, often as a callback or helper interface.
        </code></pre>
    `
},
{
    "question": "How does interface segregation (Interface Segregation Principle) apply to interfaces in Java?",
    "answer": `
        <pre><code>The Interface Segregation Principle suggests that no client should be forced to implement methods it does not use. In Java, this means designing smaller, focused interfaces rather than large, "fat" interfaces, allowing classes to implement only the interfaces they need.
        </code></pre>
    `
},
{
    "question": "Explain why using interfaces as return types in methods is beneficial.",
    "answer": `
        <pre><code>Returning interfaces rather than concrete types enhances flexibility, allowing the return type to be swapped with any implementation of the interface. This promotes loose coupling and enables easier testing and substitution.
        </code></pre>
    `
}

    ],
"Abstract": [
     {
    "question": "What is abstraction in Java, and why is it important in object-oriented programming?",
    "answer": `
        <pre><code>Abstraction is the concept of hiding implementation details and showing only essential features. It is important because it reduces complexity, enhances code readability, promotes modularity, and supports loose coupling by focusing on "what" an object does rather than "how" it does it.
        </code></pre>
    `
},
{
    "question": "How does Java achieve abstraction, and what are the main tools used for abstraction?",
    "answer": `
        <pre><code>Java achieves abstraction through <strong>abstract classes</strong> and <strong>interfaces</strong>. Abstract classes provide partial abstraction by allowing some methods to have implementations, while interfaces provide complete abstraction by only declaring method signatures (prior to Java 8).
        </code></pre>
    `
},
{
    "question": "What is the difference between abstraction and encapsulation in Java?",
    "answer": `
        <pre><code>Abstraction hides implementation details to show only relevant functionality to the user, while encapsulation hides internal states by bundling data with methods that operate on it. Encapsulation is about protecting data, while abstraction is about reducing complexity.
        </code></pre>
    `
},
{
    "question": "What is an abstract class, and how does it differ from a regular class in Java?",
    "answer": `
        <pre><code>An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without implementations). Unlike a regular class, it serves as a blueprint for subclasses to provide specific implementations of abstract methods.
        </code></pre>
    `
},
{
    "question": "Why can’t abstract classes be instantiated directly in Java?",
    "answer": `
        <pre><code>Abstract classes are meant to provide a base structure for other classes to extend and define abstract methods. They are incomplete on their own, and instantiating them would defeat the purpose of forcing subclasses to implement required methods.
        </code></pre>
    `
},
{
    "question": "What is the main difference between an abstract class and an interface in Java?",
    "answer": `
        <pre><code>An abstract class allows partial abstraction and can contain implemented methods, state (fields), and constructors, whereas an interface (prior to Java 8) was fully abstract and could only contain method declarations. In modern Java, interfaces can also have default and static methods.
        </code></pre>
    `
},
{
    "question": "Can an abstract class have a constructor in Java, and if so, what is its purpose?",
    "answer": `
        <pre><code>Yes, an abstract class can have a constructor. Its purpose is to initialize fields and execute any code necessary for setup when the abstract class is extended by a subclass.
        </code></pre>
    `
},
{
    "question": "When would you choose an abstract class over an interface in Java?",
    "answer": `
        <pre><code>Use an abstract class when you want to share code among closely related classes or provide a common base with shared state (fields). Choose an interface when you want to define a contract that can be implemented by classes from different hierarchies.
        </code></pre>
    `
},
{
    "question": "What happens if an abstract class implements an interface but doesn’t provide implementations for all of the interface’s methods?",
    "answer": `
        <pre><code>If an abstract class implements an interface but doesn’t provide implementations for all interface methods, the class remains abstract, and any subclass must implement the remaining methods.
        </code></pre>
    `
},
{
    "question": "How has the role of interfaces changed with Java 8 and later versions?",
    "answer": `
        <pre><code>Java 8 introduced default and static methods, allowing interfaces to have concrete methods, which blurred the lines between interfaces and abstract classes. Java 9 added private methods in interfaces for code reuse within the interface.
        </code></pre>
    `
},
{
    "question": "Can an abstract class implement multiple interfaces? Why or why not?",
    "answer": `
        <pre><code>Yes, an abstract class can implement multiple interfaces. This allows it to inherit multiple sets of method declarations, which can be useful for creating a common base class with specific contract implementations for subclasses.
        </code></pre>
    `
},
{
    "question": "How would you implement multiple inheritance in Java using abstraction?",
    "answer": `
        <pre><code>Java doesn’t support multiple inheritance for classes, but you can achieve it using interfaces. A class can implement multiple interfaces, allowing it to inherit behavior from multiple sources, emulating multiple inheritance.
        </code></pre>
    `
},
{
    "question": "How would you enforce a specific implementation across all subclasses of an abstract class?",
    "answer": `
        <pre><code>Define a concrete method in the abstract class with the required logic, ensuring all subclasses inherit and use it. This approach enforces the desired implementation across all subclasses.
        </code></pre>
    `
},
{
    "question": "Can an abstract class have both abstract and non-abstract methods? Provide an example scenario.",
    "answer": `
        <pre><code>Yes, an abstract class can have both abstract and non-abstract methods. This is useful when you want to provide some common behavior across all subclasses (using non-abstract methods) while allowing them to customize specific behaviors (using abstract methods).
        </code></pre>
    `
},
{
    "question": "How does abstraction support the Open/Closed Principle in Java?",
    "answer": `
        <pre><code>Abstraction allows defining a base class or interface with a stable contract, letting new implementations extend or implement it without modifying existing code. This enables systems to be open for extension but closed for modification.
        </code></pre>
    `
},
{
    "question": "What would be an example of a real-world scenario where you would use abstraction in a Java application?",
    "answer": `
        <pre><code>In a payment processing system, you can create an abstract class <code>PaymentProcessor</code> with an abstract method <code>processPayment()</code>. Different payment methods like <code>CreditCardPayment</code> and <code>PayPalPayment</code> can extend this class and implement <code>processPayment()</code> according to their specific requirements.
        </code></pre>
    `
},
{
    "question": "Explain how abstraction is applied in the Java Collections Framework.",
    "answer": `
        <pre><code>The Java Collections Framework uses abstraction through interfaces like <code>List</code>, <code>Set</code>, and <code>Map</code> to define a common contract. Concrete implementations like <code>ArrayList</code>, <code>HashSet</code>, and <code>HashMap</code> provide specific implementations, allowing polymorphic behavior based on the interface type.
        </code></pre>
    `
},
{
    "question": "How would you use abstraction to define a service layer in a Spring application?",
    "answer": `
        <pre><code>Define service interfaces (e.g., <code>UserService</code>) that specify service methods, allowing multiple implementations. Abstract classes could provide shared logic for these implementations, allowing more specific service classes to inherit and customize behavior as needed.
        </code></pre>
    `
},
{
    "question": "What are the benefits of using abstract classes for defining reusable components in a library or framework?",
    "answer": `
        <pre><code>Abstract classes in libraries or frameworks provide a template for developers, defining mandatory and optional methods. This promotes consistency, reduces boilerplate code, and ensures that core behavior is inherited and not overridden accidentally.
        </code></pre>
    `
},
{
    "question": "How can abstraction help in handling different file types in a file processing system?",
    "answer": `
        <pre><code>Create an abstract class <code>FileProcessor</code> with an abstract method <code>process()</code>. Subclasses like <code>CsvFileProcessor</code> and <code>XmlFileProcessor</code> can implement <code>process()</code> to handle different file formats. This design abstracts file processing and makes it extensible for future file types.
        </code></pre>
    `
},
{
    "question": "Can a subclass override a concrete method in an abstract class?",
    "answer": `
        <pre><code>Yes, a subclass can override a concrete method in an abstract class if it wants to provide a specific implementation. However, it’s not required unless the concrete method in the abstract class is marked <code>final</code>.
        </code></pre>
    `
},
{
    "question": "How does method overriding work with abstract methods in Java?",
    "answer": `
        <pre><code>Abstract methods in an abstract class must be overridden by any concrete subclass. This ensures that each subclass provides its specific implementation for the behavior defined by the abstract method.
        </code></pre>
    `
},
{
    "question": "Can an abstract method in a superclass be overridden by a non-abstract method in a subclass? Why or why not?",
    "answer": `
        <pre><code>Yes, an abstract method in a superclass must be overridden by a non-abstract method in a concrete subclass, as the subclass is required to provide a concrete implementation for the abstract method.
        </code></pre>
    `
},
{
    "question": "Is it possible to call a superclass’s concrete method from an overridden method in a subclass? If so, how?",
    "answer": `
        <pre><code>Yes, use <code>super.methodName()</code> in the subclass’s overridden method to call the superclass’s version of the method. This is useful for extending functionality rather than replacing it entirely.
        </code></pre>
    `
},
{
    "question": "What happens if a subclass does not implement all abstract methods from its abstract superclass?",
    "answer": `
        <pre><code>If a subclass does not implement all abstract methods, it must also be declared abstract. Only concrete (non-abstract) subclasses must implement all abstract methods.
        </code></pre>
    `
},
{
    "question": "How is abstraction applied in the Template Method design pattern?",
    "answer": `
        <pre><code>In the Template Method pattern, an abstract class defines the skeleton of an algorithm in a template method and allows subclasses to override certain steps. This promotes code reuse while allowing customizable behavior.
        </code></pre>
    `
},
{
    "question": "Explain the role of abstraction in the Factory Method design pattern.",
    "answer": `
        <pre><code>The Factory Method pattern uses abstraction to define a method in an abstract class or interface for creating objects, while subclasses provide specific implementations. This decouples object creation from the client code.
        </code></pre>
    `
},
{
    "question": "How does the Strategy pattern utilize abstraction?",
    "answer": `
        <pre><code>In the Strategy pattern, different algorithms (strategies) are defined in separate classes implementing a common interface. This abstraction allows the client to use different algorithms interchangeably without modifying the client code.
        </code></pre>
    `
},
{
    "question": "How does abstraction support the Dependency Inversion Principle (DIP) in Java?",
    "answer": `
        <pre><code>DIP promotes depending on abstractions (interfaces or abstract classes) rather than concrete implementations. By coding to abstractions, classes become less dependent on specific implementations, promoting flexibility and testability.
        </code></pre>
    `
},
{
    "question": "Describe how abstraction is used in the Observer pattern.",
    "answer": `
        <pre><code>The Observer pattern defines an abstract observer interface that observers must implement. The subject (observable) uses this abstraction to notify observers without knowing their concrete types, allowing decoupling and flexibility.
        </code></pre>
    `
}

   
    ],
"oauth": [
        {
    "question": "What is OAuth2, and how does it differ from OAuth1?",
    "answer": `
        <pre><code>OAuth2 is a protocol for delegated authorization, allowing third-party applications to access resources on behalf of users. Unlike OAuth1, OAuth2 doesn’t require signing each request with cryptographic signatures, instead relying on tokens and HTTPS for security.
        </code></pre>
    `
},
{
    "question": "Explain the primary roles in the OAuth2 protocol (Resource Owner, Client, Authorization Server, Resource Server).",
    "answer": `
        <pre><code>
        - <b>Resource Owner</b>: Entity capable of granting access to a protected resource (typically the user).
        - <b>Client</b>: Application requesting access to resources on behalf of the resource owner.
        - <b>Authorization Server</b>: Issues access tokens to the client after successfully authenticating the resource owner.
        - <b>Resource Server</b>: Hosts the protected resources and verifies the access token from the client.
        </code></pre>
    `
},
{
    "question": "What is an access token, and how is it used in OAuth2?",
    "answer": `
        <pre><code>An access token is a credential granted by the authorization server that allows the client to access the resource server on behalf of the resource owner. The token is passed in requests to authenticate the client’s access to protected resources.
        </code></pre>
    `
},
{
    "question": "What is a refresh token, and why is it important in OAuth2?",
    "answer": `
        <pre><code>A refresh token is a credential used to obtain new access tokens without requiring the user to reauthenticate. It’s crucial for maintaining a persistent session, allowing clients to request new tokens after the original access token expires.
        </code></pre>
    `
},
{
    "question": "What is the purpose of scopes in OAuth2, and how do they impact authorization?",
    "answer": `
        <pre><code>Scopes define the level of access a client is granted, specifying permissions for resources. They limit the token’s access to specific operations, enhancing security by ensuring clients can only perform authorized actions.
        </code></pre>
    `
},
{
    "question": "What is the Authorization Code Grant in OAuth2, and when would you use it?",
    "answer": `
        <pre><code>The Authorization Code Grant is a two-step flow for confidential clients, where the client first receives an authorization code and then exchanges it for an access token. It’s commonly used for web applications that can securely store the client secret.
        </code></pre>
    `
},
{
    "question": "Explain the Implicit Grant flow and why it is considered less secure.",
    "answer": `
        <pre><code>The Implicit Grant flow issues an access token directly without exchanging an authorization code. It’s less secure because the token is exposed in the URL, which may be intercepted by malicious actors. It’s generally discouraged in favor of Authorization Code with PKCE.
        </code></pre>
    `
},
{
    "question": "What is the Client Credentials Grant, and in what scenarios would you use it?",
    "answer": `
        <pre><code>The Client Credentials Grant issues an access token directly to the client, used in machine-to-machine authentication where there is no user (e.g., backend services accessing APIs).
        </code></pre>
    `
},
{
    "question": "Explain the Resource Owner Password Credentials Grant and why it is not recommended.",
    "answer": `
        <pre><code>The Resource Owner Password Credentials Grant allows clients to collect the user’s credentials directly and exchange them for an access token. It’s generally discouraged because it requires sharing user credentials with the client, compromising security.
        </code></pre>
    `
},
{
    "question": "What is PKCE (Proof Key for Code Exchange), and how does it enhance the Authorization Code flow?",
    "answer": `
        <pre><code>PKCE is an extension for the Authorization Code flow that adds a secure code challenge and verifier, mitigating attacks like the authorization code interception attack. It’s mandatory for public clients, such as mobile and SPA (Single Page Applications).
        </code></pre>
    `
},
{
    "question": "What are the differences between opaque tokens and JWT tokens in OAuth2?",
    "answer": `
        <pre><code>
        - <b>Opaque Tokens</b>: Require validation by the authorization server, contain no readable information.
        - <b>JWT Tokens</b>: Self-contained, containing claims that can be verified without an external server, allowing direct use by the resource server.
        </code></pre>
    `
},
{
    "question": "Explain the structure of a JWT (JSON Web Token) and its main components.",
    "answer": `
        <pre><code>A JWT consists of three parts: the <b>header</b> (metadata, like the algorithm used), the <b>payload</b> (claims, such as user info and scopes), and the <b>signature</b> (signed hash to verify token integrity).
        </code></pre>
    `
},
{
    "question": "How does an authorization server verify a JWT token, and what information is typically included in the token?",
    "answer": `
        <pre><code>The authorization server signs the JWT with a private key. The resource server verifies the signature using the corresponding public key. JWTs usually include claims like <code>iss</code> (issuer), <code>exp</code> (expiration), <code>sub</code> (subject), and custom claims for scopes.
        </code></pre>
    `
},
{
    "question": "What is token revocation in OAuth2, and how is it typically implemented?",
    "answer": `
        <pre><code>Token revocation allows an authorization server to invalidate tokens. It’s implemented by tracking token status in a database or using a revocation endpoint where clients can request revocation. JWTs are challenging to revoke unless combined with short expiration or a revocation list.
        </code></pre>
    `
},
{
    "question": "What are some common security risks with access tokens, and how can they be mitigated?",
    "answer": `
        <pre><code>Risks include token leakage, replay attacks, and misuse by malicious actors. Mitigation strategies include using HTTPS, storing tokens securely, short token lifetimes, refresh tokens with rotation, and PKCE for public clients.
        </code></pre>
    `
},
{
    "question": "How do you design OAuth2 scopes to ensure fine-grained access control?",
    "answer": `
        <pre><code>Define scopes based on functionality (e.g., <code>read</code>, <code>write</code>, <code>admin</code>) and limit them to specific resources (e.g., <code>user.profile.read</code>, <code>user.posts.write</code>). Avoid overly broad scopes and enforce minimum privilege.
        </code></pre>
    `
},
{
    "question": "How would you implement scope-based access control on the resource server?",
    "answer": `
        <pre><code>Extract scopes from the token (e.g., from JWT claims), then map the requested action to the required scope(s). Deny access if the token’s scopes do not meet the required permissions for the resource.
        </code></pre>
    `
},
{
    "question": "Explain the purpose of “aud” (audience) claim in OAuth2, and how it is used.",
    "answer": `
        <pre><code>The <code>aud</code> claim specifies the intended recipients of the token, often the resource server(s) allowed to accept it. The resource server checks the <code>aud</code> claim to ensure the token is valid for it, preventing misuse by other services.
        </code></pre>
    `
},
{
    "question": "What happens if an access token request includes scopes the client is not authorized for?",
    "answer": `
        <pre><code>The authorization server issues a token with only the allowed scopes, ignoring unauthorized ones, or returns an error if the requested scopes are invalid.
        </code></pre>
    `
},
{
    "question": "How can you ensure that certain sensitive scopes are only available to specific clients in OAuth2?",
    "answer": `
        <pre><code>Use client policies at the authorization server to limit scope access based on the client’s identity. Sensitive scopes can be restricted by client type, role, or specific client IDs.
        </code></pre>
    `
},
{
    "question": "Why should refresh tokens have a longer lifespan than access tokens?",
    "answer": `
        <pre><code>Access tokens are short-lived to reduce security risks in case of token leakage. Refresh tokens are longer-lived to minimize the need for user reauthentication, enhancing user experience.
        </code></pre>
    `
},
{
    "question": "What are the security considerations for storing refresh tokens in web or mobile applications?",
    "answer": `
        <pre><code>Avoid storing tokens in insecure storage (e.g., localStorage in web apps). Use secure, encrypted storage (e.g., Secure Enclave on iOS, Keystore on Android) and refresh token rotation to minimize risks.
        </code></pre>
    `
},
{
    "question": "Explain refresh token rotation and how it improves security.",
    "answer": `
        <pre><code>Refresh token rotation issues a new refresh token with each access token renewal. It invalidates the old refresh token, reducing the risk of replay attacks if a refresh token is compromised.
        </code></pre>
    `
},
{
    "question": "What happens when a refresh token is expired or revoked, and how should the client handle this?",
    "answer": `
        <pre><code>When a refresh token is invalid, the authorization server returns an error. The client should handle this by redirecting the user to reauthenticate and obtain a new token pair.
        </code></pre>
    `
},
{
    "question": "What is the potential security risk if a refresh token is not rotated, and how does rotation mitigate it?",
    "answer": `
        <pre><code>Without rotation, a stolen refresh token can be reused indefinitely. Rotation limits the validity of each refresh token, minimizing the impact of token theft.
        </code></pre>
    `
},
{
    "question": "How would you implement OAuth2 in a microservices architecture with a single sign-on (SSO) solution?",
    "answer": `
        <pre><code>Use a central authorization server for user authentication. Each microservice validates the access token (e.g., using JWT) issued by the authorization server, ensuring that the token is trusted and contains necessary claims.
        </code></pre>
    `
},
{
    "question": "What is dynamic client registration in OAuth2, and what are its use cases?",
    "answer": `
        <pre><code>Dynamic client registration allows clients to register with the authorization server at runtime, useful for scalable environments or third-party applications needing unique client credentials.
        </code></pre>
    `
},
{
    "question": "How would you enforce token revocation in a distributed environment where JWTs are used?",
    "answer": `
        <pre><code>Use short-lived JWTs with frequent refresh, maintain a token revocation list (e.g., a blacklist in Redis), or leverage introspection with opaque tokens.
        </code></pre>
    `
},
{
    "question": "What is the purpose of the `state` parameter in OAuth2, and how does it prevent attacks?",
    "answer": `
        <pre><code>The <code>state</code> parameter is used to prevent CSRF (Cross-Site Request Forgery) by linking the client’s request to the authorization server response. The client validates the returned <code>state</code> to ensure the response is genuine.
        </code></pre>
    `
},
{
    "question": "Explain how the OpenID Connect (OIDC) protocol extends OAuth2.",
    "answer": `
        <pre><code>OIDC builds on OAuth2 for authentication, providing an ID token containing information about the user (resource owner). It allows OAuth2 to perform both authorization and authentication, useful for identity management.
        </code></pre>
    `
},
{
    "question": "What is the 'Authorization Code Interception Attack,' and how does PKCE prevent it?",
    "answer": `
        <pre><code>This attack intercepts authorization codes. PKCE mitigates it by requiring a dynamically generated code verifier that must match the code challenge when exchanging for an access token.
        </code></pre>
    `
},
{
    "question": "Why is it important to always use HTTPS with OAuth2?",
    "answer": `
        <pre><code>OAuth2 tokens (access, refresh) are sensitive and vulnerable to interception over HTTP. HTTPS ensures encryption in transit, protecting tokens from eavesdropping and man-in-the-middle attacks.
        </code></pre>
    `
},
{
    "question": "What is token introspection, and why is it useful in OAuth2?",
    "answer": `
        <pre><code>Token introspection is a process where a resource server queries the authorization server to validate a token. It’s useful for checking token status and attributes, especially for opaque tokens that don’t contain embedded claims.
        </code></pre>
    `
},
{
    "question": "Explain the 'implicit flow' and why it is now considered insecure.",
    "answer": `
        <pre><code>The implicit flow issues tokens directly without code exchange, exposing tokens in URLs, increasing risk of interception. The Authorization Code flow with PKCE is recommended for security.
        </code></pre>
    `
},
{
    "question": "How can you implement multi-tenancy in an OAuth2 system?",
    "answer": `
        <pre><code>Use tenant-specific scopes or include tenant information in the token claims (e.g., <code>tenant_id</code>). The authorization server issues tokens with tenant-specific claims, and resource servers enforce access control based on these claims.
        </code></pre>
    `
},
{
    "question": "What could cause an 'invalid_grant' error during token exchange, and how would you troubleshoot it?",
    "answer": `
        <pre><code>This error can occur due to expired authorization codes, mismatched redirect URIs, or PKCE mismatches. Troubleshoot by verifying redirect URIs, checking code validity, and confirming PKCE parameters.
        </code></pre>
    `
},
{
    "question": "How would you troubleshoot a situation where a client is receiving 'invalid_scope' errors?",
    "answer": `
        <pre><code>Verify that the requested scopes are valid and supported by the authorization server. Ensure that the client is registered with the required scopes and check scope syntax.
        </code></pre>
    `
},
{
    "question": "What could cause a '401 Unauthorized' error when accessing a protected resource with a valid access token?",
    "answer": `
        <pre><code>Possible causes include expired tokens, insufficient scopes, or misconfigured resource server. Verify token validity, inspect scopes, and check resource server configuration.
        </code></pre>
    `
},
{
    "question": "How would you troubleshoot an issue where the authorization server is returning an 'unsupported_grant_type' error?",
    "answer": `
        <pre><code>Check that the grant type is enabled and supported by the authorization server, verify the client configuration, and ensure the correct grant type parameter is included in the request.
        </code></pre>
    `
},
{
    "question": "If a client receives a 'redirect_uri_mismatch' error, what steps would you take to resolve it?",
    "answer": `
        <pre><code>Confirm that the redirect URI provided in the request matches one registered with the authorization server. Verify case sensitivity and URL encoding to ensure exact matches.
        </code></pre>
    `
}


    ],
"Logging": [
        {
    "question": "What are the primary purposes of logging in an application, and why is it important?",
    "answer": `
        <pre><code>Logging provides visibility into application behavior, aids in debugging, monitors performance, and helps with auditing and security. It is essential for tracking issues in production environments and ensuring system health.
        </code></pre>
    `
},
{
    "question": "Explain the main logging levels (e.g., DEBUG, INFO, WARN, ERROR) and when you would use each.",
    "answer": `
        <pre><code>
        - <code>DEBUG</code>: Detailed information for diagnosing issues during development.
        - <code>INFO</code>: General information on application progress or state.
        - <code>WARN</code>: Potentially harmful situations that do not cause immediate issues.
        - <code>ERROR</code>: Significant issues that might impact functionality but allow the application to continue.
        - <code>FATAL</code>: Critical errors that lead to the application shutdown (used in some logging frameworks).
        </code></pre>
    `
},
{
    "question": "What are some common Java logging frameworks, and how do they differ?",
    "answer": `
        <pre><code>
        - <code>java.util.logging (JUL)</code>: Built-in, simple API with basic features.
        - <code>Log4j</code>: Configurable, feature-rich, and flexible, but requires external setup.
        - <code>Logback</code>: Successor to Log4j, widely used with Spring Boot and supports SLF4J.
        - <code>SLF4J</code>: Facade for logging frameworks, allowing applications to switch implementations without changing code.
        </code></pre>
    `
},
{
    "question": "What is SLF4J, and why is it commonly used in Java applications?",
    "answer": `
        <pre><code>SLF4J (Simple Logging Facade for Java) is an abstraction layer for various logging frameworks. It decouples the logging implementation from the code, allowing easy switching between frameworks like Log4j, Logback, and JUL.
        </code></pre>
    `
},
{
    "question": "What is Logback, and why is it the default logging framework in Spring Boot?",
    "answer": `
        <pre><code>Logback is a modern, efficient logging framework with advanced features, configuration options, and high performance. It is lightweight and integrates well with SLF4J, making it the default choice for Spring Boot.
        </code></pre>
    `
},
{
    "question": "How does Spring Boot configure logging by default, and where can you customize it?",
    "answer": `
        <pre><code>Spring Boot uses Logback as the default logger and applies default settings. Customizations can be made in <code>application.properties</code>/<code>application.yml</code> or by adding a <code>logback-spring.xml</code> file in <code>src/main/resources</code>.
        </code></pre>
    `
},
{
    "question": "Explain how you can configure logging levels in Spring Boot using `application.properties`.",
    "answer": `
        <pre><code>Set logging levels in <code>application.properties</code> using <code>logging.level.&lt;package&gt;=&lt;level&gt;</code>, for example:
logging.level.com.example=DEBUG
logging.level.org.springframework=INFO
        </code></pre>
    `
},
{
    "question": "What is the purpose of `logback-spring.xml`, and how does it differ from `logback.xml` in a Spring Boot application?",
    "answer": `
        <pre><code><code>logback-spring.xml</code> allows Spring to parse and inject environment properties before loading Logback configurations, enabling use of <code>@Value</code> placeholders. <code>logback.xml</code> is the standard configuration file but doesn’t support Spring-specific features.
        </code></pre>
    `
},
{
    "question": "How would you configure a rolling file appender in Logback to manage log file size?",
    "answer": `
        <pre><code>Use <code>RollingFileAppender</code> with a <code>SizeBasedTriggeringPolicy</code> and <code>TimeBasedRollingPolicy</code>. Configure the <code>maxFileSize</code> and <code>maxHistory</code> parameters to control file size and retention.
<appender name="ROLLING_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <file>logs/app.log</file>
    <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
        <fileNamePattern>logs/app.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
        <maxFileSize>10MB</maxFileSize>
        <maxHistory>30</maxHistory>
    </rollingPolicy>
    <encoder>
        <pattern>%d{yyyy-MM-dd HH:mm:ss} - %msg%n</pattern>
    </encoder>
</appender>
        </code></pre>
    `
},
{
    "question": "How would you send logs to an external logging system like Elasticsearch or Graylog from a Spring Boot application?",
    "answer": `
        <pre><code>Use an appender that supports external logging systems, such as Logstash or Elasticsearch appender for Logback. Configure the appender in <code>logback-spring.xml</code> to direct log messages to the external logging system.
        </code></pre>
    `
},
{
    "question": "How do you log method execution time for performance monitoring in a Spring application?",
    "answer": `
        <pre><code>Use AOP with <code>@Around</code> advice to measure and log execution time. Capture the start and end time within <code>proceed()</code>, and log the difference.
@Around("@annotation(LogExecutionTime)")
public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
    long start = System.currentTimeMillis();
    Object proceed = joinPoint.proceed();
    long executionTime = System.currentTimeMillis() - start;
    logger.info("{} executed in {} ms", joinPoint.getSignature(), executionTime);
    return proceed;
}
        </code></pre>
    `
},
{
    "question": "What is MDC (Mapped Diagnostic Context) in logging, and how is it useful?",
    "answer": `
        <pre><code>MDC allows associating contextual information with log messages (e.g., user ID, transaction ID). This data is available throughout the thread’s execution and is helpful for tracing logs in multi-threaded environments.
        </code></pre>
    `
},
{
    "question": "How would you use MDC in a Spring Boot application to track a unique identifier across logs?",
    "answer": `
        <pre><code>Set an identifier in the MDC context at the start of the request (e.g., in a filter), log with it, and clear it afterward.
try {
    MDC.put("requestId", UUID.randomUUID().toString());
    // Proceed with the request
} finally {
    MDC.clear();
}
        </code></pre>
    `
},
{
    "question": "Explain the use of asynchronous logging and its impact on application performance.",
    "answer": `
        <pre><code>Asynchronous logging decouples log writing from the main thread, improving application performance by reducing the time spent on I/O operations. It can be configured in Logback using <code>AsyncAppender</code>.
        </code></pre>
    `
},
{
    "question": "How would you use conditional logging to log data only under certain conditions (e.g., specific environment)?",
    "answer": `
        <pre><code>Use Spring profiles or environment variables to configure logging levels conditionally. For example, use <code>@ConditionalOnProperty</code> on specific loggers or configure different log levels in <code>application-dev.properties</code>.
        </code></pre>
    `
},
{
    "question": "What are some best practices for logging sensitive data in an application?",
    "answer": `
        <pre><code>Avoid logging sensitive data (e.g., passwords, credit card numbers), use placeholder values instead, and consider encryption for sensitive information. Implement filtering in appenders or loggers to mask sensitive data.
        </code></pre>
    `
},
{
    "question": "Explain how structured logging works and why it is beneficial.",
    "answer": `
        <pre><code>Structured logging stores logs as structured data (e.g., JSON) with key-value pairs, enabling easier parsing and analysis by external systems. It enhances log searchability and allows for advanced querying.
        </code></pre>
    `
},
{
    "question": "Why is it important to avoid excessive logging at the DEBUG or TRACE level in production?",
    "answer": `
        <pre><code>Excessive DEBUG/TRACE logging generates large log volumes, increasing storage costs, impacting application performance, and potentially exposing sensitive data.
        </code></pre>
    `
},
{
    "question": "What are some effective strategies for managing log files in a high-traffic production environment?",
    "answer": `
        <pre><code>Use rolling files, log rotation, and retention policies. Implement centralized logging and leverage tools like ELK Stack for log aggregation and monitoring.
        </code></pre>
    `
},
{
    "question": "How can you prevent duplicate log messages when using both Spring and third-party libraries with their own logging frameworks?",
    "answer": `
        <pre><code>Ensure that all logging frameworks are routed through a single facade, like SLF4J, and configure logging levels appropriately to avoid redundant logging.
        </code></pre>
    `
},
{
    "question": "What impact does synchronous vs. asynchronous logging have on application performance?",
    "answer": `
        <pre><code>Synchronous logging can slow down the application due to I/O blocking, while asynchronous logging offloads log writing to separate threads, reducing response time but potentially losing logs in case of a crash.
        </code></pre>
    `
},
{
    "question": "How do you troubleshoot a situation where logging is not happening at the expected level in a Spring application?",
    "answer": `
        <pre><code>Check the logging level configuration, ensure the correct logger name, verify <code>logback-spring.xml</code> is loaded, and check for conflicting configurations in external libraries or property files.
        </code></pre>
    `
},
{
    "question": "What is a common reason for missing logs in a distributed system, and how can you address it?",
    "answer": `
        <pre><code>Missing logs often result from inconsistent log levels or lack of synchronization across distributed instances. Use centralized logging with a consistent configuration and MDC for traceability.
        </code></pre>
    `
},
{
    "question": "How would you minimize the performance impact of logging in a highly concurrent application?",
    "answer": `
        <pre><code>Use asynchronous logging, structured logging, set appropriate logging levels, and avoid extensive logging in critical or frequently executed methods.
        </code></pre>
    `
},
{
    "question": "Explain the performance implications of using complex logging expressions and string concatenation in logs.",
    "answer": `
        <pre><code>Complex expressions and concatenations increase CPU and memory usage. Use parameterized logging (e.g., <code>logger.debug("Value: {}", value)</code>) instead of string concatenation to avoid unnecessary computation.
        </code></pre>
    `
},
{
    "question": "How can you implement a custom logging appender in Logback?",
    "answer": `
        <pre><code>Extend <code>AppenderBase&lt;E&gt;</code> and override the <code>append</code> method to define custom logging behavior, then add the custom appender to <code>logback-spring.xml</code>.
public class CustomAppender extends AppenderBase&lt;ILoggingEvent&gt; {
    @Override
    protected void append(ILoggingEvent event) {
        // Custom logging logic
    }
}
        </code></pre>
    `
},
{
    "question": "How would you create a custom log format to include additional metadata (e.g., IP address, session ID)?",
    "answer": `
        <pre><code>Customize the Logback pattern in <code>logback-spring.xml</code> to include MDC values or other metadata:
&lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [%thread] %mdc{sessionId} %-5level %logger{36} - %msg%n&lt;/pattern&gt;
        </code></pre>
    `
},
{
    "question": "Explain how you would implement conditional logging based on a custom annotation in a Spring application.",
    "answer": `
        <pre><code>Use AOP to create <code>@Around</code> advice that checks for a custom annotation on methods. Log only if the annotation is present and matches specific conditions.
        </code></pre>
    `
},
{
    "question": "How would you implement rate-limited logging to avoid flooding logs in certain scenarios?",
    "answer": `
        <pre><code>Implement rate-limiting logic by tracking log occurrences in memory or using an external service. Log only when certain thresholds are met, throttling repetitive log messages.
        </code></pre>
    `
},
{
    "question": "How can you create separate log files for different logging levels (e.g., ERROR logs go to a different file) in Logback?",
    "answer": `
        <pre><code>Define separate appenders in <code>logback-spring.xml</code> for different log levels and configure them with specific <code>ThresholdFilter</code> settings.
&lt;appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender"&gt;
    &lt;file&gt;logs/error.log&lt;/file&gt;
    &lt;filter class="ch.qos.logback.classic.filter.ThresholdFilter"&gt;
        &lt;level&gt;ERROR&lt;/level&gt;
    &lt;/filter&gt;
    &lt;encoder&gt;
        &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} - %msg%n&lt;/pattern&gt;
    &lt;/encoder&gt;
&lt;/appender&gt;
        </code></pre>
    `
},
{
    "question": "How would you test log output in a unit test?",
    "answer": `
        <pre><code>Use <code>Appender</code> mocking with a logging framework to capture log output, verify log messages, or assert that specific logs were triggered.
        </code></pre>
    `
},
{
    "question": "Explain how to use `Logback-test.xml` to configure logging differently in test environments.",
    "answer": `
        <pre><code>Create <code>logback-test.xml</code> in <code>src/test/resources</code> for test-specific configurations. Logback automatically prioritizes this file over <code>logback.xml</code> in test classes.
        </code></pre>
    `
},
{
    "question": "How do you mock logging calls using SLF4J in a unit test?",
    "answer": `
        <pre><code>Use a mock appender or frameworks like <code>Mockito</code> to verify interactions with the logger, such as <code>verify(logger).info(...)</code>.
        </code></pre>
    `
},
{
    "question": "What is the purpose of `InMemoryAppender` in testing log output, and how is it used?",
    "answer": `
        <pre><code><code>InMemoryAppender</code> captures log events in memory for testing purposes, enabling assertions on log content without affecting external log files.
        </code></pre>
    `
},
{
    "question": "How would you simulate a logging error (e.g., failed file write) to test error handling logic in logging?",
    "answer": `
        <pre><code>Inject a mock <code>Appender</code> that throws an exception on <code>append()</code> or configure the logging framework to use a non-writable file path in a test scenario.
        </code></pre>
    `
},
{
    "question": "What steps would you take if your application is logging at an unexpected level?",
    "answer": `
        <pre><code>Check for conflicting logging level configurations, verify external library configurations, and confirm that the correct configuration file (e.g., <code>logback-spring.xml</code>) is loaded.
        </code></pre>
    `
},
{
    "question": "How would you troubleshoot missing logs in a distributed Spring Boot application?",
    "answer": `
        <pre><code>Check the logging configuration consistency across instances, ensure centralized logging, and verify that unique identifiers (MDC) are consistently propagated.
        </code></pre>
    `
},
{
    "question": "What could cause `NullPointerException` when logging with SLF4J, and how would you resolve it?",
    "answer": `
        <pre><code>Passing <code>null</code> to a logging statement can cause <code>NullPointerException</code> if not handled properly. Use parameterized logging (e.g., <code>logger.info("Value: {}", value)</code>) to avoid issues.
        </code></pre>
    `
},
{
    "question": "How do you diagnose issues with asynchronous logging (e.g., missing or delayed logs)?",
    "answer": `
        <pre><code>Check the async queue capacity, thread pool configuration, and log overflow handling. Review the buffer size and make adjustments to handle high load.
        </code></pre>
    `
},
{
    "question": "What could cause a logging configuration file (e.g., `logback.xml`) to not load correctly, and how would you troubleshoot it?",
    "answer": `
        <pre><code>Potential causes include incorrect file location, naming errors, conflicting configurations, or missing <code>@EnableAutoConfiguration</code>. Ensure the file is in the correct <code>resources</code> folder and confirm Spring Boot is not overriding the configuration.
        </code></pre>
    `
}


    ],
"Aspects": [
      {
    "question": "What is Aspect-Oriented Programming (AOP), and how is it useful in Spring?",
    "answer": `
        <pre><code>AOP is a programming paradigm that allows separation of cross-cutting concerns, such as logging, security, and transaction management, from core business logic. Spring AOP enables declarative application of these concerns across the codebase without modifying core logic, improving modularity and maintainability.
        </code></pre>
    `
},
{
    "question": "Explain the key concepts of AOP: Aspect, Join Point, Advice, Pointcut, and Weaving.",
    "answer": `
        <pre><code>
- **Aspect**: A module encapsulating a cross-cutting concern.
- **Join Point**: A specific point in the execution of the application (e.g., method execution).
- **Advice**: Action taken at a join point (e.g., <code>@Before</code>, <code>@After</code>).
- **Pointcut**: Expression that selects specific join points.
- **Weaving**: The process of linking aspects with other application objects at specified join points.
        </code></pre>
    `
},
{
    "question": "What is `@EnableAspectJAutoProxy`, and why is it used in Spring?",
    "answer": `
        <pre><code><code>@EnableAspectJAutoProxy</code> enables support for processing <code>@Aspect</code> annotations, allowing Spring to create proxies and apply aspects to beans in the application context.
        </code></pre>
    `
},
{
    "question": "Explain the different types of advice in Spring AOP.",
    "answer": `
        <pre><code>
- **@Before**: Executes before the join point.
- **@After**: Executes after the join point, regardless of the outcome.
- **@AfterReturning**: Executes after the join point if it returns normally.
- **@AfterThrowing**: Executes if the join point throws an exception.
- **@Around**: Wraps the join point, allowing custom behavior before and after.
        </code></pre>
    `
},
{
    "question": "What are the limitations of Spring AOP compared to full AspectJ?",
    "answer": `
        <pre><code>Spring AOP only supports method-level aspects for Spring-managed beans and relies on proxies, whereas AspectJ provides compile-time, load-time, and runtime weaving, supporting field access, constructor execution, and more granular control.
        </code></pre>
    `
},
{
    "question": "How do you define a pointcut expression in Spring AOP?",
    "answer": `
        <pre><code>Define pointcut expressions using AspectJ syntax, specifying the scope of matching join points, such as execution patterns (<code>execution(* com.example.service.*.*(..))</code>) or bean annotations.
        </code></pre>
    `
},
{
    "question": "What is the purpose of the `execution` keyword in pointcut expressions?",
    "answer": `
        <pre><code>The <code>execution</code> keyword is used to match method execution join points based on method signature patterns, allowing fine-grained control over which methods are advised.
        </code></pre>
    `
},
{
    "question": "Explain how you would write a pointcut expression to intercept all methods in a specific package.",
    "answer": `
        <pre><code>Use <code>execution(* com.example.package..*.*(..))</code>, which matches all methods within <code>com.example.package</code> and any subpackages.
        </code></pre>
    `
},
{
    "question": "How do you create a pointcut expression to match only public methods with `@Transactional` annotation?",
    "answer": `
        <pre><code>Use <code>@annotation(org.springframework.transaction.annotation.Transactional) && execution(public * *(..))</code>.
        </code></pre>
    `
},
{
    "question": "What is the purpose of `within` in pointcut expressions, and how does it differ from `execution`?",
    "answer": `
        <pre><code><code>within</code> matches join points within certain types (e.g., classes or packages), while <code>execution</code> matches specific method signatures. For example, <code>within(com.example.service..*)</code> targets all methods in a package, while <code>execution(* com.example.service.*.*(..))</code> allows specifying method-level details.
        </code></pre>
    `
},
{
    "question": "How does `@Around` advice differ from `@Before` and `@After` in terms of functionality?",
    "answer": `
        <pre><code><code>@Around</code> advice allows complete control around the join point, enabling custom behavior before, after, and even bypassing the join point. <code>@Before</code> and <code>@After</code> are limited to pre- and post-execution, respectively.
        </code></pre>
    `
},
{
    "question": "How would you modify the method’s return value in `@Around` advice?",
    "answer": `
        <pre><code>Capture the return value by calling <code>proceed()</code> on <code>ProceedingJoinPoint</code>, modify it as needed, and return the modified value.
        </code></pre>
    `
},
{
    "question": "What is the purpose of `ProceedingJoinPoint` in `@Around` advice, and how do you use it?",
    "answer": `
        <pre><code><code>ProceedingJoinPoint</code> allows control over method execution, letting you proceed with the original method, modify arguments, capture the return value, or even skip execution.
        </code></pre>
    `
},
{
    "question": "Explain how you can use `@AfterReturning` advice to access the return value of a method.",
    "answer": `
        <pre><code>Use <code>@AfterReturning(pointcut = "pointcutExpression", returning = "result")</code>, where <code>result</code> is the return value of the advised method, allowing it to be accessed and modified.
        </code></pre>
    `
},
{
    "question": "How can you capture method arguments in `@Before` advice?",
    "answer": `
        <pre><code>Use <code>@Before("pointcutExpression(param)")</code> and add parameters to the advice method to capture argument values, where <code>param</code> matches the pointcut parameter.
        </code></pre>
    `
},
{
        "question": "What is a proxy in Spring AOP, and what role does it play?",
        "answer": "A proxy is an intermediate object that controls access to the target object, handling the invocation of advised methods. Spring AOP uses proxies (either JDK dynamic or CGLIB) to weave advice into beans."
    },
    {
        "question": "What is the difference between JDK dynamic proxies and CGLIB proxies in Spring AOP?",
        "answer": "<ul><li><strong>JDK Dynamic Proxies</strong>: Require interfaces and proxy interface methods only.</li><li><strong>CGLIB Proxies</strong>: Use subclassing to proxy classes without requiring interfaces, often used when no interface is available.</li></ul>"
    },
    {
        "question": "How does Spring decide between JDK and CGLIB proxies?",
        "answer": "Spring uses JDK proxies by default if a bean implements interfaces. If no interface is available, Spring falls back to CGLIB. You can force CGLIB with <code>@EnableAspectJAutoProxy(proxyTargetClass = true)</code>."
    },
    {
        "question": "What is self-invocation in Spring AOP, and why does it cause issues with proxies?",
        "answer": "Self-invocation occurs when a bean method calls another advised method on the same bean. Since the call bypasses the proxy, the advice is not applied. Solutions include using <code>ApplicationContext</code> to get a proxy reference."
    },
    {
        "question": "How does Spring AOP handle multiple advices on the same method?",
        "answer": "Spring AOP applies multiple advices based on precedence, with <code>@Order</code> controlling execution order. Lower-order values have higher priority, running before higher-order advice."
    },
    {
        "question": "What are some performance considerations when using AOP in Spring?",
        "answer": "Excessive or complex pointcuts and <code>@Around</code> advice can slow down method execution. Limiting advice to necessary join points, using coarse-grained pointcuts, and avoiding unnecessary <code>@Around</code> advice can improve performance."
    },
    {
        "question": "Why might you encounter a Proxy class cast exception when using AOP?",
        "answer": "This occurs if a CGLIB proxy is used but cast to an interface type or if a JDK proxy is cast to a concrete class type. Ensuring correct proxy type configuration or avoiding casting proxies can prevent this."
    },
    {
        "question": "Explain why Spring AOP does not support field-level interception.",
        "answer": "Spring AOP is proxy-based and operates at the method level. Field-level interception requires bytecode manipulation, which is supported by full AspectJ, not Spring AOP."
    },
    {
        "question": "What are some common use cases where AOP is a better choice than traditional programming?",
        "answer": "AOP is ideal for cross-cutting concerns such as logging, security, transaction management, auditing, and caching, where concerns affect multiple parts of the application."
    },
    {
        "question": "How would you debug an issue where an AOP advice is not being applied?",
        "answer": "Check for: correct pointcut expression, <code>@EnableAspectJAutoProxy</code> annotation, proper advice order with <code>@Order</code>, Spring-managed bean (only Spring beans are proxied), and avoid self-invocation for advised methods."
    },
    {
        "question": "How would you create a custom annotation to apply an aspect conditionally?",
        "answer": "Define a custom annotation, create a pointcut using <code>@annotation(CustomAnnotation)</code>, and apply advice based on the annotation’s presence."
    },
    {
        "question": "What is `@Aspect` in Spring AOP, and how does it differ from defining a regular Spring bean?",
        "answer": "<code>@Aspect</code> marks a class as an aspect with AOP advice methods. Unlike a regular bean, it is processed by Spring AOP to apply cross-cutting concerns to targeted join points."
    },
    {
        "question": "Explain how `@Around` advice can be used to measure the execution time of methods annotated with a custom annotation.",
        "answer": "Define a custom annotation (e.g., <code>@Timed</code>) and an <code>@Around</code> advice with <code>@annotation(Timed)</code>. Use <code>System.nanoTime()</code> or similar to measure and log the execution time around <code>proceed()</code>."
    },
    {
        "question": "How would you restrict an advice to only specific arguments of a method using AOP?",
        "answer": "Use pointcut expressions with arguments, such as <code>@Before(\"execution(* com.example..*(String)) && args(specificArg)\")</code>, to apply advice only when specific arguments are passed."
    },
    {
        "question": "How would you dynamically control whether an aspect should be applied based on application properties?",
        "answer": "Use conditional pointcuts or include conditional checks within advice methods. You can also use <code>@ConditionalOnProperty</code> in the aspect configuration to enable or disable the aspect based on properties."
    },
    {
        "question": "How does AOP help in managing transactions in a Spring application?",
        "answer": "Spring’s <code>@Transactional</code> annotation leverages AOP to wrap methods in a transaction boundary. AOP ensures that the transaction starts before method execution and commits or rolls back based on the outcome."
    },
    {
        "question": "What are some common pitfalls of using `@Transactional` with self-invocation and Spring AOP?",
        "answer": "Self-invocation bypasses the proxy, meaning <code>@Transactional</code> methods called from within the same bean won’t be advised. Solutions include refactoring or injecting a self-proxy via <code>ApplicationContext</code>."
    },
    {
        "question": "How can you create an aspect to manage caching in a Spring application?",
        "answer": "Define an aspect with <code>@Around</code> advice that checks a cache for a stored result before invoking the method. If a result is cached, return it directly; otherwise, proceed and store the result in the cache."
    },
    {
        "question": "Explain how to use an aspect to handle auditing across all methods in a package.",
        "answer": "Define a pointcut targeting all methods in the package (e.g., <code>execution(* com.example.package..*.*(..))</code>) and add <code>@Before</code> or <code>@After</code> advice for audit logging."
    },
    {
        "question": "How would you manage retries with AOP for methods that may fail intermittently?",
        "answer": "Use <code>@Around</code> advice to wrap the method with retry logic. Catch exceptions and retry a set number of times before allowing the exception to propagate."
    },
    {
        "question": "How do you test an aspect in isolation without invoking the entire application context?",
        "answer": "Use <code>@SpringJUnitConfig</code> with a limited context, or mock the join point methods. Alternatively, apply the aspect directly in a test configuration."
    },
    {
        "question": "Explain how to use `Mockito` to verify that an aspect is applied to a method.",
        "answer": "Mock the aspect and use <code>Mockito.verify</code> to confirm the advice was triggered when the target method is called. Alternatively, use a spy to observe behavior within advice."
    },
    {
        "question": "How would you mock `ProceedingJoinPoint` in a unit test for `@Around` advice?",
        "answer": "Use Mockito to mock <code>ProceedingJoinPoint</code>, then configure it to return a specific result or throw an exception to simulate different scenarios in the advice."
    },
    {
        "question": "Explain how to validate that certain arguments are passed to an advice method in a test.",
        "answer": "Use <code>ArgumentCaptor</code> with Mockito to capture the arguments passed to the advice method and verify them."
    },
    {
        "question": "How can you test an aspect that requires access to application properties?",
        "answer": "Inject the application properties into the aspect through <code>@Value</code> or <code>@Autowired</code>, and mock or set them in the test context to control aspect behavior based on the properties."
    }
  
    ],
"JdbcTemplate": [
        {
    "question": "What is `JdbcTemplate`, and what are its primary benefits in Spring?",
    "answer": "`JdbcTemplate` is a Spring utility for simplifying database interactions by reducing boilerplate code, such as managing connections and handling exceptions. It provides a higher-level abstraction over plain JDBC, offering methods for querying, updating, and batch processing."
},
{
    "question": "How do you configure `JdbcTemplate` in a Spring application?",
    "answer": "Define a `DataSource` bean, then inject it into `JdbcTemplate` either directly in the configuration or through Spring Boot’s auto-configuration by adding the required database properties to `application.properties`."
},
{
    "question": "What is the role of `DataSource` in `JdbcTemplate`, and how does it improve database interactions?",
    "answer": "`DataSource` manages database connections, often using connection pooling for efficient resource management. `JdbcTemplate` relies on `DataSource` to provide and manage connections for executing SQL queries."
},
{
    "question": "What are some common `JdbcTemplate` methods for querying and updating data?",
    "answer": "<ul><li><strong>queryForObject</strong>: Executes a query that returns a single row and maps it to an object.</li><li><strong>query</strong>: Executes a query that returns multiple rows, mapping each to an object.</li><li><strong>update</strong>: Executes a DML statement (e.g., INSERT, UPDATE, DELETE).</li><li><strong>batchUpdate</strong>: Executes batch updates for multiple SQL statements in a single operation.</li></ul>"
},
{
    "question": "How do you handle SQL query results in `JdbcTemplate` using row mappers?",
    "answer": "Implement `RowMapper` to map each row of the result set to an object. For example, using `new RowMapper<Person>() { ... }` or a lambda function to convert result set data to domain objects."
},
{
    "question": "What is `ResultSetExtractor`, and how is it different from `RowMapper`?",
    "answer": "`ResultSetExtractor` processes the entire `ResultSet` at once, allowing custom logic on the entire result set, while `RowMapper` maps each row individually. Use `ResultSetExtractor` for more complex queries that don’t map directly to single objects."
},
{
    "question": "What is `BeanPropertyRowMapper`, and when should you use it?",
    "answer": "`BeanPropertyRowMapper` automatically maps columns in the result set to fields in a Java bean by matching column names to property names. Use it for simple mappings where column and field names match."
},
{
    "question": "How can you handle stored procedures with `JdbcTemplate`?",
    "answer": "Use `SimpleJdbcCall`, which provides a more convenient way to call stored procedures. Define the procedure name, parameters, and output mappings within `SimpleJdbcCall`."
},
{
    "question": "Explain how you would retrieve generated keys (e.g., auto-incremented IDs) after an insert operation with `JdbcTemplate`.",
    "answer": "Use `GeneratedKeyHolder` with `JdbcTemplate`’s `update` method to capture generated keys.<pre><code>KeyHolder keyHolder = new GeneratedKeyHolder();\njdbcTemplate.update(connection -> {\n    PreparedStatement ps = connection.prepareStatement(\"INSERT INTO table (column) VALUES (?)\", new String[] {\"id\"});\n    ps.setString(1, \"value\");\n    return ps;\n}, keyHolder);\nLong newId = keyHolder.getKey().longValue();</code></pre>"
},
{
    "question": "How would you perform a batch insert operation with `JdbcTemplate`?",
    "answer": "Use `batchUpdate` with a `List<Object[]>` for batch inserts. Each `Object[]` represents a set of parameters for one insert statement.<pre><code>List<Object[]> batchArgs = Arrays.asList(\n    new Object[]{\"value1\", \"value2\"},\n    new Object[]{\"value3\", \"value4\"}\n);\njdbcTemplate.batchUpdate(\"INSERT INTO table (col1, col2) VALUES (?, ?)\", batchArgs);</code></pre>"
},
{
    "question": "How does `JdbcTemplate` handle SQL exceptions, and what type of exception does it throw?",
    "answer": "`JdbcTemplate` translates SQL exceptions into Spring’s `DataAccessException` hierarchy, allowing for consistent handling of database errors across different databases."
},
{
    "question": "Explain how you would implement transaction management with `JdbcTemplate`.",
    "answer": "Use `@Transactional` at the service layer to ensure that multiple `JdbcTemplate` operations execute within a single transaction. Spring manages the transaction boundaries, committing or rolling back as needed."
},
{
    "question": "How would you handle custom exception mapping for `JdbcTemplate` errors?",
    "answer": "Use `SQLExceptionTranslator` to define custom mappings of SQL error codes to custom exceptions, allowing finer-grained control over error handling."
},
{
    "question": "What is `TransactionTemplate`, and how does it work with `JdbcTemplate`?",
    "answer": "`TransactionTemplate` provides programmatic transaction management, useful when you need explicit control over transactions. Wrap `JdbcTemplate` operations in `TransactionTemplate`’s `execute` method to start and manage transactions manually."
},
{
    "question": "How would you log SQL queries executed by `JdbcTemplate`?",
    "answer": "Enable SQL logging by setting `logging.level.org.springframework.jdbc.core=DEBUG` in `application.properties`. Alternatively, use loggers or interceptors for more control over query logging."
},
{
    "question": "How does `JdbcTemplate` prevent SQL injection attacks?",
    "answer": "`JdbcTemplate` uses prepared statements by default for parameterized queries, separating SQL from parameters, which prevents SQL injection by treating parameters as data rather than executable SQL code."
},
{
    "question": "How do you pass a `List` as a parameter to an `IN` clause with `JdbcTemplate`?",
    "answer": "Use `NamedParameterJdbcTemplate` with a `MapSqlParameterSource` to pass a list of parameters to an `IN` clause.<pre><code>NamedParameterJdbcTemplate namedTemplate = new NamedParameterJdbcTemplate(jdbcTemplate.getDataSource());\nMapSqlParameterSource parameters = new MapSqlParameterSource(\"ids\", Arrays.asList(1, 2, 3));\nnamedTemplate.query(\"SELECT * FROM table WHERE id IN (:ids)\", parameters, rowMapper);</code></pre>"
},
{
    "question": "What is the difference between `JdbcTemplate` and `NamedParameterJdbcTemplate`?",
    "answer": "`NamedParameterJdbcTemplate` allows using named parameters (e.g., `:name`) instead of positional parameters (`?`), making queries more readable, especially for complex queries with multiple parameters."
},
{
    "question": "How would you execute a complex SQL query with optional filters using `JdbcTemplate`?",
    "answer": "Use `StringBuilder` to construct a dynamic query based on conditions and populate parameters as needed. Alternatively, use `NamedParameterJdbcTemplate` for better readability."
},
{
    "question": "How does `JdbcTemplate` handle null parameters in queries?",
    "answer": "`JdbcTemplate` treats null parameters as expected, allowing them in prepared statements without issues. For `NamedParameterJdbcTemplate`, set nulls explicitly in `MapSqlParameterSource`."
},
{
    "question": "Explain how you would map query results to a custom object with nested properties using `JdbcTemplate`.",
    "answer": "Use a `RowMapper` to fetch each row and map nested properties manually. Alternatively, perform a join query and map nested results with custom logic or nested mappers."
},
{
    "question": "How would you handle a query that returns a large number of rows with `JdbcTemplate`?",
    "answer": "Use a `RowCallbackHandler` to process rows one at a time, reducing memory usage by avoiding loading the entire result set into memory."
},
{
    "question": "What is `ColumnMapRowMapper`, and when would you use it?",
    "answer": "`ColumnMapRowMapper` maps each row to a `Map<String, Object>`, where keys are column names. It’s useful for dynamic queries where you may not know the result columns in advance."
},
{
    "question": "How would you map a result set to a hierarchical structure (e.g., parent-child) with `JdbcTemplate`?",
    "answer": "Use a `ResultSetExtractor` to iterate through the `ResultSet`, building the hierarchical structure as you encounter parent and child rows."
},
{
    "question": "What is the difference between `queryForObject` and `queryForList` in `JdbcTemplate`?",
    "answer": "<ul><li><strong>queryForObject</strong>: Fetches a single object from the database, expecting exactly one row.</li><li><strong>queryForList</strong>: Returns multiple rows as a list, each row mapped as a map of column names to values.</li></ul>"
},
{
    "question": "How does `JdbcTemplate` handle connection pooling, and why is it important?",
    "answer": "`JdbcTemplate` uses the `DataSource` for connection management, which typically supports connection pooling. Pooling improves performance by reusing connections rather than opening a new connection for each operation."
},
{
    "question": "How would you optimize batch processing with `JdbcTemplate`?",
    "answer": "Use `batchUpdate` with a `PreparedStatement` and parameter arrays. Tune the batch size and configure `DataSource` settings for efficient batch processing."
},
{
    "question": "What are some best practices for handling large data sets with `JdbcTemplate`?",
    "answer": "Use `RowCallbackHandler` for processing data row-by-row, `ResultSetExtractor` for custom extraction logic, and apply pagination or limit queries to handle data in chunks."
},
{
    "question": "How do you handle concurrent updates with `JdbcTemplate`?",
    "answer": "Use transactions with isolation levels like `REPEATABLE_READ` or `SERIALIZABLE` to handle concurrency issues, or use optimistic locking with a version column."
},
{
    "question": "Explain how to set the fetch size in `JdbcTemplate` and why it is useful.",
    "answer": "Use `Statement` or `PreparedStatement` to set the fetch size, which controls the number of rows fetched per round-trip to the database, improving performance for large result sets."
},
{
    "question": "How do you test `JdbcTemplate` queries without a real database?",
    "answer": "Use a mock `DataSource` or `MockJdbcTemplate` with `Mockito` to stub database calls. Alternatively, use an embedded database like H2 for lightweight in-memory testing."
},
{
    "question": "How would you verify SQL queries executed by `JdbcTemplate` in a test?",
    "answer": "Use `ArgumentCaptor` with `Mockito` to capture the SQL queries and verify their content and parameters in tests."
},
{
    "question": "Explain how you would mock `JdbcTemplate` using `@MockBean` in a Spring Boot test.",
    "answer": "Use `@MockBean` on `JdbcTemplate` in a Spring Boot test and mock its behavior using `Mockito` to control query results and behavior without hitting a real database."
},
{
    "question": "What is `SimpleJdbcTestUtils`, and how does it help in testing `JdbcTemplate`?",
    "answer": "`SimpleJdbcTestUtils` provides helper methods for testing with `JdbcTemplate`, such as counting rows in a table or verifying SQL updates, simplifying testing without writing boilerplate code."
},
{
    "question": "How would you verify the number of rows updated by a `JdbcTemplate` method in a test?",
    "answer": "Capture the return value of the `update` method, which returns the number of rows affected. Alternatively, verify with `SimpleJdbcTestUtils.countRowsInTable` after the operation."
},
{
    "question": "How would you handle null results when using `queryForObject` with `JdbcTemplate`?",
    "answer": "Wrap `queryForObject` in a try-catch block to handle `EmptyResultDataAccessException`, or check for the presence of rows with `query` if null values are possible."
},
{
    "question": "What is `EmptyResultDataAccessException`, and how do you handle it?",
    "answer": "`EmptyResultDataAccessException` is thrown when `queryForObject` expects a single row, but none are returned. Handle it by catching the exception and returning a default value or performing alternative logic."
},
{
    "question": "Explain how to handle SQL syntax errors in `JdbcTemplate`.",
    "answer": "Catch `DataAccessException`, log the error details, and use `SQLExceptionTranslator` for database-specific error handling if needed."
},
{
    "question": "How does `JdbcTemplate` handle parameterized queries differently across databases?",
    "answer": "`JdbcTemplate` abstracts database-specific syntax by using prepared statements and standardized parameter handling, making it database-agnostic for parameterized queries."
},
{
    "question": "Explain how you would roll back a failed batch operation with `JdbcTemplate`.",
    "answer": "Use `@Transactional` on the batch method to ensure atomicity. If an exception occurs, Spring rolls back the transaction, canceling all executed updates in the batch."
}


    ],
"RestTemplate": [
        
    {
        "question": "What is `RestTemplate`, and what is its primary purpose in Spring?",
        "answer": "`RestTemplate` is a synchronous client in Spring that simplifies HTTP communication by providing high-level methods for sending HTTP requests and receiving responses, abstracting away boilerplate code for working with RESTful services."
    },
    {
        "question": "How do you create and configure a basic `RestTemplate` instance in Spring?",
        "answer": "You can create a `RestTemplate` using the `new RestTemplate()` constructor or configure it as a Spring bean using `@Bean` in a configuration class. Additional configurations (e.g., interceptors, custom message converters) can be added through the `RestTemplate` constructor or setters."
    },
    {
        "question": "What are some common methods provided by `RestTemplate`, and what do they do?",
        "answer": "<ul><li><strong>getForObject</strong>: Executes an HTTP GET request and converts the response body into an object.</li><li><strong>postForObject</strong>: Executes an HTTP POST request and returns the response body as an object.</li><li><strong>put</strong>: Sends an HTTP PUT request without expecting a response.</li><li><strong>delete</strong>: Sends an HTTP DELETE request.</li><li><strong>exchange</strong>: Allows for full control over the HTTP request, including headers and HTTP method.</li></ul>"
    },
    {
        "question": "What is the `exchange` method in `RestTemplate`, and when would you use it?",
        "answer": "`exchange` allows making HTTP requests with custom configurations (headers, body, HTTP method) and offers control over request and response types. Use it when you need a specific configuration that is not covered by simpler `getForObject`, `postForObject`, etc., methods."
    },
    {
        "question": "How can you set custom headers in a `RestTemplate` request?",
        "answer": "<pre><code>HttpHeaders headers = new HttpHeaders();\nheaders.set(\"Authorization\", \"Bearer token\");\nHttpEntity<String> entity = new HttpEntity<>(null, headers);\nResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);</code></pre>"
    },
    {
        "question": "How would you configure a `RestTemplate` to handle different media types (e.g., JSON, XML)?",
        "answer": "`RestTemplate` uses `HttpMessageConverters` to handle different media types. Add custom converters (e.g., `MappingJackson2HttpMessageConverter` for JSON, `Jaxb2RootElementHttpMessageConverter` for XML) to the `RestTemplate` to support specific formats."
    },
    {
        "question": "How do you set a timeout on a `RestTemplate` request?",
        "answer": "<pre><code>HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();\nrequestFactory.setConnectTimeout(5000);\nrequestFactory.setReadTimeout(5000);\nRestTemplate restTemplate = new RestTemplate(requestFactory);</code></pre>"
    },
    {
        "question": "How would you configure basic authentication in a `RestTemplate` request?",
        "answer": "<pre><code>HttpHeaders headers = new HttpHeaders();\nString auth = \"username:password\";\nbyte[] encodedAuth = Base64.getEncoder().encode(auth.getBytes(StandardCharsets.UTF_8));\nString authHeader = \"Basic \" + new String(encodedAuth);\nheaders.set(\"Authorization\", authHeader);</code></pre>"
    },
    {
        "question": "How can you enable HTTPS with `RestTemplate`?",
        "answer": "<pre><code>SSLContext sslContext = SSLContexts.custom().loadTrustMaterial(new TrustSelfSignedStrategy()).build();\nHttpClient client = HttpClients.custom().setSSLContext(sslContext).build();\nRestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory(client));</code></pre>"
    },
    {
        "question": "How does `RestTemplate` handle HTTP errors (e.g., 404 or 500 status codes) by default?",
        "answer": "`RestTemplate` throws `HttpClientErrorException` for client errors (4xx) and `HttpServerErrorException` for server errors (5xx). The exceptions contain details about the status code, headers, and response body."
    },
    {
        "question": "How would you customize error handling in `RestTemplate`?",
        "answer": "<pre><code>restTemplate.setErrorHandler(new ResponseErrorHandler() {\n    @Override\n    public boolean hasError(ClientHttpResponse response) {\n        return response.getStatusCode().isError();\n    }\n\n    @Override\n    public void handleError(ClientHttpResponse response) {\n        // Custom error handling logic\n    }\n});</code></pre>"
    },
    {
        "question": "What is a `ClientHttpRequestInterceptor`, and how would you use it with `RestTemplate`?",
        "answer": "<pre><code>restTemplate.getInterceptors().add((request, body, execution) -> {\n    // Modify request\n    ClientHttpResponse response = execution.execute(request, body);\n    // Process response\n    return response;\n});</code></pre>"
    },
    {
        "question": "How do you log requests and responses with `RestTemplate`?",
        "answer": "<pre><code>restTemplate.getInterceptors().add((request, body, execution) -> {\n    System.out.println(\"Request: \" + request.getURI());\n    System.out.println(\"Headers: \" + request.getHeaders());\n    ClientHttpResponse response = execution.execute(request, body);\n    System.out.println(\"Response Status: \" + response.getStatusCode());\n    return response;\n});</code></pre>"
    },
    {
        "question": "How would you retry failed `RestTemplate` requests?",
        "answer": "Implement retry logic in a `ClientHttpRequestInterceptor` or wrap `RestTemplate` calls with a retry library (e.g., Resilience4j) to handle retries for transient errors."
    },
    {
        "question": "Is `RestTemplate` thread-safe, and can it be reused across multiple threads?",
        "answer": "Yes, `RestTemplate` is thread-safe as long as it’s configured properly. You can share a single instance across multiple threads, but avoid using stateful customizations within a request."
    },
    {
        "question": "How would you handle high-latency requests with `RestTemplate`?",
        "answer": "Use timeouts, configure connection pooling, and implement retry mechanisms. Consider switching to `WebClient` if reactive processing is required."
    },
    {
        "question": "How would you configure a connection pool for `RestTemplate`?",
        "answer": "<pre><code>PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager();\nconnectionManager.setMaxTotal(50);\nconnectionManager.setDefaultMaxPerRoute(20);\nCloseableHttpClient httpClient = HttpClients.custom().setConnectionManager(connectionManager).build();\nrestTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory(httpClient));</code></pre>"
    },
    {
        "question": "How would you implement asynchronous HTTP calls with `RestTemplate`?",
        "answer": "`RestTemplate` itself does not support asynchronous calls. Use `AsyncRestTemplate` (now deprecated) or switch to `WebClient` for asynchronous HTTP requests."
    },
    {
        "question": "How would you mock `RestTemplate` in a Spring Boot test?",
        "answer": "<pre><code>@MockBean\nprivate RestTemplate restTemplate;\n\nwhen(restTemplate.getForObject(anyString(), eq(String.class)))\n    .thenReturn(\"Mock response\");</code></pre>"
    },
    {
        "question": "Explain how you would test `RestTemplate` calls without hitting a live server.",
        "answer": "Use MockWebServer (from OkHttp) to mock a server that can respond to `RestTemplate` calls without hitting an external server. Configure it with expected responses for testing."
    },
 {
            "question": "How would you handle OAuth2 authentication with `RestTemplate`?",
            "answer": "Manually add an `Authorization` header with the bearer token, or use `RestTemplate` in combination with `OAuth2RestTemplate` (deprecated) or `RestTemplateBuilder` with OAuth support."
        },
        {
            "question": "How would you configure `RestTemplate` to use client certificates for mutual TLS (mTLS)?",
            "answer": "<pre><code>SSLContext sslContext = SSLContextBuilder.create()\n    .loadKeyMaterial(clientStore, \"client-password\".toCharArray())\n    .build();\nHttpClient client = HttpClients.custom().setSSLContext(sslContext).build();\nRestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory(client));</code></pre>"
        },
        {
            "question": "What happens if you try to deserialize a response with a different data structure using `RestTemplate`?",
            "answer": "`RestTemplate` throws `HttpMessageNotReadableException` if the response cannot be deserialized into the specified type."
        },
        {
            "question": "How does `RestTemplate` handle redirects, and can you customize this behavior?",
            "answer": "`RestTemplate` follows redirects by default. Customize it by configuring a `ClientHttpRequestFactory` with custom redirection handling."
        },
        {
            "question": "How would you handle a JSON parsing exception when the `RestTemplate` response body is empty?",
            "answer": "Check for an empty body before attempting to parse it, or handle it with a `ResponseErrorHandler` to return a custom message."
        },
        {
            "question": "What are some limitations of `RestTemplate` that are addressed by `WebClient`?",
            "answer": "`RestTemplate` is synchronous, blocking, and does not support reactive programming. `WebClient` supports asynchronous and non-blocking calls, suitable for reactive applications."
        },
        {
            "question": "Why is `AsyncRestTemplate` deprecated, and what is its recommended replacement?",
            "answer": "`AsyncRestTemplate` is deprecated because `WebClient` offers a more flexible and powerful alternative for asynchronous and reactive HTTP calls."
        },
        {
            "question": "Explain how you would migrate `RestTemplate` calls to `WebClient`.",
            "answer": "<pre><code>WebClient webClient = WebClient.create();\nMono<String> response = webClient.get()\n    .uri(\"http://example.com\")\n    .retrieve()\n    .bodyToMono(String.class);</code></pre>"
        }


    ],
"Spring Data JPA": [
        {
            "question": "What is Spring Data JPA, and how does it simplify data access in a Spring application?",
            "answer": "Spring Data JPA provides a set of abstractions and repository interfaces that eliminate the need for boilerplate code by allowing developers to interact with databases through simple method naming conventions, simplifying CRUD operations and query creation."
        },
        {
            "question": "What is the difference between `JpaRepository`, `CrudRepository`, and `PagingAndSortingRepository`?",
            "answer": "<ul><li><code>CrudRepository</code>: Provides CRUD operations.</li><li><code>PagingAndSortingRepository</code>: Adds paging and sorting capabilities to <code>CrudRepository</code>.</li><li><code>JpaRepository</code>: Extends <code>PagingAndSortingRepository</code>, adding JPA-specific features such as batch operations and flushing.</li></ul>"
        },
        {
            "question": "How does Spring Data JPA generate queries from method names?",
            "answer": "By parsing the method name based on specific keywords (e.g., <code>findBy</code>, <code>countBy</code>, <code>existsBy</code>), Spring Data JPA derives SQL queries dynamically. For example, <code>findByLastName(String lastName)</code> will create a query that fetches records where <code>lastName</code> matches."
        },
        {
            "question": "What is the purpose of `@Repository` in Spring Data JPA?",
            "answer": "`@Repository` indicates a data access layer component and provides exception translation, converting database-specific exceptions into Spring’s DataAccessException hierarchy."
        },
        {
            "question": "How does the `@Entity` annotation work in Spring Data JPA?",
            "answer": "Marks a class as a JPA entity, mapping it to a database table and allowing Spring Data JPA to manage it for persistence."
        },
        {
            "question": "What is a named query, and how do you define it in JPA?",
            "answer": "Named queries are predefined JPQL or SQL queries that are assigned a name and can be reused across the application. Define them with <code>@NamedQuery</code> on an entity class or in <code>orm.xml</code>."
        },
        {
            "question": "What is `@Query` annotation, and how do you use it for custom queries?",
            "answer": "`@Query` allows defining JPQL or native SQL queries directly on repository methods, enabling complex custom queries that go beyond method naming conventions."
        },
        {
            "question": "How do you enable native SQL queries in Spring Data JPA?",
            "answer": "Use <code>@Query(value = \"SELECT * FROM table_name WHERE condition\", nativeQuery = true)</code> to execute SQL queries directly against the database."
        },
        {
            "question": "Explain the difference between `@Modifying` and `@Query`.",
            "answer": "`@Modifying` is used with `@Query` for update or delete operations, marking the query as modifying data, and ensuring Spring Data JPA performs the operation in the correct transactional context."
        },
        {
            "question": "What is a projection in Spring Data JPA, and how is it useful?",
            "answer": "Projections allow returning subsets of entity attributes, either by interfaces or DTOs, optimizing queries to fetch only required data, thus improving performance."
        },
        {
            "question": "Explain the difference between `findBy`, `queryBy`, and `getBy` in Spring Data JPA.",
            "answer": "They perform the same function of querying entities based on method name conventions, but <code>findBy</code> is more semantically appropriate for fetching data, while <code>queryBy</code> and <code>getBy</code> are additional naming options."
        },
        {
            "question": "How does `@Transactional` affect Spring Data JPA repository methods?",
            "answer": "By default, `@Transactional` is applied to all CRUD repository methods. It ensures consistency by opening a transaction, performing the operation, and committing or rolling back as necessary."
        },
        {
            "question": "How does Spring Data JPA handle pagination and sorting?",
            "answer": "Use `Pageable` and `Sort` interfaces with repository methods to enable pagination and sorting. Methods like `findAll(Pageable pageable)` allow fetching results in pages with sorting capabilities."
        },
        {
            "question": "What is the difference between `EntityManager`’s `persist()` and `merge()`?",
            "answer": "<ul><li><code>persist()</code>: Saves a new entity instance, attaching it to the persistence context.</li><li><code>merge()</code>: Updates an existing detached entity by copying its state to a managed entity.</li></ul>"
        },
        {
            "question": "How does `@EntityGraph` improve performance in Spring Data JPA?",
            "answer": "`@EntityGraph` allows specifying related entities to be fetched with the main entity, reducing N+1 problems by controlling eager and lazy loading at query time."
        },
        {
            "question": "What is the difference between `FetchType.LAZY` and `FetchType.EAGER`?",
            "answer": "<ul><li><b>LAZY</b>: Loads related entities on-demand.</li><li><b>EAGER</b>: Loads related entities immediately with the parent entity, which can impact performance if not controlled.</li></ul>"
        },
        {
            "question": "Explain the N+1 Select problem and how to avoid it in Spring Data JPA.",
            "answer": "The N+1 problem occurs when one query is made for the parent entity and additional queries are made for each related entity. Solutions include using `@EntityGraph`, `JOIN FETCH`, or switching to lazy loading."
        },
        {
            "question": "How does Spring Data JPA handle bidirectional relationships?",
            "answer": "Spring Data JPA manages bidirectional relationships with `@OneToMany`, `@ManyToOne`, `@OneToOne`, or `@ManyToMany` annotations, where one side is the owner and the other side is marked with `mappedBy`."
        },
        {
            "question": "What are orphan removal and cascade types in JPA, and how do they work?",
            "answer": "<ul><li><b>Orphan Removal</b>: Automatically deletes child entities when they’re removed from the parent collection.</li><li><b>Cascade Types</b>: Defines the operations to cascade (e.g., <code>PERSIST</code>, <code>MERGE</code>, <code>REMOVE</code>) from the parent to the child entities.</li></ul>"
        },
        {
            "question": "What is a `MappedSuperclass` in JPA, and how is it used?",
            "answer": "`@MappedSuperclass` is a superclass for entities but is not an entity itself. It provides reusable mappings for subclasses, often used for shared fields like `id`, `createdAt`, etc."
        },
 {
            "question": "How does first-level cache work in Spring Data JPA?",
            "answer": "First-level cache is maintained by the `EntityManager` for the scope of a transaction, storing entities fetched within a transaction to reduce redundant database calls."
        },
        {
            "question": "What is a second-level cache, and how is it configured in Spring Data JPA?",
            "answer": "The second-level cache is shared across sessions, persisting entities for reuse beyond a single transaction. Enable it with Hibernate by configuring a cache provider (e.g., Ehcache, Hazelcast) in `application.properties`."
        },
        {
            "question": "What is the purpose of `@Cacheable` annotation in Spring Data JPA?",
            "answer": "Caches the result of repository methods. When called again, it returns the cached result, reducing database calls for frequently accessed data."
        },
        {
            "question": "Explain how you would implement batch processing in Spring Data JPA.",
            "answer": "Configure batch size in `application.properties` (`hibernate.jdbc.batch_size`), and use `saveAll()` for batch inserts, minimizing the number of SQL statements executed."
        },
        {
            "question": "What is `FlushModeType` and how does it impact JPA performance?",
            "answer": "`FlushModeType` controls when changes in the persistence context are synchronized with the database. `AUTO` flushes automatically, while `COMMIT` only flushes at transaction commit, improving performance by reducing database interaction."
        },
        {
            "question": "How do `REQUIRED` and `REQUIRES_NEW` propagation types differ in Spring Data JPA?",
            "answer": "<ul><li><b>REQUIRED</b>: Joins an existing transaction or creates a new one if none exists.</li><li><b>REQUIRES_NEW</b>: Suspends the current transaction and creates a new one, isolating the operations within the new transaction.</li></ul>"
        },
        {
            "question": "What is the `@Lock` annotation in Spring Data JPA, and when would you use it?",
            "answer": "`@Lock` applies locking mechanisms (`PESSIMISTIC_WRITE`, `PESSIMISTIC_READ`, or `OPTIMISTIC`) to repository methods to control concurrency when accessing shared data."
        },
        {
            "question": "How does Spring Data JPA handle transaction rollback?",
            "answer": "By default, Spring rolls back transactions on runtime exceptions. `@Transactional`’s `rollbackFor` and `noRollbackFor` attributes customize rollback behavior for specific exceptions."
        },
        {
            "question": "What is the difference between `Propagation.REQUIRED` and `Propagation.SUPPORTS`?",
            "answer": "<ul><li><b>REQUIRED</b>: Joins or creates a transaction.</li><li><b>SUPPORTS</b>: Joins an existing transaction if available, otherwise executes non-transactionally.</li></ul>"
        },
        {
            "question": "How does `@Transactional(readOnly = true)` improve performance?",
            "answer": "Optimizes performance by marking transactions as read-only, allowing the database to skip locking mechanisms and avoid write-intensive operations like flushing."
        },
        {
            "question": "How would you handle a `LazyInitializationException` in Spring Data JPA?",
            "answer": "Use `@Transactional` to keep the session open, enable `FetchType.EAGER` on relations, or use `JOIN FETCH` in queries to pre-load lazy collections."
        },
        {
            "question": "How does the `@Version` annotation help with concurrency control in JPA?",
            "answer": "Implements optimistic locking by incrementing a version field on updates. If a version conflict is detected, it throws an `OptimisticLockException`."
        },
        {
            "question": "What is the purpose of `@Embedded` and `@Embeddable` in JPA?",
            "answer": "Embeds one entity within another, allowing complex types to be stored as part of a parent entity’s table, useful for entities with reusable properties like addresses."
        },
        {
            "question": "How would you convert a JPA `Entity` into a DTO in Spring Data JPA?",
            "answer": "Use a projection in a repository method to return only the needed fields, or map the entity to a DTO in the service layer, possibly using libraries like MapStruct."
        },
        {
            "question": "What is the role of `@IdClass` and `@EmbeddedId` in composite keys?",
            "answer": "<ul><li><b>@IdClass</b>: Defines a separate class as a composite key.</li><li><b>@EmbeddedId</b>: Embeds a composite key within the entity itself, using an `@Embeddable` class for the key fields.</li></ul>"
        },
        {
            "question": "How do you test Spring Data JPA repositories with `@DataJpaTest`?",
            "answer": "`@DataJpaTest` provides an in-memory database setup, scanning only repository components, making it ideal for unit testing repositories with database interactions."
        },
        {
            "question": "Explain how to use `@Rollback` and `@Transactional` annotations in tests.",
            "answer": "`@Transactional` starts a transaction for each test, and `@Rollback` ensures database changes are not persisted after tests, maintaining a clean state."
        },
        {
            "question": "What is a dynamic query, and how is it handled in Spring Data JPA?",
            "answer": "Dynamic queries allow constructing JPQL queries based on conditions. Use `Criteria API` or `Specification` interface for dynamic query generation."
        },
        {
            "question": "How would you log the generated SQL statements in Spring Data JPA?",
            "answer": "Enable SQL logging by setting `spring.jpa.show-sql=true` and `spring.jpa.properties.hibernate.format_sql=true` in `application.properties`."
        },
        {
            "question": "What is the difference between `@ElementCollection` and `@OneToMany`?",
            "answer": "<ul><li><b>@ElementCollection</b>: Used for mapping simple types (e.g., List of strings).</li><li><b>@OneToMany</b>: Maps relationships to other entities, requiring a foreign key constraint.</li></ul>"
        },
{
            "question": "How do you improve query performance for large data sets in Spring Data JPA?",
            "answer": "Use pagination (`Pageable`), projections, fetch only required fields, batch processing, and caching to optimize query performance."
        },
        {
            "question": "What is the purpose of `fetchSize` in JPA queries, and how does it improve performance?",
            "answer": "Controls the number of rows fetched per round trip from the database, reducing memory consumption and improving performance for large result sets."
        },
        {
            "question": "How can you limit results for a query in Spring Data JPA without pagination?",
            "answer": "Use `Top` and `First` keywords in the repository method name (e.g., `findTop3ByOrderByScoreDesc`) to limit results directly."
        },
        {
            "question": "What is the difference between `@PrimaryKeyJoinColumn` and `@JoinColumn`?",
            "answer": "<ul><li><b>@PrimaryKeyJoinColumn</b>: Used for primary key associations, common in inheritance mappings.</li><li><b>@JoinColumn</b>: Used for foreign key associations.</li></ul>"
        },
        {
            "question": "How does `@Temporal` affect date and time fields in JPA?",
            "answer": "Specifies how date/time fields are stored in the database (`DATE`, `TIME`, or `TIMESTAMP`), ensuring the correct precision."
        },
        {
            "question": "How do you create a custom repository method in Spring Data JPA?",
            "answer": "Define an interface extending `JpaRepository` and an additional interface with custom methods, implementing those in a custom repository class annotated with `@Repository`."
        },
        {
            "question": "What is `Specification` in Spring Data JPA, and when would you use it?",
            "answer": "`Specification` provides a way to create dynamic queries with the Criteria API, useful for advanced filtering requirements."
        },
        {
            "question": "How do you handle entity versioning and optimistic locking with Spring Data JPA?",
            "answer": "Use `@Version` annotation to manage concurrent updates, automatically checking version fields to prevent conflicting updates."
        },
        {
            "question": "Explain how to customize the behavior of default save and delete methods in Spring Data JPA.",
            "answer": "Implement a custom repository and override save/delete methods, injecting `EntityManager` to define custom behavior."
        },
        {
            "question": "What is a DTO projection in Spring Data JPA, and how is it used to improve performance?",
            "answer": "DTO projection allows fetching only specific fields into a DTO, reducing data load and improving query performance."
        }

    ],
"Spring boot": [
        {
    "question": "How do you configure multiple data sources in a Spring Boot application?",
    "answer": "Define multiple `DataSource` beans and configure each with different `@Primary`, `@Qualifier`, and property prefixes in `application.properties` or `application.yml`."
},
{
    "question": "What is `@Value` annotation, and how does it work?",
    "answer": "Injects property values into fields by specifying property keys. For example, `@Value(\"${app.name}\")` injects the value of `app.name` from `application.properties`."
},
{
    "question": "Explain how `@ConfigurationProperties` works.",
    "answer": "`@ConfigurationProperties` maps properties to a Java object by binding property prefixes, allowing configuration values to be grouped in classes for better management and reusability."
},
{
    "question": "What is `@RestController`, and how is it different from `@Controller`?",
    "answer": "`@RestController` combines `@Controller` and `@ResponseBody`, making every method return data directly as JSON or XML without needing `@ResponseBody` on each method."
},
{
    "question": "What does `@RequestMapping` do, and what are its common parameters?",
    "answer": "Maps HTTP requests to controller methods, with parameters like `value`, `method`, `params`, and `produces` for specifying URL, HTTP method, query parameters, and response types."
},
{
    "question": "Explain the difference between `@GetMapping`, `@PostMapping`, and other HTTP method-specific annotations.",
    "answer": "These annotations are shortcuts for `@RequestMapping` with specific HTTP methods, improving readability and reducing boilerplate code."
},
{
    "question": "What is the `@RequestBody` annotation used for?",
    "answer": "Binds HTTP request body content to a method parameter, allowing JSON or XML request data to be directly converted to Java objects."
},
{
    "question": "What is `@PathVariable`, and how does it differ from `@RequestParam`?",
    "answer": "`@PathVariable` extracts values from the URI path, while `@RequestParam` extracts query parameters from the request URL."
},
{
    "question": "What does `@Autowired` do, and what are some alternatives for dependency injection in Spring Boot?",
    "answer": "`@Autowired` injects dependencies automatically. Alternatives include constructor injection and Java configuration-based injection with `@Bean`."
},
{
    "question": "How does the `@Component` annotation work, and what are other stereotype annotations in Spring Boot?",
    "answer": "`@Component` is a general-purpose stereotype for any Spring-managed component. Other stereotypes include `@Service`, `@Repository`, and `@Controller`."
},
{
    "question": "What is `@SpringBootTest`, and when would you use it?",
    "answer": "Sets up a full Spring application context for integration testing, allowing tests to run with all configurations and beans."
},
{
    "question": "Explain the use of `@MockBean` in Spring Boot testing.",
    "answer": "Replaces a bean in the application context with a mock, useful for isolating components in unit and integration tests."
},
{
    "question": "How does `@Entity` work in Spring Data JPA?",
    "answer": "Marks a class as a JPA entity, mapping it to a database table and making it managed by JPA for persistence."
},
{
    "question": "How can you define a custom configuration in Spring Boot?",
    "answer": "Use `@Configuration` with `@Bean` methods, or `@ConfigurationProperties` for property-based configurations."
},
{
    "question": "What are profiles in Spring Boot, and how do they work with annotations like `@Profile`?",
    "answer": "Profiles allow different configurations based on environments. `@Profile` on beans enables or disables them based on active profiles."
},
{
    "question": "How can you define global exception handling in Spring Boot?",
    "answer": "Use `@ControllerAdvice` with `@ExceptionHandler` methods to handle exceptions globally across all controllers."
},
{
    "question": "What is `SpringApplicationBuilder`, and how does it differ from `SpringApplication.run()`?",
    "answer": "`SpringApplicationBuilder` provides fluent configuration methods and supports hierarchical application contexts."
},
{
    "question": "How do you configure Spring Boot to use a custom banner?",
    "answer": "Place a `banner.txt` file in `src/main/resources`, or set `spring.banner.location` to customize the banner displayed on startup."
},
{
    "question": "What is `Actuator` in Spring Boot, and what is it used for?",
    "answer": "Actuator provides endpoints for monitoring and managing a Spring Boot application, offering insights into health, metrics, environment, and more."
},
{
    "question": "How can you expose or secure Actuator endpoints?",
    "answer": "Configure `management.endpoints.web.exposure.include` to control which endpoints are exposed. Secure them using Spring Security by setting endpoint permissions."
},
{
    "question": "What is a `Filter` in Spring Boot, and how do you configure one?",
    "answer": "Filters intercept requests before they reach controllers, allowing for pre- or post-processing. Configure using `@Bean` in a `@Configuration` class."
},
{
    "question": "Explain how custom annotations work in Spring Boot.",
    "answer": "Custom annotations are created by defining new annotations with `@Target`, `@Retention`, and `@Inherited`, then using them on beans or methods to add metadata or behavior."
},
{
    "question": "How does Spring Boot handle logging, and how can you configure it?",
    "answer": "Spring Boot uses `Logback` by default, configurable via `application.properties` or `application.yml`. You can also replace it with other logging frameworks."
},
{
    "question": "How does Spring Data JPA simplify database operations in Spring Boot?",
    "answer": "It provides repository interfaces with CRUD methods, eliminating boilerplate code for database access and supporting derived query methods."
},
{
    "question": "What is the purpose of `@Query` in Spring Data JPA?",
    "answer": "Allows custom JPQL or native SQL queries to be defined directly on repository methods for complex database operations."
},
{
    "question": "What is `@Transactional`, and why is it used?",
    "answer": "Manages transactions by marking methods or classes to ensure atomicity and consistency, automatically rolling back on exceptions."
},
{
    "question": "Explain how pagination works in Spring Data JPA.",
    "answer": "Spring Data JPA provides `Pageable` and `Page` interfaces to retrieve data in paginated chunks, supporting custom sorting and page requests."
},
{
    "question": "What are lazy and eager loading in JPA, and how do they impact performance?",
    "answer": "Lazy loading delays fetching related entities until accessed, while eager loading fetches all related entities upfront. Lazy loading can reduce initial load time but may cause `LazyInitializationException`."
},
{
    "question": "How does Spring Security integrate with Spring Boot?",
    "answer": "Spring Boot auto-configures security, applying default configurations or customizations for authentication and authorization through properties or custom `SecurityConfig`."
},
{
    "question": "What is `@EnableWebSecurity`, and when would you use it?",
    "answer": "Enables Spring Security’s web security features. Use it to create custom security configurations in Spring Boot."
},
{
    "question": "Explain how role-based authorization is configured in Spring Boot.",
    "answer": "Use `@PreAuthorize` or `@Secured` annotations on methods, or configure role access in `WebSecurityConfigurerAdapter`."
},
{
    "question": "How does `BCryptPasswordEncoder` work in Spring Security?",
    "answer": "`BCryptPasswordEncoder` hashes passwords using the BCrypt algorithm, providing strong hashing to secure passwords."
},
{
    "question": "What are CSRF tokens, and how does Spring Security handle them?",
    "answer": "CSRF tokens prevent Cross-Site Request Forgery attacks. Spring Security generates a token for each session, requiring it in requests to ensure requests are from legitimate sources."
},
{
    "question": "How would you configure Spring Boot for service discovery with Eureka?",
    "answer": "Add `@EnableEurekaClient` on the main application and configure `eureka.client.serviceUrl` properties for discovery."
},
{
    "question": "What is Spring Cloud Config, and how does it work with Spring Boot?",
    "answer": "Spring Cloud Config provides centralized configuration management. Spring Boot applications fetch configurations from a remote Config Server."
},
{
    "question": "How does Spring Boot handle circuit breaking with Resilience4j or Hystrix?",
    "answer": "Integrate Resilience4j or Hystrix with annotations like `@CircuitBreaker` or `@HystrixCommand` to handle fallback logic during failures."
},
{
    "question": "How does Spring Boot support distributed tracing with Sleuth and Zipkin?",
    "answer": "Spring Cloud Sleuth provides trace and span IDs for requests, and Zipkin collects and visualizes tracing information for distributed requests."
},
{
    "question": "Explain how to use Spring Boot with RabbitMQ for messaging.",
    "answer": "Use `spring-boot-starter-amqp` to configure `RabbitTemplate` for sending messages, `@RabbitListener` for receiving, and properties to configure RabbitMQ."
},
{
    "question": "What is `@MockBean`, and how does it work in Spring Boot tests?",
    "answer": "`@MockBean` replaces an existing bean in the application context with a mock, allowing for isolated tests."
},
{
    "question": "Explain the use of `@DataJpaTest` in Spring Boot.",
    "answer": "Provides a lightweight JPA environment focused on testing repository layers with in-memory databases."
},
{
    "question": "How does `@WebMvcTest` work, and when would you use it?",
    "answer": "Configures Spring MVC components for controller testing without starting the full application context, ideal for testing HTTP layer."
},
{
    "question": "What is `@TestConfiguration`, and when is it useful?",
    "answer": "Used to define test-specific beans or override production beans within a test context."
},
{
    "question": "How do you perform integration testing in Spring Boot?",
    "answer": "Use `@SpringBootTest` to load the entire application context, enabling end-to-end testing across layers with full configuration."
}



    ],
"Netwrok Protocols": [
        {
    "question": "What is the difference between HTTP and HTTPS?",
    "answer": "- **HTTP**: Stands for Hypertext Transfer Protocol and transmits data in plain text, making it vulnerable to interception and attacks.\n- **HTTPS**: Stands for HTTP Secure and uses SSL/TLS encryption to secure data in transit, ensuring confidentiality, integrity, and authenticity.\n- **Difference**: HTTPS provides encryption and security layers that HTTP lacks, making it suitable for sensitive data transmission."
},
{
    "question": "What is a GET request, and how is it different from a POST request?",
    "answer": "- **GET**: Requests data from the server and appends parameters in the URL. It is idempotent, meaning repeated requests produce the same result.\n- **POST**: Submits data to the server, often with a request body, and is not idempotent.\n- **Difference**: GET is mainly for retrieving data, while POST is used for data submission (e.g., form data) and typically alters server state."
},
{
    "question": "What is a status code in HTTP, and what does the 200, 404, and 500 status codes represent?",
    "answer": "- **Status Codes**: Indicate the result of an HTTP request.\n- **200**: Success – The request was successful.\n- **404**: Not Found – The requested resource does not exist.\n- **500**: Internal Server Error – The server encountered an unexpected error."
},
{
    "question": "How does HTTPS provide secure communication? Explain the role of SSL/TLS.",
    "answer": "HTTPS uses SSL/TLS protocols to encrypt data between the client and server, preventing eavesdropping and tampering. SSL/TLS performs a handshake to authenticate the server, establish a secure channel, and exchange encryption keys. This encryption ensures data integrity, confidentiality, and authenticity."
},
{
    "question": "What is the purpose of HTTP headers, and name some common headers used in requests and responses.",
    "answer": "HTTP headers provide metadata about the request or response, such as content type, authorization, and caching information. Common headers include:\n- **Request Headers**: `Accept`, `Authorization`, `User-Agent`, `Content-Type`\n- **Response Headers**: `Content-Type`, `Cache-Control`, `Set-Cookie`, `Server`"
},
{
    "question": "How do you implement basic authentication in an HTTP request in Java?",
    "answer": "<pre><code>String credentials = \"username:password\";\nString basicAuth = \"Basic \" + Base64.getEncoder().encodeToString(credentials.getBytes());\nHttpURLConnection connection = (HttpURLConnection) new URL(\"http://example.com\").openConnection();\nconnection.setRequestProperty(\"Authorization\", basicAuth);</code></pre>"
},
{
    "question": "What is the difference between a persistent and a non-persistent HTTP connection?",
    "answer": "- **Persistent Connection**: Keeps the connection open for multiple requests/responses (HTTP/1.1 default), reducing latency for multiple requests.\n- **Non-Persistent Connection**: Closes the connection after each request/response cycle, requiring a new connection for subsequent requests."
},
{
    "question": "Explain what CORS (Cross-Origin Resource Sharing) is and how it is used in HTTP.",
    "answer": "CORS is a security feature that allows restricted resources (like APIs) on a web server to be requested from another domain. It uses HTTP headers to control access based on origin, HTTP methods, and headers, enabling safe cross-domain requests for specific resources."
},
{
    "question": "How would you configure an HTTPS connection in Java to trust all certificates (not recommended for production)?",
    "answer": "<pre><code>HttpsURLConnection connection = (HttpsURLConnection) new URL(\"https://example.com\").openConnection();\nconnection.setSSLSocketFactory(createTrustAllSslContext().getSocketFactory());</code></pre>\n**Explanation**: Use a custom `TrustManager` to trust all certificates. This approach is insecure and should only be used for testing."
},
{
    "question": "What is the purpose of cookies and sessions in HTTP, and how do they relate to statelessness?",
    "answer": "Cookies and sessions help maintain user state across HTTP requests in a stateless protocol. Cookies store small pieces of data in the client, while sessions store data on the server with a unique identifier in the client’s cookie. They help identify users across requests."
},
{
    "question": "What is SMTP, and how is it used in Java to send emails?",
    "answer": "SMTP (Simple Mail Transfer Protocol) is used to send emails between servers. In Java, the `javax.mail` API (JavaMail) can configure an SMTP server to send emails by creating `Session`, `Message`, and `Transport` objects."
},
{
    "question": "Explain how to set up an SMTP connection with authentication in Java using the `javax.mail` API.",
    "answer": "<pre><code>Properties props = new Properties();\nprops.put(\"mail.smtp.auth\", \"true\");\nprops.put(\"mail.smtp.starttls.enable\", \"true\");\nprops.put(\"mail.smtp.host\", \"smtp.example.com\");\nprops.put(\"mail.smtp.port\", \"587\");\n\nSession session = Session.getInstance(props, new Authenticator() {\n    protected PasswordAuthentication getPasswordAuthentication() {\n        return new PasswordAuthentication(\"user@example.com\", \"password\");\n    }\n});</code></pre>"
},
{
    "question": "What is the difference between SMTP and IMAP/POP3?",
    "answer": "- **SMTP**: Protocol for sending emails.\n- **IMAP**: Allows accessing emails stored on the mail server in a synchronized manner, keeping emails on the server.\n- **POP3**: Downloads emails from the server to the client and deletes them from the server by default.\n- **Difference**: SMTP is used for sending, while IMAP and POP3 are used for retrieving emails."
},
{
    "question": "What is an SMTP relay, and when would you use it?",
    "answer": "An SMTP relay forwards email messages from one server to another, commonly used by organizations to route emails through a trusted mail server. It helps manage outgoing emails, avoid blacklisting, and authenticate mail senders."
},
{
    "question": "What is FTP, and how does it differ from HTTP?",
    "answer": "FTP (File Transfer Protocol) is designed for transferring files between client and server, with support for commands like upload, download, and delete. HTTP is a stateless protocol for retrieving resources like HTML files and APIs. FTP is stateful, allowing persistent connections and direct file manipulation on the server."
},
{
    "question": "Explain how to use `FTPClient` in Java to upload a file to an FTP server.",
    "answer": "<pre><code>FTPClient ftpClient = new FTPClient();\nftpClient.connect(\"ftp.example.com\");\nftpClient.login(\"username\", \"password\");\nFileInputStream inputStream = new FileInputStream(\"localfile.txt\");\nftpClient.storeFile(\"remoteFile.txt\", inputStream);\ninputStream.close();\nftpClient.logout();\nftpClient.disconnect();</code></pre>"
},
{
    "question": "What are the main differences between active and passive FTP modes?",
    "answer": "- **Active Mode**: The server initiates the data connection to the client’s specified port, which can cause firewall issues.\n- **Passive Mode**: The client initiates both control and data connections, making it more firewall-friendly.\n- **Usage**: Passive mode is commonly used to avoid firewall issues on the client side."
},
{
    "question": "How does FTPS differ from FTP, and how do you set up an FTPS connection in Java?",
    "answer": "FTPS (FTP Secure) adds SSL/TLS encryption to FTP, securing data in transit. In Java, use `FTPSClient` from Apache Commons Net for FTPS:\n<pre><code>FTPSClient ftpsClient = new FTPSClient();\nftpsClient.connect(\"ftp.example.com\");\nftpsClient.login(\"username\", \"password\");</code></pre>"
},
{
    "question": "Explain the importance of closing FTP connections properly.",
    "answer": "Failing to close FTP connections can leave sessions open, consuming server resources and potentially causing resource leaks in the client application. Properly closing connections ensures efficient resource usage and avoids connection limits on the server."
},
{
    "question": "What is DNS and how does it work in the context of HTTP/HTTPS requests?",
    "answer": "DNS (Domain Name System) resolves domain names (like `example.com`) into IP addresses. When a client makes an HTTP/HTTPS request, it first queries DNS to get the server’s IP address. DNS resolution is essential for translating human-readable addresses into routable IP addresses."
},
{
    "question": "What is a REST API, and how does it use HTTP methods to manage resources?",
    "answer": "REST (Representational State Transfer) API is an architectural style that uses HTTP methods to manage resources:\n- **GET**: Retrieve a resource.\n- **POST**: Create a new resource.\n- **PUT**: Update an existing resource.\n- **DELETE**: Remove a resource.\nRESTful services are stateless, meaning each request is independent and contains all necessary information."
},
{
    "question": "What is a proxy server, and how does it interact with HTTP/HTTPS traffic?",
    "answer": "A proxy server sits between the client and server, forwarding client requests and server responses. It can cache content, filter traffic, and hide client IPs. HTTPS traffic may require SSL tunneling to allow encrypted data to pass through the proxy."
},
{
    "question": "Explain what a firewall is and how it interacts with protocols like FTP and SMTP.",
    "answer": "A firewall controls incoming and outgoing network traffic based on security rules. It can block or allow specific ports and protocols. For FTP, firewalls can interfere with active mode data connections, and for SMTP, firewalls might block outbound emails to prevent spam."
},
{
    "question": "What is load balancing, and how does it work with HTTP/HTTPS traffic?",
    "answer": "Load balancing distributes network traffic across multiple servers to ensure availability and reliability. For HTTP/HTTPS traffic, a load balancer routes client requests to different servers based on rules, optimizing resource usage and preventing server overload."
},
{
    "question": "What is port 443, and why is it important for HTTPS traffic?",
    "answer": "Port 443 is the default port for HTTPS traffic, allowing secure HTTP communication over SSL/TLS. It is essential for encrypted web traffic, ensuring data integrity and confidentiality, and is commonly open on firewalls to allow secure access."
}


    ],
"IO operations": [
{
    "question": "What is the difference between `FileInputStream` and `FileReader` in Java?",
    "answer": "<pre><code>FileInputStream</code>: A byte-based stream used to read raw bytes from a file, often for binary data such as images or audio.<br><code>FileReader</code>: A character-based stream that reads characters from a file using a specified or default character encoding. It is more suitable for text files.<br><br><b>Difference</b>: <code>FileInputStream</code> reads raw bytes, whereas <code>FileReader</code> reads characters, handling character encoding automatically.</pre>"
},
{
    "question": "What is the difference between `FileOutputStream` and `FileWriter`?",
    "answer": "<pre><code>FileOutputStream</code>: A byte-based stream used for writing raw bytes to a file, suitable for binary data.<br><code>FileWriter</code>: A character-based stream used for writing text data, managing character encoding automatically.<br><br><b>Difference</b>: Use <code>FileOutputStream</code> for binary data and <code>FileWriter</code> for text data.</pre>"
},
{
    "question": "What is the purpose of `BufferedInputStream` and `BufferedOutputStream`, and how do they improve performance?",
    "answer": "`BufferedInputStream` and `BufferedOutputStream` wrap around `InputStream` and `OutputStream` to add a buffer, reducing the number of I/O operations by reading/writing larger chunks of data at once. This improves performance by minimizing the interactions with the underlying I/O system, which are typically slower."
},
{
    "question": "What happens if you try to read from a `FileInputStream` after closing it?",
    "answer": "Attempting to read from a closed `FileInputStream` throws an `IOException` because the stream’s connection to the file has been closed. Once closed, the stream cannot be reopened or reused, and any further operations on it will result in an exception."
},
{
    "question": "How does `DataInputStream` differ from `FileInputStream`, and when would you use it?",
    "answer": "<pre><code>FileInputStream</code>: Reads raw bytes from a file.<br><code>DataInputStream</code>: Wraps an <code>InputStream</code> to read primitive data types (`int`, `float`, `double`, etc.) and strings in a machine-independent way.<br><br><b>Usage</b>: Use <code>DataInputStream</code> when reading structured binary data, as it provides methods for reading primitive types directly.</pre>"
},
{
    "question": "Explain the purpose of `flush()` in `FileOutputStream` and `BufferedOutputStream`.",
    "answer": "The `flush()` method forces any buffered data to be written to the underlying output stream immediately. For `FileOutputStream`, it ensures that any buffered bytes are sent to the file, and for `BufferedOutputStream`, it clears the buffer, writing all pending data to the target stream. This is especially important to avoid data loss in cases where the application ends before buffered data is written."
},
{
    "question": "How does `ObjectOutputStream` work, and what is required to use it?",
    "answer": "`ObjectOutputStream` writes Java objects to an output stream in serialized form. To use it, the object’s class and all referenced objects must implement the `Serializable` interface. `ObjectOutputStream` serializes the object and its entire object graph, allowing it to be reconstructed later with `ObjectInputStream`."
},
{
    "question": "Can you read from multiple streams simultaneously in Java? How would you implement this?",
    "answer": "Yes, you can read from multiple streams simultaneously by using threads, where each thread reads from a different stream. For example, you can use `ExecutorService` to manage multiple threads, each handling a different `InputStream`, allowing for concurrent reading."
},
{
    "question": "What is the difference between `InputStream` and `Reader` in Java?",
    "answer": "<pre><code>InputStream</code>: A byte-based abstract class for reading raw bytes, typically used for binary data.<br><code>Reader</code>: A character-based abstract class for reading characters, used for text data and character encoding support.<br><br><b>Difference</b>: `InputStream` is for raw byte data, while `Reader` is for text data with encoding.</pre>"
},
{
    "question": "Why would you use `PrintWriter` instead of `FileWriter` or `BufferedWriter`?",
    "answer": "`PrintWriter` provides convenient methods like `println()`, `print()`, and `printf()` for formatted output. It’s useful for writing text data with control over line endings and formatting, whereas `FileWriter` and `BufferedWriter` are lower-level and don’t support formatted output as easily."
},
{
    "question": "What is the purpose of `SequenceInputStream`, and when would you use it?",
    "answer": "`SequenceInputStream` allows you to concatenate multiple `InputStream`s into a single input stream, reading them sequentially as if they were a single stream. It’s useful for combining multiple sources of data into one stream, such as when merging the contents of multiple files."
},
{
    "question": "How would you convert an `InputStream` to a `Reader`?",
    "answer": "<pre>Use `InputStreamReader` to wrap an `InputStream` and convert it to a `Reader`, specifying the desired character encoding if necessary:<br><code>InputStream inputStream = new FileInputStream(\"file.txt\");<br>Reader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);</code><br><br><b>Explanation</b>: This conversion allows you to read byte streams as characters, with optional encoding handling.</pre>"
},
{
    "question": "Explain how `RandomAccessFile` differs from other file streams.",
    "answer": "`RandomAccessFile` allows both reading and writing to any part of a file by supporting file pointers, which can be moved with `seek()`. Unlike other streams, `RandomAccessFile` enables non-sequential access, making it suitable for applications requiring random access, like databases."
},
{
    "question": "How can you copy a file using `FileInputStream` and `FileOutputStream`?",
    "answer": "<pre>Open a `FileInputStream` for the source file and a `FileOutputStream` for the destination, then read data from the input stream and write it to the output stream in chunks:<br><code>try (FileInputStream in = new FileInputStream(\"source.txt\");<br>     FileOutputStream out = new FileOutputStream(\"destination.txt\")) {<br>    byte[] buffer = new byte[1024];<br>    int bytesRead;<br>    while ((bytesRead = in.read(buffer)) != -1) {<br>        out.write(buffer, 0, bytesRead);<br>    }<br>} catch (IOException e) {<br>    e.printStackTrace();<br>}<br></code><br><br><b>Explanation</b>: Using a buffer allows efficient data transfer by reducing the number of I/O operations.</pre>"
},
{
    "question": "What is the purpose of `PushbackInputStream`, and when would you use it?",
    "answer": "`PushbackInputStream` allows you to \"push back\" bytes into the stream, making them available for re-reading. It’s useful for parsers where you may need to \"peek\" at data and then unread it based on parsing logic, such as when handling tokens in a stream of data."
},
{
    "question": "How would you read text data from a file with a specific character encoding?",
    "answer": "<pre>Use `FileInputStream` wrapped with `InputStreamReader`, specifying the character encoding:<br><code>try (Reader reader = new InputStreamReader(new FileInputStream(\"file.txt\"), StandardCharsets.UTF_8)) {<br>    // Read text data<br>} catch (IOException e) {<br>    e.printStackTrace();<br>}<br></code><br><br><b>Explanation</b>: Specifying encoding ensures the file is read correctly according to the intended character set.</pre>"
},
{
    "question": "What happens if you open a file with `FileOutputStream` in write mode when the file already exists?",
    "answer": "Opening a file with `FileOutputStream` in write mode overwrites the file, erasing its existing contents. To append to a file instead, use the constructor with the `append` flag set to `true`: `new FileOutputStream(\"file.txt\", true)`."
},
{
    "question": "What is `GZIPOutputStream`, and when would you use it?",
    "answer": "`GZIPOutputStream` is an output stream that compresses data in the GZIP format. It’s commonly used when you need to save space or reduce network transmission size by compressing data as it’s written. Pair it with a `FileOutputStream` to compress a file directly."
},
{
    "question": "How would you detect the end of a file when reading with `FileInputStream`?",
    "answer": "<pre>The `read()` method of `FileInputStream` returns `-1` when the end of the file is reached. You can use a loop to check for `-1` to detect the end of the file:<br><code>int byteData;<br>while ((byteData = inputStream.read()) != -1) {<br>    // Process byteData<br>}<br></code></pre>"
},
{
    "question": "Can `BufferedInputStream` be used with `ObjectInputStream`? Why or why not?",
    "answer": "Yes, `BufferedInputStream` can wrap around `ObjectInputStream` to improve performance by buffering data. This reduces the number of I/O operations by reading chunks of data at once, which `ObjectInputStream` then processes for deserialization."
},
{
    "question": "What is the difference between `flush()` and `close()` in `OutputStream`?",
    "answer": "`flush()` writes any buffered data to the output destination, ensuring all data is written. `close()` flushes the stream and then closes it, releasing system resources. After closing, the stream cannot be reopened or written to."
},
{
    "question": "How can you read an entire file into a `byte[]` array in Java?",
    "answer": "<pre>Use `Files.readAllBytes(Path path)` from `java.nio.file`:<br><code>byte[] fileData = Files.readAllBytes(Paths.get(\"file.txt\"));<br></code><br><b>Explanation</b>: This reads the entire file into memory, making it useful for small files that need to be processed as a whole.</pre>"
},
{
    "question": "What are `PipedInputStream` and `PipedOutputStream`, and how are they used?",
    "answer": "`PipedInputStream` and `PipedOutputStream` are used for communication between two threads. Data written to `PipedOutputStream` is available to `PipedInputStream` as if they were directly connected. They are commonly used for inter-thread communication where one thread writes data and another reads it."
},
{
    "question": "How does `Closeable` interface help in managing I/O resources in Java?",
    "answer": "The `Closeable` interface provides the `close()` method, enabling objects to release resources when no longer needed. In Java 7 and later, the try-with-resources statement automatically calls `close()` on `Closeable` objects at the end of the try block, ensuring that I/O resources are released, even if an exception occurs."
},
{
    "question": "How would you handle an `IOException` thrown while closing an `InputStream`?",
    "answer": "<pre>To handle `IOException` during stream closure, either use a try-with-resources block, which manages exceptions for you, or catch and log the exception in a finally block:<br><code>try (InputStream in = new FileInputStream(\"file.txt\")) {<br>    // Process the input stream<br>} catch (IOException e) {<br>    e.printStackTrace();<br>}<br></code><br><br><b>Explanation</b>: try-with-resources ensures that resources are closed safely, and if closing fails, the exception can be logged without affecting main processing.</pre>"
}



    ],
"Serialization": [
        {
    "question": "What is serialization in Java, and why is it used?",
    "answer": "Serialization in Java is the process of converting an object into a byte stream, which can be saved to a file, transmitted over a network, or stored in a database. It’s used to persist object states or to send objects between applications or across a network."
},
{
    "question": "What is `serialVersionUID`, and why is it important in serialization?",
    "answer": "`serialVersionUID` is a unique identifier for each serializable class, used to ensure that the same class (with the same structure) is used during deserialization. If the `serialVersionUID` of a class does not match during serialization and deserialization, it results in an `InvalidClassException`. Declaring `serialVersionUID` explicitly helps maintain compatibility between different versions of a class."
},
{
    "question": "What happens if you don’t declare `serialVersionUID` in a serializable class?",
    "answer": "If `serialVersionUID` is not explicitly declared, Java will generate it automatically based on various aspects of the class (like fields, methods, etc.). However, this generated value is sensitive to class changes, which can cause compatibility issues when deserializing an object with a modified class. It’s best practice to define `serialVersionUID` explicitly to avoid such issues."
},
{
    "question": "Can you serialize static fields in Java? Why or why not?",
    "answer": "No, static fields are not serialized in Java because they are part of the class, not the instance. Serialization works on instance data, so static fields are ignored. If you need to store the state of static fields, you would need to handle them manually, perhaps by implementing custom serialization."
},
{
    "question": "What is the role of the `transient` keyword in serialization?",
    "answer": "The `transient` keyword in Java is used to mark fields that should not be serialized. When an object is serialized, transient fields are ignored, and they are set to their default values during deserialization (e.g., `null` for objects, `0` for integers, `false` for booleans)."
},
{
    "question": "What are the `writeObject()` and `readObject()` methods, and how do they affect serialization?",
    "answer": "`writeObject()` and `readObject()` are special methods that can be implemented in a class to control how serialization and deserialization are performed. They allow you to customize the serialization process, adding additional logic or encrypting data if needed.<br><br>**writeObject(ObjectOutputStream out)**: Customizes how the object is written to the stream.<br>**readObject(ObjectInputStream in)**: Customizes how the object is read from the stream."
},
{
    "question": "What is `Externalizable` in Java, and how does it differ from `Serializable`?",
    "answer": "`Externalizable` is an interface that extends `Serializable` but gives complete control over the serialization process. It requires implementing the `writeExternal()` and `readExternal()` methods, allowing you to define exactly how objects are serialized and deserialized. `Serializable` uses Java’s default serialization mechanism, while `Externalizable` provides a more lightweight, customized approach."
},
{
    "question": "What happens if a superclass is not `Serializable`, but the subclass is?",
    "answer": "If a superclass is not `Serializable` but the subclass is, only the fields in the subclass will be serialized. During deserialization, the superclass’s constructor will be called to initialize the non-serializable fields. This works only if the superclass has a no-argument constructor; otherwise, deserialization will fail."
},
{
    "question": "How does Java handle circular references in object graphs during serialization?",
    "answer": "Java’s serialization mechanism can handle circular references in object graphs by tracking object references. During serialization, each object is assigned a unique identifier in the output stream. If the same object is encountered again, Java writes a reference to the identifier instead of serializing the object again, avoiding infinite loops."
},
{
    "question": "Can you serialize a collection that contains both serializable and non-serializable objects?",
    "answer": "No, a collection containing non-serializable objects cannot be fully serialized. When Java encounters a non-serializable object in the collection, it will throw a `NotSerializableException`. All objects within a collection must be serializable for the collection to be serialized."
},
{
    "question": "How can you exclude certain fields from being serialized without using the `transient` keyword?",
    "answer": "You can exclude certain fields from serialization by implementing custom serialization with `writeObject()` and `readObject()`. Within `writeObject()`, avoid writing the excluded fields to the stream, and in `readObject()`, initialize them as needed.<br><br><pre><code>private void writeObject(ObjectOutputStream out) throws IOException {<br>    out.defaultWriteObject();<br>    // Do not write excludedField<br>}<br></code></pre>"
},
{
    "question": "What is a `NotSerializableException`, and when can it occur?",
    "answer": "`NotSerializableException` is thrown when Java attempts to serialize an object that does not implement the `Serializable` interface. This can occur when a class or one of its fields is not serializable, breaking the serialization process."
},
{
    "question": "If a field is declared as `final`, can it be serialized?",
    "answer": "Yes, `final` fields can be serialized. However, during deserialization, their value is restored from the serialized object, not by reinitializing them as specified in the class definition. If the field is also marked `transient`, it will be ignored during serialization, and its default value will be restored on deserialization."
},
{
    "question": "How can you achieve versioning in serialization, and why is it important?",
    "answer": "Versioning in serialization is achieved by specifying `serialVersionUID`. It’s essential for maintaining compatibility between different versions of a class, allowing you to modify the class structure without breaking deserialization. Changes to class fields without updating `serialVersionUID` can cause `InvalidClassException`."
},
{
    "question": "What is the impact of changing the `serialVersionUID` in a serializable class?",
    "answer": "Changing the `serialVersionUID` of a class makes previously serialized objects incompatible with the new version of the class. Attempting to deserialize old serialized data with the new class version will throw an `InvalidClassException`, as the serialized data and the current class structure no longer match."
},
{
    "question": "How does transient field behave when a class implements `Externalizable`?",
    "answer": "When a class implements `Externalizable`, it overrides the default serialization, so all fields (including `transient` fields) need to be explicitly serialized in the `writeExternal()` and `readExternal()` methods. `Transient` has no effect in `Externalizable`; the field will be serialized if explicitly specified in `writeExternal()`."
},
{
    "question": "How would you serialize an object that contains sensitive data, like passwords, without compromising security?",
    "answer": "Sensitive data should either be marked `transient` to exclude it from serialization, or it should be encrypted before serialization. During deserialization, use `readObject()` to decrypt the data as needed. You can also use custom serialization logic in `writeObject()` to handle encryption and `readObject()` for decryption."
},
{
    "question": "What is a potential security risk of serialization, and how can it be mitigated?",
    "answer": "Serialization can be a security risk because it allows arbitrary code to execute during deserialization. An attacker can craft serialized data that could exploit vulnerabilities in the deserialization process. To mitigate this, avoid deserializing data from untrusted sources, validate deserialized objects, and consider using techniques like Java’s `ObjectInputFilter` to restrict allowed classes during deserialization."
},
{
    "question": "What is the difference between `defaultWriteObject()` and `writeObject()`?",
    "answer": "<pre><b>`defaultWriteObject()`</b>: Writes the default serialized form of the object’s non-transient fields to the output stream.<br><b>`writeObject()`</b>: A method that you can implement in a class to perform custom serialization. Within `writeObject()`, you can call `defaultWriteObject()` to serialize fields normally and then add custom serialization logic as needed.</pre>"
},
{
    "question": "What happens if `readObject()` doesn’t read data in the same order as `writeObject()` wrote it?",
    "answer": "If `readObject()` does not read data in the same order as `writeObject()` wrote it, deserialization will fail, leading to an `OptionalDataException` or other read errors. Serialization and deserialization must follow the same field order and data structure to ensure the object state is correctly restored."
},
{
    "question": "How would you serialize an object with references to other non-serializable objects?",
    "answer": "You can mark the non-serializable fields as `transient` to exclude them from serialization. Alternatively, you can implement custom serialization with `writeObject()` and `readObject()` to handle those fields, such as by serializing only the necessary information or converting the non-serializable objects to a serializable form."
},
{
    "question": "What is the role of `ObjectOutputStream` and `ObjectInputStream` in Java serialization?",
    "answer": "`ObjectOutputStream` and `ObjectInputStream` are streams specifically designed for writing and reading objects as byte streams. `ObjectOutputStream` serializes objects to an output stream, while `ObjectInputStream` deserializes objects from an input stream. They are responsible for encoding and decoding the serialized data structure."
},
{
    "question": "How does serialization handle inheritance in Java?",
    "answer": "Inheritance in Java serialization works as follows:<br>- If a superclass is serializable, all subclasses are also serializable.<br>- If a superclass is not serializable but a subclass is, only the subclass’s fields are serialized. During deserialization, the superclass must have a no-argument constructor, as it will be invoked to initialize the superclass part of the object."
},
{
    "question": "How can you control the order in which fields are serialized and deserialized?",
    "answer": "You can control the serialization order by implementing custom serialization using `writeObject()` and `readObject()` methods. By manually calling `writeObject()` in the desired order, you ensure that fields are serialized and deserialized in a controlled sequence."
},
{
    "question": "What is the difference between Java’s built-in serialization and using third-party libraries (e.g., JSON, XML)?",
    "answer": "<b>Java’s Built-In Serialization</b>: Binary serialization is fast and efficient for Java-to-Java data exchange but is not human-readable and is platform-specific.<br><b>Third-Party Libraries</b> (like JSON or XML): These offer platform-agnostic, human-readable formats that are better for interoperability with other systems or languages. They often require custom serialization logic but are typically safer and easier to debug than Java’s built-in serialization."
}


    ],
"Synchronization": [
    {
        "question": "What is the purpose of the `synchronized` keyword in Java?",
        "answer": "The `synchronized` keyword in Java provides a way to control access to shared resources by multiple threads. It ensures that only one thread can access a synchronized method or block at a time, preventing **race conditions** and ensuring **thread safety**. The `synchronized` keyword can be applied to methods or blocks of code."
    },
    {
        "question": "What is the difference between a synchronized method and a synchronized block in Java?",
        "answer": "<pre><b>Synchronized Method</b>: Locks the entire method for the object's monitor (for instance methods) or the class's monitor (for static methods). It synchronizes the entire method, which can be less efficient.<br><b>Synchronized Block</b>: Allows synchronizing only a specific part of a method. It provides more fine-grained control and can improve performance by limiting the synchronized code to critical sections.<br><b>Usage</b>: Synchronized blocks are preferred when you only need to lock a small section of code.</pre>"
    },
    {
        "question": "What is a deadlock, and how can it occur in synchronized code?",
        "answer": "A **deadlock** occurs when two or more threads are waiting for each other to release locks, creating a circular dependency where each thread holds a lock the other needs. In synchronized code, deadlocks typically occur when multiple locks are required by multiple threads in an inconsistent order. Deadlocks can be prevented by locking resources in a consistent order."
    },
    {
        "question": "How does Java’s intrinsic lock (monitor) work with synchronized methods and blocks?",
        "answer": "Java’s intrinsic lock (or monitor lock) is acquired by a thread when it enters a synchronized method or block and is released when it exits. For synchronized instance methods, the lock is on the instance of the object, while for synchronized static methods, the lock is on the `Class` object. Only one thread can hold the lock on an object at a time, blocking other threads from accessing the synchronized code."
    },
    {
        "question": "What is reentrant synchronization, and how does it work in Java?",
        "answer": "Reentrant synchronization allows a thread to acquire a lock it already holds without causing a deadlock. In Java, intrinsic locks are reentrant, meaning if a thread acquires a lock and then attempts to acquire it again (in the same or a nested method), it is allowed to proceed. This is useful for recursive methods or when a synchronized method calls another synchronized method on the same object."
    },
    {
        "question": "What is the difference between object-level locking and class-level locking?",
        "answer": "<pre><b>Object-Level Locking</b>: Achieved by synchronizing instance methods or using synchronized blocks on `this`. It locks a specific instance, allowing other instances of the class to be accessed by other threads.<br><b>Class-Level Locking</b>: Achieved by synchronizing static methods or synchronizing on the class’s `Class` object (`ClassName.class`). It locks the class, preventing any thread from accessing any static synchronized methods or synchronized blocks on the class.</pre>"
    },
    {
        "question": "What is the potential performance issue with using synchronized methods?",
        "answer": "Synchronized methods lock the entire method, potentially causing other threads to wait for the lock even if only part of the method needs synchronization. This can lead to **reduced concurrency** and **performance bottlenecks**. Using synchronized blocks instead, where only critical sections are synchronized, can help improve performance."
    },
    {
        "question": "How can you avoid deadlocks in synchronized code?",
        "answer": "<pre><b>Consistent Lock Ordering</b>: Always acquire locks in the same order across threads.<br><b>Timeouts</b>: Use timed locks (e.g., `tryLock` in `ReentrantLock`) to avoid indefinite blocking.<br><b>Lock Hierarchies</b>: Divide locks into hierarchical levels and acquire higher-level locks before lower-level ones.<br><b>Minimize Locking</b>: Reduce the use of locks to only necessary sections, and avoid nested locks when possible.</pre>"
    },
    {
        "question": "What is the difference between `synchronized` and `ReentrantLock`?",
        "answer": "<pre><b>`synchronized`</b>: Simpler to use, does not allow for timeout-based acquisition, and automatically releases the lock when a block or method is exited.<br><b>`ReentrantLock`</b>: Provides more advanced locking features like timed lock attempts (`tryLock`), interruptible lock acquisition, and multiple condition variables. It requires explicit locking and unlocking, so you must manually release the lock.<br><b>Use Case</b>: `ReentrantLock` is preferred when you need additional flexibility, such as timed or interruptible lock acquisition.</pre>"
    },
    {
        "question": "What is a race condition, and how does synchronization help to prevent it?",
        "answer": "A **race condition** occurs when multiple threads access and modify shared data concurrently, leading to unpredictable results. Synchronization prevents race conditions by allowing only one thread to access a critical section at a time, ensuring that shared data is accessed in a controlled manner."
    },
    {
        "question": "Can a synchronized method call another synchronized method on the same object?",
        "answer": "Yes, a synchronized method can call another synchronized method on the same object due to reentrant synchronization in Java. Since the thread already holds the lock on the object, it can enter other synchronized methods or blocks on the same object without deadlocking."
    },
    {
        "question": "How does synchronized keyword affect memory visibility in Java?",
        "answer": "The `synchronized` keyword has both **locking** and **memory visibility** effects. When a thread enters a synchronized block, it sees the most recent changes to shared variables made by other threads. When a thread exits a synchronized block, it flushes its changes to main memory, ensuring visibility to other threads that acquire the same lock."
    },
    {
        "question": "Is it possible to synchronize a constructor in Java? Why or why not?",
        "answer": "No, you cannot synchronize a constructor in Java because the object is not fully created until the constructor has finished executing. However, you can use a synchronized block within the constructor on a different object if necessary."
    },
    {
        "question": "What is a monitor in Java, and how does it relate to the `synchronized` keyword?",
        "answer": "A **monitor** is an internal mechanism in Java that allows only one thread at a time to execute synchronized methods or blocks on an object. Each object in Java has an associated monitor. The `synchronized` keyword locks the monitor of the object, ensuring that only one thread can execute synchronized code for that object at a time."
    },
    {
        "question": "What is a `synchronized static` method, and how does it work?",
        "answer": "A `synchronized static` method locks on the `Class` object of the class rather than an instance. This means that when a thread enters a synchronized static method, all other threads are blocked from accessing any other synchronized static methods in that class, even if they are called on different instances."
    },
    {
        "question": "What is the impact of synchronization on performance, and how can you minimize its overhead?",
        "answer": "Synchronization can introduce overhead by preventing multiple threads from accessing code concurrently, which can lead to reduced throughput and increased contention. To minimize its impact:<br>- Use synchronized blocks instead of methods to limit the scope of locking.<br>- Use alternatives like `ReentrantLock` for finer control.<br>- Avoid synchronizing read-only operations, and use volatile variables for simple visibility requirements."
    },
    {
        "question": "What is thread contention, and how does it relate to synchronization?",
        "answer": "**Thread contention** occurs when multiple threads try to acquire the same lock simultaneously, leading to waiting times and performance degradation. Synchronization often increases contention because it limits access to a critical section, forcing threads to wait until the lock is released."
    },
    {
        "question": "Can two threads access two different synchronized methods of the same object at the same time?",
        "answer": "No, if both methods are instance synchronized methods, they share the same object-level lock, so only one thread can access any synchronized method at a time. However, if the methods are synchronized on different objects or one is synchronized and the other is not, then two threads can access them simultaneously."
    },
    {
        "question": "What are the drawbacks of using `synchronized` excessively in a Java program?",
        "answer": "Excessive use of `synchronized` can lead to:<br>- **Performance Bottlenecks**: Reduces concurrency, as threads are forced to wait for locks, causing slower execution.<br>- **Increased Contention**: Causes threads to compete for locks, increasing CPU usage due to thread contention.<br>- **Potential for Deadlock**: More synchronization increases the risk of deadlock if not handled carefully.<br>- **Complexity and Readability**: Makes code harder to read and maintain, especially in complex applications."
    },
    {
        "question": "How does `volatile` differ from `synchronized`, and when would you use one over the other?",
        "answer": "<pre><b>volatile</b>: Ensures visibility of changes to a variable across threads but does not guarantee atomicity. It’s used for simple flags or variables that only need visibility guarantees.<br><b>synchronized</b>: Ensures both atomicity and visibility by locking access to a block or method. It’s used when you need to perform compound actions on shared data, ensuring that only one thread can modify it at a time.<br><b>Use Case</b>: Use `volatile` for single, independent variables that are read and written without dependencies, and `synchronized` for compound actions or when modifying multiple shared variables.</pre>"
    },
    {
        "question": "What is a race condition, and how can synchronization help prevent it?",
        "answer": "A **race condition** occurs when multiple threads read and write shared data in an unpredictable sequence, leading to incorrect or unexpected results. Synchronization prevents race conditions by locking access to shared resources, ensuring that only one thread can execute the synchronized code at a time, thus maintaining data consistency."
    },
    {
        "question": "Explain how `wait()`, `notify()`, and `notifyAll()` work in synchronized code.",
        "answer": "<pre><b>wait()</b>: Causes the current thread to wait until it is notified. It must be called from within a synchronized block and releases the lock on the object, allowing other threads to acquire it.<br><b>notify()</b>: Wakes up a single waiting thread on the object’s monitor. The awakened thread still needs to reacquire the lock.<br><b>notifyAll()</b>: Wakes up all waiting threads on the object’s monitor. Only one thread will proceed at a time, as each must acquire the lock.<br><b>Use Case</b>: These methods are used for inter-thread communication in synchronized blocks, allowing threads to coordinate their actions.</pre>"
    },
    {
        "question": "Why should you always call `wait()`, `notify()`, and `notifyAll()` within synchronized code?",
        "answer": "`wait()`, `notify()`, and `notifyAll()` must be called within a synchronized block because they require the calling thread to own the object’s monitor. This ensures that only threads holding the lock can call these methods, providing control over when threads can enter and exit the wait state and preventing IllegalMonitorStateException."
    },
    {
        "question": "Can you synchronize on a `String` object in Java? Why might this be problematic?",
        "answer": "Yes, you can synchronize on a `String` object, but it’s generally discouraged because `String` literals are interned and shared across the JVM. Synchronizing on a `String` literal can lead to unexpected synchronization conflicts, as multiple classes might unknowingly synchronize on the same literal."
    },
    {
        "question": "What is a `ConcurrentModificationException`, and can synchronization help prevent it?",
        "answer": "**`ConcurrentModificationException`** occurs when a collection is structurally modified while being iterated by another thread. Synchronization can help prevent this by ensuring that only one thread can modify or iterate the collection at a time. However, in concurrent applications, using a thread-safe collection like `CopyOnWriteArrayList` or a `ConcurrentHashMap` is often a better choice."
    }
]
,
"Static": [
       {
    "question": "What is a `static` variable in Java, and how does it differ from an instance variable?",
    "answer": "A `static` variable is associated with the class rather than instances of the class. It is shared by all instances and only one copy exists in memory, regardless of how many objects are created. An **instance variable**, on the other hand, is unique to each instance, with each object having its own copy."
},
{
    "question": "When is a `static` block executed in Java, and how does it differ from an instance initializer block?",
    "answer": "A `static` block is executed **once** when the class is loaded into memory, before any objects of that class are created. An instance initializer block, however, runs **every time** an instance of the class is created. `static` blocks are used to initialize `static` variables, whereas instance initializers can initialize instance variables."
},
{
    "question": "Can you call a non-static method from a static method? Why or why not?",
    "answer": "No, you cannot directly call a non-static method from a static method because non-static methods require an instance of the class to operate on, while static methods belong to the class itself and don’t have access to instance variables or methods. However, you can call a non-static method from a static method by creating an instance of the class and then invoking the non-static method on that instance."
},
{
    "question": "What happens if you declare the `main` method as non-static? Will it compile?",
    "answer": "If you declare the `main` method as non-static, the program will **compile** but will not run. The Java runtime looks specifically for a `public static void main(String[] args)` method to start execution. Without `static`, the JVM cannot invoke `main` without creating an instance of the class, which is not part of its contract."
},
{
    "question": "Can a `static` method access `this` or `super` keywords? Why or why not?",
    "answer": "No, a `static` method cannot access `this` or `super` because `this` refers to the current instance and `super` refers to the superclass of the current instance. Since static methods do not operate on instances and belong to the class itself, there is no instance context available, making `this` and `super` irrelevant."
},
{
    "question": "What is a `static` nested class, and how does it differ from an inner (non-static nested) class?",
    "answer": "A `static` nested class is a nested class that does not require an instance of the enclosing class to be created. It can access only `static` members of the outer class. A **non-static (inner) nested class**, on the other hand, has access to all members (including non-static ones) of the outer class and requires an instance of the outer class to be instantiated."
},
{
    "question": "What is the difference between `static final` and `final static` variables in Java?",
    "answer": "There is no difference between `static final` and `final static` in Java. The order of the modifiers does not matter; both declare a constant variable that is associated with the class rather than instances. The `final` keyword makes the variable immutable, while `static` associates it with the class."
},
{
    "question": "What is a `static` import, and when would you use it?",
    "answer": "A `static` import allows you to import `static` members (fields and methods) of a class so that you can use them without qualifying them with the class name. It is useful for improving readability when frequently using `static` members (e.g., `Math.PI` or `System.out`). However, overuse can reduce code clarity and make it harder to understand where methods or variables are coming from."
},
{
    "question": "What happens if you assign a value to a `static` variable in one instance and then access it from another instance?",
    "answer": "Since a `static` variable is shared among all instances of a class, assigning a value to it in one instance will affect the value seen by all other instances. When you access the `static` variable from another instance, you will get the last assigned value, as there is only one shared copy."
},
{
    "question": "Can you override a `static` method in Java? Explain why or why not.",
    "answer": "No, you cannot override a `static` method in Java. `static` methods belong to the class, not instances, so they are not part of the polymorphic behavior. If you declare a `static` method in a subclass with the same signature as a `static` method in the superclass, it is called **method hiding**, not overriding."
},
{
    "question": "Explain how `static` blocks are initialized in inheritance hierarchies.",
    "answer": "In an inheritance hierarchy, `static` blocks are initialized from the superclass down to the subclass. The `static` block in the superclass runs first, followed by `static` blocks in each subclass, in the order of inheritance. This initialization order ensures that all `static` fields and blocks are initialized before any subclass logic or instance creation."
},
{
    "question": "Can you declare a `static` method in an interface? If so, when would you use it?",
    "answer": "Yes, since Java 8, you can declare `static` methods in interfaces. A `static` method in an interface is useful for utility or helper methods that operate only on the interface level and do not depend on any instance of the implementing class. This allows you to define utility methods related to the interface without requiring an external utility class."
},
{
    "question": "What happens if you initialize a `static final` variable in a `static` block?",
    "answer": "A `static final` variable can be initialized in a `static` block if it is not already initialized at the point of declaration. This can be useful for initializing complex constants that require logic or external data. Once initialized in the `static` block, the `static final` variable cannot be modified."
},
{
    "question": "Explain the memory location of `static` variables in Java.",
    "answer": "`static` variables are stored in the **method area** of the JVM’s memory, which is shared across all instances of the class. This contrasts with instance variables, which are stored in the heap. The method area (or metaspace in Java 8 and later) holds class-level data, such as `static` variables, method information, and class metadata."
},
{
    "question": "How can `static` variables lead to memory leaks in Java?",
    "answer": "`Static` variables are associated with the class and persist for the entire application lifetime. If they reference large objects or objects that hold onto resources, they will not be garbage-collected, potentially leading to memory leaks. Memory leaks can occur if a `static` variable holds onto references that are no longer needed, preventing their memory from being reclaimed."
},
{
    "question": "What is a `static` method reference, and how would you use it with Java streams?",
    "answer": "A `static` method reference is a shorthand way of passing a `static` method as a lambda expression. It is written as `ClassName::methodName`. With Java Streams, you can use `static` method references for operations like mapping or filtering.<br><br>**Example**:<br><pre><code>List<String> strings = Arrays.asList(\"a\", \"b\", \"c\");<br>List<String> uppercased = strings.stream().map(String::toUpperCase).collect(Collectors.toList());</code></pre>"
},
{
    "question": "Can a `static` method access a non-static variable or call a non-static method? Why or why not?",
    "answer": "No, a `static` method cannot directly access a non-static variable or call a non-static method because `static` methods belong to the class, not an instance. Non-static variables and methods require an instance to be accessed. However, a `static` method can create an instance of the class and then use that instance to access non-static members."
},
{
    "question": "Explain the purpose of the `static` modifier in nested interfaces and enums within classes.",
    "answer": "By default, nested interfaces and enums within a class are implicitly `static`. This means they can be accessed without an instance of the outer class. The `static` nature ensures that they behave independently of any specific instance of the enclosing class, similar to `static` nested classes."
},
{
    "question": "What are the risks of using `static` variables in multi-threaded applications?",
    "answer": "`Static` variables are shared across all instances of a class, making them accessible to all threads. If multiple threads access or modify a `static` variable concurrently without proper synchronization, it can lead to **data inconsistency** and **race conditions**. To avoid this, `static` variables should be used carefully in multi-threaded contexts, often with synchronization mechanisms like `synchronized` blocks or `Atomic` classes."
},
{
    "question": "What is a `static` singleton pattern, and how does it work?",
    "answer": "The `static` singleton pattern ensures that a class has only one instance and provides global access to it. One common way to implement it is by creating a `static` instance variable initialized at class loading.<br><br><pre><code>public class Singleton {<br>    private static final Singleton INSTANCE = new Singleton();<br>    private Singleton() {}<br>    public static Singleton getInstance() {<br>        return INSTANCE;<br>    }<br>}</code></pre><br>**Explanation**: The `static` variable `INSTANCE` holds the single instance of `Singleton`, and since it’s `final`, it cannot be changed. The `getInstance()` method provides access to this single instance."
},
{
    "question": "How does `static` keyword differ in a `static` method in an interface vs. a `default` method?",
    "answer": "<pre><b>`static` method</b> in an interface can only be accessed through the interface itself and not through an instance of the implementing class. It’s typically used for utility functions related to the interface.<br><b>`default` method</b> in an interface can be called on an instance of the implementing class. It provides a default implementation for classes that implement the interface but do not override this method.</pre>"
},
{
    "question": "Can you use `static` in a generic class? If so, are there any limitations?",
    "answer": "Yes, you can use `static` in a generic class, but you cannot use the generic type parameter in a `static` context.<br><br>**Example**:<br><pre><code>public class MyClass<T> {<br>    private static T value; // This will cause a compilation error<br>}</code></pre><br>**Explanation**: Static members belong to the class rather than any specific instance, so there’s no way to know what `T` is at the class level due to **type erasure**."
},
{
    "question": "What is the initialization order of `static` variables, instance variables, `static` blocks, and instance blocks?",
    "answer": "The initialization order in Java is:<br>1. `Static` variables and `static` blocks are initialized in the order they appear in the class (from top to bottom) when the class is first loaded.<br>2. Instance variables and instance blocks are initialized in the order they appear each time a new instance is created, before the constructor runs.<br>3. Finally, the constructor is executed after instance variables and blocks are initialized."
},
{
    "question": "Can you declare a `static` local variable inside a method? Why or why not?",
    "answer": "No, you cannot declare a `static` local variable inside a method in Java. `Static` variables belong to the class level, while local variables exist only within the method’s stack frame and are discarded after the method completes. `static` cannot be applied to local variables due to this conflict in scope."
},
{
    "question": "What are the benefits and potential downsides of using `static` imports?",
    "answer": "<pre><b>Benefits</b>: `Static` imports improve readability and conciseness by allowing you to use `static` members without class qualification (e.g., using `PI` instead of `Math.PI`).<br><b>Downsides</b>: Overusing `static` imports can lead to ambiguity, especially if two classes have `static` members with the same name, and can reduce code clarity by making it harder to identify where certain methods or variables come from.</pre>"
}

 
    ],
"Comparable": [
        {
    "question": "What is the `Comparable` interface, and why is it used in Java?",
    "answer": "`Comparable` is an interface used to define the natural ordering of objects. It has a single method, `compareTo(T o)`, which allows objects to be compared to each other. By implementing `Comparable`, a class can define its own sorting order, enabling instances of that class to be sorted using `Collections.sort()` or used in sorted collections like `TreeSet` or `TreeMap`."
},
{
    "question": "How does `compareTo()` differ from `equals()`?",
    "answer": "<pre><b>`compareTo()`</b>: Defines the natural ordering of objects and returns an integer (< 0, 0, or > 0) to indicate whether the current object is less than, equal to, or greater than the specified object.<br><b>`equals()`</b>: Checks for structural equality and returns a boolean to indicate whether two objects are logically equal.<br><b>Note</b>: Two objects may be \"equal\" according to `compareTo()` (i.e., `compareTo()` returns 0), but not equal according to `equals()`, and vice versa.</pre>"
},
{
    "question": "Can `compareTo()` and `equals()` methods be inconsistent? What are the consequences if they are?",
    "answer": "Yes, `compareTo()` and `equals()` can be inconsistent if they define equality differently. Inconsistent implementations can lead to unexpected behavior in sorted collections (e.g., `TreeSet`, `TreeMap`) where elements are added based on `compareTo()` but may still be considered unequal by `equals()`. Best practice is to ensure that `compareTo()` returns 0 if and only if `equals()` returns `true`."
},
{
    "question": "What will happen if you have a `null` object when using `compareTo()`?",
    "answer": "`compareTo()` should not be called with a `null` argument, as it will throw a `NullPointerException`. The `Comparable` interface assumes that the compared objects are non-null. To handle `null` values, use a `Comparator` with `Comparator.nullsFirst()` or `Comparator.nullsLast()`."
},
{
    "question": "How would you implement `compareTo()` to sort strings first by length and then alphabetically?",
    "answer": "<pre>In `compareTo()`, first compare by length, then by natural string comparison if lengths are equal.<br><code>public int compareTo(MyString other) {<br>    int lengthComparison = Integer.compare(this.str.length(), other.str.length());<br>    return lengthComparison != 0 ? lengthComparison : this.str.compareTo(other.str);<br>}</code><br><b>Explanation</b>: This first sorts by length, and if lengths are the same, it falls back to natural alphabetical order.</pre>"
},
{
    "question": "How does `compareTo()` handle primitive types, and how can autoboxing affect its performance?",
    "answer": "When `compareTo()` is used with primitive types like `int` or `double` in wrapper classes (`Integer`, `Double`), autoboxing occurs, which can slightly degrade performance due to the extra overhead. For high-performance needs, use the primitive comparison methods like `Integer.compare(int x, int y)` and `Double.compare(double d1, double d2)`."
},
{
    "question": "How would you write a `compareTo()` method for a class with multiple fields, like sorting a `Person` class by age, then by last name, and then by first name?",
    "answer": "<pre>Implement `compareTo()` with sequential comparisons, starting with the primary field (age), followed by secondary fields.<br><code>public int compareTo(Person other) {<br>    int ageComparison = Integer.compare(this.age, other.age);<br>    if (ageComparison != 0) return ageComparison;<br><br>    int lastNameComparison = this.lastName.compareTo(other.lastName);<br>    if (lastNameComparison != 0) return lastNameComparison;<br><br>    return this.firstName.compareTo(other.firstName);<br>}</code><br><b>Explanation</b>: This sorts by age first; if ages are equal, it sorts by last name, and if last names are also equal, it sorts by first name.</pre>"
},
{
    "question": "What is the general contract of the `compareTo()` method, and why is it important to follow it?",
    "answer": "<pre>The contract of `compareTo()` states:<br>- If `x.compareTo(y) < 0`, then `y.compareTo(x) > 0`.<br>- If `x.compareTo(y) == 0`, then `y.compareTo(x) == 0`.<br>- If `x.compareTo(y) > 0`, then `y.compareTo(x) < 0`.<br>- `compareTo()` should be transitive: if `x.compareTo(y) > 0` and `y.compareTo(z) > 0`, then `x.compareTo(z) > 0`.<br>- Consistency with `equals()` (best practice).<br><b>Importance</b>: Violating these rules can lead to unpredictable behavior in sorted collections, such as incorrect orderings or runtime exceptions.</pre>"
},
{
    "question": "What exceptions can `compareTo()` throw, and how should you handle them?",
    "answer": "<pre><b>`NullPointerException`</b>: If `compareTo()` is called with a `null` argument.<br><b>`ClassCastException`</b>: If objects of incompatible types are compared.<br><b>Handling</b>: Avoid `NullPointerException` by using non-null values or handling `null` externally. To avoid `ClassCastException`, ensure that `compareTo()` is only called on compatible types by type-checking or implementing generic type constraints.</pre>"
},
{
    "question": "How would you handle sorting if you want natural ordering for a class, but with custom secondary ordering logic?",
    "answer": "Implement `Comparable` for the primary natural ordering, then use `Comparator` chaining to add secondary criteria if needed. You can also combine `Comparable` and a comparator for flexible sorting:<br><pre><code>Comparator<MyClass> customComparator = Comparator.naturalOrder()<br>                                                      .thenComparing(MyClass::getSecondaryField);</code></pre>"
},
{
    "question": "How can you use `Comparable` to sort in descending order?",
    "answer": "`Comparable` itself does not support descending order directly, as it defines a single natural ordering. For descending order, wrap the `Comparable` object in `Collections.reverseOrder()` or use a `Comparator` like `Comparator.reverseOrder()`."
},
{
    "question": "What happens if two `Comparable` objects compare as equal (i.e., `compareTo()` returns 0)?",
    "answer": "If `compareTo()` returns 0, the objects are treated as \"equal\" in the context of sorting or sorted collections (e.g., `TreeSet`). However, they may not necessarily be `equal` according to `equals()`. In sorted collections, duplicate elements may be ignored if `compareTo()` returns 0."
},
{
    "question": "How does the `compareTo()` method affect `TreeSet` or `TreeMap`?",
    "answer": "`TreeSet` and `TreeMap` use `compareTo()` to maintain sorted order. The `compareTo()` method must be consistent with `equals()` to prevent duplicate entries. If two elements compare as equal (i.e., `compareTo()` returns 0), `TreeSet` or `TreeMap` will treat them as duplicates and only keep one entry."
},
{
    "question": "Can `compareTo()` be used to compare heterogeneous types?",
    "answer": "Generally, `compareTo()` is not intended for heterogeneous types, as it will throw a `ClassCastException` if incompatible types are compared. However, if needed, you can implement a custom `Comparator` with `instanceof` checks to handle specific cases, though this is not common practice."
},
{
    "question": "How would you implement `compareTo()` for a class that allows null fields?",
    "answer": "<pre>Use conditional logic to handle `null` fields, comparing them as either greater or less than non-null values (usually considering `null` as smaller or larger based on requirements).<br><code>public int compareTo(MyClass other) {<br>    if (this.field == null && other.field == null) return 0;<br>    if (this.field == null) return -1;<br>    if (other.field == null) return 1;<br>    return this.field.compareTo(other.field);<br>}</code><br><b>Explanation</b>: This treats `null` as smaller than any non-null value, ensuring `compareTo()` can handle `null` fields without throwing `NullPointerException`.</pre>"
},
{
    "question": "Can `compareTo()` return any integer value, or should it be limited to -1, 0, and 1?",
    "answer": "`compareTo()` can return any integer value, not just -1, 0, or 1. The contract only requires that:<br>- A negative number indicates \"less than.\"<br>- Zero indicates \"equal.\"<br>- A positive number indicates \"greater than.\"<br>Returning -1, 0, or 1 is common practice but not required."
},
{
    "question": "How would you implement `compareTo()` for a class with multiple fields, where some fields are optional (i.e., could be null)?",
    "answer": "<pre>Implement `compareTo()` by comparing non-null fields first, then handle null fields using conditional checks.<br><code>public int compareTo(MyClass other) {<br>    if (this.primaryField != null && other.primaryField != null) {<br>        int primaryComparison = this.primaryField.compareTo(other.primaryField);<br>        if (primaryComparison != 0) return primaryComparison;<br>    } else if (this.primaryField != null) {<br>        return 1;<br>    } else if (other.primaryField != null) {<br>        return -1;<br>    }<br>    // Continue with secondary fields...<br>}</code><br><b>Explanation</b>: This compares the primary field if non-null, then considers null values. Subsequent fields can be compared in a similar manner.</pre>"
},
{
    "question": "Why is it important for `compareTo()` to be transitive, and what happens if it’s not?",
    "answer": "Transitivity in `compareTo()` ensures consistent ordering in sorted collections. If transitivity is violated, sorted collections like `TreeSet` or `TreeMap` may produce unpredictable results, potentially failing to maintain order or even causing infinite loops during insertion or deletion."
},
{
    "question": "How would you implement a `compareTo()` method that performs a case-insensitive comparison of strings?",
    "answer": "<pre>Use `String.compareToIgnoreCase()` in `compareTo()` to perform a case-insensitive comparison.<br><code>public int compareTo(MyClass other) {<br>    return this.myString.compareToIgnoreCase(other.myString);<br>}</code></pre>"
},
{
    "question": "How can `compareTo()` impact performance, and what optimizations can you apply in a complex `compareTo()` implementation?",
    "answer": "<pre><b>Impact on Performance</b>: If `compareTo()` is complex (e.g., it compares multiple fields), it can slow down sorting or insertion in sorted collections.<br><b>Optimizations</b>:<br>- Compare only necessary fields in sequence, stopping as soon as a non-zero result is found.<br>- Use `Comparator.comparingInt` or `Comparator.comparingDouble` for primitive fields to avoid boxing overhead.<br>- Minimize repeated calculations or method calls within `compareTo()` to reduce computation time.</pre>"
}

    ],
"Comparator": [
        {
    "question": "What is the difference between `Comparable` and `Comparator` in Java, and when should you use each?",
    "answer": "<pre><b>`Comparable`</b>: Used for natural ordering of objects. A class implements `Comparable` to define its default ordering by overriding the `compareTo` method.<br><b>`Comparator`</b>: Used for custom ordering. `Comparator` is a functional interface that allows defining multiple sorting orders outside of the class.<br><b>When to Use</b>:<br>- Use `Comparable` when there is a natural, default way to compare instances (e.g., numbers or strings).<br>- Use `Comparator` for multiple sorting options, or when the class can’t or shouldn’t implement `Comparable`.</pre>"
},
{
    "question": "How would you write a `Comparator` to sort strings by their length in ascending order?",
    "answer": "<pre>You can use a lambda expression to create a `Comparator` that compares strings by their length:<br><code>Comparator<String> lengthComparator = (s1, s2) -> Integer.compare(s1.length(), s2.length());</code><br><b>Explanation</b>: This comparator compares two strings based on their lengths, returning a positive, negative, or zero based on the comparison.</pre>"
},
{
    "question": "What is comparator chaining, and how would you implement it in Java?",
    "answer": "<pre>Comparator chaining allows you to combine multiple comparators to sort by multiple criteria in a specific order.<br><b>Example</b>: To sort by age, then by name if ages are equal:<br><code>Comparator<Person> chainedComparator = Comparator.comparing(Person::getAge).thenComparing(Person::getName);</code><br><b>Explanation</b>: This sorts `Person` objects first by age and then by name in case of age ties.</pre>"
},
{
    "question": "What are the default methods in `Comparator` introduced in Java 8, and how do they work?",
    "answer": "<pre>Java 8 introduced several default methods in `Comparator`:<br>- <b>`thenComparing`</b>: Used for comparator chaining, allowing sorting by multiple criteria.<br>- <b>`reversed`</b>: Returns a comparator that reverses the order of the current comparator.<br>- <b>`nullsFirst` and `nullsLast`</b>: Handle `null` values by defining whether they should appear at the beginning or end of the sorted order.</pre>"
},
{
    "question": "How would you write a `Comparator` to handle null values so that nulls come last in the sorted order?",
    "answer": "<pre>Use `Comparator.nullsLast()` to create a comparator that places `null` values at the end.<br><code>Comparator<String> nullLastComparator = Comparator.nullsLast(String::compareTo);</code><br><b>Explanation</b>: This comparator will sort non-null strings in natural order and place all `null` values at the end.</pre>"
},
{
    "question": "What happens if you pass `null` to a `Comparator` that does not handle null values?",
    "answer": "If `null` is passed to a `Comparator` that doesn’t handle `null`, a `NullPointerException` will be thrown when the comparator attempts to compare `null` with a non-null value. To avoid this, use `Comparator.nullsFirst()` or `Comparator.nullsLast()` to define explicit handling for `null` values."
},
{
    "question": "Can `Comparator` be used to compare heterogeneous objects (objects of different types)?",
    "answer": "No, `Comparator` is generally intended for homogeneous objects, as comparing heterogeneous objects usually doesn’t make sense and would lead to `ClassCastException`. However, a custom `Comparator` could handle different types by using `instanceof` checks, though this is rarely practical or recommended."
},
{
    "question": "How would you implement a `Comparator` to sort a list of employees by department in ascending order and then by salary in descending order within each department?",
    "answer": "<pre>Use `Comparator.comparing()` with `thenComparing` and `reversed` for secondary sorting.<br><code>Comparator<Employee> comparator = Comparator.comparing(Employee::getDepartment).thenComparing(Comparator.comparing(Employee::getSalary).reversed());</code><br><b>Explanation</b>: This sorts employees by department in ascending order and, within each department, by salary in descending order.</pre>"
},
{
    "question": "What is a `Comparator` factory method, and how would you create a comparator using one in Java 8?",
    "answer": "<pre>A `Comparator` factory method (e.g., `Comparator.comparing()`) creates comparators based on a specific property or method reference.<br><b>Example</b>:<br><code>Comparator<Person> ageComparator = Comparator.comparing(Person::getAge);</code><br><b>Explanation</b>: `Comparator.comparing()` is a factory method that generates a comparator for a specific property, simplifying the comparator creation process.</pre>"
},
{
    "question": "How would you create a case-insensitive comparator for sorting strings?",
    "answer": "<pre>Use `String.CASE_INSENSITIVE_ORDER` or create a custom comparator that ignores case.<br><code>Comparator<String> caseInsensitiveComparator = String.CASE_INSENSITIVE_ORDER;</code><br><b>Explanation</b>: `String.CASE_INSENSITIVE_ORDER` is a predefined comparator that compares strings without regard to case differences.</pre>"
},
{
    "question": "Explain the difference between `Comparator.naturalOrder()` and `Comparator.reverseOrder()`.",
    "answer": "<pre><b>`Comparator.naturalOrder()`</b>: Returns a comparator that sorts in **natural order** (e.g., ascending order for numbers, alphabetical for strings).<br><b>`Comparator.reverseOrder()`</b>: Returns a comparator that sorts in **reverse of natural order** (e.g., descending for numbers or reverse alphabetical for strings).</pre>"
},
{
    "question": "How can you use `Comparator.comparingInt` to optimize sorting for primitive int values?",
    "answer": "<pre>`Comparator.comparingInt` is a specialized method for `int` values, avoiding boxing and unboxing, which improves performance.<br><code>Comparator<Person> ageComparator = Comparator.comparingInt(Person::getAge);</code><br><b>Explanation</b>: `comparingInt` directly compares `int` values without autoboxing, making it more efficient than `Comparator.comparing()` for primitive types.</pre>"
},
{
    "question": "How does `Comparator` chaining work with three or more fields, and can you provide an example?",
    "answer": "<pre>You can chain multiple comparators with `thenComparing` to create a multi-level sort.<br><b>Example</b>: Sorting by last name, then first name, and then age.<br><code>Comparator<Person> multiFieldComparator = Comparator.comparing(Person::getLastName).thenComparing(Person::getFirstName).thenComparingInt(Person::getAge);</code><br><b>Explanation</b>: The comparator sorts by last name first; if last names are equal, it then sorts by first name, and finally by age if both names are equal.</pre>"
},
{
    "question": "How would you sort a list of `Integer` values in descending order using `Comparator`?",
    "answer": "<pre>Use `Comparator.reverseOrder()` to sort in descending order.<br><code>Comparator<Integer> descendingComparator = Comparator.reverseOrder();<br>Collections.sort(list, descendingComparator);</code><br><b>Explanation</b>: `reverseOrder()` provides a comparator that sorts integers in descending order.</pre>"
},
{
    "question": "What is the purpose of `Comparator.comparingDouble()` and how does it handle floating-point comparisons?",
    "answer": "<pre>`Comparator.comparingDouble()` is a specialized method for comparing `double` values directly, avoiding boxing and unboxing.<br><b>Usage</b>:<br><code>Comparator<Product> priceComparator = Comparator.comparingDouble(Product::getPrice);</code><br><b>Explanation</b>: `comparingDouble` handles `double` values efficiently, avoiding autoboxing and issues with NaN values by following Java’s floating-point comparison rules.</pre>"
},
{
    "question": "Can you use `Comparator` with collections of primitive types (e.g., `int[]`)?",
    "answer": "No, `Comparator` is designed to work with objects, not primitive types like `int`. To sort arrays of primitives, use `Arrays.sort()` directly. If you need to sort `int[]` by custom logic, convert it to an `Integer[]` or a `List<Integer>`."
},
{
    "question": "How would you write a comparator that sorts a list of strings by the number of vowels they contain?",
    "answer": "<pre>Define a comparator that counts vowels and sorts based on the count.<br><code>Comparator<String> vowelComparator = Comparator.comparingInt(s -> s.replaceAll(\"[^aeiouAEIOU]\", \"\").length());</code><br><b>Explanation</b>: This comparator calculates the number of vowels in each string and sorts strings by this count in ascending order.</pre>"
},
{
    "question": "What happens if you reverse an already reversed comparator?",
    "answer": "Reversing an already reversed comparator restores the original order. For example, `Comparator.reverseOrder().reversed()` is equivalent to `Comparator.naturalOrder()`."
},
{
    "question": "How would you sort a list of strings by length in ascending order, but in descending alphabetical order if lengths are equal?",
    "answer": "<pre>Use `Comparator.comparingInt` for length, followed by `thenComparing` with `Comparator.reverseOrder()` for alphabetical order.<br><code>Comparator<String> lengthThenAlphaComparator = Comparator.comparingInt(String::length).thenComparing(Comparator.reverseOrder());</code><br><b>Explanation</b>: This comparator sorts strings by length in ascending order, and for equal lengths, it sorts them alphabetically in descending order.</pre>"
},
{
    "question": "How does the `thenComparing` method impact performance when chained multiple times?",
    "answer": "Each call to `thenComparing` adds another level of comparison, potentially increasing the number of comparisons needed. If heavily chained, performance can degrade, especially for large datasets, as each `thenComparing` adds an additional conditional check."
}

    ],
"Set": [
        {
    "question": "How does `HashSet` ensure uniqueness of elements?",
    "answer": "`HashSet` uses a `HashMap` internally to store elements as keys with a constant dummy value. When adding an element, `HashSet` uses `hashCode()` and `equals()` to check if the element already exists. If an element with the same hash and equality exists, it does not add it, ensuring uniqueness."
},
{
    "question": "What is the time complexity of adding, removing, and checking if an element exists in a `HashSet`?",
    "answer": "<pre><b>Average Case</b>: O(1) for add, remove, and contains, as `HashSet` is backed by a hash table.<br><b>Worst Case</b>: O(n) in the event of excessive hash collisions, where all elements fall into the same bucket. From Java 8 onwards, if a bucket contains many elements, it is converted to a balanced tree, reducing worst-case complexity to O(log n).</pre>"
},
{
    "question": "How does `HashSet` handle `null` values, and can you store multiple `null` values in a `HashSet`?",
    "answer": "`HashSet` allows a single `null` value. When a `null` value is added, the `HashSet` directly checks for `null` without calculating a hash code, allowing it to store one `null` without issues."
},
{
    "question": "Explain `HashSet`’s internal structure and how it resolves hash collisions.",
    "answer": "`HashSet` uses a `HashMap` where elements are stored as keys with a constant dummy value. Hash collisions are resolved using **separate chaining** (linked lists) within buckets. In Java 8 and later, linked lists are converted into balanced binary trees (red-black trees) if a bucket contains too many elements."
},
{
    "question": "Why should `hashCode()` and `equals()` be overridden when using custom objects in a `HashSet`?",
    "answer": "`HashSet` relies on `hashCode()` for hashing and `equals()` for equality checking. If these methods aren’t overridden, `HashSet` will use default implementations, which may not work correctly for logical equality. Overriding `hashCode()` and `equals()` ensures proper functionality and uniqueness of custom objects."
},
{
    "question": "What will happen if two different objects have the same `hashCode()` in a `HashSet`?",
    "answer": "If two objects have the same `hashCode()`, they are stored in the same bucket due to a hash collision. The `HashSet` then uses `equals()` to check if they are actually equal. If `equals()` returns `false`, both objects are stored in the bucket as separate entries."
},
{
    "question": "What happens if `equals()` is overridden but `hashCode()` is not, or vice versa, in a `HashSet`?",
    "answer": "<pre><b>If only `equals()` is overridden</b>: Objects may end up in different buckets, causing the `HashSet` to fail in identifying duplicates.<br><b>If only `hashCode()` is overridden</b>: Objects with the same hash code will be placed in the same bucket, but `HashSet` may allow duplicates if `equals()` doesn’t identify them as equal.</pre>"
},
{
    "question": "How would you remove duplicate elements from a list using a `HashSet`?",
    "answer": "<pre>Convert the list to a `HashSet`, which removes duplicates, then convert it back to a list if needed:<br><code>List<Integer> list = Arrays.asList(1, 2, 2, 3, 4, 4);<br>Set<Integer> set = new HashSet<>(list);<br>list = new ArrayList<>(set); // Duplicates removed</code></pre>"
},
{
    "question": "Explain `ConcurrentModificationException` in the context of `HashSet`.",
    "answer": "`HashSet`’s iterator is **fail-fast**, meaning it throws a `ConcurrentModificationException` if the set is structurally modified outside of the iterator during iteration (e.g., adding or removing elements). This behavior is intended to prevent undefined behavior from concurrent modifications."
},
{
    "question": "Why doesn’t `HashSet` maintain any order of elements, and how is it different from `LinkedHashSet`?",
    "answer": "`HashSet` does not maintain order because it stores elements based on their hash codes, not their insertion order. `LinkedHashSet`, on the other hand, maintains insertion order by using a linked list in addition to the hash table."
},
{
    "question": "How does `TreeSet` maintain sorted order, and what data structure does it use internally?",
    "answer": "`TreeSet` maintains sorted order by using a **Red-Black Tree** (a self-balancing binary search tree) internally. It organizes elements based on their natural ordering or a custom comparator, ensuring O(log n) performance for add, remove, and lookup operations."
},
{
    "question": "Can `TreeSet` store `null` values? Why or why not?",
    "answer": "`TreeSet` does not allow `null` values because it uses comparisons to maintain order, and `null` cannot be compared with other elements, which would throw a `NullPointerException`."
},
{
    "question": "What is the time complexity of basic operations like add, remove, and contains in a `TreeSet`?",
    "answer": "All basic operations (`add`, `remove`, and `contains`) in a `TreeSet` have a time complexity of **O(log n)** due to the Red-Black Tree structure, which balances itself to maintain efficient performance."
},
{
    "question": "How would you retrieve the smallest and largest elements from a `TreeSet`?",
    "answer": "<pre><b>Smallest Element</b>: Use `first()` to get the smallest element.<br><code>E smallest = treeSet.first();</code><br><b>Largest Element</b>: Use `last()` to get the largest element.<br><code>E largest = treeSet.last();</code></pre>"
},
{
    "question": "What will happen if you try to add a duplicate element to a `TreeSet`?",
    "answer": "`TreeSet` does not allow duplicate elements. If you attempt to add an element that is already in the set (determined by natural ordering or comparator), the set ignores the new element, and it does not throw an exception."
},
{
    "question": "How does `TreeSet` handle custom objects, and what must be implemented for custom objects to work properly in a `TreeSet`?",
    "answer": "`TreeSet` requires custom objects to implement `Comparable` or be provided with a `Comparator` to define a natural order. Without a comparator or `Comparable`, adding elements will result in a `ClassCastException`."
},
{
    "question": "What is the difference between `HashSet` and `TreeSet` in terms of ordering, performance, and usage?",
    "answer": "<pre><b>Ordering</b>: `HashSet` has no ordering, while `TreeSet` maintains sorted order.<br><b>Performance</b>: `HashSet` has O(1) for most operations, while `TreeSet` has O(log n) due to its tree structure.<br><b>Usage</b>: Use `HashSet` when ordering is not required, and `TreeSet` when sorted order is needed.</pre>"
},
{
    "question": "How would you create a case-insensitive `TreeSet` of strings?",
    "answer": "<pre>Create a `TreeSet` with a custom comparator that ignores case when comparing strings:<br><code>TreeSet<String> caseInsensitiveSet = new TreeSet<>(String.CASE_INSENSITIVE_ORDER);</code></pre>"
},
{
    "question": "How does `TreeSet` determine the equality of two elements? Is it based on `equals()` or comparison?",
    "answer": "`TreeSet` determines equality based on comparison (using `compareTo()` from `Comparable` or a provided `Comparator`), not `equals()`. If `compareTo()` or `Comparator.compare()` considers two elements equal (returns 0), only one will be stored, even if `equals()` would consider them different."
},
{
    "question": "Explain `subSet()`, `headSet()`, and `tailSet()` methods in `TreeSet`.",
    "answer": "<pre><b>`subSet(fromElement, toElement)`</b>: Returns a view of the portion of the set from `fromElement` (inclusive) to `toElement` (exclusive).<br><b>`headSet(toElement)`</b>: Returns a view of the set containing elements strictly less than `toElement`.<br><b>`tailSet(fromElement)`</b>: Returns a view of the set containing elements greater than or equal to `fromElement`.<br><b>Example</b>:<br><code>TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 2, 3, 4, 5));<br>SortedSet<Integer> subSet = set.subSet(2, 4); // Contains 2, 3</code></pre>"
},
{
    "question": "What will happen if you add `null` to a `TreeSet` with a custom comparator?",
    "answer": "Even with a custom comparator, `TreeSet` will throw a `NullPointerException` if `null` is added because comparisons with `null` are not allowed in `TreeSet`."
},
{
    "question": "How would you find the element just greater than or just less than a given element in a `TreeSet`?",
    "answer": "<pre><b>Just Greater</b>: Use `higher(element)` to get the smallest element strictly greater than the given element.<br><code>Integer justGreater = treeSet.higher(element);</code><br><b>Just Less</b>: Use `lower(element)` to get the largest element strictly less than the given element.<br><code>Integer justLess = treeSet.lower(element);</code></pre>"
},
{
    "question": "Why doesn’t `TreeSet` allow heterogeneous elements (elements of different types)?",
    "answer": "`TreeSet` requires all elements to be mutually comparable to maintain order. Inserting heterogeneous elements can lead to `ClassCastException` because the comparator (or `compareTo()` method) would not be able to handle different types consistently."
},
{
    "question": "How would you convert a `HashSet` to a `TreeSet`?",
    "answer": "<pre>Pass the `HashSet` as an argument to the `TreeSet` constructor:<br><code>HashSet<Integer> hashSet = new HashSet<>(Arrays.asList(3, 1, 2));<br>TreeSet<Integer> treeSet = new TreeSet<>(hashSet); // TreeSet will be sorted</code></pre>"
},
{
    "question": "Can you retrieve an element by index in a `TreeSet`?",
    "answer": "No, `TreeSet` does not provide direct access by index. You must iterate through the set to reach a specific position or use navigational methods (like `first()`, `last()`, `higher()`, `lower()`, etc.)."
},
{
    "question": "How would you implement a reverse-order `TreeSet`?",
    "answer": "<pre>Create a `TreeSet` with `Collections.reverseOrder()` as the comparator:<br><code>TreeSet<Integer> reverseTreeSet = new TreeSet<>(Collections.reverseOrder());</code></pre>"
},
{
    "question": "What are `ceiling()`, `floor()`, `higher()`, and `lower()` methods in `TreeSet`?",
    "answer": "<pre><b>`ceiling(element)`</b>: Returns the least element greater than or equal to `element`.<br><b>`floor(element)`</b>: Returns the greatest element less than or equal to `element`.<br><b>`higher(element)`</b>: Returns the least element strictly greater than `element`.<br><b>`lower(element)`</b>: Returns the greatest element strictly less than `element`.</pre>"
},
{
    "question": "What is the difference between `LinkedHashSet` and `TreeSet`?",
    "answer": "<pre><b>Ordering</b>: `LinkedHashSet` maintains insertion order, while `TreeSet` maintains sorted order.<br><b>Performance</b>: `LinkedHashSet` has O(1) performance for basic operations, while `TreeSet` has O(log n) due to its tree structure.</pre>"
},
{
    "question": "How does `TreeSet` behave when initialized with a `Comparator` that returns 0 for two non-equal elements?",
    "answer": "`TreeSet` treats elements as duplicates if the comparator returns 0, even if they are not `equals()`. Only one of the elements will be stored, as the set considers them equal based on the comparator."
},
{
    "question": "How would you remove a range of elements from a `TreeSet`?",
    "answer": "<pre>Use `subSet(fromElement, toElement).clear()` to remove elements in the specified range.<br><code>TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 2, 3, 4, 5));<br>set.subSet(2, 4).clear(); // Removes elements 2 and 3</code></pre>"
}

    ],
"TreeMap": [
        {
    "question": "How does `TreeMap` differ from `HashMap` in terms of ordering and performance?",
    "answer": "<pre><b>Ordering</b>: `TreeMap` maintains entries in <b>sorted order</b> based on the natural ordering of keys or a custom comparator, while `HashMap` has no ordering guarantee.<br><b>Performance</b>:<br>- `TreeMap` operations (`get`, `put`, `remove`) have a time complexity of O(log n) due to its Red-Black Tree structure.<br>- `HashMap` operations generally have O(1) time complexity due to hashing, though it can be O(n) with high collisions.</pre>"
},
{
    "question": "What is a Red-Black Tree, and why does `TreeMap` use it?",
    "answer": "<pre>A <b>Red-Black Tree</b> is a self-balancing binary search tree where each node has an additional color attribute (either red or black). It enforces balancing rules to keep the tree height at O(log n), ensuring consistent performance.<br><b>Reason for Use</b>: Red-Black Trees allow `TreeMap` to maintain sorted order with efficient O(log n) time complexity for insertion, deletion, and lookup.</pre>"
},
{
    "question": "How does `TreeMap` handle null keys and null values?",
    "answer": "<pre><b>Null Keys</b>: `TreeMap` does not allow null keys because it uses comparisons to maintain order, and `null` is not comparable.<br><b>Null Values</b>: `TreeMap` allows null values as long as the keys are non-null.</pre>"
},
{
    "question": "How would you implement a custom comparator for a `TreeMap` to sort strings in reverse alphabetical order?",
    "answer": "<pre>Create a `TreeMap` with a custom comparator that compares strings in reverse order:<br><code>TreeMap<String, Integer> map = new TreeMap<>((a, b) -> b.compareTo(a));</code></pre>"
},
{
    "question": "How would you find the entry with the smallest and largest key in a `TreeMap`?",
    "answer": "<pre><b>Smallest Key</b>: Use `firstEntry()` to get the entry with the smallest key.<br><code>Map.Entry<K, V> smallest = treeMap.firstEntry();</code><br><b>Largest Key</b>: Use `lastEntry()` to get the entry with the largest key.<br><code>Map.Entry<K, V> largest = treeMap.lastEntry();</code></pre>"
},
{
    "question": "What is the purpose of `subMap()`, `headMap()`, and `tailMap()` in a `TreeMap`, and how do they work?",
    "answer": "<pre><b>`subMap(fromKey, toKey)`</b>: Returns a view of the portion of the map with keys from `fromKey` (inclusive) to `toKey` (exclusive).<br><b>`headMap(toKey)`</b>: Returns a view with keys less than `toKey`.<br><b>`tailMap(fromKey)`</b>: Returns a view with keys greater than or equal to `fromKey`.<br><b>Example</b>:<br><code>TreeMap<Integer, String> map = new TreeMap<>();<br>map.put(1, \"One\");<br>map.put(2, \"Two\");<br>map.put(3, \"Three\");<br>SortedMap<Integer, String> subMap = map.subMap(1, 3); // Contains 1 and 2</code></pre>"
},
{
    "question": "If you modify a `TreeMap` view obtained from `subMap()`, `headMap()`, or `tailMap()`, does it affect the original `TreeMap`?",
    "answer": "Yes, modifications to a view obtained from `subMap()`, `headMap()`, or `tailMap()` are reflected in the original `TreeMap`, as these methods provide live views of the map."
},
{
    "question": "How does `TreeMap` handle comparisons when keys are inserted?",
    "answer": "`TreeMap` uses the natural ordering of keys (via `Comparable`) or a custom comparator provided at creation. Each key insertion involves comparing the new key with existing keys to determine its position in the Red-Black Tree. If keys are not comparable, and no comparator is provided, a `ClassCastException` is thrown on insertion."
},
{
    "question": "What happens if two keys in a `TreeMap` have the same ordering according to the comparator?",
    "answer": "If two keys are considered equal by the comparator, the second key will replace the first in the map because `TreeMap` treats them as duplicates, keeping only one entry."
},
{
    "question": "Explain the difference between `NavigableMap` methods like `ceilingEntry()`, `floorEntry()`, `higherEntry()`, and `lowerEntry()` in a `TreeMap`.",
    "answer": "<pre><b>`ceilingEntry(key)`</b>: Entry with the smallest key greater than or equal to `key`.<br><b>`floorEntry(key)`</b>: Entry with the largest key less than or equal to `key`.<br><b>`higherEntry(key)`</b>: Entry with the smallest key strictly greater than `key`.<br><b>`lowerEntry(key)`</b>: Entry with the largest key strictly less than `key`.<br><b>Example</b>:<br><code>TreeMap<Integer, String> map = new TreeMap<>();<br>map.put(1, \"One\");<br>map.put(3, \"Three\");<br>map.put(5, \"Five\");<br>Map.Entry<Integer, String> entry = map.ceilingEntry(2); // Returns (3, \"Three\")</code></pre>"
},
{
    "question": "How would you iterate over the entries of a `TreeMap` in descending order?",
    "answer": "<pre>Use `descendingMap()` to get a view of the `TreeMap` in reverse order:<br><code>NavigableMap<Integer, String> descendingMap = treeMap.descendingMap();<br>for (Map.Entry<Integer, String> entry : descendingMap.entrySet()) {<br>    System.out.println(entry.getKey() + \" = \" + entry.getValue());<br>}</code></pre>"
},
{
    "question": "Why can’t you use mutable objects as keys in a `TreeMap`?",
    "answer": "Using mutable objects as keys in a `TreeMap` can lead to lookup failures and unpredictable behavior if the key's properties change after insertion, as this may alter the key's position in the sorted order. Using immutable keys ensures consistent sorting and behavior."
},
{
    "question": "How does `TreeMap` handle `Comparator` consistency with `equals()`?",
    "answer": "`TreeMap` expects the `Comparator` to be consistent with `equals()` to prevent unexpected behavior. If two objects are equal by `equals()`, they should also be equal by the comparator."
},
{
    "question": "How would you implement a case-insensitive `TreeMap` for storing string keys?",
    "answer": "<pre>Use a custom comparator to ignore case differences when comparing keys:<br><code>TreeMap<String, Integer> caseInsensitiveMap = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);</code></pre>"
},
{
    "question": "What is the time complexity of `TreeMap` operations like `put()`, `get()`, and `remove()`?",
    "answer": "All basic operations (`put`, `get`, `remove`) in `TreeMap` have a time complexity of **O(log n)** because it uses a Red-Black Tree structure."
},
{
    "question": "Can you explain the difference between `TreeMap` and `TreeSet`?",
    "answer": "<pre><b>TreeMap</b>: A key-value map that stores entries in sorted order based on keys.<br><b>TreeSet</b>: A set that stores unique elements in sorted order.<br><b>Difference</b>: `TreeSet` is essentially a `TreeMap` with values always set to a constant. <br><b>Use Case</b>: Use `TreeSet` for sorted collections of unique elements and `TreeMap` for sorted key-value pairs.</pre>"
},
{
    "question": "How would you find the closest key greater than or equal to a given key in a `TreeMap`?",
    "answer": "<pre>Use `ceilingKey(key)` to find the closest key greater than or equal to a given key:<br><code>Integer closestKey = treeMap.ceilingKey(givenKey);</code></pre>"
},
{
    "question": "Why does `TreeMap` not allow `null` keys, whereas `HashMap` does?",
    "answer": "`TreeMap` requires keys to be comparable for sorted order, and `null` cannot be compared. `HashMap`, which uses hashing instead, does not require comparability, so it allows one `null` key."
},
{
    "question": "How would you retrieve a subset of a `TreeMap` based on a range of keys?",
    "answer": "<pre>Use `subMap(fromKey, toKey)` to get a view of entries within a specific range:<br><code>SortedMap<K, V> rangeView = treeMap.subMap(startKey, endKey);</code><br>This view includes keys from `startKey` (inclusive) to `endKey` (exclusive).</pre>"
},
{
    "question": "How does `TreeMap` handle concurrency, and is it thread-safe?",
    "answer": "`TreeMap` is not thread-safe. For concurrent access, wrap it with `Collections.synchronizedSortedMap(new TreeMap<>())` or use `ConcurrentSkipListMap` for a thread-safe alternative."
}

    ],
"HashMap": [
      {
    "question": "How does a `HashMap` work internally, and how are keys and values stored?",
    "answer": "<pre>A `HashMap` in Java uses an <b>array of linked lists</b> (or a <b>tree</b> in Java 8+ for high-collision buckets) to store key-value pairs:<br>- Each key is hashed to determine the <b>index</b> in the array where it should be stored.<br>- If two keys hash to the same index, they are stored in a linked list (or tree) at that index, using <b>separate chaining</b> to resolve collisions.<br>- Each entry in the list has references to the key, value, and next entry.<br>- From Java 8, when a bucket’s size exceeds a threshold (8 entries), it is converted to a <b>red-black tree</b> to improve lookup performance.</pre>"
},
{
    "question": "What is a hash collision, and how does `HashMap` handle it?",
    "answer": "<pre>A <b>hash collision</b> occurs when two different keys hash to the same array index. `HashMap` handles collisions using <b>separate chaining</b>:<br>- Each bucket (array slot) stores a linked list of entries (or a tree in Java 8+).<br>- When collisions occur, new entries are added to this list.<br>- In Java 8+, if a bucket’s linked list grows beyond a certain threshold (8), it’s converted into a red-black tree for faster lookup performance.</pre>"
},
{
    "question": "Explain the importance of `equals()` and `hashCode()` in a `HashMap`.",
    "answer": "<pre><b>`hashCode()`</b>: Determines the bucket location for a key. Keys with the same hash code may end up in the same bucket, so `hashCode()` must be consistent during its lifetime in the `HashMap`.<br><b>`equals()`</b>: Identifies if two keys are equal. When there is a collision (keys hash to the same bucket), `equals()` determines if a key already exists in the list/tree.<br><b>Consistency</b>: `equals()` and `hashCode()` must be consistent; if two objects are equal, they must have the same hash code.</pre>"
},
{
    "question": "What is the time complexity of `HashMap` operations like `get()` and `put()`?",
    "answer": "<pre><b>Average Case</b>: O(1) for both `get()` and `put()` due to direct array indexing.<br><b>Worst Case</b>: O(n) in case of excessive collisions, where all entries hash to the same bucket.<br><b>Java 8 Improvement</b>: With red-black tree conversion in buckets, worst-case complexity for lookups in high-collision scenarios is improved to O(log n).</pre>"
},
{
    "question": "What is the default initial capacity and load factor of a `HashMap`, and why are they important?",
    "answer": "<pre><b>Initial Capacity</b>: 16, the initial size of the bucket array.<br><b>Load Factor</b>: 0.75, controls when the `HashMap` resizes (doubles the array size). When the entries exceed 75% of current capacity, a resize is triggered.<br><b>Importance</b>: Balances space and time complexity. A lower load factor reduces collisions but increases memory usage; a higher load factor saves space but may increase collisions.</pre>"
},
{
    "question": "Can a `HashMap` have `null` keys or values?",
    "answer": "<pre>Yes, `HashMap` allows one `null` key and multiple `null` values.<br><b>Null Key</b>: Handled as a special case in `put()` and `get()`, bypassing usual hashing.<br><b>Null Values</b>: Allowed and stored like any other value; multiple entries can have `null` values with different keys.</pre>"
},
{
    "question": "What is `ConcurrentModificationException`, and when can it occur with `HashMap`?",
    "answer": "<pre>`ConcurrentModificationException` occurs when a `HashMap` is modified structurally during iteration.<br>- `HashMap` is <b>fail-fast</b>: its iterator tracks modifications to detect concurrent structural modifications.<br><b>Solution</b>: Use `ConcurrentHashMap` for safe concurrent modifications, or use an iterator’s `remove()` method for safe removal.</pre>"
},
{
    "question": "How does Java 8 improve the performance of `HashMap` in case of high hash collisions?",
    "answer": "<pre>In Java 8, if the number of entries in a single bucket exceeds a threshold (8), the bucket's linked list is converted into a <b>red-black tree</b>, reducing lookup time in that bucket from O(n) to O(log n) for high-collision scenarios.</pre>"
},
{
    "question": "What is the impact of poor `hashCode()` implementations on `HashMap` performance?",
    "answer": "<pre>Poor `hashCode()` implementations can cause many keys to hash to the same bucket, resulting in <b>excessive collisions</b>.<br>This degrades `HashMap` performance from O(1) to O(n) for `get()` and `put()` operations.<br><b>Best Practice</b>: Use a well-distributed `hashCode()` to minimize collisions and maintain constant-time complexity.</pre>"
},
{
    "question": "How would you make a `HashMap` thread-safe?",
    "answer": "<pre>- Use <b>`Collections.synchronizedMap()`</b> to create a synchronized map:<br><code>Map<K, V> synchronizedMap = Collections.synchronizedMap(new HashMap<>());</code><br>- Alternatively, use <b>`ConcurrentHashMap`</b> which provides segment-level locking for better concurrency without locking the entire map.</pre>"
},
{
    "question": "What happens if two objects have the same `hashCode` but are not equal?",
    "answer": "<pre>If two objects have the same `hashCode` but are not equal, they will be placed in the same bucket but remain distinct entries (handled by separate chaining).<br>During retrieval, `HashMap` uses `equals()` to distinguish between entries with the same `hashCode`.</pre>"
},
{
    "question": "What happens if `hashCode()` is implemented but `equals()` is not overridden for keys in a `HashMap`?",
    "answer": "<pre>If `equals()` is not overridden, the default `equals()` from `Object` is used, which checks for reference equality.<br>This can lead to unexpected behavior, as two objects with the same `hashCode()` may not be considered equal, leading to duplicate keys or failed retrieval.</pre>"
},
{
    "question": "Why is `HashMap` not suitable for concurrent access?",
    "answer": "<pre>`HashMap` is not thread-safe, leading to issues like:<br>- <b>Data Inconsistency</b>: Multiple threads may overwrite or lose updates.<br>- <b>Infinite Loops</b>: Concurrent resizing during modification can cause an infinite loop in some JDK versions.<br><b>Solution</b>: Use `ConcurrentHashMap` for thread-safe operations.</pre>"
},
{
    "question": "How does `ConcurrentHashMap` differ from `HashMap`, and how does it handle concurrency?",
    "answer": "<pre>- <b>Locking Mechanism</b>: `ConcurrentHashMap` uses segment-level locking (Java 7) or fine-grained locks (Java 8) for improved concurrency.<br>- <b>Fail-safe Iterators</b>: `ConcurrentHashMap` provides fail-safe iterators that do not throw `ConcurrentModificationException` during iteration but may not reflect the latest changes.<br>- <b>No null Keys/Values</b>: `ConcurrentHashMap` does not allow `null` keys or values to avoid ambiguity.</pre>"
},
{
    "question": "How would you find duplicate keys with the same hash code in a `HashMap`?",
    "answer": "<pre>To find duplicate keys with the same hash code:<br>- Iterate through the `HashMap` entries and group keys by their hash code using a map (e.g., `Map<Integer, List<K>>`).<br>- Check for hash codes with more than one key in the list.<br><b>Code Example</b>:<br><code>Map<Integer, List<K>> hashToKeys = new HashMap<>();<br>for (K key : map.keySet()) {<br>    int hash = key.hashCode();<br>    hashToKeys.computeIfAbsent(hash, k -> new ArrayList<>()).add(key);<br>}</code></pre>"
},
{
    "question": "How can you iterate over a `HashMap`? List some ways.",
    "answer": "<pre>- <b>Using `entrySet()` with a for-each loop</b>:<br><code>for (Map.Entry<K, V> entry : map.entrySet()) {<br>    K key = entry.getKey();<br>    V value = entry.getValue();<br>}</code><br>- <b>Using `keySet()` and getting values</b>:<br><code>for (K key : map.keySet()) {<br>    V value = map.get(key);<br>}</code><br>- <b>Using `Iterator`</b>:<br><code>Iterator<Map.Entry<K, V>> iterator = map.entrySet().iterator();<br>while (iterator.hasNext()) {<br>    Map.Entry<K, V> entry = iterator.next();<br>}</code></pre>"
},
{
    "question": "How would you implement a custom key class to be used in a `HashMap`?",
    "answer": "<pre>To use a custom class as a key:<br>- Override `hashCode()` to provide a consistent hash code for the key.<br>- Override `equals()` to define key equality meaningfully.<br><b>Example</b>:<br><code>public class Key {<br>    private int id;<br>    private String name;<br><br>    @Override<br>    public int hashCode() {<br>        return Objects.hash(id, name);<br>    }<br><br>    @Override<br>    public boolean equals(Object obj) {<br>        if (this == obj) return true;<br>        if (obj == null || getClass() != obj.getClass()) return false;<br>        Key key = (Key) obj;<br>        return id == key.id && Objects.equals(name, key.name);<br>    }<br>}</code></pre>"
},
{
    "question": "What is the impact of resizing on a `HashMap` and how does it handle resizing?",
    "answer": "<pre><b>Impact</b>: Resizing a `HashMap` involves rehashing all entries, which is time-consuming and increases CPU usage.<br><b>Mechanism</b>: When the map size exceeds `capacity * load factor`, the array size doubles and all entries are rehashed to new bucket positions.<br><b>Optimization</b>: To reduce resizing cost, set an initial capacity to minimize resizing.</pre>"
},
{
    "question": "What is structural modification in `HashMap`, and how does it relate to `ConcurrentModificationException`?",
    "answer": "<pre><b>Structural Modification</b>: Adding/removing elements in a way that changes the internal structure of the map.<br><b>Relation to `ConcurrentModificationException`</b>: `HashMap`'s iterators are fail-fast and throw this exception if they detect structural modification outside of their control during iteration, ensuring iterator doesn’t operate on a stale structure.</pre>"
},
{
    "question": "How would you design a `HashMap`-based cache with a time-based expiration policy?",
    "answer": "<pre>- Use a `HashMap` where each entry has a timestamp for when it was added or last accessed.<br>- Periodically check for entries that exceed the expiration threshold and remove them.<br>- Alternatively, use `LinkedHashMap` with access-order iteration for an LRU cache or implement `ScheduledExecutorService` to remove stale entries.</pre>"
}
  
    ],
"LinkedList": [
    {
        "question": "How does a `HashMap` work internally, and how are keys and values stored?",
        "answer": "<pre><b>ArrayList vs LinkedList</b>:<br><ul><li><b>Data Structure</b>: `ArrayList` is backed by a resizable array, while `LinkedList` is a doubly linked list.</li><li><b>Performance</b>:<ul><li><b>Random Access</b>: `ArrayList` is faster (O(1)) for random access, while `LinkedList` is slower (O(n)).</li><li><b>Insertion/Deletion</b>: `LinkedList` is faster (O(1)) for insertions/deletions at the beginning or middle, slower for indexed access.</li></ul></li><li><b>Usage</b>:<ul><li>Use `ArrayList` when frequent random access is needed.</li><li>Use `LinkedList` for frequent insertions/deletions at the start or middle, or for stack/queue behavior.</li></ul></li></ul></pre>"
    },
    {
        "question": "How would you implement a stack using a `LinkedList` in Java?",
        "answer": "<pre>Use `LinkedList` with `push` and `pop` for LIFO behavior.<br><code>LinkedList<Integer> stack = new LinkedList<>();<br>stack.push(1); // Push element<br>int top = stack.pop(); // Pop element</code><br><b>Explanation</b>: `LinkedList` supports efficient insertion and deletion at the head, making it suitable for stack operations.</pre>"
    },
    {
        "question": "How can you detect a cycle in a linked list?",
        "answer": "<pre>Use Floyd’s Cycle Detection Algorithm (tortoise and hare).<br><code>public boolean hasCycle(ListNode head) {<br>    ListNode slow = head, fast = head;<br>    while (fast != null && fast.next != null) {<br>        slow = slow.next;<br>        fast = fast.next.next;<br>        if (slow == fast) return true;<br>    }<br>    return false;<br>}</code><br><b>Explanation</b>: Fast pointer moves two steps, slow moves one; they meet if there’s a cycle.</pre>"
    },
    {
        "question": "How would you reverse a `LinkedList` in place?",
        "answer": "<pre>Iterate through the list and reverse the pointers.<br><code>public ListNode reverse(ListNode head) {<br>    ListNode prev = null, current = head, next;<br>    while (current != null) {<br>        next = current.next;<br>        current.next = prev;<br>        prev = current;<br>        current = next;<br>    }<br>    return prev;<br>}</code><br><b>Explanation</b>: This reverses the list in place by modifying each node's `next` pointer.</pre>"
    },
    {
        "question": "What are the time complexities of `get(int index)`, `add(int index, E element)`, and `remove(int index)` operations in `LinkedList`?",
        "answer": "<pre><ul><li><b>`get(int index)`</b>: O(n), as it requires traversing to the index.</li><li><b>`add(int index, E element)`</b>: O(n) for arbitrary index, O(1) for beginning or end.</li><li><b>`remove(int index)`</b>: O(n) for arbitrary index, O(1) for the first element.</li></ul></pre>"
    },
    {
        "question": "How would you find the middle element of a linked list in one pass?",
        "answer": "<pre>Use two pointers: one moves one step, the other moves two.<br><code>public ListNode findMiddle(ListNode head) {<br>    ListNode slow = head, fast = head;<br>    while (fast != null && fast.next != null) {<br>        slow = slow.next;<br>        fast = fast.next.next;<br>    }<br>    return slow;<br>}</code><br><b>Explanation</b>: When fast pointer reaches end, slow is at the middle.</pre>"
    },
    {
        "question": "How does Java’s `LinkedList` class implement a doubly linked list, and why is it different from a singly linked list?",
        "answer": "<pre>Java’s `LinkedList` is implemented as a <b>doubly linked list</b> with each node having references to both previous and next nodes.<br><b>Advantages</b>:<ul><li>Supports bidirectional traversal.</li><li>Efficient for removing/adding from both ends.</li></ul><b>Difference</b>: A singly linked list has only a `next` pointer, limiting flexibility.</pre>"
    },
    {
        "question": "How would you remove duplicates from an unsorted linked list?",
        "answer": "<pre>Use a `Set` to track seen values and remove duplicates in one pass.<br><code>public void removeDuplicates(ListNode head) {<br>    Set<Integer> seen = new HashSet<>();<br>    ListNode current = head, prev = null;<br>    while (current != null) {<br>        if (!seen.add(current.val)) {<br>            prev.next = current.next;<br>        } else {<br>            prev = current;<br>        }<br>        current = current.next;<br>    }<br>}</code><br><b>Explanation</b>: O(n) time, O(n) space.</pre>"
    },
    {
        "question": "What is a `ConcurrentModificationException` in the context of `LinkedList`, and when can it occur?",
        "answer": "<pre>Occurs when `LinkedList` is modified structurally during iteration (e.g., add/remove).<br><b>Example</b>:<br><code>LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1, 2, 3));<br>for (Integer num : list) {<br>    list.add(4); // Throws ConcurrentModificationException<br>}</code><br><b>Solution</b>: Use `Iterator.remove()` or `CopyOnWriteArrayList` for thread safety.</pre>"
    },
    {
        "question": "How would you implement a queue using a `LinkedList`?",
        "answer": "<pre>Use `LinkedList` as a queue with `offer` for enqueue and `poll` for dequeue.<br><code>LinkedList<Integer> queue = new LinkedList<>();<br>queue.offer(1); // Enqueue<br>int first = queue.poll(); // Dequeue</code><br><b>Explanation</b>: Efficient for FIFO operations with head and tail access.</pre>"
    },
    {
        "question": "How would you merge two sorted linked lists into a single sorted linked list?",
        "answer": "<pre>Use two pointers to merge nodes in sorted order.<br><code>public ListNode mergeTwoLists(ListNode l1, ListNode l2) {<br>    ListNode dummy = new ListNode(0);<br>    ListNode current = dummy;<br>    while (l1 != null && l2 != null) {<br>        if (l1.val < l2.val) {<br>            current.next = l1;<br>            l1 = l1.next;<br>        } else {<br>            current.next = l2;<br>            l2 = l2.next;<br>        }<br>        current = current.next;<br>    }<br>    current.next = (l1 != null) ? l1 : l2;<br>    return dummy.next;<br>}</code><br><b>Explanation</b>: Merges lists in O(n + m) time.</pre>"
    },
    {
        "question": "How can you implement a circular linked list in Java, and what are its advantages?",
        "answer": "<pre>A <b>circular linked list</b> has the last node pointing to the first.<br><code>public class CircularLinkedList {<br>    ListNode head;<br>    public void add(int value) {<br>        ListNode newNode = new ListNode(value);<br>        if (head == null) {<br>            head = newNode;<br>            newNode.next = head;<br>        } else {<br>            ListNode temp = head;<br>            while (temp.next != head) {<br>                temp = temp.next;<br>            }<br>            temp.next = newNode;<br>            newNode.next = head;<br>        }<br>    }<br>}</code><br><b>Advantages</b>: Useful for cyclic data structures like round-robin scheduling.</pre>"
    },
    {
        "question": "What is the impact of using a `LinkedList` vs. an `ArrayList` for frequent insertion and deletion operations?",
        "answer": "<pre><ul><li><b>LinkedList</b>: Faster for frequent insertions/deletions at the start or middle due to O(1) complexity.</li><li><b>ArrayList</b>: Slower for frequent insertions/deletions, especially in the middle, due to shifting (O(n)).</li><li><b>Use Case</b>: Use `LinkedList` for frequent insertions/deletions and `ArrayList` for random access.</li></ul></pre>"
    },
    {
        "question": "How would you remove the N-th node from the end of a linked list in one pass?",
        "answer": "<pre>Use two pointers: move the first pointer `n` steps ahead, then move both pointers until the first reaches the end.<br><code>public ListNode removeNthFromEnd(ListNode head, int n) {<br>    ListNode dummy = new ListNode(0);<br>    dummy.next = head;<br>    ListNode first = dummy, second = dummy;<br>    for (int i = 0; i <= n; i++) first = first.next;<br>    while (first != null) {<br>        first = first.next;<br>        second = second.next;<br>    }<br>    second.next = second.next.next;<br>    return dummy.next;<br>}</code><br><b>Explanation</b>: Removes the N-th node from the end in O(n) time.</pre>"
    },
    {
        "question": "How does `LinkedList` handle null elements? Can it store `null` values?",
        "answer": "<pre>Yes, `LinkedList` can store `null` values as each node can reference any object, including `null`.</pre>"
    },
    {
        "question": "How would you check if two linked lists intersect?",
        "answer": "<pre>Traverse both lists and check if their last nodes are the same.<br><b>Alternative</b>: Use a two-pointer approach where one pointer starts at each list’s head, switching to the other list when it reaches the end, meeting at the intersection point if they intersect.</pre>"
    },
    {
        "question": "What is the difference between `Queue` and `Deque` interfaces in Java, and how does `LinkedList` implement both?",
        "answer": "<pre><ul><li><b>Queue</b>: Represents FIFO. `LinkedList` implements `Queue` to add elements at the end and remove from the front.</li><li><b>Deque</b>: Represents a double-ended queue for adding/removing from both ends. `LinkedList` provides flexibility with methods like `addFirst`, `addLast`, `removeFirst`, `removeLast`.</li></ul></pre>"
    },
    {
        "question": "How would you split a linked list into two halves?",
        "answer": "<pre>Use fast and slow pointer technique:<ul><li>Fast pointer moves two steps at a time, slow moves one step.</li><li>When fast reaches the end, slow will be at the middle, allowing you to split the list.</li></ul></pre>"
    },
    {
        "question": "How does `LinkedList` in Java implement both `List` and `Deque` interfaces, and what are the advantages of this design?",
        "answer": "<pre>By implementing both `List` and `Deque`, `LinkedList` can function as a standard list with indexed access and as a double-ended queue.<br><b>Advantages</b>: Allows for efficient insertion/deletion from both ends and provides all `List` operations.</pre>"
    },
    {
        "question": "Why is `LinkedList` a poor choice for random access operations?",
        "answer": "<pre>`LinkedList` requires O(n) time for random access as it must traverse nodes sequentially. This makes it inefficient compared to `ArrayList`, which has O(1) access via direct indexing.</pre>"
    }
]
,
"ArrayList": [
        
    {
        "question": "How does `ArrayList` manage its capacity, and what happens if you add elements beyond the initial capacity?",
        "answer": `
            <pre><code>ArrayList in Java starts with an initial capacity (default is 10 if created with the default constructor). When adding elements exceeds the current capacity, ArrayList resizes itself by creating a new array with 1.5 times the previous capacity, and then it copies the existing elements to the new array.
            
Performance Consideration: Frequent resizing is costly as it involves array copying. To avoid excessive resizing, use ArrayList(int initialCapacity) to set a larger initial capacity if you know the required size in advance.</code></pre>
        `
    },
    {
        "question": "What is the time complexity of inserting an element at the beginning of an `ArrayList`, and why?",
        "answer": `
            <pre><code>Inserting an element at the beginning of an ArrayList has a time complexity of O(n). This is because all existing elements must be shifted one position to the right to make space for the new element, which is an O(n) operation.</code></pre>
        `
    },
    {
        "question": "Explain the difference between `size()` and `capacity` in `ArrayList`.",
        "answer": `
            <pre><code>- size(): Refers to the number of elements actually present in the ArrayList.
- Capacity: Refers to the current maximum number of elements the ArrayList can hold before resizing.

Example: If you create new ArrayList<>(10), the initial capacity is 10, but the size() is 0 until you start adding elements.</code></pre>
        `
    },
    {
        "question": "How would you convert an `ArrayList` to a regular array, and vice versa?",
        "answer": `
            <pre><code>- To Array: Use ArrayList's toArray() method:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3));
Integer[] array = list.toArray(new Integer[0]);

- To ArrayList: Use Arrays.asList() to create a list, then wrap it in a new ArrayList to make it modifiable:
Integer[] array = {1, 2, 3};
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(array));</code></pre>
        `
    },
    {
        "question": "Why is `ArrayList` not synchronized, and how can you make it thread-safe?",
        "answer": `
            <pre><code>ArrayList is not synchronized by design to allow better performance in single-threaded scenarios. To make it thread-safe:
- Use Collections.synchronizedList(new ArrayList<>()) to wrap it in a synchronized list.
- Alternatively, use CopyOnWriteArrayList, which provides thread-safe operations with better read concurrency, though it has higher memory usage for write-heavy tasks.</code></pre>
        `
    },
    {
        "question": "What is the difference between `ArrayList.remove(int index)` and `ArrayList.remove(Object o)`?",
        "answer": `
            <pre><code>- remove(int index): Removes the element at the specified position in the list. It takes an int parameter, so it’s used for removing by index.
- remove(Object o): Removes the first occurrence of the specified element in the list (if present). It takes an Object parameter, so it’s used for removing by value.

Example:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3, 4));
list.remove(2); // Removes element at index 2 (3)
list.remove(Integer.valueOf(2)); // Removes element with value 2</code></pre>
        `
    },

    {
        "question": "What is the `ConcurrentModificationException`, and how can it occur with `ArrayList`?",
        "answer": `
            <pre><code>ConcurrentModificationException occurs when an ArrayList is structurally modified while iterating over it using an iterator. This exception is a result of <b>fail-fast</b> behavior in ArrayList iterators, which detect concurrent modifications.

Example:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3));
for (Integer i : list) {
    if (i == 2) list.remove(i); // Throws ConcurrentModificationException
}

Solution: Use Iterator.remove() or switch to a CopyOnWriteArrayList if modifications are needed during iteration.</code></pre>
        `
    },
    {
        "question": "How does `ArrayList.ensureCapacity(int minCapacity)` work, and when would you use it?",
        "answer": `
            <pre><code>ensureCapacity explicitly increases the capacity of an ArrayList to at least the specified minimum. It’s useful to reduce the overhead of incremental resizing when you know the approximate size of the list in advance.

Example:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();
list.ensureCapacity(1000); // Reserves space for 1000 elements</code></pre>
        `
    },
    {
        "question": "How would you reverse an `ArrayList` without using additional memory?",
        "answer": `
            <pre><code>Use a two-pointer approach to swap elements from the ends toward the center.

Built-in method:
Collections.reverse(list);

Manual approach:
int left = 0, right = list.size() - 1;
while (left < right) {
    Integer temp = list.get(left);
    list.set(left++, list.get(right));
    list.set(right--, temp);
}

Explanation: This approach modifies the list in place, achieving reversal without extra space.</code></pre>
        `
    },
    {
        "question": "What happens if you try to access an index that is out of bounds in an `ArrayList`?",
        "answer": `
            <pre><code>Attempting to access an index that is out of bounds throws an IndexOutOfBoundsException. This exception occurs because ArrayList internally checks if the requested index is within 0 to size - 1.</code></pre>
        `
    },
    {
        "question": "How would you efficiently find duplicates in an `ArrayList`?",
        "answer": `
            <pre><code>Use a Set to keep track of seen elements, adding only unique values and flagging duplicates.

Example:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3, 2, 4, 4));
Set&lt;Integer&gt; seen = new HashSet&lt;&gt;();
Set&lt;Integer&gt; duplicates = new HashSet&lt;&gt;();
for (Integer num : list) {
    if (!seen.add(num)) duplicates.add(num);
}

Explanation: This approach is O(n) in time and O(n) in space, where n is the number of elements.</code></pre>
        `
    },
    {
        "question": "How would you implement a custom sorting order for an `ArrayList`?",
        "answer": `
            <pre><code>Use Collections.sort with a custom comparator.

Example:
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(Arrays.asList("apple", "banana", "cherry"));
Collections.sort(list, (a, b) -> b.length() - a.length()); // Sort by length descending

Explanation: A comparator is used to define the sorting order, allowing you to sort by custom criteria.</code></pre>
        `
    },
    {
        "question": "Can `ArrayList` store `null` values, and how would you remove them from the list?",
        "answer": `
            <pre><code>Yes, ArrayList can store null values. To remove all null values, use removeIf with a lambda or method reference.

Example:
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(Arrays.asList("a", null, "b", null));
list.removeIf(Objects::isNull);</code></pre>
        `
    },
    {
        "question": "How would you shuffle the elements of an `ArrayList` randomly?",
        "answer": `
            <pre><code>Use Collections.shuffle(), which randomly permutes the elements.

Example:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3, 4, 5));
Collections.shuffle(list);</code></pre>
        `
    },
    {
        "question": "How can you make an `ArrayList` read-only or unmodifiable?",
        "answer": `
            <pre><code>Use Collections.unmodifiableList() to create a read-only view of the list.

Example:
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(Arrays.asList("a", "b", "c"));
List&lt;String&gt; unmodifiableList = Collections.unmodifiableList(list);
unmodifiableList.add("d"); // Throws UnsupportedOperationException

Explanation: Any modification attempts on unmodifiableList will throw UnsupportedOperationException.</code></pre>
        `
    },
    {
        "question": "What is the impact of `ArrayList.trimToSize()` on performance?",
        "answer": `
            <pre><code>trimToSize() reduces the array capacity of ArrayList to its current size, releasing unused memory. It’s useful after adding a large number of elements and then removing some, but it may affect performance if you add more elements afterward due to resizing.</code></pre>
        `
    },
    {
        "question": "How would you implement a queue using an `ArrayList`?",
        "answer": `
            <pre><code>Use add() to enqueue (add to the end) and remove(0) to dequeue (remove from the front).

Example:
ArrayList&lt;Integer&gt; queue = new ArrayList&lt;&gt;();
queue.add(1); // Enqueue
queue.remove(0); // Dequeue

Limitation: Removing from the front is O(n) as all elements shift left, so LinkedList is generally better for queue operations.</code></pre>
        `
    },
    {
        "question": "What are the differences between `ArrayList` and `LinkedList`?",
        "answer": `
            <pre><code>- ArrayList: Better for random access (O(1)) and has a smaller memory footprint.
- LinkedList: Better for insertions and deletions at the beginning or middle (O(1) if given a reference), but random access is O(n).
Use ArrayList when frequent random access is required and LinkedList when frequent insertions or deletions are needed.</code></pre>
        `
    },
    {
        "question": "How would you synchronize access to an `ArrayList` if multiple threads are modifying it concurrently?",
        "answer": `
            <pre><code>- Use Collections.synchronizedList() to create a synchronized version of the list.

Example:
List&lt;Integer&gt; synchronizedList = Collections.synchronizedList(new ArrayList&lt;&gt;());

- Alternatively, use CopyOnWriteArrayList for concurrent scenarios with more reads than writes, as it avoids locking.</code></pre>
        `
    },
    {
        "question": "Why does `ArrayList` allow duplicate elements, and how would you remove duplicates from an `ArrayList`?",
        "answer": `
            <pre><code>ArrayList is designed to allow duplicates as it’s a list implementation where order and position are preserved.

Removing Duplicates:
ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 2, 3, 4, 4));
Set&lt;Integer&gt; uniqueSet = new LinkedHashSet&lt;&gt;(list);
list.clear();
list.addAll(uniqueSet);

Explanation: Using a LinkedHashSet removes duplicates while preserving the insertion order.</code></pre>
        `
    }




    ],
"Arrays": [
    {
        "question": "How does Java store multidimensional arrays in memory, and what’s the difference between a 2D array and an array of arrays?",
        "answer": `
            <pre><code>- Memory Storage: Java stores 2D arrays as arrays of arrays. A 2D array int[][] arr is not a contiguous block of memory but rather an array of references to other arrays.
- Difference: In a 2D array, each sub-array can have a different length, making it a <b>jagged array</b>.

Example:
int[][] jaggedArray = { {1, 2}, {3, 4, 5} }; // Different lengths</code></pre>
        `
    },
    {
        "question": "Can you explain why `int[] arr = new int[Integer.MAX_VALUE]` might throw an `OutOfMemoryError` on some systems, even though `Integer.MAX_VALUE` is a valid int value?",
        "answer": `
            <pre><code>Integer.MAX_VALUE is indeed the maximum array size, but allocating an array of this size may still fail due to:
- Memory Limitations: The JVM heap space may not be large enough to allocate such a big array.
- Overhead: Arrays in Java need some memory for metadata, which may exceed available memory even if Integer.MAX_VALUE fits.
- Solution: Increase JVM heap size with -Xmx flag, but this is not always feasible.</code></pre>
        `
    },
    {
        "question": "How would you find the largest and second-largest elements in an unsorted array in one pass?",
        "answer": `
            <pre><code>Traverse the array once, keeping track of the largest and second-largest elements.

Example:
int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
for (int num : arr) {
    if (num > max1) {
        max2 = max1;
        max1 = num;
    } else if (num > max2 && num != max1) {
        max2 = num;
    }
}

Explanation: This keeps max1 as the largest and max2 as the second largest, requiring only a single pass (O(n)).</code></pre>
        `
    },
    {
        "question": "Explain the difference between `==` and `.equals()` when comparing arrays in Java.",
        "answer": `
            <pre><code>- ==: Compares references, so arr1 == arr2 returns true only if arr1 and arr2 point to the same memory location.
- .equals(): Also compares references, as equals() in Object is not overridden for arrays.
- Arrays.equals(): Use Arrays.equals(arr1, arr2) for element-wise comparison of one-dimensional arrays, and Arrays.deepEquals(arr1, arr2) for nested arrays (multi-dimensional arrays).</code></pre>
        `
    },
    {
        "question": "How would you reverse an array in place without using any additional memory?",
        "answer": `
            <pre><code>Use a two-pointer approach to swap elements from the ends toward the center.

Example:
for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

Explanation: This swaps the elements without extra space, achieving an in-place reversal.</code></pre>
        `
    },
    {
        "question": "How would you remove duplicates from a sorted array without using extra space?",
        "answer": `
            <pre><code>Use two pointers: one to track the unique position and another to iterate over the array.

Example:
int uniqueIndex = 1;
for (int i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
        arr[uniqueIndex++] = arr[i];
    }
}

Explanation: This modifies the array in-place by placing unique elements at the beginning and keeping uniqueIndex as the new length.</code></pre>
        `
    },
    {
        "question": "How can you find the missing number in an array containing numbers from 1 to n with one missing number?",
        "answer": `
            <pre><code>Use the sum formula for the first n numbers and subtract the sum of the array.

Example:
int n = arr.length + 1;
int totalSum = n * (n + 1) / 2;
int arraySum = 0;
for (int num : arr) arraySum += num;
int missingNumber = totalSum - arraySum;

Explanation: This approach is O(n) with O(1) space, leveraging arithmetic to find the missing number.</code></pre>
        `
    },
    {
        "question": "How would you rotate an array to the right by `k` steps without using extra space?",
        "answer": `
            <pre><code>Method: Reverse the array, then reverse the first k elements and the remaining n - k elements.

Example:
public void rotate(int[] arr, int k) {
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

private void reverse(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
}

Explanation: This rotation is done in-place with O(n) time complexity.</code></pre>
        `
    },
    {
        "question": "What is an array-backed stack, and how would you implement it in Java?",
        "answer": `
            <pre><code>An array-backed stack uses an array to store elements in a Last-In-First-Out (LIFO) structure.

Example:
class Stack {
    private int[] arr;
    private int top;

    public Stack(int capacity) {
        arr = new int[capacity];
        top = -1;
    }

    public void push(int value) {
        if (top == arr.length - 1) throw new StackOverflowError();
        arr[++top] = value;
    }

    public int pop() {
        if (top == -1) throw new EmptyStackException();
        return arr[top--];
    }

    public int peek() {
        if (top == -1) throw new EmptyStackException();
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}

Explanation: This implementation simulates a stack using an array and tracks the top position.</code></pre>
        `
    },
    {
        "question": "How would you find the subarray with the maximum sum in an array of both positive and negative numbers?",
        "answer": `
            <pre><code>Use Kadane’s Algorithm, which runs in O(n) time.

Example:
int maxSum = Integer.MIN_VALUE, currentSum = 0;
for (int num : arr) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
}

Explanation: This algorithm keeps track of the maximum sum subarray ending at each position, updating the global maximum.</code></pre>
        `
    },
    {
        "question": "How would you find the majority element in an array (an element that appears more than n/2 times)?",
        "answer": `
            <pre><code>Use Boyer-Moore Voting Algorithm which is O(n) in time and O(1) in space.

Example:
int candidate = arr[0], count = 1;
for (int i = 1; i < arr.length; i++) {
    if (arr[i] == candidate) {
        count++;
    } else if (--count == 0) {
        candidate = arr[i];
        count = 1;
    }
}

Explanation: This finds the candidate for the majority element, but additional verification may be needed to ensure it meets the n/2 condition.</code></pre>
        `
    },
    {
        "question": "How can you sort an array of 0s, 1s, and 2s in linear time without extra space?",
        "answer": `
            <pre><code>Use Dutch National Flag Algorithm.

Example:
int low = 0, mid = 0, high = arr.length - 1;
while (mid <= high) {
    switch (arr[mid]) {
        case 0:
            swap(arr, low++, mid++);
            break;
        case 1:
            mid++;
            break;
        case 2:
            swap(arr, mid, high--);
            break;
    }
}

Explanation: The algorithm uses three pointers to partition the array into sections of 0s, 1s, and 2s in one pass.</code></pre>
        `
    },
    {
        "question": "How would you merge two sorted arrays without using extra space?",
        "answer": `
            <pre><code>Start from the end of the arrays, filling from the last position.

Example:
int m = arr1.length, n = arr2.length;
int i = m - 1, j = n - 1, k = m + n - 1;
while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) arr1[k--] = arr1[i--];
    else arr1[k--] = arr2[j--];
}

Explanation: This approach works in O(m + n) time and modifies arr1 in-place if it has sufficient space.</code></pre>
        `
    },
    {
        "question": "What is the difference between shallow copy and deep copy for arrays?",
        "answer": `
            <pre><code>- Shallow Copy: Copies references in multi-dimensional arrays, so changes in one affect the other (e.g., arr.clone()).
- Deep Copy: Copies the actual elements recursively. For a 2D array, use nested loops to clone each sub-array.

Example:
int[][] deepCopiedArray = new int[original.length][];
for (int i = 0; i < original.length; i++) {
    deepCopiedArray[i] = original[i].clone();
}</code></pre>
        `
    },
    {
        "question": "How would you implement an algorithm to rotate an array to the left by `k` positions in O(n) time and O(1) space?",
        "answer": `
            <pre><code>Reverse the array, then reverse the first n - k elements and the last k elements.

Example:
public void rotateLeft(int[] arr, int k) {
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
}

private void reverse(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
}

Explanation: This rotates in-place with O(n) time complexity by leveraging three reversals.</code></pre>
        `
    }
]
,
"Generics":[
    {
        "question": "What is type erasure, and how does it impact the use of generics in Java?",
        "answer": `
            <pre><code>- Type Erasure: During compilation, Java erases generic type information, replacing it with Object (or the upper bound if specified). This means that the generic type information is not available at runtime, and you cannot use reflection to get the actual generic types.
- Impact:
    - No runtime type information for generics.
    - Restrictions like not being able to create arrays of generic types (new T[]), or instantiating generic types (new T()).
    - Generic types cannot be used in instanceof checks directly (e.g., if (obj instanceof List&lt;String&gt;) is not allowed).</code></pre>
        `
    },
    {
        "question": "Can you explain the difference between `? extends T` and `? super T` in Java generics?",
        "answer": `
            <pre><code>- ? extends T (Covariant): Used to accept T or any subtype of T. It’s mainly used in producer situations where data is retrieved but not modified.
    - Example: List&lt;? extends Number&gt; allows accessing elements as Number but does not allow adding elements (except null).
- ? super T (Contravariant): Used to accept T or any supertype of T. It’s mainly used in consumer situations where data can be added.
    - Example: List&lt;? super Integer&gt; allows adding Integer elements but can only access elements as Object.
- PECS Principle: Producer Extends, Consumer Super.</code></pre>
        `
    },
    {
        "question": "Why can’t we create an array of generic types (e.g., `T[]`)?",
        "answer": `
            <pre><code>Due to type erasure, the actual type T is not known at runtime, and Java arrays are covariant (e.g., String[] is a subtype of Object[]). This can lead to heap pollution, where you could insert an incompatible type into an array.

Example:
List&lt;String&gt;[] stringLists = new List&lt;String&gt;[10]; // Compilation error

Instead, use collections like List&lt;List&lt;T&gt;&gt; to handle arrays of generics safely.</code></pre>
        `
    },
    {
        "question": "What is the `get()` vs. `set()` principle in generics? How does it relate to `List<? extends T>` and `List<? super T>`?",
        "answer": `
            <pre><code>- get() Principle (Producer): List&lt;? extends T&gt; allows you to retrieve elements as type T or its parent but restricts inserting elements since it’s a producer of T.
- set() Principle (Consumer): List&lt;? super T&gt; allows adding elements of type T but limits retrieval to Object since it’s a consumer of T.

Usage:
- List&lt;? extends T&gt;: Suitable when you want to read from the list.
- List&lt;? super T&gt;: Suitable when you want to write to the list.</code></pre>
        `
    },
    {
        "question": "What is a bounded type parameter, and how do you define upper and lower bounds in generics?",
        "answer": `
            <pre><code>- Bounded Type Parameter: Specifies constraints on the types that can be used as type arguments.
    - Upper Bound: T extends Number restricts T to Number or its subclasses.
    - Lower Bound: T super Integer restricts T to Integer or its superclasses (useful only in wildcard parameters, e.g., ? super Integer).

Example:
public &lt;T extends Number&gt; void addNumbers(List&lt;T&gt; list) { /*...*/ }</code></pre>
        `
    },
    {
        "question": "Can you use generics with static methods? Why or why not?",
        "answer": `
            <pre><code>Yes, you can use generics in static methods, but they must declare their own type parameters because static methods do not have access to the class’s type parameters.

Example:
public static &lt;T&gt; void printList(List&lt;T&gt; list) {
    for (T element : list) {
        System.out.println(element);
    }
}

Note: A static field cannot use the generic type parameter of the class, as it’s tied to the class instance, not the class itself.</code></pre>
        `
    },
    {
        "question": "Explain why `List<String>` and `List<Object>` are not compatible in Java generics.",
        "answer": `
            <pre><code>In Java, generics are invariant, meaning List&lt;String&gt; is not a subtype of List&lt;Object&gt;. If they were covariant, it would be possible to insert an Object (non-String) into a List&lt;String&gt;, violating type safety.

Solution: Use wildcards, like List&lt;? extends Object&gt;, if you need to allow different types.</code></pre>
        `
    },
    {
        "question": "Can you overload methods with different generic types in Java?",
        "answer": `
            <pre><code>No, you cannot overload methods with different generic types if the erasure results in the same method signature. Due to type erasure, void method(List&lt;Integer&gt; list) and void method(List&lt;String&gt; list) would both become void method(List list), causing a compilation error.

Example:
public void method(List&lt;Integer&gt; list) { }
public void method(List&lt;String&gt; list) { } // Compilation error</code></pre>
        `
    },
    {
        "question": "How would you implement a generic method that accepts a `List` of any subtype of `Number` and returns the sum of its elements?",
        "answer": `
            <pre><code>Use an upper-bounded wildcard (? extends Number) to accept any subtype of Number.

Example:
public static double sumOfList(List&lt;? extends Number&gt; list) {
    double sum = 0.0;
    for (Number num : list) {
        sum += num.doubleValue();
    }
    return sum;
}</code></pre>
        `
    },
    {
        "question": "What are the limitations of type inference in Java generics?",
        "answer": `
            <pre><code>- Type inference limitations: Sometimes Java cannot infer the type parameter, requiring explicit specification (e.g., &lt;String&gt;myMethod()).
- Diamond Operator: The diamond operator (&lt;&gt;) only works when instantiating a generic type; it cannot infer types in nested generics.
- Generic Constructors: Type inference is limited in constructors, requiring the type to be explicitly specified in certain cases.</code></pre>
        `
    },
    {
        "question": "What is a raw type in Java generics, and why should you avoid using it?",
        "answer": `
            <pre><code>- Raw Type: A generic type without its type parameter, e.g., List instead of List&lt;String&gt;.
- Avoidance Reason:
    - Using raw types bypasses generics' type safety, which can lead to ClassCastException at runtime.
    - Raw types do not allow compiler checks for type consistency.</code></pre>
        `
    },
    {
        "question": "Can you explain covariance and contravariance in Java using generics?",
        "answer": `
            <pre><code>- Covariance (? extends T): Allows subtypes of T in generics, making it safe to read elements as T. It’s like saying, “I can read T or any subtype of T.”
- Contravariance (? super T): Allows supertypes of T, making it safe to write elements of T. It’s like saying, “I can write elements of type T or any supertype of T.”

Covariance and contravariance allow flexibility when using generics while maintaining type safety.</code></pre>
        `
    },
    {
        "question": "What is the difference between `T`, `E`, `K`, `V`, and `?` in Java generics?",
        "answer": `
            <pre><code>- T: Generic Type, often used for any general object type.
- E: Element, commonly used for collections (e.g., List&lt;E&gt;).
- K and V: Key and Value, used in key-value pairs (e.g., Map&lt;K, V&gt;).
- ?: Wildcard, representing an unknown type, often with bounds (? extends T, ? super T) for flexibility.</code></pre>
        `
    },
    {
        "question": "Why can’t generic types be used with `instanceof` in Java?",
        "answer": `
            <pre><code>Due to type erasure, generic types lose their type information at runtime, making instanceof checks meaningless.

Example (invalid):
if (obj instanceof List&lt;String&gt;) { /* invalid */ }

Workaround: Use raw types (instanceof List) or check elements individually if needed.</code></pre>
        `
    },
    {
        "question": "What does `Class<T>` represent in generics, and when would you use it?",
        "answer": `
            <pre><code>Class&lt;T&gt; represents a generic Class type, which allows for type-safe class references. It’s used in scenarios involving reflection or creating instances of generics.

Example:
public &lt;T&gt; T createInstance(Class&lt;T&gt; clazz) throws InstantiationException, IllegalAccessException {
    return clazz.newInstance();
}

Usage: Allows you to create instances of type T in a type-safe way, bypassing type erasure limitations.</code></pre>
        `
    },
    {
        "question": "How would you implement a generic `Pair<T, U>` class in Java?",
        "answer": `
            <pre><code>public class Pair&lt;T, U&gt; {
    private final T first;
    private final U second;

    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }

    public T getFirst() { return first; }
    public U getSecond() { return second; }
}

Explanation: The generic Pair class can hold two elements of different types (T and U), allowing flexible pair objects.</code></pre>
        `
    },
    {
        "question": "What are recursive type bounds in generics? Give an example.",
        "answer": `
            <pre><code>Recursive type bounds use a type parameter to refer to itself for more specific bounds. Common in scenarios like Comparable.

Example:
public class MyClass&lt;T extends Comparable&lt;T&gt;&gt; { /*...*/ }

Explanation: This enforces that T can be compared to other T instances, which is useful for classes that need to implement Comparable with self-bounded types.</code></pre>
        `
    },
    {
        "question": "What is a generic method, and how does it differ from a generic class?",
        "answer": `
            <pre><code>- Generic Method: Has its own type parameter independent of the class’s type parameter. It’s useful when only the method requires generics.
    Example: public &lt;T&gt; void printList(List&lt;T&gt; list) { /*...*/ }
- Generic Class: Defines a generic type for the entire class. All methods within the class can use the generic type parameter.
    Example: public class Box&lt;T&gt; { private T item; /*...*/ }

Difference: Generic methods are type-agnostic at the method level, while generic classes apply a type across all instances and methods.</code></pre>
        `
    },
    {
        "question": "How does Java handle generics with arrays, and why are they incompatible?",
        "answer": `
            <pre><code>- Arrays are covariant (e.g., String[] is a subtype of Object[]), but generics are invariant (e.g., List&lt;String&gt; is not a subtype of List&lt;Object&gt;). Due to type erasure, arrays can lead to runtime exceptions when combined with generics.

Example: List&lt;T&gt;[] is not allowed since it can cause runtime errors.
Workaround: Use List&lt;List&lt;T&gt;&gt; instead of T[].</code></pre>
        `
    },
    {
        "question": "What is the purpose of the diamond operator (`<>`) in Java generics?",
        "answer": `
            <pre><code>Introduced in Java 7, the diamond operator (&lt;&gt;) enables type inference for generic types, making code shorter and cleaner.

Example:
List&lt;String&gt; list = new ArrayList&lt;&gt;(); // infers as ArrayList&lt;String&gt;

Benefit: Reduces verbosity by avoiding redundant type information on both sides of the assignment.</code></pre>
        `
    }
]
,
"CICD": [
    {
        "question": "What are the main differences between Continuous Integration, Continuous Deployment, and Continuous Delivery?",
        "answer": `
            <pre><code>- Continuous Integration (CI): Integrates code changes frequently into a shared repository, running automated builds and tests to catch issues early. The focus is on integration and validation.
- Continuous Delivery (CD): Extends CI by ensuring code is always in a deployable state, but the deployment to production is manual.
- Continuous Deployment: Automates the entire pipeline from code commit to production deployment, with every change automatically deployed to production once tests pass.</code></pre>
        `
    },
    {
        "question": "How would you manage secrets (e.g., API keys, passwords) in a CI/CD pipeline?",
        "answer": `
            <pre><code>- Use a secrets management tool like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault to securely manage and inject secrets during deployment.
- Environment variables can store secrets temporarily, especially if encrypted or managed by the CI/CD tool’s secret management features.
- Avoid hardcoding secrets in configuration files or code, and ensure sensitive data is never logged or exposed.
- Use access control policies to limit access to secrets only to necessary stages in the pipeline.</code></pre>
        `
    },
    {
        "question": "What are artifacts in a CI/CD pipeline, and why are they important?",
        "answer": `
            <pre><code>Artifacts are files or binaries produced at various stages of the pipeline (e.g., JARs, Docker images, static files) and are necessary for subsequent stages like deployment or testing.

Importance:
- Artifacts allow the sharing of build outputs across pipeline stages.
- They help achieve consistency by using the exact same binaries that passed testing.
- Artifacts facilitate rollback if needed by keeping track of specific versions.</code></pre>
        `
    },
    {
        "question": "Explain the concept of `Blue-Green Deployment` and its benefits in CI/CD.",
        "answer": `
            <pre><code>Blue-Green Deployment involves running two identical environments, where one (e.g., blue) is the live production environment and the other (e.g., green) is an idle environment with the latest deployment. Once verified, traffic is switched to the green environment.

Benefits:
- Zero downtime during deployments.
- Quick rollback capability by switching traffic back to the previous environment.
- Allows safe testing of new releases in a production-like environment.</code></pre>
        `
    },
    {
        "question": "How do you handle failed deployments in a CI/CD pipeline?",
        "answer": `
            <pre><code>- Automatic Rollbacks: Set up rollback mechanisms to automatically revert to the last successful deployment if a deployment fails.
- Notifications and Alerts: Configure notifications to inform teams of failed deployments for rapid troubleshooting.
- Isolate Issues: Use canary deployments to test changes on a subset of servers before a full rollout.
- Post-mortem Analysis: Analyze logs, test results, and metrics to understand the root cause of the failure and improve the pipeline.</code></pre>
        `
    },
    {
        "question": "What are `Canary Releases`, and when would you use them in a CI/CD pipeline?",
        "answer": `
            <pre><code>A Canary Release deploys a new version of an application to a small, controlled subset of users or servers. Gradually, traffic is shifted to the new version as it proves stable.

Usage: Ideal for mitigating risk with critical updates, testing features in production on a limited scale, and gathering real-user feedback before a full rollout.</code></pre>
        `
    },
    {
        "question": "What is a `Pipeline as Code`, and what are its benefits?",
        "answer": `
            <pre><code>Pipeline as Code refers to defining the CI/CD pipeline steps as code, usually in a version-controlled file (e.g., Jenkinsfile, .gitlab-ci.yml).

Benefits:
- Version control for pipeline definitions, enabling collaboration, reviews, and rollbacks.
- Reusability and consistency across environments.
- Allows easy testing, modification, and deployment of pipeline changes alongside application code.</code></pre>
        `
    },
    {
        "question": "What are some best practices for designing a CI/CD pipeline?",
        "answer": `
            <pre><code>- Keep pipelines modular and concise: Break down pipelines into stages (e.g., build, test, deploy).
- Automate testing and quality checks: Include unit tests, integration tests, and code quality analysis (e.g., SonarQube).
- Fail Fast: Ensure pipelines fail quickly if there’s an issue to avoid wasting resources.
- Use isolated environments: Run tests and deployments in isolated containers or environments to avoid conflicts.
- Secure the pipeline: Protect against unauthorized access and secure secrets.</code></pre>
        `
    },
    {
        "question": "How would you ensure a rollback is possible in a CI/CD process?",
        "answer": `
            <pre><code>- Use versioned artifacts: Store all successful builds with version tags, enabling easy access to a specific version.
- Blue-Green or Canary Deployments: Enable easy switching between versions if issues arise.
- Database Migrations: Use database migrations that are reversible or support backward compatibility.
- Automated Rollback Scripts: Create rollback scripts that revert the system to the last stable version quickly.</code></pre>
        `
    },
    {
        "question": "What is a `Staging` environment, and why is it critical in CI/CD?",
        "answer": `
            <pre><code>A Staging environment is a pre-production environment that closely mirrors production, allowing for realistic testing before deployment.

Importance:
- Ensures final testing under production-like conditions, which helps catch issues that didn’t surface in lower environments.
- Provides a controlled environment for testing critical end-to-end scenarios and performance.
- Reduces the risk of unexpected behavior in production.</code></pre>
        `
    },
    {
        "question": "How would you handle database schema changes in a CI/CD pipeline?",
        "answer": `
            <pre><code>- Migration Tools: Use migration tools like Liquibase or Flyway to handle schema changes in a version-controlled manner.
- Backwards Compatibility: Design changes to be backward-compatible, allowing older versions to function if needed during deployments.
- Automate Migrations: Automate schema updates as part of the CI/CD pipeline, but execute them in a way that can roll back if issues occur.
- Use Feature Toggles: Roll out schema changes progressively if they’re tied to new features, allowing for smoother transitions.</code></pre>
        `
    },
    {
        "question": "What is `immutable infrastructure` and how does it relate to CI/CD?",
        "answer": `
            <pre><code>Immutable infrastructure means that once a server or environment is configured and deployed, it is never modified. Instead of updating components in place, you replace the entire instance with a new version.

Relation to CI/CD: Simplifies the deployment pipeline and rollbacks, as new changes deploy by creating fresh instances. It ensures consistency and eliminates configuration drift.</code></pre>
        `
    },
    {
        "question": "How would you implement testing (e.g., unit tests, integration tests, and end-to-end tests) in a CI/CD pipeline?",
        "answer": `
            <pre><code>- Unit Tests: Run these early in the pipeline to catch syntax and logic errors.
- Integration Tests: Run after the build stage to test interactions between components and verify integration correctness.
- End-to-End Tests: Run in a staging environment to validate the complete flow and identify issues from the user’s perspective.
- Parallel Testing: Use parallelization to run multiple tests simultaneously, reducing pipeline time.</code></pre>
        `
    },
    {
        "question": "What are `webhooks`, and how are they used in CI/CD?",
        "answer": `
            <pre><code>Webhooks are HTTP callbacks triggered by events, such as code commits or pull requests, to notify external systems.

Usage in CI/CD: Webhooks can trigger CI/CD pipelines on events like code pushes to a repository, enabling immediate build and deployment workflows. They are crucial for real-time updates and automated responses.</code></pre>
        `
    },
    {
        "question": "Explain how `caching` can be used to improve the performance of CI/CD pipelines.",
        "answer": `
            <pre><code>- Dependencies Caching: Cache dependencies (like Maven, NPM packages) to avoid re-downloading them each time, speeding up the build process.
- Build Artifacts: Store build artifacts from previous runs to reuse during deployments or testing, avoiding redundant rebuilds.
- Docker Layers: Cache Docker layers in Docker-based CI/CD pipelines to speed up image building.
- Test Results: Use test result caching to skip tests for components that haven’t changed.</code></pre>
        `
    },
    {
        "question": "What is the `rolling deployment` strategy in CI/CD, and how does it differ from blue-green deployments?",
        "answer": `
            <pre><code>In a rolling deployment, instances are gradually replaced with new ones until all instances run the updated version. This approach ensures minimal downtime as the service is never entirely offline.

Difference from Blue-Green: Unlike blue-green, rolling deployments do not require two separate environments; they progressively replace the old version within the same environment.</code></pre>
        `
    },
    {
        "question": "How do you manage pipeline failures in production deployments?",
        "answer": `
            <pre><code>- Automated Rollbacks: Trigger automatic rollback to the last stable release if deployment fails.
- Stage-based Approval: Implement manual approval steps before production to validate critical changes.
- Logging and Monitoring: Collect detailed logs and metrics to diagnose failures and understand root causes.
- Alerts: Set up alerts to notify relevant stakeholders for immediate action when a failure occurs.</code></pre>
        `
    },
    {
        "question": "Explain the role of an `API Gateway` in a microservices-based CI/CD pipeline.",
        "answer": `
            <pre><code>An API Gateway acts as a single entry point for client requests, routing them to appropriate microservices.

Role in CI/CD: Simplifies the deployment of microservices by allowing a single point to manage routing, authentication, rate-limiting, and canary testing, making it easier to manage and test microservices independently.</code></pre>
        `
    },
    {
        "question": "What is the difference between a `push` and `pull` deployment model in CI/CD?",
        "answer": `
            <pre><code>- Push Model: The CI/CD system pushes updates directly to the target servers. Typically used in continuous deployment pipelines.
- Pull Model: The target servers pull updates from a central repository, often triggered by webhooks or scheduled polling. Common in containerized deployments (e.g., Kubernetes), where the orchestrator pulls new images.</code></pre>
        `
    },
    {
        "question": "How would you implement monitoring and alerting for a CI/CD pipeline?",
        "answer": `
            <pre><code>- Pipeline Metrics: Monitor key metrics such as build time, failure rate, deployment success rate, and test coverage.
- Log Aggregation: Collect logs from all stages in centralized logging tools (e.g., ELK Stack, Splunk).
- Error Monitoring: Integrate tools like Sentry or Datadog to capture and analyze errors in real-time.
- Alerting: Set up alerts for pipeline failures, high error rates, and performance bottlenecks to notify relevant teams promptly.</code></pre>
        `
    },
    {
        "question": "What are some security best practices in CI/CD pipelines?",
        "answer": `
            <pre><code>- Secure Access Control: Limit access to CI/CD tools and sensitive data with role-based access control.
- Encrypt Secrets: Use environment variables, secret management solutions, or encrypted files for managing sensitive information.
- Code Scanning: Integrate tools for static code analysis and vulnerability scanning (e.g., Snyk, SonarQube).
- Regular Audits: Conduct regular audits on the pipeline’s dependencies, configurations, and access permissions.
- Container Scanning: Scan Docker images for vulnerabilities before deployment to production.</code></pre>
        `
    },
    {
        "question": "How does GitOps relate to CI/CD, and what are its advantages?",
        "answer": `
            <pre><code>GitOps uses Git as the single source of truth for declarative infrastructure and applications, automating deployments based on Git state changes.

Advantages:
- Enables auditable and version-controlled infrastructure changes.
- Improves collaboration by using Git’s workflows for changes.
- Offers consistent rollback and recovery, as the desired state is versioned and stored in Git.</code></pre>
        `
    }
]
,
"production support": [
    {
        "question": "How would you troubleshoot a `NullPointerException` that occurs sporadically in production?",
        "answer": `
            <pre><code>- Logs Analysis: Check logs for stack traces to pinpoint the exact line of code causing the NullPointerException.
- Reproduce the Issue: Try to recreate the scenario based on production input data if possible.
- Null Checks: Review the code to ensure necessary null checks, especially for objects that may be intermittently null due to race conditions or missing data.
- Concurrency Issues: Check if multiple threads are modifying shared resources and causing unexpected null values.
- Monitor Application State: Use logging and monitoring tools to trace object lifecycles, especially for objects that should always be initialized.</code></pre>
        `
    },
    {
        "question": "What is a memory leak, and how would you detect and fix it in a Java application running in production?",
        "answer": `
            <pre><code>A memory leak occurs when objects that are no longer needed are not garbage-collected, causing gradual memory consumption.

Detection:
- Use monitoring tools (e.g., JVisualVM, JProfiler, or Grafana) to track memory usage and GC patterns.
- Enable heap dumps on OutOfMemoryError and analyze them to find unreachable objects.
- Analyze logs for OutOfMemoryError and frequent GC events that indicate memory pressure.

Fixing:
- Identify and resolve code issues where objects are retained unintentionally (e.g., static fields, long-lived collections).
- Release resources explicitly, such as closing connections, streams, or sessions.
- Use WeakReference or SoftReference for caches to allow garbage collection.</code></pre>
        `
    },
    {
        "question": "How would you identify and resolve high CPU usage by a Java application in production?",
        "answer": `
            <pre><code>Identify:
- Use top or htop commands (Linux) to identify the high CPU-consuming processes.
- Use jstack to capture thread dumps of the Java process to see which threads are consuming CPU.
- Analyze thread dumps to identify potential loops, synchronization issues, or blocking operations.

Resolve:
- Optimize CPU-bound code, such as reducing unnecessary calculations or complex algorithms.
- Address threading issues by revisiting synchronization points or reducing contention.
- Consider tuning the garbage collector if GC is contributing to high CPU usage.
- If a specific service or endpoint causes CPU spikes, consider load balancing or throttling.</code></pre>
        `
    },
    {
        "question": "How would you handle a scenario where the application slows down due to frequent full GCs?",
        "answer": `
            <pre><code>- Monitor GC Logs: Enable GC logging to analyze frequency, duration, and types of garbage collections (Minor vs. Full GC).
- Analyze Heap Usage: Identify which memory pool (young, old, perm/metaspace) is causing GC pressure.

Tuning Options:
- Adjust heap sizes with -Xmx and -Xms to reduce GC frequency.
- Use appropriate GC algorithms (e.g., G1, CMS, ZGC) based on application needs.
- Increase NewRatio or SurvivorRatio if young generation GC is frequent.
- Memory Leak Check: Ensure there are no memory leaks, as they can cause frequent GCs.</code></pre>
        `
    },
    {
        "question": "What steps would you take if your application starts throwing `OutOfMemoryError` in production?",
        "answer": `
            <pre><code>- Generate Heap Dump: Enable heap dump generation on OutOfMemoryError to analyze the memory usage and find the cause.
- Analyze Heap Dump: Use tools like Eclipse MAT or VisualVM to analyze retained objects and find memory leak suspects.
- Reduce Memory Footprint: Optimize memory usage by checking for large collections, unnecessary object retention, and reducing cache size if needed.
- Tune JVM Parameters: Increase the heap size (-Xmx), adjust GC settings, and review memory configurations.
- Temporary Solutions: Restart the application as a temporary fix but continue root cause analysis to avoid recurrence.</code></pre>
        `
    },
    {
        "question": "How would you address a deadlock situation in a production Java application?",
        "answer": `
            <pre><code>- Capture Thread Dump: Use jstack or monitoring tools to capture thread dumps and identify deadlocked threads.
- Analyze Threads: Look for threads in a BLOCKED state waiting on locks held by other threads, indicating a deadlock.

Resolving Code:
- Reorder lock acquisition to follow a consistent order across the application.
- Use tryLock (from ReentrantLock) with a timeout to avoid deadlock situations.
- Use higher-level constructs like ConcurrentHashMap or java.util.concurrent locks to minimize locking needs.

Temporary Fix: Restart the application to release deadlocks but continue analyzing root causes to prevent future deadlocks.</code></pre>
        `
    },
    {
        "question": "How would you debug and resolve a high response time issue in a specific endpoint in production?",
        "answer": `
            <pre><code>- Monitor and Profile: Use APM tools (e.g., New Relic, Dynatrace) to analyze the response time of specific endpoints and identify bottlenecks.
- Analyze Logs: Check application logs for slow database queries, external API calls, or long processing times.
- Code Profiling: Identify inefficient code, such as unnecessary loops, complex calculations, or blocking I/O operations.
- Optimize External Calls: Reduce external API dependencies, batch queries, or optimize database queries (e.g., indexing).
- Caching: Introduce caching for frequently accessed data to reduce processing time and database load.</code></pre>
        `
    },
    {
        "question": "How can you troubleshoot a production issue where users are experiencing intermittent connection timeouts?",
        "answer": `
            <pre><code>- Network Analysis: Check network logs and latency to identify issues with connectivity, firewalls, or load balancers.
- Application Logs: Review logs for timeouts in external API calls, database connections, or thread pool exhaustion.
- Connection Pool Settings: Ensure the database or external service connection pool is adequately sized and not maxed out.
- Retry Mechanisms: Implement retry logic for transient errors to improve resilience.
- Load Testing: Run load tests to simulate production load and identify potential bottlenecks in handling peak traffic.</code></pre>
        `
    },
    {
        "question": "What is the role of `Retryable` mechanisms in production support, and when would you use them?",
        "answer": `
            <pre><code>Retryable mechanisms automatically retry operations (like HTTP requests or database queries) in case of transient failures (e.g., network latency, timeouts).

Usage: Helpful for handling temporary errors, network failures, or intermittent external service issues without manual intervention.

Configuration: Implement retries with exponential backoff to avoid overwhelming the service.

Considerations: Avoid retrying operations that are not idempotent (e.g., database updates), as retries could cause data inconsistencies.</code></pre>
        `
    },
    {
        "question": "How would you handle a sudden spike in application traffic that is causing performance degradation?",
        "answer": `
            <pre><code>- Scale Resources: Scale horizontally (add more instances) or vertically (increase resources like CPU, memory).
- Load Balancing: Ensure proper load balancing configuration to distribute traffic evenly across instances.
- Rate Limiting: Implement rate limiting to manage requests and prevent resource exhaustion.
- Caching: Cache frequently accessed data and responses to reduce processing overhead.
- Queue Management: Use queues for processing requests asynchronously to handle spikes without overwhelming the application.</code></pre>
        `
    },
    {
        "question": "How would you monitor and maintain logs for a Java application in production?",
        "answer": `
            <pre><code>- Log Aggregation: Use centralized logging solutions (e.g., ELK Stack, Splunk) to aggregate logs from multiple instances for easier analysis.
- Log Levels: Configure appropriate log levels (e.g., ERROR, WARN, INFO) to avoid excessive logging, which can degrade performance.
- Log Rotation: Set up log rotation to manage log file sizes and prevent disk space issues.
- Structured Logging: Use structured log formats (e.g., JSON) for better searchability and analysis.
- Alerts: Set up alerts for critical errors or anomalies in the logs to quickly detect issues.</code></pre>
        `
    },
    {
        "question": "What would you do if you encounter `java.lang.OutOfMemoryError: Metaspace` in production?",
        "answer": `
            <pre><code>- Increase Metaspace Size: Adjust the MaxMetaspaceSize parameter if possible, to provide more memory to class metadata.
- Class Loading Analysis: Analyze for potential classloader leaks, often caused by frequently loaded classes that aren’t unloaded.
- Redeployment Frequency: Ensure the application is not frequently redeploying classes, as this can fill up Metaspace.
- Optimize Dependencies: Remove unnecessary libraries or dependencies that might be contributing to high Metaspace usage.</code></pre>
        `
    },
    {
        "question": "How would you ensure thread safety in a multi-threaded production application?",
        "answer": `
            <pre><code>- Use Thread-safe Collections: Use ConcurrentHashMap, CopyOnWriteArrayList, and other concurrent collections instead of traditional collections.
- Synchronized Blocks: Use synchronized blocks carefully to avoid deadlocks and reduce contention.
- Atomic Classes: Use atomic variables (AtomicInteger, AtomicLong) for atomic updates without needing locks.
- Thread Pooling: Use ExecutorService to manage thread pools and prevent resource exhaustion.
- Avoid Static Mutable State: Avoid sharing mutable static variables across threads to prevent inconsistent states.</code></pre>
        `
    },
    {
        "question": "What is your approach to diagnose and fix a race condition in a Java application running in production?",
        "answer": `
            <pre><code>- Identify Symptoms: Check for unexpected results, inconsistent data, or sporadic failures in logs that may indicate concurrent modification.
- Thread Dumps: Analyze thread dumps to understand how threads interact and where potential conflicts arise.
- Synchronize Access: Apply synchronization to critical sections or use thread-safe data structures.
- Atomic Variables and Locks: Use atomic operations or locks to ensure data consistency without blocking all threads.
- Testing: Run tests with concurrent users or requests to simulate and observe race conditions in a controlled environment.</code></pre>
        `
    },
    {
        "question": "How would you handle a situation where a specific database query is slowing down the production application?",
        "answer": `
            <pre><code>- Analyze Query Execution Plan: Use database tools to view the query execution plan and identify bottlenecks.
- Indexing: Add or adjust indexes on columns used in WHERE clauses, JOINs, or ORDER BY to improve query performance.
- Optimize Query Structure: Rewrite complex queries to reduce joins or nested queries, if possible.
- Caching: Cache frequently queried data to reduce database load.
- Database Connection Pooling: Ensure optimal configuration for the connection pool to handle concurrent queries efficiently.</code></pre>
        `
    }
]
,
"Exceptions":[
    {
        "question": "What is the difference between `checked` and `unchecked` exceptions in Java?",
        "answer": `
            <pre><code>- Checked Exceptions: Derived from Exception (but not RuntimeException). These exceptions are checked at compile-time and must be either caught or declared in the method signature using throws. Examples include IOException, SQLException.
- Unchecked Exceptions: Derived from RuntimeException and are not checked at compile-time. They represent programming errors like NullPointerException, ArrayIndexOutOfBoundsException, and do not need to be explicitly handled or declared.</code></pre>
        `
    },
    {
        "question": "Can we override a method to throw a different exception than the one declared in the superclass?",
        "answer": `
            <pre><code>- No, a subclass method cannot throw a broader checked exception than the superclass method. However, it can throw the same or a more specific checked exception.
- Unchecked Exception: It is allowed to throw an unchecked exception (like NullPointerException) even if the superclass method doesn’t declare it.

Example:
class SuperClass {
    void method() throws IOException { /* ... */ }
}

class SubClass extends SuperClass {
    @Override
    void method() throws FileNotFoundException { /* specific checked exception allowed */ }
}</code></pre>
        `
    },
    {
        "question": "What is a `finally` block, and when might it not execute?",
        "answer": `
            <pre><code>The finally block contains code that executes after a try or catch block, usually for cleanup, like closing resources. However, there are cases where finally might not execute:
- System exit (System.exit(0)) is called before finally.
- JVM crashes or is forcefully terminated.
- A StackOverflowError or OutOfMemoryError prevents execution.
- The thread running the code is interrupted or killed.</code></pre>
        `
    },
    {
        "question": "What is a `try-with-resources` statement, and how does it work?",
        "answer": `
            <pre><code>The try-with-resources statement automatically closes resources (e.g., files, network connections) that implement AutoCloseable. Resources are closed automatically after the try block completes, whether an exception occurs or not.

Example:
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    // Use the resource
} catch (IOException e) {
    e.printStackTrace();
}

Benefit: Simplifies resource management, reducing the need for explicit finally blocks to close resources.</code></pre>
        `
    },
    {
        "question": "Can you explain exception chaining in Java?",
        "answer": `
            <pre><code>Exception Chaining allows one exception to be associated with another exception, which helps track the root cause. Java provides constructors in Throwable to pass a cause parameter, which is another Throwable.

Example:
try {
    // code that throws SQLException
} catch (SQLException e) {
    throw new IOException("Database error", e); // chain SQLException as cause
}

Usage: Helps in debugging by preserving the original cause of an exception.</code></pre>
        `
    },
    {
        "question": "What is the purpose of `throws` vs `throw` in Java?",
        "answer": `
            <pre><code>- throws: Declares exceptions that a method can throw, allowing checked exceptions to be handled by the calling code.
- throw: Used to explicitly throw an exception within the method or block.

Example:
void method() throws IOException { // declaration
    throw new IOException("An I/O error occurred"); // explicit throw
}</code></pre>
        `
    },
    {
        "question": "What is `StackOverflowError`, and how can you avoid it?",
        "answer": `
            <pre><code>StackOverflowError occurs when there’s excessive recursion or an infinite loop in recursive methods, causing the call stack to exceed its limit.

To avoid it:
- Ensure recursion has a proper base case.
- Limit recursion depth or switch to an iterative approach if possible.
- Increase stack size with -Xss JVM option if needed (though this is not always ideal).</code></pre>
        `
    },
    {
        "question": "What happens if an exception is thrown from a `finally` block?",
        "answer": `
            <pre><code>If an exception is thrown in the finally block, it overrides any exception thrown in the try or catch block, meaning the original exception is lost. This is usually a bad practice as it can hide important errors.

Example:
try {
    throw new IOException("Original Exception");
} finally {
    throw new RuntimeException("Exception in finally"); // Overrides original
}

Solution: Avoid throwing exceptions in finally or handle them within finally itself.</code></pre>
        `
    },
    {
        "question": "How would you implement a custom exception in Java, and when should you create one?",
        "answer": `
            <pre><code>Custom exceptions are created by extending Exception or RuntimeException (for checked or unchecked exceptions, respectively). Custom exceptions are useful for application-specific errors with meaningful messages.

Example:
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

Usage: Custom exceptions clarify code, making it easier to understand what went wrong based on exception names and messages.</code></pre>
        `
    },
    {
        "question": "What are `Error` and `Exception` classes in Java, and how do they differ?",
        "answer": `
            <pre><code>- Error: Represents serious problems that are not intended to be caught, like OutOfMemoryError and StackOverflowError. Errors usually indicate issues with the JVM or environment.
- Exception: Represents conditions that applications might want to catch and handle. Examples include IOException and ArithmeticException.

Key Difference: Errors are usually beyond the control of the application, while exceptions are conditions that can be handled programmatically.</code></pre>
        `
    },
    {
        "question": "Can we catch multiple exceptions in a single `catch` block in Java?",
        "answer": `
            <pre><code>Yes, Java 7 introduced multi-catch blocks, allowing you to catch multiple exceptions in a single catch clause by separating them with the | operator.

Example:
try {
    // code that may throw multiple exceptions
} catch (IOException | SQLException e) {
    e.printStackTrace();
}

Benefit: Reduces code duplication and enhances readability.</code></pre>
        `
    },
    {
        "question": "What is a `NullPointerException`, and what are some best practices to avoid it?",
        "answer": `
            <pre><code>NullPointerException (NPE) occurs when trying to use an object reference that has not been initialized (i.e., it is null).

Best Practices to Avoid NPE:
- Use Optional for potentially null values in Java 8+.
- Perform null checks before accessing objects.
- Initialize variables immediately if possible.
- Use Objects.requireNonNull() to assert non-null values.
- Avoid returning null from methods whenever possible.</code></pre>
        `
    },
    {
        "question": "What is a `Suppressed Exception`, and how does it work in Java?",
        "answer": `
            <pre><code>Suppressed exceptions were introduced with try-with-resources. If an exception occurs in the try block, and another exception is thrown in the finally (or resource closing) block, the original exception is retained, and the second is added as a suppressed exception to avoid losing context.

Example:
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    // Code that may throw exception
} catch (IOException e) {
    for (Throwable t : e.getSuppressed()) {
        t.printStackTrace(); // Access suppressed exceptions
    }
}</code></pre>
        `
    },
    {
        "question": "What is `Exception Propagation`, and how does it work?",
        "answer": `
            <pre><code>Exception Propagation is the process of passing an exception up the call stack until it’s handled by a matching catch block or reaches the JVM, which then prints the stack trace and terminates the program. Checked exceptions must be either handled or declared to propagate them, while unchecked exceptions propagate automatically.</code></pre>
        `
    },
    {
        "question": "Why is `throw` used with `new` in `throw new Exception`?",
        "answer": `
            <pre><code>throw new Exception creates and throws a new exception instance. throw is used to explicitly throw the exception, while new Exception creates the actual exception object with optional custom messages or causes.

Example:
throw new IllegalArgumentException("Invalid argument");

Here, IllegalArgumentException is instantiated, and throw initiates its propagation.</code></pre>
        `
    },
    {
        "question": "Can you catch `Error` in Java? Is it a good practice?",
        "answer": `
            <pre><code>Technically, Error can be caught using a catch block. However, it’s not recommended since Errors usually indicate critical issues (like OutOfMemoryError) that the application cannot handle or recover from.

Example:
try {
    // Some code that may throw an Error
} catch (Error e) {
    e.printStackTrace(); // Not recommended for production use
}

Best Practice: Let Errors terminate the program unless there’s a specific reason to catch them (e.g., in a controlled environment).</code></pre>
        `
    },
    {
        "question": "What is `java.lang.ExceptionInInitializerError`, and when does it occur?",
        "answer": `
            <pre><code>ExceptionInInitializerError occurs if an exception is thrown during static initialization (e.g., in a static block or field initializer). This error wraps the underlying exception, which can be retrieved using getCause().

Example:
static {
    int result = 1 / 0; // Will cause ExceptionInInitializerError
}</code></pre>
        `
    },
    {
        "question": "Explain `IllegalStateException` and when you might use it.",
        "answer": `
            <pre><code>IllegalStateException is thrown when a method is invoked at an inappropriate time or the object is in an inappropriate state for the requested operation. For example, calling next() on an Iterator without calling hasNext() can lead to IllegalStateException.

Example:
public void start() {
    if (isStarted) {
        throw new IllegalStateException("Already started");
    }
    isStarted = true;
}</code></pre>
        `
    },
    {
        "question": "How would you handle custom error messages and logging in Java exceptions?",
        "answer": `
            <pre><code>- Use a custom exception with meaningful messages to convey specific error information.
- Log the exception with a logger instead of using printStackTrace() for better control and logging formats.
- Consider Logger.error(message, exception) to provide context and capture the full stack trace.

Example:
private static final Logger logger = Logger.getLogger(MyClass.class.getName());

try {
    // code that may throw an exception
} catch (MyCustomException e) {
    logger.error("Error occurred while processing", e);
}</code></pre>
        `
    },
    {
        "question": "What is the difference between `throw` and `throws` in Java?",
        "answer": `
            <pre><code>- throw: Used to explicitly throw an exception from a method or block.
- throws: Used in method declarations to indicate that a method might throw specific exceptions, requiring callers to handle or declare them.

Example:
public void method() throws IOException {
    throw new IOException("Custom IO error");
}</code></pre>
        `
    }
]
,
"Hard Java": [
    {
        "question": "What is the difference between `final`, `finally`, and `finalize()` in Java?",
        "answer": `
            <pre><code>- final: A keyword used to declare constants, prevent inheritance (for classes), and prevent method overriding (for methods).
- finally: A block in a try-catch statement that always executes, regardless of whether an exception was thrown or handled, typically used for resource cleanup.
- finalize(): A method in Object class called by the garbage collector before an object is reclaimed. It's rarely used and is considered unreliable for resource management.</code></pre>
        `
    },
    {
        "question": "How does the `HashMap` work internally in Java, and what are the common issues with it in a multithreaded environment?",
        "answer": `
            <pre><code>- HashMap uses an array of buckets (linked lists or balanced trees) to store key-value pairs based on their hash codes. When a key-value pair is added, HashMap computes the hash code and places the entry in the corresponding bucket.

Multithreading Issues: HashMap is not thread-safe. In concurrent scenarios, it may lead to data inconsistency or infinite loops if two threads modify it simultaneously. ConcurrentHashMap is preferred for thread-safe operations.</code></pre>
        `
    },
    {
        "question": "What are `WeakHashMap`, `LinkedHashMap`, and `IdentityHashMap`, and when would you use each?",
        "answer": `
            <pre><code>- WeakHashMap: Uses weak references for keys, allowing keys to be garbage-collected if no strong references exist. Ideal for caches where entries should automatically disappear when not in use.
- LinkedHashMap: Maintains insertion or access order, useful for implementing LRU caches.
- IdentityHashMap: Uses == for key comparison instead of .equals(), suitable for specific cases where reference equality is desired.</code></pre>
        `
    },
    {
        "question": "Explain Java Memory Model (JMM) and how it impacts multithreaded applications.",
        "answer": `
            <pre><code>The Java Memory Model (JMM) defines how Java threads interact through memory. It specifies how variables are read and written and guarantees visibility and ordering of operations:

- Visibility: Changes in one thread are visible to others only after they’re flushed from the local cache to main memory.
- Ordering: JMM allows some reordering of instructions, but it preserves a “happens-before” relationship, especially through volatile variables, synchronized blocks, and other concurrency constructs.

Impact: Understanding JMM is essential for writing thread-safe code and ensuring consistent behavior across different JVM implementations.</code></pre>
        `
    },
    {
        "question": "What is a `volatile` keyword, and when would you use it?",
        "answer": `
            <pre><code>volatile ensures visibility and prevents instruction reordering for variables across threads. When a variable is volatile, changes are directly written to main memory, making them visible to all threads.

Use Case: For flags or state variables shared between threads where atomicity isn’t required, but visibility is crucial (e.g., a boolean flag to stop a thread).</code></pre>
        `
    },
    {
        "question": "What is `double-checked locking` in Singleton, and how does it work in Java?",
        "answer": `
            <pre><code>Double-checked locking reduces synchronization overhead in the Singleton pattern by only locking the instance creation code the first time an instance is requested:

public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

Explanation: The first if checks if the instance is null before acquiring the lock, and the second if ensures thread safety after acquiring the lock.</code></pre>
        `
    },
    {
        "question": "What is the difference between `Callable` and `Runnable` in Java?",
        "answer": `
            <pre><code>- Runnable: Has a run() method that doesn’t return a result and can’t throw checked exceptions. Used for tasks that don’t return values.
- Callable: Has a call() method that returns a result and can throw checked exceptions. Used in conjunction with Future to perform tasks and retrieve results asynchronously.</code></pre>
        `
    },
    {
        "question": "How does Java achieve thread-safety in `ConcurrentHashMap` compared to `HashMap`?",
        "answer": `
            <pre><code>ConcurrentHashMap uses finer-grained locking by splitting the map into segments (in Java 7) or by using lock-free algorithms (in Java 8). Instead of locking the entire map, it locks only the affected segment or bucket, reducing contention and increasing concurrency. In contrast, HashMap is not synchronized and requires external locking for thread safety.</code></pre>
        `
    },
    {
        "question": "Explain the concept of `ForkJoinPool` and `RecursiveTask` in Java.",
        "answer": `
            <pre><code>ForkJoinPool is an ExecutorService that uses work-stealing algorithms to optimize parallel processing. It divides large tasks into smaller ones (Fork) and merges results (Join).

RecursiveTask: A subclass of ForkJoinTask that returns results, used for divide-and-conquer algorithms like parallel summation or sorting.

Example:
RecursiveTask<Integer> task = new RecursiveTask<>() {
    protected Integer compute() { /* divide task */ }
};
new ForkJoinPool().invoke(task);</code></pre>
        `
    },
    {
        "question": "What is `PhantomReference`, and how does it differ from `WeakReference` and `SoftReference`?",
        "answer": `
            <pre><code>- PhantomReference: Referenced objects are cleared as soon as they’re eligible for garbage collection. Used to clean up resources after garbage collection via ReferenceQueue.
- WeakReference: Eligible for garbage collection if no strong references exist. Useful for caching.
- SoftReference: Retained until memory is low, which delays garbage collection. Useful for memory-sensitive caching.</code></pre>
        `
    },
    {
        "question": "What is `CompletableFuture` and how is it used for asynchronous programming in Java?",
        "answer": `
            <pre><code>CompletableFuture is an extension of Future that supports non-blocking, asynchronous tasks with a callback mechanism. It provides methods like thenApply, thenAccept, and thenCompose for chaining and combining asynchronous operations.

Example:
CompletableFuture.supplyAsync(() -> "Hello")
                 .thenApply(result -> result + " World")
                 .thenAccept(System.out::println);</code></pre>
        `
    },
    {
        "question": "Explain covariance and contravariance in generics with examples.",
        "answer": `
            <pre><code>- Covariance (? extends T): Allows a generic type to accept subclasses of T. Used in producer scenarios.
Example:
List<? extends Number> numbers = new ArrayList<Integer>();

- Contravariance (? super T): Allows a generic type to accept superclasses of T. Used in consumer scenarios.
Example:
List<? super Integer> integers = new ArrayList<Number>();

PECS Principle: Producer Extends, Consumer Super.</code></pre>
        `
    },
    {
        "question": "What is the `Decorator` pattern, and how is it used in Java I/O classes?",
        "answer": `
            <pre><code>The Decorator pattern allows behavior to be added to objects dynamically. In Java I/O, classes like BufferedReader and BufferedInputStream wrap other Reader and InputStream objects, adding buffering functionality without changing the underlying structure.

Example:
Reader reader = new BufferedReader(new FileReader("file.txt"));</code></pre>
        `
    },
    {
        "question": "What is the `ExecutorService` in Java, and what are the common methods to manage threads?",
        "answer": `
            <pre><code>ExecutorService is an interface for managing a pool of threads in Java. It provides methods like submit, shutdown, and awaitTermination for task execution and lifecycle management.

Common Methods:
- submit(): Submits a task for execution.
- shutdown(): Initiates an orderly shutdown.
- awaitTermination(): Waits for all tasks to complete after shutdown.</code></pre>
        `
    },
    {
        "question": "What is a `PermGen` space, and how does it differ from `Metaspace`?",
        "answer": `
            <pre><code>- PermGen (Permanent Generation): An area in memory used to store class metadata in Java 7 and below. Fixed in size, leading to OutOfMemoryError if it’s full.
- Metaspace: Replaces PermGen in Java 8. It’s not part of the heap and grows dynamically, reducing the risk of OutOfMemoryError.</code></pre>
        `
    }
]
,
"maven": [
    {
        "question": "What are the main differences between `compile`, `provided`, `runtime`, `test`, and `system` scopes in Maven?",
        "answer": `
            <pre><code>- compile: The default scope; dependencies are available at compile-time, runtime, and included in the final package.
- provided: Dependencies required for compilation but assumed to be provided by the runtime environment (e.g., servlet-api in a web container). They are not included in the final package.
- runtime: Dependencies required only at runtime, not at compile-time (e.g., JDBC driver in some cases).
- test: Dependencies available only during the test phase and are not included in the final package (e.g., JUnit).
- system: Similar to provided, but requires specifying an explicit path on the local system for the dependency, making it non-portable. This scope is rarely used.</code></pre>
        `
    },
    {
        "question": "What is the Maven build lifecycle, and what are the main phases of the default lifecycle?",
        "answer": `
            <pre><code>Maven has three built-in lifecycles:
- Default (Build) Lifecycle: Manages project deployment with key phases like compile, test, package, install, and deploy.
- Clean Lifecycle: Handles project cleaning, with pre-clean, clean, and post-clean phases.
- Site Lifecycle: Handles project site documentation generation, with pre-site, site, post-site, site-deploy phases.

Default Lifecycle Phases:
- validate: Checks project integrity.
- compile: Compiles the source code.
- test: Runs tests using a testing framework (e.g., JUnit).
- package: Packages the compiled code (e.g., JAR, WAR).
- verify: Runs checks on the results.
- install: Installs the package to the local repository.
- deploy: Deploys the package to a remote repository.</code></pre>
        `
    },
    {
        "question": "What is a `Maven goal`, and how does it differ from a `phase`?",
        "answer": `
            <pre><code>- Goal: A specific task that performs an action (e.g., compiling code, running tests). Goals are bound to phases but can also be run independently.
- Phase: A step in the lifecycle that can execute multiple goals in sequence.

Example: The install phase includes the install:install goal by default. Running mvn install will execute all goals bound to each lifecycle phase up to and including install.</code></pre>
        `
    },
    {
        "question": "How does Maven handle transitive dependencies, and what is dependency conflict resolution?",
        "answer": `
            <pre><code>Maven resolves transitive dependencies by including dependencies of your direct dependencies in the build. Conflict resolution follows these rules:
- Nearest Definition Wins: If there are conflicting versions, Maven uses the closest dependency in the dependency tree.
- First Declared Wins: If dependencies are at the same level, Maven uses the first one declared in pom.xml.

To explicitly control versions, use <dependencyManagement> or <exclusions>.</code></pre>
        `
    },
    {
        "question": "What is the purpose of the `<dependencyManagement>` section in Maven, and how does it differ from `<dependencies>`?",
        "answer": `
            <pre><code>- <dependencyManagement>: Specifies dependency versions and configurations without actually adding them to the build. It serves as a central place to define versions for dependencies that other modules in a multi-module project can inherit.
- <dependencies>: Declares actual dependencies that Maven includes in the build.

Example:
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>5.0.0.RELEASE</version>
        </dependency>
    </dependencies>
</dependencyManagement></code></pre>
        `
    },
    {
        "question": "How would you exclude a specific transitive dependency in Maven?",
        "answer": `
            <pre><code>Use the <exclusions> tag within the dependency to prevent Maven from including specific transitive dependencies.

Example:
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.4.0.Final</version>
    <exclusions>
        <exclusion>
            <groupId>javax.transaction</groupId>
            <artifactId>jta</artifactId>
        </exclusion>
    </exclusions>
</dependency></code></pre>
        `
    },
    {
        "question": "What is the purpose of the `maven-compiler-plugin`, and how do you configure it to use a specific Java version?",
        "answer": `
            <pre><code>The maven-compiler-plugin controls the Java version used to compile your project’s source code. You configure the plugin to specify source and target Java versions.

Example for Java 11:
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>11</source>
                <target>11</target>
            </configuration>
        </plugin>
    </plugins>
</build></code></pre>
        `
    },
    {
        "question": "What is the difference between `install` and `deploy` phases in Maven?",
        "answer": `
            <pre><code>- install: Adds the built artifact to the local repository (e.g., ~/.m2/repository). This allows local projects to use it without needing to go to a remote repository.
- deploy: Uploads the artifact to a remote repository (e.g., Nexus, Artifactory), making it accessible to other developers or applications.</code></pre>
        `
    },
    {
        "question": "What is the `Maven Shade Plugin`, and when would you use it?",
        "answer": `
            <pre><code>The Maven Shade Plugin creates a “fat” or “uber” JAR, which includes all dependencies needed to run the project. It’s useful for standalone applications, especially those without access to a classpath, like some serverless or desktop applications.

Example:
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.2.4</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build></code></pre>
        `
    },
    {
        "question": "What are profiles in Maven, and how do you activate them?",
        "answer": `
            <pre><code>Profiles allow you to customize the build process for different environments or configurations. They are defined in the <profiles> section and can be activated based on environment variables, properties, JDK version, etc.

Activation:
- Use the -P flag: mvn clean install -Pdev.
- Define <activation> criteria in pom.xml.

Example:
<profiles>
    <profile>
        <id>dev</id>
        <activation>
            <property>
                <name>env</name>
                <value>dev</value>
            </property>
        </activation>
        <build>
            <!-- Profile-specific configurations -->
        </build>
    </profile>
</profiles></code></pre>
        `
    },
    {
        "question": "How does the `Maven Surefire Plugin` work, and how can you control which tests to run?",
        "answer": `
            <pre><code>The Maven Surefire Plugin is used to run unit tests during the test phase. By default, it runs tests in classes matching *Test or Test*.

Controlling Tests:
- Use includes/excludes configuration:
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.22.2</version>
    <configuration>
        <includes>
            <include>**/MyTest*.java</include>
        </includes>
    </configuration>
</plugin>

- Specify tests from the command line: mvn test -Dtest=MyTest.</code></pre>
        `
    },
    {
        "question": "What is the `Maven Release Plugin`, and what steps does it perform?",
        "answer": `
            <pre><code>The Maven Release Plugin automates project release steps, including versioning, tagging, and deploying to a repository.

Steps:
- release:prepare: Updates pom.xml to release versions, tags the project in version control, and increments to the next snapshot version.
- release:perform: Builds the project and deploys it to a remote repository.</code></pre>
        `
    },
    {
        "question": "How do you skip tests in Maven, and what are the pros and cons of doing so?",
        "answer": `
            <pre><code>- Command Line: mvn install -DskipTests (skips tests but compiles them) or mvn install -Dmaven.test.skip=true (skips both compiling and running tests).
- Pros: Faster build times, useful for quick deployment or when tests aren’t critical.
- Cons: Risks introducing bugs if changes aren’t validated by tests.</code></pre>
        `
    },
    {
        "question": "How do you create a multi-module project in Maven, and what are the advantages?",
        "answer": `
            <pre><code>A multi-module project has a parent pom.xml managing multiple submodules. Define the modules in the parent pom.xml under the <modules> section.

Advantages:
- Centralized dependency management.
- Parallel builds of modules, reducing build time.
- Separate modules for better organization and reusability.

Example:
<modules>
    <module>module1</module>
    <module>module2</module>
</modules></code></pre>
        `
    },
    {
        "question": "What is the purpose of the `.m2` directory in Maven?",
        "answer": `
            <pre><code>The .m2 directory is Maven’s local repository, located in the user’s home directory (e.g., ~/.m2). It stores downloaded dependencies, plugins, and the settings.xml file, allowing Maven to avoid re-downloading artifacts for each build.</code></pre>
        `
    },
    {
        "question": "How do you resolve version conflicts in Maven dependencies?",
        "answer": `
            <pre><code>Maven resolves version conflicts using the nearest dependency or first-declared rule. You can explicitly resolve conflicts by:
- Using <dependencyManagement> to set a specific version for dependencies.
- Adding <exclusions> for unwanted transitive dependencies.
- Specifying the version directly in <dependencies> if needed.</code></pre>
        `
    },
    {
        "question": "What is the purpose of `settings.xml` in Maven, and what are some key elements?",
        "answer": `
            <pre><code>settings.xml is a configuration file in the .m2 directory that allows users to define local or user-specific configurations, such as:
- <localRepository>: Path to the local repository.
- <profiles>: User-specific profiles.
- <mirrors>: Mirror settings to redirect repository requests.
- <servers>: Credentials for accessing private repositories.</code></pre>
        `
    },
    {
        "question": "How does Maven handle SNAPSHOT versions?",
        "answer": `
            <pre><code>SNAPSHOT versions (e.g., 1.0-SNAPSHOT) indicate development versions subject to change. Maven treats these as dynamic and checks for updates every build unless cached.

Usage:
- Useful for sharing in-progress development builds.
- Maven can update SNAPSHOTs from remote repositories based on configuration in settings.xml.</code></pre>
        `
    },
    {
        "question": "Explain the difference between a `plugin` and a `dependency` in Maven.",
        "answer": `
            <pre><code>- Dependency: A library required by the application during build or runtime, listed under <dependencies>.
- Plugin: Executes tasks within the build process, like compiling code, packaging, and testing, listed under <plugins>.

Example:
<dependencies>
    <dependency>...</dependency>
</dependencies>
<build>
    <plugins>
        <plugin>...</plugin>
    </plugins>
</build></code></pre>
        `
    },
    {
        "question": "How does Maven handle plugin inheritance in multi-module projects?",
        "answer": `
            <pre><code>Plugins defined in the parent POM propagate to submodules, allowing consistent configurations across modules. However, submodules can override inherited plugin configurations if needed.</code></pre>
        `
    }
]
,
"Sql": [
    {
        "question": "What is the difference between `JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`?",
        "answer": `
            <pre><code>
            - **JOIN or INNER JOIN**: Returns rows with matching values in both tables.
            - **LEFT JOIN**: Returns all rows from the left table and matching rows from the right table. Rows from the left table with no match in the right table contain NULL for the right table columns.
            - **RIGHT JOIN**: Returns all rows from the right table and matching rows from the left table, with NULL for left table columns if no match exists.
            - **FULL OUTER JOIN**: Returns all rows where there is a match in either table, with NULLs in non-matching rows from both tables.
            </code></pre>
        `
    },
    {
        "question": "What is a `GROUP BY` clause, and how does it differ from `ORDER BY`? Can you use `GROUP BY` without aggregation functions?",
        "answer": `
            <pre><code>
            - **GROUP BY**: Groups rows that have the same values in specified columns and is commonly used with aggregate functions (e.g., SUM, COUNT) to summarize data by group.
            - **ORDER BY**: Sorts the result set by specified columns.
            - **Using GROUP BY without Aggregates**: It’s possible to use GROUP BY without aggregation if you only need to remove duplicate rows based on the grouping columns, though this is less common.
            </code></pre>
            Example without aggregates:
            <pre><code>SELECT department FROM employees GROUP BY department;</code></pre>
        `
    },
    {
        "question": "Explain the difference between `WHERE` and `HAVING` clauses.",
        "answer": `
            <pre><code>
            - **WHERE**: Filters rows before any grouping or aggregation. It applies to individual rows.
            - **HAVING**: Filters groups created by GROUP BY and is used to apply conditions on aggregate functions (like SUM, COUNT).
            </code></pre>
            Example:
            <pre><code>
            SELECT department, COUNT(*) FROM employees WHERE salary > 50000 GROUP BY department HAVING COUNT(*) > 5;
            </code></pre>
        `
    },
    {
        "question": "What is a `window function` in SQL, and how does it differ from aggregate functions?",
        "answer": `
            A **window function** performs calculations across a set of table rows related to the current row without collapsing rows, unlike aggregate functions which summarize multiple rows into a single result.
            <pre><code>
            SELECT employee_id, salary, AVG(salary) OVER (PARTITION BY department) AS avg_department_salary FROM employees;
            </code></pre>
            Here, AVG is applied to each row without collapsing the result set, providing per-row insight alongside aggregates.
        `
    },
    {
        "question": "How would you delete duplicate rows in SQL while keeping one instance?",
        "answer": `
            Use ROW_NUMBER() with a Common Table Expression (CTE) to identify duplicates:
            <pre><code>
            WITH RankedRows AS (
                SELECT id, column1, column2,
                       ROW_NUMBER() OVER (PARTITION BY column1, column2 ORDER BY id) AS row_num
                FROM your_table
            )
            DELETE FROM your_table
            WHERE id IN (SELECT id FROM RankedRows WHERE row_num > 1);
            </code></pre>
            This keeps the first instance (based on ORDER BY id) and deletes the duplicates.
        `
    },
    {
        "question": "Explain the difference between `UNION` and `UNION ALL`.",
        "answer": `
            <pre><code>
            - **UNION**: Combines results from two queries and removes duplicates from the result set.
            - **UNION ALL**: Combines results from two queries without removing duplicates, making it faster than UNION since no deduplication is required.
            </code></pre>
            Example:
            <pre><code>
            SELECT name FROM employees UNION SELECT name FROM contractors;
            </code></pre>
        `
    },
    {
        "question": "What are `Indexes`, and what are the different types?",
        "answer": `
            <pre><code>
            Indexes improve query performance by allowing faster data retrieval. Common types include:
            - **B-Tree Index**: The default index type for most databases, suitable for range queries and general-purpose usage.
            - **Hash Index**: Optimized for equality comparisons, like WHERE id = 5.
            - **Bitmap Index**: Efficient for columns with a limited number of unique values, like Boolean fields.
            - **Full-Text Index**: Designed for text searching within large strings.
            </code></pre>
            Choosing the right index type depends on the query patterns and data characteristics.
        `
    },
    {
        "question": "What is a `Composite Index`, and when should you use it?",
        "answer": `
            A **Composite Index** is an index on multiple columns. It’s useful when queries filter on multiple columns. The order of columns matters, as the index is only fully utilized if the query filters on columns in the same order or prefix.
            <pre><code>
            CREATE INDEX idx_employee_dept ON employees (department, hire_date);
            </code></pre>
            Here, the index helps queries that filter on department alone or both department and hire_date.
        `
    },
    {
        "question": "What is a transaction, and what are ACID properties?",
        "answer": `
            A **transaction** is a sequence of SQL operations treated as a single unit of work. **ACID** properties ensure reliability:
            - **Atomicity**: Ensures that all parts of a transaction are completed or none are.
            - **Consistency**: Ensures the database is in a valid state before and after a transaction.
            - **Isolation**: Ensures transactions do not affect each other’s operations.
            - **Durability**: Ensures the result of a transaction is permanent.
        `
    },
    {
        "question": "What is a `Deadlock`, and how can it be prevented in SQL?",
        "answer": `
            A **deadlock** occurs when two or more transactions hold locks on resources and wait indefinitely for each other to release them. Prevention techniques include:
            - **Lock Ordering**: Acquire locks in a consistent order.
            - **Timeouts**: Set a timeout to detect and resolve deadlocks.
            - **Smaller Transactions**: Keep transactions short to reduce lock holding time.
        `
    },
    {
        "question": "How would you write a query to find the second highest salary from an `employees` table?",
        "answer": `
            Using DISTINCT and LIMIT:
            <pre><code>
            SELECT DISTINCT salary
            FROM employees
            ORDER BY salary DESC
            LIMIT 1 OFFSET 1;
            </code></pre>
            Or using a subquery:
            <pre><code>
            SELECT MAX(salary)
            FROM employees
            WHERE salary < (SELECT MAX(salary) FROM employees);
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `HAVING` and `WHERE` in SQL? Can `HAVING` be used without `GROUP BY`?",
        "answer": `
            - **WHERE** filters rows before grouping.
            - **HAVING** filters groups created by GROUP BY.
            - **Using HAVING without GROUP BY**: It is valid and applies conditions after aggregations even if there’s no grouping.
            <pre><code>
            SELECT COUNT(*) AS count
            FROM employees
            HAVING count > 1;
            </code></pre>
        `
    },
    {
        "question": "How does `ROW_NUMBER()` differ from `RANK()` and `DENSE_RANK()`?",
        "answer": `
            - **ROW_NUMBER()**: Assigns a unique row number to each row, regardless of ties.
            - **RANK()**: Assigns the same rank to rows with equal values but skips ranks for ties.
            - **DENSE_RANK()**: Assigns the same rank to tied rows without skipping ranks.
            <pre><code>
            SELECT name, salary,
                   ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
                   RANK() OVER (ORDER BY salary DESC) AS rank,
                   DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
            FROM employees;
            </code></pre>
        `
    },
    {
        "question": "What is a `Self Join`, and when would you use it?",
        "answer": `
            A **Self Join** joins a table to itself, commonly used to find relationships within the same table, like hierarchical data or finding pairs.
            <pre><code>
            SELECT e1.name AS employee, e2.name AS coworker
            FROM employees e1
            JOIN employees e2 ON e1.manager_id = e2.manager_id AND e1.id <> e2.id;
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?",
        "answer": `
            - **DELETE**: Removes rows from a table, can be rolled back, and can include WHERE to delete specific rows.
            - **TRUNCATE**: Removes all rows from a table, is faster than DELETE, but cannot be rolled back (in most databases).
            - **DROP**: Deletes the entire table and its structure, removing it permanently from the database.
        `
    },
    {
        "question": "How would you retrieve a random record from a table in SQL?",
        "answer": `
            - In MySQL:
              <pre><code>
              SELECT * FROM table_name ORDER BY RAND() LIMIT 1;
              </code></pre>
            - In PostgreSQL:
              <pre><code>
              SELECT * FROM table_name ORDER BY RANDOM() LIMIT 1;
              </code></pre>
            This is often used for sampling but can be inefficient on large tables.
        `
    },
    {
        "question": "Explain the `COALESCE` function and its use case.",
        "answer": `
            **COALESCE** returns the first non-null value in a list of arguments, useful for handling nulls.
            <pre><code>
            SELECT name, COALESCE(phone, 'N/A') AS phone
            FROM customers;
            </code></pre>
            Here, if phone is NULL, it returns 'N/A'.
        `
    },
    {
        "question": "What is a Common Table Expression (CTE) and how does it differ from a subquery?",
        "answer": `
            A **CTE** is a temporary result set defined within a WITH clause and can be referenced multiple times within the main query. CTEs improve readability for complex queries and support recursion.
            <pre><code>
            WITH EmployeeCount AS (
                SELECT department_id, COUNT(*) AS num_employees
                FROM employees
                GROUP BY department_id
            )
            SELECT department_id, num_employees
            FROM EmployeeCount
            WHERE num_employees > 5;
            </code></pre>
            Unlike subqueries, CTEs are modular and can simplify complex query structures.
        `
    },
    {
        "question": "What are the differences between `INNER JOIN`, `CROSS JOIN`, and `SELF JOIN`?",
        "answer": `
            - **INNER JOIN**: Returns rows with matching values in both tables.
            - **CROSS JOIN**: Returns the Cartesian product of two tables, combining all rows from the first table with all rows from the second.
            - **SELF JOIN**: Joins a table to itself to compare rows within the same table.
        `
    },
    {
        "question": "What is a `stored procedure` and how does it differ from a `function`?",
        "answer": `
            - **Stored Procedure**: A set of SQL statements stored and executed on the server. It can perform actions like modifying data and returning multiple result sets but cannot be used directly in a query.
            - **Function**: Returns a single value or table and can be used within SQL statements. It is limited to read-only operations (in most databases).
        `
    }


]
,
"Angular": [
    {
        "question": "Explain Angular’s Dependency Injection (DI) mechanism and the difference between `providedIn: 'root'` and `providers` array in a module.",
        "answer": `
            Angular’s DI mechanism provides a way to inject dependencies (services) into components and other services. Angular automatically creates instances of classes and injects them where required.
            <pre><code>
            - **providedIn: 'root'**: When a service is provided in root, it is available as a singleton throughout the application. The service will be created once and shared across all components.
            - **providers array in a module**: If a service is listed in a specific module’s providers array, it is only available to that module and its child components. If the same service is used in multiple modules with their own providers, multiple instances will be created.
            </code></pre>
        `
    },
    {
        "question": "What are Angular lifecycle hooks, and in what order do they execute?",
        "answer": `
            Angular lifecycle hooks are methods that allow developers to tap into key moments in a component’s lifecycle. Here’s the order in which they execute:
            <pre><code>
            1. **ngOnChanges**: Called when input properties change.
            2. **ngOnInit**: Called once the component is initialized.
            3. **ngDoCheck**: Called during every change detection cycle.
            4. **ngAfterContentInit**: Called after content projection.
            5. **ngAfterContentChecked**: Called after the projected content is checked.
            6. **ngAfterViewInit**: Called after the component's view and child views are initialized.
            7. **ngAfterViewChecked**: Called after the view and child views are checked.
            8. **ngOnDestroy**: Called right before the component is destroyed.
            </code></pre>
            Example Use Case: ngOnInit is used for initialization logic, while ngOnDestroy is often used for cleanup tasks like unsubscribing from observables.
        `
    },
    {
        "question": "How does Angular’s Change Detection work, and what is the role of `ChangeDetectorRef`?",
        "answer": `
            Angular’s change detection checks for changes in the component’s data and updates the view accordingly. It uses a tree structure to monitor changes in components and runs after asynchronous tasks, like HTTP requests.
            <pre><code>
            - ChangeDetectorRef allows you to manually trigger or control the change detection cycle.
            - Methods:
              - detectChanges(): Manually triggers change detection for a specific component.
              - markForCheck(): Marks the component and its ancestors for check, useful in OnPush strategy.
              - detach() and reattach(): Detach or reattach the component from the change detection cycle, optimizing performance.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `@Input()` and `@Output()` in Angular?",
        "answer": `
            <pre><code>
            - @Input(): Allows a parent component to pass data to a child component. It is used to define properties that receive values from the parent.
            - @Output(): Allows a child component to send events or data to a parent component. It is used with EventEmitter to emit custom events that the parent component can listen to.
            </code></pre>
            Example:
            <pre><code>
            // Child component
            @Input() data: string;
            @Output() dataChange = new EventEmitter<string>();
            </code></pre>
        `
    },
    {
        "question": "Explain the purpose of `ng-content` and how content projection works in Angular.",
        "answer": `
            ng-content is used for content projection, where a child component can project HTML content from its parent component.
            <pre><code>
            - Single Slot:
              <ng-content></ng-content> Projects all content into a single placeholder.
            - Multiple Slots:
              <ng-content select=".header"></ng-content>
              <ng-content select=".footer"></ng-content>
              Selects specific content to project into designated slots, allowing more flexible layouts.
            </code></pre>
            Use Case: Content projection is useful for creating reusable components like modals, where the modal’s content can vary.
        `
    },
    {
        "question": "What are Angular’s structural directives, and how do they differ from attribute directives?",
        "answer": `
            <pre><code>
            - Structural Directives: Change the DOM layout by adding or removing elements. Examples are *ngIf, *ngFor, and *ngSwitch.
            - Attribute Directives: Change the appearance or behavior of an element without altering the DOM structure. Examples are ngClass, ngStyle, and custom attribute directives.
            </code></pre>
            Difference: Structural directives use the * prefix and can add or remove elements, while attribute directives modify existing elements’ properties or styles.
        `
    },
    {
        "question": "What is the `async` pipe in Angular, and how does it work?",
        "answer": `
            The async pipe subscribes to an observable or promise and automatically manages the subscription, updating the template with the emitted values. It also unsubscribes when the component is destroyed, preventing memory leaks.
            <pre><code>
            Example:
            <div *ngIf="data$ | async as data">{{ data }}</div>
            </code></pre>
            Benefit: Reduces the need to manually subscribe and unsubscribe from observables in the component code.
        `
    },
    {
        "question": "How would you optimize the performance of an Angular application?",
        "answer": `
            <pre><code>
            - Use OnPush Change Detection Strategy: Limits change detection to specific triggers, reducing the number of checks.
            - Lazy Loading: Load modules only when they are needed, reducing initial load time.
            - Avoid Unnecessary Change Detection: Detach ChangeDetectorRef where applicable.
            - AOT Compilation: Use Ahead-of-Time compilation to reduce bundle size.
            - Caching and Memoization: Cache HTTP requests and use memoized functions for data processing.
            - Use trackBy with ngFor: Optimizes rendering by tracking items based on unique identifiers.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between template-driven forms and reactive forms in Angular?",
        "answer": `
            <pre><code>
            - Template-Driven Forms: Built using directives in the template (e.g., ngModel). Easier to set up but less flexible for complex forms.
            - Reactive Forms: Defined in the component class using FormControl and FormGroup. More flexible and suitable for complex validations and dynamic forms.
            </code></pre>
            Example:
            <pre><code>
            // Reactive form
            this.form = new FormGroup({
              name: new FormControl(''),
              email: new FormControl('')
            });
            </code></pre>
        `
    },
    {
        "question": "How does Angular handle two-way data binding, and what is `[(ngModel)]` syntax?",
        "answer": `
            Angular’s two-way data binding combines property binding and event binding. The syntax [(ngModel)] binds a component property to a form input while updating the property whenever the input changes.
            <pre><code>
            - [(ngModel)] = [ngModel] + (ngModelChange).
            - [ngModel] binds the data to the input, and (ngModelChange) listens for changes, updating the data.
            </code></pre>
            Example:
            <pre><code>
            <input [(ngModel)]="username">
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of Angular’s `Router` module, and how does lazy loading work with it?",
        "answer": `
            The Router module allows navigation between views or components in Angular applications. It manages routing configurations and URL parameters.
            <pre><code>
            - Lazy Loading: Lazy loading defers loading of modules until they’re needed, reducing the initial load time. It’s implemented by defining routes with loadChildren, which dynamically loads the module when the route is activated.
            </code></pre>
            Example:
            <pre><code>
            { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
            </code></pre>
        `
    },
    {
        "question": "How do you pass data between components in Angular?",
        "answer": `
            <pre><code>
            - Parent to Child: Use @Input() in the child component to receive data from the parent.
            - Child to Parent: Use @Output() in the child component with EventEmitter to emit data to the parent.
            - Sibling Components: Use a shared service with observables or a state management library (e.g., NgRx) to share data between sibling components.
            </code></pre>
        `
    },
    {
        "question": "What is the `Renderer2` in Angular, and why would you use it?",
        "answer": `
            Renderer2 is a service that abstracts DOM manipulations. It’s preferred over direct DOM manipulation for better compatibility and security (avoiding XSS risks), and it works in environments where direct access to the DOM is limited, like server-side rendering.
            <pre><code>
            Example:
            constructor(private renderer: Renderer2, private el: ElementRef) {
              this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
            }
            </code></pre>
        `
    },
    {
        "question": "Explain the difference between `BehaviorSubject`, `Subject`, and `ReplaySubject` in Angular.",
        "answer": `
            <pre><code>
            - Subject: Emits values to subscribers but doesn’t retain previous values. Subscribers only receive new values emitted after subscription.
            - BehaviorSubject: Emits the current value to new subscribers immediately. It requires an initial value and always retains the latest emitted value.
            - ReplaySubject: Caches multiple past values and replays them to new subscribers, which can specify the number of past values to retain.
            </code></pre>
            Use Cases:
            - Use BehaviorSubject for values with a current state, like selected items.
            - Use ReplaySubject for events that new subscribers need to know about.
        `
    },
    {
        "question": "What is the `ViewChild` decorator in Angular, and when would you use it?",
        "answer": `
            @ViewChild allows access to a child component, directive, or DOM element in the template. It’s useful for directly interacting with a component or DOM element programmatically, such as focusing an input or calling a method in a child component.
            <pre><code>
            Example:
            @ViewChild('myInput') input: ElementRef;

            ngAfterViewInit() {
              this.input.nativeElement.focus();
            }
            </code></pre>
        `
    },
    {
        "question": "What are services in Angular, and how do you make a service singleton?",
        "answer": `
            Services in Angular are singleton classes that handle shared functionality, such as data retrieval or logic shared between components.
            <pre><code>
            - Making a Service Singleton: Set providedIn: 'root' in the service’s decorator to make it available across the entire application as a singleton:
              @Injectable({
                providedIn: 'root'
              })
              export class MyService { }
            </code></pre>
            Alternatively, add the service to the providers array in the root module (AppModule).
        `
    }
]
,
"Jquery": [
    {
        "question": "How does `$()` in jQuery work, and what does it return?",
        "answer": `
            The $() function is a shorthand for jQuery(). It takes a CSS selector, DOM element, HTML string, or function as an argument and returns a jQuery object wrapping the matched elements. The jQuery object allows chaining of jQuery methods to manipulate or interact with the selected elements.
            <pre><code>
            Example: $("<div>") creates a new jQuery-wrapped <div> element, while $(".class") selects all elements with the specified class and wraps them in a jQuery object.
            </code></pre>
        `
    },
    {
        "question": "What’s the difference between `$(document).ready()` and `$(window).load()`?",
        "answer": `
            <pre><code>
            - $(document).ready(): Executes as soon as the DOM is fully loaded and parsed, without waiting for images, styles, or other external resources to load. Ideal for initializing UI elements or attaching event listeners early.
            - $(window).load(): Executes after the entire page, including all assets like images and stylesheets, has fully loaded. Useful for scripts that depend on the complete page, such as working with image dimensions.
            </code></pre>
            Example:
            <pre><code>
            $(document).ready(function() { console.log("DOM ready"); });
            $(window).load(function() { console.log("Page fully loaded"); });
            </code></pre>
        `
    },
    {
        "question": "What is event delegation in jQuery, and why is it useful?",
        "answer": `
            Event delegation is a technique where a single event listener is attached to a parent element to handle events from multiple child elements, even those added dynamically. In jQuery, .on() with a selector achieves delegation.
            <pre><code>
            Usefulness:
            - Reduces the number of event listeners, improving performance.
            - Supports dynamically added elements.
            </code></pre>
            Example:
            <pre><code>
            // Event delegation with .on() to handle dynamically added buttons
            $("#parent").on("click", ".child-button", function() { alert("Button clicked!"); });
            </code></pre>
        `
    },
    {
        "question": "Explain the difference between `.html()`, `.text()`, and `.val()` in jQuery.",
        "answer": `
            <pre><code>
            - .html(): Gets or sets the HTML content of an element, including HTML tags.
            - .text(): Gets or sets the text content only, without any HTML markup.
            - .val(): Used to get or set the value of form fields, such as <input>, <select>, or <textarea>.
            </code></pre>
            Example:
            <pre><code>
            $("#element").html("<b>Bold Text</b>");  // Sets HTML content
            $("#element").text("<b>Bold Text</b>");  // Sets as plain text (HTML tags shown)
            $("input").val("New value");             // Sets value of input field
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `$(this)` and `this` in jQuery?",
        "answer": `
            <pre><code>
            - this: Refers to the native JavaScript DOM element in the current context.
            - $(this): Wraps this in a jQuery object, allowing you to use jQuery methods.
            </code></pre>
            Example:
            <pre><code>
            $("button").click(function() {
                console.log(this);         // Native DOM element
                console.log($(this));      // jQuery object wrapping the DOM element
            });
            </code></pre>
        `
    },
    {
        "question": "How can you optimize jQuery selectors for better performance?",
        "answer": `
            <pre><code>
            - Use ID selectors ($("#id")) as they are the fastest.
            - Cache jQuery selectors when using them multiple times.
              Example:
              var $element = $("#element");
              $element.hide();
              $element.show();
            - Limit DOM traversal by using specific selectors instead of searching the entire document.
            - Use context in selectors to limit the search scope:
              $("li", "#parent");  // Only searches within #parent
            </code></pre>
        `
    },
    {
        "question": "How would you remove an element from the DOM in jQuery without removing its associated event handlers?",
        "answer": `
            Use .detach() instead of .remove(). The .detach() method removes the element but retains data and event handlers associated with it, allowing it to be reinserted later.
            <pre><code>
            Example:
            var $detachedElement = $("#element").detach();
            // You can reinsert it later with all events intact
            $("#container").append($detachedElement);
            </code></pre>
        `
    },
    {
        "question": "What is chaining in jQuery, and how does it work?",
        "answer": `
            Chaining is the process of calling multiple jQuery methods in succession on the same set of elements, as each method returns the jQuery object itself.
            <pre><code>
            Example:
            $("#element").addClass("highlight").fadeIn().text("Hello, world!");
            </code></pre>
            Each method call returns the jQuery object, allowing the next method to be invoked immediately, resulting in concise and readable code.
        `
    },
    {
        "question": "Explain `.bind()`, `.live()`, `.delegate()`, and `.on()` in jQuery and their differences.",
        "answer": `
            <pre><code>
            - .bind(): Attaches an event handler directly to elements. Works only for existing elements.
            - .live(): Attaches an event to all matching elements, including future ones. Deprecated due to performance issues and replaced by .on().
            - .delegate(): Attaches an event to a parent element to handle specified child elements. Supports dynamic elements and is more efficient than .live().
            - .on(): Combines .bind(), .live(), and .delegate() functionalities. It supports both direct binding and delegation.
            </code></pre>
            Example:
            <pre><code>
            // Direct binding
            $("#element").on("click", function() { /* ... */ });
            // Delegated binding
            $("#parent").on("click", ".child", function() { /* ... */ });
            </code></pre>
        `
    },
    {
        "question": "How would you check if an element is visible in jQuery?",
        "answer": `
            Use .is(":visible") to check if an element is visible. It returns true if the element is currently displayed, otherwise false.
            <pre><code>
            Example:
            if ($("#element").is(":visible")) { console.log("Element is visible"); }
            </code></pre>
        `
    },
    {
        "question": "How can you prevent an event from bubbling up the DOM tree in jQuery?",
        "answer": `
            Use event.stopPropagation() to prevent an event from bubbling up to parent elements. This is commonly used to handle events at a specific level without affecting parent elements.
            <pre><code>
            Example:
            $("#child").click(function(event) {
                event.stopPropagation();
                // Handle child element event only
            });
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `.prop()` and `.attr()` in jQuery?",
        "answer": `
            <pre><code>
            - .prop(): Deals with properties, representing the internal state of an element (e.g., checked state of a checkbox).
            - .attr(): Deals with HTML attributes, which are static.
            </code></pre>
            Example:
            <pre><code>
            $("input").prop("checked", true);  // Sets the checked property
            $("input").attr("checked", "checked");  // Sets the checked attribute (may not change checkbox state in modern browsers)
            </code></pre>
        `
    },
    {
        "question": "How would you handle AJAX errors in jQuery?",
        "answer": `
            You can handle AJAX errors using .fail() method or error callback in the $.ajax() configuration.
            <pre><code>
            Example:
            $.ajax({
                url: "/path",
                method: "GET",
                success: function(data) { /* success handling */ },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("Error:", textStatus);
                }
            });
            </code></pre>
            Or with chaining:
            <pre><code>
            $.ajax("/path").done(function(data) { /* success handling */ })
                .fail(function(jqXHR, textStatus) {
                    console.log("Error:", textStatus);
                });
            </code></pre>
        `
    },
    {
        "question": "How can you perform asynchronous operations with jQuery promises?",
        "answer": `
            jQuery’s $.ajax() and other async methods return jqXHR objects that implement the Deferred interface, allowing for promise-style chaining with .then(), .done(), .fail(), and .always().
            <pre><code>
            Example:
            $.ajax("/path").then(function(data) {
                console.log("Data received:", data);
            }).catch(function(error) {
                console.log("Error occurred:", error);
            });
            </code></pre>
        `
    },
    {
        "question": "Explain how `.serialize()` and `.serializeArray()` work in jQuery and their differences.",
        "answer": `
            <pre><code>
            - .serialize(): Converts form elements into a URL-encoded string, suitable for use in query strings or POST data.
            - .serializeArray(): Converts form elements into an array of objects where each object has name and value properties, suitable for direct use in JavaScript.
            </code></pre>
            Example:
            <pre><code>
            // Converts form to a URL-encoded string
            var serializedData = $("#form").serialize();
            // Converts form to an array of objects
            var formArray = $("#form").serializeArray();
            </code></pre>
        `
    }
]
,
"Security": [
    {
        "question": "What is the difference between authentication and authorization, and how are they typically implemented?",
        "answer": `
            <pre><code>
            - Authentication: The process of verifying the identity of a user or system, usually implemented through credentials like usernames and passwords, biometrics, or tokens (e.g., JWT, OAuth).
            - Authorization: Determines what an authenticated user is allowed to access. It’s typically implemented via access control lists (ACLs), role-based access control (RBAC), or attribute-based access control (ABAC).
            </code></pre>
            Example: Logging into a system (authentication) and accessing specific resources based on roles (authorization).
        `
    },
    {
        "question": "Explain how SSL/TLS works and why it is important for web security.",
        "answer": `
            SSL/TLS secures communication between a client and server by:
            <pre><code>
            - Encrypting data to prevent eavesdropping.
            - Authenticating the server to the client, often through certificates issued by trusted authorities.
            - Data Integrity: Ensures the data isn’t tampered with during transmission.
            </code></pre>
            Process:
            <pre><code>
            - Handshake: The client and server exchange encryption keys and establish a secure connection.
            - Symmetric Encryption: Once established, symmetric encryption is used for data transfer, which is faster than asymmetric encryption.
            </code></pre>
            Importance: SSL/TLS protects sensitive data (e.g., login details, payment info) from being intercepted by attackers.
        `
    },
    {
        "question": "What is a `Man-in-the-Middle` (MitM) attack, and how can it be prevented?",
        "answer": `
            A MitM attack occurs when an attacker intercepts communication between two parties to eavesdrop or alter data without their knowledge.
            <pre><code>
            Prevention Techniques:
            - SSL/TLS: Encrypts data to prevent interception.
            - Mutual Authentication: Verifies both parties (e.g., mutual TLS).
            - Public Key Infrastructure (PKI): Certificates verify server identity.
            - Avoiding Open Wi-Fi Networks: Reduces the risk of interception on insecure networks.
            </code></pre>
        `
    },
    {
        "question": "What is Cross-Site Scripting (XSS), and what are the types of XSS attacks?",
        "answer": `
            XSS is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users, potentially stealing cookies, session tokens, or redirecting users.
            <pre><code>
            Types:
            - Stored XSS: The script is permanently stored on the server (e.g., in a database).
            - Reflected XSS: The script is reflected off a web server, often through URL parameters.
            - DOM-based XSS: Occurs when client-side scripts modify the DOM in an unsafe way.
            </code></pre>
            Prevention: Use output encoding, sanitize inputs, implement Content Security Policy (CSP), and use secure coding practices.
        `
    },
    {
        "question": "What is Cross-Site Request Forgery (CSRF), and how can it be mitigated?",
        "answer": `
            CSRF is an attack where a user is tricked into submitting a request they did not intend, potentially causing actions like changing account settings or making transactions.
            <pre><code>
            Mitigations:
            - CSRF Tokens: Include a unique, random token in requests that the server validates.
            - SameSite Cookies: Restrict cookies from being sent with cross-site requests.
            - User Confirmation: Require users to confirm sensitive actions, e.g., with OTPs or reauthentication.
            </code></pre>
        `
    },
    {
        "question": "Explain the difference between symmetric and asymmetric encryption. Provide examples of each.",
        "answer": `
            <pre><code>
            - Symmetric Encryption: Uses a single shared key for both encryption and decryption. It’s faster but requires secure key distribution. Examples include AES, DES, and Blowfish.
            - Asymmetric Encryption: Uses a public key for encryption and a private key for decryption, allowing secure communication without shared secrets. Examples include RSA, ECC, and DSA.
            </code></pre>
            Use Cases: Symmetric encryption is often used for data-at-rest, while asymmetric encryption is used for secure key exchange and digital signatures.
        `
    },
    {
        "question": "What are the differences between HTTPS, HTTP, and HTTP/2?",
        "answer": `
            <pre><code>
            - HTTP: An unsecured protocol for transferring data between a web client and server.
            - HTTPS: HTTP over SSL/TLS, which encrypts data and verifies server authenticity, making it secure against interception.
            - HTTP/2: An enhanced version of HTTP that supports multiplexing, header compression, and server push, improving performance and efficiency over HTTP/1.1.
            </code></pre>
            Security: HTTPS ensures secure communication, while HTTP and HTTP/2 without encryption are vulnerable to interception and MitM attacks.
        `
    },
    {
        "question": "How does a JSON Web Token (JWT) work, and what are the security considerations when using it?",
        "answer": `
            <pre><code>
            - Structure: A JWT consists of three parts—Header, Payload, and Signature—encoded in Base64.
            - Usage: It’s used for stateless authentication, where a token representing user identity is passed between client and server.
            </code></pre>
            Security Considerations:
            <pre><code>
            - Token Expiration: Ensure tokens have a short expiration time.
            - Signature Verification: Always verify the token’s signature to prevent tampering.
            - Token Storage: Store tokens securely (e.g., in HTTP-only cookies) to prevent XSS attacks.
            </code></pre>
        `
    },
    {
        "question": "What is a Zero-Day vulnerability, and how can organizations protect themselves from such threats?",
        "answer": `
            A Zero-Day vulnerability is a security flaw that is exploited before the software vendor is aware and able to patch it.
            <pre><code>
            Protection Strategies:
            - Regular Updates: Keep software and systems up-to-date to minimize exposure.
            - Intrusion Detection and Prevention: Use IDS/IPS to detect unusual behavior that might indicate an exploit.
            - Threat Intelligence: Monitor for potential vulnerabilities through threat intelligence feeds.
            </code></pre>
        `
    },
    {
        "question": "What is SQL Injection, and how can it be prevented?",
        "answer": `
            SQL Injection is a technique where an attacker manipulates SQL queries by injecting malicious code, potentially accessing or modifying the database.
            <pre><code>
            Prevention Techniques:
            - Use Prepared Statements: Prevents attackers from altering the query structure.
            - Input Validation: Filter and sanitize user inputs.
            - Least Privilege Principle: Restrict database access to only necessary permissions.
            </code></pre>
        `
    },
    {
        "question": "What are `Rainbow Tables`, and how do they impact password security?",
        "answer": `
            Rainbow tables are precomputed tables of hashed passwords, used to reverse-engineer hashed values to original passwords. Attackers use these tables to quickly match known hash outputs with potential passwords.
            <pre><code>
            Protection: Use strong hashing algorithms with salts (e.g., bcrypt, Argon2) to prevent attackers from precomputing tables for all possible hashes.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between hashing and encryption, and when would you use each?",
        "answer": `
            <pre><code>
            - Hashing: A one-way function that converts data into a fixed-length string. It’s irreversible and is commonly used for data integrity checks and password storage.
            - Encryption: A reversible process that encodes data to keep it private, allowing decryption by authorized parties.
            </code></pre>
            Use Cases: Hashing is ideal for integrity verification (e.g., passwords), while encryption is used to protect sensitive data during transmission or at rest.
        `
    },
    {
        "question": "What is a `Replay Attack`, and how can it be prevented?",
        "answer": `
            A Replay Attack occurs when an attacker captures and reuses a valid request to replay it later, gaining unauthorized access or making duplicate transactions.
            <pre><code>
            Prevention Techniques:
            - Nonces: Use a unique number (nonce) per request that the server validates and tracks.
            - Timestamps: Include timestamps and reject requests that are too old.
            - Session Expiry: Use short-lived tokens to minimize attack windows.
            </code></pre>
        `
    },
    {
        "question": "Explain what `OAuth2` and `OpenID Connect` are, and how they differ.",
        "answer": `
            <pre><code>
            - OAuth2: An authorization framework that allows third-party applications to access resources without sharing user credentials. It focuses on delegated access (permissions).
            - OpenID Connect: An identity layer on top of OAuth2 that authenticates users, allowing client applications to verify identity information about the user.
            </code></pre>
            Difference: OAuth2 manages authorization (permissions to access resources), while OpenID Connect provides user authentication and identity verification.
        `
    },
    {
        "question": "What is the `Principle of Least Privilege`, and why is it important?",
        "answer": `
            The Principle of Least Privilege (PoLP) ensures that users, systems, and applications have only the minimum permissions necessary to perform their tasks.
            <pre><code>
            Importance: Reduces the attack surface by limiting the potential impact of a compromised account, application, or service. For example, if an attacker gains access to a low-privilege account, their ability to cause damage is limited.
            </code></pre>
        `
    }
]
,
"Micro Services": [
    {
        "question": "How do microservices handle communication, and what are some common patterns used for inter-service communication?",
        "answer": `
            Microservices communicate using either synchronous or asynchronous protocols:
            <pre><code>
            - Synchronous Communication: Typically achieved with REST or gRPC. Direct communication between services can lead to tighter coupling and potential latency.
            - Asynchronous Communication: Uses messaging systems like RabbitMQ, Kafka, or event-driven patterns. This approach is more resilient, allowing services to operate independently and scale more flexibly.
            </code></pre>
            Common patterns include:
            <pre><code>
            - API Gateway: A central access point that routes requests to appropriate services and handles cross-cutting concerns (e.g., authentication, logging).
            - Service Registry and Discovery: Services register with a registry (e.g., Eureka) and discover each other dynamically.
            - Event-Driven Architecture: Services communicate through events, which enables decoupling.
            </code></pre>
        `
    },
    {
        "question": "What is the `Circuit Breaker` pattern in microservices, and why is it important?",
        "answer": `
            The Circuit Breaker pattern prevents cascading failures in microservices by monitoring calls to a service and “breaking” (halting) calls when it detects failures, like timeouts or errors.
            <pre><code>
            - Open State: When the circuit is broken, no requests are sent to the service.
            - Half-Open State: After a timeout, a limited number of requests are allowed to test if the service has recovered.
            - Closed State: If the service is stable, the circuit closes, allowing normal operation.
            </code></pre>
            This pattern is crucial for resilience, preventing overloading of failing services and helping systems degrade gracefully.
        `
    },
    {
        "question": "Explain `Service Discovery` and its types in a microservices architecture.",
        "answer": `
            Service Discovery allows services to dynamically discover each other without hardcoding addresses. There are two main types:
            <pre><code>
            - Client-Side Discovery: The client queries a service registry (e.g., Eureka, Consul) to find the location of other services and then makes a request directly. Load balancing is handled by the client.
            - Server-Side Discovery: The client sends a request to a load balancer (e.g., AWS ELB), which queries the registry and forwards the request to an available service instance. Here, the load balancer handles the discovery and routing.
            </code></pre>
        `
    },
    {
        "question": "How would you handle data consistency in a microservices architecture?",
        "answer": `
            Data consistency in microservices can be challenging due to distributed systems. Approaches include:
            <pre><code>
            - Eventual Consistency: Using event-driven or asynchronous messaging to achieve eventual data consistency across services.
            - Sagas: A sequence of local transactions across services where each step has a compensating action to undo changes in case of failure. Sagas are typically implemented using Choreography (events trigger next actions) or Orchestration (a central service coordinates the saga).
            - Two-Phase Commit (2PC): Ensures atomicity across services but is less commonly used in microservices due to its complexity and potential for blocking.
            </code></pre>
        `
    },
    {
        "question": "What is the `API Gateway` pattern, and what are its advantages and disadvantages?",
        "answer": `
            An API Gateway acts as a single entry point for clients, handling all requests and routing them to appropriate services. It can manage cross-cutting concerns like authentication, logging, rate limiting, and aggregation of responses.
            <pre><code>
            Advantages:
            - Simplifies client interactions by providing a single endpoint.
            - Centralizes cross-cutting concerns, reducing duplication across services.
            - Supports request aggregation, which can reduce the number of calls to multiple microservices.
            </code></pre>
            <pre><code>
            Disadvantages:
            - Becomes a single point of failure if not managed properly.
            - Adds additional latency due to the extra network hop.
            - Can become a bottleneck as traffic increases, requiring scaling.
            </code></pre>
        `
    },
    {
        "question": "What are distributed transactions, and why are they challenging in microservices?",
        "answer": `
            Distributed transactions span multiple services, each with its own database. In monolithic architectures, transactions are usually atomic due to ACID compliance, but microservices lack a central database, making such transactions complex.
            <pre><code>
            Challenges: Coordinating commits across services, ensuring atomicity and consistency, and handling partial failures.
            Solutions: Use eventual consistency patterns, Sagas for compensating transactions, or leverage event-based architectures to propagate changes.
            </code></pre>
        `
    },
    {
        "question": "What is `CQRS` (Command Query Responsibility Segregation), and how is it applied in microservices?",
        "answer": `
            CQRS is a pattern that separates read and write operations to different models:
            <pre><code>
            - Command (Write) Model: Handles updates and writes to the database.
            - Query (Read) Model: Optimized for querying data, often using a different schema.
            </code></pre>
            In microservices, CQRS enables services to have separate data stores optimized for specific operations, improving performance and scalability. It also aligns well with event-driven architectures, where writes generate events consumed by other services to update read models.
        `
    },
    {
        "question": "How would you implement security in a microservices architecture?",
        "answer": `
            Implementing security in microservices requires addressing several layers:
            <pre><code>
            - Authentication and Authorization: Use centralized authentication (e.g., OAuth2 with OpenID Connect) with tokens (e.g., JWT) passed between services.
            - API Gateway: Enforce security policies at the API Gateway, which can manage authentication and authorize requests before routing them to services.
            - Service-to-Service Communication: Use mutual TLS (mTLS) or secure tokens to authenticate service requests.
            - Data Encryption: Encrypt sensitive data both in transit and at rest to protect data within and between services.
            </code></pre>
        `
    },
    {
        "question": "What is `Event Sourcing`, and how does it differ from traditional CRUD?",
        "answer": `
            Event Sourcing stores state changes as a series of events rather than persisting the current state in a database. Each event represents a change, making it possible to reconstruct the state by replaying events.
            <pre><code>
            Differences:
            - CRUD: Stores the current state in the database; updates overwrite previous data.
            - Event Sourcing: Logs changes, allowing complete historical records. State is derived by replaying events.
            </code></pre>
            Event sourcing is beneficial for audit logs and tracking changes over time, but it adds complexity due to the need for replaying events to reconstruct state.
        `
    },
    {
        "question": "How do you handle logging and monitoring in a microservices environment?",
        "answer": `
            Logging and monitoring are crucial in microservices to track distributed systems:
            <pre><code>
            - Centralized Logging: Use tools like ELK Stack (Elasticsearch, Logstash, Kibana) or EFK (Elasticsearch, Fluentd, Kibana) to aggregate logs from all services.
            - Distributed Tracing: Use tracing tools (e.g., Jaeger, Zipkin) to trace requests across services and visualize request flows.
            - Metrics and Alerts: Implement metrics collection (e.g., Prometheus) to monitor system health, and use alerting to detect issues.
            </code></pre>
            These practices enable better insight into service health, root cause analysis, and quick detection of issues.
        `
    },
    {
        "question": "Explain the difference between `orchestration` and `choreography` in microservices.",
        "answer": `
            <pre><code>
            - Orchestration: A central coordinator controls and dictates the sequence of events across services. It provides a more controlled flow but can introduce a single point of failure.
            - Choreography: Each service listens for events and decides its own actions based on those events. This is more decentralized, making it more resilient but can lead to complex event flows.
            </code></pre>
            Use cases:
            <pre><code>
            - Orchestration is suited for processes requiring strict ordering.
            - Choreography is ideal for loosely-coupled, event-driven architectures.
            </code></pre>
        `
    },
    {
        "question": "What are sidecar patterns, and how are they used in microservices?",
        "answer": `
            The Sidecar pattern deploys a helper component alongside each service instance in the same environment, handling auxiliary tasks such as logging, configuration, and service discovery.
            <pre><code>
            Use Cases: Monitoring, logging, or proxying requests. A common example is using Envoy or Istio as sidecars in service meshes.
            Advantages: Offloads non-business functions from the main service, keeping it lightweight.
            </code></pre>
        `
    },
    {
        "question": "How do you perform API versioning in microservices, and what are the challenges?",
        "answer": `
            API versioning in microservices is essential for backward compatibility. Common strategies include:
            <pre><code>
            - URI Versioning (e.g., /v1/resource).
            - Header Versioning (e.g., Accept: application/vnd.api.v1+json).
            - Query Parameter Versioning (e.g., /resource?version=1).
            </code></pre>
            Challenges include maintaining multiple versions, handling deprecations, and keeping clients updated about version changes.
        `
    },
    {
        "question": "What are some strategies to handle failure and improve resilience in microservices?",
        "answer": `
            <pre><code>
            - Retry Mechanism: Implement retries with backoff to handle transient failures.
            - Circuit Breaker: Prevents cascading failures by stopping requests to a failing service.
            - Timeouts: Set timeouts to prevent prolonged waiting on unresponsive services.
            - Bulkheads: Isolate critical services to prevent failures in one part of the system from affecting others.
            </code></pre>
            These patterns help maintain service resilience by limiting the impact of failures.
        `
    },
    {
        "question": "How does a service mesh work, and when would you use one in microservices?",
        "answer": `
            A service mesh is a dedicated infrastructure layer that manages service-to-service communication, providing features like load balancing, traffic management, and security.
            <pre><code>
            Components: Typically involves sidecar proxies (e.g., Envoy) deployed alongside each service, with a control plane (e.g., Istio) managing configurations.
            Use Cases: Use a service mesh when there is a need for advanced traffic management, secure service-to-service communication, or observability in a complex microservices environment.
            </code></pre>
            Service meshes simplify and centralize network policies but add operational complexity.
        `
    }
]
,
"Rest Services": [
    {
        "question": "What are idempotent methods in REST, and which HTTP methods are idempotent?",
        "answer": `
            Idempotent methods are HTTP methods that can be called multiple times without changing the result beyond the initial application. In REST, the following methods are idempotent:
            <pre><code>
            - GET: Retrieving a resource does not change the state.
            - PUT: Replacing a resource with the same data multiple times results in the same state.
            - DELETE: Deleting a resource multiple times has the same effect as deleting it once.
            - HEAD and OPTIONS: These methods are inherently idempotent as they don’t modify resources.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `PUT` and `PATCH` in REST?",
        "answer": `
            <pre><code>
            - PUT: Replaces the entire resource with a new representation. If a resource exists, it is fully updated; if not, it may be created (upsert behavior).
            - PATCH: Partially updates the resource with only the provided data fields. It’s more efficient for updates that involve only a subset of fields, as it doesn’t replace the entire resource.
            </code></pre>
            Example: For a User resource, PUT would require sending all user attributes, while PATCH allows sending just the updated fields (e.g., updating only the email).
        `
    },
    {
        "question": "Explain HATEOAS and why it is important in RESTful services.",
        "answer": `
            HATEOAS (Hypermedia As The Engine Of Application State) is a REST principle where a resource representation includes hyperlinks to related resources. It allows clients to navigate the API dynamically through provided links, reducing tight coupling between client and server.
            <pre><code>
            Example:
            {
              "id": 1,
              "name": "John Doe",
              "links": [
                { "rel": "self", "href": "/users/1" },
                { "rel": "orders", "href": "/users/1/orders" }
              ]
            }
            </code></pre>
            HATEOAS helps clients interact with resources and discover functionality without prior knowledge of the API structure.
        `
    },
    {
        "question": "What are the different types of status codes you should use in a REST API, and give examples for each.",
        "answer": `
            <pre><code>
            - 1xx (Informational): Rarely used in REST, e.g., 100 Continue.
            - 2xx (Success): Indicates successful requests:
              - 200 OK: Standard response for a successful GET or PUT.
              - 201 Created: Used for a successful POST request creating a new resource.
              - 204 No Content: Used when a DELETE request successfully removes a resource.
            - 3xx (Redirection): Rarely used in REST APIs, e.g., 301 Moved Permanently.
            - 4xx (Client Error): Indicates client-side errors:
              - 400 Bad Request: Indicates invalid input.
              - 401 Unauthorized: The client is not authenticated.
              - 403 Forbidden: The client is authenticated but lacks authorization.
              - 404 Not Found: The requested resource does not exist.
              - 409 Conflict: Indicates a conflict in the request, such as duplicate data.
            - 5xx (Server Error): Indicates server-side errors, e.g., 500 Internal Server Error.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between synchronous and asynchronous REST APIs? When would you use each?",
        "answer": `
            <pre><code>
            - Synchronous API: The client waits for the server’s response before proceeding. It’s best for short-running operations where the result is needed immediately.
            - Asynchronous API: The server immediately returns a response (often 202 Accepted), and the client can check the status or receive a callback when the process completes. Useful for long-running operations, such as batch processing or heavy computations, allowing clients to continue with other tasks.
            </code></pre>
            Example: An endpoint to upload a file might use an asynchronous API if the server takes time to process the file.
        `
    },
    {
        "question": "How can you version a REST API, and what are the pros and cons of each method?",
        "answer": `
            <pre><code>
            - URI Versioning: Adding version to the URL (e.g., /api/v1/resource).
              - Pros: Simple and explicit.
              - Cons: May lead to duplication and more complex URLs.
            - Header Versioning: Adding a custom header (e.g., Accept: application/vnd.company.v1+json).
              - Pros: Keeps the URL clean; allows backward compatibility.
              - Cons: Requires clients to support headers.
            - Query Parameter Versioning: Adding a version parameter (e.g., /api/resource?version=1).
              - Pros: Easy to implement and test.
              - Cons: Less conventional and may lead to cache issues.
            </code></pre>
        `
    },
    {
        "question": "Explain the purpose of `OPTIONS` in RESTful APIs and how it is used.",
        "answer": `
            The OPTIONS method returns the allowed HTTP methods and headers for a given endpoint, helping clients determine available operations without attempting them directly. It’s essential in CORS (Cross-Origin Resource Sharing) as browsers send OPTIONS preflight requests to check if a cross-origin request is allowed.
            <pre><code>
            Example:
            OPTIONS /api/resource HTTP/1.1
            </code></pre>
            The server responds with allowed methods, e.g., Allow: GET, POST, PUT, DELETE.
        `
    },
    {
        "question": "What are CORS issues, and how do you handle them in a REST API?",
        "answer": `
            CORS (Cross-Origin Resource Sharing) restricts web applications from making requests to a different origin. Browsers enforce this for security reasons. To handle CORS:
            <pre><code>
            - Configure the server to include the Access-Control-Allow-Origin header with allowed origins.
            - Specify other headers like Access-Control-Allow-Methods and Access-Control-Allow-Headers to define allowed methods and headers.
            </code></pre>
            In Spring Boot, CORS can be configured with @CrossOrigin annotation on endpoints or globally with WebMvcConfigurer.
        `
    },
    {
        "question": "What is content negotiation in REST, and how does it work?",
        "answer": `
            Content negotiation allows a REST API to serve different formats (e.g., JSON, XML) based on the client’s request headers (Accept). The server checks the Accept header to decide the response format:
            <pre><code>
            - If Accept: application/json, the server responds with JSON.
            - If Accept: application/xml, it responds with XML.
            </code></pre>
            If the requested format isn’t supported, the server may return 406 Not Acceptable. Content negotiation enables flexibility, allowing clients to request the format they prefer.
        `
    },
    {
        "question": "What are `Idempotency Keys`, and why are they useful in REST APIs?",
        "answer": `
            Idempotency keys ensure that duplicate requests (e.g., due to network issues) don’t result in duplicate operations. An idempotency key is a unique identifier sent in the header (Idempotency-Key), and the server checks if the request with the same key has been processed.
            <pre><code>
            Usefulness: It prevents issues like duplicate order submissions or duplicate payments in financial transactions.
            </code></pre>
        `
    },
    {
        "question": "How would you secure a REST API? List some common strategies.",
        "answer": `
            <pre><code>
            - Token-Based Authentication: Use tokens like JWT to verify users without exposing credentials.
            - OAuth2: Allows secure authorization, often with third-party providers (Google, Facebook).
            - API Keys: Used for simple authentication, especially for machine-to-machine communication.
            - HTTPS: Encrypts requests to secure sensitive information.
            - Rate Limiting: Prevents abuse by limiting the number of requests a client can make in a given period.
            - IP Whitelisting: Restricts access to trusted IP addresses, especially for internal services.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `401 Unauthorized` and `403 Forbidden`?",
        "answer": `
            <pre><code>
            - 401 Unauthorized: Indicates that the client is not authenticated. Typically, the client must log in or provide valid credentials to access the resource.
            - 403 Forbidden: Indicates that the client is authenticated but does not have permission to access the resource.
            </code></pre>
            Example: If a user tries to access an admin-only resource, they may receive a 403 Forbidden if they lack the required role.
        `
    },
    {
        "question": "Explain the `PATCH` HTTP method and when you would use it over `PUT`.",
        "answer": `
            <pre><code>
            - PATCH is used for partial updates to a resource, allowing clients to send only the fields that need modification, making it more efficient for updates.
            - PUT replaces the entire resource with the provided data, requiring all fields to be sent even if only one needs updating.
            </code></pre>
            Use PATCH when you want to modify specific fields without affecting others.
        `
    },
    {
        "question": "How can you handle errors in a REST API, and what are some best practices for designing error responses?",
        "answer": `
            <pre><code>
            - Use standard HTTP status codes (e.g., 400 Bad Request, 404 Not Found) to indicate the type of error.
            - Include a detailed error response body with fields like error, message, timestamp, and details for client troubleshooting.
            - Consider using a consistent structure across errors, e.g.:
              {
                "timestamp": "2023-03-17T16:23:41Z",
                "status": 400,
                "error": "Bad Request",
                "message": "Invalid input data",
                "path": "/api/resource"
              }
            </code></pre>
        `
    },
    {
        "question": "What is the difference between synchronous and asynchronous processing in REST, and how would you implement an async REST endpoint in Spring Boot?",
        "answer": `
            <pre><code>
            - Synchronous Processing: The client waits for the server to complete the request before receiving a response. Suitable for short operations.
            - Asynchronous Processing: The server immediately responds (often with 202 Accepted), and the client can check status updates or get notified when processing completes. Suitable for long-running tasks.
            </code></pre>
            In Spring Boot, an async endpoint can be implemented using @Async or by returning CompletableFuture<ResponseEntity>. This allows the endpoint to process the request asynchronously without blocking the main thread.
        `
    }
]
,
"Spring Security": [
    {
        "question": "How does Spring Security handle authentication and authorization?",
        "answer": `
            <pre><code>
            - Authentication: Spring Security verifies the identity of users via AuthenticationManager, typically using UserDetailsService or other authentication providers (e.g., LDAP, OAuth, JWT). The result is an Authentication object, which stores principal details.
            - Authorization: After authentication, Spring Security performs authorization to check if the authenticated user has the required permissions to access resources. This is achieved through AccessDecisionManager, which uses access rules (e.g., roles, expressions) to determine whether access is granted.
            </code></pre>
        `
    },
    {
        "question": "What are `GrantedAuthority` and `Role` in Spring Security, and how do they differ?",
        "answer": `
            <pre><code>
            - GrantedAuthority: Represents an authority granted to the user. It can be anything that defines permissions, like ROLE_USER, ROLE_ADMIN, or specific privileges (READ_PRIVILEGES).
            - Role: A specific type of GrantedAuthority prefixed with ROLE_, representing a role assigned to a user. By convention, Spring Security treats ROLE_ as a role prefix, but it’s not enforced, allowing GrantedAuthority to represent finer-grained permissions.
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of `UserDetails` and `UserDetailsService` in Spring Security?",
        "answer": `
            <pre><code>
            - UserDetails: Represents the core user information. This interface contains details like username, password, roles, and other account status details.
            - UserDetailsService: Responsible for retrieving UserDetails based on the username. It provides a method loadUserByUsername(String username), which Spring Security calls during authentication to load user information from a database or other source.
            </code></pre>
        `
    },
    {
        "question": "How does Spring Security handle stateless authentication, and what configurations are required?",
        "answer": `
            Stateless Authentication: Commonly used with tokens (e.g., JWT) where no session state is stored on the server. The client includes the token with each request.
            <pre><code>
            Configuration:
            - Disable session creation: http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).
            - Implement a filter that intercepts requests, extracts the token, and sets the authentication context based on token validation.
            - Ensure CSRF protection is disabled, as it’s unnecessary in stateless applications: http.csrf().disable().
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `@PreAuthorize` and `@Secured` annotations?",
        "answer": `
            <pre><code>
            - @PreAuthorize: Allows SpEL (Spring Expression Language) expressions for flexible access control based on roles, permissions, or method arguments. For example, @PreAuthorize("hasRole('ADMIN')") or @PreAuthorize("#user.name == authentication.name").
            - @Secured: Simpler and only supports role-based authorization without SpEL expressions. For example, @Secured("ROLE_ADMIN").
            </code></pre>
            @PreAuthorize is more flexible and commonly used for more complex authorization requirements.
        `
    },
    {
        "question": "Explain the role of `SecurityContext` and `SecurityContextHolder` in Spring Security.",
        "answer": `
            <pre><code>
            - SecurityContext: Stores the Authentication object containing user details, roles, and authentication status. Each request has its own SecurityContext, and it’s used to determine the current authenticated user.
            - SecurityContextHolder: Manages SecurityContext instances across threads and provides static methods to access and modify the context. By default, it uses ThreadLocal to store the context, so it’s isolated per request.
            </code></pre>
        `
    },
    {
        "question": "How would you implement custom login and logout handlers in Spring Security?",
        "answer": `
            <pre><code>
            - Custom Login Handler: Implement AuthenticationSuccessHandler for custom login logic, such as redirecting users based on roles:
              public class MyCustomSuccessHandler implements AuthenticationSuccessHandler {
                  @Override
                  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                                      Authentication authentication) throws IOException {
                      response.sendRedirect("/home");
                  }
              }
              Register it with http.formLogin().successHandler(new MyCustomSuccessHandler()).

            - Custom Logout Handler: Implement LogoutHandler and register it via http.logout().addLogoutHandler(myLogoutHandler). This allows you to add custom behavior on logout, like clearing session data or invalidating tokens.
            </code></pre>
        `
    },
    {
        "question": "How does Spring Security protect against Cross-Site Request Forgery (CSRF), and when might you disable it?",
        "answer": `
            <pre><code>
            - CSRF Protection: Spring Security uses CSRF tokens to ensure that requests are coming from authenticated users. Each session gets a unique CSRF token that must be included in the request headers for non-idempotent (state-changing) requests.
            - Disabling CSRF: CSRF protection is usually disabled in stateless applications (e.g., REST APIs using JWTs) because the server does not maintain session state, making CSRF tokens unnecessary:
              http.csrf().disable();
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of `OncePerRequestFilter`, and when would you use it in Spring Security?",
        "answer": `
            OncePerRequestFilter ensures that a filter is executed only once per request, regardless of how many times it may be invoked within a filter chain. It’s commonly used in security filters, such as JWT filters, where you want to authenticate a request only once per request lifecycle to avoid redundant authentication checks or token validation.
        `
    },
    {
        "question": "What are `AuthenticationManager` and `ProviderManager` in Spring Security?",
        "answer": `
            <pre><code>
            - AuthenticationManager: The primary interface for handling authentication in Spring Security. It has a single method, authenticate(Authentication authentication), which attempts to verify credentials and returns an Authentication object if successful.
            - ProviderManager: A concrete implementation of AuthenticationManager. It delegates authentication requests to multiple AuthenticationProviders, allowing support for multiple authentication mechanisms (e.g., LDAP, database). Each provider is checked in sequence until one successfully authenticates the request.
            </code></pre>
        `
    },
    {
        "question": "How would you implement role-based and permission-based access control in Spring Security?",
        "answer": `
            <pre><code>
            - Role-Based Access Control (RBAC): Use role names prefixed with ROLE_ and configure access rules via annotations (@Secured("ROLE_ADMIN"), @PreAuthorize("hasRole('ADMIN')")) or via HTTP configuration (.hasRole("ADMIN")).
            - Permission-Based Access Control: Use @PreAuthorize("hasAuthority('READ_PRIVILEGES')") for finer-grained control. Permissions can be added to GrantedAuthority as custom authorities rather than roles.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `Basic Authentication` and `Bearer Token` in Spring Security?",
        "answer": `
            <pre><code>
            - Basic Authentication: Sends the user’s credentials (username and password) in the Authorization header with each request. It’s simple but less secure for APIs, as credentials are sent repeatedly, increasing exposure risk.
            - Bearer Token: A token (e.g., JWT) is used instead of credentials after initial authentication. The token is sent with each request, usually in the Authorization header as Bearer <token>. This method is more secure for stateless applications.
            </code></pre>
        `
    },
    {
        "question": "How does `@EnableGlobalMethodSecurity` work, and what are the attributes like `prePostEnabled` and `securedEnabled`?",
        "answer": `
            @EnableGlobalMethodSecurity enables method-level security annotations in Spring Security:
            <pre><code>
            - prePostEnabled: Enables @PreAuthorize and @PostAuthorize annotations, allowing for access control using SpEL expressions.
            - securedEnabled: Enables @Secured annotations for simple, role-based access control.
            - jsr250Enabled: Enables JSR-250 annotations like @RolesAllowed, commonly used for role-based authorization.
            </code></pre>
            Example:
            <pre><code>
            @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
            public class SecurityConfig extends WebSecurityConfigurerAdapter { }
            </code></pre>
        `
    },
    {
        "question": "How would you integrate OAuth2 with Spring Security, and what are the main components involved?",
        "answer": `
            Spring Security’s OAuth2 integration supports various authentication providers and involves:
            <pre><code>
            - Client Registration: Defines the OAuth2 provider details (client ID, client secret, scopes, etc.).
            - Authorization Request: Initiates an authorization request with the provider.
            - Authorization Code Flow: Manages the authorization code exchange to obtain an access token.
            - Resource Server: Verifies the access token on each request.
            </code></pre>
            Example configuration involves spring.security.oauth2.client.registration properties in application.properties.
        `
    },
    {
        "question": "What is `PasswordEncoder` in Spring Security, and why is it necessary?",
        "answer": `
            PasswordEncoder is an interface that defines methods for encoding and verifying passwords. Encoding is essential for securely storing passwords, as plain-text storage is highly insecure. Spring Security offers implementations like BCryptPasswordEncoder for strong hashing, which adds a salt to the password to protect against rainbow table attacks.
        `
    }
]
,
"Spring batches": [
    {
        "question": "What are the main components of a Spring Batch job, and what is the purpose of each component?",
        "answer": `
            <pre><code>
            - Job: Represents the batch process and is the root of the batch framework. It consists of steps and acts as the overall coordinator.
            - Step: Represents a single phase in a job, like reading data, processing, or writing it. A job consists of multiple steps.
            - ItemReader: Reads data from a data source (e.g., file, database) and provides it to the step.
            - ItemProcessor: Processes each item individually (e.g., transforming data or applying business logic).
            - ItemWriter: Writes the processed data to a destination, such as a database or file.
            - JobRepository: Stores metadata about job executions and step executions, maintaining the state for job restartability.
            </code></pre>
        `
    },
    {
        "question": "Explain how Spring Batch achieves job restartability. How can you ensure a job is restartable?",
        "answer": `
            Spring Batch makes jobs restartable by storing execution metadata in a JobRepository. When a job fails, it can be restarted from the last committed step or item, instead of starting from scratch.
            <pre><code>
            To ensure restartability:
            - Mark the job as restartable using .start() or .next() methods on steps.
            - Implement an ItemReader and ItemWriter that support restarts, meaning they can pick up from where they left off.
            - Ensure the JobRepository is correctly configured to persist execution states.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `JobParameters` and `JobExecutionContext` in Spring Batch?",
        "answer": `
            <pre><code>
            - JobParameters: These are immutable parameters passed to the job at the time of execution. They remain constant for a single job instance and are used to uniquely identify a job instance.
            - JobExecutionContext: A mutable context available during the job execution. It stores intermediate state information, allowing a job to resume processing from where it left off if it fails.
            </code></pre>
        `
    },
    {
        "question": "What will happen if you try to start a Spring Batch job without any `JobParameters`? Can it be restarted later?",
        "answer": `
            If you start a job without any JobParameters, Spring Batch will consider every execution of the job as the same instance, making it difficult to restart or uniquely identify each run. To make a job restartable, it should have unique JobParameters for each execution.
            <pre><code>
            Using parameters like a timestamp or run ID ensures each instance is unique and restartable.
            </code></pre>
        `
    },
    {
        "question": "How does Spring Batch handle transactions, and how would you configure a job to ensure atomicity of a step?",
        "answer": `
            Spring Batch manages transactions at the chunk level. Each chunk is treated as a single transaction, which is committed after processing.
            <pre><code>
            To ensure atomicity:
            - Set an appropriate commit-interval to control the number of items per transaction.
            - Configure an appropriate transaction manager.
            - Handle exceptions in a way that if one chunk fails, it is retried or rolled back, depending on the configuration.
            </code></pre>
        `
    },
    {
        "question": "What is a `Chunk-Oriented Step`, and how does it differ from a `Tasklet Step` in Spring Batch?",
        "answer": `
            <pre><code>
            - Chunk-Oriented Step: Processes data in chunks, which involves reading, processing, and writing items in batches. After each chunk, a transaction is committed. Suitable for large data processing jobs.
            - Tasklet Step: Executes a single task in one step. It’s often used for simple tasks, like file deletion or single-step operations that don’t need chunking. A Tasklet is executed once and does not process data in chunks.
            </code></pre>
        `
    },
    {
        "question": "How would you handle job failure and implement retry logic in Spring Batch?",
        "answer": `
            <pre><code>
            - Use the retry policy on the ItemProcessor or ItemWriter. Spring Batch provides built-in retry capabilities by configuring a RetryTemplate.
            - Configure retryable exceptions using @Retryable annotation or in the XML configuration.
            - Use RetryListener for monitoring retries.
            - In case of a complete job failure, you can also restart the job using JobLauncher, passing the same JobParameters if needed.
            </code></pre>
        `
    },
    {
        "question": "Explain the purpose of `SkipPolicy` and `RetryPolicy` in Spring Batch.",
        "answer": `
            <pre><code>
            - SkipPolicy: Defines which exceptions to skip during a job execution. It allows you to skip certain types of errors without failing the whole job. It’s commonly used when occasional errors (e.g., malformed records) are acceptable.
            - RetryPolicy: Defines the conditions under which an item should be retried after failure. It’s used for transient issues where you expect the operation to succeed after a few retries (e.g., network issues).
            </code></pre>
        `
    },
    {
        "question": "What are `JobExecutionListener` and `StepExecutionListener`, and how are they used?",
        "answer": `
            <pre><code>
            - JobExecutionListener: Used to perform actions before or after a job executes. It provides beforeJob() and afterJob() methods, which can be used for logging, resource cleanup, or sending notifications.
            - StepExecutionListener: Similar to JobExecutionListener but operates at the step level, with beforeStep() and afterStep() methods. Useful for tasks like setting up resources or handling step-specific actions.
            </code></pre>
        `
    },
    {
        "question": "How does partitioning work in Spring Batch, and when would you use it?",
        "answer": `
            Partitioning in Spring Batch divides a large job into smaller partitions, allowing each partition to process a subset of data in parallel. It’s used for improving performance by distributing the load across multiple threads or nodes.
            <pre><code>
            The main components in partitioning are:
            - Partitioner: Divides the data into partitions, creating a StepExecution for each partition.
            - Step: Executes each partition independently, potentially in parallel if configured.
            </code></pre>
            Partitioning is useful in scenarios where a large dataset needs to be processed in parallel for faster execution, such as in distributed systems.
        `
    },
    {
        "question": "What is the difference between `Flow` and `Decision` in Spring Batch?",
        "answer": `
            <pre><code>
            - Flow: Represents a sequence of steps that can be reused and linked to other flows or steps. It’s typically used to modularize a job by breaking it into multiple flows.
            - Decision: Represents a conditional logic where the job decides which step to execute next based on the result of a JobExecutionDecider. It allows dynamic flow based on runtime conditions.
            </code></pre>
            Example:
            <pre><code>
            public class MyDecider implements JobExecutionDecider {
                public FlowExecutionStatus decide(JobExecution jobExecution, StepExecution stepExecution) {
                    return new FlowExecutionStatus("COMPLETED");
                }
            }
            </code></pre>
        `
    },
    {
        "question": "How would you configure parallel processing in Spring Batch, and what are the main strategies?",
        "answer": `
            Parallel processing improves performance by distributing work across threads or processes.
            <pre><code>
            Main strategies include:
            - Multi-threaded Step: Configure a TaskExecutor in a step to allow concurrent execution of chunks within the same JVM.
            - Partitioning: Use partitioned steps to distribute data processing across multiple threads or nodes, where each partition is processed independently.
            - Remote Chunking: Processes chunks remotely by sending data to worker nodes for processing, useful in distributed systems.
            </code></pre>
            Example of configuring a multi-threaded step:
            <pre><code>
            @Bean
            public Step step() {
                return stepBuilderFactory.get("step")
                    .<InputType, OutputType>chunk(10)
                    .reader(reader())
                    .processor(processor())
                    .writer(writer())
                    .taskExecutor(new SimpleAsyncTaskExecutor())
                    .build();
            }
            </code></pre>
        `
    },
    {
        "question": "Explain `ExecutionContext` and how it helps with job restartability in Spring Batch.",
        "answer": `
            ExecutionContext is a map-like structure that stores intermediate data for a job or step execution. It allows jobs to store data that can be retrieved if a job is restarted, providing a way to save the job’s state between steps or executions. ExecutionContext is used for restartability by storing the last processed item, so the job can resume from where it left off after a failure.
        `
    },
    {
        "question": "What is a `CompositeItemProcessor` and when would you use it?",
        "answer": `
            CompositeItemProcessor allows chaining multiple ItemProcessor implementations, where each processor’s output becomes the input for the next processor in the chain. It’s useful when multiple transformations need to be applied sequentially to an item before writing it.
            <pre><code>
            Example:
            @Bean
            public CompositeItemProcessor<MyItem, MyProcessedItem> processor() {
                CompositeItemProcessor<MyItem, MyProcessedItem> processor = new CompositeItemProcessor<>();
                processor.setDelegates(Arrays.asList(new ValidationProcessor(), new TransformationProcessor()));
                return processor;
            }
            </code></pre>
        `
    }
]
,
"Spring MVC": [
    {
        "question": "What is the difference between `@Controller` and `@RestController` in Spring MVC?",
        "answer": `
            <pre><code>
            - @Controller: Indicates that a class serves as a controller in Spring MVC. It is typically used in conjunction with @RequestMapping methods to handle web requests. By default, it returns views (e.g., JSP) and uses ModelAndView for rendering.
            - @RestController: A specialized version of @Controller that combines @Controller and @ResponseBody. It returns JSON or XML directly as a response, not views. It’s ideal for building RESTful web services, where you want to serialize objects to JSON or XML by default.
            </code></pre>
        `
    },
    {
        "question": "How does Spring handle form data binding in MVC? Explain `@ModelAttribute` and `@RequestParam`.",
        "answer": `
            <pre><code>
            - @ModelAttribute: Binds form data to a model object. It populates a model attribute before invoking the controller method, allowing you to pass complex objects to the view. It can also be used on methods to add additional attributes to the model.
            - @RequestParam: Binds individual request parameters to method parameters, typically used for simple data types. For example, @RequestParam("name") String name binds the query parameter name to the method parameter.
            </code></pre>
            Example:
            <pre><code>
            @PostMapping("/submitForm")
            public String submitForm(@ModelAttribute("user") User user) {
                // user object is populated from form data
            }

            @GetMapping("/search")
            public String search(@RequestParam("query") String query) {
                // query parameter is directly bound to a String variable
            }
            </code></pre>
        `
    },
    {
        "question": "What are the key differences between `@RequestMapping` and `@GetMapping`/`@PostMapping` in Spring MVC?",
        "answer": `
            <pre><code>
            - @RequestMapping: A more generic mapping annotation that supports all HTTP methods (GET, POST, DELETE, etc.). It can specify the method with method = RequestMethod.GET (or similar).
            - @GetMapping and @PostMapping: Stereotype annotations introduced in Spring 4.3. They are specific to the GET and POST HTTP methods, making the code cleaner and more readable by eliminating the need to specify the HTTP method explicitly.
            </code></pre>
            Example:
            <pre><code>
            @RequestMapping(value = "/users", method = RequestMethod.GET)
            // vs.
            @GetMapping("/users")
            </code></pre>
        `
    },
    {
        "question": "Explain the role of `HandlerMapping` and `HandlerAdapter` in Spring MVC.",
        "answer": `
            <pre><code>
            - HandlerMapping: Responsible for mapping HTTP requests to handler methods based on the URL or other attributes. Examples include RequestMappingHandlerMapping, which maps @RequestMapping annotations to methods, and SimpleUrlHandlerMapping.
            - HandlerAdapter: Works as an adapter for invoking the mapped handler methods. It enables different handler types, such as annotated controllers or traditional controllers. RequestMappingHandlerAdapter is the default adapter for @RequestMapping methods.
            </code></pre>
            Together, HandlerMapping finds the appropriate handler, and HandlerAdapter invokes the handler.
        `
    },
    {
        "question": "What is the purpose of `@ResponseBody` in Spring MVC, and how is it different from using a `ModelAndView`?",
        "answer": `
            <pre><code>
            - @ResponseBody: Directly binds the method's return value to the HTTP response body, typically used to send JSON or XML data. It uses message converters (e.g., MappingJackson2HttpMessageConverter for JSON) to serialize objects to the response.
            - ModelAndView: Returns a view name and model data, which the view resolver then renders. It’s used when you want to return an HTML page instead of data.
            </code></pre>
            Example:
            <pre><code>
            @GetMapping("/json")
            @ResponseBody
            public User getUser() {
                return new User("John", "Doe"); // Serialized to JSON
            }

            @GetMapping("/page")
            public ModelAndView getPage() {
                return new ModelAndView("userPage"); // Returns a view with name "userPage"
            }
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of `@ExceptionHandler`, and how can you create a global exception handler in Spring MVC?",
        "answer": `
            <pre><code>
            - @ExceptionHandler: Used to define a method to handle specific exceptions thrown by controller methods. You can use it within a controller class to handle exceptions locally.
            - Global Exception Handler: To handle exceptions globally, create a class annotated with @ControllerAdvice and define @ExceptionHandler methods in it. This class will handle exceptions for all controllers.
            </code></pre>
            Example:
            <pre><code>
            @ControllerAdvice
            public class GlobalExceptionHandler {
                @ExceptionHandler(Exception.class)
                public ResponseEntity<String> handleException(Exception e) {
                    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
            </code></pre>
        `
    },
    {
        "question": "What is `@PathVariable` and how does it differ from `@RequestParam` in Spring MVC?",
        "answer": `
            <pre><code>
            - @PathVariable: Binds a URI template variable to a method parameter. It's used to capture part of the URL, typically when defining RESTful endpoints.
            - @RequestParam: Binds a query parameter or form parameter to a method parameter.
            </code></pre>
            Example:
            <pre><code>
            @GetMapping("/users/{id}")
            public String getUserById(@PathVariable("id") int id) {
                // Binds path variable to id
            }

            @GetMapping("/search")
            public String search(@RequestParam("query") String query) {
                // Binds query parameter to query
            }
            </code></pre>
        `
    },
    {
        "question": "What are `Interceptor` and `Filter` in Spring MVC, and how do they differ?",
        "answer": `
            <pre><code>
            - Filter: A servlet-level concept that allows you to modify requests and responses globally before they reach servlets. They’re typically used for authentication, logging, and compression.
            - Interceptor: A Spring MVC-specific feature that intercepts requests at the handler level, allowing pre- and post-processing around controller execution. Interceptors are more powerful in Spring MVC, as they have access to Spring beans and can be added conditionally.
            </code></pre>
            Example usage:
            - Filter: Implemented using javax.servlet.Filter and configured in web.xml or using @Component with @WebFilter.
            - Interceptor: Implemented using HandlerInterceptor and configured via WebMvcConfigurer.
        `
    },
    {
        "question": "Explain the purpose of `@RequestBody` and how it works with message converters in Spring MVC.",
        "answer": `
            <pre><code>
            - @RequestBody: Binds the entire HTTP request body to a method parameter, typically used to handle JSON or XML data sent by clients.
            - Message Converters: Spring uses HttpMessageConverter implementations to automatically convert the request body into the appropriate object based on the content type (e.g., MappingJackson2HttpMessageConverter for JSON). This makes it easy to work with JSON data in REST APIs.
            </code></pre>
            Example:
            <pre><code>
            @PostMapping("/users")
            public ResponseEntity<User> createUser(@RequestBody User user) {
                // user object populated from JSON request body
                return ResponseEntity.ok(user);
            }
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of `@SessionAttributes`, and how does it work in Spring MVC?",
        "answer": `
            @SessionAttributes is used to store model attributes in an HTTP session across multiple requests. This is useful for retaining form data or objects between multiple requests.
            <pre><code>
            Example:
            @Controller
            @SessionAttributes("user")
            public class UserController {
                @ModelAttribute("user")
                public User setUpUserForm() {
                    return new User();
                }

                @PostMapping("/saveUser")
                public String saveUser(@ModelAttribute("user") User user) {
                    // user object saved in session for next request
                    return "userForm";
                }
            }
            </code></pre>
            Here, the user attribute is stored in the session and can be accessed in subsequent requests.
        `
    },
    {
        "question": "What is the difference between `redirect:` and `forward:` in Spring MVC?",
        "answer": `
            <pre><code>
            - redirect:: Tells Spring MVC to issue a client-side redirect. The client receives a new URL and makes another HTTP request. The URL changes and the request attributes are lost.
            - forward:: Tells Spring MVC to forward the request to another resource on the server side. The URL doesn’t change, and request attributes are retained.
            </code></pre>
            Example:
            <pre><code>
            @GetMapping("/redirectExample")
            public String redirectExample() {
                return "redirect:/anotherPage";
            }

            @GetMapping("/forwardExample")
            public String forwardExample() {
                return "forward:/anotherPage";
            }
            </code></pre>
        `
    },
    {
        "question": "What is `@CrossOrigin` and how is it used in Spring MVC?",
        "answer": `
            @CrossOrigin is used to handle Cross-Origin Resource Sharing (CORS) issues in Spring MVC. It allows you to specify permitted origins, methods, headers, and other CORS configurations to allow requests from different origins. Commonly used in REST APIs when frontend and backend are served from different domains.
            <pre><code>
            Example:
            @CrossOrigin(origins = "http://example.com")
            @GetMapping("/data")
            public ResponseEntity<String> getData() {
                return ResponseEntity.ok("Data from server");
            }
            </code></pre>
        `
    }
]
,
"Java8": [
    {
        "question": "What is the difference between `map()` and `flatMap()` in Java Streams?",
        "answer": `
            <pre><code>
            - map(): Takes a function and applies it to each element in the stream, producing a new stream where each element is the result of the function application. It’s often used when the function returns a single value per element.
            - flatMap(): Similar to map(), but it "flattens" each element in the stream. It’s used when each element of the stream can produce multiple values (e.g., a list), so it transforms each element into a stream of values and then flattens the result into a single stream.
            </code></pre>
            Example:
            <pre><code>
            List<List<Integer>> numbers = Arrays.asList(Arrays.asList(1, 2), Arrays.asList(3, 4));
            numbers.stream().map(List::stream).forEach(System.out::println);     // Nested streams
            numbers.stream().flatMap(List::stream).forEach(System.out::println); // Single stream
            </code></pre>
        `
    },
    {
        "question": "How does `Optional` prevent `NullPointerException`, and what are common pitfalls in its usage?",
        "answer": `
            Optional provides a container object that may or may not contain a non-null value, helping to avoid NullPointerException by using methods like isPresent(), ifPresent(), and orElse().
            <pre><code>
            Common pitfalls:
            - Overusing Optional: Don’t use Optional in fields or parameters, as it’s mainly intended for return types.
            - Using Optional.get() without checking presence: This still leads to NoSuchElementException if the value is absent, defeating the purpose.
            - Nested Optional: Avoid having an Optional<Optional<T>>, which makes the code harder to read and understand.
            </code></pre>
        `
    },
    {
        "question": "Explain the purpose of the `default` keyword in interfaces in Java 8. Why was it introduced?",
        "answer": `
            The default keyword allows interfaces to have concrete methods with default implementations. It was introduced to enable backward compatibility in Java 8, allowing the addition of new methods to interfaces (like forEach in Iterable) without breaking existing implementations.
            <pre><code>
            Default methods allow classes to inherit method implementations in interfaces, reducing the need for implementing common code repeatedly.
            </code></pre>
        `
    },
    {
        "question": "What is a `Stream` pipeline in Java 8, and how does it work?",
        "answer": `
            A stream pipeline consists of three parts:
            <pre><code>
            - Source: The data source, such as a collection, array, or generator.
            - Intermediate Operations: Operations like map(), filter(), and sorted(), which transform the stream and return a new stream. These are lazy operations, meaning they don’t execute until a terminal operation is called.
            - Terminal Operation: The final operation like collect(), forEach(), or reduce() that triggers the processing of the stream. It consumes the stream, and no further operations can be performed on it afterward.
            </code></pre>
            The pipeline processes elements sequentially or in parallel based on the source and whether parallel() was used.
        `
    },
    {
        "question": "What will the following code output, and why?",
        "answer": `
            <pre><code>
            List<String> names = Arrays.asList("John", "Jane", "Jack", "Doe");
            List<String> result = names.stream()
                .filter(s -> s.startsWith("J"))
                .map(String::toUpperCase)
                .sorted()
                .collect(Collectors.toList());
            System.out.println(result);
            </code></pre>
            The code will output: [JACK, JANE, JOHN]. Here’s why:
            <pre><code>
            - filter(s -> s.startsWith("J")): Filters names starting with "J".
            - map(String::toUpperCase): Converts each name to uppercase.
            - sorted(): Sorts the names lexicographically.
            - collect(Collectors.toList()): Collects the result into a list.
            </code></pre>
        `
    },
    {
        "question": "How does `reduce()` work in Java Streams, and what are some common use cases?",
        "answer": `
            reduce() is a terminal operation that aggregates elements of a stream into a single result using an associative accumulation function.
            <pre><code>
            Common use cases include:
            - Summing or multiplying numbers: stream.reduce(0, Integer::sum)
            - Concatenating strings: stream.reduce("", String::concat)
            - Finding the maximum or minimum: stream.reduce(Integer::max)
            </code></pre>
            Example:
            <pre><code>
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
            int sum = numbers.stream().reduce(0, Integer::sum);  // Returns 10
            </code></pre>
        `
    },
    {
        "question": "What are the differences between `findFirst()` and `findAny()` in Java Streams?",
        "answer": `
            <pre><code>
            - findFirst(): Returns the first element in the stream that matches the criteria. It's useful in sequential streams when order matters.
            - findAny(): Returns any matching element, potentially improving performance in parallel streams as it’s not constrained to return the first match. It may return any element in no particular order.
            </code></pre>
            Example:
            <pre><code>
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
            Integer first = numbers.stream().findFirst().orElse(-1); // Guaranteed to be 1
            Integer any = numbers.parallelStream().findAny().orElse(-1); // Could be any element
            </code></pre>
        `
    },
    {
        "question": "What is the purpose of `Collectors.toMap()` and how can you avoid `IllegalStateException` when using it?",
        "answer": `
            Collectors.toMap() collects elements in a stream into a Map. If the stream has duplicate keys, toMap() throws an IllegalStateException by default. To handle duplicates, you can provide a merge function to toMap().
            <pre><code>
            Example:
            List<String> names = Arrays.asList("John", "Jane", "John");
            Map<String, Integer> map = names.stream()
                .collect(Collectors.toMap(s -> s, s -> 1, Integer::sum));
            </code></pre>
            Here, the merge function Integer::sum adds duplicate values instead of throwing an exception.
        `
    },
    {
        "question": "Explain `CompletableFuture` and how it differs from `Future` in Java.",
        "answer": `
            CompletableFuture is an enhancement over Future, introduced in Java 8 to provide better support for asynchronous programming:
            <pre><code>
            - CompletableFuture allows non-blocking programming by providing methods like thenApply(), thenAccept(), and thenRun() to perform actions upon completion without blocking the main thread.
            - It supports chaining multiple asynchronous tasks using thenCompose() and thenCombine(), making it more flexible.
            - Unlike Future, CompletableFuture provides better exception handling and can be completed manually using complete().
            </code></pre>
        `
    },
    {
        "question": "What will the following code output, and why?",
        "answer": `
            <pre><code>
            List<String> list = Arrays.asList("one", "two", "three", "four");
            List<String> result = list.stream()
                .peek(System.out::println)
                .filter(s -> s.length() > 3)
                .peek(System.out::println)
                .collect(Collectors.toList());
            </code></pre>
            The code will output each element twice: first when initially streamed and again after filtering:
            <pre><code>
            one
            two
            three
            three
            four
            four
            </code></pre>
            Explanation:
            - The first peek() prints each element as it enters the stream.
            - After filter(s -> s.length() > 3), only elements with length > 3 (three and four) pass through.
            - The second peek() prints these filtered elements before collecting them into the list.
        `
    },
    {
        "question": "Can you give an example of using `Collectors.groupingBy()` and explain how it works?",
        "answer": `
            Collectors.groupingBy() is used to group elements based on a classifier function. It returns a Map where keys are the result of applying the classifier function and values are lists of items grouped under each key.
            <pre><code>
            Example:
            List<String> names = Arrays.asList("John", "Jane", "Jack", "Doe", "Daisy");
            Map<Character, List<String>> grouped = names.stream()
                .collect(Collectors.groupingBy(s -> s.charAt(0)));
            System.out.println(grouped);
            </code></pre>
            Output:
            <pre><code>
            {J=[John, Jane, Jack], D=[Doe, Daisy]}
            </code></pre>
            Here, names are grouped by their first character.
        `
    },
    {
        "question": "What is the difference between `mapToInt()` and `map()` in streams?",
        "answer": `
            <pre><code>
            - map(): Transforms each element to another type, returning a Stream<T> where T is the type of the result.
            - mapToInt(): Maps elements to int values, returning an IntStream instead of a generic Stream. It allows access to primitive-specific methods like sum() and avoids boxing overhead.
            </code></pre>
            Example:
            <pre><code>
            List<String> words = Arrays.asList("one", "two", "three");
            int totalLength = words.stream()
                .mapToInt(String::length)
                .sum();  // Returns the sum of the lengths
            </code></pre>
        `
    }
]
,
"Collections": [
    {
        "question": "What is the difference between `HashMap` and `Hashtable`?",
        "answer": `
            <pre><code>
            - Thread Safety: HashMap is not synchronized and is not thread-safe, while Hashtable is synchronized, making it thread-safe but slower.
            - Null Keys and Values: HashMap allows one null key and multiple null values. Hashtable does not allow any null keys or values.
            - Performance: Due to synchronization overhead, Hashtable is generally slower than HashMap.
            - Legacy: Hashtable is part of the legacy classes in Java, while HashMap is a newer class from the Java Collections Framework.
            </code></pre>
        `
    },
    {
        "question": "Why is `HashMap`’s `keySet()` not directly modifiable? What happens if you try?",
        "answer": `
            The keySet() method returns a view of the keys in the HashMap. Directly modifying this set (e.g., removing a key) reflects on the original HashMap, but trying to add a new key to this set will throw an UnsupportedOperationException.
            <pre><code>
            This is because keySet() is backed by the original map, and modifications should be done via the HashMap itself, not the view.
            </code></pre>
        `
    },
    {
        "question": "What happens if you override only `equals()` and not `hashCode()` in a class used as a `HashMap` key?",
        "answer": `
            If only equals() is overridden, hashCode() will still use the default implementation, resulting in potential hash collisions where distinct objects might appear as equal based on equals(), but they’ll have different hash codes.
            <pre><code>
            This can lead to incorrect behavior in hash-based collections (HashMap, HashSet), where the collection might treat logically equal objects as unequal.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `ArrayList` and `LinkedList` in terms of performance?",
        "answer": `
            <pre><code>
            - Random Access: ArrayList offers O(1) time complexity for random access due to its underlying array. LinkedList requires O(n) as it traverses nodes.
            - Insertion and Deletion: LinkedList is faster for insertions and deletions in the middle or beginning (O(1) if the node reference is known). ArrayList requires shifting elements, which makes insertion and deletion O(n).
            - Memory Overhead: LinkedList has more memory overhead due to storing pointers for previous and next nodes in each element.
            </code></pre>
        `
    },
    {
        "question": "What will be the output of the following code, and why?",
        "answer": `
            <pre><code>
            List<String> list = new ArrayList<>();
            list.add("A");
            list.add("B");
            list.add("C");

            for (String s : list) {
                if (s.equals("B")) {
                    list.remove(s);
                }
            }
            System.out.println(list);
            </code></pre>
            This code will throw a ConcurrentModificationException. The for-each loop internally uses an iterator, and modifying the list while iterating (without using the iterator's remove method) causes this exception.
            <pre><code>
            Correct approach:
            Iterator<String> iterator = list.iterator();
            while (iterator.hasNext()) {
                if (iterator.next().equals("B")) {
                    iterator.remove();
                }
            }
            </code></pre>
        `
    },
    {
        "question": "How does `HashMap` handle hash collisions?",
        "answer": `
            In Java 8 and later, HashMap uses a hybrid approach:
            <pre><code>
            - Initially, it uses a linked list to store entries with the same hash code.
            - When the number of entries in a bucket exceeds a certain threshold (default: 8), the linked list is converted to a balanced tree (red-black tree), which improves retrieval time to O(log n) for large collections of entries with identical hash codes.
            - This hybrid approach optimizes performance and reduces the risk of hash collision attacks.
            </code></pre>
        `
    },
    {
        "question": "What will the following code output, and why?",
        "answer": `
            <pre><code>
            Map<String, Integer> map = new HashMap<>();
            map.put("one", 1);
            map.put("two", 2);
            map.put("three", 3);
            map.put("four", 4);

            for (String key : map.keySet()) {
                map.remove(key);
            }
            System.out.println(map.size());
            </code></pre>
            This code will throw a ConcurrentModificationException. Modifying a collection while iterating through its keys (using keySet()) without an iterator causes this exception.
            <pre><code>
            Correct approach:
            Iterator<String> iterator = map.keySet().iterator();
            while (iterator.hasNext()) {
                iterator.next();
                iterator.remove();
            }
            System.out.println(map.size());  // Outputs 0
            </code></pre>
        `
    },
    {
        "question": "Why does `ConcurrentHashMap` not allow `null` keys or values?",
        "answer": `
            Allowing null keys or values in a concurrent collection like ConcurrentHashMap can lead to ambiguity and potentially unexpected behavior in a multithreaded environment.
            <pre><code>
            For example, if map.get(null) returns null, it’s unclear if the key is absent or explicitly mapped to null. ConcurrentHashMap avoids this ambiguity and maintains consistent behavior by disallowing null.
            </code></pre>
        `
    },
    {
        "question": "Explain the difference between `fail-fast` and `fail-safe` iterators.",
        "answer": `
            <pre><code>
            - Fail-fast iterators (e.g., ArrayList, HashMap) throw a ConcurrentModificationException if the collection is modified while iterating. These iterators directly access the collection and track modifications.
            - Fail-safe iterators (e.g., ConcurrentHashMap, CopyOnWriteArrayList) do not throw exceptions because they work on a copy of the collection or use concurrent mechanisms, allowing safe modification while iterating.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `peek()`, `poll()`, and `remove()` in a `Queue`?",
        "answer": `
            <pre><code>
            - peek(): Retrieves, but does not remove, the head of the queue, or returns null if the queue is empty.
            - poll(): Retrieves and removes the head of the queue, or returns null if the queue is empty.
            - remove(): Retrieves and removes the head of the queue, but throws a NoSuchElementException if the queue is empty.
            </code></pre>
        `
    },
    {
        "question": "What’s the difference between `HashSet` and `LinkedHashSet`?",
        "answer": `
            <pre><code>
            - HashSet stores elements in an unordered way, based on their hash codes.
            - LinkedHashSet maintains a doubly-linked list to preserve the insertion order of elements. This makes it slightly slower than HashSet but useful when order needs to be maintained.
            </code></pre>
        `
    },
    {
        "question": "How does `TreeMap` maintain order, and how does it handle null keys?",
        "answer": `
            <pre><code>
            - TreeMap maintains a sorted order of keys based on their natural ordering (defined by Comparable) or a custom Comparator provided during construction.
            - TreeMap does not allow null keys because it relies on comparisons to sort the keys. Attempting to insert a null key results in a NullPointerException.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `ArrayDeque` and `LinkedList` for implementing a `Queue` in Java?",
        "answer": `
            <pre><code>
            - Memory: ArrayDeque uses a resizable array and provides better memory efficiency and locality of reference. LinkedList uses nodes, resulting in higher memory overhead due to additional pointers.
            - Performance: ArrayDeque is generally faster for most queue operations because of its array-based structure. It’s preferred over LinkedList unless random access is needed.
            - Null Elements: ArrayDeque does not allow null elements, while LinkedList does.
            </code></pre>
        `
    }
]
,
"Strings And Wrappers":[
    {
        "question": "Why are `String` objects immutable in Java?",
        "answer": `
            String objects are immutable in Java for several reasons:
            <pre><code>
            - Security: Immutability protects sensitive data like file paths, network connections, and configuration parameters from being changed unexpectedly.
            - Caching: Because String objects are immutable, they can be safely shared and cached. The String pool in Java reuses String literals, reducing memory usage.
            - Thread Safety: Immutability ensures that String instances are inherently thread-safe, as multiple threads can access the same String object without synchronization.
            </code></pre>
        `
    },
    {
        "question": "What happens when you concatenate `String`s using the `+` operator in a loop?",
        "answer": `
            Using the + operator in a loop is inefficient because each concatenation creates a new String object, leading to high memory consumption and slower performance. The JVM converts + operations to StringBuilder in simple expressions, but in loops, it repeatedly creates new instances.
            <pre><code>
            The correct approach is to use StringBuilder directly:
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < n; i++) {
                sb.append("text");
            }
            </code></pre>
        `
    },
    {
        "question": "What will the following code output?",
        "answer": `
            <pre><code>
            String a = "abc";
            String b = "abc";
            System.out.println(a == b);          // (1)
            System.out.println(a.equals(b));     // (2)

            String c = new String("abc");
            System.out.println(a == c);          // (3)
            System.out.println(a.equals(c));     // (4)
            </code></pre>
            Output:
            <pre><code>
            (1) - true: a and b refer to the same object in the String pool.
            (2) - true: equals() compares the content of a and b, which is the same.
            (3) - false: a and c refer to different objects (c is a new instance).
            (4) - true: equals() still returns true as it checks for value equality, not reference.
            </code></pre>
        `
    },
    {
        "question": "What is the output of the following code?",
        "answer": `
            <pre><code>
            Integer i1 = 127;
            Integer i2 = 127;
            System.out.println(i1 == i2);       // (1)

            Integer i3 = 128;
            Integer i4 = 128;
            System.out.println(i3 == i4);       // (2)
            </code></pre>
            Output:
            <pre><code>
            (1) - true: For values between -128 and 127, Integer values are cached in the Integer cache pool, so i1 and i2 refer to the same object.
            (2) - false: For values outside the -128 to 127 range, Integer objects are not cached, so i3 and i4 are different objects.
            </code></pre>
        `
    },
    {
        "question": "How does `==` work with `Integer` and `int`? Explain with an example.",
        "answer": `
            When an Integer object is compared with an int, Java automatically unboxes the Integer to an int, so it compares the values rather than references.
            <pre><code>
            Example:
            Integer i = 100;
            int j = 100;
            System.out.println(i == j);  // true, because i is unboxed to 100
            </code></pre>
        `
    },
    {
        "question": "Why does `new Integer(10) == new Integer(10)` return `false`?",
        "answer": `
            new Integer(10) creates two different Integer objects with different references. == compares references, not values, so it returns false.
            <pre><code>
            Example:
            Integer a = new Integer(10);
            Integer b = new Integer(10);
            System.out.println(a == b);          // false
            System.out.println(a.equals(b));     // true
            </code></pre>
        `
    },
    {
        "question": "What will the following code output, and why?",
        "answer": `
            <pre><code>
            String str1 = "Hello";
            String str2 = "Hel" + "lo";
            System.out.println(str1 == str2);       // (1)

            String str3 = "Hel";
            String str4 = str3 + "lo";
            System.out.println(str1 == str4);       // (2)
            </code></pre>
            Output:
            <pre><code>
            (1) - true: "Hel" + "lo" is a compile-time constant expression, so it’s optimized to "Hello" in the String pool. str1 and str2 point to the same pool object.
            (2) - false: str3 + "lo" involves runtime concatenation, resulting in a new String object not pooled.
            </code></pre>
        `
    },
    {
        "question": "How does autoboxing work with `==` for `Integer` comparisons?",
        "answer": `
            Autoboxing converts int values to Integer objects. With ==, Java may use cached Integer objects (between -128 to 127) and compare references. Outside this range, different Integer objects are created, so == returns false for values beyond this limit.
        `
    },
    {
        "question": "Why is `Integer.valueOf()` preferred over `new Integer()`?",
        "answer": `
            Integer.valueOf() uses caching for values between -128 and 127, returning cached instances instead of creating new objects every time. new Integer() always creates a new object, leading to higher memory consumption and slower performance.
            <pre><code>
            Integer.valueOf() is thus more memory-efficient.
            </code></pre>
        `
    },
    {
        "question": "Explain the difference between `parseInt()` and `valueOf()` methods in the `Integer` class.",
        "answer": `
            <pre><code>
            - parseInt(String s): Returns a primitive int. For example, Integer.parseInt("123") returns the int value 123.
            - valueOf(String s): Returns an Integer object, not a primitive. For example, Integer.valueOf("123") returns an Integer object with the value 123.
            </code></pre>
        `
    }
]
,
"Core Java": [
    {
        "question": "What is the difference between `String`, `StringBuilder`, and `StringBuffer`?",
        "answer": `
            <pre><code>
            - String is immutable, meaning once created, it cannot be modified. Any modification creates a new object.
            - StringBuilder is mutable, designed for scenarios where a lot of string modifications are required, as it avoids the overhead of creating new objects.
            - StringBuffer is similar to StringBuilder but is synchronized, making it thread-safe. However, due to synchronization, it is slower than StringBuilder.
            </code></pre>
        `
    },
    {
        "question": "Explain the `volatile` keyword in Java.",
        "answer": `
            The volatile keyword ensures that the value of a variable is always read from and written to the main memory. It prevents thread caching, meaning any update to a volatile variable by one thread is immediately visible to other threads. It's used in multi-threading to avoid issues with the CPU cache.
        `
    },
    {
        "question": "What is the difference between `==` and `.equals()` in Java?",
        "answer": `
            <pre><code>
            - == is a reference comparison operator, used to check if two references point to the same object in memory.
            - .equals() is a method meant for content comparison. In String and other value-based classes, it is overridden to check for the equality of values rather than references.
            </code></pre>
        `
    },
    {
        "question": "How does garbage collection work in Java?",
        "answer": `
            Java’s garbage collection mechanism automatically deletes objects that are no longer reachable by any part of the program. The Garbage Collector (GC) uses algorithms like mark-and-sweep and generational collection to efficiently reclaim memory. The JVM manages objects in different regions (Young, Old, and Permanent Generation) based on their lifecycle to optimize the collection process.
        `
    },
    {
        "question": "Describe the Singleton Design Pattern and how to implement it in Java.",
        "answer": `
            The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. You can implement it in Java with a private constructor, a private static instance variable, and a public static method that returns the instance.
            <pre><code>
            public class Singleton {
                private static volatile Singleton instance;

                private Singleton() {}

                public static Singleton getInstance() {
                    if (instance == null) {
                        synchronized (Singleton.class) {
                            if (instance == null) {
                                instance = new Singleton();
                            }
                        }
                    }
                    return instance;
                }
            }
            </code></pre>
        `
    },
    {
        "question": "What is the `final` keyword in Java? How does it apply to variables, methods, and classes?",
        "answer": `
            <pre><code>
            - Variables: When declared final, a variable’s value cannot be changed after initialization.
            - Methods: A final method cannot be overridden by subclasses.
            - Classes: A final class cannot be subclassed. For example, String is a final class in Java.
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `synchronized` and `lock` in Java?",
        "answer": `
            <pre><code>
            - synchronized is a keyword that locks access to a block or method on an intrinsic lock (monitor) associated with an object.
            - The Lock interface (from java.util.concurrent.locks) offers more flexibility, like timed, interruptible locks and attempts to acquire a lock. It’s preferred in complex concurrent applications because it allows finer control.
            </code></pre>
        `
    },
    {
        "question": "Explain the concept of Polymorphism in Java with examples.",
        "answer": `
            Polymorphism allows one interface to be used for a general class of actions. There are two types:
            <pre><code>
            - Compile-time (Static): Achieved by method overloading (same method name, different parameters).
            - Run-time (Dynamic): Achieved by method overriding, where a subclass has a specific implementation of a method that’s defined in the superclass.
            </code></pre>
            Example:
            <pre><code>
            class Animal {
                void sound() { System.out.println("Animal sound"); }
            }

            class Dog extends Animal {
                void sound() { System.out.println("Woof"); }
            }

            Animal myAnimal = new Dog();  // Dynamic polymorphism
            myAnimal.sound();  // Outputs "Woof"
            </code></pre>
        `
    },
    {
        "question": "What are functional interfaces and lambda expressions in Java?",
        "answer": `
            A functional interface is an interface with a single abstract method, which can be implemented using lambda expressions. Functional interfaces are the basis of lambda expressions and are used extensively in the Stream API.
            <pre><code>
            @FunctionalInterface
            interface Calculator {
                int add(int a, int b);
            }

            Calculator addition = (a, b) -> a + b;
            System.out.println(addition.add(5, 3));  // Outputs 8
            </code></pre>
        `
    },
    {
        "question": "What is the difference between `ArrayList` and `LinkedList` in Java?",
        "answer": `
            <pre><code>
            - ArrayList is backed by an array, so it provides constant-time access (O(1)) to elements, but adding or removing elements in the middle can be slow.
            - LinkedList is a doubly-linked list, which makes insertions or deletions in the middle more efficient, but it requires linear time (O(n)) for random access.
            </code></pre>
        `
    }
]

};

let currentCategory = [];
let askedQuestionsSet = new Set();
let selectedQuestionElement = null;

function showQuestions(category) {
    currentCategory = qaData[category];
    document.getElementById("questionList").innerHTML = currentCategory.map((q, index) => 
        `<div onclick="displayAnswer(${index}, this)" class="question">${q.question}</div>`
    ).join('');
    document.getElementById("answerFrame").innerHTML = "Answer will appear here.";
}

function displayAnswer(index, element) {
    // Clear previous selection
    if (selectedQuestionElement) {
        selectedQuestionElement.classList.remove("selected");
    }

    // Set the new selected question
    element.classList.add("selected");
    selectedQuestionElement = element;

    // Show the answer
    const { question, answer } = currentCategory[index];
    document.getElementById("answerFrame").innerHTML = answer;

    // Add the "Asked" button below the question frame
    document.getElementById("askButtonContainer").innerHTML = `
        <button class="ask-button" onclick="markAsAsked('${question}')">Mark as Asked</button>
    `;
}


// Track each question's text and its answer status
const askedQuestionsArray = []; 

function displayAskedQuestions() {
    const askedQuestionsFrame = document.getElementById("askedQuestionsFrame");
    askedQuestionsFrame.innerHTML = askedQuestionsArray.map((q, index) => 
        `<div id="asked-question-${index}" class="asked-question" style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
            <strong>Question ${index + 1}:</strong> <span id="question-text-${index}" onclick="editQuestion(${index})">${q.text}</span>
            <div class="answer-options" id="answer-options-${index}">
                <label>
                    <input type="radio" name="answered${index}" value="Yes" onclick="updateAnswerStatus(${index}, 'Answered')"> Yes
                </label>
                <label>
                    <input type="radio" name="answered${index}" value="No" onclick="updateAnswerStatus(${index}, 'Not Answered')"> No
                </label>
                <label>
                    <input type="radio" name="answered${index}" value="Confusing" onclick="updateAnswerStatus(${index}, 'Answer is confusing')"> Confusing
                </label>
                <label>
                    <input type="radio" name="answered${index}" value="Partial" onclick="updateAnswerStatus(${index}, 'Answer is Partially correct')"> Partial
                </label>
            </div>
            <span id="status-and-edit-${index}"> : ${q.status || ''}</span>
        </div>`
    ).join('');
}

function markAsAsked(question) {
    if (!askedQuestionsArray.some(q => q.text === question)) {
        askedQuestionsArray.push({ text: question, status: null }); // Add question with no initial status
        displayAskedQuestions();

        // Scroll to the newly added asked question
        const newQuestionIndex = askedQuestionsArray.length - 1;
        const newQuestionElement = document.getElementById(`asked-question-${newQuestionIndex}`);
        newQuestionElement.scrollIntoView({ behavior: "smooth" });
    } else {
        alert("This question has already been marked as asked.");
    }
}

function updateAnswerStatus(index, status) {
    // Update the question's status
    askedQuestionsArray[index].status = status;
    
    // Update the display
    displayAskedQuestions();
}

function editQuestion(index) {
    const questionTextElement = document.getElementById(`question-text-${index}`);
    const currentText = questionTextElement.innerText;

    // Replace the question text with a textarea for editing
    questionTextElement.innerHTML = `<textarea id="edit-textarea-${index}" style="width: 100%; min-height: 40px;">${currentText}</textarea>`;

    // Focus on the textarea and set the cursor to the end of the text
    const textarea = document.getElementById(`edit-textarea-${index}`);
    textarea.focus();
    textarea.setSelectionRange(currentText.length, currentText.length); // Place the cursor at the end
    textarea.addEventListener("blur", () => saveQuestionContent(index)); // Save on blur

    // Move the cursor to the second line if possible
    const lines = currentText.split("\n");
    if (lines.length > 1) {
        const secondLineStart = lines[0].length + 1; // Index of the second line start
        textarea.setSelectionRange(secondLineStart, secondLineStart);
    }
}

function saveQuestionContent(index) {
    const textarea = document.getElementById(`edit-textarea-${index}`);
    const updatedText = textarea.value;

    // Update the question text in the array
    askedQuestionsArray[index].text = updatedText;

    // Refresh display to show updated text and the current status
    displayAskedQuestions();
}



function filterCategories() {
    const filter = document.getElementById("categorySearch").value.toLowerCase();
    const buttons = document.querySelectorAll(".dropdown-content button");
    buttons.forEach(button => {
        const text = button.textContent || button.innerText;
        button.style.display = text.toLowerCase().includes(filter) ? "" : "none";
    });
}

function addEntry() {
    const key = document.getElementById("keyInput").value;
    const value = document.getElementById("valueInput").value;

    if (!key || !value) {
        alert("Both key and value are required!");
        return;
    }

    // Append to qa_database file
    const entry = `${key}: ${value}\n`;
    fetch("qa_database", { method: "POST", body: entry })
        .then(() => {
            alert("Entry added locally.");
            loadEntries();
        })
        .catch((err) => alert("Failed to add entry: " + err.message));
}

function loadEntries() {
    // Load the current content of qa_database
    fetch("qa_database")
        .then((response) => response.text())
        .then((text) => {
            document.getElementById("entries").textContent = text;
        })
        .catch(() => {
            document.getElementById("entries").textContent = "Failed to load entries.";
        });
}

function pushChanges() {
    alert(
        "Run the following Git commands in your terminal to push changes:\n\n" +
        "git add qa_database\n" +
        'git commit -m "Updated entries"\n' +
        "git push origin main"
    );
}

function autoCommitPush() {
    alert("Running auto commit and push...");
    fetch("/path/to/auto_commit_push.sh");
}

function autoFetch() {
    alert("Fetching latest changes...");
    fetch("/path/to/fetch_changes.sh");
}


function fetchChanges() {
    alert(
        "Run the following Git commands in your terminal to fetch changes:\n\n" +
        "git pull origin main"
    );
}

// Load entries on page load
loadEntries();
