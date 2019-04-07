(function (global,factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (factory((global.momoapi = {}),global.jQuery));
  }(this,function(exports,$){
  		'use strict';
  		$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  });
})();