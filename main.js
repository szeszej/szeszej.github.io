(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1ZF":
/*!************************************************!*\
  !*** ./src/app/opponent/opponent.component.ts ***!
  \************************************************/
/*! exports provided: OpponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentComponent", function() { return OpponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _opponent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opponent.service */ "3jE/");
/* harmony import */ var _opponent_hand_opponent_hand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opponent-hand/opponent-hand.component */ "+R9O");
/* harmony import */ var _opponent_deck_opponent_deck_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opponent-deck/opponent-deck.component */ "wGFD");




class OpponentComponent {
    constructor(opponentService) {
        this.opponentService = opponentService;
        this.oppHandSize = [1, 1, 1, 1];
        this.oppDeckSize = 36;
        this.opponentService.oppDeckSizeEmitter.subscribe(oppDeckSize => this.oppDeckSize = oppDeckSize);
        this.opponentService.oppHandSizeEmitter.subscribe(oppHandSize => this.oppHandSize = Array(oppHandSize).fill(1));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.opponentService.oppDeckSizeEmitter.unsubscribe();
        this.opponentService.oppHandSizeEmitter.unsubscribe();
    }
}
OpponentComponent.ɵfac = function OpponentComponent_Factory(t) { return new (t || OpponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_opponent_service__WEBPACK_IMPORTED_MODULE_1__["OpponentService"])); };
OpponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentComponent, selectors: [["app-opponent"]], decls: 2, vars: 2, consts: [[3, "oppHandSize"], [3, "oppDeckSize"]], template: function OpponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-opponent-hand", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-opponent-deck", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oppHandSize", ctx.oppHandSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oppDeckSize", ctx.oppDeckSize);
    } }, directives: [_opponent_hand_opponent_hand_component__WEBPACK_IMPORTED_MODULE_2__["OpponentHandComponent"], _opponent_deck_opponent_deck_component__WEBPACK_IMPORTED_MODULE_3__["OpponentDeckComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: opponent;\r\n  display: grid;\r\n  grid-template-areas: \"buttons hand deck\";\r\n  grid-template-columns: 15vw 70vw 15vw;\r\n  grid-template-rows: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxxQ0FBcUM7RUFDckMsd0JBQXdCO0FBQzFCIiwiZmlsZSI6Im9wcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBvcHBvbmVudDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYnV0dG9ucyBoYW5kIGRlY2tcIjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1dncgNzB2dyAxNXZ3O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "+R9O":
/*!*******************************************************************!*\
  !*** ./src/app/opponent/opponent-hand/opponent-hand.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpponentHandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentHandComponent", function() { return OpponentHandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function OpponentHandComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.calculateRotation(i_r2));
} }
class OpponentHandComponent {
    constructor() { }
    ngOnInit() {
    }
    calculateRotation(index) {
        let steps = 90 / this.oppHandSize.length;
        return { transform: `rotate(${45 - steps * index}deg)` };
    }
}
OpponentHandComponent.ɵfac = function OpponentHandComponent_Factory(t) { return new (t || OpponentHandComponent)(); };
OpponentHandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentHandComponent, selectors: [["app-opponent-hand"]], inputs: { oppHandSize: "oppHandSize" }, decls: 1, vars: 1, consts: [["class", "card", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "card", 3, "ngStyle"]], template: function OpponentHandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OpponentHandComponent_div_0_Template, 1, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.oppHandSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: hand;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  background-image: url(\"/assets/images/logo/logoinv.png\");\r\n  background-size: 80%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LWhhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0RBQXdEO0VBQ3hELG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCIiwiZmlsZSI6Im9wcG9uZW50LWhhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IGhhbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb2ludi5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "+bcQ":
/*!*******************************!*\
  !*** ./src/app/data/cards.ts ***!
  \*******************************/
/*! exports provided: tokens, cards, deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokens", function() { return tokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deck", function() { return deck; });
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/card/card.model */ "mIaL");

const tokens = {
    bandit: {
        name: 'Bandyta',
        attack: 1,
        hp: 1,
        cost: 1,
        description: 'Pieniądze albo życie.',
        type: 'ally',
        speed: 1,
    },
    zombie: {
        name: 'Zombi',
        attack: 2,
        hp: 2,
        cost: 2,
        description: 'Móóóózgi!',
        type: 'ally',
        speed: 1,
    },
    hound: {
        name: 'Ogar',
        attack: 3,
        hp: 3,
        cost: 3,
        description: 'Hau, hau!',
        type: 'ally',
        speed: 1,
    },
    ashes: {
        name: 'Prochy',
        attack: 0,
        hp: 1,
        cost: 1,
        description: 'Co z nich się wykluje?',
        type: 'ally',
        speed: 1,
        rules: 'Śmierć: Feniks odradza się.',
        effect: {
            type: 'summon',
            target: 'self',
            card: new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"]({
                name: 'Odrodzony Feniks',
                attack: 7,
                hp: 7,
                cost: 8,
                description: 'Z prochu powstałeś...',
                type: 'ally',
                speed: 2,
            }),
            timing: 'death',
        },
    },
};
const cards = {
    taernianPeasant: {
        name: 'Taernijski Wieśniak',
        attack: 1,
        hp: 1,
        cost: 1,
        description: 'Łapaj samogon.',
        type: 'ally',
        speed: 1,
        rules: 'Zagranie: Dobierz kartę',
        effect: {
            type: 'draw',
            amount: 1,
            timing: 'play',
            target: 'player',
        },
    },
    taernianKnight: {
        name: 'Taernijski Rycerz',
        attack: 2,
        hp: 3,
        cost: 3,
        description: 'Po prostu Rycerz',
        type: 'ally',
        speed: 1,
    },
    taernianBarbarian: {
        name: 'Taernijski Barbarzyńca',
        attack: 3,
        hp: 1,
        cost: 3,
        description: 'Wali mocno aż miło',
        rules: 'Atakuje również pole powyżej swojego rzędu.',
        type: 'ally',
        speed: 1,
        effect: {
            type: 'damage',
            timing: 'attack',
            amount: -1,
            target: 'enemyUpRow',
        },
    },
    taernianFiremage: {
        name: 'Taernijski Mag Ognia',
        attack: 4,
        hp: 2,
        cost: 4,
        description: 'Strzeż się ognia',
        rules: 'Atak: Zadaje 2 obrażeń wrogiemu sojusznikowi rząd niżej.',
        type: 'ally',
        speed: 2,
        effect: {
            type: 'damage',
            timing: 'attack',
            amount: 2,
            target: 'enemyDownRow',
        },
    },
    taernianArcher: {
        name: 'Taernijski Łucznik',
        attack: 2,
        hp: 2,
        cost: 2,
        description: 'Salwa!',
        type: 'ally',
        speed: 2,
    },
    taernianDruid: {
        name: 'Taernijski Druid',
        attack: 1,
        hp: 6,
        cost: 4,
        description: 'Za naturę!',
        rules: 'Atak: Przywraca życie graczowi równe swojemu atakowi.',
        type: 'ally',
        speed: 3,
        effect: {
            type: 'healing',
            target: 'player',
            timing: 'attack',
            amount: -1,
        },
    },
    taernianVoodoo: {
        name: 'Taernijski Voodoo',
        attack: 2,
        hp: 1,
        cost: 4,
        description: 'Szpila w oko!',
        type: 'ally',
        speed: 3,
    },
    battleOgre: {
        name: 'Ogr Bojowy',
        attack: 5,
        hp: 5,
        cost: 5,
        description: 'Waaargh!',
        type: 'ally',
        speed: 1,
    },
    harpy: {
        name: 'Harpia',
        attack: 3,
        hp: 7,
        cost: 5,
        description: 'Łiii!',
        type: 'ally',
        speed: 2,
    },
    frog: {
        name: 'Żaba',
        attack: 3,
        hp: 3,
        cost: 4,
        description: 'Skrzek!',
        type: 'ally',
        speed: 2,
    },
    librarian: {
        name: 'Bibliotekarz',
        attack: 5,
        hp: 8,
        cost: 8,
        description: 'Cisza!',
        type: 'ally',
        speed: 3,
        named: true,
    },
    babadek: {
        name: 'Babadek',
        attack: 7,
        hp: 7,
        cost: 10,
        description: 'Gdzie moje psy?',
        type: 'ally',
        speed: 1,
        rules: `Przebicie.
    Odkrycie: Przyzywa 3/3/wręcz Ogary na wolne przyjazne pola.`,
        effect: {
            type: 'summon',
            target: 'playerAllies',
            card: new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](tokens.hound),
            timing: 'reveal',
        },
        named: true,
        abilities: ['trample'],
    },
    ghadira: {
        name: 'Ghadira',
        attack: 10,
        hp: 7,
        cost: 9,
        description: 'Kto wchodzi do mojej wieży?',
        type: 'ally',
        speed: 1,
        rules: `Przebicie.
    Odkrycie: Osłabia przeciwnika w tym samym rzędzie o 4.`,
        effect: {
            type: 'weaken',
            target: 'sameRow',
            amount: 4,
            timing: 'reveal',
        },
        named: true,
        abilities: ['trample'],
    },
    gregorius: {
        name: 'Gregorius',
        attack: 4,
        hp: 6,
        cost: 7,
        description: "Czy nie wyglądam jak ten typ z Gun'n'Roses?",
        type: 'ally',
        speed: 3,
        named: true,
    },
    toad: {
        name: 'Ropuch',
        attack: 6,
        hp: 10,
        cost: 8,
        description: 'Czy to książę?',
        type: 'ally',
        speed: 2,
        named: true,
        effect: {
            type: "damage",
            amount: 1,
            target: "oppAllies",
            timing: "combat"
        }
    },
    wolf: {
        name: 'Wilk',
        attack: 3,
        hp: 2,
        cost: 2,
        description: 'To nie miś.',
        type: 'ally',
        speed: 1,
    },
    utorianAssassin: {
        name: 'Utorski Asasyn',
        attack: 6,
        hp: 1,
        cost: 4,
        description: 'Jak się go złapie to jest frajer.',
        type: 'ally',
        speed: 1,
    },
    taernianShieldman: {
        name: 'Taernijski Tarczownik',
        attack: 2,
        hp: 10,
        cost: 6,
        description: 'I co mu zrobisz?',
        type: 'ally',
        speed: 1,
        rules: 'Walka: Leczy się za 2.',
        effect: {
            type: 'healing',
            target: 'self',
            amount: 2,
            timing: 'combat',
        },
    },
    taernianCrossbowman: {
        name: 'Taernijski Kusznik',
        attack: 5,
        hp: 3,
        cost: 5,
        description: 'Wali mocniej niż z łuku.',
        type: 'ally',
        speed: 2,
    },
    utorianOgre: {
        name: 'Utorski Ogr',
        attack: 12,
        hp: 12,
        cost: 12,
        description: 'Chodząca twierdza.',
        type: 'ally',
        speed: 1,
    },
    chieftain: {
        name: 'Herszt',
        attack: 4,
        hp: 6,
        cost: 5,
        description: 'Do mnie!',
        type: 'ally',
        speed: 1,
        rules: 'Walka: Przyzywa 1/1/wręcz Bandytów na wolne przyjazne pola.',
        effect: {
            type: 'summon',
            card: new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](tokens.bandit),
            timing: 'combat',
            target: 'playerAllies',
        },
        named: true,
    },
    accursedPeasant: {
        name: 'Przeklęty Wieśniak',
        attack: 1,
        hp: 1,
        cost: 2,
        description: 'Coś mię nie tego!',
        type: 'ally',
        speed: 1,
        rules: 'Śmierć: Przyzywa 2/2/wręcz Zombie na swoje miejsce.',
        effect: {
            type: 'summon',
            card: new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](tokens.zombie),
            timing: 'death',
            target: 'self',
        },
    },
    garthmog: {
        name: 'Garthmog',
        attack: 4,
        hp: 8,
        cost: 8,
        description: 'Słyszysz tylko grzechot kości.',
        type: 'ally',
        speed: 3,
        rules: 'Odkrycie: Zadaje 2 obrażeń wszystkim wrogom.',
        effect: {
            type: 'damage',
            amount: 2,
            timing: 'reveal',
            target: ['oppAllies', 'opponent'],
        },
        named: true,
    },
    healer: {
        name: 'Uzdrowiciel',
        attack: 1,
        hp: 4,
        cost: 4,
        description: 'Leczenie grupowe raz!',
        type: 'ally',
        speed: 3,
        rules: 'Zagranie: Leczy 2 obrażeń wszystkim przyjaznym sojusznikom.',
        effect: {
            type: 'healing',
            amount: 2,
            timing: 'play',
            target: 'playerAllies',
        },
    },
    stormMage: {
        name: 'Mag Burz',
        attack: 1,
        hp: 3,
        cost: 4,
        description: 'Niech rozpęta się piekło!',
        type: 'ally',
        speed: 2,
        rules: 'Atakuje również rząd powyżej i poniżej swojej pozycji.',
        effect: {
            type: 'damage',
            amount: -1,
            timing: 'attack',
            target: ['enemyUpRow', 'enemyDownRow'],
        },
    },
    voodooWeakener: {
        name: 'Voodoo Osłabiacz',
        attack: 1,
        hp: 2,
        cost: 5,
        description: 'Spróbuj wywaru!',
        type: 'ally',
        speed: 3,
        rules: 'Odkrycie: Osłabia wrogich sojuszników o 2.',
        effect: {
            type: 'weaken',
            target: 'oppAllies',
            amount: 2,
            timing: 'reveal',
        },
    },
    standardbearer: {
        name: 'Chorąży',
        attack: 1,
        hp: 1,
        cost: 4,
        description: 'Do mnie!',
        type: 'ally',
        speed: 3,
        rules: 'Odkrycie: Zwiększa siłę pozostałych przyjaznych sojuszników o 2.',
        effect: {
            type: 'strengthen',
            target: 'otherPlayerAllies',
            amount: 2,
            timing: 'reveal',
        },
    },
    obelisk: {
        name: 'Monolit Wiedzy',
        attack: 0,
        hp: 5,
        cost: 5,
        description: 'Ommm! Ommm! Ommm!',
        type: 'ally',
        speed: 3,
        rules: 'Koniec tury: Dobierz kartę.',
        effect: {
            type: 'draw',
            target: 'player',
            amount: 1,
            timing: 'eot',
        },
    },
    explodingBarrel: {
        name: 'Beczka z Prochem',
        attack: 0,
        hp: 4,
        cost: 4,
        description: 'Kabum!',
        type: 'ally',
        speed: 3,
        rules: 'Śmierć: Zadaj WSZYSTKIM sojusznikom 4 obrażeń.',
        effect: {
            type: 'damage',
            target: ['playerAllies', 'oppAllies'],
            amount: 4,
            timing: 'death',
        },
    },
    phoenix: {
        name: 'Feniks',
        attack: 7,
        hp: 7,
        cost: 8,
        description: 'Wraca z popiołów!',
        type: 'ally',
        speed: 2,
        rules: 'Śmierć: Zamienia się w popiół, z którego jednorazowo się odradza.',
        effect: {
            type: 'summon',
            target: 'self',
            card: new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](tokens.ashes),
            timing: 'death',
        },
    },
    sergeant: {
        name: 'Taernijski Sierżant',
        attack: 1,
        hp: 1,
        cost: 2,
        description: 'Wykonać!',
        type: 'ally',
        speed: 1,
        rules: 'Zagranie: Dodaje 2 ataku przyjaznemu sojusznikowi w rzędzie poniżej.',
        effect: {
            type: 'strengthen',
            target: 'friendlyDownRow',
            timing: 'play',
            amount: 2,
        },
    },
    acceleratingArcher: {
        name: 'Szybkostrzelny Łucznik',
        attack: 1,
        hp: 1,
        cost: 3,
        description: 'Coraz bardziej się rozkręca.',
        type: 'ally',
        speed: 2,
        rules: 'Koniec tury: Dodaje sobie 1 ataku.',
        effect: {
            type: 'strengthen',
            target: 'self',
            timing: 'eot',
            amount: 1,
        },
    },
    taernianSheed: {
        name: 'Taernijski Sheed',
        attack: 1,
        hp: 1,
        cost: 3,
        description: 'Polepsza kontrolę oddechu.',
        type: 'ally',
        speed: 1,
        rules: 'Zagranie: Dodaje 1 do maksymalnych punktów akcji.',
        effect: {
            type: 'ramp',
            target: 'player',
            timing: 'play',
            amount: 1,
        },
    },
};
const deck = [
    cards.taernianPeasant,
    cards.taernianPeasant,
    cards.taernianKnight,
    cards.taernianKnight,
    cards.taernianArcher,
    cards.taernianArcher,
    cards.obelisk,
    cards.taernianFiremage,
    cards.explodingBarrel,
    cards.taernianBarbarian,
    cards.taernianSheed,
    cards.taernianDruid,
    cards.acceleratingArcher,
    cards.taernianVoodoo,
    cards.frog,
    cards.frog,
    cards.standardbearer,
    cards.battleOgre,
    cards.phoenix,
    cards.harpy,
    cards.sergeant,
    cards.wolf,
    cards.librarian,
    cards.babadek,
    cards.ghadira,
    cards.gregorius,
    cards.chieftain,
    cards.healer,
    cards.utorianOgre,
    cards.stormMage,
    cards.stormMage,
    cards.garthmog,
    cards.accursedPeasant,
    cards.accursedPeasant,
    cards.voodooWeakener,
    cards.toad,
    cards.taernianShieldman,
    cards.taernianShieldman,
    cards.taernianCrossbowman,
    cards.taernianCrossbowman,
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Olga\Desktop\taern\taern-card\src\main.ts */"zUnb");


