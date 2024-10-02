import {
	EmailField,
	GoogleButtonDivider,
	PasswordField,
	UserNameField,
} from "@/components/atoms/input-fields";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";

export const Route = createFileRoute("/_auth/signup/")({
	component: Page,
});

function Page() {
	return (
		<main className="page-center">
			<section className="w-xs md:w-sm space-y-3 card">
				<h1 className="text-center text-2xl font-bold">Sign Up</h1>
				<p className="mt-2 text-sm text-center">
					Already have an account?
					<Link to="/login" className="ml-2 link text-$azure">
						Login here
					</Link>
				</p>
				<GoogleButtonDivider />
				<form className="grid gap-3">
					<UserNameField />
					<EmailField />
					<PasswordField />
					<Button type="submit" className="bg-$azure">
						<i className="i-tabler-sparkles" />
						Create account
					</Button>
				</form>
			</section>
		</main>
	);
}
