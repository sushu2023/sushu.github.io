import{_ as n,o as a,c as s,e}from"./app-df719bd6.js";const t={},p=e(`<h1 id="pandas库简介" tabindex="-1"><a class="header-anchor" href="#pandas库简介" aria-hidden="true">#</a> Pandas库简介</h1><p>Pandas是一个强大的Python数据分析工具库，它提供了快速、灵活以及表达力强的数据结构，旨在使“关系”或“标签”数据的处理既简单又直观。它是基于NumPy库构建的，并让数据预处理、清洗、分析变得更加容易。</p><h2 id="核心数据结构" tabindex="-1"><a class="header-anchor" href="#核心数据结构" aria-hidden="true">#</a> 核心数据结构</h2><p>Pandas有两种核心数据结构：<code>DataFrame</code>和 <code>Series</code>。</p><ul><li><code>Series</code>是一种一维标签数组，能够存储任何数据类型（整数、字符串、浮点数、Python对象等）。其轴标签统称为索引。</li><li><code>DataFrame</code>是一个二维标签数据结构，可以看作是一个表格或者说是 <code>Series</code>对象的容器。</li></ul><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><h3 id="数据导入" tabindex="-1"><a class="header-anchor" href="#数据导入" aria-hidden="true">#</a> 数据导入</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># 从CSV文件中读取数据</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;example.csv&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 从Excel文件中读取数据</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_excel<span class="token punctuation">(</span><span class="token string">&#39;example.xlsx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据查看" tabindex="-1"><a class="header-anchor" href="#数据查看" aria-hidden="true">#</a> 数据查看</h2><p>使用Pandas，您可以快速查看数据集的摘要信息。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 查看DataFrame的头部数据</span>
df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 查看DataFrame的尾部数据</span>
df<span class="token punctuation">.</span>tail<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据选择与过滤" tabindex="-1"><a class="header-anchor" href="#数据选择与过滤" aria-hidden="true">#</a> 数据选择与过滤</h3><p>选择和过滤数据集中的数据是数据分析中的常见操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 选择列</span>
df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 选择行</span>
df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">]</span>

<span class="token comment"># 行列同时选择</span>
df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>row_index<span class="token punctuation">,</span> <span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 条件过滤</span>
df<span class="token punctuation">[</span>df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗" aria-hidden="true">#</a> 数据清洗</h3><p>数据清洗是准备分析数据的重要步骤。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 缺失值处理</span>
df<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 删除缺失值</span>
df<span class="token punctuation">.</span>fillna<span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment"># 用某个值填充缺失值</span>

<span class="token comment"># 数据类型转换</span>
df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&#39;float&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据统计" tabindex="-1"><a class="header-anchor" href="#数据统计" aria-hidden="true">#</a> 数据统计</h3><p>Pandas提供了丰富的方法进行数据统计。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基本统计</span>
df<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 特定列统计</span>
df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据可视化" tabindex="-1"><a class="header-anchor" href="#数据可视化" aria-hidden="true">#</a> 数据可视化</h3><p>通过集成Matplotlib，Pandas允许您直观地可视化数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment"># 绘制某列的直方图</span>
df<span class="token punctuation">[</span><span class="token string">&#39;column_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hist<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[p];function c(l,o){return a(),s("div",null,i)}const u=n(t,[["render",c],["__file","pandas.html.vue"]]);export{u as default};
