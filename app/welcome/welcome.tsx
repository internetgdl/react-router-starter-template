import { Form } from "react-router";
import type { Student } from "../models/students";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

interface WelcomeProps {
	message: string;
	students: Student[];
	actionData?: { error?: string; success?: boolean };
}

export function Welcome({ message, students, actionData }: WelcomeProps) {
	return (
		<main className="min-h-screen flex flex-col items-center pt-16 pb-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
			<div className="w-full max-w-6xl px-4 space-y-10">
				<header className="flex flex-col items-center gap-6">
					<div className="w-[300px] max-w-[80vw]">
						<img
							src={logoLight}
							alt="React Router"
							className="block w-full dark:hidden"
						/>
						<img
							src={logoDark}
							alt="React Router"
							className="hidden w-full dark:block"
						/>
					</div>
					<div className="text-center space-y-2">
						<h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
							Student Management
						</h1>
						<p className="text-gray-600 dark:text-gray-400 text-lg">{message}</p>
					</div>
				</header>

				<div className="grid lg:grid-cols-2 gap-8 items-start">
					{/* Section 1: Capture Info */}
					<section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-xl transition hover:shadow-blue-500/10 dark:hover:shadow-blue-900/10">
						<h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800 dark:text-white">
							<span className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-2xl">
								📝
							</span>
							Register Student
						</h2>

						{actionData?.error && (
							<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl text-sm font-medium flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
										clipRule="evenodd"
									/>
								</svg>
								{actionData.error}
							</div>
						)}
						{actionData?.success && (
							<div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-xl text-sm font-medium flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								Student added successfully!
							</div>
						)}

						<Form method="post" className="space-y-5">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
								>
									Full Name
								</label>
								<input
									id="name"
									type="text"
									name="name"
									className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-white dark:hover:bg-gray-700"
									placeholder="e.g. Alex Johnson"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
								>
									Email Address
								</label>
								<input
									id="email"
									type="email"
									name="email"
									className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-white dark:hover:bg-gray-700"
									placeholder="alex@university.edu"
								/>
							</div>

							<div className="grid grid-cols-2 gap-5">
								<div className="space-y-2">
									<label
										htmlFor="age"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
									>
										Age
									</label>
									<input
										id="age"
										type="number"
										name="age"
										className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-white dark:hover:bg-gray-700"
										placeholder="20"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="course"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
									>
										Course
									</label>
									<input
										id="course"
										type="text"
										name="course"
										className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-white dark:hover:bg-gray-700"
										placeholder="CS101"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg hover:shadow-blue-500/25 flex justify-center items-center gap-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
								</svg>
								Add Student
							</button>
						</Form>
					</section>

					{/* Section 2: List Data */}
					<section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-xl h-full flex flex-col transition hover:shadow-purple-500/10 dark:hover:shadow-purple-900/10">
						<header className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-white">
								<span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-2xl">
									🎓
								</span>
								Enrolled Students
							</h2>
							<span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300">
								Total: {students.length}
							</span>
						</header>

						<div className="flex-1 overflow-y-auto max-h-[600px] -mr-4 pr-4 space-y-4 custom-scrollbar">
							{students.length === 0 ? (
								<div className="h-48 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-12 h-12 mb-2 opacity-50"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 9.382c-.217-1.376-1.992-2.207-3.422-2.207-1.43 0-2.458.293-2.85 1.01m-9.75 0h.053m-9.803 0c-.217-1.376-1.992-2.207-3.422-2.207-1.43 0-2.458.293-2.85 1.01m9.75 0c.219-1.375 1.993-2.207 3.422-2.207 1.432 0 2.457.293 2.85 1.01M9 17h6M5 17h2m8 0h2M9 14h6M5 14h2m8 0h2m-6-8h.01"
										/>
									</svg>
									<p>No students enrolled yet.</p>
								</div>
							) : (
								students.map((student) => (
									<div
										key={student.id}
										className="group p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/30 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
									>
										<div className="flex justify-between items-start mb-2">
											<div>
												<h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
													{student.name}
												</h3>
												<p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-3.5 h-3.5"
													>
														<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
														<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
													</svg>
													{student.email}
												</p>
											</div>
											<span className="px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
												{student.course}
											</span>
										</div>
										<div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-600 text-xs text-gray-400 flex justify-between items-center">
											<span className="flex items-center gap-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-3.5 h-3.5"
												>
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
														clipRule="evenodd"
													/>
												</svg>
												{new Date(student.createdAt).toLocaleDateString()}
											</span>
											<span>Age: {student.age}</span>
										</div>
									</div>
								))
							)}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
