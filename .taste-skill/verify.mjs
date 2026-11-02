import {Browser,sleep} from 'file:///C:/Users/stamp/.codex/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import {writeFileSync} from 'node:fs';
const b=await Browser.launch();const results=[];
try{
const p=await b.newPage({width:390,height:844});
await p.goto('file:///C:/Users/stamp/Documents/Github/weiguanglok.github.io/index.html');
for(const width of [320,390,700,768,1000,1100,1440]){await p.setViewport({width,height:844});await sleep(150);results.push(await p.eval(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,buttonBottom:document.querySelector('.hero .button').getBoundingClientRect().bottom,imageLoaded:document.querySelector('.railway-crop img').naturalWidth>0})));}
await p.setViewport({width:390,height:844});
await p.eval(()=>document.querySelector('.menu-toggle').click());
results.push(await p.eval(()=>({menuOpen:document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true'})));
await p.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
results.push(await p.eval(()=>({escapeClosed:document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='false'})));
await p.eval(()=>{const el=document.querySelectorAll('summary')[1];el.scrollIntoView();el.focus()});
await p.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await p.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await sleep(400);
results.push(await p.eval(()=>({keyboardOpened:document.querySelectorAll('details')[1].open})));
await p.eval(()=>document.querySelectorAll('details').forEach(d=>{for(let i=0;i<9;i++)d.open=!d.open;d.open=true}));
await p.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await sleep(400);
results.push(await p.eval(()=>({reducedMotionVisible:[...document.querySelectorAll('.topic-content')].every(e=>getComputedStyle(e).visibility!=='hidden'&&getComputedStyle(e).opacity==='1'),brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).length})));
await p.eval(()=>{document.documentElement.style.fontSize='200%';document.body.style.fontSize='36px'});results.push(await p.eval(()=>({textZoomOverflow:document.documentElement.scrollWidth>innerWidth})));
await p.send('Emulation.setScriptExecutionDisabled',{value:true});await p.goto('file:///C:/Users/stamp/Documents/Github/weiguanglok.github.io/index.html');
results.push(await p.eval(()=>({noScriptTopics:document.querySelectorAll('details').length,noScriptFirstOpen:document.querySelector('details').open})));
results.push({consoleErrors:p.consoleErrors});
console.log(JSON.stringify(results,null,2));writeFileSync('.taste-skill/after/interaction-checks.json',JSON.stringify(results,null,2));
}finally{await b.close()}
