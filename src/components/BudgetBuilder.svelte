<script>
	import { howOftPaid } from '../stores/logic';
	import { months } from '../stores/logic';
	// import { addExpenseRow } from '../stores/logic';

	let selected;
	let expenseName = [];
	let expenseAmount = [];
	$: amountMade = amountMade || [];
	let whichPaycheck = [];
	let expenseRow;

	const handleSubmit = () => {
		console.log(amountMade);
		alert(`expense name = ${expenseName}, expense amount = ${expenseAmount}`);
	};
</script>

<!-- pay month and frequency selection -->
<form class="form flex flex-col justify-center mx-auto">
	<h2 class="mt-4 text-xl text-center ">When do you get paid?</h2>
	<div class="flex flex-col mx-auto text-sm mt-2 justify-center w-96  px-6">
		<label class="font-bold flex items-center mx-2 mt-2 text-gray-800" for="month">Month</label>
		<select
			class="p-2 mt-2 appearance-none shadow-sm text-gray-800 border border-gray-200 focus:outline-none
			focus:border-gray-500 rounded-lg"
			type="text"
			name="month"
			id="month"
		>
			{#each [...$months.entries()] as [id, text]}
				<option value={id}>
					{text}
				</option>
			{/each}
		</select>
		<label class="font-bold flex items-center mx-2 mt-2 text-gray-800" for="frequency"
			>Pay Frequency</label
		>
		<select
			class="p-2 mt-2 appearance-none shadow-sm text-gray-800 border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			name="frequency"
			id="frequency"
			bind:value={selected}
		>
			{#each [...$howOftPaid.entries()] as [id, text]}
				<option value={id}>
					{text}
				</option>
			{/each}
		</select>
	</div>
</form>

<form class="form flex flex-col justify-center mx-auto">
	{#if selected}
		<h2 class="mx-auto text-xl mt-4">How much do you get paid?</h2>
	{/if}
	{#each Array(selected) as _, id}
		<div class="flex flex-col text-left text-sm mt-2 mx-auto w-96 px-6">
			<label class="font-bold mx-2 mt-2 text-gray-800" for="amount[{id + 1}]"
				>Paycheck {id + 1}</label
			>
			<input
				class="p-2 mt-2 appearance-none shadow-sm border border-gray-200 focus:outline-none
	focus:border-gray-500 rounded-lg"
				type="text"
				name="amount[{id + 1}]"
				id="amount[{id + 1}]"
				bind:value={amountMade[id]}
				placeholder="Amount goes here"
			/>
		</div>
	{/each}
	<p class="mt-6 text-center text-gray-800 text-lg">
		You made &dollar;{amountMade.reduce((t, n) => parseInt(t) + parseInt(n), 0)} this month.
	</p>
</form>

<!-- expense form -->
<form class="form flex flex-col justify-center mx-auto" on:submit|preventDefault={handleSubmit}>
	<h2 class="text-center text-xl mt-6">What are your expenses?</h2>
	<div class="text-sm flex flex-col mt-2 justify-center max-w-lg mx-auto w-96 px-6">
		<label class="font-bold flex items-center mx-2 mt-2 text-gray-800" for="name">Name</label>
		<input
			class="mt-2 appearance-none shadow-sm border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg "
			type="text"
			name="name"
			id="name"
			placeholder="Gas"
			bind:value={expenseName}
		/>
		<label class="font-bold flex items-center mx-2 mt-2 text-gray-800" for="amount">Amount</label>
		<input
			class="mt-2 appearance-none shadow-sm border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			name="amount"
			id="amount"
			placeholder="90"
			bind:value={expenseAmount}
		/>
		<label class="font-bold flex items-center mx-2 mt-2 text-gray-800" for="paycheck"
			>Paycheck</label
		>
		<input
			class="p-2 mt-2 appearance-none shadow-sm text-gray-800 border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			name="frequency"
			id="frequency"
			placeholder="1"
			bind:value={whichPaycheck}
		/>
		<button
			class="bg-blue-500 hover:bg-blue-600 mt-6 text-white py-2 px-4 rounded-lg w-1/2 mx-auto shadow-md"
			type="submit">Add</button
		>
	</div>
</form>

<!-- expenses table -->
<table class="expense-table table-auto mt-6 mx-auto w-10/12 shadow-md ">
	<thead class="bg-gray-100">
		<tr>
			<th colspan="3" class="p-2 bg-gray-50 text-gray-800">
				<h3>Expenses</h3>
			</th>
		</tr>
		<tr>
			<th scope="col" class="px-6	py-3 text-xs font-medium tracking-wider	text-center text-gray-500">
				Name
			</th>
			<th scope="col" class="px-6	py-3 text-xs font-medium tracking-wider text-center text-gray-500">
				Amount
			</th>
			<th scope="col" class="px-6	py-3 text-xs font-medium tracking-wider	text-center text-gray-500">
				Paycheck
			</th>
		</tr>
	</thead>

	<tbody class="bg-white divide-y divide-gray-400">
		<tr>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<div class="text-sm font-medium text-gray-800">
						<span>{expenseName}</span>
					</div>
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					{#if expenseAmount > 0}
						<span
							class="inline-flex px-2	text-xs font-semibold	leading-5	text-red-800 bg-red-100 rounded-full"
						>
							{expenseAmount}
						</span>
					{/if}
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<span>{whichPaycheck}</span>
				</div>
			</td>
		</tr>
	</tbody>
</table>
