//create a constructor function for the employee object and add the properties and methods to it 
function Employee(id,name, departmente ,level ,imageurl ,salary) {
    this.id = id;
    this.name = name;
    this.department = departmente;
    this.level = level;
    this.imageurl = imageurl;
    this.salary=calc();

    function calc() {
        switch(level) {
            case "Junior":
                return Math.round((Math.random()*500+500));
                break;
            case "Mid-Senior":
                return Math.round((Math.random()*500+1000));
                break;
            case "Senior":
                return Math.round((Math.random()*500+1500));
                break;  
                    }
            
    }
    };

    let Employees = [
        new Employee (1000,"Ghazi Samer" , "Administration","Senior", "https://randomuser.me/api/portraits"),
        new Employee (1001,"Lana Ali" , "Finance","Senior", "https://randomuser.me/api/portraits"),
        new Employee(1002,"Tamara Ayoub" , "Marketing","Senior", "https://randomuser.me/api/portraits"),
        new Employee(1003,"Safi Walid" , "Administration","Mid-Senior", "https://randomuser.me/api/portraits"),
        new Employee(1004,"Omar Zaid" , "Development","Senior", "https://randomuser.me/api/portraits"),
        new Employee(1005,"Rana Saleh" , "Development","Junior", "https://randomuser.me/api/portraits"),
        new Employee(1006,"Hadi Ahmad" , "Finance","Mid-Senior", "https://randomuser.me/api/portraits"), 
    ];

    //create table for the employees and add the rows and columns to it 
    let table = document.createElement("table");
    table.setAttribute("id", "table");
    let header = table.createTHead();
    let row = header.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = "ID";
    cell2.innerHTML = "Name";
    cell3.innerHTML = "Department";
    cell4.innerHTML = "Level";
    cell5.innerHTML = "Image";
    cell6.innerHTML = "Salary";
    
    for (let i = 0; i < Employees.length; i++) {
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);


        cell1.innerHTML = Employees[i].id;
        cell2.innerHTML = Employees[i].name;
        cell3.innerHTML = Employees[i].department;
        cell4.innerHTML = Employees[i].level;
        cell5.innerHTML = Employees[i].imageurl;
        cell6.innerHTML = Employees[i].salary;
    }
    document.body.appendChild(table);
    //create a function to add the employee to the table
    function addEmployee(id,name, departmente ,level ,imageurl ,salary) {
        let row = table.insertRow(Employees.length + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9); 
        let cell11 = row.insertCell(10);

        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = departmente;
        cell4.innerHTML = level;
        cell5.innerHTML = imageurl;
        cell6.innerHTML = salary;
    }
    // add style to the table
    table.style.borderCollapse = "collapse";
    table.style.border = "1px solid black";
    table.style.width = "100%";
    table.style.textAlign = "center";
    table.style.marginTop = "20px";
    table.style.marginBottom = "120px";
    //table position 
    
  
    
// link a form in the html to the js file and add the event listener to the form 
    let form = document.getElementById("form");
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        let id = document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let departmente = document.getElementById("department").value;
        let level = document.getElementById("level").value;
        let imageurl = document.getElementById("imageurl").value;
        let  salary=calc();

        function calc() {
            switch(level) {
                case "Junior":
                    return Math.round((Math.random()*500+500));
                    break;
                case "Mid-Senior":
                    return Math.round((Math.random()*500+1000));
                    break;
                case "Senior":
                    return Math.round((Math.random()*500+1500));
                    break;  
                        }
                
        }
        let employee = new Employee(id,name, departmente ,level ,imageurl,);
        addEmployee(id,name, departmente ,level ,imageurl,salary);
        Employees.push(employee);
    } );

