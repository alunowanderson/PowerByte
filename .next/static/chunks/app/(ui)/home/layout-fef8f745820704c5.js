(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{5698:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.bind(n,8738)),Promise.resolve().then(n.bind(n,6115)),Promise.resolve().then(n.bind(n,2611)),Promise.resolve().then(n.bind(n,3952))},7648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var s=n(2972),r=n.n(s)},9376:function(e,t,n){"use strict";var s=n(5475);n.o(s,"usePathname")&&n.d(t,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})},7655:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var s=n(7437);let r=e=>{let{label:t,onClick:n,size:r}=e;return(0,s.jsx)("div",{onClick:n,className:"flex justify-center items-center cursor-pointer bg-orange-500 text-white rounded-3xl\n                ".concat(1===r&&"h-14 text-lg","\n                ").concat(2===r&&"h-10 text-md","\n                ").concat(3===r&&"h-7 text-xs"),children:t})}},8738:function(e,t,n){"use strict";n.d(t,{SearchInput:function(){return i}});var s=n(7437),r=n(5217),a=n(279),c=n(2265),l=n(9376);let i=e=>{let{defaultValue:t,hideOnSearch:n}=e,i=(0,l.useRouter)(),o=(0,l.usePathname)(),[u,d]=(0,c.useState)(null!=t?t:"");return n&&"/search"===o?null:(0,s.jsx)(a.Input,{placeholder:"Buscar",icon:r.Y$T,filled:!0,value:u,onChange:e=>d(e),onEnter:()=>{u&&i.push("/search?q="+encodeURIComponent(u))}})}},279:function(e,t,n){"use strict";n.d(t,{Input:function(){return l}});var s=n(7437),r=n(5217),a=n(1268),c=n(2265);let l=e=>{let{placeholder:t,password:n,icon:l,filled:i,value:o,onChange:u,onEnter:d}=e,[m,h]=(0,c.useState)(!1);return(0,s.jsxs)("div",{className:"has-[:focus]:border-orange-600 flex items-center h-14 rounded-3xl border-2 border-gray-500 ".concat(i&&"bg-gray-600"),children:[l&&(0,s.jsx)(a.G,{icon:l,className:"ml-4 size-6 text-gray-500"}),(0,s.jsx)("input",{type:n&&!m?"password":"text",className:"flex-1 outline-none bg-transparent h-full px-4",placeholder:t,value:o,onChange:e=>u&&u(e.target.value),onKeyUp:e=>{"enter"===e.code.toLowerCase()&&d&&d()}}),n&&(0,s.jsx)(a.G,{onClick:()=>h(!m),icon:m?r.Mdf:r.Aq,className:"cursor-pointer mr-4 size-6 text-gray-500"})]})}},6115:function(e,t,n){"use strict";n.d(t,{NavItem:function(){return l}});var s=n(7437),r=n(1268),a=n(7648),c=n(9376);let l=e=>{let{label:t,icon:n,href:l,active:i}=e,o=(0,c.usePathname)()===l;return(0,s.jsxs)(a.default,{href:l,className:"flex items-center gap-6 py-3 ".concat(i||o?"opacity-100":"opacity-30"," hover:opacity-100"),children:[(0,s.jsx)(r.G,{icon:n,className:"size-6 text-orange-700"}),(0,s.jsx)("div",{className:"texte-lg",children:t})]})}},2611:function(e,t,n){"use strict";n.d(t,{NavSair:function(){return l}});var s=n(7437),r=n(5217),a=n(1268),c=n(9376);let l=()=>{let e=(0,c.useRouter)();return(0,s.jsxs)("div",{onClick:()=>{e.replace("/login")},className:"cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100",children:[(0,s.jsx)(a.G,{icon:r.SJh,className:"size-6 text-orange-700"}),(0,s.jsx)("div",{className:"texte-lg",children:"Sair"})]})}},3952:function(e,t,n){"use strict";n.d(t,{RecommendationItem:function(){return l},RecommendationItemSkeleton:function(){return i}});var s=n(7437),r=n(7648),a=n(7655),c=n(2265);let l=e=>{let{user:t}=e,[n,l]=(0,c.useState)(!1);return(0,s.jsxs)("div",{className:"flex items-center-",children:[(0,s.jsx)("div",{className:"size-10 mr-2 rounded-full overflow-hidden",children:(0,s.jsx)(r.default,{href:"/".concat(t.slug),children:(0,s.jsx)("img",{src:t.avatar,alt:t.name,className:"size-full"})})}),(0,s.jsxs)("div",{className:"flex-1 overflow-hidden",children:[(0,s.jsx)(r.default,{href:"/".concat(t.slug),className:"block truncate",children:t.name}),(0,s.jsxs)("div",{className:"truncate text-sm text-gray-300",children:["@",t.slug]})]}),(0,s.jsx)("div",{className:"pl-2 w-20",children:!n&&(0,s.jsx)(a.z,{label:"Seguir",onClick:()=>{l(!0)},size:3})})]})},i=()=>(0,s.jsxs)("div",{className:"animate-pulse flex items-center",children:[(0,s.jsx)("div",{className:"size-10 mr-2 rounded-full bg-gray-700"}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col gap-1",children:[(0,s.jsx)("div",{className:"bg-gray-700 w-3/4 h-4"}),(0,s.jsx)("div",{className:"bg-gray-700 w-1/4 h-4"})]})]})}},function(e){e.O(0,[676,972,268,878,971,117,744],function(){return e(e.s=5698)}),_N_E=e.O()}]);