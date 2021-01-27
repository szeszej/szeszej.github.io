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
        speed: 1,
    },
    {
        name: "Taernijski Rycerz",
        attack: 2,
        hp: 4,
        cost: 3,
        description: "Po prostu Rycerz",
        type: "ally",
        speed: 1,
    },
    {
        name: "Taernijski Barbarzyńca",
        attack: 3,
        hp: 1,
        cost: 2,
        description: "Wali mocno aż miło",
        type: "ally",
        speed: 1,
    },
    {
        name: "Taernijski Mag Ognia",
        attack: 4,
        hp: 2,
        cost: 4,
        description: "Strzeż się ognia",
        type: "ally",
        speed: 2,
    },
    {
        name: "Taernijski Łucznik",
        attack: 2,
        hp: 2,
        cost: 2,
        description: "Salwa!",
        type: "ally",
        speed: 2,
    },
    {
        name: "Taernijski Druid",
        attack: 1,
        hp: 6,
        cost: 4,
        description: "Za naturę!",
        type: "ally",
        speed: 3,
    },
    {
        name: "Taernijski Voodoo",
        attack: 2,
        hp: 1,
        cost: 4,
        description: "Szpila w oko!",
        type: "ally",
        speed: 3,
    },
    {
        name: "Ogr Bojowy",
        attack: 5,
        hp: 5,
        cost: 5,
        description: "Waaargh!",
        type: "ally",
        speed: 1,
    },
    {
        name: "Harpia",
        attack: 3,
        hp: 7,
        cost: 5,
        description: "Łiii!",
        type: "ally",
        speed: 2,
    },
    {
        name: "Żaba",
        attack: 3,
        hp: 3,
        cost: 4,
        description: "Skrzek!",
        type: "ally",
        speed: 2,
    },
    {
        name: "Bibliotekarz",
        attack: 5,
        hp: 8,
        cost: 8,
        description: "Cisza!",
        type: "ally",
        speed: 3,
    },
    {
        name: "Babadek",
        attack: 7,
        hp: 7,
        cost: 7,
        description: "Gdzie moje psy?",
        type: "ally",
        speed: 1,
    },
    {
        name: "Ghadira",
        attack: 10,
        hp: 7,
        cost: 9,
        description: "Kto wchodzi do mojej wieży?",
        type: "ally",
        speed: 1,
    },
    {
        name: "Gregorius",
        attack: 4,
        hp: 6,
        cost: 7,
        description: "Kto wchodzi do mojej wieży?",
        type: "ally",
        speed: 3,
    },
    {
        name: "Ropuch",
        attack: 6,
        hp: 10,
        cost: 8,
        description: "Czy to książę?",
        type: "ally",
        speed: 2,
    },
    {
        name: "Niedźwiedź",
        attack: 2,
        hp: 2,
        cost: 2,
        description: "Miś 2/2 za 2.",
        type: "ally",
        speed: 1,
    },
    {
        name: "Utorski Asasyn",
        attack: 8,
        hp: 1,
        cost: 4,
        description: "Jak się go złapie to jest frajer.",
        type: "ally",
        speed: 1,
    },
    {
        name: "Taernijski Tarczownik",
        attack: 2,
        hp: 10,
        cost: 6,
        description: "I co mu zrobisz?",
        type: "ally",
        speed: 1,
    },
    {
        name: "Taernijski Kusznik",
        attack: 5,
        hp: 3,
        cost: 5,
        description: "Wali mocniej niż z łuku.",
        type: "ally",
        speed: 2,
    },
    {
        name: "Utorski Ogr",
        attack: 12,
        hp: 12,
        cost: 12,
        description: "Chodząca twierdza.",
        type: "ally",
        speed: 1,
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
    } }, directives: [_deck_deck_component__WEBPACK_IMPORTED_MODULE_1__["DeckComponent"], _hand_hand_component__WEBPACK_IMPORTED_MODULE_2__["HandComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _action_points_action_points_component__WEBPACK_IMPORTED_MODULE_4__["ActionPointsComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: player;\r\n  border-top: 1px solid black;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-areas: \"deck hand action-points\";\r\n  grid-template-columns: 15vw 70vw 15vw;\r\n  grid-template-rows: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxxQ0FBcUM7RUFDckMsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJkZWNrIGhhbmQgYWN0aW9uLXBvaW50c1wiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyA3MHZ3IDE1dnc7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("ngStyle", ctx_r0.calculateRotation(i_r2))("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, card_r1, i_r2));
} }
class HandComponent {
    constructor(handService) {
        this.handService = handService;
        this.cards = [];
    }
    ngOnInit() {
        this.handService.drawCards(4);
    }
    ngDoCheck() {
        this.cards = this.handService.getHand();
    }
    calculateRotation(index) {
        let steps = 90 / this.cards.length;
        return { transform: `rotate(${-45 + steps * index}deg)` };
    }
}
HandComponent.ɵfac = function HandComponent_Factory(t) { return new (t || HandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hand_service__WEBPACK_IMPORTED_MODULE_1__["HandService"])); };
HandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandComponent, selectors: [["app-hand"]], decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "card", "ngStyle", "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "card", "ngStyle", "cdkDragData"]], template: function HandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HandComponent_app_card_0_Template, 1, 6, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: hand;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJoYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBoYW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/player.service */ "ufXC");
/* harmony import */ var _player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _mental_mental_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mental/mental.component */ "Dm1F");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ranged/ranged.component */ "F6y0");
/* harmony import */ var _melee_melee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./melee/melee.component */ "tFtR");
/* harmony import */ var _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./opponent-avatar/opponent-avatar.component */ "6TkF");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/card/card.component */ "Fe25");












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
    constructor(battlefieldService, handService, playerService) {
        this.battlefieldService = battlefieldService;
        this.handService = handService;
        this.playerService = playerService;
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
        this.battlefieldService.oppHpEmitter.subscribe((arg) => this.oppHP = arg);
    }
    ngOnInit() {
        this.oppHP = this.battlefieldService.getOppHp();
        this.rangedOpp = this.battlefieldService.getCard("rangedOpp");
    }
    drop(event) {
        this.showMental = true;
        this.showRanged = true;
        this.showMelee = true;
        if ((event.container.data === "melee" || event.container.data === "ranged" || event.container.data === "mental") && event.item.data.card.cost <= this.playerService.getActionPoints().current) {
            this.playerService.payCosts(event.item.data.card.cost);
            this.battlefieldService.setCard(event.item.data.card, event.container.data);
            this.handService.removeCard(event.item.data.index);
        }
    }
}
BattlefieldComponent.ɵfac = function BattlefieldComponent_Factory(t) { return new (t || BattlefieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_battlefield_service__WEBPACK_IMPORTED_MODULE_1__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_2__["HandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"])); };
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
    } }, directives: [_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_4__["PlayerAvatarComponent"], _mental_mental_component__WEBPACK_IMPORTED_MODULE_5__["MentalComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_8__["RangedComponent"], _melee_melee_component__WEBPACK_IMPORTED_MODULE_9__["MeleeComponent"], _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_10__["OpponentAvatarComponent"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: battlefield;\r\n  display: grid;\r\n  grid-template-areas: \"player mental opponent\" \"player ranged opponent\" \"player melee opponent\";\r\n  grid-template-columns: 20vw 60vw 20vw;\r\n  grid-auto-rows: 33% 33% 33%\r\n}\r\n\r\n.playerCard[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhGQUE4RjtFQUM5RixxQ0FBcUM7RUFDckM7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFDZiIsImZpbGUiOiJiYXR0bGVmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogYmF0dGxlZmllbGQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBsYXllciBtZW50YWwgb3Bwb25lbnRcIiBcInBsYXllciByYW5nZWQgb3Bwb25lbnRcIiBcInBsYXllciBtZWxlZSBvcHBvbmVudFwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyA2MHZ3IDIwdnc7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDMzJSAzMyUgMzMlXHJcbn1cclxuXHJcbi5wbGF5ZXJDYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: mental;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFDZiIsImZpbGUiOiJtZW50YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IG1lbnRhbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm9wcG9uZW50Q2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F11b":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
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
    sendData(cards, player) {
        console.log(cards);
        return this.http.put("https://recipe-book-app-bce43.firebaseio.com/recipes/player" + player + ".json", cards);
    }
    getData(player) {
        return this.http.get("https://recipe-book-app-bce43.firebaseio.com/recipes/player" + player + ".json");
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: ranged;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFDZiIsImZpbGUiOiJyYW5nZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IHJhbmdlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm9wcG9uZW50Q2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });


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
    } }, styles: ["[_nghost-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 0.75em;\r\n  text-align: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border: 1px solid black;\r\n  margin: 0 auto;\r\n  max-height: 8em;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: -0.5em;\r\n  width: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtBQUNaIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtaGVpZ2h0OiA4ZW07XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMmVtO1xyXG4gIGxlZnQ6IC0wLjVlbTtcclxuICB3aWR0aDogMWVtO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/card/card.model */ "mIaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _combat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combat.service */ "TAF1");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.service */ "ufXC");
