var e={mutate:e=>{e.methods.one.termMethods.isFrozen=e=>!0===e.frozen},api:function(e){e.prototype.freeze=function(){return this.docs.forEach((e=>{e.forEach((e=>{e.frozen=!0}))})),this},e.prototype.unfreeze=function(){return this.docs.forEach((e=>{e.forEach((e=>{delete e.frozen}))})),this},e.prototype.isFrozen=function(){return this.match("@isFrozen+")}}};export{e as default};
