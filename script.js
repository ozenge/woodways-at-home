let P=(x,f,...fs)=>fs.length?Px(f(x),...fs):f?f(x):x;
let Px=(...fs)=>x=>Px(x,...fs);
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

let level=`spring\n\nL1\n6,6\n......\n.lwlll\n.lr.g.\nlFwlwrl\n.l.lll\n......\n\nL2\n6,5\n....r.\nFlFlwlgg\n.lrl..\n.lll..\n......\n\nL3\n5,5\n.r...\nFll...\nllggl\nFllr..\n.....\n\nL4\n6,5\n......\n...wl.\n.rlglr\nFlwgwFl.\n......\n\nL5\n5,5\n.....\n.l...\n.Dwrg.\n.l...\n.....\n\nL6\n4,4\nFll..\nD.wr.\ngw..\n..g.\n\nL7\n4,4\nllrl\nBlwlg\nFlwlg\nlllw\n\nL8\n5,5\n..g..\nwg.gr\nwFwD.Bl.\nwwrl.\n.....\n\nL9\n5,5\n.....\n.g...\n.lgr.\n.FlBlDg.\n.....\n\nL10\n5,5\n...lr\n.Blwg.\nrFllg.\nlDlwg.\n...r.\n\nL11\n5,5\n....r\nBlwgww\nlrFwgw\nDlgr..\n.....\n\nL12\n5,6\n.....\n.lgll\n.lglr\n.lgll\n.BlBlBl.\n.....\n\nL13\n5,5\n.....\n.lBll.\n.grl.\nrBlgFl.\n.lll.\n\nL14\n5,5\nFllDllBll\nrlrlr\nll.ww\nlr.rw\ng.g.g\n\nL15\n5,5\n..lll\n.lgrl\ngg.ll\n.lll.\nDwFlBlr.\n\nL16\n6,5\n......\n.Dg.Dwr.\n..Fgl..\n.rwg..\n......\n\nL17\n5,6\nDlFl...\nlrr..\nlwgg.\nlwgg.\nlrr..\nDlFl...\n\nL18\n5,5\n.....\nBlrlg.\nDlFlwrg\nrllgw\n...r.\n\nL19\n5,4\n.wgll\n.g.rFl\ngwrBl.\n.rBll.\n\nL20\n5,4\nlllgl\nlr.gw\nFlBl.g.\nD.llr.\n\nL21\n5,3\n...gg\nr.rg.\nlDlFlBl.\n\nL22\n4,5\nwwll\nwrBlr\nwFglg\n..D.r\n.g..\n\nwinter\n\nL23\n6,5\n......\n.Fgiir.\n.Dliig.\n.Bgiir.\n......\n\nL24\n6,6\n......\n.Fllwg.\n.Dliwgr\n.Bliig.\n.lr...\n......\n\nL25\n6,5\n......\nBllr..l\nFlDliiig\nllw.gg\n......\n\nL26\n5,4\nFw.Dw.Bw\ni.i.i\nlwlgl\n..g.g\n\nL27\n6,5\n..w...\nrFlii.g\n.Dliilg\nrBliiwg\nlll...\n\nL28\n4,6\nrl..\nllr.\nBllw.\nFgwr.\nDlglr\n..g.\n\nL29\n6,6\n......\nlliig.\niFllll.\niFlBgrl.\n.liig.\n......\n\nL30\n5,4\nlilil\nwiiiw\ngiiiw\n.FgBlDg.\n\nL31\n5,5\nBliriBl\nigigi\nriiir\nigigi\nBliriBl\n\nL32\n5,5\nBllg.g\n.wl..\nFlllg.\nlrl..\nDl.l..\n\nL33\n4,4\ngggr\nDiiiBl\niFlil\n.www\n\nL34\n5,6\n.....\n.rgg.\n.lgg.\n.rii.\n.rFlFl.\n...D.D.\n\nL35\n5,5\n.rgg.\n.wllg\n..ii.\n.iii.\n.wFlFl.\n\nL36\n5,5\n.wFlll\nglill\ng.iD.w\ngwill\n.lBlll\n\nL37\n5,7\n.wFl..\n.gBlg.\nliBiil\nliril\n.lgl.\n.lll.\n.....\n\nL38\n5,5\n..r.l\n.rg.g\n.l.rg\n.BlFlll\n..D...\n\nL39\n5,5\n..rll\ngFwDgBll\nwiiii\ngrg.i\nwwDlll\n\nautumn\n\nL40\n5,5\n.....\n.ggg.\n.l.w.\npDlFlBlp\n.....\n\nL41\n5,5\n.rw..\n.lFll.\n.pgp.\n.lFll.\n.gw..\n\nL42\n6,6\n......\n...lr.\n.pFlBlp.\nrl..lr\n.lppl.\n...p..\n\nL43\n5,5\n..g..\n..r..\npDlFgDlp\n..r..\n..g..\n\nL44\n4,4\nwll.\nFlrDll\nwBgwl\n.ggl\n\nL45\n5,5\n.g.Dg.\ngFlDgBll\np.l.p\nl.r.l\n.....\n\nL46\n6,6\n......\n.pllll\nrlgl.l\n..lg.l\n..FlBlpr\n......\n\nL47\n5,4\n..ggg\nFwp.w.\n..rwD.\n..D.p.\n\nL48\n5,4\n..r..\np.r.p\nD.Dwr..\nDgDgFggg\n\nL49\n4,4\ng...\nBgiwFl\npiip\nwlw.\n\nL50\n5,4\nFwFw.FwFw\npllll\nggggw\n.wllp\n\nL51\n5,4\n..D...\nFwp.pB.\nwgrll\ngwg.r\n\nL52\n6,6\n.plll.\n..rl..\n..BlFlD..\n..wp..\n.ggg..\n......\n\nL53\n7,5\n..r....\n.wpgip.\n.iiiii.\n.glFlDlg.\n..llBl..\n\nL54\n5,5\n.pBll.\n...r.\ngplDl.\nFggl..\n.....\n\nL55\n4,4\npw..\nFllrg\n.wgl\nBlgpDl\n\nspring\n\nL56\n7,6\n.......\n.rlgwr.\n.ll.lw.\n.lg.g.r\nrpFlBlDlp.\n.......`;
let menu=`spring\n0105061312161922\n020307..11141720\n..04080910151821\nwinter\n..37343128....23\n..36333027262524\n3938353239......\nautumn\n40..454851......\n4142434649525354\n....444750....55\nspring\n............5756`;

