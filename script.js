let P=(x,f,...fs)=>fs.length?Px(f(x),...fs):f?f(x):x;
let L=x=>{console.log(x);return x;};
let clone=x=>JSON.parse(JSON.stringify(x));
let match=(a,b)=>JSON.stringify(a)==JSON.stringify(b);
let p2=(a,[i,j])=>(a[i]??[])[j];
let i2=function*(a){
	for(let i=0;i<a.length;i++)
		for(let j=0;j<a[i].length;j++)
			yield[a[i][j],i,j];
};
let i2a=a=>[...i2(a)];
let uniq=a=>a.filter((x,i)=>a.indexOf(x)==i);//scalar only

let level=`spring;L1;......;.lwlll;.lr.g.;lFwlwrl;.l.lll;......;L2;....r.;FlFlwlgg;.lrl..;.lll..;......;L3;.r...;Fll...;llggl;Fllr..;.....;L4;......;...wl.;.rlglr;FlwgwFl.;......;L5;.....;.l...;.Dwrg.;.l...;.....;L6;Fll..;D.wr.;gw..;..g.;L7;llrl;Blwlg;Flwlg;lllw;L8;..g..;wg.gr;wFwD.Bl.;wwrl.;.....;L9;.....;.g...;.lgr.;.FlBlDg.;.....;L10;...lr;.Blwg.;rFllg.;lDlwg.;...r.;L11;....r;Blwgww;lrFwgw;Dlgr..;.....;L12;.....;.lgll;.lglr;.lgll;.BlBlBl.;.....;L13;.....;.lBgl.;.grl.;rDlgFl.;.lll.;L14;FllDllBl;rlrlr;ll.ww;lr.rw;g.g.g;L15;..lll;.lgrl;gg.ll;.lll.;DwFlBlr.;L16;......;.Dg.Dwr.;..Fgl..;.rwg..;......;L17;DlFl...;lrr..;lwgg.;lwgg.;lrr..;DlFl...;L18;.....;Blrlg.;DlFlwrg;rllgw;...r.;L19;.wgll;.g.rFl;gwrDll;.rBll.;L20;lllgl;lr.gw;FlBl.g.;D.llr.;L21;...gg;r.rg.;lDlFlBl.;L22;wwll;wrBlr;wFglg;..D.r;.g..;winter;L23;......;.Fgiir.;.Dliig.;.Bgiir.;......;L24;......;.Fllwg.;.Dliwgr;.Bliig.;.lr...;......;L25;......;Bllr..l;FlDliiig;llw.gg;......;L26;Fw.Dw.Bl;i.i.i;lwlgl;..g.g;L27;..w...;rFlii.g;.Dliilg;rBliiwg;lll...;L28;rl..;llr.;Bllw.;Fgwr.;Dlglr;..g.;L29;......;lliig.;iFllll.;iFlDgrl.;.liig.;......;L30;lilil;wiiiw;giiiw;.FgBlDg.;L31;BliriBl;igigi;riiir;igigi;BliriBl;L32;Bllg.g;.wl..;Flllg.;lrl..;Dl.l..;L33;gggr;DiiiBl;iFlil;.www;L34;.....;.rgg.;.lgg.;.rii.;.rFlFl.;...D.D.;L35;.rgg.;.wllg;..ii.;.iii.;.DwFlFl.;L36;.wFlll;glill;g.iD.w;gwill;.lBlll;L37;.wFl..;.gDlg.;liBiil;liril;.lgl.;.lll.;.....;L38;..r.l;.rg.g;.l.rg;.BlFlll;..D...;L39;..rll;gFwDgBll;wiiii;grg.i;wwDlll;autumn;L40;.....;.ggg.;.l.w.;pDlFlBlp;.....;L41;.rw..;.lFll.;.pgp.;.lFll.;.gw..;L42;......;...lr.;.pFlBlp.;rl..lr;.lggl.;...r..;L43;..g..;..r..;pDlFgDlp;..r..;..g..;L44;wll.;FlrDll;wBgwl;.ggl;L45;.g.Dg.;gFlDgBll;p.l.p;l.r.l;.....;L46;......;.pllll;rlgl.l;..lg.l;..FlBlpr;......;L47;..ggg;Fwp.w.;..rwD.;..D.p.;L48;..r..;p.r.p;D.Dwr..;DgDgFggg;L49;g...;BgiwFl;piip;wlw.;L50;FwFw.FwFw;pllll;ggggw;.wllp;L51;..D...;Fwp.pB.;wgrll;gwg.r;L52;.plll.;..rl..;..BlFlD..;..wp..;.ggg..;......;L53;..r....;.wpgip.;.iiiii.;.glFlDlg.;..llBl..;L54;.pBll.;...r.;gplDl.;Fggl..;.....;L55;pw..;Fllrg;.wgl;BlgpDl;spring;L56;.......;.rlgwr.;.ll.lw.;.lg.g.r;rpFlBlDlp.;.......`;
let menu=`spring;0105061312161922;020307..11141720;..04080910151821;winter;..37343128....23;..36333027262524;3938353229......;autumn;40..454851......;4142434649525354;....444750....55;spring;............5756`;

