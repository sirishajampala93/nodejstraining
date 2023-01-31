console.log ("Module 7 starts......");
function getHighestSalaryEmp(empArray)
{
   //console.log(empArray); 
    var maxSalary=[];
    var max =0;
    for(var i=0 ; i< empArray.length ;i++)
    {
        if(empArray[i].salary > max)
        {
            maxSalary=[];
            max=empArray[i].salary;
            maxSalary.push(empArr[i]);
        }
        else if(empArray[i].salary == max)
        {
            maxSalary.push(empArr[i]);
        }
        
    }
return maxSalary;
}

var empArr=[{empId:101,empName:"Asha",salary:1001,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:4000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:3000,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:5000,deptId:"D3"}]

var highSalary = getHighestSalaryEmp(empArr);
console.log(highSalary);