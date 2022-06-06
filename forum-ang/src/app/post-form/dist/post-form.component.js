"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostFormComponent = void 0;
var core_1 = require("@angular/core");
var post_1 = require("../post");
var PostFormComponent = /** @class */ (function () {
    function PostFormComponent() {
        this.model = new post_1.Post(1, 'title', 'contenu');
        this.submitted = false;
    }
    PostFormComponent.prototype.ngOnInit = function () {
    };
    PostFormComponent.prototype.onSubmit = function () {
        console.log("Submitted");
        this.submitted = true;
    };
    PostFormComponent.prototype.newPost = function () {
        this.model = new post_1.Post(42, 'new', 'new');
    };
    PostFormComponent = __decorate([
        core_1.Component({
            selector: 'app-post-form',
            templateUrl: './post-form.component.html',
            styleUrls: ['./post-form.component.css']
        })
    ], PostFormComponent);
    return PostFormComponent;
}());
exports.PostFormComponent = PostFormComponent;