/***/ }),

/***/ "0M9o":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deck_deck_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck/deck.component */ "i3Jn");
/* harmony import */ var _hand_hand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hand/hand.component */ "0gTY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _action_points_action_points_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-points/action-points.component */ "mYRN");





class PlayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 3, vars: 0, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hand", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-action-points");
    } }, directives: [_deck_deck_component__WEBPACK_IMPORTED_MODULE_1__["DeckComponent"], _hand_hand_component__WEBPACK_IMPORTED_MODULE_2__["HandComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _action_points_action_points_component__WEBPACK_IMPORTED_MODULE_4__["ActionPointsComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: player;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-areas: \"deck hand action-points\";\r\n  grid-template-columns: 15vw 70vw 15vw;\r\n  grid-template-rows: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLHFDQUFxQztFQUNyQyx3QkFBd0I7QUFDMUIiLCJmaWxlIjoicGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZGVjayBoYW5kIGFjdGlvbi1wb2ludHNcIjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1dncgNzB2dyAxNXZ3O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "0gTY":
/*!***********************************************!*\
  !*** ./src/app/player/hand/hand.component.ts ***!
  \***********************************************/
/*! exports provided: HandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandComponent", function() { return HandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hand.service */ "THtM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");





const _c0 = function (a0, a1) { return { card: a0, index: a1 }; };
function HandComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, card_r1, i_r2));
} }
class HandComponent {
    constructor(handService) {
        this.handService = handService;
        this.cards = [];
        this.handService.handSubject.subscribe(data => this.cards = data);
    }
    ngOnInit() {
        this.handService.drawCards(4);
    }
    ngOnDestroy() {
        this.handService.handSubject.unsubscribe();
    }
}
HandComponent.ɵfac = function HandComponent_Factory(t) { return new (t || HandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hand_service__WEBPACK_IMPORTED_MODULE_1__["HandService"])); };
HandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandComponent, selectors: [["app-hand"]], decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "card", "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "card", "cdkDragData"]], template: function HandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HandComponent_app_card_0_Template, 1, 5, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: hand;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJoYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBoYW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "3jE/":
/*!**********************************************!*\
  !*** ./src/app/opponent/opponent.service.ts ***!
  \**********************************************/
