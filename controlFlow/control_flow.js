// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel);

// const isLoggedIn = true;
// const userRole1 = "admin"; // or "user"
// let userMessage = "";

// if (isLoggedIn) {
//     if (userRole1 === "admin") {
//         userMessage = "Welcome, Admin!";
//     } else {
//         userMessage = "Welcome, User!";
//     }
// } else {
//     userMessage = "Please log in to access the system.";
// }

// console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log(userCategory, userType);

// Use ternary operator for isAuthenticated and authenticationStatus

let isAuthenticated = false;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice task

const role = "Employee";

let hasDietaryServices = false;
let dieticianInteraction = false;

if (role === "Employee" || role === "Enrolled Member") {
    hasDietaryServices = true;
}

if (role === "Enrolled Member") {
    dieticianInteraction = true;
}

if (!hasDietaryServices) {
    console.log("need to enroll or at least subscribe first to avail this facility.");
}