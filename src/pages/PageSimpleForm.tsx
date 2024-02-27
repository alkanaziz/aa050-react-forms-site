import { FormEvent } from "react";

export const PageSimpleForm = () => {


	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		console.log(data);
	}
	return (
		<form onSubmit={handleFormSubmit}>
			<fieldset className="border border-gray-500 p-4 w-full sm:w-40 rounded">
				<legend>New Employee</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="firstName">
						First Name:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						required
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input type="text" id="lastName" name="lastName" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="age">
						Age:
					</label>
					<input type="number" defaultValue="34" id="age" name="age" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="hireDate">
						Hire Date:
					</label>
					<input type="date" id="hireDate" name="hireDate" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="employeeNumber">
						Employee Number:
					</label>
					<div>
						<input
							type="text"
							id="employeeNumber"
							name="employeeNumber"
							pattern="^[DSM]-\d{4}$"
							required
						/>
						<p className="text-sm">e.g. D-2832, S-7771, M-8123</p>
					</div>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="notes">
						Notes:
					</label>
					<textarea id="notes" name="notes"></textarea>
				</div>

				<div className="mt-5 flex justify-end pr-3 ">
					<button className="bg-slate-700 text-slate-300 py-1 px-2 rounded">Add Employee</button>
				</div>
			</fieldset>
		</form>
	);
};