/*! exports provided: OpponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentService", function() { return OpponentService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OpponentService {
    constructor() {
        this.oppDeckSize = 36;
        this.oppHandSize = 4;
        this.oppHp = 30;
        this.oppHpEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.oppHandSizeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.oppDeckSizeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getOppHp() {
        return this.oppHp;
    }
    changeOppHp(number) {
        console.log(`Życie przeciwnika zmienia się z ${this.oppHp} na ${this.oppHp + number}`);
        this.oppHp += number;
        this.oppHpEmitter.next(this.oppHp);
    }
    getOppHandSize() {
        return this.oppHandSize;
    }
    setOppHandSize(number) {
        this.oppHandSize = number;
        this.oppHandSizeEmitter.next(number);
    }
    getOppDeckSize() {
        return this.oppDeckSize;
    }
    setOppDeckSize(number) {
        this.oppDeckSize = number;
        this.oppDeckSizeEmitter.next(number);
    }
}
OpponentService.ɵfac = function OpponentService_Factory(t) { return new (t || OpponentService)(); };
OpponentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OpponentService, factory: OpponentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6TkF":
/*!**************************************************************************!*\
  !*** ./src/app/battlefield/opponent-avatar/opponent-avatar.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpponentAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentAvatarComponent", function() { return OpponentAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OpponentAvatarComponent {
    constructor() {
        this.playerClass = "firemage";
    }
    ngOnInit() {
    }
}
OpponentAvatarComponent.ɵfac = function OpponentAvatarComponent_Factory(t) { return new (t || OpponentAvatarComponent)(); };
OpponentAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentAvatarComponent, selectors: [["app-opponent-avatar"]], inputs: { playerHp: "playerHp" }, decls: 5, vars: 2, consts: [[1, "avatar"], ["alt", "player avatar", 1, "avatarImage", 3, "src"], ["src", "assets/images/zones/hp.svg", "alt", "hp", 1, "hp"], [1, "hpNumber"]], template: function OpponentAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/classes/" + ctx.playerClass + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerHp);
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: opponent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.avatarImage[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.hp[_ngcontent-%COMP%] {\r\n  width: 3em;\r\n}\r\n\r\n.hpNumber[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LWF2YXRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6Im9wcG9uZW50LWF2YXRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogb3Bwb25lbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhckltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhwIHtcclxuICB3aWR0aDogM2VtO1xyXG59XHJcblxyXG4uaHBOdW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "93yE":
/*!******************************************************!*\
  !*** ./src/app/battlefield/battlefield.component.ts ***!
  \******************************************************/
/*! exports provided: BattlefieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlefieldComponent", function() { return BattlefieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _battlefield_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battlefield.service */ "b9KQ");
/* harmony import */ var _player_hand_hand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/hand/hand.service */ "THtM");
/* harmony import */ var _player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/action-points/action-points.service */ "MbUL");
/* harmony import */ var _opponent_opponent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../opponent/opponent.service */ "3jE/");
/* harmony import */ var _player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _mental_mental_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mental/mental.component */ "Dm1F");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ranged/ranged.component */ "F6y0");
/* harmony import */ var _melee_melee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./melee/melee.component */ "tFtR");
/* harmony import */ var _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./opponent-avatar/opponent-avatar.component */ "6TkF");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/card/card.component */ "Fe25");













