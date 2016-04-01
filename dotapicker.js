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
					img: 'http://www.dotabuff.com/' + heroes_bg[i],
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
				'Alchemist',
				'Anti-Mage',
				'Arc Warden',
				'Chaos Knight',
				'Drow Ranger',
				'Ember Spirit',
				'Faceless Void',
				'Gyrocopter',
				'Invoker',
				'Juggernaut',
				'Legion Commander',
				'Lifestealer',
				'Lone Druid',
				'Luna',
				'Lycan',
				'Medusa',
				'Morphling',
				'Naga Siren',
				'Natures Prophet',
				'Outworld Devourer',
				'Phantom Assassin',
				'Queen of Pain',
				'Shadow Fiend',
				'Slark',
				'Sniper',
				'Spectre',
				'Sven',
				'Templar Assassin',
				'Terrorblade',
				'Tiny',
				'Troll Warlord',
				'Ursa',
				'Viper',
				'Weaver',
				'Wraith King'
			];
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
				this.matchups[i] = {heroIndex: i, advantage: 0, winrate: 0, class: ''};
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

	app.AppComponent = ng.core.Component({
		selector: 'app',
		pipes: [app.FilterPipe],
		template: '' +
			'<div class="row">' +
			'	<div class="col-lg-2 col-md-3 col-sm-4 col-xs-5">' +
			'		<div style="overflow-y: auto; position: fixed; height: 100vh; width: 185px;">' +
			'			<div style="margin-top: 15px;">' +
			'				<input type="search" id="filterInput" class="form-control" placeholder="Search" style="width: 157px;" autofocus [(ngModel)]="filterString" *ngIf="!touchBrowser">' +
			'			</div>' +
			'			<ul class="nav nav-pills nav-stacked" style="margin-top: 5px; margin-bottom: 15px; margin-right: 10px;">' +
			'				<li class="nav-item" *ngFor="#hero of heroes | filterHeroes:filterString">' +
			'					<div class="btn-group" role="group">' +
			'						<button type="button" class="btn btn-success" title="Add to my team" (click)="addFriendsSelected(hero)"><i class="fa fa-plus"></i></button>' +
			'						<span class="btn" style="cursor: default; width: 66px; height: 38px; background: url({{hero.img}}); background-size: 66px 38px; vertical-align: bottom; padding-left: 5px; padding-top: 18px;" title="{{hero.name}}"><span style="text-align: left; font-size: 10px; background-color: rgba(32, 32, 32, 0.7);">{{hero.name}}</span></span>' +
			'						<button type="button" class="btn btn-danger" title="Add to enemy team" (click)="addEnemiesSelected(hero)"><i class="fa fa-plus"></i></button>' +
			'					</div>' +
			'				</li>' +
			'			</ul>' +
			'		</div>' +
			'	</div>' +
			'	<div class="col-lg-10 col-md-9 col-sm-8 col-xs-7" [hidden]="enemiesSelected.length < 1 && friendsSelected.length < 1" style="margin-top: 15px; margin-bottom: 15px;">' +
			'		<div class="row">' +
			'			<button class="btn btn-primary center-block" (click)="removeAllSelected()">Clear</button>' +
			'		</div>' +
			'		<br>' +
			'		<div class="row" style="height: {{imageHeight}}px;">' +
			'			<div class="col-md-6 col-xs-12">' +
			'				<div><h6 class="text-danger">Enemy team:</h6></div>' +
			'				<img *ngFor="#hero of enemiesSelected" (click)="removeEnemiesSelected(hero)" src="{{hero.img}}" class="img" width="{{imageWidth}}" title="Click to remove">' +
			'			</div>' +
			'			<div class="col-md-6 col-xs-12">' +
			'				<div><h6 class="text-success">My team:</h6></div>' +
			'				<img *ngFor="#hero of friendsSelected" (click)="removeFriendsSelected(hero)" src="{{hero.img}}" class="img" width="{{imageWidth}}" title="Click to remove">' +
			'			</div>' +
			'		</div>' +
			'		<br>' +
			'		<br>' +
			'		<div class="row">' +
			'			<div class="col-md-4 col-xs-12">' +
			'				<h5 style="text-align: center;">Side/core<span class="hidden-md-down"> heroes</span></h5>' +
			'				<div class="list-group">' +
			'					<div *ngFor="#heroMatchup of coreMatchups" class="list-group-item {{heroMatchup.class}}" style="padding: .5rem .5rem;">' +
			'						<img class="img-rounded" src="{{heroes[heroMatchup.heroIndex].img}}" style="margin-right: 8px;" width="80">' +
			'						<span class="hidden-md-down">{{heroes[heroMatchup.heroIndex].name}}</span>' +
			'						<div class="pull-right">' +
			'							<abbr class="initialism text-right" title="Win rate">{{heroMatchup.winrate.toFixed(2)}}%</abbr>' +
			'							<br>' +
			'							<abbr class="initialism text-right" title="Advantage">{{formatAdvantage(heroMatchup.advantage)}}%</abbr>' +
			'						</div>' +
			'					</div>' +
			'				</div>' +
			'			</div>' +
			'			<div class="col-md-4 col-xs-12">' +
			'				<h5 style="text-align: center;">Mid<span class="hidden-md-down"> heroes</span></h5>' +
			'				<div class="list-group">' +
			'					<div *ngFor="#heroMatchup of midMatchups" class="list-group-item {{heroMatchup.class}}" style="padding: .5rem .5rem;">' +
			'						<img class="img-rounded" src="{{heroes[heroMatchup.heroIndex].img}}" style="margin-right: 8px;" width="80">' +
			'						<span class="hidden-md-down">{{heroes[heroMatchup.heroIndex].name}}</span>' +
			'						<div class="pull-right">' +
			'							<abbr class="initialism text-right" title="Win rate">{{heroMatchup.winrate.toFixed(2)}}%</abbr>' +
			'							<br>' +
			'							<abbr class="initialism text-right" title="Advantage">{{formatAdvantage(heroMatchup.advantage)}}%</abbr>' +
			'						</div>' +
			'					</div>' +
			'				</div>' +
			'			</div>' +
			'			<div class="col-md-4 col-xs-12">' +
			'				<h5 style="text-align: center;">Support<span class="hidden-md-down"> heroes</span></h5>' +
			'				<div class="list-group">' +
			'					<div *ngFor="#heroMatchup of supportMatchups" class="list-group-item {{heroMatchup.class}}" style="padding: .5rem .5rem;">' +
			'						<img class="img-rounded" src="{{heroes[heroMatchup.heroIndex].img}}" style="margin-right: 8px;" width="80">' +
			'						<span class="hidden-md-down">{{heroes[heroMatchup.heroIndex].name}}</span>' +
			'						<div class="pull-right">' +
			'							<abbr class="initialism text-right" title="Win rate">{{heroMatchup.winrate.toFixed(2)}}%</abbr>' +
			'							<br>' +
			'							<abbr class="initialism text-right" title="Advantage">{{formatAdvantage(heroMatchup.advantage)}}%</abbr>' +
			'						</div>' +
			'					</div>' +
			'				</div>' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'	<div class="col-lg-10 col-md-9 col-sm-8 col-xs-7" [hidden]="enemiesSelected.length > 0 || friendsSelected.length > 0" style="margin-top: 15px; margin-bottom: 15px; color: #222;">' +
			'		<div class="jumbotron">' +
			'			<div class="container-fluid">' +
			'				<h1 style="text-align: center;">Dota Team Picker</h1>' +
			'				<h3 style="text-align: center;">by <a href="http://steamcommunity.com/id/richmartel/">NoMercy</a></h3>' +
			'				<br>' +
			'				<h4>What is this?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li>Most apps like this one are referred to as &quot;counter-pickers&quot; for the game <a href="http://blog.dota2.com/">Dota 2</a></li>' +
			'					<li>It is a way to build the best possible team by countering the enemy picks</li>' +
			'					<li>This app also takes teammate combinations into account in order to pick the most effective team</li>' +
			'				</ul>' +
			'				<h4>How to use?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li>When the enemy picks a hero, click the <span class="text-danger">red [+] button</span> to add that hero to the enemy team</li>' +
			'					<li>When a teammate picks a hero, click the <span class="text-success">green [+] button</span> to add that hero to your team</li>' +
			'					<li>You can remove individual heroes by clicking on their images in the team selection area</li>' +
			'					<li>The main matchup area will show the best picks for side/core, mid, and support heroes</li>' +
			'					<li><span class="text-info">Blue = Great picks</span>, <span class="text-success">Green = Good picks</span>, White = Decent picks, <span class="text-warning">Yellow = Possibe bad picks</span>, <span class="text-danger">Red = Very bad picks</span></li>' +
			'				</ul>' +
			'				<h4>Why use this counter-picker over others?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li>Its extremely fast</li>' +
			'					<li>Its the only counter picker I have found that takes the winrate for that hero matchup into account (most counter-pickers only use advantages)</li>' +
			'					<li>It has a unique sorting method that takes both winrates and advantages into account to make sure that the best picks show up at the top</li>' +
			'					<li>Teammate lineup is weighted half as much as enemy lineup in order to make sure that appropriate counters are shown</li>' +
			'					<li>Enemy carries are weighted more than normal heroes so that the counters will be more focused around that carry</li>' +
			'					<li>It highlights good and bad picks to make it easy to notice</li>' +
			'					<li>You can search via the Dota 2 name (Spirit Breaker), the Dota 1 names (Barathrum), or the abbreviations (sb)</li>' +
			'					<li>It works on your tablet or even smartphone (although phone is not recommended)</li>' +
			'				</ul>' +
			'				<h4>How it works?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li>The data used to determine best picks is gathered from <a href="http://www.dotabuff.com/">Dotabuff</a> matchup data, and <a href="http://dotamax.com/">Dotamax</a> teammate data</li>' +
			'					<li>The data is gathered using an external perl script that builds the data import</li>' +
			'					<li>Win rates are averaged based on the heroes picked</li>' +
			'					<li>Advantages are the (average advantage + cumulative advantage) / 2</li>' +
			'				</ul>' +
			'				<h4>Inspiration and history?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li>I initially started playing with an app from onur on github called <a href="http://onur.github.io/DotaBuffCP/">DotabuffCP</a></li>' +
			'					<li>Because I could not make the changed I wanted to onurs app, I re-wrote the app in <a href="https://angular.io/">Angular 2</a> and <a href="http://v4-alpha.getbootstrap.com/">Bootstrap 4</a> so that I could have greater control over the math and sorting</li>' +
			'					<li>I then thought it would be cool to add teammate data, which can only be found on Datamax (chinese focused version of Dotabuff), so I had to jump through some hoops to get the webpage parser to get the correct data</li>' +
			'					<li>After about a weeks worth of work, I finally got everything working properly</li>' +
			'				</ul>' +
			'				<h4>Credits?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li><a href="http://steamcommunity.com/profiles/76561198031077846">Relentless</a> - My teammate, QA tester, and patient friend</li>' +
			'					<li><a href="https://github.com/onur">Onur Aslan</a> - For providing a decent counter picker that others could look at</li>' +
			'					<li><a href="http://www.dotabuff.com/">Dotabuff</a> &amp; <a href="http://dotamax.com/">Dotamax</a> - For providing the data</li>' +
			'					<li><a href="http://www.dota2.com/">Dota 2</a> - For the addictive and highly competitive game</li>' +
			'				</ul>' +
			'				<h4>Interested in contributing?</h4>' +
			'				<ul style="text-shadow: none;">' +
			'					<li><a href="https://github.com/RichMartel/DotaTeamPicker">Github</a> - Feel free to make pull requests for any changes, or send me feature requests</li>' +
			'				</ul>' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>'
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
		},
		formatAdvantage: function(advantage) {
			return (advantage > 0) ? '+' + advantage.toFixed(2) : advantage.toFixed(2)
		}
	});

	document.addEventListener('DOMContentLoaded', function() {
		ng.core.enableProdMode();
		ng.platform.browser.bootstrap(app.AppComponent, [app.HeroService, app.SelectionService]);
	});

})(window.app || (window.app = {}));


