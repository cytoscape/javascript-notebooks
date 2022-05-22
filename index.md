---
layout: default
---

<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%} 

<!-- content -->
This collection of JS notebooks allows you to interact and control your
local instance of Cytoscape Desktop. It facilitates the use of the js4cytoscape
library for Cytoscape automation via CyREST. Explore the collection or 
deploy your own JS notebooks!

<br /><br />
  {% assign notebooks = site.notebooks %}
    <ul class="post-list">
      {%- for notebook in notebooks -%}
      <li>
        <h3>
          <a class="post-link" href="{{ notebook.url | relative_url }}">
            {{ notebook.title | escape }}
          </a>
        </h3>
      </li>
      {%- endfor -%}
    </ul>

</div>