let gg=57,lv=1;

//[]->t:type,a:animal,l:level number,s:season(unlocked if t=="l",done if t=="g")
menu=(_=>{
	let s,m=[];
	for(let l of menu.trim().split(";")){
		if(/[a-z]/.test(l)){s=l;continue;}
		m.push(l.match(/../g).map(x=>/\d|\*/.test(x)?{l:+x,s}:{}));
	}
	return m;
})();
let updMenu=_=>{
	let unlocked=JSON.parse(localStorage.unlocked||"[1]"),done=JSON.parse(localStorage.done||"[]");
	for(let[x,i,j]of i2(menu)){
		if(!x.l)continue;
		x.t=done.includes(x.l)?"g":unlocked.includes(x.l)?"p":"r";
		if(unlocked.includes(x.l))x.u=1;
		if(x.l==lv)x.a="F";else x.a=0;
	}
};updMenu();
//[]->l:level number,s:season,g:grid,w:width,h:height
//g.->t:type,a:animal,m:in motion,v:vector,i:incoming,iv:incoming vector (!m&&!v->portal)
level=(_=>{
	let s,l=[{l:0}],ll=0;
	for(let ln of level.trim().split(";")){
		if(ln[0]=="L"){ll=+ln.slice(1);l.push({l:ll,s,g:[]});continue;}
		if(/^[a-z]{6}$/.test(ln)){s=ln;continue;}
		l[ll].g.push(P(
			ln.match(/[A-Z].|[^A-Z]/g),
			x=>x.map(x=>x=="."?{t:0}:/[A-Z]/.test(x)?{t:x[1]!="."?x[1]:0,a:x[0],s}:{t:x,s}),
		));
	}
	return l;
})();

//global
let vs={u:[-1,0],d:[1,0],l:[0,-1],r:[0,1]},W=window;
let mode=0,state={g:menu,e:1},history=[JSON.stringify(state)];//lv declared earlier
let dbgG=g=>{console.log(g.map(r=>r.map(x=>`${x.a||" "}${x.t||"."}`).join("")).join("\n"));};//debug grid

