import{_ as s,c as a,o as n,a as l}from"./app.4dd1e863.js";const A=JSON.parse('{"title":"Validation","description":"","frontmatter":{},"headers":[],"relativePath":"guide/validation.md"}'),o={name:"guide/validation.md"},p=l(`<h1 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-hidden="true">#</a></h1><p>By default @filledout/core version of the form has no validation in built You can add you own global logic inside the <code>factoryInterceptor</code> (check api reference) or you can wrap it with your own &quot;decorator&quot; function and implement it there In previous sections we went with the decorator approach because it can properly transfer types trough function calls and it should be prefered way to add such features.</p><p>There are few validators out of the box you can find list of the in the api section. Package name will be @filledout/validatorname by default</p><p>Remind of how to setup validator:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CreateFormParams</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">createLib</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ValidationVisibilityCondition</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@filledout/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createLib</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createReactLib</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@filledout/react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">applyYup</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ApplyYupParams</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@filledout/yup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// here we initialize core lib</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> lib </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createLib</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showValidationOn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ValidationVisibilityCondition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Submitted</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ValidationVisibilityCondition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Touched</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ValidationVisibilityCondition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Dirty</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// here we can modify base form model however we want and in our case we just add yup validator</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createForm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateFormParams</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApplyYupParams</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$$form</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lib</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createForm</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">$$form</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">applyYup</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">$$form</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,y,i,D,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
