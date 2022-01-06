import { writable } from 'svelte/store';

export const expenses = writable([]);

export const name = writable('Svelte');

export const howOftPaid = writable(
	new Map([
		[0, `Please make a selection`],
		[1, `Monthly`],
		[2, `Bi-Weekly`],
		[4, `Weekly`]
	])
);

export const months = writable(
	new Map([
		[0, `Please make a selection`],
		[1, `January`],
		[2, `February`],
		[3, `March`],
		[4, `April`],
		[5, `May`],
		[6, `June`],
		[7, `July`],
		[8, `August`],
		[9, `September`],
		[10, `October`],
		[11, `November`],
		[12, `December`]
	])
);
