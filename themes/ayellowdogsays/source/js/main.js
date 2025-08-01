// utils
const util = {

  // https://github.com/jerryc127/hexo-theme-butterfly
  diffDate: (d, more = false) => {
    const dateNow = new Date()
    const datePost = new Date(d)
    const dateDiff = dateNow.getTime() - datePost.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24

    let result
    if (more) {
      const dayCount = dateDiff / day
      const hourCount = dateDiff / hour
      const minuteCount = dateDiff / minute

      if (dayCount > 14) {
        result = null
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + ' ' + ctx.date_suffix.day
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + ' ' + ctx.date_suffix.hour
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + ' ' + ctx.date_suffix.min
      } else {
        result = ctx.date_suffix.just
      }
    } else {
      result = parseInt(dateDiff / day)
    }
    return result
  },

  copy: (id, msg) => {
    const el = document.getElementById(id);
    if (el) {
      el.select();
      document.execCommand("Copy");
      if (msg && msg.length > 0) {
        hud.toast(msg, 2500);
      }
    }
  },

  toggle: (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("display");
    }
  },

  scrollTop: () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  },

  scrollComment: () => {
    document.getElementById('comments').scrollIntoView({behavior: "smooth"});
  },

  viewportLazyload: (target, func, enabled = true) => {
    if (!enabled || !("IntersectionObserver" in window)) {
      func();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        func();
        observer.disconnect();
      }
    });
    observer.observe(target);
  }
}

const hud = {
  toast: (msg, duration) => {
    const d = Number(isNaN(duration) ? 2000 : duration);
    var el = document.createElement('div');
    el.classList.add('toast');
    el.classList.add('show');
    el.innerHTML = msg;
    document.body.appendChild(el);

    setTimeout(function(){ document.body.removeChild(el) }, d);
    
  },

}

// defines

const l_body = document.querySelector('.l_body');


