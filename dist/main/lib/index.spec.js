"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const index_1 = require("./index");
ava_1.default('toString', (t) => {
    const dateObj = new Date();
    dateObj.setTime(new Date().getTime() + 30000);
    t.is(index_1.format(dateObj), 'in 30 seconds');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW5kZXguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFzQjtBQUV0QixtQ0FBZ0M7QUFFaEMsYUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLENBQUMsQ0FBQyxDQUFBIn0=