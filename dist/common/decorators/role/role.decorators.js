"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE = void 0;
const common_1 = require("@nestjs/common");
const ROLE = (...role) => {
    return (0, common_1.SetMetadata)('role', role);
};
exports.ROLE = ROLE;
//# sourceMappingURL=role.decorators.js.map