import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getStudents, addStudent } from "../models/students";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Student Data App" },
		{ name: "description", content: "Manage student data efficiently." },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return {
		message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
		students: getStudents(),
	};
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const age = Number(formData.get("age"));
	const course = formData.get("course") as string;

	if (!name || !email || !age || !course) {
		return { error: "All fields are required" };
	}

	addStudent({ name, email, age, course });
	return { success: true };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
	return (
		<Welcome
			message={loaderData.message}
			students={loaderData.students}
			actionData={actionData}
		/>
	);
}
