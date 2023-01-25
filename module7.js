console.log ("Module 7 starts......");
function getHighestSalaryEmp(empArray , key)
{

    var maxSalary;
    for(i=0,j=empArray.length ; i<= empArray.length ;i++ , j--)
    {
        if(empArr[i].salary > empArr[j].salary)
        {
        maxSalary=empArr[i].salary;
        }
    }
return maxSalary;
}

var empArr=[{empId:101,empName:"Asha",salary:1001,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:3000,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}]

var highSalary = getHighestSalaryEmp(empArr);
console.log("The highest salary" + highSalary);