let gg=57,lv=1;

//[]->t:type,a:animal,l:level number,s:season(unlocked if t=="l",done if t=="g")
menu=(_=>{
	let s,m=[];
	for(let l of menu.trim().split(/\r?\n/g)){
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
		if(x.l==lv)x.a="F";else x.a=0;
	}
};updMenu();
//[]->l:level number,s:season,g:grid,w:width,h:height
//g.->t:type,a:animal,m:in motion,v:vector,i:incoming,iv:incoming vector (!m&&!v->portal)
level=(_=>{
	let s,l=[{l:0}],ll=0;
	for(let ln of level.trim().split(/\r?\n/g)){
		if(!ln.length)ll=0;
		if(!ll){
			if(/[a-z]/.test(ln)){s=ln;continue;}
			if(/[A-Z]/.test(ln)){ll=+ln.slice(1);l.push({l:ll,s,g:[]});continue;}
			continue;
		}
		if(/\d/.test(ln)){[l[ll].w,l[ll].h]=ln.split(",").map(x=>+x);continue;}
		l[ll].g.push(P(
			ln.match(/[A-Z].|[^A-Z]/g),
			x=>x.map(x=>x=="."?{t:0}:/[A-Z]/.test(x)?{t:x[1],a:x[0],s}:{t:x,s}),
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
	let g_=s.g,e=s.e;
	if(e>1)return{g_,e};                 //level ended
	let g=clone(g_);                     //clone
	if(e==1&&v){for(let[x,i,j]of i2(g))if(x.a){x.m=1;x.v=v}return move({g,e});} //induce vel
	let ps=i2a(g).filter(([x,i,j])=>x.t=="p").map(x=>x.slice(1));         //portals
	for(let[x,i,j]of i2(g)){                            //make incomings
		if(!x.m)continue;x.m=0;                           //moving only
		if(!x.v){
			let[pi,pj]=ps.filter(y=>!match(y,[i,j]))[0];    //portals
			g[pi][pj].a=x.a;x.a=0;
			L("portal alert");
		}else{
			let[di,dj]=[i+x.v[0],j+x.v[1]];                 //slide to non-rock space
			if(g[di]&&g[di][dj]&&g[di][dj].t!="r"){
				if(x.t=="w"&&x.a=="F")g[i][j].t=0;            //Fox destroys wood
				g[di][dj].i=x.a;g[di][dj].iv=x.v;x.a=0;
			}
			x.v=0;
		}
	}
	let lost=0,inMotion=0;
	for(let[x,i,j]of i2(g)){                                    //resolve incomings
		if(!x.i)continue;                                         //incoming only
		if(x.a){x.a="X";x.i=x.iv=0;lost=1;continue;}              //collision
		let iv=x.iv;x.a=x.i;x.i=x.iv=0;                           //place down,clear i,iv
		if(!x.t&&x.a!="D")    {x.a="X";lost=1;continue;}          //only Ducks can stand on water
		if(x.t=="i")          {x.v=iv;x.m=1;inMotion=1;continue;} //slip on ice
		if(x.t=="p"&&mode)    {       x.m=1;inMotion=1;continue;} //portal (mode 1)
		if(x.t=="w"&&x.a=="B"){x.t=0;x.a="X";lost=1;continue;}    //Bison can't stand on wood
	}
	if(lost)return{g,e:2};if(inMotion)return{g,e:0};
	for(let[x,i,j]of i2(g)){                                    //win detection
		if(x.t=="g"&&!x.a)return{g,e:1};                          //goal without an animal
	}return{g,e:3};
};

//g:grid,s:season(if cell has none)
let ctx=window.level.getContext("2d");ctx.textAlign="center";
let draw=(g,s)=>{
	let co={W:"darkturquoise",w:"sienna",i:"cyan",lspring:"lightgreen",lwinter:"lightcyan",lautumn:"bisque"};
	let em=x=>String.fromCharCode(...{
		r:[0xD83E,0xDEA8],g:[0xD83D,0xDEA9],p:[0xD83C,0xDF00],s:[0xD83C,0xDF1F],
		F:[0xD83D,0xDC15],B:[0xD83E,0xDDAC],D:[0xD83E,0xDD86],X:[0xD83D,0xDCA5] //dog F for consistency
	}[x]);
	let cw=800,gh=g.length;gw=g[0].length,w=cw/Math.max(gh,gw),oy=(cw-gh*w)/2,ox=(cw-gw*w)/2;  //w:side-length
	ctx.clearRect(0,0,cw,cw);
	for(let[x,i,j]of i2a(g).reverse()){
		let[dx,dy]=[ox+w*j,oy+w*i];
		ctx.strokeStyle="rgba(0,0,0,0.25)";ctx.lineWidth=5;                                          //bg
		ctx.fillStyle=(!x.t)?co.W:/[wi]/.test(x.t)?co[x.t]:co["l"+(x.s||s)];ctx.fillRect(dx,dy,w,w);
		if(x.t)ctx.strokeRect(dx,dy,w,w);ctx.fillStyle="black";dx+=w/2;dy+=w*0.75; //why?
		ctx.font=`bold ${w*0.67}px sans-serif`;ctx.strokeStyle="white";                              //fg
		if(/[rgp]/.test(x.t))ctx.fillText(em(x.l==gg&&x.u?"s":x.t),dx,dy);
		if(x.l&&x.t!="r"){let p=[x.l==gg?"gg":x.l,dx,dy];ctx.strokeText(...p);ctx.fillText(...p);}
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
	if(state.e==3||history.length<1)return;//if won or no history, don't undo
	if(state.e==1)history.pop();state=JSON.parse(history[history.length-1]);draw(state.g);
};
let dirBtn=v=>{                                     //v:vector
	if(v&&state.e-1)return;                           //player moves only in neutral,ignore won state in mode 0
	state=move(state,v);draw(state.g);
	if(!mode){if(state.e==3)state.e=1;if(state.e==1)menu=state.g};  //if mode 0,reset to neutral if win,update menu
	if(!state.e){setTimeout(dirBtn,200);return;}      //call with no args
	if(mode&&state.e==3){                             //mode 1 only;won;update progress
		blurb.innerHTML+=" completed!";
		let unlocked=JSON.parse(localStorage.unlocked||"[1]"),done=JSON.parse(localStorage.done||"[]");
		let li,lj;for(let[x,i,j]of i2(menu))if(x.l==lv){[li,lj]=[i,j];break;}                            //find coordinates in menu
		let nbors="lurd".split("").map(x=>vs[x]).map(([vi,vj])=>[li+vi,lj+vj]).filter(n=>p2(menu,n));    //valid neighbors
		let unlock=nbors.map(([ni,nj])=>menu[ni][nj].l).filter(x=>x&&Math.abs(x-lv)<4);
		done=uniq([lv,...done]);unlocked=uniq([...unlock,...unlocked]);                                  //write to array
		localStorage.done=JSON.stringify(done);localStorage.unlocked=JSON.stringify(unlocked);updMenu(); //write to localStorage
	}
	if(state.e==1)history.push(JSON.stringify(state)); //stable->add to history
};

                            W["restart-btn"].addEventListener("click",rBtn);
                            W["back"]       .addEventListener("click",backBtn);
                            W["undo-btn"]   .addEventListener("click",zBtn);
"lurd".split("").forEach(x=>W[x+"-btn"]     .addEventListener("click",_=>{dirBtn(vs[x]);}));
let keyFn={
	w:_=>{dirBtn(vs.u);},a:_=>{dirBtn(vs.l);},s:_=>{dirBtn(vs.d);},d:_=>{dirBtn(vs.r);},
	r:rBtn,z:zBtn,
};[keyFn.ArrowUp,keyFn.ArrowLeft,keyFn.ArrowDown,keyFn.ArrowRight]=[keyFn.w,keyFn.a,keyFn.s,keyFn.d];
window.addEventListener("keydown",e=>{(keyFn[e.key]||(_=>0))();});
back.style.display="none";draw(state.g);
