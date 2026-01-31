const employees = [
  {
    ld: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare sales report",
        description: "Create the monthly sales performance report",
        date: "2026-02-01",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with existing clients via email",
        date: "2026-01-20",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update CRM data",
        description: "Update outdated client information in CRM",
        date: "2026-01-15",
        category: "Admin",
      },
    ],
  },
  {
    ld: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design landing page",
        description: "Create UI for the new marketing landing page",
        date: "2026-02-05",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix navbar bug",
        description: "Resolve responsiveness issue in navbar",
        date: "2026-02-02",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize images",
        description: "Compress images for faster loading",
        date: "2026-01-25",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Cross-browser testing",
        description: "Test UI across different browsers",
        date: "2026-01-18",
        category: "Testing",
      },
    ],
  },
  {
    ld: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API integration",
        description: "Integrate payment gateway API",
        date: "2026-02-06",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Add unit tests for user module",
        date: "2026-02-03",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database migration",
        description: "Migrate database to new schema",
        date: "2026-01-22",
        category: "Database",
      },
    ],
  },
  {
    ld: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content writing",
        description: "Write blog post for product launch",
        date: "2026-02-04",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Keyword research",
        description: "Research SEO keywords for campaigns",
        date: "2026-01-21",
        category: "SEO",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email campaign",
        description: "Launch promotional email campaign",
        date: "2026-01-17",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social media planning",
        description: "Plan posts for next month",
        date: "2026-02-07",
        category: "Social Media",
      },
    ],
  },
  {
    ld: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Recruitment screening",
        description: "Screen resumes for open positions",
        date: "2026-02-01",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Employee onboarding",
        description: "Onboard new hires",
        date: "2026-01-24",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Policy update",
        description: "Update company leave policy document",
        date: "2026-01-16",
        category: "Admin",
      },
    ],
  },
];

const admin = [
  {
    ld: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage=() => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage=() => {
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));
    console.log(employees);
    console.log(admin);
    
}

