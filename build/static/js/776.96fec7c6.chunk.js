"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[776],{776:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(791),c=n(880),r=n(523),o="HighlightedQuote_quote__lyMzT",a=n(184),m=function(e){return(0,a.jsxs)("figure",{className:o,children:[(0,a.jsx)("p",{children:e.text}),(0,a.jsx)("figcaption",{children:e.author})]})},d=n(152),i="Comments_comments__ShTno",l=n(995),u=n(853),x=n(556),h="NewCommentForm_form__Bm3wp",j="NewCommentForm_control__UP9Wq",f="NewCommentForm_actions__TkEk9",_=function(e){var t=(0,s.useRef)(),n=(0,l.Z)(u.Ir),c=n.sendRequest,r=n.status,o=n.error,m=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==r||o||m()}),[r,o,m]);var d=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return(0,a.jsxs)("form",{className:h,onSubmit:d,children:["pending"===r&&(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(x.Z,{})}),(0,a.jsxs)("div",{className:j,onSubmit:d,children:[(0,a.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,a.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,a.jsx)("div",{className:f,children:(0,a.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p="CommentItem_item__ViNuy",N=function(e){return(0,a.jsx)("li",{className:p,children:(0,a.jsx)("p",{children:e.text})})},v="CommentsList_comments__sg0qv",C=function(e){return(0,a.jsx)("ul",{className:v,children:e.comments.map((function(e){return(0,a.jsx)(N,{text:e.text},e.id)}))})},g=function(){var e=(0,s.useState)(!1),t=(0,d.Z)(e,2),n=t[0],r=t[1],o=(0,c.UO)().quoteId,m=(0,l.Z)(u.h_),h=m.sendRequest,j=m.status,f=m.data;(0,s.useEffect)((function(){h(o)}),[o,h]);var p,N=(0,s.useCallback)((function(){h(o)}),[h,o]);return"pending"===j&&(p=(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(x.Z,{})})),"completed"===j&&(f||f.length>0)&&(p=(0,a.jsx)(C,{comments:f})),"completed"!==j||f&&0!==f.length||(p=(0,a.jsx)("p",{className:"centered",children:"No comments were added yet!"})),(0,a.jsxs)("section",{className:i,children:[(0,a.jsx)("h2",{children:"User Comments"}),!n&&(0,a.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&(0,a.jsx)(_,{quoteId:o,onAddedComment:N}),p]})},b=function(){var e=(0,c.$B)(),t=(0,c.UO)().quoteId,n=(0,l.Z)(u.jR,!0),o=n.sendRequest,d=n.status,i=n.data,h=n.error;return(0,s.useEffect)((function(){o(t)}),[o,t]),"pending"===d?(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(x.Z,{})}):h?(0,a.jsx)("p",{className:"centered focused",children:h}):(i.text,(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(m,{text:i.text,author:i.author}),(0,a.jsx)(c.AW,{path:"".concat(e.path),exact:!0,children:(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(r.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),(0,a.jsx)(c.AW,{path:"".concat(e.path,"/comments"),children:(0,a.jsx)(g,{})})]}))}}}]);
//# sourceMappingURL=776.96fec7c6.chunk.js.map