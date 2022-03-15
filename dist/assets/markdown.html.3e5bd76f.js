import{_ as h,r as t,o as d,b as g,d as s,e as a,w as o,F as b,f as n,a as l}from"./app.e4ea9ed7.js";const k={},y=s("p",null,"Every document page in VuePress is rendered by Markdown.",-1),_=s("p",null,"You need to build your document or blog page by creating and writing Markdown in the corresponding path.",-1),v=s("h2",{id:"markdown-introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),n(" Markdown introduction")],-1),f=n("If you are a new learner and don\u2019t know how to write Markdown, please read "),A={href:"https://vuepress-theme-hope.github.io/v2/basic/markdown/README.html",target:"_blank",rel:"noopener noreferrer"},w=n("Markdown Intro"),C=n(" and "),x={href:"https://vuepress-theme-hope.github.io/v2/basic/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},D=n("Markdown Demo"),z=n("."),E={class:"custom-container info"},B=s("p",{class:"custom-container-title"},"Frontmatter",-1),V=n("Frontmatter is a important concept in VuePress. If you don\u2019t know it, you need to read "),T={href:"https://vuepress-theme-hope.github.io/v2/basic/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},F=n("Frontmatter Introduction"),M=n("."),S=s("h2",{id:"vuepress-enhance",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-enhance","aria-hidden":"true"},"#"),n(" VuePress enhance")],-1),j=s("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),I=n("For these extensions, please read "),P={href:"https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},q=n("Markdown extensions in VuePress"),G=n("."),L=s("h2",{id:"theme-enhance",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#theme-enhance","aria-hidden":"true"},"#"),n(" Theme enhance")],-1),N=s("h3",{id:"enable-all",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#enable-all","aria-hidden":"true"},"#"),n(" Enable all")],-1),H=n("You can set "),J=s("code",null,"themeconfig.plugins.htmlEnhance.enableAll",-1),Y=n(" to enable all features of the "),O={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},R=n("md-enhance"),K=n(" plugin."),Q=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature" aria-hidden="true">#</a> New Feature</h2><h3 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h3><div><p>Safely use {{ variable }} in markdown.</p></div><div class="custom-container info"><p class="custom-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown">link</a>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">Custom Title</p><p>A custom tip container</p></div><div class="custom-container warning"><p class="custom-container-title">Custom Title</p><p>A custom warning container</p></div><div class="custom-container danger"><p class="custom-container-title">Custom Title</p><p>A custom danger container</p></div><details class="custom-block details"><summary>Custom Title</summary><p>A custom details container</p></details><details class="custom-block details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></details><h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3>`,11),U=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` -D vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),W=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(` i -D vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),X={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/code-group.html",target:"_blank",rel:"noopener noreferrer"},Z=n("View Detail"),$=s("h3",{id:"superscript-and-subscript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),n(" Superscript and Subscript")],-1),ss=s("p",null,[n("19"),s("sup",null,"th"),n(" H"),s("sub",null,"2"),n("O")],-1),ns={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},as=n("View Detail"),es=s("h3",{id:"align",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),n(" Align")],-1),ts=s("div",{class:"custom-container center"},[s("p",null,"I am center")],-1),ls=s("div",{class:"custom-container right"},[s("p",null,"I am right align")],-1),os={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},rs=n("View Detail"),ps=l('<h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h3><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),is={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},cs=n("View Detail"),ms=s("h3",{id:"mark",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),n(" Mark")],-1),us=s("p",null,[n("You can mark "),s("mark",null,"important words"),n(" .")],-1),hs={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ds=n("View Detail"),gs=s("h3",{id:"tasklist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),n(" Tasklist")],-1),bs={class:"task-list-container"},ks=l('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-0"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" disabled="disabled" id="task-item-1"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li>',2),ys={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},_s=n("View Detail"),vs=s("h3",{id:"chart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chart","aria-hidden":"true"},"#"),n(" Chart")],-1),fs=s("div",{class:"language-json ext-json line-numbers-mode"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"scatter"'),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"datasets"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"label"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Scatter Dataset"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
          `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"-10"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"10"),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"10"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"5"),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.5"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"5.5"),n(),s("span",{class:"token punctuation"},"}"),n(`
        `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"backgroundColor"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"rgb(255, 99, 132)"'),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"options"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"scales"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"linear"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"position"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"bottom"'),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br")])],-1),As=s("ul",null,[s("li",null,[s("a",{href:"%5Bchart.md%5D(https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)"},"View Detail")])],-1),ws=s("h3",{id:"flowchart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),n(" Flowchart")],-1),Cs={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},xs=n("View Detail"),Ds=s("h3",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),n(" Mermaid")],-1),zs={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Es=n("View Detail"),Bs=s("h3",{id:"tex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),n(" Tex")],-1),Vs=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"\u2211"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"\u2212"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"\u22EF"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"},"\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"\u2211")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"\u22EF"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"\u2212"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Ts={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Fs=n("View Detail"),Ms=l(`<h3 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo" aria-hidden="true">#</a> Code Demo</h3><div id="code-demo-531a6052" class="code-demo-wrapper" data-title="A%20normal%20demo" data-code="%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20powerful!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20powerful!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>very<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>very<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> powerful!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#very&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Very powerful!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="code-demo-footer"></div></div>`,2),Ss={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},js=n("View Detail"),Is=s("h3",{id:"presentation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),n(" Presentation")],-1),Ps={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},qs=n("View Detail"),Gs=l('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>',2);function Ls(Ns,Hs){const e=t("ExternalLinkIcon"),r=t("CodeGroupItem"),p=t("CodeGroup"),i=t("ChartJS"),c=t("FlowChart"),m=t("MermaidChart"),u=t("PresentationViewer");return d(),g(b,null,[y,_,v,s("p",null,[f,s("a",A,[w,a(e)]),C,s("a",x,[D,a(e)]),z]),s("div",E,[B,s("p",null,[V,s("a",T,[F,a(e)]),M])]),S,j,s("p",null,[I,s("a",P,[q,a(e)]),G]),L,N,s("p",null,[H,J,Y,s("a",O,[R,a(e)]),K]),Q,a(p,null,{default:o(()=>[a(r,{title:"yarn"},{default:o(()=>[U]),_:1}),a(r,{title:"npm",active:""},{default:o(()=>[W]),_:1})]),_:1}),s("ul",null,[s("li",null,[s("a",X,[Z,a(e)])])]),$,ss,s("ul",null,[s("li",null,[s("a",ns,[as,a(e)])])]),es,ts,ls,s("ul",null,[s("li",null,[s("a",os,[rs,a(e)])])]),ps,s("ul",null,[s("li",null,[s("a",is,[cs,a(e)])])]),ms,us,s("ul",null,[s("li",null,[s("a",hs,[ds,a(e)])])]),gs,s("ul",bs,[ks,s("li",null,[s("p",null,[s("a",ys,[_s,a(e)])])])]),vs,a(i,{title:"A Scatter Chart",id:"chart-64a56f2a",config:"%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Scatter%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"},{default:o(()=>[fs]),_:1}),As,ws,a(c,{id:"flowchart-64a56ebc",code:"cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",preset:"vue"}),s("ul",null,[s("li",null,[s("a",Cs,[xs,a(e)])])]),Ds,a(m,{id:"mermaid-64a56966","data-code":"flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"}),s("ul",null,[s("li",null,[s("a",zs,[Es,a(e)])])]),Bs,Vs,s("ul",null,[s("li",null,[s("a",Ts,[Fs,a(e)])])]),Ms,s("ul",null,[s("li",null,[s("a",Ss,[js,a(e)])])]),Is,a(u,{id:"presentation-64a5689e","data-code":"%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Ps,[qs,a(e)])])]),Gs],64)}var Ys=h(k,[["render",Ls]]);export{Ys as default};