const init = {
  toc: () => {
    utils.jq(() => {
      const scrollOffset = 32;
      var segs = [];
      $("article.md-text :header").each(function (idx, node) {
        segs.push(node);
      });
      function activeTOC() {
        var scrollTop = $(this).scrollTop();
        var topSeg = null;
        for (var idx in segs) {
          var seg = $(segs[idx]);
          if (seg.offset().top > scrollTop + scrollOffset) {
            continue;
          }
          if (!topSeg) {
            topSeg = seg;
          } else if (seg.offset().top >= topSeg.offset().top) {
            topSeg = seg;
          }
        }
        if (topSeg) {
          $("#data-toc a.toc-link").removeClass("active");
          var link = "#" + topSeg.attr("id");
          if (link != '#undefined') {
            const highlightItem = $('#data-toc a.toc-link[href="' + encodeURI(link) + '"]');
            if (highlightItem.length > 0) {
              highlightItem.addClass("active");
            }
          } else {
            $('#data-toc a.toc-link:first').addClass("active");
          }
        }
      }
      function scrollTOC() {
        const e0 = document.querySelector('#data-toc .toc');
        const e1 = document.querySelector('#data-toc .toc a.toc-link.active');
        if (e0 == null || e1 == null) {
          return;
        }
        const offsetBottom = e1.getBoundingClientRect().bottom - e0.getBoundingClientRect().bottom + 100;
        const offsetTop = e1.getBoundingClientRect().top - e0.getBoundingClientRect().top - 64;
        if (offsetTop < 0) {
          e0.scrollBy({top: offsetTop, behavior: "smooth"});
        } else if (offsetBottom > 0) {
          e0.scrollBy({top: offsetBottom, behavior: "smooth"});
        }
      }
      
      var timeout = null;
      window.addEventListener('scroll', function() {
        activeTOC();
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function() {
          scrollTOC();
        }.bind(this), 50);
      });      
    })
  },
  sidebar: () => {
    utils.jq(() => {
      $("#data-toc a.toc-link").click(function (e) {
        sidebar.dismiss();
      });
    })
  },
  relativeDate: (selector) => {
    selector.forEach(item => {
      const $this = item
      const timeVal = $this.getAttribute('datetime')
      let relativeValue = util.diffDate(timeVal, true)
      if (relativeValue) {
        $this.innerText = relativeValue
      }
    })
  },
  /**
   * Tabs tag listener (without twitter bootstrap).
   */
  registerTabsTag: function () {
    // Binding `nav-tabs` & `tab-content` by real time permalink changing.
    document.querySelectorAll('.tabs .nav-tabs .tab').forEach(element => {
      element.addEventListener('click', event => {
        event.preventDefault();
        // Prevent selected tab to select again.
        if (element.classList.contains('active')) return;
        // Add & Remove active class on `nav-tabs` & `tab-content`.
        [...element.parentNode.children].forEach(target => {
          target.classList.toggle('active', target === element);
        });
        // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
        const tActive = document.getElementById(element.querySelector('a').getAttribute('href').replace('#', ''));
        [...tActive.parentNode.children].forEach(target => {
          target.classList.toggle('active', target === tActive);
        });
        // Trigger event
        tActive.dispatchEvent(new Event('tabs:click', {
          bubbles: true
        }));
      });
    });

    window.dispatchEvent(new Event('tabs:register'));
  },

  canonicalCheck: () => {
    const canonical = window.canonical;
    function showTip(isOfficial = false) {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
      const notice = document.createElement('div');
      const originalURL = `https://${canonical.originalHost}`;
      if (isOfficial) {
        notice.className = 'canonical-tip official';
        notice.innerHTML = `
        <a href="${originalURL}" target="_self" rel="noopener noreferrer">
        本站为官方备用站，仅供应急。主站：${originalURL}
        </a>
        `;
      } else {
        notice.className = 'canonical-tip unofficial';
        notice.innerHTML = `
        <a href="${originalURL}" target="_self" rel="noopener noreferrer">
        <div class="headline icon">☠️</div>
        本站为非法克隆站，请前往官方源站访问。<br>
        源站：${originalURL}
        </a>
        `;
      }
      document.body.appendChild(notice);
    }
    if (!canonical.originalHost) return;
    const currentURL = new URL(window.location.href);
    const currentHost = currentURL.hostname.replace(/^www\./, '');
    if (currentHost == 'localhost') return;
    const encodedCurrentHost = window.btoa(currentHost);
    const isCurrentHostValid = canonical.encoded === encodedCurrentHost;
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      if (isCurrentHostValid) {
        return;
      }
      if (canonical.officialHosts?.includes(currentHost)) {
        showTip(true);
        return;
      }
      showTip(false);
      return;
    }
    const canonicalURL = new URL(canonicalTag.href);
    const canonicalHost = canonicalURL.hostname.replace(/^www\./, '');
    const encodedCanonicalHost = window.btoa(canonicalHost);
    const isCanonicalHostValid = canonical.encoded === encodedCanonicalHost;
    if (isCanonicalHostValid && isCurrentHostValid) {
      return;
    }
    showTip(canonical.officialHosts?.includes(currentHost));
  }

}


// init
init.toc()
init.sidebar()
init.relativeDate(document.querySelectorAll('#post-meta time'))
init.registerTabsTag()
init.canonicalCheck()


