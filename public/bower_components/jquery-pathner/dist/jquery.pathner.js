/*!
 * jQuery Pathner
 *
 * Requires:
 * - jQuery v2.0.0
 * - jQuery Popup Window v.1.0.1
 */
!function(t){var e=86400,a="tkn",n="_exp",r=a+n,o="https://partner.path.com/oauth2/authenticate?response_type=code&client_id=",i="about:blank",p="body{padding:0;margin:0}.pathner{font-family:'HelveticaNeue-Light','Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.pathner .pathner-reason{margin:4px 0 0;font-size:13px;font-weight:lighter}.pathner .pathner-icon{height:25px}.pathner .pathner-header{padding:8px;background:#e62f17;color:#fff}.pathner .pathner-left{float:left}.pathner .pathner-right{float:right}.pathner .pathner-both{clear:both}.pathner .pathner-content{padding:10px;background:#fff}.pathner .pathner-content .pathner-component{margin-bottom:2px}.pathner .pathner-content .pathner-component textarea{background:#F8F8F8;color:#999;border:.5px solid #DCDCDC;-webkit-border-radius:2px 2px 2px 2px;border-radius:2px 2px 2px 2px;font-size:13px;width:300px;padding:10px;box-shadow:0 0 .5px #DCDCDC;-webkit-box-shadow:0 0 .5px #DCDCDC;-moz-box-shadow:0 0 .5px #DCDCDC}.pathner .pathner-content .pathner-component img{width:100%;-webkit-border-radius:2px 2px 2px 2px;border-radius:2px 2px 2px 2px;box-shadow:0 0 .5px #DCDCDC;-webkit-box-shadow:0 0 .5px #DCDCDC;-moz-box-shadow:0 0 .5px #DCDCDC;min-height:150px}.pathner .pathner-content .pathner-component h3{padding:0;margin:0;-webkit-font-smoothing:antialiased;font-weight:800;text-shadow:0 0 0 rgba(0,0,0,0)}.pathner .pathner-content .pathner-component p{padding:0;margin:0;font-size:14px;-webkit-font-smoothing:antialiased;font-weight:400;text-shadow:0 0 0 rgba(0,0,0,0)}.pathner .pathner-footer{padding:8px 4px;background:#F8F8F8}.pathner .pathner-footer [class^='pathner-button']{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;padding:10px;text-align:center;-webkit-font-smoothing:antialiased;font-weight:400;text-shadow:0 0 0 rgba(0,0,0,0);-webkit-border-radius:4px;border-radius:4px;color:#fff;font-size:14px;cursor:pointer}.pathner .pathner-footer .pathner-button-disabled{opacity:.7}.pathner .pathner-footer .pathner-button-share{background:#e62f17}.pathner .pathner-footer .pathner-button-share:hover,.pathner .pathner-footer .pathner-button-share:active,.pathner .pathner-footer .pathner-button-share:target{background:#e41f11}.pathner .pathner-footer .pathner-button-cancel{background:#eaeaea;color:#666}.pathner .pathner-footer .pathner-button-cancel:hover,.pathner .pathner-footer .pathner-button-cancel:active,.pathner .pathner-footer .pathner-button-cancel:target{background:#e5e5e5;color:#666}.pathner .pathner-appname{text-align:center;color:#cacaca;font-size:small;-webkit-font-smoothing:antialiased;font-weight:400;text-shadow:0 0 0 rgba(0,0,0,0)}",c=function(){try{localStorage.removeItem(a),localStorage.removeItem(r)}catch(t){return console.log("removeStorage: Error removing key ["+a+"] from localStorage: "+JSON.stringify(t)),!1}return!0},h=function(){var t=Date.now(),e=localStorage.getItem(r);if((void 0===e||null===e)&&(e=0),t>e)return c(),null;try{var n=localStorage.getItem(a);return n}catch(o){return console.log("getStorage: Error reading key ["+a+"] from localStorage: "+JSON.stringify(o)),null}},s=function(t,n){n=void 0===n||null===n?e:Math.abs(n);var o=Date.now(),i=o+1e3*n;try{localStorage.setItem(a,t),localStorage.setItem(r,i)}catch(p){return console.log("setStorage: Error setting key ["+a+"] in localStorage: "+JSON.stringify(p)),!1}return!0},l=function(e,a){var n,r="";a.appname&&(r="via "+a.appname),n=t.isFunction(a.data)?a.data(e):a.data,n=n||{};var o=n.title,i=n.image,c=n.description;return["<!DOCTYPE html>",'<html lang="en">',"<head>",'<meta name="viewport" content="minimal-ui; initial-scale=1.0; maximum-scale=1.0; user-scalable=no; width=320">','<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1">','<meta charset="utf-8">',"<style>",p,"</style>","</head>","<body>",'<div class="pathner">','<div class="pathner-header">','<div class="pathner-left">','<img class="pathner-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAB4FBMVEX////////////////iEwfiFAjiFQniFwvjGAzjGQ3jGQ7jHBHjHRLjHxTkIBXkIRbkIhfkIxjkJRnkJhrkJhvlJxzlKR7lKyDlLSLlLyTmMifmMijmMynmNCrmNSvmNizmNy3nOzHnPDLnPTPnPzboQDfoQTjoQzroRTzoRjzpST/pSkDpS0HpS0LpTEPqUEfqU0rqVEvqVUzqVk3rWFDrWVHrWlLrW1PrXFTrXVXrX1fsYVnsZFzsZF3sZV7sZ2DtamLta2PtbGTucWrucmvudm/venPvfHXvfXfwgnzwg33whH7whX/whoDwh4HwiYPxiYPxioTxjIbxjojxkIrxkYvyk43ylI7ylZDylpHyl5LymZTzmpXznJfznpnzn5rzoJvzoZz0op70paH0pqL0p6P0qKT0qaX1qqb1q6b1raj1rqn1r6v1sKz2sq72tbH2t7P3u7f3vLn3vrv3wb73wr/4xcL4xsP4x8T4x8X4yMb4ycf5ysj5z8z50M3609D61dP61tT619X62df62tj729n73Nr73tz739374N/74eD74uH85OP85+b86Of86un86+r97Ov97e397+798vH+8/L+9PP+9fT+9vX++Pf++fj++fn//Pz//f3//v7///8K5UXTAAAABHRSTlMAh8LDrEhNWQAAAiVJREFUeAHV1utXTFEYx/GpeRRDaSjkHpJk5MIYEalxz10uUYoml0R0QeMiFaYLQ0y51O9fdWY9e7az9jlnZs95xffVzG/tzzpr7VfbY5TjRTZ5czzJcpFtuclvIfuM73ldMK/HAzf9v2z65e2TdXsDVbsOHmt+OqnHEm3BJWQqv/LscEYWP11M1moG0rNIIdlXG0/D6smxwm5HtpPSdc2BHSLZvG2Ndx73dF4OLTO5Flt2l1KVNo1D9LP3CMme2bAZH4kafsHcaDWJls5aWSOJOqB2jkQXrKyEuHsApt5Go29i36W7RFzRrMpeERcG8NXPdz4oXYC4fpVd570YRp+IeyLZRB4vp1TWwPsZGMUX8J8+yEK87FfZPt5fOLA2XtaprIr3cQfWy4vfgY05sH5eylUWNF3V5/kWFuHlsMrCf+8fX3wWVsPLVZW18J73AcDUQpW9I+6jykaIK5sDpov49wBEM6U8VEJlWEvJFvUA+L2cTw2BG1xP3Gsr6yQj/yiSreJT1Q9GviVi3UESHYeVoYIoMMk/yyhVwWKSbYcdG9vcBNEmsqkCVsalY/XIyMpJbXUHMrMNfDafRFsic9BgK/n0nufNJ8JHL3a9B5eB/ShgthsyHTZB3A5tNnQfwE3i6rTZQ9rY2uoj7oo2e0SmhrXZLZPaCm12w8Ri+qyPZO3QZzhAXEkXsmGIng+tWFPbnviHnjMuX3gu35MuX6/u38pu+gOiwQ99UZw9YwAAAABJRU5ErkJggg==">',"</div>",'<div class="pathner-right">','<h4 class="pathner-reason">Post to <strong>Path</strong></h4>',"</div>",'<div class="pathner-both"></div>',"</div>",'<div class="pathner-content">','<div class="pathner-component">','<textarea name="caption" placeholder="Leave a note..."></textarea>',"</div>",'<div class="pathner-component">',"<h3>"+o+"</h3>","</div>",'<div class="pathner-component">',"<p>"+c+"</p>","</div>",'<div class="pathner-component">','<img src="'+i+'" />',"</div>","</div>",'<div class="pathner-footer">','<div class="pathner-left">','<p id="loading" class="pathner-reason" style="display: none;margin-left: 10px; margin-top: 10px;">Please wait...</p>',"</div>",'<div class="pathner-right">','<button class="pathner-button pathner-button-share">Share</button>',"</div>",'<div class="pathner-right" style="margin-right: 2px;">','<button class="pathner-button pathner-button-cancel" onclick="self.close();">Cancel</button>',"</div>",'<div class="pathner-both"></div>',"</div>",'<div class="pathner-appname">',"<p>"+r+"</p>","</div>","</div>","</body>","<html>"].join("")},d=function(e,a,n){var r=function(e){var a=t(e.document.body).find("textarea");a.width(a.parent().width()-22)},o=function(e,a){a?(t(e).find(".pathner-button-share, textarea").attr("disabled","disabled").addClass("pathner-button-disabled"),t(e).find("#loading").show()):(t(e).find(".pathner-button-share, textarea").removeAttr("disabled").removeClass("pathner-button-disabled"),t(e).find("#loading").hide())},i=function(a,n){o(a,!0);var r,i=n.action,p=n.method;r=t.isFunction(n.data)?n.data(e):n.data;var c={caption:t(a).find("textarea").val(),title:r.title,image:r.image,url:r.url,description:r.description};t.ajax({type:p,url:i,data:c,beforeSend:function(t){t.setRequestHeader("Authorization",h())},error:function(e,r,i){n.callback&&t.isFunction(n.callback.error)&&n.callback.error(e,r,i),o(a,!1)},success:function(e){var r=function(){t(a).find(".pathner-button-cancel").trigger("click")};n.callback&&t.isFunction(n.callback.success)?n.callback.success(e,r):r()}})},p=function(){var o=a.document.body;t(o).html(l(e,n)),t(a).resize(function(){r(a)}),r(a),t(o).find(".pathner-button-share").on("click",function(){i(o,n)})};t(a.document).ready(function(){setTimeout(p,100)})},f=function(e,a,n){d(e,t.popupWindow(i,n),a)};t.fn.pathPartner=function(e,a){var e=e||{};return this.each(function(){t(this).on("click",function(){var n=this;if(h())return void f(n,e,a);var r=t.popupWindow(o+e.clientId,a);t(r.document).ready(function(){var a=setInterval(function(){if(t.isFunction(r.location.replace))try{var o=r.location.href;if(o===i)return;var p=JSON.parse(t(r.document.body).text());p.token||r.self.close(),clearInterval(a),s(p.token),r.location.replace(i),d(n,r,e)}catch(c){}},1e3)})})})}}(jQuery);
