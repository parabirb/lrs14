// Generated by psc version 0.9.3
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Data_Show = require("../Data.Show");
var Control_Applicative = require("../Control.Applicative");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Unit = require("../Data.Unit");
var traceShowM = function (dictShow) {
    return function (dictMonad) {
        return function (s) {
            return $foreign.traceAny(Data_Show.show(dictShow)(s))(function (v) {
                return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(s);
            });
        };
    };
};
var traceShow = function (dictShow) {
    return function ($16) {
        return $foreign.traceAny(Data_Show.show(dictShow)($16));
    };
};
var traceAnyM = function (dictMonad) {
    return function (s) {
        return $foreign.traceAny(s)(function (v) {
            return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(s);
        });
    };
};
var traceAnyA = function (dictApplicative) {
    return function (s) {
        return $foreign.traceAny(s)(function (v) {
            return Control_Applicative.pure(dictApplicative)(Data_Unit.unit);
        });
    };
};
var traceShowA = function (dictShow) {
    return function (dictApplicative) {
        return function ($17) {
            return traceAnyA(dictApplicative)(Data_Show.show(dictShow)($17));
        };
    };
};
var traceA = function (dictApplicative) {
    return traceAnyA(dictApplicative);
};
var trace = $foreign.traceAny;
var spy = function (a) {
    return $foreign.traceAny(a)(function (v) {
        return a;
    });
};
module.exports = {
    spy: spy, 
    trace: trace, 
    traceA: traceA, 
    traceAnyA: traceAnyA, 
    traceAnyM: traceAnyM, 
    traceShow: traceShow, 
    traceShowA: traceShowA, 
    traceShowM: traceShowM, 
    traceAny: $foreign.traceAny
};