//nihao
/* 烟花特效 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\\s/g,"\\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});
POWERMODE.colorful=true;POWERMODE.shake=false;document.body.addEventListener('input',POWERMODE);
/* 运行时间 */
// var now=new Date();function createtime(){var grt=new Date("07/8/2021 23:30:00");now.setTime(now.getTime()+250);days=(now-grt)/1000/60/60/24;dnum=Math.floor(days);hours=(now-grt)/1000/60/60-(24*dnum);hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="已运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}setInterval("createtime()",250);
//复制提醒
document.addEventListener('copy',function(){hud.toast("复制成功，转载请注明出处", 2500);})
// link-icon
document.addEventListener('DOMContentLoaded',function(){const links=document.querySelectorAll('article.md-text.content p a, footer.page-footer.footnote a:not(div.sitemap a)');links.forEach(function(link){const parentClasses=['tag-plugin.users-wrap','tag-plugin.sites-wrap','tag-plugin.ghcard','tag-plugin.link.dis-select','tag-plugin.colorful.note','social-wrap.dis-select'];let skip=false;parentClasses.forEach(pc=>{if(link.closest(`div.${pc}`)){skip=true}});if(!skip){const href=link.getAttribute('href');if(href&&(href.startsWith('http')||href.startsWith('/'))){link.innerHTML+=`<span style="white-space: nowrap;padding: 0px 5px 0 2px;" id="link-icon"><svg width=".7em"height=".7em"viewBox="0 0 21 21"xmlns="http://www.w3.org/2000/svg"><path d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z"fill="currentColor"/><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"fill="currentColor"></svg></span>`}}})});
// 插入字数统计
document.getElementById("all-posts-count").innerHTML = allpostscount;
document.getElementById("all-post-words").innerHTML = allpostswords;
// 过期提醒
if (upgrade_time_days > 180) {
    document.getElementById('gtime').innerHTML = `<div class="tag-plugin colorful note" color="orange"><div class="title"><strong>提醒</strong></div><div class="body"><p>本文最后更新于 ${upgrade_time_days} 天前，其中某些信息可能已经过时，请谨慎使用！<br>如果发现内容有误，请在评论区告知。</p></div></div>`;
}
// ©
// window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x61\\x64\\x64\\x45\\x76\\x65\\x6e\\x74\\x4c\\x69\\x73\\x74\\x65\\x6e\\x65\\x72']('\\x44\\x4f\\x4d\\x43\\x6f\\x6e\\x74\\x65\\x6e\\x74\\x4c\\x6f\\x61\\x64\\x65\\x64',function(){const host=window['\\x6c\\x6f\\x63\\x61\\x74\\x69\\x6f\\x6e']['\\x68\\x6f\\x73\\x74'];if(host!=='\\x62\\x6c\\x6f\\x67\\x2e\\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70'&&!host['\\x73\\x74\\x61\\x72\\x74\\x73\\x57\\x69\\x74\\x68']('\\x6c\\x6f\\x63\\x61\\x6c\\x68\\x6f\\x73\\x74')&&!host['\\x73\\x74\\x61\\x72\\x74\\x73\\x57\\x69\\x74\\x68']('\\x31\\x32\\x37\\x2e\\x30\\x2e\\x30\\x2e\\x31')){window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x62\\x6f\\x64\\x79']['\\x69\\x6e\\x6e\\x65\\x72\\x48\\x54\\x4d\\x4c']=['\\x3c\\x64\\x69\\x76 \\x73\\x74\\x79\\x6c\\x65\\x3d\\x22\\x6d\\x61\\x72\\x67\\x69\\x6e\\x3a \\x61\\x75\\x74\\x6f\\x3b\\x22\\x3e','\\x3c\\x68\\x31\\x3e\\u5f53\\u524d\\u9875\\u9762\\u5e76\\u975e\\u672c\\u6587\\u4f5c\\u8005\\u7684\\u4e3b\\u9875\\uff0c\\u5c06\\u5728\\u4e94\\u79d2\\u540e\\u8df3\\u8f6c\\u3002\\x3c\\x2f\\x68\\x31\\x3e','\\x3c\\x62\\x72 \\x2f\\x3e','\\x3c\\x68\\x31\\x3e\\u5982\\u6709\\u7591\\u60d1\\u8bf7\\u8054\\u7cfb\\uff1a\\x74\\x68\\x75\\x6e\\x38\\x38\\x38 \\x61\\x74 \\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70\\x3c\\x2f\\x68\\x31\\x3e','\\x3c\\x2f\\x64\\x69\\x76\\x3e',]['\\x6a\\x6f\\x69\\x6e']('');window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x62\\x6f\\x64\\x79']['\\x73\\x74\\x79\\x6c\\x65']=['\\x62\\x61\\x63\\x6b\\x67\\x72\\x6f\\x75\\x6e\\x64\\x2d\\x63\\x6f\\x6c\\x6f\\x72\\x3a \\x77\\x68\\x69\\x74\\x65\\x3b','\\x63\\x6f\\x6c\\x6f\\x72\\x3a \\x62\\x6c\\x61\\x63\\x6b\\x3b','\\x74\\x65\\x78\\x74\\x2d\\x61\\x6c\\x69\\x67\\x6e\\x3a \\x63\\x65\\x6e\\x74\\x65\\x72\\x3b','\\x66\\x6f\\x6e\\x74\\x2d\\x73\\x69\\x7a\\x65\\x3a \\x35\\x30\\x70\\x78\\x3b','\\x77\\x69\\x64\\x74\\x68\\x3a \\x31\\x30\\x30\\x76\\x77\\x3b','\\x68\\x65\\x69\\x67\\x68\\x74\\x3a \\x31\\x30\\x30\\x76\\x68\\x3b','\\x64\\x69\\x73\\x70\\x6c\\x61\\x79\\x3a \\x66\\x6c\\x65\\x78\\x3b',]['\\x6a\\x6f\\x69\\x6e']('');setTimeout(()=>{window['\\x6c\\x6f\\x63\\x61\\x74\\x69\\x6f\\x6e']['\\x68\\x72\\x65\\x66']='\\x68\\x74\\x74\\x70\\x73\\x3a\\x2f\\x2f\\x62\\x6c\\x6f\\x67\\x2e\\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70'},5000)}});

