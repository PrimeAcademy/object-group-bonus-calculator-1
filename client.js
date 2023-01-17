// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(onReady);

function onReady() {
  // Loop over employees array
  for (let employee of employees) {
    console.log("Looping over employees", employee);
    let result = calculateIndividualEmployeeBonus(employee);
    console.log("Bonus result:", result);

  // 🎉 Stretch Goals
    // Find employeeList <ul> element
    let employeeList = $("#employeeList");
    console.log("employeeList:", employeeList);

    // use template string
    // + string interpolation
    let employeeHtml = `
      <tr>
        <td>${employee.name}</td>
        <td>${employee.annualSalary}</td>
        <td>${result.totalBonus}</td>
      </tr>
    `;

    // add <li> to DOM
    employeeList.append(employeeHtml);
  }
}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  console.log("Employee: ", employee);

  // Check employee's review rating and assign the
  // corresponding bonus percentage
  let bonusPercentage;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 4;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 6;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 10;
  } else {
    // Error handling if review rating it outside of our cases
    console.log("WARNING WARNINH unexpected reviewRating", employee);
  }

  console.log(
    "bonus based on rating",
    employee.name,
    employee.reviewRating,
    bonusPercentage
  );

// 📏 Additional Rules 📏

  // Extra bonus if employee number is 4 digits long
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
    console.log(employee.name, "has seniority, +5%", bonusPercentage);
  }

  // Deduct 1% for top earners
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 1;
    console.log(employee.name, " makes too much, -1%", bonusPercentage);
  }

  // Min / max bonus (13%/0%)
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
    console.log("reset to 13", bonusPercentage);
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
    console.log("reset to 0", bonusPercentage);
  }

  // Calculate bonus dollar amount
  let totalBonus = employee.annualSalary * (bonusPercentage / 100);
  console.log("total bonus", totalBonus);

  // Calculate total compensation
  let totalCompensation = totalBonus + Number(employee.annualSalary);
  console.log("total comp", totalCompensation);

  // Return bonus information
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };
}
