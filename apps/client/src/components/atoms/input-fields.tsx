import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function MockupField({
	icon,
	children,
}: { icon: string; children: React.ReactNode }) {
	return (
		<IconField iconPosition="left">
			<InputIcon>
				<i className={icon} />
			</InputIcon>
			{children}
		</IconField>
	);
}

export function UserNameField() {
	return (
		<MockupField icon="i-tabler-user">
			<InputText
				type="text"
				name="username"
				placeholder="Username"
				aria-label="Username"
				className="w-full"
			/>
		</MockupField>
	);
}

export function EmailField() {
	return (
		<MockupField icon="i-tabler-mail">
			<InputText
				type="email"
				name="email"
				placeholder="Email"
				aria-label="Email"
				className="w-full"
			/>
		</MockupField>
	);
}

export function PasswordField() {
	const [type, setType] = useState<"password" | "text">("password");
	const toggle = () => {
		setType(type === "password" ? "text" : "password");
	};
	return (
		<div className="relative">
			<MockupField icon="i-tabler-key">
				<InputText
					type={type}
					name="password"
					placeholder="Password"
					aria-label="Password"
					className="w-full"
				/>
			</MockupField>
			<button
				className="strip absolute top-1/2 right-2 -translate-y-1/3 text-5 text-gray-600"
				type="button"
				onClick={toggle}
				aria-label={type === "password" ? "Show password" : "Hide password"}
			>
				<i
					className={type === "password" ? "i-tabler-eye" : "i-tabler-eye-off"}
				/>
			</button>
		</div>
	);
}

export function GoogleButton_Divider() {
	return (
		<div className="px-4">
			<Button type="button" outlined className="w-full">
				<i className="i-tabler-brand-google" /> Sign in with Google
			</Button>
			<Divider align="center">OR</Divider>
		</div>
	);
}
