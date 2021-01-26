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

class OpponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpponentComponent.ɵfac = function OpponentComponent_Factory(t) { return new (t || OpponentComponent)(); };
OpponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentComponent, selectors: [["app-opponent"]], decls: 2, vars: 0, template: function OpponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "opponent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: opponent;\r\n  border-bottom: 1px solid black;\r\n  box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJvcHBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogb3Bwb25lbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "+bcQ":
/*!*******************************!*\
  !*** ./src/app/data/cards.ts ***!
  \*******************************/
/*! exports provided: cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
const cards = [
    {
        name: "Taernijski Wieśniak",
        attack: 1,
        hp: 1,
        cost: 1,
        description: "Zwykły wieśniak",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Taernijski Rycerz",
        attack: 2,
        hp: 4,
        cost: 3,
        description: "Po prostu Rycerz",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Taernijski Barbarzyńca",
        attack: 3,
        hp: 1,
        cost: 2,
        description: "Wali mocno aż miło",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Taernijski Mag Ognia",
        attack: 4,
        hp: 2,
        cost: 4,
        description: "Strzeż się ognia",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Taernijski Łucznik",
        attack: 2,
        hp: 2,
        cost: 2,
        description: "Salwa!",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Taernijski Druid",
        attack: 1,
        hp: 6,
        cost: 4,
        description: "Za naturę!",
        type: "ally",
        speed: "mental",
    },
    {
        name: "Taernijski Voodoo",
        attack: 2,
        hp: 1,
        cost: 4,
        description: "Szpila w oko!",
        type: "ally",
        speed: "mental",
    },
    {
        name: "Ogr Bojowy",
        attack: 5,
        hp: 5,
        cost: 5,
        description: "Waaargh!",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Harpia",
        attack: 3,
        hp: 7,
        cost: 5,
        description: "Łiii!",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Żaba",
        attack: 3,
        hp: 3,
        cost: 4,
        description: "Skrzek!",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Bibliotekarz",
        attack: 5,
        hp: 8,
        cost: 8,
        description: "Cisza!",
        type: "ally",
        speed: "mental",
    },
    {
        name: "Babadek",
        attack: 7,
        hp: 7,
        cost: 7,
        description: "Gdzie moje psy?",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Ghadira",
        attack: 10,
        hp: 7,
        cost: 9,
        description: "Kto wchodzi do mojej wieży?",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Gregorius",
        attack: 4,
        hp: 6,
        cost: 7,
        description: "Kto wchodzi do mojej wieży?",
        type: "ally",
        speed: "mental",
    },
    {
        name: "Ropuch",
        attack: 6,
        hp: 10,
        cost: 8,
        description: "Czy to książę?",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Niedźwiedź",
        attack: 2,
        hp: 2,
        cost: 2,
        description: "Miś 2/2 za 2.",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Utorski Asasyn",
        attack: 8,
        hp: 1,
        cost: 4,
        description: "Jak się go złapie to jest frajer.",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Taernijski Tarczownik",
        attack: 2,
        hp: 10,
        cost: 6,
        description: "I co mu zrobisz?",
        type: "ally",
        speed: "melee",
    },
    {
        name: "Taernijski Kusznik",
        attack: 5,
        hp: 3,
        cost: 5,
        description: "Wali mocniej niż z łuku.",
        type: "ally",
        speed: "ranged",
    },
    {
        name: "Utorski Ogr",
        attack: 12,
        hp: 12,
        cost: 12,
        description: "Chodząca twierdza.",
        type: "ally",
        speed: "melee",
    },
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
/* harmony import */ var _abilties_abilties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abilties/abilties.component */ "Jcw8");
/* harmony import */ var _hand_hand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hand/hand.component */ "0gTY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _action_points_action_points_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-points/action-points.component */ "mYRN");
/* harmony import */ var _discard_discard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discard/discard.component */ "F6PY");







class PlayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 5, vars: 0, consts: [["cdkDropList", ""]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-abilties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-hand", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-action-points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-discard");
    } }, directives: [_deck_deck_component__WEBPACK_IMPORTED_MODULE_1__["DeckComponent"], _abilties_abilties_component__WEBPACK_IMPORTED_MODULE_2__["AbiltiesComponent"], _hand_hand_component__WEBPACK_IMPORTED_MODULE_3__["HandComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDropList"], _action_points_action_points_component__WEBPACK_IMPORTED_MODULE_5__["ActionPointsComponent"], _discard_discard_component__WEBPACK_IMPORTED_MODULE_6__["DiscardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: player;\r\n  border-top: 1px solid black;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-areas: \"deck abilties action-points\" \"deck hand discard\";\r\n  grid-template-columns: 15vw 70vw 15vw;\r\n  grid-template-rows: 50% 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNFQUFzRTtFQUN0RSxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJkZWNrIGFiaWx0aWVzIGFjdGlvbi1wb2ludHNcIiBcImRlY2sgaGFuZCBkaXNjYXJkXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXZ3IDcwdncgMTV2dztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _deck_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck/deck.service */ "Zsfq");
/* harmony import */ var _hand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hand.service */ "THtM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");






const _c0 = function (a0, a1) { return { card: a0, index: a1 }; };
function HandComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("ngStyle", ctx_r0.calculateRotation(i_r2))("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, card_r1, i_r2));
} }
class HandComponent {
    constructor(deckService, handService) {
        this.deckService = deckService;
        this.handService = handService;
        this.cards = [];
    }
    ngOnInit() {
        this.cards = this.deckService.draw(4);
        this.handService.setHand(this.cards);
        console.log(this.cards);
        console.log(this.deckService.getDeck());
    }
    ngDoCheck() {
        this.cards = this.handService.getHand();
    }
    calculateRotation(index) {
        let steps = 90 / this.cards.length;
        return { transform: `rotate(${-45 + steps * index}deg) translateY(-3em)` };
    }
}
HandComponent.ɵfac = function HandComponent_Factory(t) { return new (t || HandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_deck_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hand_service__WEBPACK_IMPORTED_MODULE_2__["HandService"])); };
HandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandComponent, selectors: [["app-hand"]], decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "card", "ngStyle", "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "card", "ngStyle", "cdkDragData"]], template: function HandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HandComponent_app_card_0_Template, 1, 6, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: hand;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJoYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBoYW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"] });


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
        this.playerHP = 30;
    }
    ngOnInit() {
    }
}
OpponentAvatarComponent.ɵfac = function OpponentAvatarComponent_Factory(t) { return new (t || OpponentAvatarComponent)(); };
OpponentAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpponentAvatarComponent, selectors: [["app-opponent-avatar"]], decls: 5, vars: 2, consts: [[1, "avatar"], ["alt", "player avatar", 1, "avatarImage", 3, "src"], ["src", "assets/images/zones/hp.svg", "alt", "hp", 1, "hp"], [1, "hpNumber"]], template: function OpponentAvatarComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _mental_mental_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mental/mental.component */ "Dm1F");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranged/ranged.component */ "F6y0");
/* harmony import */ var _melee_melee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./melee/melee.component */ "tFtR");
/* harmony import */ var _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opponent-avatar/opponent-avatar.component */ "6TkF");









class BattlefieldComponent {
    constructor(battlefieldService, handService) {
        this.battlefieldService = battlefieldService;
        this.handService = handService;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.melee = this.battlefieldService.getCard("melee");
        this.ranged = this.battlefieldService.getCard("ranged");
        this.mental = this.battlefieldService.getCard("mental");
    }
    drop(event) {
        if (event.container.data === "melee" || event.container.data === "ranged" || event.container.data === "mental") {
            this.battlefieldService.setCard(event.item.data.card, event.container.data);
            this.handService.removeCard(event.item.data.index);
        }
    }
}
BattlefieldComponent.ɵfac = function BattlefieldComponent_Factory(t) { return new (t || BattlefieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_battlefield_service__WEBPACK_IMPORTED_MODULE_1__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_2__["HandService"])); };
BattlefieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattlefieldComponent, selectors: [["app-battlefield"]], decls: 5, vars: 6, consts: [["cdkDropList", "", 3, "cdkDropListData", "card", "cdkDropListDropped"]], template: function BattlefieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-mental", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_app_mental_cdkDropListDropped_1_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-ranged", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_app_ranged_cdkDropListDropped_2_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-melee", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BattlefieldComponent_Template_app_melee_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-opponent-avatar");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "mental")("card", ctx.mental);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "ranged")("card", ctx.ranged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", "melee")("card", ctx.melee);
    } }, directives: [_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_3__["PlayerAvatarComponent"], _mental_mental_component__WEBPACK_IMPORTED_MODULE_4__["MentalComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropList"], _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_6__["RangedComponent"], _melee_melee_component__WEBPACK_IMPORTED_MODULE_7__["MeleeComponent"], _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_8__["OpponentAvatarComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: battlefield;\r\n  display: grid;\r\n  grid-template-areas: \"player mental opponent\" \"player ranged opponent\" \"player melee opponent\";\r\n  grid-template-columns: 20vw 60vw 20vw;\r\n  grid-auto-rows: 33% 33% 33%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhGQUE4RjtFQUM5RixxQ0FBcUM7RUFDckM7QUFDRiIsImZpbGUiOiJiYXR0bGVmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogYmF0dGxlZmllbGQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBsYXllciBtZW50YWwgb3Bwb25lbnRcIiBcInBsYXllciByYW5nZWQgb3Bwb25lbnRcIiBcInBsYXllciBtZWxlZSBvcHBvbmVudFwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyA2MHZ3IDIwdnc7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDMzJSAzMyUgMzMlXHJcbn1cclxuIl19 */"] });


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



function MentalComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card);
} }
class MentalComponent {
    constructor() { }
    ngOnInit() {
    }
}
MentalComponent.ɵfac = function MentalComponent_Factory(t) { return new (t || MentalComponent)(); };
MentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentalComponent, selectors: [["app-mental"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [[3, "card", 4, "ngIf"], [3, "card"]], template: function MentalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MentalComponent_app_card_0_Template, 1, 1, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: mental;\r\n  display: flex;\r\n  padding: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoibWVudGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBtZW50YWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "F6PY":
/*!*****************************************************!*\
  !*** ./src/app/player/discard/discard.component.ts ***!
  \*****************************************************/
/*! exports provided: DiscardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardComponent", function() { return DiscardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DiscardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiscardComponent.ɵfac = function DiscardComponent_Factory(t) { return new (t || DiscardComponent)(); };
DiscardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscardComponent, selectors: [["app-discard"]], decls: 2, vars: 0, template: function DiscardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "discard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: discard;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJkaXNjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBkaXNjYXJkO1xyXG59XHJcbiJdfQ== */"] });


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



function RangedComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card);
} }
class RangedComponent {
    constructor() { }
    ngOnInit() {
    }
}
RangedComponent.ɵfac = function RangedComponent_Factory(t) { return new (t || RangedComponent)(); };
RangedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangedComponent, selectors: [["app-ranged"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [[3, "card", 4, "ngIf"], [3, "card"]], template: function RangedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RangedComponent_app_card_0_Template, 1, 1, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: ranged;\r\n  display: flex;\r\n  padding: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoicmFuZ2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiByYW5nZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuIl19 */"] });


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

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, decls: 13, vars: 6, consts: [[1, "name"], [1, "image"], ["alt", "card image", 3, "src"], [1, "stats"], [1, "attack"], [1, "hp"], [1, "cost"], [1, "speed"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
    } }, styles: ["[_nghost-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border: 1px solid black;\r\n  margin: 0 auto;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: -0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7QUFDZCIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN0YXRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyZW07XHJcbiAgbGVmdDogLTAuNWVtO1xyXG59XHJcbiJdfQ== */"] });


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opponent/opponent.component */ "+1ZF");
/* harmony import */ var _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battlefield/battlefield.component */ "93yE");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "0M9o");





