"use strict";(self.webpackChunkjuny_react_style=self.webpackChunkjuny_react_style||[]).push([[248],{"./src/component/profile/Profile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProfileTemplate:()=>ProfileTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Profile_stories});var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_style=__webpack_require__("./src/component/index.style.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProfileWrapStyled=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  ","\n  \n"])),(_ref=>{let{size,radius}=_ref;return"\n    text-align: center;\n    display:table;\n    ".concat((0,index_style.Ch)(null!=size?size:"30px"),"\n    ").concat((0,index_style.Po)(null!=size?size:"30px"),"\n    ").concat((0,index_style.Z6)(null!=radius?radius:"50%"),"\n  ")})),ProfileCellStyled=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  display: table-cell;\n  vertical-align:middle;\n"]))),ProfileImgStyled=styled_components_browser_esm.Ay.img(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n  ","\n"])),(_ref2=>{let{size,radius}=_ref2;return"\n    ".concat((0,index_style.Pi)(null!=size?size:"30px"),"\n    ").concat((0,index_style.Gh)(null!=size?size:"30px"),"\n    ").concat((0,index_style.Z6)(null!=radius?radius:"50%"),"\n  ")})),Profile=props=>(0,jsx_runtime.jsx)(ProfileWrapStyled,{...props,"data-testid":"profile-wrap",children:(0,jsx_runtime.jsx)(ProfileCellStyled,{children:(0,jsx_runtime.jsx)(ProfileImgStyled,{"data-testid":"profile-img",...props})})}),profile_Profile=Profile;Profile.__docgenInfo={description:"The Profile component is used to display user profile information.\r\nProfileProps defines the properties that can be passed to the Profile component.\r\n\r\n@param {ProfileProps} props - The properties passed to the Profile component\r\n@returns {JSX.Element} The Profile component",methods:[],displayName:"Profile",props:{radius:{required:!1,tsType:{name:"union",raw:"radius | string",elements:[{name:"union",raw:"'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},{name:"string"}]},description:""},size:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""}},composes:["DetailedHTMLProps"]};const Profile_stories={title:"Profile",component:profile_Profile},ProfileTemplate=(args=>(0,jsx_runtime.jsx)(profile_Profile,{...args})).bind({});ProfileTemplate.args={radius:"full",size:"30px",src:"https://avatars.githubusercontent.com/u/102360897?v=4"},ProfileTemplate.parameters={...ProfileTemplate.parameters,docs:{...ProfileTemplate.parameters?.docs,source:{originalSource:"args => <Profile {...args} />",...ProfileTemplate.parameters?.docs?.source}}};const __namedExportsOrder=["ProfileTemplate"]},"./src/component/index.style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ch:()=>Height,Gh:()=>MaxHeight,MP:()=>MarginBottom,Pi:()=>MaxWidth,Po:()=>Width,Rt:()=>MarginRight,U8:()=>MarginLeft,Z6:()=>BorderRadius,uR:()=>MarginTop});const Width=width=>"\n\t\twidth: ".concat(null!=width?width:"10px",";\n\t"),Height=height=>"\n\t\theight: ".concat(null!=height?height:"10px",";\n\t"),MaxWidth=width=>"\n\t\tmax-width: ".concat(null!=width?width:"10px",";\n\t"),MaxHeight=height=>"\n\t\tmax-height: ".concat(null!=height?height:"10px",";\n\t"),Margin=(margin,size)=>"\n\t\tmargin-".concat(margin,": ").concat(null!=size?size:"0px",";\n\t"),MarginBottom=size=>"\n\t\t".concat(Margin("bottom",size),"\n\t"),MarginTop=size=>"\n\t\t".concat(Margin("top",size),"\n\t"),MarginLeft=size=>"\n\t\t".concat(Margin("left",size),"\n\t"),MarginRight=size=>"\n\t\t".concat(Margin("right",size),"\n\t"),BorderRadius=radius=>{let radiusValue;if(void 0===radius)throw new Error("[BorderRadius] radius undefined");switch(radius){case"sm":radiusValue="15%";break;case"md":radiusValue="25%";break;case"lg":radiusValue="35%";break;case"full":radiusValue="50%";break;default:radiusValue=radius}return"\n\t\tborder-radius: ".concat(radiusValue,"\n\t")}}}]);