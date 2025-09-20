function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        reject("User not found");
      } else {
        resolve({ id: 1, name: "John Doe" });
      }
    }, 2000);
  });
}

function fetchUserPermissions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        reject("Permissions not found");
      } else {
        resolve(["read", "write"]);
      }
    }, 1000);
  });
}

Promise.all([fetchUserData(), fetchUserPermissions()])
  .then(([userData, permissions]) => {
    console.log("User Data:", userData);
    console.log("Permissions:", permissions);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operation completed");
    });

    //output:
    // Error: User not found
    // Operation completed