function BattlefieldComponent_app_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.mental);
} }
function BattlefieldComponent_app_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r1.ranged);
} }
function BattlefieldComponent_app_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r2.melee);
} }
class BattlefieldComponent {
    constructor(battlefieldService, handService, actionsPointsService, opponentService) {
        this.battlefieldService = battlefieldService;
        this.handService = handService;
        this.actionsPointsService = actionsPointsService;
        this.opponentService = opponentService;
        this.melee = null;
        this.ranged = null;
        this.mental = null;
        this.meleeOpp = null;
        this.rangedOpp = null;
        this.mentalOpp = null;
        this.showMental = true;
        this.showRanged = true;
        this.showMelee = true;
        this.battlefieldService.cardEmitter.subscribe((arg) => this[arg.row] = arg.card);
        this.opponentService.oppHpEmitter.subscribe((arg) => this.oppHP = arg);
    }
    ngOnInit() {
        this.oppHP = this.opponentService.getOppHp();
        this.rangedOpp = this.battlefieldService.getCard("rangedOpp");
    }
    drop(event) {
        this.showMental = true;
        this.showRanged = true;
        this.showMelee = true;
        if ((event.container.data === "melee" || event.container.data === "ranged" || event.container.data === "mental") && event.item.data.card.cost <= this.actionsPointsService.getActionPoints().current) {
            this.actionsPointsService.payCosts(event.item.data.card.cost);
            this.battlefieldService.setCard(event.item.data.card, event.container.data);
            this.handService.removeCard(event.item.data.index);
            if (event.item.data.card.effect && event.item.data.card.effect.timing === "play") {
                this.battlefieldService.applyBattlefiedEffect(event.item.data.card, event.container.data);
                console.log(`Gracz wstawia ${event.item.data.card.name} w ${event.container.data} z efektem ${event.item.data.card.effect.type} na ${event.item.data.card.effect.target}`);
            }
            else {
                console.log(`Gracz wstawia ${event.item.data.card.name} w ${event.container.data}`);
            }
        }
    }
    ngOnDestroy() {
        this.battlefieldService.cardEmitter.unsubscribe();
        this.opponentService.oppHpEmitter.unsubscribe();
    }
}
BattlefieldComponent.ɵfac = function BattlefieldComponent_Factory(t) { return new (t || BattlefieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_battlefield_service__WEBPACK_IMPORTED_MODULE_1__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_2__["HandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_3__["ActionPointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_opponent_opponent_service__WEBPACK_IMPORTED_MODULE_4__["OpponentService"])); };
BattlefieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattlefieldComponent, selectors: [["app-battlefield"]], decls: 11, vars: 13, consts: [[3, "card", "oppCard"], ["cdkDropList", "", 1, "playerCard", 3, "cdkDropListData", "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited"], [3, "card", 4, "ngIf"], [3, "playerHp"], [3, "card"]], template: function BattlefieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-mental", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_div_cdkDropListDropped_2_listener($event) { return ctx.drop($event); })("cdkDropListEntered", function BattlefieldComponent_Template_div_cdkDropListEntered_2_listener() { return ctx.showMental = false; })("cdkDropListExited", function BattlefieldComponent_Template_div_cdkDropListExited_2_listener() { return ctx.showMental = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BattlefieldComponent_app_card_3_Template, 1, 1, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-ranged", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.drop($event); })("cdkDropListEntered", function BattlefieldComponent_Template_div_cdkDropListEntered_5_listener() { return ctx.showRanged = false; })("cdkDropListExited", function BattlefieldComponent_Template_div_cdkDropListExited_5_listener() { return ctx.showRanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BattlefieldComponent_app_card_6_Template, 1, 1, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-melee", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.drop($event); })("cdkDropListEntered", function BattlefieldComponent_Template_div_cdkDropListEntered_8_listener() { return ctx.showMelee = false; })("cdkDropListExited", function BattlefieldComponent_Template_div_cdkDropListExited_8_listener() { return ctx.showMelee = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BattlefieldComponent_app_card_9_Template, 1, 1, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-opponent-avatar", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.mental)("oppCard", ctx.mentalOpp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "mental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mental && ctx.showMental);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.ranged)("oppCard", ctx.rangedOpp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "ranged");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ranged && ctx.showRanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.melee)("oppCard", ctx.meleeOpp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "melee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.melee && ctx.showMelee);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerHp", ctx.oppHP);
    } }, directives: [_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_5__["PlayerAvatarComponent"], _mental_mental_component__WEBPACK_IMPORTED_MODULE_6__["MentalComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_9__["RangedComponent"], _melee_melee_component__WEBPACK_IMPORTED_MODULE_10__["MeleeComponent"], _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_11__["OpponentAvatarComponent"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: battlefield;\r\n  display: grid;\r\n  grid-template-areas: \"player mental opponent\" \"player ranged opponent\" \"player melee opponent\";\r\n  grid-template-columns: 20vw 60vw 20vw;\r\n  grid-auto-rows: 33% 33% 33%\r\n}\r\n\r\n.playerCard[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhGQUE4RjtFQUM5RixxQ0FBcUM7RUFDckM7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYmF0dGxlZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IGJhdHRsZWZpZWxkO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwbGF5ZXIgbWVudGFsIG9wcG9uZW50XCIgXCJwbGF5ZXIgcmFuZ2VkIG9wcG9uZW50XCIgXCJwbGF5ZXIgbWVsZWUgb3Bwb25lbnRcIjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgNjB2dyAyMHZ3O1xyXG4gIGdyaWQtYXV0by1yb3dzOiAzMyUgMzMlIDMzJVxyXG59XHJcblxyXG4ucGxheWVyQ2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dm1F":
/*!********************************************************!*\
  !*** ./src/app/battlefield/mental/mental.component.ts ***!
  \********************************************************/
/*! exports provided: MentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentalComponent", function() { return MentalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");



function MentalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
function MentalComponent_app_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r1.oppCard);
} }
const _c0 = ["*"];
class MentalComponent {
    constructor() { }
    ngOnInit() {
    }
}
MentalComponent.ɵfac = function MentalComponent_Factory(t) { return new (t || MentalComponent)(); };
MentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentalComponent, selectors: [["app-mental"]], inputs: { card: "card", oppCard: "oppCard" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["class", "opponentCard", 4, "ngIf"], [3, "card", 4, "ngIf"], [1, "opponentCard"], [3, "card"]], template: function MentalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MentalComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MentalComponent_app_card_2_Template, 1, 1, "app-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.oppCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oppCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: mental;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibWVudGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBtZW50YWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5vcHBvbmVudENhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F6y0":
/*!********************************************************!*\
  !*** ./src/app/battlefield/ranged/ranged.component.ts ***!
  \********************************************************/
/*! exports provided: RangedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangedComponent", function() { return RangedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");



function RangedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
function RangedComponent_app_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r1.oppCard);
} }
const _c0 = ["*"];
class RangedComponent {
    constructor() { }
    ngOnInit() {
    }
}
RangedComponent.ɵfac = function RangedComponent_Factory(t) { return new (t || RangedComponent)(); };
RangedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangedComponent, selectors: [["app-ranged"]], inputs: { card: "card", oppCard: "oppCard" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["class", "opponentCard", 4, "ngIf"], [3, "card", 4, "ngIf"], [1, "opponentCard"], [3, "card"]], template: function RangedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RangedComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RangedComponent_app_card_2_Template, 1, 1, "app-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.oppCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oppCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: ranged;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicmFuZ2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiByYW5nZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5vcHBvbmVudENhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Fe25":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_tooltip_card_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-tooltip/card-tooltip.component */ "MTEV");



function CardComponent_app_card_tooltip_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-tooltip", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card);
} }
class CardComponent {
    constructor() {
        this.showTooltip = false;
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, decls: 15, vars: 7, consts: [[1, "card", 3, "mouseenter", "mouseleave", "mousedown"], [1, "name"], [1, "image"], ["alt", "card image", 3, "src"], [1, "stats"], [1, "attack"], [1, "hp"], [1, "cost"], [1, "speed"], [3, "card", 4, "ngIf"], [3, "card"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardComponent_Template_div_mouseenter_0_listener() { return ctx.showTooltip = true; })("mouseleave", function CardComponent_Template_div_mouseleave_0_listener() { return ctx.showTooltip = false; })("mousedown", function CardComponent_Template_div_mousedown_0_listener() { return ctx.showTooltip = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CardComponent_app_card_tooltip_14_Template, 1, 1, "app-card-tooltip", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.attack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.hp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/zones/" + ctx.card.speed + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTooltip);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _card_tooltip_card_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CardTooltipComponent"]], styles: [".card[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  z-index: 2;\r\n  margin: 0.5em;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 0.75em;\r\n  text-align: center;\r\n  background-color:rgba(0, 0, 0, 0);\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border: 1px solid black;\r\n  margin: 0 auto;\r\n  max-height: 8em;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: -0.5em;\r\n  width: 1em;\r\n}\r\n\r\n.attack[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: red;\r\n  text-align: center;\r\n}\r\n\r\n.hp[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: green;\r\n  text-align: center;\r\n}\r\n\r\n.cost[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: blue;\r\n  text-align: center;\r\n}\r\n\r\n.cardTooltip[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  height: auto;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: absolute;\r\n  bottom: 80%;\r\n  left: 90%;\r\n  z-index: 3;\r\n}\r\n\r\n.rules[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 2px;\r\n  font-size: 0.75em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 2px;\r\n  font-style: italic;\r\n  font-size: 0.75em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LWhlaWdodDogOGVtO1xyXG59XHJcblxyXG4uc3RhdHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJlbTtcclxuICBsZWZ0OiAtMC41ZW07XHJcbiAgd2lkdGg6IDFlbTtcclxufVxyXG5cclxuLmF0dGFjayB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ocCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRUb29sdGlwIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogODAlO1xyXG4gIGxlZnQ6IDkwJTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Ib5z":
/*!****************************************!*\
  !*** ./src/app/shared/turn.service.ts ***!
  \****************************************/
/*! exports provided: TurnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnService", function() { return TurnService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/action-points/action-points.service */ "MbUL");
/* harmony import */ var _player_hand_hand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/hand/hand.service */ "THtM");




class TurnService {
    constructor(actionsPointsService, handService) {
        this.actionsPointsService = actionsPointsService;
        this.handService = handService;
        this.turn = 1;
        this.turnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getTurn() {
        return this.turn;
    }
    nextTurn() {
        this.turn += 1;
        console.log(`Następuje tura ${this.turn}`);
        this.actionsPointsService.addActionPoints(1);
        this.actionsPointsService.refreshActionPoints();
        this.handService.drawCards(1);
        this.turnSubject.next(this.turn);
    }
}
TurnService.ɵfac = function TurnService_Factory(t) { return new (t || TurnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_2__["ActionPointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_3__["HandService"])); };
TurnService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TurnService, factory: TurnService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Jcw8":
/*!*******************************************************!*\
  !*** ./src/app/player/abilties/abilties.component.ts ***!
  \*******************************************************/
/*! exports provided: AbiltiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiltiesComponent", function() { return AbiltiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AbiltiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AbiltiesComponent.ɵfac = function AbiltiesComponent_Factory(t) { return new (t || AbiltiesComponent)(); };
AbiltiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbiltiesComponent, selectors: [["app-abilties"]], decls: 2, vars: 0, template: function AbiltiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "abilties works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYmlsdGllcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "KvzL":
/*!*******************************************!*\
  !*** ./src/app/shared/effects.service.ts ***!
  \*******************************************/
/*! exports provided: EffectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsService", function() { return EffectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_hand_hand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/hand/hand.service */ "THtM");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.service */ "ufXC");
/* harmony import */ var _opponent_opponent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../opponent/opponent.service */ "3jE/");
/* harmony import */ var _player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/action-points/action-points.service */ "MbUL");





// import { Card } from "../shared/card/card.model"
class EffectsService {
    constructor(handService, playerService, opponentService, actionPointsService) {
        this.handService = handService;
        this.playerService = playerService;
        this.opponentService = opponentService;
        this.actionPointsService = actionPointsService;
    }
    applyEffect(card, target = '') {
        switch (card.effect.type) {
            case 'draw':
                console.log(`${card.name} sprawia, że ${card.effect.target} dobiera ${card.effect.amount} kart`);
                this.handService.drawCards(card.effect.amount);
                break;
            case 'ramp':
                console.log(`${card.name} sprawia, że ${card.effect.target} dostaje ${card.effect.amount} PA`);
                this.actionPointsService.addActionPoints(card.effect.amount);
                break;
            case 'healing':
                console.log(`${card.name} sprawia, że ${target} dostaje ${card.effect.amount === -1 ? card.attack : card.effect.amount} życia`);
                target === 'player'
                    ? this.playerService.changeLifePoints(card.effect.amount === -1 ? card.attack : card.effect.amount)
                    : this.opponentService.changeOppHp(card.effect.amount === -1 ? card.attack : card.effect.amount);
                break;
            case 'damage':
                console.log(`${card.name} sprawia, że ${target} dostaje ${card.effect.amount === -1 ? -card.attack : -card.effect.amount} obrażeń`);
                target === 'player'
                    ? this.playerService.changeLifePoints(card.effect.amount === -1 ? -card.attack : -card.effect.amount)
                    : this.opponentService.changeOppHp(card.effect.amount === -1 ? -card.attack : -card.effect.amount);
                break;
            default:
                break;
        }
    }
}
EffectsService.ɵfac = function EffectsService_Factory(t) { return new (t || EffectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_1__["HandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_opponent_opponent_service__WEBPACK_IMPORTED_MODULE_3__["OpponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_action_points_action_points_service__WEBPACK_IMPORTED_MODULE_4__["ActionPointsService"])); };
EffectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EffectsService, factory: EffectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MTEV":
/*!********************************************************************!*\
  !*** ./src/app/shared/card/card-tooltip/card-tooltip.component.ts ***!
  \********************************************************************/
/*! exports provided: CardTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTooltipComponent", function() { return CardTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardTooltipComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardTooltipComponent.ɵfac = function CardTooltipComponent_Factory(t) { return new (t || CardTooltipComponent)(); };
CardTooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardTooltipComponent, selectors: [["app-card-tooltip"]], inputs: { card: "card" }, decls: 18, vars: 8, consts: [[1, "cardTooltip"], [1, "name"], [1, "image"], ["alt", "card image", 3, "src"], [1, "stats"], [1, "attack"], [1, "hp"], [1, "cost"], [1, "speed"], [1, "rules"], [1, "description"]], template: function CardTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.maxAttack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.maxHp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/zones/" + ctx.card.speed + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.rules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.description);
    } }, styles: [".cardTooltip[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  height: auto;\r\n  width: 14em;\r\n  border: 1px solid black;\r\n  position: absolute;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: 30%;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 3;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 0.75em;\r\n  text-align: center;\r\n  background-color:rgba(0, 0, 0, 0);\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border: 1px solid black;\r\n  margin: 0 auto;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: -1.5em;\r\n  width: 2em;\r\n}\r\n\r\n.attack[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: red;\r\n  text-align: center;\r\n}\r\n\r\n.hp[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: green;\r\n  text-align: center;\r\n}\r\n\r\n.cost[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: blue;\r\n  text-align: center;\r\n}\r\n\r\n.rules[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 2px;\r\n  font-size: 1em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 2px;\r\n  font-style: italic;\r\n  font-size: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtdG9vbHRpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJjYXJkLXRvb2x0aXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkVG9vbHRpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTRlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN0YXRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyZW07XHJcbiAgbGVmdDogLTEuNWVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbn1cclxuXHJcbi5hdHRhY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaHAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3N0IHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ydWxlcyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "MbUL":
/*!***************************************************************!*\
  !*** ./src/app/player/action-points/action-points.service.ts ***!
  \***************************************************************/
/*! exports provided: ActionPointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPointsService", function() { return ActionPointsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActionPointsService {
    constructor() {
        this.maxActionPoints = 3;
        this.currentActionPoints = 3;
        this.actionPointsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getActionPoints() {
        return { current: this.currentActionPoints, max: this.maxActionPoints };
    }
    addActionPoints(number) {
        this.maxActionPoints === 12 ? this.maxActionPoints += 0 : this.maxActionPoints += number;
    }
    payCosts(number) {
        this.currentActionPoints -= number;
        this.actionPointsSubject.next({ max: this.maxActionPoints, current: this.currentActionPoints });
    }
    refreshActionPoints() {
        this.currentActionPoints = this.maxActionPoints;
        this.actionPointsSubject.next({ max: this.maxActionPoints, current: this.currentActionPoints });
    }
}
ActionPointsService.ɵfac = function ActionPointsService_Factory(t) { return new (t || ActionPointsService)(); };
ActionPointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionPointsService, factory: ActionPointsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QCuA":
/*!******************************************!*\
  !*** ./src/app/shared/combat.service.ts ***!
  \******************************************/
/*! exports provided: CombatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatService", function() { return CombatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battlefield/battlefield.service */ "b9KQ");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.service */ "ufXC");
/* harmony import */ var _turn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turn.service */ "Ib5z");
/* harmony import */ var _opponent_opponent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../opponent/opponent.service */ "3jE/");





