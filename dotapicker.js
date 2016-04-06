(function(app) {

	app.HeroService = ng.core.Class({
		constructor: function() {

			this.heroes = [];
			var namesLookup = [
				{
					name: 'Abaddon',
					altNames: [
						'Lord of Avernus'
					]
				},
				{
					name: 'Alchemist',
					altNames: [
						'Razzil Darkbrew'
					]
				},
				{
					name: 'Ancient Apparition',
					altNames: [
						'Kaldr',
						'aa'
					]
				},
				{
					name: 'Anti-Mage',
					altNames: [
						'Magina',
						'am'
					]
				},
				{
					name: 'Arc Warden',
					altNames: [
						'Zet',
						'aw'
					]
				},
				{
					name: 'Axe',
					altNames: [
						'Mogul Khan'
					]
				},
				{
					name: 'Bane',
					altNames: [
						'Atropos'
					]
				},
				{
					name: 'Batrider',
					altNames: [
						'Jinzakk',
						'br'
					]
				},
				{
					name: 'Beastmaster',
					altNames: [
						'Rexxar',
						'bm'
					]
				},
				{
					name: 'Bloodseeker',
					altNames: [
						'Strygwyr',
						'bs'
					]
				},
				{
					name: 'Bounty Hunter',
					altNames: [
						'Gondar',
						'bh'
					]
				},
				{
					name: 'Brewmaster',
					altNames: [
						'Pandaren',
						'Mangix',
						'bm'
					]
				},
				{
					name: 'Bristleback',
					altNames: [
						'Rigwarl',
						'bb'
					]
				},
				{
					name: 'Broodmother',
					altNames: [
						'Black Archnia',
						'bm'
					]
				},
				{
					name: 'Centaur Warrunner',
					altNames: [
						'Bradwarden',
						'cw'
					]
				},
				{
					name: 'Chaos Knight',
					altNames: [
						'Nessaj',
						'ck'
					]
				},
				{
					name: 'Chen',
					altNames: [
						'Holy Knight'
					]
				},
				{
					name: 'Clinkz',
					altNames: [
						'Bone Fletcher'
					]
				},
				{
					name: 'Clockwerk',
					altNames: [
						'Rattletrap',
						'cw'
					]
				},
				{
					name: 'Crystal Maiden',
					altNames: [
						'Rylai Crestfall',
						'cm'
					]
				},
				{
					name: 'Dark Seer',
					altNames: [
						'Ishkafel',
						'ds'
					]
				},
				{
					name: 'Dazzle',
					altNames: [
						'Shadow Priest'
					]
				},
				{
					name: 'Death Prophet',
					altNames: [
						'Krobelus',
						'dp'
					]
				},
				{
					name: 'Disruptor',
					altNames: [
						'Thrall'
					]
				},
				{
					name: 'Doom',
					altNames: [
						'Lucifer'
					]
				},
				{
					name: 'Dragon Knight',
					altNames: [
						'Davion',
						'dk'
					]
				},
				{
					name: 'Drow Ranger',
					altNames: [
						'Travex',
						'dr'
					]
				},
				{
					name: 'Earth Spirit',
					altNames: [
						'Kaolin',
						'es'
					]
				},
				{
					name: 'Earthshaker',
					altNames: [
						'Raigor Stonehoof',
						'es'
					]
				},
				{
					name: 'Elder Titan',
					altNames: [
						'Tauren Chieftan',
						'Cairne Bloodhoof',
						'et'
					]
				},
				{
					name: 'Ember Spirit',
					altNames: [
						'Xin',
						'es'
					]
				},
				{
					name: 'Enchantress',
					altNames: [
						'Aiushtha',
					]
				},
				{
					name: 'Enigma',
					altNames: [
						'Darchrow'
					]
				},
				{
					name: 'Faceless Void',
					altNames: [
						'Darkterror',
						'fv'
					]
				},
				{
					name: 'Gyrocopter',
					altNames: [
						'Aurel Vlaicu',
						'gc'
					]
				},
				{
					name: 'Huskar',
					altNames: [
						'Sacred Warrior'
					]
				},
				{
					name: 'Invoker',
					altNames: [
						'Kael'
					]
				},
				{
					name: 'Io',
					altNames: [
						'Guardian Wisp'
					]
				},
				{
					name: 'Jakiro',
					altNames: [
						'Twin Head Dragon'
					]
				},
				{
					name: 'Juggernaut',
					altNames: [
						'Yurnero'
					]
				},
				{
					name: 'Keeper of the Light',
					altNames: [
						'Ezalor',
						'kotl'
					]
				},
				{
					name: 'Kunkka',
					altNames: [
						'Admiral'
					]
				},
				{
					name: 'Legion Commander',
					altNames: [
						'Tresdin',
						'lc'
					]
				},
				{
					name: 'Leshrac',
					altNames: [
						'Tormented Soul'
					]
				},
				{
					name: 'Lich',
					altNames: [
						'Kelthuzad'
					]
				},
				{
					name: 'Lifestealer',
					altNames: [
						'Naix',
						'ls'
					]
				},
				{
					name: 'Lina',
					altNames: [
						'Slayer'
					]
				},
				{
					name: 'Lion',
					altNames: [
						'Demon Witch'
					]
				},
				{
					name: 'Lone Druid',
					altNames: [
						'Syllabear',
						'ld'
					]
				},
				{
					name: 'Luna',
					altNames: [
						'Moon Rider'
					]
				},
				{
					name: 'Lycan',
					altNames: [
						'Banehallow'
					]
				},
				{
					name: 'Magnus',
					altNames: [
					]
				},
				{
					name: 'Medusa',
					altNames: [
						'Gorgon'
					]
				},
				{
					name: 'Meepo',
					altNames: [
						'Geomancer'
					]
				},
				{
					name: 'Mirana',
					altNames: [
						'Priestess of the Moon'
					]
				},
				{
					name: 'Morphling',
					altNames: [
					]
				},
				{
					name: 'Naga Siren',
					altNames: [
						'Slithice',
						'ns'
					]
				},
				{
					name: 'Natures Prophet',
					altNames: [
						'Furion',
						'np'
					]
				},
				{
					name: 'Necrophos',
					altNames: [
						'Rotundjere'
					]
				},
				{
					name: 'Night Stalker',
					altNames: [
						'Balanar',
						'ns'
					]
				},
				{
					name: 'Nyx Assassin',
					altNames: [
						'Nerubian',
						'Anubarak',
						'na'
					]
				},
				{
					name: 'Ogre Magi',
					altNames: [
						'Aggron Stonebreaker',
						'om'
					]
				},
				{
					name: 'Omniknight',
					altNames: [
						'Purist Thunderwrath',
						'ok'
					]
				},
				{
					name: 'Oracle',
					altNames: [
						'Nerif'
					]
				},
				{
					name: 'Outworld Devourer',
					altNames: [
						'Obsidian Destroyer',
						'Harbinger',
						'od'
					]
				},
				{
					name: 'Phantom Assassin',
					altNames: [
						'Mortred',
						'pa'
					]
				},
				{
					name: 'Phantom Lancer',
					altNames: [
						'Azwraith',
						'pl'
					]
				},
				{
					name: 'Phoenix',
					altNames: [
						'Icarus'
					]
				},
				{
					name: 'Puck',
					altNames: [
						'Faerie Dragon'
					]
				},
				{
					name: 'Pudge',
					altNames: [
						'Butcher'
					]
				},
				{
					name: 'Pugna',
					altNames: [
						'Oblivion'
					]
				},
				{
					name: 'Queen of Pain',
					altNames: [
						'Akasha',
						'qop'
					]
				},
				{
					name: 'Razor',
					altNames: [
						'Lightning Revenant'
					]
				},
				{
					name: 'Riki',
					altNames: [
						'Stealth Assassin'
					]
				},
				{
					name: 'Rubick',
					altNames: [
						'Grand Magus'
					]
				},
				{
					name: 'Sand King',
					altNames: [
						'Crixalis',
						'sk'
					]
				},
				{
					name: 'Shadow Demon',
					altNames: [
						'Eredar',
						'sd'
					]
				},
				{
					name: 'Shadow Fiend',
					altNames: [
						'Nevermore',
						'sf'
					]
				},
				{
					name: 'Shadow Shaman',
					altNames: [
						'Rhasta',
						'ss'
					]
				},
				{
					name: 'Silencer',
					altNames: [
						'Nortrom'
					]
				},
				{
					name: 'Skywrath Mage',
					altNames: [
						'Dragonus',
						'sm',
					]
				},
				{
					name: 'Slardar',
					altNames: [
						'Slithereen Guard'
					]
				},
				{
					name: 'Slark',
					altNames: [
						'Murloc Nightcrawler'
					]
				},
				{
					name: 'Sniper',
					altNames: [
						'Dwarven',
						'Kardel Sharpeye'
					]
				},
				{
					name: 'Spectre',
					altNames: [
						'Mercurial'
					]
				},
				{
					name: 'Spirit Breaker',
					altNames: [
						'Barathrum',
						'sb'
					]
				},
				{
					name: 'Storm Spirit',
					altNames: [
						'Raijin Thunderkeg',
						'ss'
					]
				},
				{
					name: 'Sven',
					altNames: [
						'Rogue Knight'
					]
				},
				{
					name: 'Techies',
					altNames: [
						'Goblin',
						'Squee Spleen and Spoon'
					]
				},
				{
					name: 'Templar Assassin',
					altNames: [
						'Lanaya',
						'ta'
					]
				},
				{
					name: 'Terrorblade',
					altNames: [
						'Soul Keeper',
						'tb'
					]
				},
				{
					name: 'Tidehunter',
					altNames: [
						'Leviathan',
						'th'
					]
				},
				{
					name: 'Timbersaw',
					altNames: [
						'Goblin Shredder',
						'Rizzrak',
						'ts'
					]
				},
				{
					name: 'Tinker',
					altNames: [
						'Boush'
					]
				},
				{
					name: 'Tiny',
					altNames: [
						'Stone Giant'
					]
				},
				{
					name: 'Treant Protector',
					altNames: [
						'Rooftrellen',
						'tp'
					]
				},
				{
					name: 'Troll Warlord',
					altNames: [
						'Jahrakal',
						'tw'
					]
				},
				{
					name: 'Tusk',
					altNames: [
						'Ymir'
					]
				},
				{
					name: 'Undying',
					altNames: [
						'Dirge'
					]
				},
				{
					name: 'Ursa',
					altNames: [
						'Ulfsaar'
					]
				},
				{
					name: 'Vengeful Spirit',
					altNames: [
						'Shendelzare Silkwood',
						'vs'
					]
				},
				{
					name: 'Venomancer',
					altNames: [
						'Lesale Deathbringer'
					]
				},
				{
					name: 'Viper',
					altNames: [
						'Netherdrake'
					]
				},
				{
					name: 'Visage',
					altNames: [
						'Necrolic'
					]
				},
				{
					name: 'Warlock',
					altNames: [
						'Demnok Lannik'
					]
				},
				{
					name: 'Weaver',
					altNames: [
						'Nerubian',
						'Anubseran'
					]
				},
				{
					name: 'Windranger',
					altNames: [
						'Alleria',
						'wr'
					]
				},
				{
					name: 'Winter Wyvern',
					altNames: [
						'Auroth',
						'ww'
					]
				},
				{
					name: 'Witch Doctor',
					altNames: [
						'Voljin',
						'wd'
					]
				},
				{
					name: 'Wraith King',
					altNames: [
						'Skeleton',
						'Leoric',
						'wk'
					]
				},
				{
					name: 'Zeus',
					altNames: [
						'Lord of Olympus'
					]
				}
			];
			for (var i = 0; i < heroes.length; i++) {
				var altNames = [];
				if (heroes[i] = namesLookup[i].name) {
					altNames = namesLookup[i].altNames;
				}
				this.heroes[i] = {
					heroIndex: i,
					name: heroes[i],
					altNames: altNames,
					img: 'http://www.dotabuff.com' + heroes_bg[i],
					winrate: parseFloat(heroes_wr[i]),
					enemyMatchups: win_rates[i],
					friendMatchups: friend_win_rates[i]
				}
			}
		},
		get: function() {
			return this.heroes;
		}
	});

	app.SelectionService = ng.core.Class({
		constructor: [app.HeroService, function(heroService) {
			this.heroes = heroService.get();
			this.enemiesSelected = [];
			this.friendsSelected = [];
			this.matchups = [];
			this.coreMatchups = [];
			this.supportMatchups = [];
			this.midMatchups = [];
			this.supportHeroes = [
				'Ancient Apparition',
				'Bane',
				'Chen',
				'Crystal Maiden',
				'Dazzle',
				'Disruptor',
				'Earthshaker',
				'Io',
				'Jakiro',
				'Keeper of the Light',
				'Lich',
				'Lion',
				'Ogre Magi',
				'Omniknight',
				'Oracle',
				'Rubick',
				'Shadow Demon',
				'Shadow Shaman',
				'Skywrath Mage',
				'Treant Protector',
				'Vengeful Spirit',
				'Warlock',
				'Winter Wyvern',
				'Witch Doctor'
			];
			this.midHeroes = [
				'Alchemist',
				'Death Prophet',
				'Dragon Knight',
				'Ember Spirit',
				'Invoker',
				'Leshrac',
				'Lina',
				'Outworld Devourer',
				'Puck',
				'Pudge',
				'Queen of Pain',
				'Razor',
				'Shadow Fiend',
				'Storm Spirit',
				'Templar Assassin',
				'Tinker',
				'Viper',
				'Windranger',
				'Zeus'
			];
			this.carryHeroes = [
				'Anti-Mage',
				'Arc Warden',
				'Chaos Knight',
				'Drow Ranger',
				'Ember Spirit',
				'Faceless Void',
				'Gyrocopter',
				'Invoker',
				'Legion Commander',
				'Luna',
				'Medusa',
				'Morphling',
				'Naga Siren',
				'Outworld Devourer',
				'Phantom Assassin',
				'Sniper',
				'Spectre',
				'Sven',
				'Terrorblade',
				'Tiny',
				'Troll Warlord',
				'Ursa'
			];
			this.jungleHeroes = [
				'Bloodseeker',
				'Chen',
				'Enigma',
				'Legion Commander',
				'Lifestealer',
				'Lycan',
				'Natures Prophet',
				'Sand King'
			]
		}],
		getEnemiesSelected: function() {
			return this.enemiesSelected;
		},
		getFriendsSelected: function() {
			return this.friendsSelected;
		},
		addEnemiesSelected: function(hero) {
			this.enemiesSelected.push(hero);
			this.calcMatchups();
		},
		addFriendsSelected: function(hero) {
			this.friendsSelected.push(hero);
			this.calcMatchups();
		},
		removeEnemiesSelected: function(hero) {
			for (var i = 0; i < this.enemiesSelected.length; i++) {
				if (hero === this.enemiesSelected[i]) {
					this.enemiesSelected.splice(i, 1);
					this.calcMatchups();
				}
			}
		},
		removeFriendsSelected: function(hero) {
			for (var i = 0; i < this.friendsSelected.length; i++) {
				if (hero === this.friendsSelected[i]) {
					this.friendsSelected.splice(i, 1);
					this.calcMatchups();
				}
			}
		},
		removeAllSelected: function() {
			this.enemiesSelected.splice(0, this.enemiesSelected.length);
			this.friendsSelected.splice(0, this.friendsSelected.length);
		},
		getCoreMatchups: function() {
			return this.coreMatchups;
		},
		getSupportMatchups: function() {
			return this.supportMatchups;
		},
		getMidMatchups: function() {
			return this.midMatchups;
		},
		calcMatchups: function() {
			this.matchups = [];
			this.coreMatchups = [];
			this.supportMatchups = [];
			this.midMatchups = [];
			for (var i = 0; i < this.heroes.length; i++) {
				this.matchups[i] = {heroIndex: i, advantage: 0, winrate: 0, class: '', heroType: ''};
			}
			// Add advantages and winrates
			for (i = 0; i < this.enemiesSelected.length; i++) {
				var multiplier = 1;
				for (var c = 0; c < this.carryHeroes.length; c++) {
					if (this.carryHeroes[c] === this.enemiesSelected[i].name) {
						multiplier = 1.5;
					}
				}
				for (var m = 0; m < this.enemiesSelected[i].enemyMatchups.length; m++) {
					if (this.enemiesSelected[i].enemyMatchups[m]) {
						this.matchups[m].advantage += -(parseFloat(this.enemiesSelected[i].enemyMatchups[m][0])) * multiplier;
						this.matchups[m].winrate += 100 - (((parseFloat(this.enemiesSelected[i].enemyMatchups[m][1]) - 50) * multiplier) + 50);
					}
				}

			}
			for (i = 0; i < this.friendsSelected.length; i++) {
				for (m = 0; m < this.friendsSelected[i].friendMatchups.length; m++) {
					if (this.friendsSelected[i].friendMatchups[m]) {
						this.matchups[m].advantage += (parseFloat(this.friendsSelected[i].friendMatchups[m][0])) / 2;
						this.matchups[m].winrate += ((parseFloat(this.friendsSelected[i].friendMatchups[m][1]) - 50) / 2) + 50;
					}
				}

			}
			// Remove hero matchups that are in my team or enemy team
			for (i = 0; i < this.matchups.length; i++) {
				for (var s = 0; s < this.enemiesSelected.length; s++) {
					if (this.matchups[i].heroIndex === this.enemiesSelected[s].heroIndex) {
						this.matchups.splice(i, 1);
						if (i > 0) {
							i--;
						}
					}
				}
				for (s = 0; s < this.friendsSelected.length; s++) {
					if (this.matchups[i].heroIndex === this.friendsSelected[s].heroIndex) {
						this.matchups.splice(i, 1);
						if (i > 0) {
							i--;
						}
					}
				}
			}
			// Average advantages and winrates
			for (i = 0; i < this.matchups.length; i++) {
				this.matchups[i].advantage = (this.matchups[i].advantage + (this.matchups[i].advantage / (this.enemiesSelected.length + (this.friendsSelected.length * .85)))) / 2;
				this.matchups[i].winrate = this.matchups[i].winrate / (this.enemiesSelected.length + (this.friendsSelected.length * .85));
				// Add bootstrap list-item styling (blue = great, green = good, yellow = possible bad, red = bad)
				if (this.matchups[i].winrate > 55) {
					this.matchups[i].class = 'list-group-item-success';
				}
				if ((this.matchups[i].advantage > 2 && this.matchups[i].winrate > 55) ||
					(this.matchups[i].advantage > 1 && this.matchups[i].winrate > 60) ||
					(this.matchups[i].advantage > 0 && this.matchups[i].winrate > 65)) {
					this.matchups[i].class = 'list-group-item-info';
				}
				if (this.matchups[i].advantage < 0 || this.matchups[i].winrate < 50) {
					this.matchups[i].class = 'list-group-item-warning';
				}
				if (this.matchups[i].advantage < 0 && this.matchups[i].winrate < 50) {
					this.matchups[i].class = 'list-group-item-danger';
				}
				for (c = 0; c < this.carryHeroes.length; c++) {
					if (this.carryHeroes[c] === this.heroes[this.matchups[i].heroIndex].name) {
						this.matchups[i].heroType += 'C';
					}
				}
				for (var j = 0; j < this.jungleHeroes.length; j++) {
					if (this.jungleHeroes[j] === this.heroes[this.matchups[i].heroIndex].name) {
						this.matchups[i].heroType += 'J';
					}
				}
			}
			// Sort using both advantage and winrate
			this.matchups.sort(function(a, b) {
				if (b.winrate > 50 && a.winrate < 50) {
					return 1;
				}
				else if (b.winrate < 50 && a.winrate > 50) {
					return -1;
				}
				else {
					return (b.advantage + ((b.winrate - 50) / 2)) - (a.advantage + ((a.winrate - 50) / 2));
				}
			});
			// Create core, mid, & support matchup lists
			for (i = 0; i < this.matchups.length; i++) {
				var alreadyAdded = false;
				for (var n = 0; n < this.midHeroes.length; n++) {
					if (this.heroes[this.matchups[i].heroIndex].name === this.midHeroes[n]) {
						this.midMatchups.push(this.matchups[i]);
						alreadyAdded = true;
					}
				}
				for (var n = 0; n < this.supportHeroes.length; n++) {
					if (this.heroes[this.matchups[i].heroIndex].name === this.supportHeroes[n]) {
						this.supportMatchups.push(this.matchups[i]);
						alreadyAdded = true;
					}
				}
				if (!alreadyAdded) {
					this.coreMatchups.push(this.matchups[i]);
				}
			}
		}
	});

	app.FilterPipe = ng.core.Pipe({
		name: 'filterHeroes'
	})
	.Class({
		constructor: function () {
		},
		transform: function (array, filterString) {
			var substring = filterString.toString().toLowerCase();
			return array.filter(function (item) {
				var found = (item.name.toLowerCase().indexOf(substring) > -1);
				for (var i = 0; i < item.altNames.length; i++) {
					if (item.altNames[i].toLowerCase().indexOf(substring) > -1) {
						found = true;
					}
				}
				return found;
			})
		}
	});

	app.MatchupComponent = ng.core.Component({
		selector: 'dp-matchup',
		inputs: ['heroMatchup'],
		templateUrl: 'matchup.html'
	})
	.Class({
		constructor: [app.HeroService, function(heroService) {
			this.heroes = heroService.get();
		}],
		formatAdvantage: function(advantage) {
			return (advantage > 0) ? '+' + advantage.toFixed(2) : advantage.toFixed(2)
		}
	});

	app.AppComponent = ng.core.Component({
		selector: 'dp-app',
		pipes: [app.FilterPipe],
		directives: [app.MatchupComponent],
		templateUrl: 'dotapicker.html'
	})
	.Class({
		constructor: [app.HeroService, app.SelectionService, function(heroService, selectionService) {
			this.selectionService = selectionService;
			this.heroes = heroService.get();
			this.filterString = '';
			this.enemiesSelected = selectionService.getEnemiesSelected();
			this.friendsSelected = selectionService.getFriendsSelected();
			this.coreMatchups = [];
			this.supportMatchups = [];
			this.midMatchups = [];
			this.imageWidth = (window.innerWidth/18 < 100) ? window.innerWidth/18 : 100;
			if (window.innerWidth < 544) {
				this.imageWidth = 40
			}
			this.imageHeight = this.imageWidth * .56
			this.touchBrowser = false;
			if ('ontouchstart' in document.documentElement) {
				this.touchBrowser = true;
			}
		}],
		addEnemiesSelected: function(hero) {
			if (this.enemiesSelected.length < 5) {
				var found = false;
				for (i = 0; i < this.enemiesSelected.length; i++) {
					if (hero === this.enemiesSelected[i]) {
						found = true;
					}
				}
				for (i = 0; i < this.friendsSelected.length; i++) {
					if (hero === this.friendsSelected[i]) {
						found = true;
					}
				}
				if (!found) {
					this.selectionService.addEnemiesSelected(hero);
					this.coreMatchups = this.selectionService.getCoreMatchups();
					this.supportMatchups = this.selectionService.getSupportMatchups();
					this.midMatchups = this.selectionService.getMidMatchups();
				}
				window.scrollTo(0, 0);
				if (!this.touchBrowser) {
					this.filterString = '';
					document.getElementById("filterInput").focus();
				}
			}
		},
		addFriendsSelected: function(hero) {
			if (this.friendsSelected.length < 4) {
				var found = false;
				for (i = 0; i < this.enemiesSelected.length; i++) {
					if (hero === this.enemiesSelected[i]) {
						found = true;
					}
				}
				for (i = 0; i < this.friendsSelected.length; i++) {
					if (hero === this.friendsSelected[i]) {
						found = true;
					}
				}
				if (!found) {
					this.selectionService.addFriendsSelected(hero);
					this.coreMatchups = this.selectionService.getCoreMatchups();
					this.supportMatchups = this.selectionService.getSupportMatchups();
					this.midMatchups = this.selectionService.getMidMatchups();
				}
				window.scrollTo(0, 0);
				if (!this.touchBrowser) {
					this.filterString = '';
					document.getElementById("filterInput").focus();
				}
			}
		},
		removeEnemiesSelected: function(hero) {
			this.selectionService.removeEnemiesSelected(hero);
			this.coreMatchups = this.selectionService.getCoreMatchups();
			this.supportMatchups = this.selectionService.getSupportMatchups();
			this.midMatchups = this.selectionService.getMidMatchups();
		},
		removeFriendsSelected: function(hero) {
			this.selectionService.removeFriendsSelected(hero);
			this.coreMatchups = this.selectionService.getCoreMatchups();
			this.supportMatchups = this.selectionService.getSupportMatchups();
			this.midMatchups = this.selectionService.getMidMatchups();
		},
		removeAllSelected: function() {
			this.selectionService.removeAllSelected();
			this.coreMatchups = [];
			this.supportMatchups = [];
			this.midMatchups = [];
		}
	});

	document.addEventListener('DOMContentLoaded', function() {
		ng.core.enableProdMode();
		ng.platform.browser.bootstrap(app.AppComponent, [app.HeroService, app.SelectionService]);
	});

})(window.app || (window.app = {}));


