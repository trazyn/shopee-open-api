"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_STATUS = exports.MESSAGE_TYPE = exports.DISPUTE_REASON = exports.ADDRESS_TYPE = exports.SHIPPING_DOCUMENT_TYPE = exports.OPERATION = exports.CANCEL_REASON = exports.LOGISTICS_STATUS = exports.RETURN_STATUS = exports.ORDER_STATUS = void 0;
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["UNPAID"] = "UNPAID";
    ORDER_STATUS["READY_TO_SHIP"] = "READY_TO_SHIP";
    ORDER_STATUS["PROCESSED"] = "PROCESSED";
    ORDER_STATUS["RETRY_SHIP"] = "RETRY_SHIP";
    ORDER_STATUS["SHIPPED"] = "SHIPPED";
    ORDER_STATUS["TO_CONFIRM_RECEIVE"] = "TO_CONFIRM_RECEIVE";
    ORDER_STATUS["IN_CANCEL"] = "IN_CANCEL";
    ORDER_STATUS["CANCELLED"] = "CANCELLED";
    ORDER_STATUS["TO_RETURN"] = "TO_RETURN";
    ORDER_STATUS["COMPLETED"] = "COMPLETED";
    ORDER_STATUS["INVOICE_PENDING"] = "INVOICE_PENDING";
})(ORDER_STATUS = exports.ORDER_STATUS || (exports.ORDER_STATUS = {}));
var RETURN_STATUS;
(function (RETURN_STATUS) {
    RETURN_STATUS["REQUESTED"] = "REQUESTED";
    RETURN_STATUS["ACCEPTED"] = "ACCEPTED";
    RETURN_STATUS["CANCELLED"] = "CANCELLED";
    RETURN_STATUS["JUDGING"] = "JUDGING";
    RETURN_STATUS["REFUND_PAID"] = "REFUND_PAID";
    RETURN_STATUS["CLOSED"] = "CLOSED";
    RETURN_STATUS["PROCESSING"] = "PROCESSING";
    RETURN_STATUS["SELLER_DISPUTE"] = "SELLER_DISPUTE";
})(RETURN_STATUS = exports.RETURN_STATUS || (exports.RETURN_STATUS = {}));
var LOGISTICS_STATUS;
(function (LOGISTICS_STATUS) {
    LOGISTICS_STATUS["LOGISTICS_NOT_START"] = "LOGISTICS_NOT_START";
    LOGISTICS_STATUS["LOGISTICS_REQUEST_CREATED"] = "LOGISTICS_REQUEST_CREATED";
    LOGISTICS_STATUS["LOGISTICS_PICKUP_DONE"] = "LOGISTICS_PICKUP_DONE";
    LOGISTICS_STATUS["LOGISTICS_PICKUP_RETRY"] = "LOGISTICS_PICKUP_RETRY";
    LOGISTICS_STATUS["LOGISTICS_PICKUP_FAILED"] = "LOGISTICS_PICKUP_FAILED";
    LOGISTICS_STATUS["LOGISTICS_DELIVERY_DONE"] = "LOGISTICS_DELIVERY_DONE";
    LOGISTICS_STATUS["LOGISTICS_DELIVERY_FAILED"] = "LOGISTICS_DELIVERY_FAILED";
    LOGISTICS_STATUS["LOGISTICS_REQUEST_CANCELED"] = "LOGISTICS_REQUEST_CANCELED";
    LOGISTICS_STATUS["LOGISTICS_COD_REJECTED"] = "LOGISTICS_COD_REJECTED";
    LOGISTICS_STATUS["LOGISTICS_READY"] = "LOGISTICS_COD_REJECTED";
    LOGISTICS_STATUS["LOGISTICS_INVALID"] = "LOGISTICS_INVALID";
    LOGISTICS_STATUS["LOGISTICS_LOST"] = "LOGISTICS_LOST";
    LOGISTICS_STATUS["LOGISTICS_UNKNOWN"] = "LOGISTICS_UNKNOWN";
})(LOGISTICS_STATUS = exports.LOGISTICS_STATUS || (exports.LOGISTICS_STATUS = {}));
var CANCEL_REASON;
(function (CANCEL_REASON) {
    CANCEL_REASON["OUT_OF_STOCK"] = "OUT_OF_STOCK";
    CANCEL_REASON["CUSTOMER_REQUEST"] = "CUSTOMER_REQUEST";
    CANCEL_REASON["UNDELIVERABLE_AREA"] = "UNDELIVERABLE_AREA";
    CANCEL_REASON["COD_NOT_SUPPORTED"] = "COD_NOT_SUPPORTED";
})(CANCEL_REASON = exports.CANCEL_REASON || (exports.CANCEL_REASON = {}));
var OPERATION;
(function (OPERATION) {
    OPERATION["ACCEPT"] = "ACCEPT";
    OPERATION["REJECT"] = "REJECT";
})(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
var SHIPPING_DOCUMENT_TYPE;
(function (SHIPPING_DOCUMENT_TYPE) {
    SHIPPING_DOCUMENT_TYPE["NORMAL_AIR_WAYBILL"] = "NORMAL_AIR_WAYBILL";
    SHIPPING_DOCUMENT_TYPE["THERMAL_AIR_WAYBILL"] = "THERMAL_AIR_WAYBILL";
    SHIPPING_DOCUMENT_TYPE["NORMAL_JOB_AIR_WAYBILL"] = "NORMAL_JOB_AIR_WAYBILL";
    SHIPPING_DOCUMENT_TYPE["THERMAL_JOB_AIR_WAYBILL"] = "THERMAL_JOB_AIR_WAYBILL";
})(SHIPPING_DOCUMENT_TYPE = exports.SHIPPING_DOCUMENT_TYPE || (exports.SHIPPING_DOCUMENT_TYPE = {}));
var ADDRESS_TYPE;
(function (ADDRESS_TYPE) {
    ADDRESS_TYPE["DEFAULT_ADDRESS"] = "DEFAULT_ADDRESS";
    ADDRESS_TYPE["PICKUP_ADDRESS"] = "PICKUP_ADDRESS";
    ADDRESS_TYPE["RETURN_ADDRESS"] = "RETURN_ADDRESS";
})(ADDRESS_TYPE = exports.ADDRESS_TYPE || (exports.ADDRESS_TYPE = {}));
var DISPUTE_REASON;
(function (DISPUTE_REASON) {
    DISPUTE_REASON["NON_RECEIPT"] = "NON_RECEIPT";
    DISPUTE_REASON["OTHER"] = "OTHER";
    DISPUTE_REASON["NOT_RECEIVED"] = "NOT_RECEIVED";
    DISPUTE_REASON["UNKNOWN"] = "UNKNOWN";
})(DISPUTE_REASON = exports.DISPUTE_REASON || (exports.DISPUTE_REASON = {}));
var MESSAGE_TYPE;
(function (MESSAGE_TYPE) {
    MESSAGE_TYPE["text"] = "text";
    MESSAGE_TYPE["sticker"] = "sticker";
    MESSAGE_TYPE["image"] = "image";
    MESSAGE_TYPE["item"] = "item";
    MESSAGE_TYPE["order"] = "order";
})(MESSAGE_TYPE = exports.MESSAGE_TYPE || (exports.MESSAGE_TYPE = {}));
var ITEM_STATUS;
(function (ITEM_STATUS) {
    ITEM_STATUS["NORMAL"] = "NORMAL";
    ITEM_STATUS["DELETED"] = "DELETED";
    ITEM_STATUS["BANNED"] = "BANNED";
    ITEM_STATUS["UNLIST"] = "UNLIST";
})(ITEM_STATUS = exports.ITEM_STATUS || (exports.ITEM_STATUS = {}));
//# sourceMappingURL=constants.js.map