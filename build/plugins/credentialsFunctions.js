!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.credentialsFunctionsPlugin=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _appendCredentialsAndButton(domObject){credentialsData&&domObject&&(domObject.html('<span class="hljs-tag"><strong>ClientId:</strong></span> '+credentialsData.clientId+'<br><span class="hljs-tag"><strong>ClientSecret:</strong></span> '+credentialsData.clientSecret+'<br><span class="hljs-tag"><strong>ClientName:</strong></span> '+credentialsData.appId+'<br><span class="hljs-tag"><strong>ProjectId:</strong></span> '+credentialsData.projectId+'<br><span class="hljs-tag"><strong>Token:</strong></span> '+credentialsData.token),domObject.next(".js-show-hide").text(credentialsData.buttonText))}function _initializeCredentialsData(initial,data){initial?credentialsData={appId:data.appId,clientId:MASKED_VALUES,clientSecret:MASKED_VALUES,projectId:data.projectId,token:data.token,buttonText:"show"}:"show"===credentialsData.buttonText?(credentialsData.clientId=data.clientId,credentialsData.clientSecret=data.clientSecret,credentialsData.buttonText="hide"):(credentialsData.clientId=MASKED_VALUES,credentialsData.clientSecret=MASKED_VALUES,credentialsData.buttonText="show")}function setCredentials(data,domObject,initial){data&&(_initializeCredentialsData(initial,data),_appendCredentialsAndButton(domObject))}var MASKED_VALUES="********",credentialsData={};module.exports={setCredentials:setCredentials}},{}]},{},[1])(1)});