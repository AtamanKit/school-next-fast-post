(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{2684:function(e,t,r){Promise.resolve().then(r.bind(r,2096))},2096:function(e,t,r){"use strict";r.r(t),r.d(t,{columns:function(){return y},default:function(){return C}});var a=r(7437),n=r(2265),l=r(9394),s=r(3216),o=r(7660),i=r(5754),d=r(2237),c=r(2442),u=r(1657);let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(d.fC,{ref:t,className:(0,u.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...n,children:(0,a.jsx)(d.z$,{className:(0,u.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(c.Z,{className:"h-4 w-4"})})})});m.displayName=d.fC.displayName;var f=r(3930),p=r(5179);let h=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,u.cn)("w-full caption-bottom text-sm",r),...n})})});h.displayName="Table";let g=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("thead",{ref:t,className:(0,u.cn)("[&_tr]:border-b",r),...n})});g.displayName="TableHeader";let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,u.cn)("[&_tr:last-child]:border-0",r),...n})});x.displayName="TableBody",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,u.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...n})}).displayName="TableFooter";let b=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tr",{ref:t,className:(0,u.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...n})});b.displayName="TableRow";let w=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("th",{ref:t,className:(0,u.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...n})});w.displayName="TableHead";let j=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("td",{ref:t,className:(0,u.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...n})});j.displayName="TableCell",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("caption",{ref:t,className:(0,u.cn)("mt-4 text-sm text-muted-foreground",r),...n})}).displayName="TableCaption";var v=r(1396),N=r.n(v);let y=[{id:"select",header:e=>{let{table:t}=e;return(0,a.jsx)(m,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,a.jsx)(m,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"First Name",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("first_name")})}},{accessorKey:"last_name",header:"Last Name",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("last_name")})}},{accessorKey:"name",header:"Name",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("first_name")+" "+t.getValue("last_name")})}},{accessorKey:"gender",header:"Gender",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("gender")})}},{accessorKey:"age",header:"Age",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("age")})}},{accessorKey:"email",header:e=>{let{column:t}=e;return(0,a.jsxs)(i.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Email",(0,a.jsx)(l.jnn,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"lowercase",children:t.getValue("email")})}},{accessorKey:"phone",header:"Phone",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("phone")})}},{accessorKey:"education",header:"Education",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("education")})}},{accessorKey:"experience_years",header:"Experience Years",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("experience_years")})}},{accessorKey:"salary",header:"Salary",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("salary")})}},{accessorKey:"marital_status",header:"Marital Status",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("marital_status")})}},{accessorKey:"number_of_children",header:"Number Of Children",cell:e=>{let{row:t}=e;return(0,a.jsx)("div",{className:"capitalize",children:t.getValue("number_of_children")})}},{id:"actions",enableHiding:!1,cell:e=>{let{row:t}=e,r=t.original;return(0,a.jsxs)(f.DropdownMenu,{children:[(0,a.jsx)(f.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,a.jsx)(l.nWS,{className:"h-4 w-4"})]})}),(0,a.jsxs)(f.DropdownMenuContent,{align:"end",children:[(0,a.jsx)(f.DropdownMenuLabel,{children:"Actions"}),(0,a.jsx)(f.DropdownMenuItem,{onClick:()=>navigator.clipboard.writeText(r.id.toString()),children:"Copy payment ID"}),(0,a.jsx)(f.DropdownMenuSeparator,{}),(0,a.jsx)(f.DropdownMenuItem,{children:"View customer"}),(0,a.jsx)(f.DropdownMenuItem,{children:"View payment details"})]})]})}}];function C(){var e,t,r;let[d,c]=n.useState([]),[m,v]=n.useState([]),[C,M]=n.useState({firstName:!1,lastName:!1}),[D,R]=n.useState({}),[S,k]=n.useState([]);n.useEffect(()=>{(async function(){let e=await fetch("".concat((0,u.J)(),"/employees/"));if(!e.ok)throw Error("Failed to fetch data");return e.json()})().then(e=>k(e)).catch(e=>console.error("Failed to load data",e))},[]);let z=(0,s.b7)({data:S,columns:y,onSortingChange:c,onColumnFiltersChange:v,getCoreRowModel:(0,o.sC)(),getPaginationRowModel:(0,o.G_)(),getSortedRowModel:(0,o.tj)(),getFilteredRowModel:(0,o.vL)(),onColumnVisibilityChange:M,onRowSelectionChange:R,state:{sorting:d,columnFilters:m,columnVisibility:C,rowSelection:D}});async function _(){let e=z.getFilteredSelectedRowModel().rows;if(e.length){let t=e.map(e=>e.original.id);console.log("Deleting rows with IDs: ",t),await fetch("".concat((0,u.J)(),"/employees/"),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:t})}),k(S.filter(e=>!t.includes(e.id))),z.resetRowSelection()}}return n.useEffect(()=>{var e,t;null===(e=z.getColumn("first_name"))||void 0===e||e.toggleVisibility(!1),null===(t=z.getColumn("last_name"))||void 0===t||t.toggleVisibility(!1)},[]),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex items-center py-4",children:[(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)(p.I,{placeholder:"Filter emails...",value:null!==(r=null===(e=z.getColumn("email"))||void 0===e?void 0:e.getFilterValue())&&void 0!==r?r:"",onChange:e=>{var t;return null===(t=z.getColumn("email"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"}),(0,a.jsxs)(f.DropdownMenu,{children:[(0,a.jsx)(f.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"outline",className:"ml-auto",children:["Actions",(0,a.jsx)(l.v4q,{className:"ml-2 h-4 w-4"})]})}),(0,a.jsxs)(f.DropdownMenuContent,{align:"end",children:[(0,a.jsx)(f.DropdownMenuItem,{onClick:_,children:"Delete"}),(0,a.jsx)(f.DropdownMenuItem,{children:(0,a.jsx)(N(),{href:"/table/create/",children:"New Employee"})})]})]})]}),(0,a.jsxs)(f.DropdownMenu,{children:[(0,a.jsx)(f.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(i.z,{variant:"outline",className:"ml-auto",children:["Columns ",(0,a.jsx)(l.v4q,{className:"ml-2 h-4 w-4"})]})}),(0,a.jsx)(f.DropdownMenuContent,{align:"end",children:z.getAllColumns().filter(e=>e.getCanHide()).map(e=>(console.log(e.columnDef.header),(0,a.jsx)(f.DropdownMenuCheckboxItem,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:e.id},e.id)))})]})]}),(0,a.jsx)("div",{className:"rounded-md border",children:(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{children:z.getHeaderGroups().map(e=>(0,a.jsx)(b,{children:e.headers.map(e=>(0,a.jsx)(w,{children:e.isPlaceholder?null:(0,s.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,a.jsx)(x,{children:(null===(t=z.getRowModel().rows)||void 0===t?void 0:t.length)?z.getRowModel().rows.map(e=>(0,a.jsx)(b,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,a.jsx)(j,{children:(0,s.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,a.jsx)(b,{children:(0,a.jsx)(j,{colSpan:y.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,a.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,a.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[z.getFilteredSelectedRowModel().rows.length," of"," ",z.getFilteredRowModel().rows.length," row(s) selected."]}),(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>z.previousPage(),disabled:!z.getCanPreviousPage(),children:"Previous"}),(0,a.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>z.nextPage(),disabled:!z.getCanNextPage(),children:"Next"})]})]})]})}},5754:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),n=r(2265),l=r(7256),s=r(9213),o=r(1657);let i=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:s,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:s,className:r})),ref:t,...c})});d.displayName="Button"},3930:function(e,t,r){"use strict";r.r(t),r.d(t,{DropdownMenu:function(){return c},DropdownMenuCheckboxItem:function(){return j},DropdownMenuContent:function(){return b},DropdownMenuGroup:function(){return m},DropdownMenuItem:function(){return w},DropdownMenuLabel:function(){return N},DropdownMenuPortal:function(){return f},DropdownMenuRadioGroup:function(){return h},DropdownMenuRadioItem:function(){return v},DropdownMenuSeparator:function(){return y},DropdownMenuShortcut:function(){return C},DropdownMenuSub:function(){return p},DropdownMenuSubContent:function(){return x},DropdownMenuSubTrigger:function(){return g},DropdownMenuTrigger:function(){return u}});var a=r(7437),n=r(2265),l=r(1111),s=r(7158),o=r(2442),i=r(6369),d=r(1657);let c=l.fC,u=l.xz,m=l.ZA,f=l.Uv,p=l.Tr,h=l.Ee,g=n.forwardRef((e,t)=>{let{className:r,inset:n,children:o,...i}=e;return(0,a.jsxs)(l.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",r),...i,children:[o,(0,a.jsx)(s.Z,{className:"ml-auto h-4 w-4"})]})});g.displayName=l.fF.displayName;let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})});x.displayName=l.tu.displayName;let b=n.forwardRef((e,t)=>{let{className:r,sideOffset:n=4,...s}=e;return(0,a.jsx)(l.Uv,{children:(0,a.jsx)(l.VY,{ref:t,sideOffset:n,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})})});b.displayName=l.VY.displayName;let w=n.forwardRef((e,t)=>{let{className:r,inset:n,...s}=e;return(0,a.jsx)(l.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",r),...s})});w.displayName=l.ck.displayName;let j=n.forwardRef((e,t)=>{let{className:r,children:n,checked:s,...i}=e;return(0,a.jsxs)(l.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:s,...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.wU,{children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})}),n]})});j.displayName=l.oC.displayName;let v=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e;return(0,a.jsxs)(l.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...s,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.wU,{children:(0,a.jsx)(i.Z,{className:"h-2 w-2 fill-current"})})}),n]})});v.displayName=l.Rk.displayName;let N=n.forwardRef((e,t)=>{let{className:r,inset:n,...s}=e;return(0,a.jsx)(l.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",r),...s})});N.displayName=l.__.displayName;let y=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...n})});y.displayName=l.Z0.displayName;let C=e=>{let{className:t,...r}=e;return(0,a.jsx)("span",{className:(0,d.cn)("ml-auto text-xs tracking-widest opacity-60",t),...r})};C.displayName="DropdownMenuShortcut"},5179:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var a=r(7437),n=r(2265),l=r(1657);let s=n.forwardRef((e,t)=>{let{className:r,type:n,...s}=e;return(0,a.jsx)("input",{type:n,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});s.displayName="Input"},1657:function(e,t,r){"use strict";r.d(t,{J:function(){return s},cn:function(){return l}});var a=r(7042),n=r(4769);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}function s(){return window.location.origin+"/api"}}},function(e){e.O(0,[310,802,267,505,971,938,744],function(){return e(e.s=2684)}),_N_E=e.O()}]);