//{g:grid,e:ended},v:vector=>g:grid,e:ended
//e->0:in motion,1:neutral,2:lose,3:win
let move=(s,v)=>{
	let g_=s.g,e=s.e;if(e>1)return{g_,e};let g=clone(g_);
	if(e==1&&v){for(let[x,i,j]of i2(g))if(x.a){x.m=1;x.v=v}return move({g,e});} //induce vel
	let ps=i2a(g).filter(([x,i,j])=>x.t=="p").map(x=>x.slice(1));         //portals
	for(let[x,i,j]of i2(g)){                            //make incomings
		if(!x.m)continue;x.m=0;                           //moving only
		if(!x.v){
			let[pi,pj]=ps.filter(y=>!match(y,[i,j]))[0];                          //the other portal
			if(g[pi][pj].a&&!g[pi][pj].m){g[pi][pj].a="X";x.a=0;continue;} //portal collision
			[g[pi][pj].a,x.a]=[x.a,g[pi][pj].a];g[pi][pj].m=0;                    //swap places
		}else{
			let[di,dj]=[i+x.v[0],j+x.v[1]];                 //slide to non-rock space
			if(g[di]&&g[di][dj]&&g[di][dj].t!="r"){
				if(x.t=="w"&&x.a=="F")g[i][j].t=0;            //Fox destroys wood
				g[di][dj].i=x.a;g[di][dj].iv=x.v;x.a=0;
			}
			x.v=0;
		}
	}
	let inMotion=0;
	for(let[x,i,j]of i2(g)){                                    //resolve incomings
		if(!x.i)continue;                                         //incoming only
		if(x.a){x.a="X";x.i=x.iv=0;;continue;}                    //collision
		let xi=x.i,iv=x.iv;x.a=x.i;x.i=x.iv=0;                    //place down,clear i,iv
		if(!x.t&&x.a!="D")    {x.a="X";continue;}                 //only Ducks can stand on water
		if(x.t=="i")          {x.v=iv;x.m=1;inMotion=1;continue;} //slip on ice
		if(x.t=="p"&&mode)    {x.v=0; x.m=1;inMotion=1;continue;} //portal (mode 1)
		if(x.t=="w"&&x.a=="B"){x.t=0;x.a="X";continue;}           //Bison can't stand on wood
	}
	                       if(inMotion)      return{g,e:0}; //in motion
	for(let[x,i,j]of i2(g))if(x.a=="X")      return{g,e:2}; //loss
	for(let[x,i,j]of i2(g))if(!x.a&&x.t=="g")return{g,e:1}; //neutral
	                                         return{g,e:3}; //win
};

//g:grid,s:season(if cell has none)
let ctx=window.level.getContext("2d");ctx.textAlign="center";
let draw=(g,s)=>{
	let co={W:"steelblue",w:"chocolate",i:"cyan",lspring:"lightgreen",lwinter:"azure",lautumn:"bisque"};
	let em=x=>String.fromCharCode(...{
		r:[0xD83E,0xDEA8],g:[0xD83D,0xDEA9],p:[0xD83C,0xDF00],s:[0xD83C,0xDF1F],
		F:[0xD83D,0xDC15],B:[0xD83E,0xDDAC],D:[0xD83E,0xDD86],X:[0xD83D,0xDCA5] //dog F for consistency
	}[x]);
	let cw=800,gh=g.length;gw=g[0].length,w=Math.ceil(cw/Math.max(gh,gw)),oy=(cw-gh*w)/2,ox=(cw-gw*w)/2;  //w:side-length
	ctx.clearRect(0,0,cw,cw);
	for(let[x,i,j]of i2a(g).reverse()){
		let[dx,dy]=[ox+w*j,oy+w*i];
		ctx.strokeStyle="rgba(0,0,0,0.25)";ctx.lineWidth=10;                                          //bg
		ctx.fillStyle=(!x.t)?co.W:/[wi]/.test(x.t)?co[x.t]:co["l"+(x.s||s)];ctx.fillRect(dx,dy,w,w);
		if(x.t)ctx.strokeRect(dx,dy,w,w);ctx.fillStyle="black";dx+=w/2;dy+=w*0.75; //why?
		ctx.font=`bold ${w*0.67}px sans-serif`;ctx.strokeStyle="white";ctx.lineWidth=5;               //fg
		if(/[rgp]/.test(x.t)){let p=[em(x.l==gg&&x.u?"s":x.t),dx,dy];ctx.strokeText(...p);ctx.fillText(...p);}
		if(x.l&&x.t!="r")    {let p=[x.l==gg?"gg":x.l,dx,dy];        ctx.strokeText(...p);ctx.fillText(...p);}
		if(x.a)ctx.fillText(em(x.a),dx,dy);
	}
}

