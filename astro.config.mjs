// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/topologia1/',
	},
	integrations: [
		starlight({
			title: 'Laboratorio 4 - Redes',
			sidebar: [
				{
					label: 'Laboratorio',
					items: [
						{ label: 'Material de apoyo', link: '/material-apoyo/' },
						{
							label: 'Topologia 1',
							items: [
								{ label: 'Resumen', link: '/topologia1/' },
								{
									label: 'Protocolos',
									items: [
										{ label: 'RIPv1', link: '/topologia1/ripv1/' },
										{ label: 'OSPF', link: '/topologia1/ospf/' },
									],
								},
							],
						},
						{
							label: 'Topologia 2',
							items: [
								{ label: 'Resumen', link: '/topologia2/' },
								{
									label: 'Protocolos',
									items: [{ label: 'BGP', link: '/topologia2/bgp/' }],
								},
							],
						},
						{
							label: 'Topologia 3',
							items: [
								{ label: 'Resumen', link: '/topologia3/' },
								{
									label: 'Protocolos',
									items: [
										{ label: 'RIPng', link: '/topologia3/ripng/' },
										{ label: 'OSPFv3', link: '/topologia3/ospfv3/' },
									],
								},
							],
						},
					]
				},
			],
		}),
	],
});