document.addEventListener('DOMContentLoaded', function() {
    // 从页面中提取第一个AVIF图片链接
    // function getFirstPictureUrl(type) {
    //   const images = document.querySelectorAll('img');
    //   for (let img of images) {
    //     if (img.getAttribute("data-src") && img.getAttribute("data-src").includes('fmt=',type)) {
    //       return img.getAttribute("data-src");
    //     }
    //   }
    //   return null;
    // }
  
    // 检测浏览器是否支持AVIF格式
    function supportCheck(type, url) {
      return new Promise(resolve => {
        // 先从localStorage中获取结果
        const result = localStorage.getItem("support_" + type);
        if (result !== null) {
          // 如果结果存在，就直接返回
          console.log(type, "support status loaded from localStorage:", result === "true");
          resolve(result === "true");
        } else {
          // 如果结果不存在，就进行检测
          const image = new Image();
          image.src = url;
          image.onload = () => {
            console.log(type, "supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "true");
            resolve(true);
          };
          image.onerror = () => {
            console.log(type, "not supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "false");
            // 显示提示消息
            hud.toast(`当前浏览器不支持使用${type}，已降级为使用其他格式`, 2500);
            resolve(false);
          };
        }
      });
    }
    
  
    // 替换图片URL中的avif为webp
    function replacepicture(from, to) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        let attr = img.src.startsWith('data') ? 'data-src' : 'src';
        if (img.getAttribute(attr) && img.getAttribute(attr).includes('fmt=' + from)) {
          if (to == "") {
            console.log("Replacing ", from, " with origin ext for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, ''));
          } else {
            console.log("Replacing ", from, " with ", to, " for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, 'fmt=' + to));
          }
        }
      });
    }
    

  const firstAvifUrl = "/img/check/status.avif"; // 获取第一个AVIF图片链接
  // 使用第一个AVIF图片链接进行检测
  supportCheck("AVIF", firstAvifUrl).then(supported => {
    if (!supported) {
      replacepicture("avif", "webp");
      const firstWebpUrl = "/img/check/status.webp"; // 获取第一个WEBP图片链接
      supportCheck("WEBP", firstWebpUrl).then(supported => {
        if (!supported) {
          // hud.toast("当前浏览器不支持使用webp，已降级为使用原始图片", 2500);
          // replacepicture("webp","");
          replacepicture("webp", "png");
        } else {
          console.log("Webp images will be used.");
        }
      });
    } else {
      console.log("AVIF images will be used.");
    }
  });

  selectFastNode();
  });

  // 看看哪个节点快
  function selectFastNode(force) {
    console.log('[ONEP,selectFastNode] Running...');
    const selectdisabled = localStorage.getItem('onep.cdn.select.disabled');
    if (selectdisabled) {
      console.log('[ONEP,selectFastNode] Skipping due to select disabled.');
      return;
    }
    const storedData = localStorage.getItem('onep.cdn.nodelist');
    if (storedData) {
      const data = JSON.parse(storedData);
      const now = new Date();
      if (data.link === null && now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        console.log('[ONEP,selectFastNode] Skipping due to recent failure to fetch nodes.');
        return;
      } else if (now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        replaceImageSource(data.link);
        return;
      }
    }
  
    const formData = new FormData();
    formData.append('token', 'hzchu.top');
  
    fetch('https://onep.hzchu.top/_api/nodeslist', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.nodes && Object.keys(data.nodes).length > 0) {
        const nodes = Object.values(data.nodes);
        let fastestNode = null;
        let fastestTime = Infinity;

        const promises = nodes.map(node => {
          const startTime = performance.now();
          // 添加随机查询参数以避免缓存
          const url = `${node}/mount/watermask.png?cache_buster=${Math.random()}`;
          return fetch(url)
            .then(() => {
              const endTime = performance.now();
              const duration = endTime - startTime;
              if (duration < fastestTime) {
                fastestTime = duration;
                fastestNode = node;
              }
            })
            .catch(error => {
              console.error('[ONEP,selectFastNode] Error pinging node:', node, error);
            });
        });

        Promise.all(promises).then(() => {
          if (fastestNode) {
            replaceImageSource(fastestNode);
            localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
              link: fastestNode,
              time: new Date().getTime()
            }));
            console.log('[ONEP,selectFastNode] Selected fastest node:', fastestNode);
          } else {
            console.log('[ONEP,selectFastNode] No nodes responded successfully.');
          }
        });
      } else {
        console.log('[ONEP,selectFastNode] Failed to fetch nodes, will skip checks for the next 5 minutes.');
        localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
          link: null,
          time: new Date().getTime()
        }));
      }
    })
    .catch(error => {
      console.error('[ONEP,selectFastNode] Error:', error);
      localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
        link: null,
        time: new Date().getTime()
      }));
    });
    console.log('[ONEP,selectFastNode] Testing nodes...');
    return true;
  }
  
  function replaceImageSource(newLink) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      let attr = img.src.startsWith('data') ? 'data-src' : 'src';
      if (img.getAttribute(attr) && img.getAttribute(attr).startsWith('https://onep.hzchu.top')) {
        console.log("[ONEP,selectFastNode] Replacing ", img.getAttribute(attr), " with ", newLink);
        img.setAttribute(attr, img.getAttribute(attr).replace('https://onep.hzchu.top', newLink));
      }
    });
  }

