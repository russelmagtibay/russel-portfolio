// Shared Client-Side Payroll Data Store (zero database requirement)
const INITIAL_STAFF = [
  { staff_id: 1, fname: 'Russel Magtibay', sex: 'Male', birthday: '1989-06-06', department: 'I.T.', position: 'GMD/CEO', grade: '18', years: '18', basic: 17237612, meal: 263738, housing: 2585641, transport: 1379008, entertainment: 344752, long_service: 301658, tax: 1551385, totall: 20561026, date_registered: '2013-06-29' },
  { staff_id: 2, fname: 'Mathew Senami Tosin', sex: 'Female', birthday: '1988-12-16', department: 'Human Resources', position: 'Manager', grade: '12', years: '15', basic: 1998837, meal: 637721, housing: 299825, transport: 159906, entertainment: 39976, long_service: 34980, tax: 179895, totall: 2991352, date_registered: '2013-06-29' },
  { staff_id: 3, fname: 'Adesiyan Kemi Jelilat', sex: 'Female', birthday: '1988-11-26', department: 'I.T.', position: 'Manager', grade: '6', years: '13', basic: 7827627, meal: 162783, housing: 1174144, transport: 626210, entertainment: 0, long_service: 0, tax: 704486, totall: 9086278, date_registered: '2013-06-29' },
  { staff_id: 4, fname: 'Adeniji Titilayo Mary', sex: 'Female', birthday: '1990-07-21', department: 'Accounting', position: 'As. Director', grade: '6', years: '15', basic: 500000, meal: 50000, housing: 75000, transport: 40000, entertainment: 0, long_service: 8750, tax: 45000, totall: 628750, date_registered: '2013-06-30' },
  { staff_id: 6, fname: 'Adeomi Oluwafemi Alade', sex: 'Male', birthday: '1980-12-31', department: 'Administration', position: 'Manager', grade: '7', years: '16', basic: 400000, meal: 120000, housing: 60000, transport: 32000, entertainment: 0, long_service: 7000, tax: 36000, totall: 583000, date_registered: '2013-06-30' },
  { staff_id: 7, fname: 'Ogundipe Kemi Eunice', sex: 'Female', birthday: '1987-11-08', department: 'Administration', position: 'As.Manager', grade: '9', years: '14', basic: 820000, meal: 50000, housing: 123000, transport: 65600, entertainment: 16400, long_service: 0, tax: 73800, totall: 1001200, date_registered: '2013-06-30' },
  { staff_id: 8, fname: 'Adewole Seyi', sex: 'Female', birthday: '1990-12-31', department: 'Marketing', position: 'As.Manager', grade: '13', years: '16', basic: 465344, meal: 124434, housing: 69801, transport: 37227, entertainment: 9306, long_service: 8144, tax: 41880, totall: 672377, date_registered: '2013-06-30' },
  { staff_id: 9, fname: 'Adeniji Temilayo', sex: 'Male', birthday: '1997-04-28', department: 'Production', position: 'Director', grade: '13', years: '16', basic: 700000, meal: 245856, housing: 105000, transport: 56000, entertainment: 14000, long_service: 12250, tax: 63000, totall: 1070106, date_registered: '2013-06-30' },
  { staff_id: 10, fname: 'Christina Aguilera', sex: 'Female', birthday: '1970-03-11', department: 'Human Resources', position: 'Supervisor', grade: '18', years: '16', basic: 890000, meal: 234676, housing: 133500, transport: 71200, entertainment: 17800, long_service: 15575, tax: 80100, totall: 1282651, date_registered: '2013-06-30' },
  { staff_id: 11, fname: 'Katy Perry', sex: 'Female', birthday: '1967-09-23', department: 'Accounting', position: 'Head', grade: '9', years: '12', basic: 620000, meal: 90000, housing: 93000, transport: 49600, entertainment: 12400, long_service: 10850, tax: 55800, totall: 820050, date_registered: '2013-06-30' },
  { staff_id: 12, fname: 'Anazodo Charles', sex: 'Male', birthday: '1950-07-17', department: 'Marketing', position: 'Ass. Head', grade: '20', years: '20', basic: 950000, meal: 180000, housing: 142500, transport: 76000, entertainment: 19000, long_service: 16625, tax: 85500, totall: 1298625, date_registered: '2013-06-30' },
  { staff_id: 13, fname: 'Odesola Banji', sex: 'Male', birthday: '1998-03-01', department: 'Research', position: 'Head', grade: '12', years: '16', basic: 580000, meal: 110000, housing: 87000, transport: 46400, entertainment: 11600, long_service: 10150, tax: 52200, totall: 792950, date_registered: '2013-06-30' },
  { staff_id: 14, fname: 'David Beckham', sex: 'Male', birthday: '1977-06-26', department: 'Marketing', position: 'Clerk', grade: '5', years: '12', basic: 320000, meal: 70000, housing: 48000, transport: 25600, entertainment: 0, long_service: 5600, tax: 28800, totall: 440400, date_registered: '2013-07-01' },
  { staff_id: 15, fname: 'Jeffery John', sex: 'Male', birthday: '2010-07-12', department: 'Accounting', position: 'Director', grade: '25', years: '10', basic: 1100000, meal: 210000, housing: 165000, transport: 88000, entertainment: 22000, long_service: 19250, tax: 99000, totall: 1505250, date_registered: '2013-07-26' }
];

function getStaffList() {
  const data = localStorage.getItem('payroll_staff_list');
  if (!data) {
    localStorage.setItem('payroll_staff_list', JSON.stringify(INITIAL_STAFF));
    return INITIAL_STAFF;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_STAFF;
  }
}

function saveStaffList(list) {
  localStorage.setItem('payroll_staff_list', JSON.stringify(list));
}

function addStaff(staff) {
  const list = getStaffList();
  staff.staff_id = list.length > 0 ? Math.max(...list.map(s => s.staff_id)) + 1 : 1;
  staff.date_registered = new Date().toISOString().split('T')[0];
  // Calculate default allowances & salary based on basic
  const basic = parseFloat(staff.basic) || 500000;
  staff.meal = Math.round(basic * 0.15);
  staff.housing = Math.round(basic * 0.15);
  staff.transport = Math.round(basic * 0.08);
  staff.entertainment = Math.round(basic * 0.02);
  staff.long_service = Math.round(basic * 0.02);
  staff.tax = Math.round(basic * 0.09);
  staff.totall = Math.round(basic + staff.meal + staff.housing + staff.transport + staff.entertainment + staff.long_service - staff.tax);
  list.unshift(staff);
  saveStaffList(list);
  return staff;
}

function deleteStaff(id) {
  let list = getStaffList();
  list = list.filter(s => s.staff_id !== id);
  saveStaffList(list);
  return list;
}

function formatCurrency(amount) {
  return '₱' + Number(amount || 0).toLocaleString('en-US');
}
