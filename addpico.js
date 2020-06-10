var pico8container = document.createElement("div");
pico8container.innerHTML = `
<div>
	<div id="ppicotetris-5" class="playarea_0">
		<div id="p8_frame_0">
			<canvas id="canvas"></canvas>
		</div>
		<div id="cart"></div>
	</div>
</div>
<div id="fake_dormant"></div>
`;
document.body.appendChild(pico8container);
function microAjax(B,A){this.bindFunction=function(E,D){return function(){return E.apply(D,[D])}};this.stateChange=function(D){if(this.request.readyState==4){this.callbackFunction(this.request.responseText)}};this.getRequest=function(){if(window.ActiveXObject){return new ActiveXObject("Microsoft.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}return false};this.postBody=(arguments[2]||"");this.callbackFunction=A;this.url=B;this.request=this.getRequest();if(this.request){var C=this.request;C.onreadystatechange=this.bindFunction(this.stateChange,this);if(this.postBody!==""){C.open("POST.html",B,true);C.setRequestHeader("X-Requested-With","XMLHttpRequest");C.setRequestHeader("Content-type","application/x-www-form-urlencoded");C.setRequestHeader("Connection","close")}else{C.open("GET.html",B,true)}C.send(this.postBody)}};
var current_time="2020-05-20 17:28:56",s_uid=0;function $(e){return document.getElementById(e)}var p_page=1,p_sub=0,p_cat=0,p_pid=0,search_url_base="",tag_url_base="",pip_form_data={},touch_detected=!1,undefined="undefined",current_playing_cart_id=-1;function microAjax(e,t){var n;this.bindFunction=function(e,t){return function(){return e.apply(t,[t])}},this.stateChange=function(e){4==this.request.readyState&&this.callbackFunction(this.request.responseText)},this.getRequest=function(){return window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):!!window.XMLHttpRequest&&new XMLHttpRequest},this.postBody=arguments[2]||"",this.callbackFunction=t,this.url=e,this.request=this.getRequest(),this.request&&((n=this.request).onreadystatechange=this.bindFunction(this.stateChange,this),""!==this.postBody?(n.open("POST.html",e,!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("Connection","close")):n.open("GET.html",e,!0),n.send(this.postBody))}function post_ajax(e,t,n){var i="string"==typeof t?t:Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"),o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return o.open("POST.html",e),o.onreadystatechange=function(){3<o.readyState&&200==o.status&&n(o.responseText)},o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),o.send(i),o}function poll_function(t,n,i){var o=(new Date).getTime();!function e(){tt=(new Date).getTime()-o,tt<=t&&(i(tt/t),setTimeout(e,n))}()}function insertTextAtCursor(e,t,n){"string"==typeof e&&(el_str=e,(e=document.getElementById(e))||console.log("@ could not find element to insert text: "+el_str));var i,o,s=e.value,a=e.ownerDocument;if(n)return e.focus(),void(e.value=t);"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(i=e.selectionEnd,e.value=s.slice(0,i)+t+s.slice(i),e.selectionStart=e.selectionEnd=i+t.length):"undefined"!=a.selection&&a.selection.createRange&&(e.focus(),(o=a.selection.createRange()).collapse(!1),o.text=t,o.select())}function set_enter_to_save(e,o){e&&(e.value,e.installed_enter_to_save||(console.log("@installing set_enter_to_save: "+e+", "+o),e.installed_enter_to_save=!0,e.addEventListener("keyup",function(e){13==e.keyCode&&o.click()}),e.addEventListener("blur",function(e){var t,n=e.clientX,i=e.clientY;"number"==typeof n&&"number"==typeof i&&((t=document.elementFromPoint(n,i))&&"cancel_button"==t.name||o.click())})))}function toggle_set_button(i,e,t,n){document.getElementsByClassName(i);var o=document.getElementsByClassName("i_"+i);if(0!=s_uid){for(var s=0;s<o.length;s++)o[s].innerHTML="<center><img src=/gfx/load16.gif width=20 height=20></center>";microAjax("setb1f8.html?pid="+e+"&sid="+n+"&which="+t,function(e){for(var t=document.getElementsByClassName(i),n=0;n<t.length;n++)t[n].innerHTML=json_parse(e).printable})}else window.alert("Please log in first.")}function hide_save_draft_button(){var e=document.getElementById("save_draft_button");e&&(e.style.display="none"),(e=document.getElementById("preview_button"))&&(e.style.display=""),(e=document.getElementById("publish_post_button"))&&(e.style.innerHTML="Publish Changes")}function save_attr(e,t,n,i,o){o&&(n+="&extract_snippets=1");var s=document.getElementById(t),a=document.getElementById(e);a?(value=a.value,post_ajax(n,a.value,function(e){dat=json_parse(e),s.innerHTML=dat.printable,dat.modified&&"ok"==dat.status&&(a.value=dat.modified),i&&i()})):microAjax(n,function(e){s.innerHTML=json_parse(e).printable}),s.innerHTML='<div style="padding:8px"><img src=/gfx/load16.gif></div>'}function cancel_attr(e,t,n){var i;console.log("@ cancel_attr("+e+", "+t+", "+n),document.getElementById(e)&&((i=document.getElementById(t)).innerHTML='<div style="padding:8px"><img src=/gfx/load16.gif></div>',microAjax(n,function(e){i.innerHTML=json_parse(e).printable}))}function edit_attr(n,e,i,t,o){var s=document.getElementById(e);s&&(s.innerHTML='<div style="padding:8px"><img src=/gfx/load16.gif></div>',microAjax(t,function(e){s.innerHTML=json_parse(e).printable;var t=document.getElementById(n);t&&o&&(t.focus(),set_enter_to_save(t,document.getElementById(i)))}))}function submit_pip_form_data(e){var t=document.getElementsByClassName("pip_form_input");console.log("@ submit form: adding "+t.length+" values");for(var n=0;n<t.length;n++)el=t[n],el.checked?pip_form_data[el.id]="checked":el.value&&(pip_form_data[el.id]=el.value),console.log("@ set "+el.id+" to "+pip_form_data[el.id]),el.files&&el.files[0]&&(console.log("@ file: "+el.files[0].name),pip_form_data.uploaded_file=JSON.stringify(el.files[0]),pip_form_data.uploaded_file_size=el.files[0].size,pip_form_data.uploaded_name=el.files[0].name,pip_form_data.uploaded_type=el.files[0].type)}function reload_pip_form(e,t){var n=document.getElementById(e);if(console.log("reloading form: "+e+" // step "+t),n){var i=document.getElementById("form_loading_icon");if(i&&(i.innerHTML="<img src=/gfx/load16.gif>"),stringified_data=JSON.stringify(pip_form_data),8388608<stringified_data.length)return void window.alert("Sorry, that file is too large.");post_ajax("https://www.lexaloffle.com/form.php?form="+e+"&step="+t+"&cat="+p_cat+"&sub="+p_sub+"&pid="+p_pid+"&page="+p_page,stringified_data,function(e){n.innerHTML=e})}else console.log("@@ could not find form element")}function save_open_pip_form_fields(){for(var e=document.getElementsByClassName("form_button"),t=e.length-1;0<=t;t--){var n=e[t];suffix=n.id.substr(n.id.length-5),"_save"==suffix&&n.click()}}function submit_pip_form(e,t){submit_pip_form_data(e),reload_pip_form(e,t)}function clear_pip_form(){pip_form_data={}}function randomize_cart_id_field(){for(el=document.getElementById("cart_lid"),c="bdfghjkmnprstwyz",v="aiueo",val="",i=0;i<5;i++)val+=c.substr(Math.floor(16*Math.random()),1),val+=v.substr(Math.floor(6*Math.random()),1);el.value=val}function Uint8ToBase64(e){for(var t,n=0,i=e.length,o="";n<i;)t=e.subarray(n,Math.min(n+32768,i)),o+=String.fromCharCode.apply(null,t),n+=32768;return btoa(o)}function reader_onload(e){var t=new Uint8Array(e.target.result);pip_form_data.file_contents=Uint8ToBase64(t),document.getElementById("uploaded_button").style.display="table"}function filechooser_onchange(e){var t=e[0],n=new FileReader;n.onload=function(e){reader_onload(e)},n.readAsArrayBuffer(t)}function toggle_visible(e){if("string"==typeof e&&(e=document.getElementById(e)),e)return""==e.style.display?!(e.style.display="none"):!(e.style.display="")}function show_tab(e,t,n){var i;console.log("toggle tab "+e+"_"+t),n=n||"form_tab";for(var o=document.getElementsByClassName(n),s=0;s<o.length;s++)i=o[s],el2=document.getElementById(i.id+"_content"),i.id==e+"_"+t?(i.style["background-color"]="#f8a",i.style.color="#222",el2&&console.log(" opening "+el2.id),el2&&(el2.style.display="block")):(i.style["background-color"]="",i.style.color="#fff",el2&&console.log(" hiding "+el2.id),el2&&(el2.style.display="none"))}function get_cart_url(e,t){if(Number(e)==String(e)&&0<Number(e)){if(num=Math.floor(e/1e4),url="/bbs/cposts/"+num+"/",6==t)return url+"cpost"+e+".png";if(7==t)return url+e+".p8.png"}else{if(e=String(e),6==t)return"/bbs/cposts/"+e.substr(0,2)+"/"+e+".vx.png";if(7==t)return"/bbs/cposts/"+e.substr(0,2)+"/"+e+".p8.png"}return""}function element_dismisser(e,t){var n,i=e.childNodes[1];i&&(n=i.getBoundingClientRect(),e.real_dismiss?n&&0<n.bottom&&(t.clientX<n.left||t.clientX>n.right||t.clientY>n.bottom||t.clientY<n.top)&&(console.log(n),e.style.display="none",document.removeEventListener("click",dismisser_func)):e.real_dismiss=!0)}var dismisser_func=null;function install_dismisser(t){document.removeEventListener("click",dismisser_func),dismisser_func=function(e){element_dismisser(t,e)},document.addEventListener("click",dismisser_func),t.real_dismiss=!1}function install_search_listener(t){t.addEventListener("keyup",function(e){13==e.keyCode&&(window.location.hash=""+search_url_base+t.value)})}function json_parse(e){return"{"!=e[0]?(window.alert("Error // Bad Data Format: "+e),{printable:"[error]",status:"bad_data"}):JSON.parse(e)}
var cart_info={};function fullscreenable_canvas(u){var e=(u.mozRequestFullScreen||u.webkitRequestFullScreen||{name:"requestFullScreen"}).name;document.addEventListener(e.slice(0,-"requestFullScreen".length)+"fullscreenchange",function(e){var t,n,l;document.mozFullScreen||document.webkitIsFullScreen||document.fullScreen||document.isFullScreen?(t=u.clientWidth,n=u.clientHeight,l=Math.min(screen.width/t,screen.height/n),u.setAttribute("style","width: "+Math.round(t*l)+"px !important; height: "+Math.round(n*l)+"px !important;")):u.removeAttribute("style")},!1),"mozRequestFullScreen"==e&&(u[e]=function(){this.parentNode[e].apply(this.parentNode,arguments)})}function pip_requestFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}window.onload=function(){};
function validate_signup(e){return!!e.su_agree.checked||(alert("If you wish to sign up, you need to agree to the Terms of Use"),!1)}
var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-367250-1"]),_gaq.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();
var inp = document.createElement("input");
var p8_is_running=!1,p8_script=null,Module=null,codo_textarea=null,p8_current_playing_lid=null;function p8_document(){return document}var pico8_audio_context,p8_autoplay=!1,pico8_state=[],codo_key_buffer=[],p8_keyboard_state=0,pico8_buttons=[0,0,0,0,0,0,0,0],pico8_mouse=[],pico8_gamepads={count:0},pico8_gpio=Array(128);p8_gfx_dat={p8b_pause1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOUlEQVRIx2NgGPbg/8cX/0F46FtAM4vobgHVLRowC6hm0YBbQLFFoxaM4FQ0dHPy0C1Nh26NNugBAAnizNiMfvbGAAAAAElFTkSuQmCC",p8b_controls:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQ0lEQVRIx2NgGAXEgP8fX/ynBaap4XBLhqcF1IyfYWQBrZLz0LEAlzqqxQFVLcAmT3MLqJqTaW7B4CqLaF4fjIIBBwBL/B2vqtPVIwAAAABJRU5ErkJggg==",p8b_full:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIx2NgGPLg/8cX/2mJ6WcBrUJm4CwgOSgGrQVEB8WoBaMWDGMLhm5OHnql6dCt0YY8AAA9oZm+9Z9xQAAAAABJRU5ErkJggg==",p8b_pause0:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAKUlEQVRIx2NgGHbg/8cX/7FhctWNWjBqwagFoxaMWjBqwagF5Fkw5AAAPaGZvsIUtXUAAAAASUVORK5CYII=",p8b_sound0:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAANklEQVRIx2NgGDHg/8cX/5Hx0LEA3cChYwEugwavBcRG4qgFoxYMZwuGfk4efqXp8KnRBj0AAMz7cLDnG4FeAAAAAElFTkSuQmCC",p8b_sound1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAPUlEQVRIx2NgGDHg/8cX/5Hx0LEA3cChYwEugwhZQLQDqG4BsZFIKMhGLRi1YChbMPRz8vArTYdPjTboAQCSVgpXUWQAMAAAAABJRU5ErkJggg==",p8b_close:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAU0lEQVRIx2NkoDFgpJsF/z+++I8iwS9BkuW49A+cBcRaREgf/Swg1SJi1dHfAkIG4EyOOIJy4Cwg1iJCiWDUAvItGLqpaOjm5KFfmg79Gm3ItioAl+mAGVYIZUUAAAAASUVORK5CYII=",p8b_cart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAZ0lEQVR4Ae2dsQrAMAhEa+ie1f//uq79Ajs1OKRyiGDTeuAQAr4cp5lpU5LzEH32ijqPvi2ioaUpgDqTp2BApHbrEs3k6fV5GRSgAD8DmJtsbegaDpb4iz6eAao7q5njHAfo9Lxiii5mqxbMNtaN0wAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII=",controls_left_panel:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAEI0lEQVR42u3dMU7DQBCG0Tjam9DTcP8jpEmfswS5iHBhAsLxev/hvQY6pGXyZRTQ+nQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqbHEEtl+vt7hS+fLy/mXHBQqxEi/6aI/AiFW9SnB2BWDkDBAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwONJ8tYvrXRAsImK19j0IFsPGSrQQLCJiNV+et7xAT7QQLIaN1dr3ooVgMWysRAvBIipWooVgERUr0UKwiIqVaCFYRMVKtBAsomIlWggWUbESLQSLqFiJFoJFVKxEC8EiKlaihWARFSvRQrDYJSSVfhaCBSBYAIIFCBbAHpoj4Bl/scOGBWDD4lX8iwE2LADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsMh1ud7uTsHZVDcZyFo8Yt5sVJ6NyUAaSNEyIymaXwZepIKd4mwoQbAFC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQI4UHME2/10QZq7usyBObBhRQwpmBUb1nADuPbuaUD/p2ezMH+1admwhosVfBcxb2SCJVaIlmAhVoiWYIkVoiVagiVWiJZgiZVYIVqCJVaIlmgJllghWoIlViBagiVWiJZoCZZYIVqCJVYgWoIlViBaggUIlnc0sPELlmghVmIlWKKFWAmWaIFYCZZoIVYIlmghVoIlWiBWgiVaiJVgIVqIlWCJFoiVYIkWYiVYiBZiJViihViJ1XbNEWyL1mMQRYvfvIGJlQ1rmE0LzIoNyyBiDrBhAYIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgDc+Nn1D/tdH8YupwgZy5qG4ykKIlVmZDsDjshSlazqQqH7p793Q2CBaAYAGCBSBYAIIFCBaAYAEIFiBYAIIFIFiAYAEIFoBgAYIFIFgAggUIFoBgAQgWIFgAggUgWIBgAQgWwENzBKxZPub9CJ7WjA0LsGFRV+9N5+jNDhsWgGABggUgWACCxW56fgjuA3cEiz9Z/nWwR0iWP8P/YCFYDBstsUKwiIiWWCFYRERLrBAsIqIlVggWEdESKwSLiGiJFYJFRLTECsEiIlpihWARES2xQrCIiJZYIVhEREusECwioiVWCBYx0RIrBIuoaIkVr+YhFHTZtMCGBQgWgGABCBYgWACCBSBYgGABCBaAYAGCBSBYAIIFCBbj2uOR8s6AEbhexgsWYri3SKhKczcXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA2n+e0UMDzh3yTAAAAAElFTkSuQmCC",controls_right_panel:"data:image/png;base64,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"};var p8_buttons_hash=-1;function p8_update_button_icons(){var e=24,t=12,A=44,n=!1;if(p8_is_running){"undefined"!=typeof pico8_player_button_w&&(n=!0,e=Math.floor(pico8_player_button_w),t=Math.floor(3*e/4)-4,Math.floor(e/4),A=Math.floor(2*e/3));var o=document.fullscreenElement||document.mozFullScreenElement||document.webkitIsFullScreen||document.msFullscreenElement,a=0;if(a=pico8_state.sound_volume,pico8_state.is_paused&&(a+=256),p8_touch_detected&&(a+=512),o&&(a+=1024),a+=.001*t,p8_buttons_hash!=(a+=1001.3*A)){for(p8_buttons_hash=a,els=p8_document().getElementsByClassName("p8_menu_button"),i=0;i<els.length;i++){el=els[i],index=el.id,n&&(el.style.marginBottom=t,el.style.paddingBottom=t,el.style.padding=0,el.style.left=A),"p8b_sound"==index&&(index+=0==pico8_state.sound_volume?"0":"1"),"p8b_pause"==index&&(index+=0<pico8_state.is_paused?"1":"0"),new_str="<img width="+e+" height="+e+' style="display:table; pointer-events:none;" src="'+p8_gfx_dat[index]+'">',el.innerHTML!=new_str&&(el.innerHTML=new_str);var l=p8_is_running;p8_touch_detected||"p8_menu_buttons_touch"!=el.parentElement.id||(l=!1),p8_touch_detected&&"p8_menu_buttons"==el.parentElement.id&&(l=!1),o&&(l=!1),el.style.display=l?"":"none"}requestAnimationFrame(p8_update_button_icons)}else requestAnimationFrame(p8_update_button_icons)}else requestAnimationFrame(p8_update_button_icons)}function abs(e){return 0>e?-e:e}function pico8_buttons_event(e,t){if(p8_is_running&&document.getElementById("touch_controls_gfx")){2==t&&void 0!==pico8_mouse&&(pico8_mouse[2]=0);var A=0;if(e.touches&&(A=e.touches.length),0==A)void 0!==pico8_mouse&&(pico8_mouse[2]=0);else{let A=e.touches[0];var n=A.clientX,o=A.clientY;window.innerWidth,window.innerHeight;let i=p8_document().getElementById("canvas");if(p8_touch_detected&&void 0!==pico8_mouse&&i){var a=i.getBoundingClientRect();if(n>=a.left&&n<a.right&&o>=a.top&&o<a.bottom)return void(pico8_mouse=[Math.floor(128*(n-a.left)/(a.right-a.left)),Math.floor(128*(o-a.top)/(a.bottom-a.top)),2>t?1:0]);pico8_mouse[2]=0}}"none"==document.getElementById("touch_controls_gfx").style.display?pico8_buttons_event_virtual_keyboard(e,t):pico8_buttons_event_virtual_dpad(e,t)}}function pico8_buttons_event_virtual_keyboard(e,t){if(p8_is_running&&0==t){var A=0;e.touches&&(A=e.touches.length);for(var n=0;n<A;n++)if(e.touches[n]){var o=e.touches[n],a=o.clientX,i=o.clientY,l=window.innerWidth,d=window.innerHeight,s=Math.min(l,d)/12;40<s&&(s=40);var r=12*s*132/200;if(i<d-9*s);else{e.preventDefault();var u=Math.floor(6*(i-(d-r))/r);3==u&&(a-=12*s/10*3/20),4==u&&(a-=12*s/10*6/20);var c=Math.floor(10*a/(12*s));if(0<=c&&10>c&&0<=u&&6>u){let e=[["X{[(*-=_+X","1234567890","qwertyuiop","asdfghjklX","zxcvbnm,.X","XXXX   <>/"],["XXXXX[]`~X",'!"#$%^&@()',"QWERTYUIOP","ASDFGHJKLX","ZXCVBNM;:X","XXXX   ?'\\"]][p8_keyboard_state][u].charCodeAt(c);(3==u||4==u)&&9==c&&(e=13),0==u&&9==c&&(e=8),0==u&&0==c&&(e=27),5==u&&0<=c&&4>c&&(e=-1),codo_key_buffer.push(e),0==p8_keyboard_state&&0==u&&1<=c&&3>=c&&(1==c&&codo_key_buffer.push(125),2==c&&codo_key_buffer.push(93),3==c&&codo_key_buffer.push(41)),5==u&&0==c&&(p8_keyboard_state=p8_keyboard_state?0:1,el=document.getElementById("controls_keyboard_panel"),el&&el.setAttribute("src",p8_keyboard_state?"/gfx/controls_keyboard2.png":"/gfx/controls_keyboard.png")),p8_give_focus()}}}}}function pico8_buttons_event_virtual_dpad(e){if(p8_is_running){pico8_buttons[0]=0;var t=0;e.touches&&(t=e.touches.length);for(var A=0;A<t;A++)if(e.touches[A]){var n=e.touches[A],o=n.clientX,a=n.clientY,i=window.innerWidth,l=window.innerHeight,d=Math.min(i,l)/12;if(40<d&&(d=40),b=0,a<l-8*d);else if(e.preventDefault(),a<l-6*d&&a>l-8*d)o>i-3*d&&(b|=64),o<3*d&&(codo_key_buffer.push(27),p8_give_focus());else if(o<i/2&&o<6*d){mask=15,deadzone=d/3;var s=o-(0+3*d),r=a-(l-3*d);abs(s)>.6*abs(r)&&(s<-deadzone&&(b|=1),s>deadzone&&(b|=2)),abs(r)>.6*abs(s)&&(r<-deadzone&&(b|=4),r>deadzone&&(b|=8))}else o>i-6*d&&(mask=48,l-a>.8*(i-o)&&(b|=16),i-o>.8*(l-a)&&(b|=32));pico8_buttons[0]|=b}}}var p8_update_layout_hash=-1,last_windowed_container_height=512;function p8_update_layout(){var e=p8_document().getElementById("canvas"),t=p8_document().getElementById("p8_playarea"),A=p8_document().getElementById("p8_container"),n=p8_document().getElementById("p8_frame"),o=512,a=0,i=0,l=p8_aspect;if(!(e&&t&&A&&n))return p8_update_layout_hash=-1,void requestAnimationFrame(p8_update_layout);var d=document.fullscreenElement||document.mozFullScreenElement||document.webkitIsFullScreen||document.msFullscreenElement,s=n.offsetWidth,r=n.offsetHeight;if(d?(s=window.innerWidth,r=window.innerHeight):(s=Math.min(s,window.innerWidth),r=Math.min(r,window.innerHeight)),o=Math.min(s,r),p8_touch_detected&&p8_is_running){var u=Math.max(window.innerWidth,window.innerHeight);o=Math.min(o,2*u/3)}1==l&&512<=s&&512<=r&&(o=-128&o+1),!d&&n&&(o=Math.min(o,last_windowed_container_height)),d&&(i=(s-o*l)/2,a=p8_touch_detected?window.innerWidth<window.innerHeight?Math.min(40,r-o):(r-o)/4:(r-o)/2),1<p8_aspect&&(i-=72);var c=o+1000.3*a+.001*i+333.33*s+772.15134*r;if(d&&(c+=.1237),d||p8_touch_detected||p8_update_layout_hash!=c){if(p8_update_layout_hash=c,!d&&n&&(last_windowed_container_height=n.parentNode.parentNode.offsetHeight),t.style.marginTop=p8_touch_detected&&p8_is_running&&document.body.clientWidth<document.body.clientHeight?32:p8_touch_detected&&p8_is_running?(document.body.clientHeight-o)/4:"",e.style.width=o*l,e.style.height=o,e.style.marginLeft=i,e.style.marginTop=a,A.style.width=o*l,A.style.height=o,p8_touch_detected&&p8_is_running){e.style.pointerEvents="none",A.style.marginTop="0px";var p=window.innerWidth,_=window.innerHeight,g=Math.min(p,_)/12;40<g&&(g=40),el=document.getElementById("controls_right_panel"),el.style.left=p-6*g,el.style.top=_-7*g,el.style.width=6*g,el.style.height=7*g,el.getAttribute("src")!=p8_gfx_dat.controls_right_panel&&el.setAttribute("src",p8_gfx_dat.controls_right_panel),el=document.getElementById("controls_left_panel"),el.style.left=0,el.style.top=_-6*g,el.style.width=6*g,el.style.height=6*g,el.getAttribute("src")!=p8_gfx_dat.controls_left_panel&&el.setAttribute("src",p8_gfx_dat.controls_left_panel),el=document.getElementById("controls_keyboard_panel"),el.style.left=0,el.style.top=_-12*g*.66,el.style.width=12*g,el.style.height=12*g*.66,""==el.getAttribute("src")&&el.setAttribute("src","/gfx/controls_keyboard.png"),n.scrollIntoView(!0),0==pico8_state.show_dpad&&p<_?(document.getElementById("touch_controls_gfx").style.display="none",document.getElementById("touch_keyboard_gfx").style.display="table"):(document.getElementById("touch_controls_gfx").style.display="table",document.getElementById("touch_keyboard_gfx").style.display="none")}else document.getElementById("touch_controls_gfx").style.display="none",document.getElementById("touch_keyboard_gfx").style.display="none";p8_is_running||(t.style.display="none",A.style.display="flex",A.style.marginTop="auto",el=p8_document().getElementById("p8_start_button"),el&&(el.style.display="flex")),requestAnimationFrame(p8_update_layout)}else requestAnimationFrame(p8_update_layout)}var p8_touch_detected=!1;function p8_create_audio_context(){if(pico8_audio_context)try{pico8_audio_context.resume()}catch(e){console.log("** pico8_audio_context.resume() failed")}else{var e=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;if(e&&(pico8_audio_context=new e))try{var t=pico8_audio_context.createBufferSource();t.buffer=pico8_audio_context.createBuffer(1,1,22050),t.connect(pico8_audio_context.destination),t.start(1,.25)}catch(e){console.log("** dummy_source_sfx.start(1, 0.25) failed")}}}function p8_close_cart(){for(p8_is_running=!1,p8_touch_detected=!1,Module.pico8SetPaused(1),el=document.getElementById("p8_frame_0"),el&&(el.style.display="none"),el=document.getElementById("body_0"),el&&(el.style.display=""),els=document.getElementsByClassName("dormant_player"),i=0;i<els.length;i++)els[i].style.display=""}addEventListener("touchstart",function(){p8_touch_detected=!0,codo_textarea&&"none"!=codo_textarea.style.display&&(codo_textarea.style.display="none")},{passive:!0});var p8_dropped_cart=null,p8_dropped_cart_name="";function p8_drop_file(e){console.log("@@ dropping file..."),e.stopPropagation(),e.preventDefault(),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0]?(reader=new FileReader,reader.onload=function(){p8_dropped_cart_name=e.dataTransfer.files[0].name,p8_dropped_cart=reader.result,e.stopPropagation(),e.preventDefault()},reader.readAsDataURL(e.dataTransfer.files[0]),codo_command=9):(txt=e.dataTransfer.getData("Text"),txt&&(p8_dropped_cart_name="untitled.p8.png",p8_dropped_cart=txt,codo_command=9))}function p8_run_cart(t,A,n){if(console.log("p8_run_cart "+A+" "+n),p8_current_playing_lid=A,codo_textarea=document.getElementById("codo_textarea_"+A),"undefined"!=typeof p8_run_cart_onrun&&p8_run_cart_onrun(A),p8_is_running)0!=A&&(_cartname=[A+""],codo_command=6);else{for(p8_is_running=!0,p8_create_audio_context(),els=document.getElementsByClassName("p8_controller_area"),i=0;i<els.length;i++)els[i].style.display="";addEventListener("touchstart",function(e){pico8_buttons_event(e,0)},{passive:!1}),addEventListener("touchmove",function(e){pico8_buttons_event(e,1)},{passive:!1}),addEventListener("touchend",function(e){pico8_buttons_event(e,2)},{passive:!1}),e=document.createElement("script"),p8_script=e,e.onload=function(){function e(e){e.stopPropagation(),e.preventDefault()}el=document.getElementById("p8_playarea"),el&&(el.style.display="table"),"undefined"!=typeof last_pico8_player_layout_hash&&(last_pico8_player_layout_hash=-1),void 0!==p8_update_layout_hash&&(p8_update_layout_hash=-77),void 0!==p8_buttons_hash&&(p8_buttons_hash=-1),0!=A&&(_cartname=[A+""],codo_command=6);var t=p8_document().getElementById("canvas");t.addEventListener("dragenter",e,!1),t.addEventListener("dragover",e,!1),t.addEventListener("dragleave",e,!1),t.addEventListener("drop",e,!1),t.addEventListener("drop",p8_drop_file,!1)},e.type="application/javascript",e.src=t,e.id="e_script",document.body.appendChild(e),el=document.getElementById("p8_start_button"),el&&(el.style.display="none"),p8_touch_detected&&(window.location.hash="#playing",window.onhashchange=function(){0>window.location.hash.search("playing")&&p8_close_cart()})}}function p8_update_gamepads(){var e=navigator.getGamepads()||navigator.webkitGetGamepads();if(e){pico8_gamepads.count=e.length;for(var t,A=0;A<e.length&&A<8;A++)if((t=e[A])&&t.axes&&t.buttons)for(pico8_buttons[A]=0,t.axes[0]&&t.axes[0]<-.3&&(pico8_buttons[A]|=1),t.axes[0]&&t.axes[0]>.3&&(pico8_buttons[A]|=2),t.axes[1]&&t.axes[1]<-.3&&(pico8_buttons[A]|=4),t.axes[1]&&t.axes[1]>.3&&(pico8_buttons[A]|=8),j=0;j<t.buttons.length;j++)(0<t.buttons[j].value||t.buttons[j].pressed)&&(4>j?pico8_buttons[A]|=16<<(1&(j+1)/2):pico8_buttons[0]|=64);requestAnimationFrame(p8_update_gamepads)}}function p8_give_focus(){el=void 0===codo_textarea?document.getElementById("codo_textarea"):codo_textarea,el&&(el.focus(),el.select())}function p8_request_fullscreen(){if(document.fullscreenElement||document.mozFullScreenElement||document.webkitIsFullScreen||document.msFullscreenElement)document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();else{var e=document.getElementById("p8_playarea");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}}requestAnimationFrame(p8_update_gamepads),document.addEventListener("keydown",function(e){e=e||window.event,!p8_is_running||1==pico8_state.has_focus&&0>[17,88,67,86].indexOf(e.keyCode)&&e.preventDefault&&e.preventDefault()},{passive:!1});var p8_aspect=1;function activate_p8_player(e,t,A,n,o){var a=document.getElementById("p8_frame_0"),l=document.getElementById(n),d=document.getElementById(o);if(p8_aspect=1,0<=e.indexOf("vox")&&(p8_aspect=820/512),a){for(a.parentNode.removeChild(a),l.appendChild(a),a.style="display:table; width:100%;height:100%; max-width:100vw;max-height:100vh;  min-width:256px;min-height:256px;margin:0px;background-color:#111",d.style.display="none",p8_touch_detected&&(el=document.getElementById("body_0"),el&&(el.style.display="none"),el.parentNode.appendChild(document.getElementById("p8_frame_0"))),p8_run_cart(e,t,A),embedded=window.parent&&window.parent!=window?1:0,microAjax("/bbs/on_play.php?id="+t+"&embedded="+embedded+"&cab=0",function(e){var A=document.getElementById("more_carts_"+t);A&&(A.innerHTML=e)}),els=document.getElementsByClassName("dormant_player"),i=0;i<els.length;i++)els[i]!=d&&(els[i].style.display="");setTimeout(function(){p8_update_layout_hash=-55},1e3)}else console.log("@@ could not find p8_frame_0")}function toggle_cart_menu(e){var t=$(e);if(t){t.style.display="none"==t.style.display?"table":"none";var A=t.childNodes[1];left_target=0,A.style.left=left_target+540+"px",poll_function(200,10,function(e){e=1-(1-e)*(1-e),A.style.left=left_target+540*(1-e)+"px"}),codo_running="none"==t.style.display,codo_command=5,codo_command_p=!codo_running}}
p8_update_layout(); p8_update_button_icons();
	var canvas = document.getElementById("canvas");
	Module = {};
	Module.canvas = canvas;
Module.arguments = ["/bbs/cposts/pi/picotetris-5.p8.png"];
inp.type = "file";
function readFile() {
	if (this.files && this.files[0]) {
		var FR = new FileReader();
		FR.addEventListener("load", function(e) {
			if (p8_is_running) p8_close_cart();
				setTimeout(function(){INJECTURL = e.target.result;
				activate_p8_player('https://www.lexaloffle.com/play/pico8_0200i.js', 'test', 'test', 'cart', 'fake_dormant');
				var scr = document.createElement("script");
				scr.src = "data:@file/javascript;base64,TW9kdWxlWyJyZWFkQXN5bmMiXSA9IGZ1bmN0aW9uIHJlYWRBc3luYyh1cmwsIG9ubG9hZCwgb25lcnJvcikgew0KICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7DQogIHhoci5vcGVuKCJHRVQiLCBJTkpFQ1RVUkwsIHRydWUpOw0KICB4aHIucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIjsNCiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIHhocl9vbmxvYWQoKSB7DQogICBpZiAoeGhyLnN0YXR1cyA9PSAyMDAgfHwgeGhyLnN0YXR1cyA9PSAwICYmIHhoci5yZXNwb25zZSkgew0KICAgIG9ubG9hZCh4aHIucmVzcG9uc2UpOw0KICAgIHJldHVybjsNCiAgIH0NCiAgIHZhciBkYXRhID0gdHJ5UGFyc2VBc0RhdGFVUkkoSU5KRUNUVVJMKTsNCiAgIGlmIChkYXRhKSB7DQogICAgb25sb2FkKGRhdGEuYnVmZmVyKTsNCiAgICByZXR1cm47DQogICB9DQogICBvbmVycm9yKCk7DQogIH07DQogIHhoci5vbmVycm9yID0gb25lcnJvcjsNCiAgeGhyLnNlbmQobnVsbCk7DQogfTs=";
				document.body.appendChild(scr);
			}, 1000);
		});
		FR.readAsDataURL( this.files[0] );
	}
}
inp.addEventListener("change", readFile);
inp.click();

var intv = setInterval(function(){
	try {
		Calc.controller.grapher.graphImages[Object.keys(Calc.controller.grapher.graphImages)[0]].imageObj.src = document.getElementById("canvas").toDataURL();
		Calc.controller.grapher.__redrawRequested = true;
	} catch(e) {}
}, false);