//funtest
//let lv=level[2],dg=dbgG,lvg=lv.g;
//let mlv=v=>{let mv=move({g:lvg,e:1},v);dg(mv.g);L("moving neutral lose win".split(" ")[mv.e]);lvg=mv.g;}
//" rddrruur".split("").map(x=>vs[x]).forEach(mlv);
//draw(lvg,"spring");

let rBtn=_=>{
	if(!mode&&state.e!=2){//menu and not lost
		let l;for(let[x,i,j]of i2(state.g))if(x.a){l=x.l;break;}if(l==gg)return;//find level but not the gg square
		lv=l;back.style.display="inline";blurb.innerHTML="level "+l;
		mode=1;state={g:level[l].g,e:1};history=[JSON.stringify(state)];draw(state.g);
	}else state=JSON.parse(history[0]);history=[history[0]];draw(state.g);
};
let backBtn=_=>{//only happens when mode:1
	mode=0;state={g:menu,e:1};history=[JSON.stringify(state)];
	back.style.display="none";blurb.innerHTML="choose a level and press r";draw(state.g);
};
let zBtn=_=>{
	if(!state.e%3||history.length<2)return;//if ongoing or won or no history, don't undo
	history.pop();state=JSON.parse(history[history.length-1]);draw(state.g);
};
let dirBtn=v=>{                                     //v:vector
	if(v&&state.e-1)return;                           //player moves only in neutral,ignore won state in mode 0
	state=move(state,v);draw(state.g);
	if(!mode){if(state.e==3)state.e=1;if(state.e==1)menu=state.g};  //if mode 0,reset to neutral if win,update menu
	if(!state.e){setTimeout(dirBtn,200);return;}      //call with no args
	if(mode&&state.e==3){                             //mode 1 only;won;update progress
		blurb.innerHTML+=" completed!";
		let unlocked=JSON.parse(localStorage.unlocked||"[1]"),done=JSON.parse(localStorage.done||"[]");
		let li,lj;for(let[x,i,j]of i2(menu))if(x.l==lv){[li,lj]=[i,j];break;}                              //find coordinates in menu
		let nbors="lurd".split("").map(x=>vs[x]).map(([vi,vj])=>[li+vi,lj+vj]).filter(n=>p2(menu,n));      //valid neighbors
		let unlock=nbors.map(([ni,nj])=>menu[ni][nj].l).filter(x=>x&&Math.abs(x-lv)<4);
		unlocked=uniq([...unlock,...unlocked]);done=uniq([lv,...[unlocked.includes(gg)?[gg]:[]],...done]); //write to array
		localStorage.done=JSON.stringify(done);localStorage.unlocked=JSON.stringify(unlocked);updMenu();   //write to localStorage
	}
	history.push(JSON.stringify(state)); //add to history
};

                            W["restart-btn"].addEventListener("click",rBtn);
                            W["back"]       .addEventListener("click",backBtn);
                            W["undo-btn"]   .addEventListener("click",zBtn);
"lurd".split("").forEach(x=>W[x+"-btn"]     .addEventListener("click",_=>{dirBtn(vs[x]);}));
let keyFn={w:_=>{dirBtn(vs.u);},a:_=>{dirBtn(vs.l);},s:_=>{dirBtn(vs.d);},d:_=>{dirBtn(vs.r);},r:rBtn,z:zBtn,Escape:backBtn};
[keyFn.ArrowUp,keyFn.ArrowLeft,keyFn.ArrowDown,keyFn.ArrowRight,keyFn.Enter]=[keyFn.w,keyFn.a,keyFn.s,keyFn.d,keyFn.r];
window.addEventListener("keydown",e=>{(keyFn[e.key]||(_=>0))();});
back.style.display="none";draw(state.g);