class CombatService {
    constructor(battlefieldService, playerService, turnService, opponentService) {
        this.battlefieldService = battlefieldService;
        this.playerService = playerService;
        this.turnService = turnService;
        this.opponentService = opponentService;
    }
    commenceCombat() {
        const rows = ['mental', 'ranged', 'melee'];
        //efekty na początku walki albo na reveal
        rows.forEach((row) => {
            let playerCard = this.battlefieldService.getCard(row);
            let oppCard = this.battlefieldService.getCard(row + 'Opp');
            //sprawdzamy czy sa efekty na poczatku walki
            if (playerCard &&
                playerCard.effect &&
                ((playerCard.effect.timing === 'reveal' && !playerCard.revealed) ||
                    playerCard.effect.timing === 'combat')) {
                console.log(`${playerCard.name} używa zdolności na początku walki ${playerCard.effect.type} na ${playerCard.effect.target}`);
                this.battlefieldService.applyBattlefiedEffect(playerCard, row);
                this.battlefieldService.markAsRevealed(row);
            }
            else if (oppCard &&
                oppCard.effect &&
                ((oppCard.effect.timing === 'reveal' && !oppCard.revealed) ||
                    oppCard.effect.timing === 'combat')) {
                console.log(`${oppCard.name} używa zdolności na początku walki ${oppCard.effect.type} na ${oppCard.effect.target}`);
                this.battlefieldService.applyBattlefiedEffect(oppCard, row + 'Opp');
                this.battlefieldService.markAsRevealed(row + 'Opp');
            }
            //po efektach sprawdzam sba
            this.battlefieldService.buryTheFallen();
        });
        //właściwe ataki
        rows.forEach((row) => {
            let playerCard = this.battlefieldService.getCard(row);
            let oppCard = this.battlefieldService.getCard(row + 'Opp');
            //sprawdzamy czy są efekty podczas ataku i je aplikujemy
            if (playerCard &&
                playerCard.effect &&
                playerCard.effect.timing === 'attack') {
                console.log(`${playerCard.name} używa zdolności na ataku ${playerCard.effect.type} na ${playerCard.effect.target}`);
                this.battlefieldService.applyBattlefiedEffect(playerCard, row);
            }
            else if (oppCard &&
                oppCard.effect &&
                oppCard.effect.timing === 'attack') {
                console.log(`${oppCard.name} używa zdolności na ataku ${oppCard.effect.type} na ${oppCard.effect.target}`);
                this.battlefieldService.applyBattlefiedEffect(oppCard, row + 'Opp');
            }
            //właściwe ataki
            if (playerCard) {
                if (oppCard) {
                    this.clash(playerCard, oppCard, row);
                }
                else {
                    console.log(`${playerCard.name} atakuje przeciwnika za ${playerCard.attack} obrażeń.`);
                    this.opponentService.changeOppHp(-playerCard.attack);
                }
            }
            else if (oppCard) {
                this.playerService.changeLifePoints(-oppCard.attack);
                console.log(`${oppCard.name} atakuje przeciwnika za ${oppCard.attack} obrażeń.`);
            }
            this.battlefieldService.buryTheFallen();
        });
        //sprawdzamy czy są efekty eot i je aplikujemy:
        rows.forEach((row) => {
            let playerCard = this.battlefieldService.getCard(row);
            let oppCard = this.battlefieldService.getCard(row + 'Opp');
            //sprawdzamy czy sa efekty na poczatku walki
            if (playerCard &&
                playerCard.effect &&
                playerCard.effect.timing === 'eot') {
                this.battlefieldService.applyBattlefiedEffect(playerCard, row);
                console.log(`${playerCard.name} używa zdolności EOT ${playerCard.effect.type} na ${playerCard.effect.target}`);
            }
            else if (oppCard && oppCard.effect && oppCard.effect.timing === 'eot') {
                this.battlefieldService.applyBattlefiedEffect(oppCard, row + 'Opp');
                console.log(`${oppCard.name} używa zdolności EOT ${oppCard.effect.type} na ${oppCard.effect.target}`);
            }
            //po efektach sprawdzam sba
            this.battlefieldService.buryTheFallen();
        });
        //ustawiamy status wszystkiego co przeżyło jako revealed
        rows.forEach((row) => {
            let playerCard = this.battlefieldService.getCard(row);
            let oppCard = this.battlefieldService.getCard(row + 'Opp');
            //sprawdzamy czy sa efekty na poczatku walki
            if (playerCard) {
                this.battlefieldService.markAsRevealed(row);
            }
            else if (oppCard) {
                this.battlefieldService.markAsRevealed(row + 'Opp');
            }
        });
        this.turnService.nextTurn();
    }
    clash(playerCard, oppCard, row) {
        if (playerCard.speed === oppCard.speed) {
            //jeśli karty mają taką samą szybkość, to biją w siebie nawzajem, a dopiero potem sprawdzamy czy ktoś zginął
            this.battlefieldService.changeCardHp(-playerCard.attack, row + 'Opp');
            playerCard.abilities.includes("trample") && playerCard.attack > oppCard.hp ? this.opponentService.changeOppHp(-(playerCard.attack - oppCard.hp)) : null;
            this.battlefieldService.changeCardHp(-oppCard.attack, row);
            oppCard.abilities.includes("trample") && oppCard.attack > playerCard.hp ? this.playerService.changeLifePoints(-(oppCard.attack - playerCard.hp)) : null;
            this.battlefieldService.buryTheFallen();
        }
        else if (playerCard.speed < oppCard.speed) {
            //jeśli karty mają różną szybkość, to najpierw szybsza zadaje obrażenia, a wolniejsza tylko jeśli przeżyje
            // tutaj karta gracza jest wolniejsza, więc przeciwnik pierwszy zadaje obrażenia
            this.battlefieldService.changeCardHp(-oppCard.attack, row);
            oppCard.abilities.includes("trample") && oppCard.attack > playerCard.hp ? this.playerService.changeLifePoints(-(oppCard.attack - playerCard.hp)) : null;
            this.battlefieldService.buryTheFallen();
            //sprawdzamy czy karta gracza nadal żyje
            if (this.battlefieldService.getCard(row) === playerCard) {
                //jak tak to też zadaje obrażeni
                this.battlefieldService.changeCardHp(-playerCard.attack, row + 'Opp');
                playerCard.abilities.includes("trample") && playerCard.attack > oppCard.hp ? this.opponentService.changeOppHp(-(playerCard.attack - oppCard.hp)) : null;
                this.battlefieldService.buryTheFallen();
            }
        }
        else {
            // tutaj karta przeciwnika jest wolniejsza, więc gracz pierwszy zadaje obrażenia
            this.battlefieldService.changeCardHp(-playerCard.attack, row + 'Opp');
            playerCard.abilities.includes("trample") && playerCard.attack > oppCard.hp ? this.opponentService.changeOppHp(-(playerCard.attack - oppCard.hp)) : null;
            this.battlefieldService.buryTheFallen();
            //sprawdzamy czy karta przeciwnika nadal żyje
            if (this.battlefieldService.getCard(row + 'Opp') === oppCard) {
                //jak tak to też zadaje obrażeni
                this.battlefieldService.changeCardHp(-oppCard.attack, row);
                oppCard.abilities.includes("trample") && oppCard.attack > playerCard.hp ? this.playerService.changeLifePoints(-(oppCard.attack - playerCard.hp)) : null;
                this.battlefieldService.buryTheFallen();
            }
        }
    }
}
CombatService.ɵfac = function CombatService_Factory(t) { return new (t || CombatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_1__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_turn_service__WEBPACK_IMPORTED_MODULE_3__["TurnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_opponent_opponent_service__WEBPACK_IMPORTED_MODULE_4__["OpponentService"])); };
CombatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CombatService, factory: CombatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RPPq":
/*!**************************************************************!*\
  !*** ./src/app/starting-screen/starting-screen.component.ts ***!
  \**************************************************************/
/*! exports provided: StartingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingScreenComponent", function() { return StartingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player.service */ "ufXC");


class StartingScreenComponent {
    constructor(playerService) {
        this.playerService = playerService;
    }
    ngOnInit() {
    }
    setPlayerNumber(number) {
        console.log(`Na ekranie startowym ustawiono numer gracza na ${number}`);
        this.playerService.setPlayerNumber(number);
    }
}
StartingScreenComponent.ɵfac = function StartingScreenComponent_Factory(t) { return new (t || StartingScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
StartingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartingScreenComponent, selectors: [["app-starting-screen"]], decls: 11, vars: 0, consts: [[1, "starting"], [1, "logo"], ["alt", "logo", "src", "assets/images/logo/logo.png"], [1, "choose"], [1, "buttons"], [1, "playerNumber", 3, "click"]], template: function StartingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wybierz swoje przeznaczenie!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartingScreenComponent_Template_button_click_7_listener() { return ctx.setPlayerNumber(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Player 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartingScreenComponent_Template_button_click_9_listener() { return ctx.setPlayerNumber(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Player 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.starting[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  height: 70vh;\r\n}\r\n\r\n.choose[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 1em;\r\n  font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0aW5nLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3RhcnRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXJ0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5jaG9vc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/card/card.model */ "mIaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_combat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/combat.service */ "QCuA");
/* harmony import */ var _shared_turn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/turn.service */ "Ib5z");
/* harmony import */ var _battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battlefield/battlefield.service */ "b9KQ");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/http.service */ "nGxR");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.service */ "ufXC");
/* harmony import */ var _player_hand_hand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/hand/hand.service */ "THtM");
/* harmony import */ var _player_deck_deck_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/deck/deck.service */ "Zsfq");
/* harmony import */ var _opponent_opponent_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opponent/opponent.service */ "3jE/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./starting-screen/starting-screen.component */ "RPPq");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./opponent/opponent.component */ "+1ZF");
/* harmony import */ var _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./battlefield/battlefield.component */ "93yE");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./player/player.component */ "0M9o");
















function AppComponent_app_starting_screen_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-starting-screen");
} }
function AppComponent_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Player ", ctx_r2.playerNumber, "");
} }
function AppComponent_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tura ", ctx_r3.turnNumber, "");
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.sendData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Wy\u015Blij dane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.getData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Odbierz dane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.combat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Walka! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_div_1_p_10_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_div_1_p_11_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-opponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-battlefield");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-player");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isDataSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.isDataSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.isDataReceived && !ctx_r1.isTurnNumberCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.playerNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.playerNumber);
} }
class AppComponent {
    constructor(combatService, turnService, battlefieldService, httpService, playerService, handService, deckService, opponentService) {
        this.combatService = combatService;
        this.turnService = turnService;
        this.battlefieldService = battlefieldService;
        this.httpService = httpService;
        this.playerService = playerService;
        this.handService = handService;
        this.deckService = deckService;
        this.opponentService = opponentService;
        this.title = 'taern-card';
        this.isPlayerNumberSet = false;
        this.isDataSent = false;
        this.isDataReceived = false;
        this.isTurnNumberCorrect = false;
        this.turnNumber = 1;
        this.turnService.turnSubject.subscribe(turnNumber => this.turnNumber = turnNumber);
        this.playerService.playerNumberSubject.subscribe(playerNumber => this.playerNumber = playerNumber);
    }
    combat() {
        this.combatService.commenceCombat();
        this.isDataSent = false;
        this.isDataReceived = false;
    }
    sendData() {
        this.httpService
            .sendData({
            melee: this.battlefieldService.getCard('melee')
                ? this.battlefieldService.getCard('melee')
                : '',
            ranged: this.battlefieldService.getCard('ranged')
                ? this.battlefieldService.getCard('ranged')
                : '',
            mental: this.battlefieldService.getCard('mental')
                ? this.battlefieldService.getCard('mental')
                : '',
            turn: this.turnNumber,
            hand: this.handService.getHandSize(),
            deck: this.deckService.getNumberOfCards()
        }, this.playerService.getPlayerNumber())
            .subscribe((response) => (this.isDataSent = true));
    }
    getData() {
        this.httpService
            .getData(this.playerService.getPlayerNumber() === 1 ? 2 : 1)
            .subscribe((response) => {
            if (response && response.turn === this.turnNumber) {
                response.melee
                    ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.melee), 'meleeOpp')
                    : null;
                response.ranged
                    ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.ranged), 'rangedOpp')
                    : null;
                response.mental
                    ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.mental), 'mentalOpp')
                    : null;
                this.opponentService.setOppDeckSize(response.deck);
                this.opponentService.setOppHandSize(response.hand);
                this.isDataReceived = true;
                console.log(`Przeciwnik wstawia ${response.mental ? response.mental.name : "nic"}, ${response.ranged ? response.ranged.name : "nic"}, ${response.melee ? response.melee.name : "nic"}`);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_combat_service__WEBPACK_IMPORTED_MODULE_2__["CombatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_turn_service__WEBPACK_IMPORTED_MODULE_3__["TurnService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_4__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_player_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_7__["HandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_player_deck_deck_service__WEBPACK_IMPORTED_MODULE_8__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_opponent_opponent_service__WEBPACK_IMPORTED_MODULE_9__["OpponentService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "wrapper", "cdkDropListGroup", "", 4, "ngIf"], ["cdkDropListGroup", "", 1, "wrapper"], [1, "controls"], [1, "buttons"], [1, "sendData", 3, "disabled", "click"], [1, "receiveData", 3, "disabled", "click"], [1, "combat", 3, "disabled", "click"], [1, "info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_app_starting_screen_0_Template, 1, 0, "app-starting-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 15, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.playerNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerNumber);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_11__["StartingScreenComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["CdkDropListGroup"], _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_13__["OpponentComponent"], _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_14__["BattlefieldComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_15__["PlayerComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-areas: \"opponent\" \"battlefield\" \"player\";\r\n  grid-template-rows: 20vh 60vh 20vh;\r\n  grid-template-columns: 100%;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n.controls[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 2em;\r\n  left: 2em;\r\n  display: flex;\r\n  width: 15vw;\r\n  justify-content: space-between;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm9wcG9uZW50XCIgXCJiYXR0bGVmaWVsZFwiIFwicGxheWVyXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDYwdmggMjB2aDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb250cm9scyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMmVtO1xyXG4gIGxlZnQ6IDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "THtM":
/*!*********************************************!*\
  !*** ./src/app/player/hand/hand.service.ts ***!
  \*********************************************/
/*! exports provided: HandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandService", function() { return HandService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deck_deck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deck/deck.service */ "Zsfq");



class HandService {
    constructor(deckService) {
        this.deckService = deckService;
        this.hand = [];
        this.handSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getHand() {
        return this.hand;
    }
    setHand(hand) {
        this.hand = hand;
        this.handSubject.next(this.hand);
    }
    drawCards(number) {
        this.hand = this.hand.concat(this.deckService.draw(number));
        this.handSubject.next(this.hand);
    }
    removeCard(index) {
        this.hand.splice(index, 1);
        this.handSubject.next(this.hand);
    }
    getHandSize() {
        return this.hand.length;
    }
}
HandService.ɵfac = function HandService_Factory(t) { return new (t || HandService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_deck_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"])); };
HandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HandService, factory: HandService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battlefield/battlefield.component */ "93yE");
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opponent/opponent.component */ "+1ZF");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "0M9o");
/* harmony import */ var _player_hand_hand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/hand/hand.component */ "0gTY");
/* harmony import */ var _player_deck_deck_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/deck/deck.component */ "i3Jn");
/* harmony import */ var _player_abilties_abilties_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/abilties/abilties.component */ "Jcw8");
/* harmony import */ var _player_action_points_action_points_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player/action-points/action-points.component */ "mYRN");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/card/card.component */ "Fe25");
/* harmony import */ var _battlefield_melee_melee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./battlefield/melee/melee.component */ "tFtR");
/* harmony import */ var _battlefield_ranged_ranged_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./battlefield/ranged/ranged.component */ "F6y0");
/* harmony import */ var _battlefield_mental_mental_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./battlefield/mental/mental.component */ "Dm1F");
/* harmony import */ var _battlefield_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./battlefield/player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _battlefield_opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./battlefield/opponent-avatar/opponent-avatar.component */ "6TkF");
/* harmony import */ var _opponent_opponent_deck_opponent_deck_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./opponent/opponent-deck/opponent-deck.component */ "wGFD");
/* harmony import */ var _opponent_opponent_hand_opponent_hand_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./opponent/opponent-hand/opponent-hand.component */ "+R9O");
/* harmony import */ var _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./starting-screen/starting-screen.component */ "RPPq");
/* harmony import */ var _shared_card_card_tooltip_card_tooltip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/card/card-tooltip/card-tooltip.component */ "MTEV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_4__["BattlefieldComponent"],
        _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_5__["OpponentComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
        _player_deck_deck_component__WEBPACK_IMPORTED_MODULE_8__["DeckComponent"],
        _player_hand_hand_component__WEBPACK_IMPORTED_MODULE_7__["HandComponent"],
        _player_abilties_abilties_component__WEBPACK_IMPORTED_MODULE_9__["AbiltiesComponent"],
        _player_action_points_action_points_component__WEBPACK_IMPORTED_MODULE_10__["ActionPointsComponent"],
        _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
        _battlefield_melee_melee_component__WEBPACK_IMPORTED_MODULE_12__["MeleeComponent"],
        _battlefield_ranged_ranged_component__WEBPACK_IMPORTED_MODULE_13__["RangedComponent"],
        _battlefield_mental_mental_component__WEBPACK_IMPORTED_MODULE_14__["MentalComponent"],
        _battlefield_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_15__["PlayerAvatarComponent"],
        _battlefield_opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_16__["OpponentAvatarComponent"],
        _opponent_opponent_deck_opponent_deck_component__WEBPACK_IMPORTED_MODULE_17__["OpponentDeckComponent"],
        _opponent_opponent_hand_opponent_hand_component__WEBPACK_IMPORTED_MODULE_18__["OpponentHandComponent"],
        _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_19__["StartingScreenComponent"],
        _shared_card_card_tooltip_card_tooltip_component__WEBPACK_IMPORTED_MODULE_20__["CardTooltipComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "Zsfq":
/*!*********************************************!*\
  !*** ./src/app/player/deck/deck.service.ts ***!
  \*********************************************/
/*! exports provided: DeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckService", function() { return DeckService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/card/card.model */ "mIaL");
/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/cards */ "+bcQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DeckService {
    constructor() {
        this.deck = _data_cards__WEBPACK_IMPORTED_MODULE_2__["deck"].map(card => new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"](card));
        this.discardPile = [];
        this.deckSizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getDeck() {
        return this.deck.slice();
    }
    getNumberOfCards() {
        return this.deck.length;
    }
    shuffle() {
        var currentIndex = this.deck.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
    }
    draw(number) {
        this.deckSizeSubject.next(this.getNumberOfCards() - number);
        return this.deck.splice(0, number);
    }
    discard(card) {
        this.discardPile.push(card);
    }
}
DeckService.ɵfac = function DeckService_Factory(t) { return new (t || DeckService)(); };
DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DeckService, factory: DeckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "b9KQ":
/*!****************************************************!*\
  !*** ./src/app/battlefield/battlefield.service.ts ***!
  \****************************************************/
/*! exports provided: BattlefieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlefieldService", function() { return BattlefieldService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/card/card.model */ "mIaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_deck_deck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/deck/deck.service */ "Zsfq");
/* harmony import */ var _shared_effects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/effects.service */ "KvzL");





class BattlefieldService {
    constructor(deckService, effectsService) {
        this.deckService = deckService;
        this.effectsService = effectsService;
        this.cardEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getCard(row) {
        return this[row];
    }
    setCard(card, row) {
        this[row] ? this.deckService.discard(this[row]) : null;
        this[row] = card;
        this.cardEmitter.next({ card: card, row: row });
    }
    changeCardHp(number, row) {
        this[row].hp + number > this[row].maxHp
            ? (this[row].hp = this[row].maxHp)
            : (this[row].hp += number);
        number < 0
            ? console.log(`${this[row].name} w ${row} otrzymuje ${number} obrażeń`)
            : console.log(`${this[row].name} w ${row} jest leczony o ${number}`);
    }
    changeCardAttack(number, row) {
        this[row].attack + number < 0
            ? (this[row].attack = 0)
            : (this[row].attack += number);
        number < 0
            ? console.log(`${this[row].name} w ${row} otrzymuje ${number} obrażeń`)
            : console.log(`${this[row].name} w ${row} jest leczony o ${number}`);
    }
    removeCard(card, row) {
        this.deckService.discard(card);
        console.log(this[row].name + ' umiera w ' + row);
        this[row] = null;
        this.cardEmitter.next({ card: null, row: row });
        if (card.effect && card.effect.timing === 'death') {
            this.applyBattlefiedEffect(card, row);
            console.log(`z efektem ${card.effect.type} na ${card.effect.target}`);
        }
    }
    buryTheFallen() {
        const rows = [
            'mental',
            'ranged',
            'melee',
            'mentalOpp',
            'rangedOpp',
            'meleeOpp',
        ];
        rows.forEach((row) => {
            if (this[row] && this[row].hp <= 0) {
                this.removeCard(this[row], row);
            }
        });
    }
    markAsRevealed(row) {
        this[row].revealed = true;
        console.log(this[row].name + ' ma status revealed');
    }
    calculateTargets(row, target) {
        let targets = [];
        let playerRows = ['mental', 'ranged', 'melee'];
        let oppRows = ['mentalOpp', 'rangedOpp', 'meleeOpp'];
        if (row.includes('Opp')) {
            switch (target) {
                case 'player':
                    targets.push('opponent');
                    break;
                case 'opponent':
                    targets.push('player');
                    break;
                case 'self':
                    targets.push(row);
                    break;
                case 'playerAllies':
                    targets = targets.concat(oppRows);
                    break;
                case 'oppAllies':
                    targets = targets.concat(playerRows);
                    break;
                case 'sameRow':
                    targets.push(row.substring(0, row.length - 3));
                    break;
                case 'friendlyUpRow':
                    oppRows.indexOf(row) - 1 >= 0
                        ? targets.push(oppRows[oppRows.indexOf(row) - 1])
                        : null;
                    break;
                case 'friendlyDownRow':
                    oppRows.indexOf(row) + 1 <= 2
                        ? targets.push(oppRows[oppRows.indexOf(row) + 1])
                        : null;
                    break;
                case 'enemyUpRow':
                    playerRows.indexOf(row.substring(0, row.length - 3)) - 1 >= 0
                        ? targets.push(playerRows[playerRows.indexOf(row.substring(0, row.length - 3)) - 1])
                        : null;
                    break;
                case 'enemyDownRow':
                    playerRows.indexOf(row.substring(0, row.length - 3)) + 1 <= 2
                        ? targets.push(playerRows[playerRows.indexOf(row.substring(0, row.length - 3)) + 1])
                        : null;
                    break;
                case 'otherPlayerAllies':
                    targets = targets.concat(oppRows.splice(oppRows.indexOf(row), 1));
                    break;
            }
        }
        else {
            switch (target) {
                case 'player':
                    targets.push(target);
                    break;
                case 'opponent':
                    targets.push(target);
                    break;
                case 'self':
                    targets.push(row);
                    break;
                case 'playerAllies':
                    targets = targets.concat(playerRows);
                    break;
                case 'oppAllies':
                    targets = targets.concat(oppRows);
                    break;
                case 'sameRow':
                    targets.push(row + 'Opp');
                    break;
                case 'friendlyUpRow':
                    playerRows.indexOf(row) - 1 >= 0
                        ? targets.push(playerRows[playerRows.indexOf(row) - 1])
                        : null;
                    break;
                case 'friendlyDownRow':
                    playerRows.indexOf(row) + 1 <= 2
                        ? targets.push(playerRows[playerRows.indexOf(row) + 1])
                        : null;
                    break;
                case 'enemyUpRow':
                    oppRows.indexOf(row + 'Opp') - 1 >= 0
                        ? targets.push(oppRows[oppRows.indexOf(row + 'Opp') - 1])
                        : null;
                    break;
                case 'enemyDownRow':
                    oppRows.indexOf(row + 'Opp') + 1 <= 2
                        ? targets.push(oppRows[oppRows.indexOf(row + 'Opp') + 1])
                        : null;
                    break;
                case 'otherPlayerAllies':
                    targets = targets.concat(playerRows.splice(playerRows.indexOf(row), 1));
                    break;
            }
        }
        return targets;
    }
    applyBattlefiedEffect(card, row) {
        switch (card.effect.type) {
            case 'draw':
                row.includes('Opp') ? null : this.effectsService.applyEffect(card);
                break;
            case 'ramp':
                row.includes('Opp') ? null : this.effectsService.applyEffect(card);
                break;
            case 'healing':
                let healingTargets = Array.isArray(card.effect.target)
                    ? card.effect.target.reduce((allTargets, currentTarget) => (allTargets = allTargets.concat(this.calculateTargets(row, currentTarget))), [])
                    : this.calculateTargets(row, card.effect.target);
                console.log(`Cele zdolności to ${healingTargets}`);
                healingTargets.forEach((target) => target === 'player' || target === 'opponent'
                    ? this.effectsService.applyEffect(card, target)
                    : this[target]
                        ? this.changeCardHp(card.effect.amount === -1 ? card.attack : card.effect.amount, target)
                        : null);
                break;
            case 'damage':
                let damageTargets = Array.isArray(card.effect.target)
                    ? card.effect.target.reduce((allTargets, currentTarget) => (allTargets = allTargets.concat(this.calculateTargets(row, currentTarget))), [])
                    : this.calculateTargets(row, card.effect.target);
                console.log(`Cele zdolności to ${damageTargets}`);
                damageTargets.forEach((target) => target === 'player' || target === 'opponent'
                    ? this.effectsService.applyEffect(card, target)
                    : this[target]
                        ? this.changeCardHp(card.effect.amount === -1 ? -card.attack : -card.effect.amount, target)
                        : null);
                break;
            case 'weaken':
                let weakenTargets = Array.isArray(card.effect.target)
                    ? card.effect.target.reduce((allTargets, currentTarget) => (allTargets = allTargets.concat(this.calculateTargets(row, currentTarget))), [])
                    : this.calculateTargets(row, card.effect.target);
                console.log(`Cele zdolności to ${weakenTargets}`);
                weakenTargets.forEach((target) => this[target]
                    ? this.changeCardAttack(-card.effect.amount, target)
                    : null);
                break;
            case 'strengthen':
                let strengthenTargets = Array.isArray(card.effect.target)
                    ? card.effect.target.reduce((allTargets, currentTarget) => (allTargets = allTargets.concat(this.calculateTargets(row, currentTarget))), [])
                    : this.calculateTargets(row, card.effect.target);
                console.log(`Cele zdolności to ${strengthenTargets}`);
                strengthenTargets.forEach((target) => this[target]
                    ? this.changeCardAttack(card.effect.amount, target)
                    : null);
                break;
            case 'summon':
                let summonTargets = Array.isArray(card.effect.target)
                    ? card.effect.target.reduce((allTargets, currentTarget) => (allTargets = allTargets.concat(this.calculateTargets(row, currentTarget))), [])
                    : this.calculateTargets(row, card.effect.target);
                console.log(`Cele zdolności to ${summonTargets}`);
                summonTargets.forEach((target) => !this[target]
                    ? this.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"](card.effect.card), target)
                    : null);
                break;
            default:
                break;
        }
    }
}
BattlefieldService.ɵfac = function BattlefieldService_Factory(t) { return new (t || BattlefieldService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_player_deck_deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_effects_service__WEBPACK_IMPORTED_MODULE_4__["EffectsService"])); };
BattlefieldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BattlefieldService, factory: BattlefieldService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g6fd":
/*!**********************************************************************!*\
  !*** ./src/app/battlefield/player-avatar/player-avatar.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlayerAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAvatarComponent", function() { return PlayerAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/player.service */ "ufXC");


class PlayerAvatarComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.playerClass = "barbarian";
        this.playerService.playerHpSubject.subscribe(data => this.playerHP = data);
    }
    ngOnInit() {
        this.playerHP = this.playerService.getLifePoints();
    }
    ngOnDestroy() {
        this.playerService.playerHpSubject.unsubscribe();
    }
}
PlayerAvatarComponent.ɵfac = function PlayerAvatarComponent_Factory(t) { return new (t || PlayerAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
PlayerAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerAvatarComponent, selectors: [["app-player-avatar"]], decls: 5, vars: 2, consts: [[1, "avatar"], ["alt", "player avatar", 1, "avatarImage", 3, "src"], ["src", "assets/images/zones/hp.svg", "alt", "hp", 1, "hp"], [1, "hpNumber"]], template: function PlayerAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/classes/" + ctx.playerClass + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerHP);
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: player;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.avatarImage[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.hp[_ngcontent-%COMP%] {\r\n  width: 3em;\r\n}\r\n\r\n.hpNumber[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1hdmF0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJwbGF5ZXItYXZhdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhckltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhwIHtcclxuICB3aWR0aDogM2VtO1xyXG59XHJcblxyXG4uaHBOdW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "i3Jn":
/*!***********************************************!*\
  !*** ./src/app/player/deck/deck.component.ts ***!
  \***********************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck.service */ "Zsfq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DeckComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Karty w talii: ", ctx_r0.cardsinDeck, " ");
} }
class DeckComponent {
    constructor(deckService) {
        this.deckService = deckService;
        this.showTooltip = false;
        this.deckService.deckSizeSubject.subscribe(data => this.cardsinDeck = data);
    }
    ngOnInit() {
        this.deckService.shuffle();
        this.cardsinDeck = this.deckService.getNumberOfCards();
    }
    ngOnDestroy() {
        this.deckService.deckSizeSubject.unsubscribe();
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"])); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["app-deck"]], decls: 2, vars: 1, consts: [[1, "deck", 3, "mouseenter", "mouseleave"], ["class", "deckTooltip", 4, "ngIf"], [1, "deckTooltip"]], template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DeckComponent_Template_div_mouseenter_0_listener() { return ctx.showTooltip = true; })("mouseleave", function DeckComponent_Template_div_mouseleave_0_listener() { return ctx.showTooltip = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeckComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTooltip);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: deck;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.deck[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n  background-image: url(\"/assets/images/logo/logo.png\");\r\n  background-size: 80%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  border-radius: 5px;\r\n}\r\n\r\n.deckTooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImRlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IGRlY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGVjayB7XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nby5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZGVja1Rvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "kLo/":
/*!****************************************!*\
  !*** ./src/app/shared/effect.model.ts ***!
  \****************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
class Effect {
    constructor(effect) {
        this.timing = effect.timing;
        this.target = effect.target;
        this.type = effect.type;
        this.amount = effect.amount ? effect.amount : 0;
        this.card = effect.card ? effect.card : null;
    }
}


/***/ }),

/***/ "mIaL":
/*!*******************************************!*\
  !*** ./src/app/shared/card/card.model.ts ***!
  \*******************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _effect_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../effect.model */ "kLo/");