// sw
navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
.then(function(registration) {
    // 注册成功
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
})
.catch(function(err) {
    // 注册失败
    console.log('ServiceWorker registration failed: ', err);
});
  
// 删除模式
let deleteMode = false;

function toggleDeleteMode() {
    deleteMode = !deleteMode;
    if (deleteMode) {
      hud.toast("已开启删除模式", 2500);
      document.addEventListener('click', deleteElement, true);
    } else {
      hud.toast("已关闭删除模式", 2500);
      document.removeEventListener('click', deleteElement, true);
    }
}

function deleteElement(event) {
  if (deleteMode && event.target !== document.body && !event.target.closest('.delmode-btn') && !event.target.closest('.float-panel')) {
    event.preventDefault(); // 阻止默认行为
    event.target.remove();
  }
}


// 给超长代码块增加滚动条 @Summer
document.addEventListener("DOMContentLoaded", function() {
  // 选择所有的.md-text元素
  var codeBlocks = document.querySelectorAll('.md-text');
  // 遍历每个.md-text元素
  codeBlocks.forEach(function(block) {
    // 检查是否包含.highlight类的子元素，且父元素高度超过500px
    var highlightBlocks = block.querySelectorAll('.highlight');
    highlightBlocks.forEach(function(highlightBlock) {
      if (highlightBlock.clientHeight > 500) {
        highlightBlock.style.maxHeight = '500px';
        highlightBlock.style.overflow = 'auto';
      }
    });
  });
});