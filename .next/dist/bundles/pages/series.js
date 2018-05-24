module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBox__ = __webpack_require__("./components/SearchBox.js");

var _jsxFileName = '/Users/danielszenasi/Projects/with-ant-design-app/components/Header.js';

var Header = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Header;



var MyHeader = function MyHeader() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Header,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBox__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (MyHeader);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_locale_provider_en_US__ = __webpack_require__("antd/lib/locale-provider/en_US");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_index_less__ = __webpack_require__("./styles/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_index_less__);



var _jsxFileName = '/Users/danielszenasi/Projects/with-ant-design-app/components/MyLayout.js';





var Content = __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content,
    Sider = __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Sider;





var MyLayout = function MyLayout(_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'This is the default title' : _ref$title;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,
        { className: 'layout', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'title',
                {
                    className: 'jsx-2174602213',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                'Subtitles'
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-2174602213',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-2174602213',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/styles.css', className: 'jsx-2174602213',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            {
                className: 'jsx-2174602213' + ' ' + 'background-container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2174602213',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', {
                    className: 'jsx-2174602213' + ' ' + 'background-image',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', {
                className: 'jsx-2174602213' + ' ' + 'background-noise',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                Sider,
                { width: 200, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a,
                    {
                        mode: 'inline',
                        defaultSelectedKeys: ['1'],
                        defaultOpenKeys: ['sub1'],
                        style: { height: '100%', borderRight: 0 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,
                        { key: '1', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_next_link___default.a,
                            { href: '/series', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 34
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                                'span',
                                {
                                    className: 'jsx-2174602213',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 35
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, { type: 'mail', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 36
                                    }
                                }),
                                'Movies'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,
                        { key: '2', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_next_link___default.a,
                            { href: '/series', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 42
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                                'span',
                                {
                                    className: 'jsx-2174602213',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 43
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, { type: 'mail', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                    }
                                }),
                                'Movies'
                            )
                        )
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,
                { style: { padding: '0 24px 24px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    Content,
                    { style: { padding: 60, margin: 0, minHeight: 280 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    children
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_style___default.a, {
            styleId: '2174602213',
            css: '#__next{height:100%;}.ant-layout{height:100%;}.ant-layout,.ant-layout-sider{background:none;}.ant-menu{background-color:rgba(0,0,0,.15);}.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:transparent;}.ant-layout-footer{background:none;}.background-container{position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1;background-color:#3f4245;}.background-image{background-image:url(/static/img/bg-image.png);background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:100%;position:absolute;z-index:2;}.background-noise{position:absolute;width:100%;height:100%;background:url(/static/img/noise.png);z-index:2;}.ant-menu-inline .ant-menu-item-selected::after{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0QrQixBQUd5QixBQUdBLEFBR0ksQUFHaUIsQUFHSixBQUdiLEFBR0QsQUFTZ0MsQUFVN0IsQUFPUixVQUNkLEVBNUNBLEFBR0EsR0FlVSxDQVpWLEFBU0EsRUFzQmUsR0FsQkgsUUFQWixBQVFhLEFBa0JHLElBN0JoQixLQVlXLEdBa0IrQixJQWpCM0IsRUFLVyxTQUpHLGFBS1MsVUFZeEIsRUFoQmIsUUFpQkQsY0FaZ0MsNEJBQ2pCLFdBQ0MsWUFDTSxrQkFDUixVQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbHN6ZW5hc2kvUHJvamVjdHMvd2l0aC1hbnQtZGVzaWduLWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7TGF5b3V0LCBNZW51LCBJY29uLCBMb2NhbGVQcm92aWRlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5jb25zdCB7Q29udGVudCwgU2lkZXJ9ID0gTGF5b3V0O1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGVuVVMgZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTJ1xuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lmxlc3MnO1xuXG5jb25zdCBNeUxheW91dCA9ICh7Y2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnfSkgPT4gKFxuXG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U3VidGl0bGVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9zdHlsZXMuY3NzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxNeUhlYWRlci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWltYWdlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLW5vaXNlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFNpZGVyIHdpZHRoPXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBib3JkZXJSaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2VyaWVzYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Nlcmllc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0IHN0eWxlPXt7cGFkZGluZzogJzAgMjRweCAyNHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCBzdHlsZT17e3BhZGRpbmc6IDYwLCBtYXJnaW46IDAsIG1pbkhlaWdodDogMjgwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1sYXlvdXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbGF5b3V0LCAuYW50LWxheW91dC1zaWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1tZW51Om5vdCguYW50LW1lbnUtaG9yaXpvbnRhbCkgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1sYXlvdXQtZm9vdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDI0NTtcbiAgICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1nL2JnLWltYWdlLnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQtbm9pc2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvbm9pc2UucG5nKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1tZW51LWlubGluZSAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IE15TGF5b3V0Il19 */\n/*@ sourceURL=components/MyLayout.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (MyLayout);

/***/ }),

/***/ "./components/SearchBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_auto_complete__ = __webpack_require__("antd/lib/auto-complete");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/danielszenasi/Projects/with-ant-design-app/components/SearchBox.js';

var searchResult = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(query) {
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('https://api.themoviedb.org/3/search/tv?query=' + query + '?&api_key=' + apiKey);

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        data = _context.sent;
                        return _context.abrupt('return', data.results);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function searchResult(_x2) {
        return _ref.apply(this, arguments);
    };
}();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Option = __WEBPACK_IMPORTED_MODULE_3_antd_lib_auto_complete___default.a.Option;
var apiKey = '8a8f735733d4711586865cb339c5ade3';

var divStyle = function divStyle(posterPath) {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w200' + posterPath + ')'
    };
};

function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function renderOption(item) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Option,
        { key: item.id, text: item.name, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
            }
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'option', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { className: 'search-poster', style: divStyle(item.poster_path), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
                { as: '/t/' + item.id, href: '/tv?id=' + item.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        'span',
                        { className: 'label', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        item.name
                    )
                )
            )
        )
    );
}

var SearchBox = function (_React$Component) {
    _inherits(SearchBox, _React$Component);

    function SearchBox() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            dataSource: []
        }, _this.handleSearch = function (value) {

            searchResult(value).then(function (results) {
                console.log(results);
                _this.setState({
                    dataSource: value ? results : []
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBox, [{
        key: 'render',
        value: function render() {
            var dataSource = this.state.dataSource;

            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'div',
                { className: 'global-search-wrapper', style: { width: 360 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd_lib_auto_complete___default.a,
                    {
                        className: 'global-search',
                        dataSource: dataSource.map(renderOption),
                        onSelect: onSelect,
                        onSearch: this.handleSearch,
                        optionLabelProp: 'text',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_input___default.a, { suffix: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, { type: 'search', className: 'certain-category-icon', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        }), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    },
                    '\n                .search-poster {\n                    background-size: cover;\n                    background-position: center center;\n                    background-repeat: no-repeat;\n                    z-index: 2;\n                    width: 28px;\n                    height: 42px;\n                }\n                .option {\n                    display: flex;\n                }\n                .label {\n                    padding-left: 12px;\n                }\n\n                .global-search {\n                    width: 100%;\n                }\n\n\n                .ant-select-selection {\n                    background-color: rgba(255, 255, 255, 0.20);\n                }\n                .ant-input-affix-wrapper .ant-input-suffix {\n                    color: #fff;\n                }\n                .ant-input {\n                    box-shadow: none;\n                    border: none;\n                }\n\n                '
                )
            );
        }
    }]);

    return SearchBox;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchBox);

/***/ }),

/***/ "./pages/series.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);



var _jsxFileName = '/Users/danielszenasi/Projects/with-ant-design-app/pages/series.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var apiKey = '8a8f735733d4711586865cb339c5ade3';

var divStyle = function divStyle(posterPath) {
    return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w300/' + posterPath + ')'
    };
};

var Series = function Series(props) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            },
            'Batman TV Shows'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a,
            { gutter: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            },
            props.data.results.map(function (show) {
                return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a,
                    { className: 'gutter-row', span: 4, key: show.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
                        { as: '/t/' + show.id, href: '/tv?id=' + show.id, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'poster', style: divStyle(show.poster_path), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'div',
                        { className: 'desc', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
                            { as: '/t/' + show.id, href: '/tv?id=' + show.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                                'a',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 26
                                    }
                                },
                                show.name
                            )
                        )
                    )
                );
            })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'style',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            },
            '\n            .desc {\n                height: 50px\n            }\n\n            .poster {\n                background-size: cover;\n                background-position: center center;\n                background-repeat: no-repeat;\n                z-index: 2;\n                width: 100%;\n                height: 19vw;\n                }\n\n        '
        )
    );
};

Series.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var res, data;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default()('https://api.themoviedb.org/3/discover/tv?&api_key=' + apiKey);

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        data: data
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Series);

/***/ }),

/***/ "./styles/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/series.js");


/***/ }),

/***/ "antd/lib/auto-complete":
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=series.js.map