/* harmony import */ var _battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battlefield/battlefield.service */ "b9KQ");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "F11b");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./opponent/opponent.component */ "+1ZF");
/* harmony import */ var _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./battlefield/battlefield.component */ "93yE");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player.component */ "0M9o");










class AppComponent {
    constructor(combatService, playerService, battlefieldService, httpService) {
        this.combatService = combatService;
        this.playerService = playerService;
        this.battlefieldService = battlefieldService;
        this.httpService = httpService;
        this.title = 'taern-card';
        this.isPlayerNumberSet = false;
        this.isDataSent = false;
        this.isDataReceived = false;
    }
    combat() {
        this.combatService.commenceCombat();
        this.isDataSent = false;
        this.isDataReceived = false;
    }
    setPlayerNumber(number) {
        this.playerService.setPlayerNumber(number);
        this.isPlayerNumberSet = true;
        this.playerNumber = number;
    }
    sendData() {
        this.httpService.sendData({ melee: this.battlefieldService.getCard("melee") ? this.battlefieldService.getCard("melee") : "", ranged: this.battlefieldService.getCard("ranged") ? this.battlefieldService.getCard("ranged") : "", mental: this.battlefieldService.getCard("mental") ? this.battlefieldService.getCard("mental") : "" }, this.playerService.getPlayerNumber()).subscribe(response => {
            this.isDataSent = true;
            console.log(response);
        });
    }
    getData() {
        this.httpService.getData(this.playerService.getPlayerNumber() === 1 ? 2 : 1).subscribe(response => {
            response.melee ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.melee), "meleeOpp") : console.log(response);
            response.ranged ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.ranged), "rangedOpp") : console.log(response);
            response.mental ? this.battlefieldService.setCard(new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](response.mental), "mentalOpp") : console.log(response);
            this.isDataReceived = true;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_combat_service__WEBPACK_IMPORTED_MODULE_2__["CombatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_player_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_4__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 6, consts: [["cdkDropListGroup", "", 1, "wrapper"], [1, "buttons"], [1, "playerNumber", 3, "disabled", "click"], [1, "sendData", 3, "disabled", "click"], [1, "receiveData", 3, "disabled", "click"], [1, "combat", 3, "disabled", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { return ctx.setPlayerNumber(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Player 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.setPlayerNumber(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Player 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Wy\u015Blij dane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Odbierz dane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.combat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Walka!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-opponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-battlefield");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isPlayerNumberSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isPlayerNumberSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isPlayerNumberSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isDataSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isDataReceived);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Player ", ctx.playerNumber, "");
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_7__["OpponentComponent"], _battlefield_battlefield_component__WEBPACK_IMPORTED_MODULE_8__["BattlefieldComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_9__["PlayerComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-areas: \"opponent\" \"battlefield\" \"player\";\r\n  grid-template-rows: 20vh 60vh 20vh;\r\n  grid-template-columns: 100%;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJvcHBvbmVudFwiIFwiYmF0dGxlZmllbGRcIiBcInBsYXllclwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCA2MHZoIDIwdmg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMmVtO1xyXG4gIGxlZnQ6IDJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "TAF1":
/*!***********************************!*\
  !*** ./src/app/combat.service.ts ***!
  \***********************************/
/*! exports provided: CombatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatService", function() { return CombatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battlefield/battlefield.service */ "b9KQ");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.service */ "ufXC");
/* harmony import */ var _player_hand_hand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/hand/hand.service */ "THtM");




