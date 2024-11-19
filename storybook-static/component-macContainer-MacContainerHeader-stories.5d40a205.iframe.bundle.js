"use strict";(self.webpackChunkjuny_react_style=self.webpackChunkjuny_react_style||[]).push([[541],{"./src/component/macContainer/MacContainerHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MacContainerHeaderTemplate:()=>MacContainerHeaderTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MacContainerHeader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/component/macContainer/MacContainerHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"MacContainerHeader",Component:_MacContainerHeader__WEBPACK_IMPORTED_MODULE_0__.A},MacContainerHeaderTemplate=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MacContainerHeader__WEBPACK_IMPORTED_MODULE_0__.A,{...args})).bind({});MacContainerHeaderTemplate.args={title:"hi"},MacContainerHeaderTemplate.parameters={...MacContainerHeaderTemplate.parameters,docs:{...MacContainerHeaderTemplate.parameters?.docs,source:{originalSource:"args => <MacContainerHeader {...args} />",...MacContainerHeaderTemplate.parameters?.docs?.source}}};const __namedExportsOrder=["MacContainerHeaderTemplate"]},"./src/component/StyleThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aj:()=>StyleThemeProvider_DarkTheme,qW:()=>LightTheme.A});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyleThemeProvider_DarkTheme={mode:"dark",white:"#121212",black:"#ffffff",lightGray:"#2f3136",softGray:"#2b2b2b",lightBlueGray:"#1c1e22",lightGrayBlue:"#2a2d31",veryLightGray:"#1e1e1e",paleGray:"#3a3a3a",snowWhite:"#2e2e2e",mediumGray:"#737373",darkGray:"#aaaaaa",darkCharcoal:"#cccccc",brightWhite:"#1a1a1a",slateBlue:"#c3ccd9",preiwinkle:"#272c52",ghostWhite:"#242526",skyBlue:"#1a6b7a",mintGreen:"#256b59",coralRed:"#7a2c3c",salmon:"#7a3c2f",silverGray:"#2e3136",azureBlue:"#002a6b",forestGreen:"#164d2a",emeraldGreen:"#175a2e",lightAsh:"#333333",lightSkyBlue:"#24313a"};var LightTheme=__webpack_require__("./src/component/StyleThemeProvider/LightTheme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyleThemeProvider=_ref=>{let{mode,children}=_ref;const theme="dark"===mode?StyleThemeProvider_DarkTheme:LightTheme.A;return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme,children})};StyleThemeProvider.__docgenInfo={description:"",methods:[],displayName:"StyleThemeProvider",props:{mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["DefaultTheme"]};var react=__webpack_require__("./node_modules/react/index.js");const StyleThemeContextProvider_ThemeContext=(0,react.createContext)(void 0),StyleThemeContextProvider=_ref=>{let{children}=_ref;const[theme,setTheme]=(0,react.useState)("light");return(0,jsx_runtime.jsx)(StyleThemeContextProvider_ThemeContext.Provider,{value:{theme,setTheme},children})};StyleThemeContextProvider.__docgenInfo={description:"",methods:[],displayName:"StyleThemeContextProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/component/macContainer/MacContainerHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_symbol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-symbol/dist/mjs/index.js"),_libs_media_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/libs/media-query.ts"),_StyleThemeProvider_LightTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/StyleThemeProvider/LightTheme.ts"),_utills_RoundButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/utills/RoundButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MacContainerHeaderWrapStyled=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject||(_templateObject=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(["\n\t","\n"])),(_ref=>{let{width="100%"}=_ref;return"\n\t\twidth: ".concat(width,";\n\t")})),JustifyContentBetween=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject2||(_templateObject2=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n"]))),JustifyContentStart=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject3||(_templateObject3=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(["\n\tdisplay: flex;\n\tjustify-content: start;\n\twidth: 100%;\n\tgap: 1rem;\n\tflex: 1;\n\t","\n"])),(0,_libs_media_query__WEBPACK_IMPORTED_MODULE_1__.a0)("\n\t\tgap: 1.5rem;\n\t")),TitleWrap=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject4||(_templateObject4=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.A)(["\n\t","\n\tmargin-right: 1.5rem;\n\tflex: 1;\n\t\n"])),(_ref2=>{var _theme$black;let{theme,textAlign}=_ref2;return"\n\t\tcolor: ".concat(null!==(_theme$black=theme.black)&&void 0!==_theme$black?_theme$black:_StyleThemeProvider_LightTheme__WEBPACK_IMPORTED_MODULE_2__.A.black,";\n\t\ttext-align: ").concat(null!=textAlign?textAlign:"right",";\n\t")})),MacContainerHeader=_ref3=>{let{title,buttonSize,onClose,onMinimize,onHidden,showClose=!0,showMinimize=!0,showHidden=!0,...elementProps}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MacContainerHeaderWrapStyled,{...elementProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(JustifyContentBetween,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(JustifyContentStart,{children:[showClose&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utills_RoundButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:buttonSize,color:"red",onClick:()=>onClose&&onClose(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_symbol__WEBPACK_IMPORTED_MODULE_0__.US,{viewBox:"0 0 14 14"})}),showMinimize&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utills_RoundButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:buttonSize,color:"yellow",onClick:()=>onHidden&&onHidden(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_symbol__WEBPACK_IMPORTED_MODULE_0__.Mz,{viewBox:"0 0 14 14"})}),showHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utills_RoundButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:buttonSize,color:"green",onClick:()=>onMinimize&&onMinimize(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_symbol__WEBPACK_IMPORTED_MODULE_0__._X,{viewBox:"0 0 14 14"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TitleWrap,{...elementProps,children:title})]})})},__WEBPACK_DEFAULT_EXPORT__=MacContainerHeader;MacContainerHeader.__docgenInfo={description:"",methods:[],displayName:"MacContainerHeader",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMinimize:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHidden:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:""},textAlign:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},buttonSize:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ThemeType"},description:""},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMinimize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}},"./src/component/utills/RoundButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_StyleThemeProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/component/StyleThemeProvider/index.ts");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject||(_templateObject=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n\t","\n\tdisplay: flex;\n\ttext-align: center;\n\talign-items: center;\n\tjustify-content: center;\n\t\n\tborder-radius: 50%;\n\tcolor: white;\n\t\n\tline-height: 50px;\n\tcursor: pointer;\n\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n\ttransition: background-color 0.3s ease;\n\t\n\t&:hover {\n\n\t\t> svg {\n\t\t\twidth: 50%;  /* Adjust as needed */\n\t\t\theight: 50%;  /* Adjust as needed */\n\t\t\tdisplay: flex;\n\t\t\ttext-align: center;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t","\n\t> svg {\n\t\tdisplay: flex;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0s, opacity 0.3s ease;\n\t}\n"])),(_ref=>{let{size}=_ref;return"\n\t\twidth: ".concat(null!=size?size:"1rem",";\n\t\theight: ").concat(null!=size?size:"1rem",";\n\t")}),(_ref2=>{var _theme$lightGrayBlue,_theme$veryLightGray;let{color,theme}=_ref2;switch(color){case"yellow":return"\n\t\t\t\t\tbackground-color: #FFBD2E; /* yellow */\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: #E1A91A;\n\t\t\t\t\t}\n\t\t\t\t";case"green":return"\n\t\t\t\t\tbackground-color: #27C93F; /* green */\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: #1AAB29;\n\t\t\t\t\t}\n\t\t\t\t";case"red":return"\n\t\t\t\t\tbackground-color: #FF5F56; /* red */\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: #FF5F56; /* red */\n\t\t\t\t\t}\n\t\t\t\t";default:return"\n\t\t\t\t\tbackground-color: ".concat(null!==(_theme$lightGrayBlue=theme.lightGrayBlue)&&void 0!==_theme$lightGrayBlue?_theme$lightGrayBlue:_StyleThemeProvider__WEBPACK_IMPORTED_MODULE_0__.qW.lightGrayBlue,";\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground-color: ").concat(null!==(_theme$veryLightGray=theme.veryLightGray)&&void 0!==_theme$veryLightGray?_theme$veryLightGray:_StyleThemeProvider__WEBPACK_IMPORTED_MODULE_0__.qW.veryLightGray,";\n\t\t\t\t\t}\n\t\t\t\t")}}))},"./src/libs/media-query.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a0:()=>MediaMobileOnlyStyle});var _templateObject,_templateObject2,_templateObject3,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const MediaMobileOnlyStyle=style=>"\n    @media (max-width: 699px) {\n        ".concat(style,"\n    }\n");styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject||(_templateObject=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.A)(["\n    display: block;\n    ","\n"])),"\n    @media (max-width: 1199px) {\n        ".concat("display: none;","\n    }\n"));styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2||(_templateObject2=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.A)(["\n    display: block;\n    ","\n"])),(style=>"\n    @media (max-width: 1199px) and (min-width: 700px) {\n        ".concat(style,"\n    }\n"))("display: none;")),styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject3||(_templateObject3=(0,D_app_source2_react_style_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.A)(["\n    display: block;\n    ","\n"])),MediaMobileOnlyStyle("display: none;"))}}]);