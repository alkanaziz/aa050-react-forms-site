import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import * as config from "../config";
import { ImSpinner9 } from "react-icons/im";

export const PageEmployees = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const response = await axios.get(
					`${config.getBackendUrl()}/employees`
				);
				const _employees: IEmployee[] = response.data;
				setEmployees(_employees);
			})();
		}, 1000);
	}, []);

	return (
		<>
			{employees.length === 0 ? (
				<p className="p-4">
					<ImSpinner9 className="animate-spin text-6xl text-slate-700" />
				</p>
			) : (
                <>
                    <p>There are {employees.length} employees.</p>
 
                    <div className="relative overflow-x-auto mt-4 rounded w-1/2">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Hire Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Employee Number
                                    </th>
                                    <th sc(
				<p>There are {employees.length} employees:</p>
				
			)}ope="col" className="px-6 py-3">
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">{employee.id}</td>
                                            <td className="px-6 py-4">{employee.firstName}</td>
                                            <td className="px-6 py-4">{employee.lastName}</td>
                                            <td className="px-6 py-4">{employee.age}</td>
                                            <td className="px-6 py-4">{employee.hireDate}</td>
                                            <td className="px-6 py-4">{employee.employeeNumber}</td>
                                            <td className="px-6 py-4">{employee.notes}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
		</>
	);
};
