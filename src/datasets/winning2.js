// These statistics are © Apu Kapadia, 2005
// used with permission
// regex is /^(\d*)\s([AKQJT2-9s]*)\s(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s*)/
// replace string is "{pair:'$2', wins: '$3', ties: '$4'},"
const arry = [
  { pair: 'AA', wins: '84.97	 ', ties: '0.57	' },
  { pair: 'KK', wins: '82.10	 ', ties: '0.58	' },
  { pair: 'QQ', wins: '79.63	 ', ties: '0.61	' },
  { pair: 'JJ', wins: '77.16	 ', ties: '0.65	' },
  { pair: 'TT', wins: '74.66	 ', ties: '0.72	' },
  { pair: '99', wins: '71.69	 ', ties: '0.80	' },
  { pair: '88', wins: '68.72	 ', ties: '0.91	' },
  { pair: '77', wins: '65.72	 ', ties: '1.04	' },
  { pair: 'KAs', wins: '65.28	 ', ties: '2.66	' },
  { pair: 'QAs', wins: '64.41	 ', ties: '2.78	' },
  { pair: 'JAs', wins: '63.55	 ', ties: '2.95	' },
  { pair: 'KA', wins: '63.49	 ', ties: '2.75	' },
  { pair: 'TAs', wins: '62.66	 ', ties: '3.18	' },
  { pair: '66', wins: '62.58	 ', ties: '1.18	' },
  { pair: 'QA', wins: '62.57	 ', ties: '2.87	' },
  { pair: 'JA', wins: '61.63	 ', ties: '3.06	' },
  { pair: 'QKs', wins: '61.58	 ', ties: '2.97	' },
  { pair: 'TA', wins: '60.70	 ', ties: '3.29	' },
  { pair: 'JKs', wins: '60.69	 ', ties: '3.14	' },
  { pair: '9As', wins: '60.68	 ', ties: '3.49	' },
  { pair: 'TKs', wins: '59.82	 ', ties: '3.34	' },
  { pair: '8As', wins: '59.72	 ', ties: '3.79	' },
  { pair: '55', wins: '59.65	 ', ties: '1.38	' },
  { pair: 'QK', wins: '59.58	 ', ties: '3.07	' },
  { pair: 'JK', wins: '58.64	 ', ties: '3.25	' },
  { pair: '7As', wins: '58.61	 ', ties: '4.11	' },
  { pair: '9A', wins: '58.60	 ', ties: '3.61	' },
  { pair: 'JQs', wins: '58.43	 ', ties: '3.31	' },
  { pair: '9Ks', wins: '57.89	 ', ties: '3.64	' },
  { pair: 'TK', wins: '57.72	 ', ties: '3.47	' },
  { pair: 'TQs', wins: '57.56	 ', ties: '3.51	' },
  { pair: '8A', wins: '57.54	 ', ties: '3.96	' },
  { pair: '5As', wins: '57.31	 ', ties: '4.61	' },
  { pair: '6As', wins: '57.26	 ', ties: '4.36	' },
  { pair: '4As', wins: '56.38	 ', ties: '4.69	' },
  { pair: '7A', wins: '56.36	 ', ties: '4.30	' },
  { pair: '44', wins: '56.26	 ', ties: '1.55	' },
  { pair: 'JQ', wins: '56.25	 ', ties: '3.43	' },
  { pair: '8Ks', wins: '56.08	 ', ties: '3.96	' },
  { pair: 'TJs', wins: '55.67	 ', ties: '3.64	' },
  { pair: '9K', wins: '55.64	 ', ties: '3.78	' },
  { pair: '9Qs', wins: '55.62	 ', ties: '3.79	' },
  { pair: '3As', wins: '55.60	 ', ties: '4.67	' },
  { pair: 'TQ', wins: '55.31	 ', ties: '3.65	' },
  { pair: '7Ks', wins: '55.13	 ', ties: '4.30	' },
  { pair: '5A', wins: '54.94	 ', ties: '4.84	' },
  { pair: '6A', wins: '54.91	 ', ties: '4.58	' },
  { pair: '2As', wins: '54.84	 ', ties: '4.63	' },
  { pair: '6Ks', wins: '53.98	 ', ties: '4.58	' },
  { pair: '4A', wins: '53.95	 ', ties: '4.92	' },
  { pair: '8Qs', wins: '53.85	 ', ties: '4.10	' },
  { pair: '8K', wins: '53.68	 ', ties: '4.14	' },
  { pair: '9Js', wins: '53.65	 ', ties: '3.99	' },
  { pair: 'TJ', wins: '53.34	 ', ties: '3.78	' },
  { pair: '9Q', wins: '53.25	 ', ties: '3.95	' },
  { pair: '5Ks', wins: '53.15	 ', ties: '4.82	' },
  { pair: '3A', wins: '53.08	 ', ties: '4.91	' },
  { pair: '33', wins: '52.84	 ', ties: '1.73	' },
  { pair: '7K', wins: '52.68	 ', ties: '4.49	' },
  { pair: '2A', wins: '52.24	 ', ties: '4.90	' },
  { pair: '4Ks', wins: '52.20	 ', ties: '4.89	' },
  { pair: '9Ts', wins: '52.05	 ', ties: '4.15	' },
  { pair: '7Qs', wins: '51.96	 ', ties: '4.45	' },
  { pair: '8Js', wins: '51.87	 ', ties: '4.28	' },
  { pair: '6K', wins: '51.44	 ', ties: '4.80	' },
  { pair: '3Ks', wins: '51.39	 ', ties: '4.88	' },
  { pair: '8Q', wins: '51.34	 ', ties: '4.28	' },
  { pair: '9J', wins: '51.16	 ', ties: '4.14	' },
  { pair: '6Qs', wins: '51.02	 ', ties: '4.76	' },
  { pair: '2Ks', wins: '50.58	 ', ties: '4.85	' },
  { pair: '5K', wins: '50.54	 ', ties: '5.06	' },
  { pair: '8Ts', wins: '50.21	 ', ties: '4.49	' },
  { pair: '5Qs', wins: '50.18	 ', ties: '5.00	' },
  { pair: '7Js', wins: '50.01	 ', ties: '4.61	' },
  { pair: '4K', wins: '49.51	 ', ties: '5.15	' },
  { pair: '9T', wins: '49.47	 ', ties: '4.32	' },
  { pair: '22', wins: '49.41	 ', ties: '1.91	' },
  { pair: '7Q', wins: '49.32	 ', ties: '4.66	' },
  { pair: '8J', wins: '49.25	 ', ties: '4.46	' },
  { pair: '4Qs', wins: '49.23	 ', ties: '5.07	' },
  { pair: '89s', wins: '48.63	 ', ties: '4.71	' },
  { pair: '3K', wins: '48.61	 ', ties: '5.13	' },
  { pair: '3Qs', wins: '48.41	 ', ties: '5.05	' },
  { pair: '7Ts', wins: '48.35	 ', ties: '4.82	' },
  { pair: '6Q', wins: '48.29	 ', ties: '4.98	' },
  { pair: '6Js', wins: '48.03	 ', ties: '4.94	' },
  { pair: '2K', wins: '47.73	 ', ties: '5.11	' },
  { pair: '2Qs', wins: '47.56	 ', ties: '5.02	' },
  { pair: '8T', wins: '47.49	 ', ties: '4.68	' },
  { pair: '5Js', wins: '47.41	 ', ties: '5.20	' },
  { pair: '5Q', wins: '47.39	 ', ties: '5.25	' },
  { pair: '7J', wins: '47.28	 ', ties: '4.82	' },
  { pair: '79s', wins: '46.78	 ', ties: '5.07	' },
  { pair: '4Js', wins: '46.45	 ', ties: '5.27	' },
  { pair: '6Ts', wins: '46.39	 ', ties: '5.12	' },
  { pair: '4Q', wins: '46.36	 ', ties: '5.33	' },
  { pair: '89', wins: '45.85	 ', ties: '4.91	' },
  { pair: '3Js', wins: '45.62	 ', ties: '5.25	' },
  { pair: '78s', wins: '45.57	 ', ties: '5.29	' },
  { pair: '7T', wins: '45.51	 ', ties: '5.03	' },
  { pair: '3Q', wins: '45.46	 ', ties: '5.32	' },
  { pair: '6J', wins: '45.16	 ', ties: '5.17	' },
  { pair: '69s', wins: '44.85	 ', ties: '5.36	' },
  { pair: '2Js', wins: '44.79	 ', ties: '5.23	' },
  { pair: '5Ts', wins: '44.65	 ', ties: '5.40	' },
  { pair: '2Q', wins: '44.56	 ', ties: '5.30	' },
  { pair: '5J', wins: '44.47	 ', ties: '5.46	' },
  { pair: '4Ts', wins: '43.91	 ', ties: '5.49	' },
  { pair: '79', wins: '43.87	 ', ties: '5.30	' },
  { pair: '68s', wins: '43.58	 ', ties: '5.64	' },
  { pair: '4J', wins: '43.43	 ', ties: '5.55	' },
  { pair: '6T', wins: '43.42	 ', ties: '5.37	' },
  { pair: '59s', wins: '43.14	 ', ties: '5.63	' },
  { pair: '3Ts', wins: '43.08	 ', ties: '5.46	' },
  { pair: '67s', wins: '42.60	 ', ties: '5.85	' },
  { pair: '78', wins: '42.58	 ', ties: '5.54	' },
  { pair: '3J', wins: '42.54	 ', ties: '5.52	' },
  { pair: '2Ts', wins: '42.24	 ', ties: '5.44	' },
  { pair: '58s', wins: '41.87	 ', ties: '5.90	' },
  { pair: '69', wins: '41.78	 ', ties: '5.62	' },
  { pair: '2J', wins: '41.65	 ', ties: '5.50	' },
  { pair: '5T', wins: '41.54	 ', ties: '5.67	' },
  { pair: '49s', wins: '41.22	 ', ties: '5.73	' },
  { pair: '57s', wins: '40.93	 ', ties: '6.15	' },
  { pair: '4T', wins: '40.75	 ', ties: '5.78	' },
  { pair: '39s', wins: '40.61	 ', ties: '5.73	' },
  { pair: '68', wins: '40.44	 ', ties: '5.91	' },
  { pair: '56s', wins: '40.16	 ', ties: '6.32	' },
  { pair: '48s', wins: '39.98	 ', ties: '6.00	' },
  { pair: '59', wins: '39.94	 ', ties: '5.91	' },
  { pair: '3T', wins: '39.84	 ', ties: '5.76	' },
  { pair: '29s', wins: '39.78	 ', ties: '5.70	' },
  { pair: '67', wins: '39.39	 ', ties: '6.13	' },
  { pair: '47s', wins: '39.06	 ', ties: '6.25	' },
  { pair: '2T', wins: '38.94	 ', ties: '5.74	' },
  { pair: '58', wins: '38.63	 ', ties: '6.19	' },
  { pair: '45s', wins: '38.54	 ', ties: '6.59	' },
  { pair: '46s', wins: '38.30	 ', ties: '6.46	' },
  { pair: '38s', wins: '38.16	 ', ties: '5.97	' },
  { pair: '49', wins: '37.89	 ', ties: '6.03	' },
  { pair: '57', wins: '37.63	 ', ties: '6.47	' },
  { pair: '28s', wins: '37.58	 ', ties: '5.97	' },
  { pair: '37s', wins: '37.25	 ', ties: '6.24	' },
  { pair: '39', wins: '37.23	 ', ties: '6.04	' },
  { pair: '56', wins: '36.83	 ', ties: '6.65	' },
  { pair: '35s', wins: '36.76	 ', ties: '6.61	' },
  { pair: '48', wins: '36.60	 ', ties: '6.30	' },
  { pair: '36s', wins: '36.51	 ', ties: '6.45	' },
  { pair: '29', wins: '36.34	 ', ties: '6.02	' },
  { pair: '34s', wins: '35.74	 ', ties: '6.58	' },
  { pair: '47', wins: '35.61	 ', ties: '6.59	' },
  { pair: '27s', wins: '35.40	 ', ties: '6.21	' },
  { pair: '45', wins: '35.08	 ', ties: '6.94	' },
  { pair: '25s', wins: '34.93	 ', ties: '6.61	' },
  { pair: '46', wins: '34.82	 ', ties: '6.81	' },
  { pair: '26s', wins: '34.68	 ', ties: '6.43	' },
  { pair: '38', wins: '34.64	 ', ties: '6.30	' },
  { pair: '28', wins: '33.99	 ', ties: '6.31	' },
  { pair: '24s', wins: '33.95	 ', ties: '6.57	' },
  { pair: '37', wins: '33.67	 ', ties: '6.58	' },
  { pair: '35', wins: '33.16	 ', ties: '6.98	' },
  { pair: '23s', wins: '33.12	 ', ties: '6.54	' },
  { pair: '36', wins: '32.90	 ', ties: '6.81	' },
  { pair: '34', wins: '32.08	 ', ties: '6.95	' },
  { pair: '27', wins: '31.68	 ', ties: '6.56	' },
  { pair: '25', wins: '31.21	 ', ties: '6.97	' },
  { pair: '26', wins: '30.91	 ', ties: '6.80	' },
  { pair: '24', wins: '30.14	 ', ties: '6.95	' },
  { pair: '23', wins: '29.29	 ', ties: '6.91	' },
]

export default arry;