class CombatService {
    constructor(battlefieldService, playerService, handService) {
        this.battlefieldService = battlefieldService;
        this.playerService = playerService;
        this.handService = handService;
    }
    commenceCombat() {
        const rows = ["mental", "ranged", "melee"];
        rows.forEach(row => {
            let playerCard = this.battlefieldService.getCard(row);
            let oppCard = this.battlefieldService.getCard(row + "Opp");
            if (playerCard) {
                if (oppCard) {
                    this.clash(playerCard, oppCard, row);
                }
                else {
                    this.battlefieldService.changeOppHp(-playerCard.attack);
                }
            }
            else if (oppCard) {
                this.playerService.changeLifePoints(-oppCard.attack);
            }
        });
        this.newTurn();
    }
    clash(playerCard, oppCard, row) {
        if (playerCard.speed === oppCard.speed) {
            //jeśli karty mają taką samą szybkość, to biją w siebie nawzajem, a dopiero potem sprawdzamy czy ktoś zginął
            this.battlefieldService.changeCardHp(-playerCard.attack, row + "Opp");
            this.battlefieldService.changeCardHp(-oppCard.attack, row);
            this.battlefieldService.buryTheFallen();
        }
        else if (playerCard.speed < oppCard.speed) {
            //jeśli karty mają różną szybkość, to najpierw szybsza zadaje obrażenia, a wolniejsza tylko jeśli przeżyje
            // tutaj karta gracza jest wolniejsza, więc przeciwnik pierwszy zadaje obrażenia
            this.battlefieldService.changeCardHp(-oppCard.attack, row);
            this.battlefieldService.buryTheFallen();
            //sprawdzamy czy karta gracza nadal żyje
            if (this.battlefieldService.getCard(row)) {
                //jak tak to też zadaje obrażeni
                this.battlefieldService.changeCardHp(-playerCard.attack, row + "Opp");
                this.battlefieldService.buryTheFallen();
            }
        }
        else {
            // tutaj karta przeciwnika jest wolniejsza, więc gracz pierwszy zadaje obrażenia
            this.battlefieldService.changeCardHp(-playerCard.attack, row + "Opp");
            this.battlefieldService.buryTheFallen();
            //sprawdzamy czy karta przeciwnika nadal żyje
            if (this.battlefieldService.getCard(row + "Opp")) {
                //jak tak to też zadaje obrażeni
                this.battlefieldService.changeCardHp(-oppCard.attack, row);
                this.battlefieldService.buryTheFallen();
            }
        }
    }
    newTurn() {
        this.playerService.addActionPoints(1);
        this.playerService.refreshActionPoints();
        this.handService.drawCards(1);
    }
}
CombatService.ɵfac = function CombatService_Factory(t) { return new (t || CombatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_battlefield_battlefield_service__WEBPACK_IMPORTED_MODULE_1__["BattlefieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_hand_hand_service__WEBPACK_IMPORTED_MODULE_3__["HandService"])); };
CombatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CombatService, factory: CombatService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _deck_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck/deck.service */ "Zsfq");


class HandService {
    constructor(deckService) {
        this.deckService = deckService;
        this.hand = [];
    }
    getHand() {
        return this.hand;
    }
    setHand(hand) {
        this.hand = hand;
    }
    drawCards(number) {
        this.hand = this.hand.concat(this.deckService.draw(number));
    }
    removeCard(index) {
        this.hand.splice(index, 1);
    }
}
HandService.ɵfac = function HandService_Factory(t) { return new (t || HandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_deck_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"])); };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
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
        _battlefield_opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_16__["OpponentAvatarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
/* harmony import */ var _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/card/card.model */ "mIaL");
/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/cards */ "+bcQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DeckService {
    constructor() {
        this.deck = _data_cards__WEBPACK_IMPORTED_MODULE_1__["cards"].map(card => new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](card)).concat(_data_cards__WEBPACK_IMPORTED_MODULE_1__["cards"].map(card => new _shared_card_card_model__WEBPACK_IMPORTED_MODULE_0__["Card"](card)));
        this.discardPile = [];
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
        return this.deck.splice(0, number);
    }
    discard(card) {
        this.discardPile.push(card);
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
/* harmony import */ var _player_deck_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/deck/deck.service */ "Zsfq");



class BattlefieldService {
    constructor(deckService) {
        this.deckService = deckService;
        this.oppHp = 30;
        this.cardEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.oppHpEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getCard(row) {
        return this[row];
    }
    setCard(card, row) {
        this[row] = card;
        this.cardEmitter.emit({ card: card, row: row });
    }
    getOppHp() {
        return this.oppHp;
    }
    changeOppHp(number) {
        this.oppHp += number;
        this.oppHpEmitter.emit(this.oppHp);
    }
    changeCardHp(number, row) {
        this[row].hp += number;
    }
    removeCard(card, row) {
        this.deckService.discard(card);
        this[row] = null;
        this.cardEmitter.emit({ card: null, row: row });
    }
    buryTheFallen() {
        const rows = ["mental", "ranged", "melee", "mentalOpp", "rangedOpp", "meleeOpp"];
        rows.forEach(row => {
            if (this[row] && this[row].hp <= 0) {
                this.removeCard(this[row], row);
            }
        });
    }
}
BattlefieldService.ɵfac = function BattlefieldService_Factory(t) { return new (t || BattlefieldService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_deck_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"])); };
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
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/player.service */ "ufXC");


class PlayerAvatarComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.playerClass = "barbarian";
    }
    ngOnInit() {
        this.playerHP = this.playerService.getLifePoints();
    }
    ngDoCheck() {
        this.playerHP = this.playerService.getLifePoints();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Karty w talii: ", ctx_r0.cardsinDeck, "");
} }
class DeckComponent {
    constructor(deckService) {
        this.deckService = deckService;
        this.showTooltip = false;
    }
    ngOnInit() {
        this.deckService.shuffle();
        this.cardsinDeck = this.deckService.getNumberOfCards();
    }
    ngDoCheck() {
        this.cardsinDeck = this.deckService.getNumberOfCards();
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: deck;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.deck[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n  background-image: url(\"/assets/images/logo/logo.png\");\r\n  background-size: 80%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.deckTooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogZGVjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWNrIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmRlY2tUb29sdGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "ufXC");


class ActionPointsComponent {
    constructor(playerService) {
        this.playerService = playerService;
    }
    ngOnInit() {
        this.currentActionPoints = this.playerService.getActionPoints().current;
        this.maxActionPoints = this.playerService.getActionPoints().max;
    }
    ngDoCheck() {
        this.currentActionPoints = this.playerService.getActionPoints().current;
        this.maxActionPoints = this.playerService.getActionPoints().max;
    }
}
ActionPointsComponent.ɵfac = function ActionPointsComponent_Factory(t) { return new (t || ActionPointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: melee;\r\n  display: flex;\r\n  padding: 2px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.opponentCard[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  height: 10em;\r\n  width: 8em;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbGVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtBQUNmIiwiZmlsZSI6Im1lbGVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBtZWxlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm9wcG9uZW50Q2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlayerService {
    constructor() {
        this.maxActionPoints = 3;
        this.currentActionPoints = 3;
        this.hp = 30;
        this.playerNumber = 1;
    }
    getActionPoints() {
        return { current: this.currentActionPoints, max: this.maxActionPoints };
    }
    addActionPoints(number) {
        this.maxActionPoints === 12 ? this.maxActionPoints += 0 : this.maxActionPoints += number;
    }
    payCosts(number) {
        this.currentActionPoints -= number;
    }
    refreshActionPoints() {
        this.currentActionPoints = this.maxActionPoints;
    }
    getLifePoints() {
        return this.hp;
    }
    changeLifePoints(number) {
        this.hp += number;
    }
    getPlayerNumber() {
        return this.playerNumber;
    }
    setPlayerNumber(number) {
        this.playerNumber = number;
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


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