class AppComponent {
    constructor() {
        this.title = 'taern-card';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["cdkDropListGroup", "", 1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-opponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-battlefield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_2__["OpponentComponent"], _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_3__["BattlefieldComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-areas: \"opponent\" \"battlefield\" \"player\";\r\n  grid-template-rows: 20vh 60vh 20vh;\r\n  grid-template-columns: 100%;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm9wcG9uZW50XCIgXCJiYXR0bGVmaWVsZFwiIFwicGxheWVyXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDYwdmggMjB2aDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HandService {
    constructor() { }
    getHand() {
        return this.hand;
    }
    setHand(hand) {
        this.hand = hand;
    }
    addCard(card) {
        this.hand.push(card);
    }
    removeCard(index) {
        this.hand.splice(index, 1);
    }
}
HandService.ɵfac = function HandService_Factory(t) { return new (t || HandService)(); };
HandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HandService, factory: HandService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battlefield/battlefield.component */ "93yE");
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opponent/opponent.component */ "+1ZF");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "0M9o");
/* harmony import */ var _player_hand_hand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/hand/hand.component */ "0gTY");
/* harmony import */ var _player_deck_deck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/deck/deck.component */ "i3Jn");
/* harmony import */ var _player_abilties_abilties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/abilties/abilties.component */ "Jcw8");
/* harmony import */ var _player_action_points_action_points_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/action-points/action-points.component */ "mYRN");
/* harmony import */ var _player_discard_discard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player/discard/discard.component */ "F6PY");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/card/card.component */ "Fe25");
/* harmony import */ var _battlefield_melee_melee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./battlefield/melee/melee.component */ "tFtR");
/* harmony import */ var _battlefield_ranged_ranged_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./battlefield/ranged/ranged.component */ "F6y0");
/* harmony import */ var _battlefield_mental_mental_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./battlefield/mental/mental.component */ "Dm1F");
/* harmony import */ var _battlefield_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./battlefield/player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _battlefield_opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./battlefield/opponent-avatar/opponent-avatar.component */ "6TkF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_3__["BattlefieldComponent"],
        _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_4__["OpponentComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
        _player_hand_hand_component__WEBPACK_IMPORTED_MODULE_6__["HandComponent"],
        _player_deck_deck_component__WEBPACK_IMPORTED_MODULE_7__["DeckComponent"],
        _player_abilties_abilties_component__WEBPACK_IMPORTED_MODULE_8__["AbiltiesComponent"],
        _player_action_points_action_points_component__WEBPACK_IMPORTED_MODULE_9__["ActionPointsComponent"],
        _player_discard_discard_component__WEBPACK_IMPORTED_MODULE_10__["DiscardComponent"],
        _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
        _battlefield_melee_melee_component__WEBPACK_IMPORTED_MODULE_12__["MeleeComponent"],
        _battlefield_ranged_ranged_component__WEBPACK_IMPORTED_MODULE_13__["RangedComponent"],
        _battlefield_mental_mental_component__WEBPACK_IMPORTED_MODULE_14__["MentalComponent"],
        _battlefield_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_15__["PlayerAvatarComponent"],
        _battlefield_opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_16__["OpponentAvatarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"]] }); })();


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
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/card/card.model */ "mIaL");
/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/cards */ "+bcQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DeckService {
    constructor() {
        this.deck = _data_cards__WEBPACK_IMPORTED_MODULE_1__["cards"].map(card => new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](card)).concat(_data_cards__WEBPACK_IMPORTED_MODULE_1__["cards"].map(card => new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](card)));
    }
    getDeck() {
        return this.deck.slice();
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
        return this.deck.splice(0, number);
    }
}
DeckService.ɵfac = function DeckService_Factory(t) { return new (t || DeckService)(); };
DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeckService, factory: DeckService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BattlefieldService {
    constructor() { }
    getCard(row) {
        return this[row];
    }
    setCard(card, row) {
        this[row] = card;
    }
}
BattlefieldService.ɵfac = function BattlefieldService_Factory(t) { return new (t || BattlefieldService)(); };
BattlefieldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BattlefieldService, factory: BattlefieldService.ɵfac, providedIn: 'root' });


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

class PlayerAvatarComponent {
    constructor() {
        this.playerClass = "barbarian";
        this.playerHP = 30;
    }
    ngOnInit() {
    }
}
PlayerAvatarComponent.ɵfac = function PlayerAvatarComponent_Factory(t) { return new (t || PlayerAvatarComponent)(); };
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


class DeckComponent {
    constructor(deckService) {
        this.deckService = deckService;
    }
    ngOnInit() {
        console.log(this.deckService.getDeck());
        this.deckService.shuffle();
        console.log(this.deckService.getDeck());
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"])); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["app-deck"]], decls: 2, vars: 0, template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deck works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: deck;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiZGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogZGVjaztcclxufVxyXG4iXX0= */"] });


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

class ActionPointsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionPointsComponent.ɵfac = function ActionPointsComponent_Factory(t) { return new (t || ActionPointsComponent)(); };
ActionPointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionPointsComponent, selectors: [["app-action-points"]], decls: 2, vars: 0, template: function ActionPointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "action-points works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: action-points;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wb2ludHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJhY3Rpb24tcG9pbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBhY3Rpb24tcG9pbnRzO1xyXG59XHJcbiJdfQ== */"] });


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



function MeleeComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.card);
} }
class MeleeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeleeComponent.ɵfac = function MeleeComponent_Factory(t) { return new (t || MeleeComponent)(); };
MeleeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeleeComponent, selectors: [["app-melee"]], inputs: { card: "card" }, decls: 1, vars: 1, consts: [[3, "card", 4, "ngIf"], [3, "card"]], template: function MeleeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MeleeComponent_app_card_0_Template, 1, 1, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: melee;\r\n  display: flex;\r\n  padding: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbGVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJtZWxlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogbWVsZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuIl19 */"] });


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