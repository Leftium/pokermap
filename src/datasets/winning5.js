// These statistics are © Apu Kapadia, 2005
// used with permission

const arry = [
  { pair: 'AA', wins: '55.78	 ', ties: '0.65	' },
  { pair: 'KK', wins: '49.53	 ', ties: '0.65	' },
  { pair: 'QQ', wins: '44.43	 ', ties: '0.75	' },
  { pair: 'JJ', wins: '39.94	 ', ties: '0.84	' },
  { pair: 'TT', wins: '35.96	 ', ties: '0.94	' },
  { pair: 'KAs', wins: '34.08	 ', ties: '2.61	' },
  { pair: 'QAs', wins: '32.27	 ', ties: '2.89	' },
  { pair: '99', wins: '32.26	 ', ties: '0.86	' },
  { pair: 'QKs', wins: '31.12	 ', ties: '2.73	' },
  { pair: 'KA', wins: '30.95	 ', ties: '2.70	' },
  { pair: 'JAs', wins: '30.72	 ', ties: '3.17	' },
  { pair: 'JKs', wins: '29.60	 ', ties: '2.99	' },
  { pair: 'TAs', wins: '29.41	 ', ties: '3.44	' },
  { pair: '88', wins: '29.15	 ', ties: '0.87	' },
  { pair: 'QA', wins: '28.98	 ', ties: '3.00	' },
  { pair: 'JQs', wins: '28.80	 ', ties: '3.00	' },
  { pair: 'TKs', wins: '28.33	 ', ties: '3.23	' },
  { pair: 'QK', wins: '27.87	 ', ties: '2.82	' },
  { pair: 'TQs', wins: '27.58	 ', ties: '3.21	' },
  { pair: 'JA', wins: '27.28	 ', ties: '3.30	' },
  { pair: 'TJs', wins: '27.20	 ', ties: '3.23	' },
  { pair: '9As', wins: '26.66	 ', ties: '3.59	' },
  { pair: '77', wins: '26.44	 ', ties: '0.87	' },
  { pair: 'JK', wins: '26.21	 ', ties: '3.10	' },
  { pair: 'TA', wins: '25.83	 ', ties: '3.58	' },
  { pair: '9Ks', wins: '25.63	 ', ties: '3.30	' },
  { pair: '8As', wins: '25.58	 ', ties: '3.86	' },
  { pair: 'JQ', wins: '25.48	 ', ties: '3.10	' },
  { pair: '9Qs', wins: '24.94	 ', ties: '3.24	' },
  { pair: 'TK', wins: '24.83	 ', ties: '3.35	' },
  { pair: '9Js', wins: '24.61	 ', ties: '3.24	' },
  { pair: '7As', wins: '24.57	 ', ties: '4.06	' },
  { pair: '9Ts', wins: '24.55	 ', ties: '3.28	' },
  { pair: 'TQ', wins: '24.14	 ', ties: '3.32	' },
  { pair: '5As', wins: '24.08	 ', ties: '4.33	' },
  { pair: '66', wins: '23.95	 ', ties: '0.79	' },
  { pair: 'TJ', wins: '23.86	 ', ties: '3.34	' },
  { pair: '8Ks', wins: '23.53	 ', ties: '3.49	' },
  { pair: '4As', wins: '23.49	 ', ties: '4.25	' },
  { pair: '6As', wins: '23.33	 ', ties: '4.00	' },
  { pair: '3As', wins: '23.00	 ', ties: '4.12	' },
  { pair: '8Qs', wins: '22.88	 ', ties: '3.36	' },
  { pair: '9A', wins: '22.87	 ', ties: '3.76	' },
  { pair: '7Ks', wins: '22.67	 ', ties: '3.71	' },
  { pair: '8Js', wins: '22.59	 ', ties: '3.32	' },
  { pair: '8Ts', wins: '22.57	 ', ties: '3.35	' },
  { pair: '2As', wins: '22.55	 ', ties: '4.02	' },
  { pair: '89s', wins: '22.33	 ', ties: '3.20	' },
  { pair: '55', wins: '22.10	 ', ties: '0.91	' },
  { pair: '9K', wins: '21.90	 ', ties: '3.44	' },
  { pair: '6Ks', wins: '21.69	 ', ties: '3.72	' },
  { pair: '8A', wins: '21.68	 ', ties: '4.04	' },
  { pair: '9Q', wins: '21.28	 ', ties: '3.37	' },
  { pair: '5Ks', wins: '21.18	 ', ties: '3.93	' },
  { pair: '9T', wins: '21.05	 ', ties: '3.41	' },
  { pair: '9J', wins: '21.03	 ', ties: '3.36	' },
  { pair: '7Qs', wins: '20.98	 ', ties: '3.51	' },
  { pair: '78s', wins: '20.80	 ', ties: '3.19	' },
  { pair: '7Ts', wins: '20.71	 ', ties: '3.41	' },
  { pair: '7Js', wins: '20.70	 ', ties: '3.42	' },
  { pair: '79s', wins: '20.70	 ', ties: '3.25	' },
  { pair: '4Ks', wins: '20.63	 ', ties: '3.83	' },
  { pair: '7A', wins: '20.55	 ', ties: '4.25	' },
  { pair: '44', wins: '20.31	 ', ties: '0.83	' },
  { pair: '3Ks', wins: '20.16	 ', ties: '3.70	' },
  { pair: '6Qs', wins: '20.13	 ', ties: '3.56	' },
  { pair: '5A', wins: '19.99	 ', ties: '4.53	' },
  { pair: '2Ks', wins: '19.74	 ', ties: '3.57	' },
  { pair: '5Qs', wins: '19.66	 ', ties: '3.74	' },
  { pair: '8K', wins: '19.60	 ', ties: '3.65	' },
  { pair: '4A', wins: '19.34	 ', ties: '4.44	' },
  { pair: '6A', wins: '19.21	 ', ties: '4.17	' },
  { pair: '4Qs', wins: '19.16	 ', ties: '3.63	' },
  { pair: '68s', wins: '19.06	 ', ties: '3.12	' },
  { pair: '67s', wins: '19.06	 ', ties: '3.11	' },
  { pair: '8Q', wins: '19.03	 ', ties: '3.50	' },
  { pair: '8T', wins: '18.91	 ', ties: '3.49	' },
  { pair: '69s', wins: '18.86	 ', ties: '3.17	' },
  { pair: '8J', wins: '18.83	 ', ties: '3.47	' },
  { pair: '6Ts', wins: '18.83	 ', ties: '3.35	' },
  { pair: '6Js', wins: '18.82	 ', ties: '3.41	' },
  { pair: '33', wins: '18.80	 ', ties: '0.76	' },
  { pair: '3A', wins: '18.78	 ', ties: '4.31	' },
  { pair: '89', wins: '18.71	 ', ties: '3.32	' },
  { pair: '3Qs', wins: '18.71	 ', ties: '3.49	' },
  { pair: '7K', wins: '18.64	 ', ties: '3.88	' },
  { pair: '5Js', wins: '18.45	 ', ties: '3.64	' },
  { pair: '2Qs', wins: '18.29	 ', ties: '3.37	' },
  { pair: '2A', wins: '18.28	 ', ties: '4.19	' },
  { pair: '57s', wins: '18.16	 ', ties: '3.16	' },
  { pair: '56s', wins: '18.16	 ', ties: '3.01	' },
  { pair: '4Js', wins: '17.95	 ', ties: '3.52	' },
  { pair: '45s', wins: '17.77	 ', ties: '3.02	' },
  { pair: '58s', wins: '17.76	 ', ties: '3.23	' },
  { pair: '22', wins: '17.59	 ', ties: '0.70	' },
  { pair: '6K', wins: '17.58	 ', ties: '3.89	' },
  { pair: '3Js', wins: '17.54	 ', ties: '3.38	' },
  { pair: '59s', wins: '17.44	 ', ties: '3.31	' },
  { pair: '5Ts', wins: '17.43	 ', ties: '3.53	' },
  { pair: '2Js', wins: '17.13	 ', ties: '3.25	' },
  { pair: '78', wins: '17.10	 ', ties: '3.31	' },
  { pair: '5K', wins: '17.01	 ', ties: '4.11	' },
  { pair: '4Ts', wins: '17.01	 ', ties: '3.47	' },
  { pair: '7Q', wins: '16.96	 ', ties: '3.67	' },
  { pair: '79', wins: '16.93	 ', ties: '3.37	' },
  { pair: '7T', wins: '16.88	 ', ties: '3.56	' },
  { pair: '46s', wins: '16.88	 ', ties: '2.85	' },
  { pair: '7J', wins: '16.78	 ', ties: '3.57	' },
  { pair: '47s', wins: '16.73	 ', ties: '3.01	' },
  { pair: '3Ts', wins: '16.60	 ', ties: '3.32	' },
  { pair: '35s', wins: '16.55	 ', ties: '2.86	' },
  { pair: '4K', wins: '16.40	 ', ties: '4.01	' },
  { pair: '48s', wins: '16.28	 ', ties: '3.09	' },
  { pair: '2Ts', wins: '16.20	 ', ties: '3.19	' },
  { pair: '6Q', wins: '16.04	 ', ties: '3.72	' },
  { pair: '49s', wins: '16.02	 ', ties: '3.21	' },
  { pair: '34s', wins: '15.97	 ', ties: '2.69	' },
  { pair: '3K', wins: '15.88	 ', ties: '3.86	' },
  { pair: '39s', wins: '15.67	 ', ties: '3.12	' },
  { pair: '5Q', wins: '15.50	 ', ties: '3.91	' },
  { pair: '36s', wins: '15.49	 ', ties: '2.70	' },
  { pair: '2K', wins: '15.40	 ', ties: '3.74	' },
  { pair: '37s', wins: '15.32	 ', ties: '2.86	' },
  { pair: '29s', wins: '15.31	 ', ties: '2.98	' },
  { pair: '67', wins: '15.23	 ', ties: '3.22	' },
  { pair: '25s', wins: '15.21	 ', ties: '2.71	' },
  { pair: '68', wins: '15.20	 ', ties: '3.24	' },
  { pair: '69', wins: '14.93	 ', ties: '3.29	' },
  { pair: '4Q', wins: '14.93	 ', ties: '3.80	' },
  { pair: '38s', wins: '14.92	 ', ties: '2.97	' },
  { pair: '6T', wins: '14.83	 ', ties: '3.50	' },
  { pair: '24s', wins: '14.80	 ', ties: '2.53	' },
  { pair: '6J', wins: '14.73	 ', ties: '3.56	' },
  { pair: '28s', wins: '14.63	 ', ties: '2.89	' },
  { pair: '3Q', wins: '14.43	 ', ties: '3.65	' },
  { pair: '5J', wins: '14.31	 ', ties: '3.81	' },
  { pair: '23s', wins: '14.30	 ', ties: '2.35	' },
  { pair: '56', wins: '14.28	 ', ties: '3.12	' },
  { pair: '57', wins: '14.26	 ', ties: '3.29	' },
  { pair: '26s', wins: '14.16	 ', ties: '2.54	' },
  { pair: '27s', wins: '13.99	 ', ties: '2.75	' },
  { pair: '2Q', wins: '13.95	 ', ties: '3.52	' },
  { pair: '45', wins: '13.87	 ', ties: '3.14	' },
  { pair: '58', wins: '13.78	 ', ties: '3.36	' },
  { pair: '4J', wins: '13.76	 ', ties: '3.69	' },
  { pair: '59', wins: '13.38	 ', ties: '3.45	' },
  { pair: '5T', wins: '13.30	 ', ties: '3.70	' },
  { pair: '3J', wins: '13.27	 ', ties: '3.53	' },
  { pair: '46', wins: '12.89	 ', ties: '2.97	' },
  { pair: '4T', wins: '12.84	 ', ties: '3.64	' },
  { pair: '2J', wins: '12.83	 ', ties: '3.39	' },
  { pair: '47', wins: '12.69	 ', ties: '3.15	' },
  { pair: '35', wins: '12.53	 ', ties: '2.98	' },
  { pair: '3T', wins: '12.36	 ', ties: '3.48	' },
  { pair: '48', wins: '12.18	 ', ties: '3.23	' },
  { pair: '34', wins: '11.92	 ', ties: '2.79	' },
  { pair: '2T', wins: '11.92	 ', ties: '3.34	' },
  { pair: '49', wins: '11.82	 ', ties: '3.36	' },
  { pair: '39', wins: '11.43	 ', ties: '3.26	' },
  { pair: '36', wins: '11.39	 ', ties: '2.80	' },
  { pair: '37', wins: '11.15	 ', ties: '2.99	' },
  { pair: '25', wins: '11.07	 ', ties: '2.82	' },
  { pair: '29', wins: '11.01	 ', ties: '3.11	' },
  { pair: '38', wins: '10.69	 ', ties: '3.11	' },
  { pair: '24', wins: '10.64	 ', ties: '2.63	' },
  { pair: '28', wins: '10.35	 ', ties: '3.02	' },
  { pair: '23', wins: '10.10	 ', ties: '2.44	' },
  { pair: '26', wins: '9.93	 ', ties: '2.65	' },
  { pair: '27', wins: '9.72	 ', ties: '2.87	' },


]

export default arry;