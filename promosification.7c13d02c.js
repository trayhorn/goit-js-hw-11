const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=(e,a)=>new Promise((t=>{const c=e.map((e=>e.name===a?{...e,active:!e.active}:e));t(n(c))})),n=e=>console.table(e);a(e,"Poly").then(n),a(e,"Lux").then(n);
//# sourceMappingURL=promosification.7c13d02c.js.map
