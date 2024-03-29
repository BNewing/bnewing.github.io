---
layout: default
title: Blog
permalink: /blog
---
<h1> Blog </h1>
<p class="intro-text"> Here is a collection of blog posts that I've written so far. Happy reading! </p>

<ul class="blog__list">
  {% for post in site.posts %}
    <li class="blog__post-preview">
      <img class="blog__image--preview" src="/assets/images/blog-photos/{{ post.header_image_preview_filename }}" alt="{{ post.header_image_alt }}" />
      <h2><a href="{{ post.url }}.html">{{ post.title }}</a></h2>
	  <p class="blog__date-posted">Date posted: {{ post.publish_date }}</p>
      <p>{{ post.excerpt | truncatewords: 34 }}</p>
    </li>
  {% endfor %}
</ul>

<h2>Blog posts that are hosted on other people's blogs</h2>
<p class="intro-text"> Here is a collection of older posts that I've written on other people's blogs. </p>
<ul>
	<li>
		<a href="https://www.oxfordcc.co.uk/blog/success-stories-women-in-tech-awards">Success stories: women in tech awards</a> - posted on the <a href="https://www.oxfordcc.co.uk/blog">Oxford Computer Consultants Blog</a>. 
		<p class="blog__link-description">Discussing the awards I was nominated for and won in 2017, and the value in these types of awards.</i></p>
	</li>
	<li>
		<a href="https://www.oxfordcc.co.uk/blog/hosting-the-september-codebar-oxford-workshop">Hosting the September codebar Oxford Workshop</a> - posted on the <a href="https://oxfordcc.co.uk/">Oxford Computer Consultants blog</a>. 
		<p class="blog__link-description">A write-up of the first event hosted by Oxford Computer Consultants, nearly a year on from our first workshop.</p>
	</li>
	<li>
		<a href="https://www.oxfordcc.co.uk/blog/introducing-our-front-end-intern">Introducing Our Front End Intern</a> - posted on the <a href="https://www.oxfordcc.co.uk/blog">Oxford Computer Consultants Blog</a>. 
		<p class="blog__link-description">Introducing myself as a Front End Intern at OCC, what I'm doing there so far and what it's been like.</p>
	</li>
	<li>
		<a href="https://medium.com/the-codelog/introducing-the-codebar-oxford-team-b075d829d95d#.npuuam770">Introducing the codebar Oxford Team!</a> - posted on <a href="https://medium.com/the-codelog/">codelog</a>.
		<p class="blog__link-description">An introduction to all three of the codebar Oxford organisers - Bonnie, Marten and Beverley.</p>
	</li>	
	<li>
		<a href="https://daily.zooniverse.org/2016/11/18/web-dev-bev-out/">Web Dev Bev Out</a> - posted on the <a href="https://daily.zooniverse.org/">Daily Zooniverse</a>. 
		<p class="blog__link-description">A round-up of what I did during my internship with the Zooniverse.</p>
	</li>
	<li>
		<a href="https://daily.zooniverse.org/2016/10/17/codebar-with-the-zooniverse/">Codebar With the Zooniverse</a> - posted on the <a href="https://daily.zooniverse.org/">Daily Zooniverse</a>. 
		<p class="blog__link-description">A write-up of the first ever codebar in Oxford, hosted by the wonderful Zooniverse!</p>
	</li>
	<li>
		<a href="https://daily.zooniverse.org/2016/09/05/webdevbev-a-month-at-the-zoo/">A Month in at the Zoo</a> - posted on the <a href="https://daily.zooniverse.org/">Daily Zooniverse</a>. 
		<p class="blog__link-description">A blog talking about the challenges I've found with programming, one month into my Zooniverse Web Developer Internship.</p>
	</li>
	<li>
		<a href="https://daily.zooniverse.org/2016/08/11/meet-beverley/">Meet Beverley</a> - posted on the <a href="https://daily.zooniverse.org/">Daily Zooniverse</a>. 
		<p class="blog__link-description">A blog about what my first two weeks of my Zooniverse internship have been like.</p>
	</li>
	<li>
		<a href="https://medium.com/@webdevbev/stepping-away-from-the-git-desktop-client-intro-to-the-terminal-e96b70cd65b3#.k3cv98ba3">Stepping Away from the GitHub Desktop Client: Intro to the Terminal</a> - posted on  <a href="https://medium.com/">Medium</a>. 
		<p class="blog__link-description">A tutorial on using the terminal for the first time after having only used the Git Desktop Client</p>
	</li>		
</ul>
	