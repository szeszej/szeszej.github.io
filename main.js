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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/card/card.component */ "Fe25");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");




function HandComponent_app_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 1);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("ngStyle", ctx_r0.calculateRotation(i_r2));
} }
class HandComponent {
    constructor() {
        this.cards = ["attack", "buff", "debuff", "healing"];
    }
    ngOnInit() {
    }
    calculateRotation(index) {
        let steps = 90 / this.cards.length;
        return { transform: `rotate(${-45 + steps * index}deg) translateY(-3em)` };
    }
}
HandComponent.ɵfac = function HandComponent_Factory(t) { return new (t || HandComponent)(); };
HandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandComponent, selectors: [["app-hand"]], decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "card", "ngStyle", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "card", "ngStyle"]], template: function HandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HandComponent_app_card_0_Template, 1, 2, "app-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: hand;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJoYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBoYW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-avatar/player-avatar.component */ "g6fd");
/* harmony import */ var _mental_mental_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mental/mental.component */ "Dm1F");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ranged/ranged.component */ "F6y0");
/* harmony import */ var _melee_melee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./melee/melee.component */ "tFtR");
/* harmony import */ var _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opponent-avatar/opponent-avatar.component */ "6TkF");







class BattlefieldComponent {
    constructor() { }
    ngOnInit() {
    }
    drop(event) {
        console.log(event.container);
    }
}
BattlefieldComponent.ɵfac = function BattlefieldComponent_Factory(t) { return new (t || BattlefieldComponent)(); };
BattlefieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattlefieldComponent, selectors: [["app-battlefield"]], decls: 5, vars: 0, consts: [["cdkDropList", "", 3, "cdkDropListDropped"]], template: function BattlefieldComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_player_avatar_player_avatar_component__WEBPACK_IMPORTED_MODULE_1__["PlayerAvatarComponent"], _mental_mental_component__WEBPACK_IMPORTED_MODULE_2__["MentalComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _ranged_ranged_component__WEBPACK_IMPORTED_MODULE_4__["RangedComponent"], _melee_melee_component__WEBPACK_IMPORTED_MODULE_5__["MeleeComponent"], _opponent_avatar_opponent_avatar_component__WEBPACK_IMPORTED_MODULE_6__["OpponentAvatarComponent"]], styles: ["[_nghost-%COMP%] {\r\n  grid-area: battlefield;\r\n  display: grid;\r\n  grid-template-areas: \"player mental opponent\" \"player ranged opponent\" \"player melee opponent\";\r\n  grid-template-columns: 20vw 60vw 20vw;\r\n  grid-auto-rows: 33% 33% 33%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhGQUE4RjtFQUM5RixxQ0FBcUM7RUFDckM7QUFDRiIsImZpbGUiOiJiYXR0bGVmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogYmF0dGxlZmllbGQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBsYXllciBtZW50YWwgb3Bwb25lbnRcIiBcInBsYXllciByYW5nZWQgb3Bwb25lbnRcIiBcInBsYXllciBtZWxlZSBvcHBvbmVudFwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyA2MHZ3IDIwdnc7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDMzJSAzMyUgMzMlXHJcbn1cclxuIl19 */"] });


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

class MentalComponent {
    constructor() { }
    ngOnInit() {
    }
}
MentalComponent.ɵfac = function MentalComponent_Factory(t) { return new (t || MentalComponent)(); };
MentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentalComponent, selectors: [["app-mental"]], decls: 0, vars: 0, template: function MentalComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: mental;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJtZW50YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IG1lbnRhbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });


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

class RangedComponent {
    constructor() { }
    ngOnInit() {
    }
}
RangedComponent.ɵfac = function RangedComponent_Factory(t) { return new (t || RangedComponent)(); };
RangedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangedComponent, selectors: [["app-ranged"]], decls: 0, vars: 0, template: function RangedComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: ranged;\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJyYW5nZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBncmlkLWFyZWE6IHJhbmdlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });


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
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, decls: 13, vars: 2, consts: [[1, "name"], [1, "image"], ["alt", "card image", 3, "src"], [1, "stats"], [1, "melee"], [1, "ranged"], [1, "mental"], [1, "hp"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/cards/" + ctx.card + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border: 1px solid black;\r\n  margin: 0 auto;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2em;\r\n  left: -0.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtBQUNkIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMmVtO1xyXG4gIGxlZnQ6IC0wLjVlbTtcclxufVxyXG4iXX0= */"] });


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

class DeckComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["app-deck"]], decls: 2, vars: 0, template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deck works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: deck;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiZGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtYXJlYTogZGVjaztcclxufVxyXG4iXX0= */"] });


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

class MeleeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeleeComponent.ɵfac = function MeleeComponent_Factory(t) { return new (t || MeleeComponent)(); };
MeleeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeleeComponent, selectors: [["app-melee"]], decls: 0, vars: 0, template: function MeleeComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\r\n  grid-area: melee;\r\n  display: flex;\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  height: 10em;\r\n  width: 8em;\r\n  border: 1px solid black;\r\n  position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbGVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im1lbGVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC1hcmVhOiBtZWxlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIGhlaWdodDogMTBlbTtcclxuICB3aWR0aDogOGVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */"] });


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