class Card {
    constructor(rawCard) {
        this.name = rawCard.name;
        this.image = `assets/images/cards/${rawCard.name}.svg`;
        this.attack = rawCard.attack ? rawCard.attack : 0;
        this.hp = rawCard.hp ? rawCard.hp : 0;
        this.cost = rawCard.cost;
        this.description = rawCard.description;
        this.type = rawCard.type;
        this.speed = rawCard.speed;
        this.effect = rawCard.effect ? new _effect_model__WEBPACK_IMPORTED_MODULE_0__["Effect"](rawCard.effect) : null;
        this.rules = rawCard.rules ? rawCard.rules : "";
        this.maxHp = rawCard.maxHp ? rawCard.maxHp : rawCard.hp ? rawCard.hp : 0;
        this.maxAttack = rawCard.maxAttack ? rawCard.maxAttack : rawCard.attack ? rawCard.attack : 0;
        this.revealed = rawCard.revealed ? true : false;
        this.named = rawCard.named ? rawCard.named : false;
        this.abilities = rawCard.abilities ? rawCard.abilities : [];
    }
}


/***/ }),

/***/ "mYRN":
/*!*****************************************************************!*\
  !*** ./src/app/player/action-points/action-points.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActionPointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPointsComponent", function() { return ActionPointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _action_points_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-points.service */ "MbUL");


