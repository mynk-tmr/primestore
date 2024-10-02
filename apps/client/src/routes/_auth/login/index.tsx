import {
	EmailField,
	GoogleButtonDivider,
	PasswordField,
} from "@/components/atoms/input-fields";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";

export const Route = createFileRoute("/_auth/login/")({
	component: Page,
});

function Page() {
	return (
		<main className="page-center">
			<section className="w-xs md:w-sm space-y-3 card">
				<h1 className="text-center text-2xl font-bold">Log In</h1>
				<p className="mt-2 text-sm text-center">
					Don't have an account?
					<Link to="/signup" className="ml-2 link text-$azure">
						Create Account
					</Link>
				</p>
				<GoogleButtonDivider />
				<form className="grid gap-3">
					<EmailField />
					<PasswordField />
					<Link
						to="/forgot-password"
						className="link text-$info no-underline text-end"
					>
						Forgot password?
					</Link>
					<Button type="submit" className="bg-$info">
						<i className="i-tabler-door-enter" />
						Let me in
					</Button>
				</form>
			</section>
		</main>
	);
}
