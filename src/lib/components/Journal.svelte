<script>
	import { t } from '$lib/stores/language.js';
	import { onMount } from 'svelte';

	export let quests = [
		{ href: '#about', text: 'nav.about', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', style: '' },
		{ href: '#skills', text: 'nav.skills', icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z', style: '' },
		{ href: '#experience', text: 'nav.experience', icon: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z', style: '' },
		{ href: '#projects', text: 'nav.projects', icon: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z', style: '' },
		{ href: '#education', text: 'nav.education', icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z', style: '' }
	];

	let selectedQuest = quests[0].href;
	/**
	 * @type {IntersectionObserver}
	 */
	let observer;

	onMount(() => {
		quests = quests.map(q => ({
			...q,
			style: `transform: rotate(${(Math.random() - 0.5) * 5}deg); margin-left: ${Math.random() * 20}px;`
		}));

		const sections = document.querySelectorAll('section[id]');
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						selectedQuest = `#${entry.target.id}`;
					}
				});
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	});

	/**
	 * @param {HTMLAnchorElement} node
	 */
	function smoothScroll(node) {
		/**
		 * @param {MouseEvent} event
		 */
		function handleClick(event) {
			event.preventDefault();
			const href = node.href;
			const id = href.substring(href.indexOf('#'));
			const target = document.querySelector(id);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}

		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}
</script>

<aside
	class="bg-ctp-crust border-2 border-ctp-surface0 rounded-lg p-6 shadow-xl m-5 sticky top-24 h-[calc(100vh-12rem)] overflow-y-auto font-serif text-ctp-text"
>
	<div class="text-center mb-6">
		<h1 class="text-4xl font-bold text-ctp-text drop-shadow-md font-fantasy">{$t('name')}</h1>
		<h2 class="text-2xl text-ctp-subtext0 font-fantasy">{$t('journal.title')}</h2>
	</div>

	<div class="relative py-4">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-ctp-surface2"></div>
		<svg width="100%" height="20" class="absolute top-0 left-0 right-0">
			<path d="M0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" stroke="var(--ctp-surface2)" stroke-width="2" fill="none" />
		</svg>
	</div>

	<ul class="list-none p-0 m-0 space-y-4">
		{#each quests as quest}
			<li style={quest.style}>
				<a
					href={quest.href}
					use:smoothScroll
					class="flex items-center no-underline text-ctp-text text-lg p-3 rounded-lg transition-all duration-300"
					class:bg-ctp-surface0={selectedQuest === quest.href}
					class:text-ctp-mauve={selectedQuest === quest.href}
					class:hover:bg-ctp-surface1={selectedQuest !== quest.href}
				>
					<svg class="w-6 h-6 mr-4 fill-current" viewBox="0 0 24 24">
						<path d={quest.icon}></path>
					</svg>
					<span class="flex-grow font-semibold">{$t(quest.text)}</span>
					<div class="w-3 h-3 rounded-full border-2 transition-all"
						 class:border-ctp-green={selectedQuest === quest.href}
						 class:bg-ctp-green={selectedQuest === quest.href}
						 class:border-ctp-surface2={selectedQuest !== quest.href}>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<div class="relative py-4 mt-4">
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-ctp-surface2"></div>
		<svg width="100%" height="20" class="absolute bottom-0 left-0 right-0">
			<path d="M0 10 Q 5 20, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" stroke="var(--ctp-surface2)" stroke-width="2" fill="none" />
		</svg>
	</div>
</aside>
