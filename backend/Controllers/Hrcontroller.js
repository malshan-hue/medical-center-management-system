const EmployeeModel = require( "../Models/EmployeeModel");


module.exports.getEmployees = async (req, res) => {
    try {
        const Employee = await EmployeeModel.find();

        res.json({ message: "All Employee", Employee});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};


module.exports.getEmployeesById = async (req, res) => {
    try {
      const Employee = await EmployeeModel.findById(req.params.id);
  
      res.status(201).json({message: " employee's details" ,Employee});
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  };


  module.exports.deleteEmployeeById = async (req, res) => {
    try {
      const employeeId = req.params.id;
      const employee = await EmployeeModel.findById(employeeId);
  
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      await employee.remove(); // Remove the employee from the database
      res.status(200).json({ message: 'Employee with ID ' + employeeId + ' has been deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting the employee" });
    }
  };






