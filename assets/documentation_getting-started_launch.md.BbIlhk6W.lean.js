import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.Bq6besbN.js";const E=JSON.parse('{"title":"Launch","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/getting-started/launch.md","filePath":"documentation/getting-started/launch.md"}'),l={name:"documentation/getting-started/launch.md"};function e(h,s,p,k,o,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="launch" tabindex="-1">Launch <a class="header-anchor" href="#launch" aria-label="Permalink to &quot;Launch&quot;">​</a></h1><h2 id="modify-your-app-axaml" tabindex="-1">Modify your App.axaml <a class="header-anchor" href="#modify-your-app-axaml" aria-label="Permalink to &quot;Modify your App.axaml&quot;">​</a></h2><p>Include SukiUI styles in your <code>App.axaml</code></p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Application</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:sukiUi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clr-namespace:SukiUI;assembly=SukiUI&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Application.Styles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sukiUi:SukiTheme</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThemeColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Application.Styles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="use-sukiwindow-as-mainwindow" tabindex="-1">Use SukiWindow as MainWindow <a class="header-anchor" href="#use-sukiwindow-as-mainwindow" aria-label="Permalink to &quot;Use SukiWindow as MainWindow&quot;">​</a></h2><p>Change MainWindow from Window class to SukiWindow class.</p><p>Original <code>MainWindow.axaml</code>:</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Window</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    x:Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SukiTest.MainWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/avaloniaui&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/expression/blend/2008&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:mc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Window</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Modified <code>MainWindow.axaml</code>:</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sukiUi:SukiWindow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    x:Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SukiTest.MainWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/avaloniaui&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:sukiUi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clr-namespace:SukiUI.Controls;assembly=SukiUI&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/expression/blend/2008&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:mc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sukiUi:SukiWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Original <code>MainWindow.axaml.cs</code>:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Avalonia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Controls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SukiTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> partial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MainWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Window</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MainWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        InitializeComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Modified <code>MainWindow.axaml.cs</code>:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SukiUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Controls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SukiTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> partial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MainWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SukiWindow</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MainWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        InitializeComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="done" tabindex="-1">Done <a class="header-anchor" href="#done" aria-label="Permalink to &quot;Done&quot;">​</a></h2><p>You&#39;re now ready to use SukiUI ! We advise you to theme your app now. Please check the <a href="https://kikipoulet.github.io/SukiUI/documentation/theming/basic.html" target="_blank" rel="noreferrer">Theming Page</a> and the <a href="https://kikipoulet.github.io/SukiUI/documentation/controls/layout/sukiwindow.html" target="_blank" rel="noreferrer">SukiWindow Page</a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you encounter the following exception:</p><ul><li><code>SukiWindow</code> not found <a href="https://github.com/kikipoulet/SukiUI/issues/265" target="_blank" rel="noreferrer">Issue#265</a></li><li>System.MissingMethodException: Method not found: System.Collections.Generic.IReadOnlyList\`1&lt;System.Object&gt; Avalonia.Markup.Xaml.XamlIl.Runtime.IAvaloniaXamlIlEagerParentStackProvider.get_DirectParents() <a href="https://github.com/kikipoulet/SukiUI/issues/276" target="_blank" rel="noreferrer">Issue#276</a></li><li>Unable to resolve type <code>SukiTheme</code> from namespace clr-namespace:SukiUI;assembly=SukiUI <a href="https://github.com/kikipoulet/SukiUI/discussions/278" target="_blank" rel="noreferrer">Discussion#276</a></li><li>and other similar exceptions</li></ul><p>There are two possible solutions to try:</p><ul><li>Upgrade or downgrade the version of <code>Avalonia</code> and <code>SukiUI</code> until the exception is resolved</li><li>While ensuring that <code>Avalonia</code> is up to date (beta), reference the build <code>.dll</code> from <a href="https://github.com/kikipoulet/SukiUI/actions/workflows/build.yml" target="_blank" rel="noreferrer">Github Action</a> and proceed with the <a href="/SukiUI/documentation/getting-started/installation.html#via-github-action">following steps</a></li></ul></div>`,17)]))}const c=i(l,[["render",e]]);export{E as __pageData,c as default};
