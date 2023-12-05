import{_ as r,o,c,d,a as e,b as t}from"./app-cc3b17e7.js";const a={},n=d('<h2 id="数据存储方式" tabindex="-1"><a class="header-anchor" href="#数据存储方式" aria-hidden="true">#</a> 数据存储方式</h2><table><thead><tr><th>方式</th><th>特点</th></tr></thead><tbody><tr><td><strong>文件存储</strong></td><td><code>openFileInput()</code> 和 <code>openFileOutput()</code> 读取设备上的文件</td></tr><tr><td><strong>SharedPreferences</strong></td><td>以 <code>XML</code> 格式将数据存储到设备</td></tr><tr><td><strong>SQLite 数据库</strong></td><td>运算速度快，占用资源少，还支持基本 <code>SQL</code> 语法</td></tr><tr><td><strong>ContentProvider</strong></td><td>应用程序之间的数据交换，可以将自己的数据共享给其他应用程序使用</td></tr><tr><td><strong>网络存储</strong></td><td>通过网络提供的存储空间来存储/获取数据信息</td></tr></tbody></table>',2),s=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"注意"),e("p",null,[t("推荐使用 "),e("code",null,"SQLite"),t(" 数据库")])],-1),i=d('<h2 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储" aria-hidden="true">#</a> 文件存储</h2><h2 id="sharedpreferences-存储" tabindex="-1"><a class="header-anchor" href="#sharedpreferences-存储" aria-hidden="true">#</a> SharedPreferences 存储</h2><ul><li><code>Android</code> 平台给我们提供了一个 <code>SharedPreferences</code> 类，它是一个轻量级的存储类，特别适合用于保存软件配置参数。</li><li>使用 <code>SharedPreferences</code> 保存数据，其背后是用xml文件存放数据</li><li>文件存放在 <code>/data/data/&lt;package name&gt;/shared_prefs</code> 目录下</li><li><code>getSharedPreferences(name,mode)</code> 方法的第一个参数用于指定该文件的名称，名称不用带后缀，后缀会由 <code>Android</code> 自动加上。方法的第二个参数指定文件的操作模式</li></ul><h2 id="sqlite-数据库存储" tabindex="-1"><a class="header-anchor" href="#sqlite-数据库存储" aria-hidden="true">#</a> SQLite 数据库存储</h2><ul><li><code>SQLite</code> 是 <code>Android</code> 自带的一个轻量级的数据库，他运算速度快，占用资源少，支持基本 <code>SQL</code> 语法</li><li><code>SQLite</code> 数据库可以存储应用程序中的大量数据，并对数据进行管理和维护</li></ul>',5),h=[n,s,i];function l(u,p){return o(),c("div",null,h)}const f=r(a,[["render",l],["__file","B05chapter5.html.vue"]]);export{f as default};
