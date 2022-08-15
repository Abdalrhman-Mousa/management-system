let table1 = document.getElementById('table1')
const xtalbe = document.createElement('table')
table1.appendChild(xtalbe)

const tHeader = document.createElement ('thead')
xtalbe.appendChild(tHeader);

const th1Data = document.createElement('th')
tHeader.appendChild (th1Data);
th1Data.textContent="ID Employee"

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






