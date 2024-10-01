interface Echo {
	green: (text: string) => void;
	red: (text: string) => void;
	blue: (text: string) => void;
	yellow: (text: string) => void;
}

const reset = "\x1b[0m";

export const echo: Echo = {
	green: (text) => console.log(`\x1b[32m${text}${reset}`),
	red: (text) => console.log(`\x1b[31m${text}${reset}`),
	blue: (text) => console.log(`\x1b[34m${text}${reset}`),
	yellow: (text) => console.log(`\x1b[33m${text}${reset}`),
};
