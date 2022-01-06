<script>
	import BudgetBuilder from '../components/BudgetBuilder.svelte';
</script>

<main class="flex flex-col max-w-lg mx-auto appearance-none shadow-md mb-16">
	<div class="mb-20" />
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl mt-6">Budget Builder</h1>
	<p class="text-sm text-gray-600 text-center mt-2">
		Here's where you can build your monthly budget <br />so you can stay on top of your expenses
	</p>
	<BudgetBuilder />

	<div class="mt-20" />
</main>
