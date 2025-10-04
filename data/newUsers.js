const users = [
    {
        firstName: "Alice",
        lastName: "Johnson",
        address: "123 Main St",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90002",
        phone: "555-1234",
        ssn: "123-45-6789",
        username: "alice" + new Date().getSeconds(), // Temporary unique username, perhaps I need to create a proper utility for this
        password: "demo"
    },
        {
        firstName: "John",
        lastName: "Johnson",
        address: "123 Main St",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90002",
        phone: "555-1234",
        ssn: "123-45-6789",
        username: "john" + new Date().getSeconds(), // Temporary unique username, perhaps I need to create a proper utility for this
        password: "demo"
    }
];

export default users;