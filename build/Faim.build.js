window["Faim"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kexun on 17/9/2.
 */
var ElementId_1 = __webpack_require__(6);
var Element = (function () {
    function Element(obj) {
        Element.count++;
        this.elementId = new ElementId_1.ElementId(Element.count);
        this.name = obj.name;
        this.category = obj.category;
        this.type = obj.type;
        this.document = obj.currDocument;
    }
    Element.count = 0;
    return Element;
}());
exports.Element = Element;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectBase = (function () {
    function ProjectBase(args) {
        this.fields = [];
        this.update(args);
    }
    ProjectBase.prototype.getSingleData = function (k) {
        return this[k];
    };
    ProjectBase.prototype.getAllData = function () {
        var _this = this;
        var result = {};
        this.fields.forEach(function (ele) {
            result[ele] = _this[ele];
        });
        return result;
    };
    ProjectBase.prototype.update = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        this.fields.forEach(function (ele) {
            if (data[ele]) {
                _this[ele] = data[ele];
            }
        });
    };
    return ProjectBase;
}());
exports.ProjectBase = ProjectBase;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var info_1 = __webpack_require__(3);
exports.info = info_1.info;
var Document_1 = __webpack_require__(4);
exports.Document = Document_1.Document;
var Element_1 = __webpack_require__(0);
exports.Element = Element_1.Element;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var language;
(function (language) {
    language["EN"] = "\u82F1\u6587";
    language["CN"] = "\u4E2D\u6587";
})(language || (language = {}));
exports.info = {
    version: '0.1.0',
    language: language.CN,
    developer: ''
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataCenter_1 = __webpack_require__(5);
var Loader_1 = __webpack_require__(10);
var View3D_1 = __webpack_require__(11);
var Document = (function () {
    function Document() {
        this.dataCenter = new DataCenter_1.default();
        this.utils = {
            loader: new Loader_1.default()
        };
    }
    Object.defineProperty(Document.prototype, "elementCount", {
        //获取当前已创建过的 Element 总数
        get: function () {
            return this.dataCenter.elementCount;
        },
        enumerable: true,
        configurable: true
    });
    Document.prototype.loadData = function () {
        var _this = this;
        this.utils.loader.load('', function (data) {
            _this.dataCenter.update(data);
        });
    };
    Document.prototype.getAllProjectInfo = function () {
        return this.dataCenter.projectInfo.getAllData();
    };
    Document.prototype.getProjectInfo = function (k) {
        return this.dataCenter.projectInfo.getSingleData(k);
    };
    Document.prototype.getAllProjectPosition = function () {
        return this.dataCenter.projectPosition.getAllData();
    };
    Document.prototype.getProjectPosition = function (k) {
        return this.dataCenter.projectPosition.getSingleData(k);
    };
    Document.prototype.getAllProjectLocation = function () {
        return this.dataCenter.projectPosition.getAllData();
    };
    Document.prototype.getProjectLocation = function (k) {
        return this.dataCenter.projectLocation.getSingleData(k);
    };
    Document.prototype.createView = function (type) {
        switch (type) {
            case '3D':
                this.dataCenter.views.push(new View3D_1.View3D());
                break;
            default:
                console.warn("there is such a view type: " + type);
        }
    };
    return Document;
}());
exports.Document = Document;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Element_1 = __webpack_require__(0);
var ProjectInfo_1 = __webpack_require__(7);
var ProjectPosition_1 = __webpack_require__(8);
var ProjectLocation_1 = __webpack_require__(9);
var DataCenter = (function () {
    function DataCenter() {
        this.allTypes = ['projectInfo', 'projectPosition', 'projectLocation'];
        this.elementCount = Element_1.Element.count;
        this.views = [];
        this.projectInfo = new ProjectInfo_1.default();
        this.projectPosition = new ProjectPosition_1.default();
        this.projectLocation = new ProjectLocation_1.default();
    }
    DataCenter.prototype.update = function (data) {
        var _this = this;
        this.allTypes.forEach(function (ele) {
            _this[ele].update(data[ele]);
        });
    };
    return DataCenter;
}());
exports.default = DataCenter;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kexun on 17/9/3.
 */
var ElementId = (function () {
    function ElementId(num) {
        this.value = num;
    }
    return ElementId;
}());
exports.ElementId = ElementId;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectBase_1 = __webpack_require__(1);
var ProjectInfo = (function (_super) {
    __extends(ProjectInfo, _super);
    function ProjectInfo(args) {
        var _this = _super.call(this, args) || this;
        _this.fields = [
            'address',
            'author',
            'buildingName',
            'clientName',
            'issueDate',
            'name',
            'number',
            'organizationDescription',
            'organizationName',
            'status'
        ];
        return _this;
    }
    return ProjectInfo;
}(ProjectBase_1.ProjectBase));
exports.default = ProjectInfo;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectBase_1 = __webpack_require__(1);
var ProjectPosition = (function (_super) {
    __extends(ProjectPosition, _super);
    function ProjectPosition(args) {
        var _this = _super.call(this, args) || this;
        _this.fields = [
            'angle',
            'eastWest',
            'elevation',
            'northSouth'
        ];
        return _this;
    }
    return ProjectPosition;
}(ProjectBase_1.ProjectBase));
exports.default = ProjectPosition;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectBase_1 = __webpack_require__(1);
var ProjectLocation = (function (_super) {
    __extends(ProjectLocation, _super);
    function ProjectLocation(args) {
        var _this = _super.call(this, args) || this;
        _this.fields = [
            'elevation',
            'latitude',
            'longtitude',
            'placeName',
            'timeZone'
        ];
        return _this;
    }
    return ProjectLocation;
}(ProjectBase_1.ProjectBase));
exports.default = ProjectLocation;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Loader = (function () {
    function Loader() {
    }
    Loader.prototype.load = function (url, succeedHandler, failHandler) {
        $.ajax({
            success: function (r) {
                r = {
                    projectInfo: {
                        address: '上海市浦东新区张江集电港',
                        author: 'xxxx',
                        buildingName: '集电港八号楼',
                        clientName: '爱福窝',
                        issueDate: new Date('2017/08/31'),
                        name: '爱福窝室内改造',
                        organizationName: '上海市品茗设计',
                    },
                    projectPosition: {
                        elevation: 11
                    },
                    projectLocation: {}
                };
                succeedHandler(r);
            }
        });
    };
    return Loader;
}());
exports.default = Loader;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kexun on 17/9/2.
 */
var ViewBase_1 = __webpack_require__(12);
var View3D = (function (_super) {
    __extends(View3D, _super);
    function View3D() {
        return _super.call(this) || this;
    }
    return View3D;
}(ViewBase_1.ViewBase));
exports.View3D = View3D;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kexun on 17/9/2.
 */
var Element_1 = __webpack_require__(0);
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        return _super.call(this) || this;
    }
    return ViewBase;
}(Element_1.Element));
exports.ViewBase = ViewBase;


/***/ })
/******/ ]);