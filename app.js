function user(id,name,dep,level) {
    this.id=id;
    this.name=name;
    this.dep=dep;
    this.level=level;
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
            default :
                return -1;
        }
            
    }

    this.print = function() {
        return `I'm ${this.name} my salary is ${this.salary}`;
    }
    

}

let users = [
    new user(1000,"Ghazi Samer" , "Administration","Senior"),
    new user(1001,"Lana Ali" , "Finance","Senior"),
    new user(1002,"Tamara Ayoub" , "Marketing","Senior"),
    new user(1003,"Safi Walid" , "Administration","Mid-Senior"),
    new user(1004,"Omar Zaid" , "Development","Senior"),
    new user(1005,"Rana Saleh" , "Development","Junior"),
    new user(1006,"Hadi Ahmad" , "Finance","Mid-Senior"), 
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].print());
}


let table1 = document.getElementById('table1')
const xtalbe = document.createElement('table')
table1.appendChild(xtalbe)
xtalbe.style.width="85%"

const tHeader = document.createElement ('thead')

xtalbe.appendChild(tHeader);
tHeader.style.border="4px solid "

const th1Data = document.createElement('th')
tHeader.appendChild (th1Data);
th1Data.textContent="ID user"

const th2Data = document.createElement('th')
tHeader.appendChild (th2Data);
th2Data.textContent="Full Name"

const th3Data = document.createElement('th')
tHeader.appendChild (th3Data);
th3Data.textContent="Department"

const th4Data = document.createElement('th')
tHeader.appendChild (th4Data);
th4Data.textContent="Level"

const th5Data = document.createElement('th')
tHeader.appendChild (th5Data);
th5Data.textContent="Salary" 

let tbody= document.createElement("tbody");
xtalbe.append(tbody);
tbody.style.border="4px solid "



function adduser(emp) {
    let tr=document.createElement("tr");
    let empKeys = [emp.id,emp.name,emp.dep,emp.level,emp.salary];
    let cells=[];
    tr.style.border="4px solid "
    tr.style.padding="50px"


    for(let i=0;i<5;i++) {
        cells[i]=document.createElement("td");
        cells[i].textContent=empKeys[i];
        tr.append(cells[i]);
    }
    return tr;

}

for (let i = 0; i < users.length; i++) {
    tbody.append(adduser(users[i]));
}

