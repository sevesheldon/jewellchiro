!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition()
else if(typeof define=='function'&&define.amd)define(name,definition)
else this[name]=definition()}('bowser',function(){var t=true
function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[1])||'';}
function getSecondMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[2])||'';}
var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result
if(/opera|opr|opios/i.test(ua)){result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}}
else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}}
else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}
else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}}
else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(windowsphone){result={name:'Windows Phone',windowsphone:t}
if(edgeVersion){result.msedge=t
result.version=edgeVersion}
else{result.msie=t
result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}
else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion}}
else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier}}
else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}
else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}
else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}
else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}
else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}
else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)}}
else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}
else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};if(/touchpad\//i.test(ua)){result.touchpad=t;}}
else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}
else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}
else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier}}
else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier}}
else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}
else if(android){result={name:'Android',version:versionIdentifier}}
else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t}
if(versionIdentifier){result.version=versionIdentifier}}
else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'}
if(versionIdentifier){result.version=versionIdentifier}}
else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier}}
else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink"
result.blink=t}else{result.name=result.name||"Webkit"
result.webkit=t}
if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko"
result.gecko=t
result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}
if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t
result.ios=t}else if(mac){result.mac=t}else if(xbox){result.xbox=t}else if(windows){result.windows=t}else if(linux){result.linux=t}
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}
if(osVersion){result.osversion=osVersion;}
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||(android&&(osMajorVersion==3||(osMajorVersion>=4&&!mobile)))||result.silk){result.tablet=t}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t}
if(result.msedge||(result.msie&&result.version>=10)||(result.yandexbrowser&&result.version>=15)||(result.vivaldi&&result.version>=1.0)||(result.chrome&&result.version>=20)||(result.firefox&&result.version>=20.0)||(result.safari&&result.version>=6)||(result.opera&&result.version>=10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]>=6)||(result.blackberry&&result.version>=10.1)||(result.chromium&&result.version>=20)){result.a=t;}
else if((result.msie&&result.version<10)||(result.chrome&&result.version<20)||(result.firefox&&result.version<20.0)||(result.safari&&result.version<6)||(result.opera&&result.version<10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]<6)||(result.chromium&&result.version<20)){result.c=t}else result.x=t
return result}
var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent:'')
bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}
return false;}
function getVersionPrecision(version){return version.split(".").length;}
function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}
for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}
return result;}
function compareVersions(versions){var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);version=version+new Array(delta+1).join(".0");return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});while(--precision>=0){if(chunks[0][precision]>chunks[1][precision]){return 1;}
else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){return 0;}}
else{return-1;}}}
function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;if(typeof strictMode==='string'){ua=strictMode;strictMode=void(0);}
if(strictMode===void(0)){strictMode=false;}
if(ua){_bowser=detect(ua);}
var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){return compareVersions([version,minVersions[browser]])<0;}}}
return strictMode;}
function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}
bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;bowser._detect=detect;return bowser});(function($){UABBTrigger={triggerHook:function(hook,args)
{$('body').trigger('uabb-trigger.'+hook,args);},addHook:function(hook,callback)
{$('body').on('uabb-trigger.'+hook,callback);},removeHook:function(hook,callback)
{$('body').off('uabb-trigger.'+hook,callback);},};})(jQuery);jQuery(document).ready(function($){if(typeof bowser!=='undefined'&&bowser!==null){var uabb_browser=bowser.name,uabb_browser_v=bowser.version,uabb_browser_class=uabb_browser.replace(/\s+/g,'-').toLowerCase(),uabb_browser_v_class=uabb_browser_class+parseInt(uabb_browser_v);$('html').addClass(uabb_browser_class).addClass(uabb_browser_v_class);}
$('.uabb-row-separator').parents('html').css('overflow-x','hidden');});var wpAjaxUrl='https://jewellchiropractic.com/wp-admin/admin-ajax.php';var flBuilderUrl='https://jewellchiropractic.com/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'https://jewellchiropractic.com/wp-content/plugins/bb-plugin/',wpAjaxUrl:'https://jewellchiropractic.com/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:992},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if('undefined'!=typeof youtube&&!FLBuilderLayout._isMobile()){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo&&!FLBuilderLayout._isMobile()){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('t')?playerWrap.data('t'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,vidPlayed=false,didUnmute=false,stateCount=0,player;if(videoId){FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(stateCount<4){stateCount++;}
if(stateCount>1&&-1===event.data&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{controls:0,showinfo:0,rel:0,start:startTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth();if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if($.browser.safari||$.browser.chrome){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'&&!FLBuilderLayout._isMobile()){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay'));if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}
else{module.addClass('fl-animated');}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){if(link.hasClass('fl-scroll-link')||element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module')){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);jQuery(function($){$(function(){$('.fl-node-5ae235d33e4af .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){FLBuilderMenu=function(settings){this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .fl-menu';this.type=settings.type;this.mobileToggle=settings.mobile;this.mobileBelowRow=settings.mobileBelowRow;this.breakPoints=settings.breakPoints;this.mobileBreakpoint=settings.mobileBreakpoint;this.currentBrowserWidth=window.innerWidth;this._initMenu();$(window).on('resize',$.proxy(function(e){var width=window.innerWidth;if(width!=this.currentBrowserWidth){this.currentBrowserWidth=width;this._initMenu();this._clickOrHover();}},this));};FLBuilderMenu.prototype={nodeClass:'',wrapperClass:'',type:'',breakPoints:{},$submenus:null,_isMobile:function(){return this.currentBrowserWidth<=this.breakPoints.small?true:false;},_isMedium:function(){return this.currentBrowserWidth<=this.breakPoints.medium?true:false;},_isMenuToggle:function(){if('always'==this.mobileBreakpoint||(this._isMobile()&&'mobile'==this.mobileBreakpoint)||(this._isMedium()&&'medium-mobile'==this.mobileBreakpoint)){return true;}
return false;},_initMenu:function(){this._menuOnFocus();this._submenuOnClick();if($(this.nodeClass).length&&this.type=='horizontal'){this._initMegaMenus();}
if(this._isMenuToggle()||this.type=='accordion'){$(this.wrapperClass).off('mouseenter mouseleave');this._menuOnClick();this._clickOrHover();}else{$(this.wrapperClass).off('click');this._submenuOnRight();this._submenuRowZindexFix();}
if(this.mobileToggle!='expanded'){this._toggleForMobile();}},_menuOnFocus:function(){$(this.nodeClass).off('focus').on('focus','a',$.proxy(function(e){var $menuItem=$(e.target).parents('.menu-item').first(),$parents=$(e.target).parentsUntil(this.wrapperClass);$('.fl-menu .focus').removeClass('focus');$menuItem.addClass('focus');$parents.addClass('focus');},this)).on('focusout','a',$.proxy(function(e){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus');},this));},_menuOnClick:function(){$(this.wrapperClass).off().on('click','.fl-has-submenu-container',$.proxy(function(e){var $link=$(e.target).parents('.fl-has-submenu').first(),$subMenu=$link.children('.sub-menu').first(),$href=$link.children('.fl-has-submenu-container').first().find('> a').attr('href'),$subMenuParents=$(e.target).parents('.sub-menu'),$activeParent=$(e.target).closest('.fl-has-submenu.fl-active');if(!$subMenu.is(':visible')||$(e.target).hasClass('fl-menu-toggle')||($subMenu.is(':visible')&&(typeof $href==='undefined'||$href=='#'))){e.preventDefault();}
else{window.location.href=$href;return;}
if($(this.wrapperClass).hasClass('fl-menu-accordion-collapse')){if(!$link.parents('.menu-item').hasClass('fl-active')){$('.menu .fl-active',this.wrapperClass).not($link).removeClass('fl-active');}
else if($link.parents('.menu-item').hasClass('fl-active')&&$link.parent('.sub-menu').length){$('.menu .fl-active',this.wrapperClass).not($link).not($activeParent).removeClass('fl-active');}
$('.sub-menu',this.wrapperClass).not($subMenu).not($subMenuParents).slideUp('normal');}
$subMenu.slideToggle();$link.toggleClass('fl-active');},this));},_submenuOnClick:function(){$(this.wrapperClass+' .sub-menu').off().on('click','a',$.proxy(function(e){if($(e.target).parent().hasClass('focus')){$(e.target).parentsUntil(this.wrapperClass).removeClass('focus');}},this));},_clickOrHover:function(){this.$submenus=this.$submenus||$(this.wrapperClass).find('.sub-menu');var $wrapper=$(this.wrapperClass),$menu=$wrapper.find('.menu');$li=$wrapper.find('.fl-has-submenu');if(this._isMenuToggle()){$li.each(function(el){if(!$(this).hasClass('fl-active')){$(this).find('.sub-menu').fadeOut();}});}else{$li.each(function(el){if(!$(this).hasClass('fl-active')){$(this).find('.sub-menu').css({'display':'','opacity':''});}});}},_submenuOnRight:function(){$(this.wrapperClass).on('mouseenter','.fl-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
var $link=$(e.currentTarget),$parent=$link.parent(),$subMenu=$link.find('.sub-menu'),subMenuWidth=$subMenu.width(),subMenuPos=0,winWidth=$(window).width();if($link.closest('.fl-menu-submenu-right').length!==0){$link.addClass('fl-menu-submenu-right');}else if($('body').hasClass('rtl')){subMenuPos=$parent.is('.sub-menu')?$parent.offset().left-subMenuWidth:$link.offset().left-$link.width()-subMenuWidth;if(subMenuPos<=0){$link.addClass('fl-menu-submenu-right');}}else{subMenuPos=$parent.is('.sub-menu')?$parent.offset().left+$parent.width()+subMenuWidth:$link.offset().left+$link.width()+subMenuWidth;if(subMenuPos>winWidth){$link.addClass('fl-menu-submenu-right');}}},this)).on('mouseleave','.fl-has-submenu',$.proxy(function(e){$(e.currentTarget).removeClass('fl-menu-submenu-right');},this));},_submenuRowZindexFix:function(e){$(this.wrapperClass).on('mouseenter','ul.menu > .fl-has-submenu',$.proxy(function(e){if($(e.currentTarget).find('.sub-menu').length===0){return;}
$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','10');},this)).on('mouseleave','ul.menu > .fl-has-submenu',$.proxy(function(e){$(this.nodeClass).closest('.fl-row').find('.fl-row-content').css('z-index','');},this));},_toggleForMobile:function(){var $wrapper=null,$menu=null;if(this._isMenuToggle()){if(this._isMobileBelowRowEnabled()){this._placeMobileMenuBelowRow();$wrapper=$(this.wrapperClass);$menu=$(this.nodeClass+'-clone');$menu.find('ul.menu').show();}
else{$wrapper=$(this.wrapperClass);$menu=$wrapper.children('.menu');}
if(!$wrapper.find('.fl-menu-mobile-toggle').hasClass('fl-active')){$menu.css({display:'none'});}
$wrapper.on('click','.fl-menu-mobile-toggle',function(e){$(this).toggleClass('fl-active');$menu.slideToggle();});$menu.on('click','.menu-item > a[href*="#"]:not([href="#"])',function(e){var $href=$(this).attr('href'),$targetID=$href.split('#')[1];if($('body').find('#'+$targetID).length>0){$(this).toggleClass('fl-active');$menu.slideToggle();}});}
else{if(this._isMobileBelowRowEnabled()){this._removeMenuFromBelowRow();}
$wrapper=$(this.wrapperClass),$menu=$wrapper.children('.menu');$wrapper.find('.fl-menu-mobile-toggle').removeClass('fl-active');$menu.css({display:''});}},_initMegaMenus:function(){var module=$(this.nodeClass),rowContent=module.closest('.fl-row-content'),rowWidth=rowContent.width(),megas=module.find('.mega-menu'),disabled=module.find('.mega-menu-disabled'),isToggle=this._isMenuToggle();if(isToggle){megas.removeClass('mega-menu').addClass('mega-menu-disabled');module.find('li.mega-menu-disabled > ul.sub-menu').css('width','');rowContent.css('position','');}else{disabled.removeClass('mega-menu-disabled').addClass('mega-menu');module.find('li.mega-menu > ul.sub-menu').css('width',rowWidth+'px');rowContent.css('position','relative');}},_isMobileBelowRowEnabled:function(){return this.mobileBelowRow&&$(this.nodeClass).closest('.fl-col').length;},_placeMobileMenuBelowRow:function(){if($(this.nodeClass+'-clone').length){return;}
var module=$(this.nodeClass),clone=module.clone(),col=module.closest('.fl-col');module.find('ul.menu').remove();clone.addClass((this.nodeClass+'-clone').replace('.',''));clone.find('.fl-menu-mobile-toggle').remove();col.after(clone);this._menuOnClick();},_removeMenuFromBelowRow:function(){if(!$(this.nodeClass+'-clone').length){return;}
var module=$(this.nodeClass),clone=$(this.nodeClass+'-clone'),menu=clone.find('ul.menu');module.find('.fl-menu-mobile-toggle').after(menu);clone.remove();}};})(jQuery);(function($){$(function(){new FLBuilderMenu({id:'5ae23496b3b8e',type:'horizontal',mobile:'hamburger-label',mobileBelowRow:false,breakPoints:{medium:992,small:768},mobileBreakpoint:'mobile'});});})(jQuery);(function($){FLThemeBuilderHeaderLayout={win:null,body:null,header:null,overlay:false,hasAdminBar:false,init:function()
{var editing=$('html.fl-builder-edit').length,header=$('.fl-builder-content[data-type=header]');if(!editing&&header.length){header.imagesLoaded($.proxy(function(){this.win=$(window);this.body=$('body');this.header=header.eq(0);this.overlay=!!Number(header.attr('data-overlay'));this.hasAdminBar=!!$('body.admin-bar').length;if(Number(header.attr('data-sticky'))){this.header.data('original-top',this.header.offset().top);this.win.on('resize',$.throttle(500,$.proxy(this._initSticky,this)));this._initSticky();if(Number(header.attr('data-shrink'))){this.header.data('original-height',this.header.outerHeight());this.win.on('resize',$.throttle(500,$.proxy(this._initShrink,this)));this._initShrink();}}},this));}},_initSticky:function()
{if(this.win.width()>=FLBuilderLayoutConfig.breakpoints.medium){this.win.on('scroll.fl-theme-builder-header-sticky',$.proxy(this._doSticky,this));this._doSticky();}else{this.win.off('scroll.fl-theme-builder-header-sticky');this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}},_doSticky:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),hasStickyClass=this.header.hasClass('fl-theme-builder-header-sticky'),hasScrolledClass=this.header.hasClass('fl-theme-builder-header-scrolled');if(this.hasAdminBar){winTop+=32;}
if(winTop>=headerTop){if(!hasStickyClass){this.header.addClass('fl-theme-builder-header-sticky');if(!this.overlay){this.body.css('padding-top',this.header.outerHeight()+'px');}}}
else if(hasStickyClass){this.header.removeClass('fl-theme-builder-header-sticky');this.body.css('padding-top','0');}
if(winTop>headerTop){if(!hasScrolledClass){this.header.addClass('fl-theme-builder-header-scrolled');}}else if(hasScrolledClass){this.header.removeClass('fl-theme-builder-header-scrolled');}},_initShrink:function()
{if(this.win.width()>=FLBuilderLayoutConfig.breakpoints.medium){this.win.on('scroll.fl-theme-builder-header-shrink',$.proxy(this._doShrink,this));this._setImageMaxHeight();}else{this.body.css('padding-top','0');this.win.off('scroll.fl-theme-builder-header-shrink');this._removeShrink();this._removeImageMaxHeight();}},_doShrink:function()
{var winTop=this.win.scrollTop(),headerTop=this.header.data('original-top'),headerHeight=this.header.data('original-height'),hasClass=this.header.hasClass('fl-theme-builder-header-shrink');if(this.hasAdminBar){winTop+=32;}
if(winTop>headerTop+headerHeight){if(!hasClass){this.header.addClass('fl-theme-builder-header-shrink');this.header.find('.fl-row-content-wrap').each(function(){var row=$(this);if(parseInt(row.css('padding-bottom'))>5){row.addClass('fl-theme-builder-header-shrink-row-bottom');}
if(parseInt(row.css('padding-top'))>5){row.addClass('fl-theme-builder-header-shrink-row-top');}});this.header.find('.fl-module-content').each(function(){var module=$(this);if(parseInt(module.css('margin-bottom'))>5){module.addClass('fl-theme-builder-header-shrink-module-bottom');}
if(parseInt(module.css('margin-top'))>5){module.addClass('fl-theme-builder-header-shrink-module-top');}});}}else if(hasClass){this._removeShrink();}},_removeShrink:function()
{var rows=this.header.find('.fl-row-content-wrap'),modules=this.header.find('.fl-module-content');rows.removeClass('fl-theme-builder-header-shrink-row-bottom');rows.removeClass('fl-theme-builder-header-shrink-row-top');modules.removeClass('fl-theme-builder-header-shrink-module-bottom');modules.removeClass('fl-theme-builder-header-shrink-module-top');this.header.removeClass('fl-theme-builder-header-shrink');},_setImageMaxHeight:function()
{var head=$('head'),stylesId='fl-header-styles-'+this.header.data('post-id'),styles='',images=this.header.find('.fl-module-content img');if($('#'+stylesId).length){return;}
images.each(function(i){var image=$(this),height=image.height(),node=image.closest('.fl-module').data('node'),className='fl-node-'+node+'-img-'+i;image.addClass(className);styles+='.'+className+' { max-height: '+height+'px }';});if(''!==styles){head.append('<style id="'+stylesId+'">'+styles+'</style>');}},_removeImageMaxHeight:function()
{$('#fl-header-styles-'+this.header.data('post-id')).remove();},};$(function(){FLThemeBuilderHeaderLayout.init();});})(jQuery);;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_row_gradient_type]');$(document).on('change','input[name=uabb_row_radial_advance_options], input[name=uabb_row_linear_advance_options], input[name=uabb_row_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_row_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_row_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_row_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_row_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_row_linear_direction').hide();form.find('#fl-field-uabb_row_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_row_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_row_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').show();}}}});})(jQuery);;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_col_gradient_type]');$(document).on('change',' input[name=uabb_col_radial_advance_options], input[name=uabb_col_linear_advance_options], input[name=uabb_col_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_col_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_col_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_col_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_col_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_col_linear_direction').hide();form.find('#fl-field-uabb_col_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_col_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_col_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').show();}}}});})(jQuery);!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition()
else if(typeof define=='function'&&define.amd)define(name,definition)
else this[name]=definition()}('bowser',function(){var t=true
function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[1])||'';}
function getSecondMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[2])||'';}
var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result
if(/opera|opr|opios/i.test(ua)){result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}}
else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}}
else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}
else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}}
else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(windowsphone){result={name:'Windows Phone',windowsphone:t}
if(edgeVersion){result.msedge=t
result.version=edgeVersion}
else{result.msie=t
result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}
else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion}}
else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier}}
else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}
else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}
else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}
else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}
else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}
else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)}}
else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}
else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};if(/touchpad\//i.test(ua)){result.touchpad=t;}}
else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}
else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}
else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier}}
else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier}}
else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}
else if(android){result={name:'Android',version:versionIdentifier}}
else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t}
if(versionIdentifier){result.version=versionIdentifier}}
else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'}
if(versionIdentifier){result.version=versionIdentifier}}
else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier}}
else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink"
result.blink=t}else{result.name=result.name||"Webkit"
result.webkit=t}
if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko"
result.gecko=t
result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}
if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t
result.ios=t}else if(mac){result.mac=t}else if(xbox){result.xbox=t}else if(windows){result.windows=t}else if(linux){result.linux=t}
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}
if(osVersion){result.osversion=osVersion;}
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||(android&&(osMajorVersion==3||(osMajorVersion>=4&&!mobile)))||result.silk){result.tablet=t}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t}
if(result.msedge||(result.msie&&result.version>=10)||(result.yandexbrowser&&result.version>=15)||(result.vivaldi&&result.version>=1.0)||(result.chrome&&result.version>=20)||(result.firefox&&result.version>=20.0)||(result.safari&&result.version>=6)||(result.opera&&result.version>=10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]>=6)||(result.blackberry&&result.version>=10.1)||(result.chromium&&result.version>=20)){result.a=t;}
else if((result.msie&&result.version<10)||(result.chrome&&result.version<20)||(result.firefox&&result.version<20.0)||(result.safari&&result.version<6)||(result.opera&&result.version<10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]<6)||(result.chromium&&result.version<20)){result.c=t}else result.x=t
return result}
var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent:'')
bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}
return false;}
function getVersionPrecision(version){return version.split(".").length;}
function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}
for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}
return result;}
function compareVersions(versions){var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);version=version+new Array(delta+1).join(".0");return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});while(--precision>=0){if(chunks[0][precision]>chunks[1][precision]){return 1;}
else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){return 0;}}
else{return-1;}}}
function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;if(typeof strictMode==='string'){ua=strictMode;strictMode=void(0);}
if(strictMode===void(0)){strictMode=false;}
if(ua){_bowser=detect(ua);}
var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){return compareVersions([version,minVersions[browser]])<0;}}}
return strictMode;}
function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}
bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;bowser._detect=detect;return bowser});(function($){UABBTrigger={triggerHook:function(hook,args)
{$('body').trigger('uabb-trigger.'+hook,args);},addHook:function(hook,callback)
{$('body').on('uabb-trigger.'+hook,callback);},removeHook:function(hook,callback)
{$('body').off('uabb-trigger.'+hook,callback);},};})(jQuery);jQuery(document).ready(function($){if(typeof bowser!=='undefined'&&bowser!==null){var uabb_browser=bowser.name,uabb_browser_v=bowser.version,uabb_browser_class=uabb_browser.replace(/\s+/g,'-').toLowerCase(),uabb_browser_v_class=uabb_browser_class+parseInt(uabb_browser_v);$('html').addClass(uabb_browser_class).addClass(uabb_browser_v_class);}
$('.uabb-row-separator').parents('html').css('overflow-x','hidden');});(function($){$(function(){new FLBuilderMenu({id:'5ae4fa531d193',type:'expanded',mobile:'text',mobileBelowRow:false,breakPoints:{medium:992,small:768},mobileBreakpoint:'mobile'});});})(jQuery);jQuery(function($){$(function(){$('.fl-node-5ae4faaa1dfaf .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_row_gradient_type]');$(document).on('change','input[name=uabb_row_radial_advance_options], input[name=uabb_row_linear_advance_options], input[name=uabb_row_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_row_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_row_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_row_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_row_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_row_linear_direction').hide();form.find('#fl-field-uabb_row_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_row_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_row_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').show();}}}});})(jQuery);;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_col_gradient_type]');$(document).on('change',' input[name=uabb_col_radial_advance_options], input[name=uabb_col_linear_advance_options], input[name=uabb_col_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_col_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_col_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_col_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_col_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_col_linear_direction').hide();form.find('#fl-field-uabb_col_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_col_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_col_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').show();}}}});})(jQuery);!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition()
else if(typeof define=='function'&&define.amd)define(name,definition)
else this[name]=definition()}('bowser',function(){var t=true
function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[1])||'';}
function getSecondMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[2])||'';}
var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result
if(/opera|opr|opios/i.test(ua)){result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}}
else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}}
else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}
else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}}
else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(windowsphone){result={name:'Windows Phone',windowsphone:t}
if(edgeVersion){result.msedge=t
result.version=edgeVersion}
else{result.msie=t
result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}
else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion}}
else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier}}
else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}
else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}
else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}
else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}
else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}
else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)}}
else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}
else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};if(/touchpad\//i.test(ua)){result.touchpad=t;}}
else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}
else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}
else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier}}
else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier}}
else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}
else if(android){result={name:'Android',version:versionIdentifier}}
else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t}
if(versionIdentifier){result.version=versionIdentifier}}
else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'}
if(versionIdentifier){result.version=versionIdentifier}}
else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier}}
else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink"
result.blink=t}else{result.name=result.name||"Webkit"
result.webkit=t}
if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko"
result.gecko=t
result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}
if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t
result.ios=t}else if(mac){result.mac=t}else if(xbox){result.xbox=t}else if(windows){result.windows=t}else if(linux){result.linux=t}
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}
if(osVersion){result.osversion=osVersion;}
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||(android&&(osMajorVersion==3||(osMajorVersion>=4&&!mobile)))||result.silk){result.tablet=t}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t}
if(result.msedge||(result.msie&&result.version>=10)||(result.yandexbrowser&&result.version>=15)||(result.vivaldi&&result.version>=1.0)||(result.chrome&&result.version>=20)||(result.firefox&&result.version>=20.0)||(result.safari&&result.version>=6)||(result.opera&&result.version>=10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]>=6)||(result.blackberry&&result.version>=10.1)||(result.chromium&&result.version>=20)){result.a=t;}
else if((result.msie&&result.version<10)||(result.chrome&&result.version<20)||(result.firefox&&result.version<20.0)||(result.safari&&result.version<6)||(result.opera&&result.version<10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]<6)||(result.chromium&&result.version<20)){result.c=t}else result.x=t
return result}
var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent:'')
bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}
return false;}
function getVersionPrecision(version){return version.split(".").length;}
function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}
for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}
return result;}
function compareVersions(versions){var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);version=version+new Array(delta+1).join(".0");return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});while(--precision>=0){if(chunks[0][precision]>chunks[1][precision]){return 1;}
else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){return 0;}}
else{return-1;}}}
function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;if(typeof strictMode==='string'){ua=strictMode;strictMode=void(0);}
if(strictMode===void(0)){strictMode=false;}
if(ua){_bowser=detect(ua);}
var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){return compareVersions([version,minVersions[browser]])<0;}}}
return strictMode;}
function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}
bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;bowser._detect=detect;return bowser});(function($){UABBTrigger={triggerHook:function(hook,args)
{$('body').trigger('uabb-trigger.'+hook,args);},addHook:function(hook,callback)
{$('body').on('uabb-trigger.'+hook,callback);},removeHook:function(hook,callback)
{$('body').off('uabb-trigger.'+hook,callback);},};})(jQuery);jQuery(document).ready(function($){if(typeof bowser!=='undefined'&&bowser!==null){var uabb_browser=bowser.name,uabb_browser_v=bowser.version,uabb_browser_class=uabb_browser.replace(/\s+/g,'-').toLowerCase(),uabb_browser_v_class=uabb_browser_class+parseInt(uabb_browser_v);$('html').addClass(uabb_browser_class).addClass(uabb_browser_v_class);}
$('.uabb-row-separator').parents('html').css('overflow-x','hidden');});jQuery(function($){$(function(){$('.fl-node-5b2ec1babaf8f .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-5b2ec20310e62 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){window.onLoadFLReCaptcha=function(){var reCaptchaFields=$('.fl-grecaptcha'),widgetID;if(reCaptchaFields.length>0){reCaptchaFields.each(function(i){var self=$(this),attrWidget=self.attr('data-widgetid'),newID=$(this).attr('id')+'-'+i;if((typeof attrWidget!==typeof undefined&&attrWidget!==false)){return;}
else{self.attr('id',newID);widgetID=grecaptcha.render(newID,{sitekey:self.data('sitekey'),theme:self.data('theme'),size:self.data('validate'),callback:function(response){if(response!=''){self.attr('data-fl-grecaptcha-response',response);if('invisible'==self.data('validate')){self.closest('.fl-contact-form').find('a.fl-button').trigger('click');}}}});self.attr('data-widgetid',widgetID);}});}};FLBuilderContactForm=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this._init();};FLBuilderContactForm.prototype={settings:{},nodeClass:'',_init:function()
{$(this.nodeClass+' .fl-button').click($.proxy(this._submit,this));},_submit:function(e)
{var theForm=$(this.nodeClass+' .fl-contact-form'),submit=$(this.nodeClass+' .fl-button'),name=$(this.nodeClass+' .fl-name input'),email=$(this.nodeClass+' .fl-email input'),phone=$(this.nodeClass+' .fl-phone input'),subject=$(this.nodeClass+' .fl-subject input'),message=$(this.nodeClass+' .fl-message textarea'),termsCheckbox=$(this.nodeClass+' .fl-terms-checkbox input'),reCaptchaField=$(this.nodeClass+' .fl-grecaptcha'),reCaptchaValue=reCaptchaField.data('fl-grecaptcha-response'),ajaxData=null,ajaxurl=FLBuilderLayoutConfig.paths.wpAjaxUrl,email_regex=/\S+@\S+\.\S+/,isValid=true,postId=theForm.closest('.fl-builder-content').data('post-id'),layoutId=theForm.find('input[name=fl-layout-id]').val(),templateId=theForm.data('template-id'),templateNodeId=theForm.data('template-node-id'),nodeId=theForm.closest('.fl-module').data('node');e.preventDefault();if(submit.hasClass('fl-disabled')){return;}
if(name.length){if(name.val()===''){isValid=false;name.parent().addClass('fl-error');}
else if(name.parent().hasClass('fl-error')){name.parent().removeClass('fl-error');}}
if(email.length){if(email.val()===''||!email_regex.test(email.val())){isValid=false;email.parent().addClass('fl-error');}
else if(email.parent().hasClass('fl-error')){email.parent().removeClass('fl-error');}}
if(subject.length){if(subject.val()===''){isValid=false;subject.parent().addClass('fl-error');}
else if(subject.parent().hasClass('fl-error')){subject.parent().removeClass('fl-error');}}
if(phone.length){if(phone.val()===''){isValid=false;phone.parent().addClass('fl-error');}
else if(phone.parent().hasClass('fl-error')){phone.parent().removeClass('fl-error');}}
if(message.val()===''){isValid=false;message.parent().addClass('fl-error');}
else if(message.parent().hasClass('fl-error')){message.parent().removeClass('fl-error');}
if(termsCheckbox.length){if(!termsCheckbox.is(':checked')){isValid=false;termsCheckbox.closest('.fl-terms-checkbox').addClass('fl-error');}
else if(termsCheckbox.parent().hasClass('fl-error')){termsCheckbox.parent().removeClass('fl-error');}}
if(reCaptchaField.length>0&&isValid){if('undefined'===typeof reCaptchaValue||reCaptchaValue===false){if('normal'==reCaptchaField.data('validate')){reCaptchaField.parent().addClass('fl-error');}else if('invisible'==reCaptchaField.data('validate')){grecaptcha.execute(reCaptchaField.data('widgetid'));}
isValid=false;}else{reCaptchaField.parent().removeClass('fl-error');}}
if(!isValid){return false;}
else{submit.addClass('fl-disabled');ajaxData={action:'fl_builder_email',name:name.val(),subject:subject.val(),email:email.val(),phone:phone.val(),message:message.val(),terms_checked:termsCheckbox.is(':checked')?'1':'0',post_id:postId,layout_id:layoutId,template_id:templateId,template_node_id:templateNodeId,node_id:nodeId}
if(reCaptchaValue){ajaxData.recaptcha_response=reCaptchaValue;}
$.post(ajaxurl,ajaxData,$.proxy(this._submitComplete,this));}},_submitComplete:function(response)
{var urlField=$(this.nodeClass+' .fl-success-url'),noMessage=$(this.nodeClass+' .fl-success-none');if(typeof response.error!=='undefined'&&response.error===false){$(this.nodeClass+' .fl-send-error').fadeOut();if(urlField.length>0){window.location.href=urlField.val();}
else if(noMessage.length>0){noMessage.fadeIn();}
else{$(this.nodeClass+' .fl-contact-form').hide();$(this.nodeClass+' .fl-success-msg').fadeIn();}}
else{$(this.nodeClass+' .fl-button').removeClass('fl-disabled');if(typeof response.message!=='undefined'){$(this.nodeClass+' .fl-send-error').html(response.message);}
$(this.nodeClass+' .fl-send-error').fadeIn();return false;}}};})(jQuery);(function($){$(function(){new FLBuilderContactForm({id:'5b2ec20310fa6'});});})(jQuery);;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_row_gradient_type]');$(document).on('change','input[name=uabb_row_radial_advance_options], input[name=uabb_row_linear_advance_options], input[name=uabb_row_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_row_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_row_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_row_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_row_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_row_linear_direction').hide();form.find('#fl-field-uabb_row_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_row_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_row_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_row_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_row_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_row_linear_gradient_secondary_loc').show();}}}});})(jQuery);;(function($){var form=$('.fl-builder-settings'),gradient_type=form.find('input[name=uabb_col_gradient_type]');$(document).on('change',' input[name=uabb_col_radial_advance_options], input[name=uabb_col_linear_advance_options], input[name=uabb_col_gradient_type], select[name=bg_type]',function(){var form=$('.fl-builder-settings'),background_type=form.find('select[name=bg_type]').val(),linear_direction=form.find('select[name=uabb_col_uabb_direction]').val(),linear_advance_option=form.find('input[name=uabb_col_linear_advance_options]:checked').val(),radial_advance_option=form.find('input[name=uabb_col_radial_advance_options]:checked').val(),gradient_type=form.find('input[name=uabb_col_gradient_type]:checked').val();if(background_type=='uabb_gradient'){if(gradient_type=='radial'){setTimeout(function(){form.find('#fl-field-uabb_col_linear_direction').hide();form.find('#fl-field-uabb_col_linear_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').hide();},1);if(radial_advance_option=='yes'){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').show();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').show();}}
if(gradient_type=='linear'){setTimeout(function(){form.find('#fl-field-uabb_col_radial_gradient_primary_loc').hide();form.find('#fl-field-uabb_col_radial_gradient_secondary_loc').hide();},1);if(linear_direction=='custom'){form.find('#fl-field-uabb_col_linear_direction').show();}
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_col_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').show();}}}});})(jQuery);