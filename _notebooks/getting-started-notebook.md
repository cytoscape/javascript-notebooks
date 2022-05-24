---
title: Getting started
categories: demo
apps: stringApp, WikiPathways
---
<p>This is an example JS notebook for Cytoscape automation. This format supports common HTML and JS components, 
    in addition to markdown and liquid syntax. For the majority of cases, we recommend a notebook style layout 
    of alternating text (like this) and dynamic elements provided by js4cytoscape.
</p>

<h3>The Cytoscape Badge</h3>
<p>For example, the Cytoscape badge displayed above is provided by js4cytoscape and automatically inserted by the 
    notebook template defined by this site.
    This badge reports the status of your local instance of Cytoscape, displaying the version if it is successfully 
    detected. With the loaded js4cytoscape js and css, the badge is inserted with this single line of code:
</p>

{% highlight html %}
<span class="cytoscape-badge"></span>
{% endhighlight %}

<h3>Single Command Buttons</h3>
<p>Now, let's open a sample network and demo a few of the operations you can control Cytoscape from a JS notebook.</p>

<button onclick="openSession()">Open sample session</button>
<br /><br />

<p>Did you see the session load in your local Cytoscape? This is a simple example of a single js4cytoscape commands
    associated with a button, like so:
</p>

{% highlight html %}
<button onclick="openSession()">Open sample session</button>
{% endhighlight %}

<h3>Multiple Commands</h3>
<p>You can also trigger an entire workflow with a single button click.</p>

<button id="my-workflow">My workflow</button>
<br /><br />

<p>This can be accomplished by setting a button id and then defining a function triggered by its click. 
    The function can then perform a series of js4cytoscape commands or whatever you want. Just be
    sure to use async/await to execute and complete commands in series:</p>

{% highlight html %}
<button id="my-workflow">My workflow</button>

<script>
    $('#my-workflow').click(async function(){
        await closeSession(false);
        await openSession();
        //whatever you want here
    })
</script>
{% endhighlight %}

<h3>Embed Snapshots</h3>
<p>You can also take snapshots of your work and then embed them in the notebook.</p>

<button id="show-my-work">Show my work</button>
<div id="work-shown"></div>
<br />

<p>And here is what that code looks like:</p>

{% highlight html %}
<button id="show-my-work">Show my work</button>
<div id="work-shown"></div>

<script>
    $('#show-my-work').click(function(){
        //export image
        //insert image at div $('#work-shown')
    })
</script>
{% endhighlight %}

<script>
$('#my-workflow').click(async function(){
    await closeSession(false);
    openSession();
})
$('#show-my-work').click(function(){
    //export image
    //insert image at div $('#work-shown')
})
</script>