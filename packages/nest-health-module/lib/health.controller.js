"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
var common_1 = require("@nestjs/common");
// import { ApiExcludeEndpoint } from '@nestjs/swagger';
var health_service_1 = require("./health.service");
var HealthController = /** @class */ (function () {
    function HealthController(healthService) {
        this.healthService = healthService;
    }
    // @ApiExcludeEndpoint()
    HealthController.prototype.getLive = function () {
        // return 200
    };
    // @ApiExcludeEndpoint()
    HealthController.prototype.getReady = function () {
        return this.healthService.getReady();
    };
    __decorate([
        common_1.Get('live'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HealthController.prototype, "getLive", null);
    __decorate([
        common_1.Get('ready'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HealthController.prototype, "getReady", null);
    HealthController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [health_service_1.HealthService])
    ], HealthController);
    return HealthController;
}());
exports.HealthController = HealthController;
