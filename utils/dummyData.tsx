const dummyData = [
	{
		'id': 1,
		'timestamp': '2020-11-17 17:30:00',
		'yfiAmount': 0.239646,
		'usdValue': 5224.0584,
		'tokenAmount': 4400,
		'token': 'YUSD',
		'hash': '0x89f2dd2a9b316a0688c9be0aea2ce30ab2ba584506fab3ada65b93e311307d57'
	},
	{
		'id': 2,
		'timestamp': '2020-11-17 17:30:00',
		'yfiAmount': 0.254446,
		'usdValue': 4986.6012,
		'tokenAmount': 4200,
		'token': 'YUSD',
		'hash': '0x89f2dd2a9b316a0688c9be0aea2ce30ab2ba584506fab3ada65b93e311307d57'
	},
	{
		'id': 3,
		'timestamp': '2020-12-31 7:16:00',
		'yfiAmount': 2.281145,
		'usdValue': 51244.95957,
		'tokenAmount': 42584.75372,
		'token': 'YUSD',
		'hash': '0xe5ac989c66e42b8c0a6ea4a138e31ae29511decb7e3a0bdbc1dba61092951dec'
	},
	{
		'id': 4,
		'timestamp': '2021-02-11 18:26:00',
		'yfiAmount': 3,
		'usdValue': 135988.2633,
		'tokenAmount': 76.044203,
		'token': 'WETH',
		'hash': '0x3ba7f549aff129df62cc5b98491d11f57465b6d71627261ef2c9c6e0d54ff9b2'
	},
	{
		'id': 5,
		'timestamp': '2021-04-17 11:12:00',
		'yfiAmount': 2.429177,
		'usdValue': 109422.39,
		'tokenAmount': 109422.39,
		'token': 'USDC',
		'hash': '0xd98fbb7bf97afe0b71a0da98f9140e75d2ca2b825509b843da18b5d213fd1cf1'
	},
	{
		'id': 6,
		'timestamp': '2021-04-18 9:18:00',
		'yfiAmount': 8.632736,
		'usdValue': 404789,
		'tokenAmount': 404789,
		'token': 'DAI',
		'hash': '0xcb0730339b003546355f455f0267e12822c568e0a13736fb1f2afabcaef6ec22'
	},
	{
		'id': 7,
		'timestamp': '2021-04-24 18:43:00',
		'yfiAmount': 2.430758,
		'usdValue': 100000,
		'tokenAmount': 100000,
		'token': 'USDC',
		'hash': '0xa9ff710554b57e9f753c020f1ec227b69ad64a1931a924f86b8961219a410874'
	},
	{
		'id': 8,
		'timestamp': '2021-04-26 15:37:00',
		'yfiAmount': 2.302923,
		'usdValue': 100000,
		'tokenAmount': 100000,
		'token': 'USDC',
		'hash': '0x1f694a56d0d7e63a88b9b523d6b8dfce14b5c58452151790688f75d174b935d5'
	},
	{
		'id': 9,
		'timestamp': '2021-07-09 21:12:00',
		'yfiAmount': 1,
		'usdValue': 34223.69,
		'tokenAmount': 34223.69,
		'token': 'GUSD',
		'hash': '0x258b9caa8b482c61bfaf3af04936cb8613ba8a303a61382e33460a936310e2b1'
	},
	{
		'id': 10,
		'timestamp': '2021-07-15 22:27:00',
		'yfiAmount': 0.004504,
		'usdValue': 148.139538,
		'tokenAmount': 200,
		'token': 'FOX',
		'hash': '0x860c81c25bd8b43608ee92d637c81be6a1d68b191519ec07c78d78c2ec119cd0'
	},
	{
		'id': 11,
		'timestamp': '2021-07-17 18:56:00',
		'yfiAmount': 2.262867,
		'usdValue': 63106.0048,
		'tokenAmount': 63106.0048,
		'token': 'DAI',
		'hash': '0x12f66addb143a5480e9e68ec261550eb39d3ff9a1a051b7c5b574ef6e448b47c'
	},
	{
		'id': 12,
		'timestamp': '2021-07-18 19:57:00',
		'yfiAmount': 2,
		'usdValue': 56077.76745,
		'tokenAmount': 56077.76745,
		'token': 'DAI',
		'hash': '0xcba6d079cba990a913223d418272740145cd510dd18b1e9de74725a537def666'
	},
	{
		'id': 13,
		'timestamp': '2021-07-18 22:53:00',
		'yfiAmount': 0.678787,
		'usdValue': 18870.97601,
		'tokenAmount': 18870.97601,
		'token': 'DAI',
		'hash': '0xb3871eef687311cee6e2194fd63654de04dc620600f8c8b34af7500aa2602413'
	},
	{
		'id': 14,
		'timestamp': '2021-07-19 0:48:00',
		'yfiAmount': 0.680323,
		'usdValue': 18913.68858,
		'tokenAmount': 18913.68858,
		'token': 'DAI',
		'hash': '0x88085d1c31542db46cc9c58386fe3c4f0675d474bd14ed7d38944a98c6cfb139'
	},
	{
		'id': 15,
		'timestamp': '2021-07-19 0:55:00',
		'yfiAmount': 0.220767,
		'usdValue': 6137.567905,
		'tokenAmount': 6137.567905,
		'token': 'DAI',
		'hash': '0x78d3b626d2aa0ec0802504e272b0a2d4049908a9b568ad9cb8cf7db3d242ef8e'
	},
	{
		'id': 16,
		'timestamp': '2021-07-20 1:20:00',
		'yfiAmount': 0.50194,
		'usdValue': 13301.92807,
		'tokenAmount': 13301.92807,
		'token': 'DAI',
		'hash': '0x60e9305bfacbcdfc81dc820c8f5568ec738874d3ff4d6a8f99fd5706f87229e8'
	},
	{
		'id': 17,
		'timestamp': '2021-07-20 1:23:00',
		'yfiAmount': 0.67563,
		'usdValue': 17904.87723,
		'tokenAmount': 17904.87723,
		'token': 'DAI',
		'hash': '0x2366cf34f302e78cffcf9dec15e10c8f050c05d556faa08b04b4825734900a7a'
	},
	{
		'id': 18,
		'timestamp': '2021-07-20 1:26:00',
		'yfiAmount': 0.444262,
		'usdValue': 11773.38967,
		'tokenAmount': 11773.38967,
		'token': 'DAI',
		'hash': '0xe37aa8fcecc94aebdfa805e0efbf4f787462f7fb3d9e4c9d2dd2ff0e125101bc'
	},
	{
		'id': 19,
		'timestamp': '2021-07-22 16:54:00',
		'yfiAmount': 1.991459,
		'usdValue': 57019.805,
		'tokenAmount': 57019.805,
		'token': 'DAI',
		'hash': '0xafad47f074d412e2127e8f04963f0b7a289628e2df6e4d588c2111e205846a2a'
	},
	{
		'id': 20,
		'timestamp': '2021-08-03 0:08:00',
		'yfiAmount': 0.641806,
		'usdValue': 20538.07678,
		'tokenAmount': 20538.07678,
		'token': 'DAI',
		'hash': '0x67288477cc7e32a0c625cce774d36509aaa2afe4c81efb692ee8a37e47fe85d6'
	},
	{
		'id': 21,
		'timestamp': '2021-08-03 0:08:00',
		'yfiAmount': 1.618622,
		'usdValue': 51796.56834,
		'tokenAmount': 51796.56834,
		'token': 'DAI',
		'hash': '0x3898bfd1389db4c0762bebc18512534bff0fc679c744bd45b78343be85968d0d'
	},
	{
		'id': 22,
		'timestamp': '2021-08-03 0:12:00',
		'yfiAmount': 0.792479,
		'usdValue': 25359.66608,
		'tokenAmount': 25359.66608,
		'token': 'DAI',
		'hash': '0x6f086061022efc6782c7c548a5a0d31149439d46c72f445b7773480a5935c8d8'
	},
	{
		'id': 23,
		'timestamp': '2021-08-03 0:17:00',
		'yfiAmount': 0.804717,
		'usdValue': 25751.28569,
		'tokenAmount': 25751.28569,
		'token': 'DAI',
		'hash': '0xaaf3288386ff8d4593c115d3322e0a5d9eda3903bde5d5fde229122dc2be331d'
	},
	{
		'id': 24,
		'timestamp': '2021-08-03 0:17:00',
		'yfiAmount': 0.79761,
		'usdValue': 25523.84486,
		'tokenAmount': 25523.84486,
		'token': 'DAI',
		'hash': '0x23103a7b285e54147a1f502b88700029622cf52f9aeec019cc32a8f653eb60f2'
	},
	{
		'id': 25,
		'timestamp': '2021-08-03 1:45:00',
		'yfiAmount': 0.79506,
		'usdValue': 25295.60078,
		'tokenAmount': 25295.60078,
		'token': 'DAI',
		'hash': '0x4875b48a51cfe15fd20a528997f460810c0057ecc29c0f9a8af2aaef17e1f449'
	},
	{
		'id': 26,
		'timestamp': '2021-08-03 1:46:00',
		'yfiAmount': 2.346983,
		'usdValue': 74671.47251,
		'tokenAmount': 74671.47251,
		'token': 'DAI',
		'hash': '0xe4ff9362d914b3ded9a6dd25184f87ee3eb59d89539085504be28a23fcbf9030'
	},
	{
		'id': 27,
		'timestamp': '2021-08-03 5:21:00',
		'yfiAmount': 0.03201,
		'usdValue': 1024.360095,
		'tokenAmount': 1024.360095,
		'token': 'DAI',
		'hash': '0xeb36895c9d1c4af09ae7926ade60762b2de58cc72071404eb8ea68e89dd3770a'
	},
	{
		'id': 28,
		'timestamp': '2021-08-04 17:06:00',
		'yfiAmount': 2.115091,
		'usdValue': 70000,
		'tokenAmount': 70000,
		'token': 'USDT',
		'hash': '0x60ac7e6688f28747a43ce4d82ce0a17c572ca7e8e7d7b9a4f9ec205acec15488'
	},
	{
		'id': 29,
		'timestamp': '2021-08-04 17:26:00',
		'yfiAmount': 2.317411,
		'usdValue': 76484.8018,
		'tokenAmount': 76484.8018,
		'token': 'USDT',
		'hash': '0xf9c82721bd053364d97977263c3314f5fa123981372e91ea424298f2b3337e29'
	},
	{
		'id': 30,
		'timestamp': '2021-08-05 0:57:00',
		'yfiAmount': 0.733508,
		'usdValue': 24026.54911,
		'tokenAmount': 24026.54911,
		'token': 'DAI',
		'hash': '0x2f68aab7897209eccaa45f8383e31e58f2db98c094621fe7cc796c800d99ec0a'
	},
	{
		'id': 31,
		'timestamp': '2021-08-05 1:01:00',
		'yfiAmount': 0.793336,
		'usdValue': 25986.23608,
		'tokenAmount': 25986.23608,
		'token': 'DAI',
		'hash': '0xe000e7cfabcc5fc07fe0cd0d1d539778c554fd5ea4142a51aa332e72584c5fbc'
	},
	{
		'id': 32,
		'timestamp': '2021-08-05 1:03:00',
		'yfiAmount': 1.090006,
		'usdValue': 35703.85385,
		'tokenAmount': 35703.85385,
		'token': 'DAI',
		'hash': '0xed5fbd8df89d28bfebe81b1bd82d6b2d9d8f7be960c657e957da5a15524acaa1'
	},
	{
		'id': 33,
		'timestamp': '2021-08-05 1:03:00',
		'yfiAmount': 2.000348,
		'usdValue': 65522.66561,
		'tokenAmount': 65522.66561,
		'token': 'DAI',
		'hash': '0x5a1cd1a4cb50e782ba61540346e7a50e4c2ff2f0fcdcd8892202ab9707cc6a9b'
	},
	{
		'id': 34,
		'timestamp': '2021-08-05 1:04:00',
		'yfiAmount': 1.141249,
		'usdValue': 37382.34284,
		'tokenAmount': 37382.34284,
		'token': 'DAI',
		'hash': '0xcf0b8b597ebef106a15960a0635c0934450d67a3a4582b442e99494007622779'
	},
	{
		'id': 35,
		'timestamp': '2021-08-05 1:05:00',
		'yfiAmount': 0.347072,
		'usdValue': 11368.56532,
		'tokenAmount': 11368.56532,
		'token': 'DAI',
		'hash': '0x9811cac0b94e0c8996ad38f5af015319c3ef39cae4524b3bc402266cc50cb078'
	},
	{
		'id': 36,
		'timestamp': '2021-08-11 21:17:00',
		'yfiAmount': 3.675182,
		'usdValue': 134970.3449,
		'tokenAmount': 134970.3449,
		'token': 'DAI',
		'hash': '0xd520ae4d1294e431c0585690e83599fe18af4abffa96f7d266c1f35536c71dec'
	},
	{
		'id': 37,
		'timestamp': '2021-08-12 16:02:00',
		'yfiAmount': 0.083528,
		'usdValue': 3067.565801,
		'tokenAmount': 3067.565801,
		'token': 'DAI',
		'hash': '0xb791e5c1f02c0bf5748fbba18a101e3ffcf0e1fa24d22fb2624bc64a22bffb68'
	},
	{
		'id': 38,
		'timestamp': '2021-09-07 23:43:00',
		'yfiAmount': 1.7308,
		'usdValue': 60221.21254,
		'tokenAmount': 60221.21254,
		'token': 'DAI',
		'hash': '0x78afd7222e37d6c70a5afc163f1643acb7cfd0d3ae9fcaccdf2b1dfc10462ea8'
	},
	{
		'id': 39,
		'timestamp': '2021-09-07 23:48:00',
		'yfiAmount': 2.006088,
		'usdValue': 70000,
		'tokenAmount': 70000,
		'token': 'DAI',
		'hash': '0xe671078e1632c57394803b16ba0d469f51a87c5a90ab26ee227bcae604d8f949'
	},
	{
		'id': 40,
		'timestamp': '2021-09-08 0:03:00',
		'yfiAmount': 4.286541,
		'usdValue': 150250,
		'tokenAmount': 150250,
		'token': 'USDC',
		'hash': '0x5c7c674e7829610cf5cc5931031a80c0701d9977496a1216a62f33abca513405'
	},
	{
		'id': 41,
		'timestamp': '2021-09-11 3:52:00',
		'yfiAmount': 1,
		'usdValue': 38451.39789,
		'tokenAmount': 38451.39789,
		'token': 'DAI',
		'hash': '0xded2ccc0110f802c91ec6d1337b1a2928d5cb1e0ec2007aec5ea633adfdae9ad'
	},
	{
		'id': 42,
		'timestamp': '2021-09-22 20:25:00',
		'yfiAmount': 4.963605,
		'usdValue': 150000,
		'tokenAmount': 150000,
		'token': 'USDC',
		'hash': '0xbb01f0b9230527ac603e757c51cb692170ccb111fc40d6329d593a398e36d8ea'
	},
	{
		'id': 43,
		'timestamp': '2021-09-24 12:02:00',
		'yfiAmount': 1.535446,
		'usdValue': 43380.81434,
		'tokenAmount': 43380.81434,
		'token': 'USDC',
		'hash': '0xbf12c3a9c2022dea5bde0667bd1d5ee6b731c0eac3b96bf44c61604da27d5a3c'
	},
	{
		'id': 44,
		'timestamp': '2021-09-24 17:32:00',
		'yfiAmount': 1.77181,
		'usdValue': 50000,
		'tokenAmount': 50000,
		'token': 'USDC',
		'hash': '0x2db9d9c3a3475723be227aeba953d92102a10a5af6b4ca7962795b8d27a4da04'
	},
	{
		'id': 45,
		'timestamp': '2021-11-14 13:42:00',
		'yfiAmount': 7.591211,
		'usdValue': 259695.9765,
		'tokenAmount': 4,
		'token': 'WBTC',
		'hash': '0x327a5654836734e971ca11b2aea28b38d0358c9fe0a0515b3d34b0a51e2f77d7'
	},
	{
		'id': 46,
		'timestamp': '2021-11-14 14:03:00',
		'yfiAmount': 7.595579,
		'usdValue': 259387.3239,
		'tokenAmount': 4,
		'token': 'WBTC',
		'hash': '0xdc61663aeb41b93ae4da36c3c59ab0dc4b60a13c56293b0cf220b91c1f999007'
	},
	{
		'id': 47,
		'timestamp': '2021-11-14 15:18:00',
		'yfiAmount': 7.597116,
		'usdValue': 257588.0739,
		'tokenAmount': 4,
		'token': 'WBTC',
		'hash': '0x88969bbe03de308a303a69b3c29a521775fc2a50a7a03aac95f151902a6dfc22'
	},
	{
		'id': 48,
		'timestamp': '2021-11-15 19:03:00',
		'yfiAmount': 7.196746,
		'usdValue': 256706.6869,
		'tokenAmount': 4,
		'token': 'WBTC',
		'hash': '0xe93f094490db8731f55433650b5d10dacc491d2301521b41cba1082b230db05a'
	},
	{
		'id': 49,
		'timestamp': '2021-11-16 4:04:00',
		'yfiAmount': 5.871785,
		'usdValue': 188360.9151,
		'tokenAmount': 188360.9151,
		'token': 'DAI',
		'hash': '0x613019182537c4a30cc5def981bd3cf032cfae05ea1942b25274adc74116ccdc'
	},
	{
		'id': 50,
		'timestamp': '2021-11-25 14:06:00',
		'yfiAmount': 19.355563,
		'usdValue': 632525.1148,
		'tokenAmount': 142.632325,
		'token': 'WETH',
		'hash': '0xa1a9bd644343d4bf413a9da85089bc57f092756d4ba3a118b13cfa37c03f4198'
	},
	{
		'id': 51,
		'timestamp': '2021-12-04 8:29:00',
		'yfiAmount': 8.373643,
		'usdValue': 663750.5572,
		'tokenAmount': 165.0209,
		'token': 'ETH',
		'hash': '0x548758e3e4f0cc19edcebce71618e5a7751df2c1efb716834b699c9f4490bed4'
	},
	{
		'id': 52,
		'timestamp': '2021-12-07 10:17:00',
		'yfiAmount': 6.163052,
		'usdValue': 151290.7549,
		'tokenAmount': 151290.7549,
		'token': 'DAI',
		'hash': '0xccbd17070d9fdcf47a2ebdb029254d52db10d9849b8a4ddde74d7afb42cb8446'
	},
	{
		'id': 53,
		'timestamp': '2021-12-07 10:21:00',
		'yfiAmount': 14.505646,
		'usdValue': 327618.7531,
		'tokenAmount': 81.133659,
		'token': 'yvWETH',
		'hash': '0xe6d1b0c8c85a2e10594fd7e7c5489fc0c4c99a4d4af206314e4dd9e8e990492c'
	},
	{
		'id': 54,
		'timestamp': '2021-12-16 1:18:00',
		'yfiAmount': 23.443263,
		'usdValue': 500000,
		'tokenAmount': 500000,
		'token': 'DAI',
		'hash': '0xba35eb20f8f518d4e96b4d1a91be53bf91351df440854518b4052531396ac4eb'
	},
	{
		'id': 55,
		'timestamp': '2021-12-16 1:35:00',
		'yfiAmount': 23.12533,
		'usdValue': 500000,
		'tokenAmount': 500000,
		'token': 'DAI',
		'hash': '0x457912ae031561d17169e532b622ec12e986eb8814464116a5ce23456106ec42'
	},
	{
		'id': 56,
		'timestamp': '2021-12-16 1:48:00',
		'yfiAmount': 30.460991,
		'usdValue': 671678.4858,
		'tokenAmount': 166.21489,
		'token': 'WETH',
		'hash': '0x011f2e930f4deafd4fa24ddd795ea82eefc432096511513b7aca63530a976f50'
	},
	{
		'id': 57,
		'timestamp': '2021-12-16 2:03:00',
		'yfiAmount': 22.546297,
		'usdValue': 500000,
		'tokenAmount': 500000,
		'token': 'DAI',
		'hash': '0x418556005859e0dc0423a45187d150a0d2253ba71adce25e459748ebd7588863'
	},
	{
		'id': 58,
		'timestamp': '2021-12-16 2:13:00',
		'yfiAmount': 22.35744,
		'usdValue': 500000,
		'tokenAmount': 500000,
		'token': 'DAI',
		'hash': '0xb185916e62fd657c1b0540176b7a2b7f80e27125473daa13822b8cd5eca6bd84'
	},
	{
		'id': 59,
		'timestamp': '2022-01-04 18:25:00',
		'yfiAmount': 10,
		'usdValue': 378538.5,
		'tokenAmount': 378538.5,
		'token': 'DAI',
		'hash': '0xdc875dce3ad9b015122dd4e080f57d89e8f602fa31d9ae5948febb155ee25b35'
	},
	{
		'id': 60,
		'timestamp': '2022-01-07 14:21:00',
		'yfiAmount': 10.172341,
		'usdValue': 350000,
		'tokenAmount': 350000,
		'token': 'DAI',
		'hash': '0x654ec708f1af4bb3ec7270e31671dbfebe150105183fc445066ce7466eb89f5c'
	},
	{
		'id': 61,
		'timestamp': '2022-01-07 22:59:00',
		'yfiAmount': 9.837229,
		'usdValue': 350000,
		'tokenAmount': 350000,
		'token': 'DAI',
		'hash': '0xeed7ebb7d7ee0dff205b286a33535336d87cc5eba56779247b8c55327e1573ce'
	},
	{
		'id': 62,
		'timestamp': '2022-01-08 14:39:00',
		'yfiAmount': 13.996478,
		'usdValue': 500000,
		'tokenAmount': 500000,
		'token': 'DAI',
		'hash': '0x03590027bb7650dbf95874061718c26c659d5a177718bac374bba60ffe5ff187'
	},
	{
		'id': 63,
		'timestamp': '2022-01-08 18:05:00',
		'yfiAmount': 9.077947,
		'usdValue': 300000,
		'tokenAmount': 300000,
		'token': 'DAI',
		'hash': '0xc79384b0a7cd4a9fce0013ff90c7a008b7dee25f671d845303fc5866ccd857f9'
	},
	{
		'id': 64,
		'timestamp': '2022-01-10 15:24:00',
		'yfiAmount': 6.317258,
		'usdValue': 200000,
		'tokenAmount': 200000,
		'token': 'DAI',
		'hash': '0xf572e0df958a2382e24470d62cfeb443a1a2b9057dfb79cc1dfead413a74d7bf'
	},
	{
		'id': 65,
		'timestamp': '2022-01-17 14:35:00',
		'yfiAmount': 6.170597,
		'usdValue': 200000,
		'tokenAmount': 200000,
		'token': 'DAI',
		'hash': '0x819aa59dddcd1e6f2ff64625c6b6d2a796f8b28dc3270084600892995953e426'
	},
	{
		'id': 66,
		'timestamp': '2022-01-19 12:42:00',
		'yfiAmount': 6.19481,
		'usdValue': 200000,
		'tokenAmount': 200000,
		'token': 'DAI',
		'hash': '0x62d1dc59b52778530984eb550a634ec5839b0bb166a8aa8b8d8a96b883092f7d'
	},
	{
		'id': 67,
		'timestamp': '2022-01-21 12:29:00',
		'yfiAmount': 6.908614,
		'usdValue': 200000,
		'tokenAmount': 200000,
		'token': 'DAI',
		'hash': '0x0a6b514b750a95ddc71f083077e84dd276bee0b7f87db9f255dc7cf0d8f218d2'
	},
	{
		'id': 68,
		'timestamp': '2022-01-21 13:13:00',
		'yfiAmount': 6.968036,
		'usdValue': 200000,
		'tokenAmount': 200000,
		'token': 'DAI',
		'hash': '0xaea69ad3ff00d7da7805471f65016c4050aa1bdedc05dd8a99c447cb5e592f0c'
	},
	{
		'id': 69,
		'timestamp': '2022-01-22 11:24:00',
		'yfiAmount': 13.178982,
		'usdValue': 300000,
		'tokenAmount': 300000,
		'token': 'USDC',
		'hash': '0x05d8ef1b839342f6e99ca218597a5131d81b63ddd514181d826394c37f1d06fc'
	},
	{
		'id': 70,
		'timestamp': '2022-01-22 11:34:00',
		'yfiAmount': 5.236074,
		'usdValue': 120000,
		'tokenAmount': 120000,
		'token': 'DAI',
		'hash': '0x5267e44fc5ef5146f2e759c4f5688b1d9df3354012ff8de52f12a0a6dd840097'
	}
];
export default dummyData;