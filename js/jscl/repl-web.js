(function(jscl){
'use strict';
(function(values, internals){
var l1=internals.make_lisp_string('loading repl-web/repl.lisp!');
console.log(internals.xstring(l1));
var l2=internals.intern('%WRITE-STRING');
var l3=internals.intern('T','COMMON-LISP');
var l4=internals.intern('*ROOT*');
var l5=internals.make_lisp_string('jqconsole');
var l6=internals.intern('NIL','COMMON-LISP');
var l7=internals.make_lisp_string('jqconsole-output');
var l8=internals.make_lisp_string('');
var l9=internals.make_lisp_string('jqconsole');
var l10=internals.make_lisp_string('Write');
var l11=internals.make_lisp_string('console');
var l12=internals.make_lisp_string('log');
l2.fvalue=(function(){var FUNC=(function JSCL_USER_WRITESTRING(values,v1,v2){internals.checkArgsAtLeast(arguments.length-1,1);
internals.checkArgsAtMost(arguments.length-1,2);
switch(arguments.length-1){case 1:v2=l3.value;
;
default:break;
}var v3=this;
return (function(){return internals.js_to_lisp((function(){var TMP=internals.symbolValue(l4)[internals.xstring(l5)];
return TMP===undefined?l6.value:TMP;
})())!==l6.value?internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l9)][internals.xstring(l10)](internals.lisp_to_js(v1),internals.lisp_to_js(l7),internals.lisp_to_js(l8),internals.lisp_to_js(v2))):internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l11)][internals.xstring(l12)](internals.lisp_to_js(v1)));
})();
});
FUNC.fname='%WRITE-STRING';
return FUNC;
})();
l2;
var l13=internals.intern('LOAD-HISTORY');
var l14=internals.make_lisp_string('jqhist');
var l15=internals.make_lisp_string('localStorage');
var l16=internals.make_lisp_string('getItem');
var l17=internals.make_lisp_string('JSON');
var l18=internals.make_lisp_string('parse');
var l19=internals.make_lisp_string('jqconsole');
var l20=internals.make_lisp_string('SetHistory');
l13.fvalue=(function(){var FUNC=(function JSCL_USER_LOADHISTORY(values){internals.checkArgsAtMost(arguments.length-1,0);
var v5=this;
return (function(){return (function(v7){return (v7===null?l3.value:l6.value)!==l6.value?l6.value:internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l19)][internals.xstring(l20)](internals.lisp_to_js(internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l17)][internals.xstring(l18)](internals.lisp_to_js(v7))))));
})(internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l15)][internals.xstring(l16)](internals.lisp_to_js(l14))));
})();
});
FUNC.fname='LOAD-HISTORY';
return FUNC;
})();
l13;
var l21=internals.intern('SAVE-HISTORY');
var l22=internals.make_lisp_string('jqhist');
var l23=internals.make_lisp_string('jqconsole');
var l24=internals.make_lisp_string('GetHistory');
var l25=internals.make_lisp_string('JSON');
var l26=internals.make_lisp_string('stringify');
var l27=internals.make_lisp_string('localStorage');
var l28=internals.make_lisp_string('setItem');
l21.fvalue=(function(){var FUNC=(function JSCL_USER_SAVEHISTORY(values){internals.checkArgsAtMost(arguments.length-1,0);
var v8=this;
return (function(){return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l27)][internals.xstring(l28)](internals.lisp_to_js(l22),internals.lisp_to_js(internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l25)][internals.xstring(l26)](internals.lisp_to_js(internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l23)][internals.xstring(l24)]())))))));
})();
});
FUNC.fname='SAVE-HISTORY';
return FUNC;
})();
l21;
var l29=internals.intern('INDENT-LEVEL');
var l30=internals.intern('LENGTH','COMMON-LISP');
var l31=internals.intern('CHAR','COMMON-LISP');
var l32=internals.intern('EQL','COMMON-LISP');
var l33=internals.intern('ZEROP','COMMON-LISP');
l29.fvalue=(function(){var FUNC=(function JSCL_USER_INDENTLEVEL(values,v10){internals.checkArgs(arguments.length-1,1);
var v11=this;
return (function(){return (function(v13,v14,v15,v16){(function(){return (function(){while ((function(){var x1=v13;
if (typeof x1!='number') throw 'Not a number!';
var x2=v15;
if (typeof x2!='number') throw 'Not a number!';
return x1<x2?l3.value:l6.value;
})()!==l6.value){if (v14!==l6.value) (function(v18){return l32.fvalue(internals.pv,v18,'\\')!==l6.value?(l6.value,(function(){var v20=1;
var v21=(function(){var x1=v13;
if (typeof x1!='number') throw 'Not a number!';
var x2=v20;
if (typeof x2!='number') throw 'Not a number!';
return x1+x2;
})();
return v13=v21;
})()):l32.fvalue(internals.pv,v18,'"')!==l6.value?(l6.value,(v14=l6.value),(function(){var v23=1;
var v24=(function(){var x1=v16;
if (typeof x1!='number') throw 'Not a number!';
var x2=v23;
if (typeof x2!='number') throw 'Not a number!';
return x1-x2;
})();
return v16=v24;
})()):l6.value;
})(l31.fvalue(internals.pv,v10,v13));
 else (function(v25){return l32.fvalue(internals.pv,v25,'(')!==l6.value?(l6.value,(function(){var v27=1;
var v28=(function(){var x1=v16;
if (typeof x1!='number') throw 'Not a number!';
var x2=v27;
if (typeof x2!='number') throw 'Not a number!';
return x1+x2;
})();
return v16=v28;
})()):l32.fvalue(internals.pv,v25,')')!==l6.value?(l6.value,(function(){var v30=1;
var v31=(function(){var x1=v16;
if (typeof x1!='number') throw 'Not a number!';
var x2=v30;
if (typeof x2!='number') throw 'Not a number!';
return x1-x2;
})();
return v16=v31;
})()):l32.fvalue(internals.pv,v25,'"')!==l6.value?(l6.value,(function(){var v33=1;
var v34=(function(){var x1=v16;
if (typeof x1!='number') throw 'Not a number!';
var x2=v33;
if (typeof x2!='number') throw 'Not a number!';
return x1+x2;
})();
return v16=v34;
})(),v14=l3.value):l6.value;
})(l31.fvalue(internals.pv,v10,v13));
(function(){var v36=1;
var v37=(function(){var x1=v13;
if (typeof x1!='number') throw 'Not a number!';
var x2=v36;
if (typeof x2!='number') throw 'Not a number!';
return x1+x2;
})();
return v13=v37;
})();
}return l6.value;
})();
})();
return l33.fvalue(internals.pv,v16)!==l6.value?l6.value:0;
})(0,l6.value,l30.fvalue(internals.pv,v10),0);
})();
});
FUNC.fname='INDENT-LEVEL';
return FUNC;
})();
l29;
var l34=internals.intern('TOPLEVEL');
var l35=internals.make_lisp_string('(');
var l36=internals.make_lisp_string(')');
var l37=internals.make_lisp_string('parents');
var l38=internals.make_lisp_string('jqconsole');
var l39=internals.make_lisp_string('RegisterMatching');
var l40=internals.make_lisp_string('~a> ');
var l41=internals.intern('*PACKAGE*','COMMON-LISP');
var l42=internals.intern('PACKAGE-NAME','COMMON-LISP');
var l43=internals.intern('FORMAT','COMMON-LISP');
var l44=internals.make_lisp_string('jqconsole-prompt');
var l45=internals.make_lisp_string('jqconsole');
var l46=internals.make_lisp_string('Write');
var l47=internals.make_lisp_string('console');
var l48=internals.make_lisp_string('log');
var l49=internals.make_lisp_string('message');
var l50=internals.make_lisp_string('ERROR[!]: ~a~%');
var l51=internals.make_lisp_string('jqconsole-error');
var l52=internals.make_lisp_string('jqconsole');
var l53=internals.make_lisp_string('Write');
var l54=internals.intern('*HANDLER-BINDINGS*');
var l55=internals.intern('ERROR','COMMON-LISP');
var l56=internals.make_lisp_string('message');
var l57=internals.intern('%ERROR');
var l58=internals.intern('READ-FROM-STRING','COMMON-LISP');
var l59=internals.intern('LIST','COMMON-LISP');
var l60=internals.intern('EVAL-INTERACTIVE');
var l61=internals.make_lisp_string('~S~%');
var l62=internals.make_lisp_string('jqconsole-return');
var l63=internals.make_lisp_string('jqconsole');
var l64=internals.make_lisp_string('Write');
var l65=internals.make_lisp_string('ERROR: ');
var l66=internals.make_lisp_string('jqconsole-error');
var l67=internals.make_lisp_string('jqconsole');
var l68=internals.make_lisp_string('Write');
var l69=internals.intern('!CONDITION-ARGS');
var l70=internals.make_lisp_string('jqconsole-error');
var l71=internals.make_lisp_string('jqconsole');
var l72=internals.make_lisp_string('Write');
var l73=internals.intern('STRING','COMMON-LISP');
var l74=internals.make_lisp_string('jqconsole-error');
var l75=internals.make_lisp_string('jqconsole');
var l76=internals.make_lisp_string('Write');
var l77=internals.make_lisp_string('jqconsole');
var l78=internals.make_lisp_string('Prompt');
l34.fvalue=(function(){var FUNC=(function JSCL_USER_TOPLEVEL(values){internals.checkArgsAtMost(arguments.length-1,0);
var v38=this;
return (function(){internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l38)][internals.xstring(l39)](internals.lisp_to_js(l35),internals.lisp_to_js(l36),internals.lisp_to_js(l37)));
(function(v40){return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l45)][internals.xstring(l46)](internals.lisp_to_js(v40),internals.lisp_to_js(l44)));
})(l43.fvalue(internals.pv,l6.value,l40,l42.fvalue(internals.pv,internals.symbolValue(l41))));
return (function(v66){return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l77)][internals.xstring(l78)](internals.lisp_to_js(l3.value),internals.lisp_to_js(v66),internals.lisp_to_js(internals.symbolFunction(l29))));
})((function JSCL_USER_NIL(values,v41){internals.checkArgs(arguments.length-1,1);
var v42=this;
return (function(){(function(){try{return (function(){try{var v47=[];
return (function(v48){return (function(){var v49=1;
var v50=[];
TBLOOP:while (true){try{switch(v49){case 1:(function(v51){return internals.bindSpecialBindings([l54],[v51],(function(){(function(){var v53=new internals.Cons(l55,(function JSCL_USER_NIL(values,v54){internals.checkArgs(arguments.length-1,1);
var v55=this;
v48=v54;
return (function(){throw new internals.TagNLX(v50,2);
})();
}));
var v56=new internals.Cons(v53,internals.symbolValue(l54));
return l54.value=v56;
})();
return (function(){try{return (function(){throw new internals.BlockNLX(v47,(function(){var v60=l58.fvalue(internals.pv,v41);
var v61=(function(){var FUNC=internals.symbolFunction(l59);
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=l60.fvalue(values,v60);
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
return (function(){return (function(v63,v64){(function(){while (v63!==l6.value){v64=internals.car(v63);
internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l63)][internals.xstring(l64)](internals.lisp_to_js(l43.fvalue(internals.pv,l6.value,l61,v64)),internals.lisp_to_js(l62)));
l6.value;
v63=internals.cdr(v63);
}return l6.value;
})();
return l6.value;
})(v61,l6.value);
})();
})(),'G283');
})();
}catch (v57){v57=internals.js_to_lisp(v57);
return (internals.isNLX(v57)?l3.value:l6.value)!==l6.value?(function(){throw v57;
})():l57.fvalue(internals.pv,(function(v58){return v58!==l6.value?v58:v57;
})(internals.js_to_lisp((function(){var TMP=v57[internals.xstring(l56)];
return TMP===undefined?l6.value:TMP;
})())));
}})();
}));
})(internals.symbolValue(l54));
case 2:(function(){throw new internals.BlockNLX(v47,(function(v65){internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l67)][internals.xstring(l68)](internals.lisp_to_js(l65),internals.lisp_to_js(l66)));
internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l71)][internals.xstring(l72)](internals.lisp_to_js((function(){var F=internals.symbolFunction(l43);
var ARGS=[internals.pv,l6.value];
var TAIL=l69.fvalue(internals.pv,v65);
while (TAIL!=l6.value){ARGS.push(TAIL.car);
TAIL=TAIL.cdr;
}return (typeof F==='function'?F:F.fvalue).apply(this,ARGS);
})()),internals.lisp_to_js(l70)));
return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l75)][internals.xstring(l76)](internals.lisp_to_js(l73.fvalue(internals.pv,'\n')),internals.lisp_to_js(l74)));
})(v48),'G283');
})();
default:break TBLOOP;
}}catch (JUMP){if (JUMP instanceof internals.TagNLX&&JUMP.id==v50) v49=JUMP.label;
 else throw JUMP;
}}return l6.value;
})();
})(l6.value);
}catch (CF){if (CF instanceof internals.BlockNLX&&CF.id==v47) return CF.values;
 else throw CF;
}})();
}catch (v44){v44=internals.js_to_lisp(v44);
internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l47)][internals.xstring(l48)](internals.lisp_to_js(v44)));
return (function(v46){return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l52)][internals.xstring(l53)](internals.lisp_to_js(l43.fvalue(internals.pv,l6.value,l50,v46)),internals.lisp_to_js(l51)));
})((function(v45){return v45!==l6.value?v45:v44;
})(internals.js_to_lisp((function(){var TMP=v44[internals.xstring(l49)];
return TMP===undefined?l6.value:TMP;
})())));
}})();
l21.fvalue(internals.pv);
return l34.fvalue(values);
})();
}));
})();
});
FUNC.fname='TOPLEVEL';
return FUNC;
})();
l34;
var l79=internals.intern('WEB-INIT');
var l80=internals.intern('*STANDARD-OUTPUT*','COMMON-LISP');
var l81=internals.intern('WRITE-FN','KEYWORD');
l81.value=l81;
var l82=internals.intern('MAKE-STREAM');
var l83=internals.intern('HTML','KEYWORD');
l83.value=l83;
var l84=internals.intern('WELCOME-MESSAGE');
var l85=internals.make_lisp_string('load');
var l86=internals.make_lisp_string('window');
var l87=internals.make_lisp_string('addEventListener');
l79.fvalue=(function(){var FUNC=(function JSCL_USER_WEBINIT(values){internals.checkArgsAtMost(arguments.length-1,0);
var v67=this;
return (function(){l13.fvalue(internals.pv);
l80.value=l82.fvalue(internals.pv,l81.value,(function JSCL_USER_NIL(values,v69){internals.checkArgs(arguments.length-1,1);
var v70=this;
return l2.fvalue(values,v69);
}));
l84.fvalue(internals.pv,l83.value,l3.value);
return internals.js_to_lisp(internals.symbolValue(l4)[internals.xstring(l86)][internals.xstring(l87)](internals.lisp_to_js(l85),internals.lisp_to_js((function JSCL_USER_NIL(values){var v73=l6.value;
var I;
for (I=arguments.length-1-1;I>=0;I--)v73=new internals.Cons(arguments[I+1],v73);
var v74=this;
return l34.fvalue(values);
}))));
})();
});
FUNC.fname='WEB-INIT';
return FUNC;
})();
l79;
l79.fvalue(internals.pv);
})(jscl.internals.pv, jscl.internals);
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )
