package com.spring.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.www.model.Employee;
import com.spring.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	@GetMapping("/employees")
	public List<Employee> getEmployees()
	{
		return employeeService.getEmployees();
	}
	@PostMapping("/employees")
	public Employee addEmployees(@RequestBody Employee employee)
	{
		return employeeService.addEmployees(employee);
	}
	@GetMapping("/employees/{id}")
	public Employee getEmployee(@PathVariable long id)
	{
		return employeeService.getEmployee(id);
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employee)
	{
		return employeeService.updateEmployee(id,employee);
	}
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id)
	{
		return employeeService.deleteEmployee(id);
	}
}
