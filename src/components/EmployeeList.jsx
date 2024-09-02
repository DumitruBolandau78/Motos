import Employee from "./Employee"

const EmployeeList = () => {
    const employees = [
        {
            urlImg: './src/images/team/employee-1.jpg',
            name: 'Cristino Murphy',
            role: 'Management'
        },
        {
            urlImg: './src/images/team/employee-2.jpg',
            name: 'Leosy Clony',
            role: 'Management'
        },
        {
            urlImg: './src/images/team/employee-3.jpg',
            name: 'Amanda Lair',
            role: 'Management'
        },
        {
            urlImg: './src/images/team/employee-4.jpg',
            name: 'Calvin Carlo',
            role: 'Management'
        }
    ]

  return (
    <div className="grid grid-cols-4 gap-6 mt-16">
        { employees.map((emp, i) => <Employee key={i} {...emp} />) }
    </div>
  )
}

export default EmployeeList