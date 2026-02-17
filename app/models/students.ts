
export interface Student {
    id: string;
    name: string;
    email: string;
    age: number;
    course: string;
    createdAt: string;
}

// In-memory storage
let students: Student[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        age: 20,
        course: "Computer Science",
        createdAt: new Date().toISOString(),
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        age: 22,
        course: "Mathematics",
        createdAt: new Date().toISOString(),
    }
];

export function getStudents() {
    return students;
}

export function addStudent(student: Omit<Student, "id" | "createdAt">) {
    const newStudent = {
        ...student,
        id: Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toISOString(),
    };
    students = [newStudent, ...students];
    return newStudent;
}
