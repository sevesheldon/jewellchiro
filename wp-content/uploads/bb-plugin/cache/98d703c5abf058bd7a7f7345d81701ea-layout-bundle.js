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
$('.uabb-row-separator').parents('html').css('overflow-x','hidden');});jQuery(function($){$(function(){$('.fl-node-5ae235d33e4af .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){FLBuilderMenu=function(settings){this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .fl-menu';this.type=settings.type;this.mobileToggle=settings.mobile;this.mobileBelowRow=settings.mobileBelowRow;this.breakPoints=settings.breakPoints;this.mobileBreakpoint=settings.mobileBreakpoint;this.currentBrowserWidth=window.innerWidth;this._initMenu();$(window).on('resize',$.proxy(function(e){var width=window.innerWidth;if(width!=this.currentBrowserWidth){this.currentBrowserWidth=width;this._initMenu();this._clickOrHover();}},this));};FLBuilderMenu.prototype={nodeClass:'',wrapperClass:'',type:'',breakPoints:{},$submenus:null,_isMobile:function(){return this.currentBrowserWidth<=this.breakPoints.small?true:false;},_isMedium:function(){return this.currentBrowserWidth<=this.breakPoints.medium?true:false;},_isMenuToggle:function(){if('always'==this.mobileBreakpoint||(this._isMobile()&&'mobile'==this.mobileBreakpoint)||(this._isMedium()&&'medium-mobile'==this.mobileBreakpoint)){return true;}
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
if(linear_advance_option=='yes'){form.find('#fl-field-uabb_col_linear_gradient_primary_loc').show();form.find('#fl-field-uabb_col_linear_gradient_secondary_loc').show();}}}});})(jQuery);