class ActionPointsComponent {
    constructor(actionsPointsService) {
        this.actionsPointsService = actionsPointsService;
        this.actionsPointsService.actionPointsSubject.subscribe(data => {
            this.currentActionPoints = data.current;
            this.maxActionPoints = data.max;
        });
    }
    ngOnInit() {
        this.currentActionPoints = this.actionsPointsService.getActionPoints().current;
        this.maxActionPoints = this.actionsPointsService.getActionPoints().max;
    }
    ngOnDestroy() {
        this.actionsPointsService.actionPointsSubject.unsubscribe();
    }
}
ActionPointsComponent.ɵfac = function ActionPointsComponent_Factory(t) { return new (t || ActionPointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_action_points_service__WEBPACK_IMPORTED_MODULE_1__["ActionPointsService"])); };
ActionPointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionPointsComponent, selectors: [["app-action-points"]], decls: 3, vars: 2, consts: [[1, "actionPoints"]], template: function ActionPointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentActionPoints, "/", ctx.maxActionPoints, "");
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: action-points;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.actionPoints[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: blue;\r\n  width: 10em;\r\n  height: 10em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  background-color:rgba(0, 0, 0, 0);\r\n  font-size: 4em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wb2ludHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFjdGlvbi1wb2ludHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IGFjdGlvbi1wb2ludHM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uUG9pbnRzIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB3aWR0aDogMTBlbTtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "nGxR":
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HttpService {
    constructor(http) {
        this.http = http;
    }
    sendData(gameData, player) {
        return this.http.put("https://recipe-book-app-bce43.firebaseio.com/recipes/player" + player + ".json", gameData);
    }
    getData(player) {
        return this.http.get("https://recipe-book-app-bce43.firebaseio.com/recipes/player" + player + ".json");
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tFtR":
/*!******************************************************!*\
  !*** ./src/app/battlefield/melee/melee.component.ts ***!
  \******************************************************/
/*! exports provided: MeleeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeleeComponent", function() { return MeleeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");



function MeleeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
function MeleeComponent_app_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r1.oppCard);
} }
const _c0 = ["*"];
class MeleeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeleeComponent.ɵfac = function MeleeComponent_Factory(t) { return new (t || MeleeComponent)(); };
MeleeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeleeComponent, selectors: [["app-melee"]], inputs: { card: "card", oppCard: "oppCard" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["class", "opponentCard", 4, "ngIf"], [3, "card", 4, "ngIf"], [1, "opponentCard"], [3, "card"]], template: function MeleeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MeleeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeleeComponent_app_card_2_Template, 1, 1, "app-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.oppCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oppCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: melee;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbGVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJtZWxlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogbWVsZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5vcHBvbmVudENhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ufXC":
/*!******************************************!*\
  !*** ./src/app/player/player.service.ts ***!
  \******************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayerService {
    constructor() {
        this.hp = 30;
        this.playerNumber = 1;
        this.playerHpSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerNumberSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getLifePoints() {
        return this.hp;
    }
    changeLifePoints(number) {
        console.log(`Życie gracza zmienia się z ${this.hp} na ${this.hp + number}`);
        this.hp += number;
        this.playerHpSubject.next(this.hp);
    }
    getPlayerNumber() {
        return this.playerNumber;
    }
    setPlayerNumber(number) {
        this.playerNumber = number;
        this.playerNumberSubject.next(this.playerNumber);
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wGFD":
/*!*******************************************************************!*\
  !*** ./src/app/opponent/opponent-deck/opponent-deck.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpponentDeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentDeckComponent", function() { return OpponentDeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function OpponentDeckComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Karty w talii: ", ctx_r0.oppDeckSize, " ");
} }
class OpponentDeckComponent {
    constructor() {
        this.showTooltip = false;
    }
    ngOnInit() {
    }
}
OpponentDeckComponent.ɵfac = function OpponentDeckComponent_Factory(t) { return new (t || OpponentDeckComponent)(); };
OpponentDeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentDeckComponent, selectors: [["app-opponent-deck"]], inputs: { oppDeckSize: "oppDeckSize" }, decls: 2, vars: 1, consts: [[1, "deck", 3, "mouseenter", "mouseleave"], ["class", "deckTooltip", 4, "ngIf"], [1, "deckTooltip"]], template: function OpponentDeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function OpponentDeckComponent_Template_div_mouseenter_0_listener() { return ctx.showTooltip = true; })("mouseleave", function OpponentDeckComponent_Template_div_mouseleave_0_listener() { return ctx.showTooltip = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OpponentDeckComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTooltip);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: deck;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.deck[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n  background-image: url(\"/assets/images/logo/logoinv.png\");\r\n  background-size: 80%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  border-radius: 5px;\r\n}\r\n\r\n.deckTooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LWRlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im9wcG9uZW50LWRlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IGRlY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGVjayB7XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb2ludi5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZGVja1Rvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map