(function() {
	console.log("indie web stuff about to start happening");
	let currentPageURL = "https://webmention.io/api/mentions?per-page=100&sort-by=published&target=" + window.location.href;
	  fetch(currentPageURL)
	  .then(
	    function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + response.status);
				return;
			}

	        response.json().then(function(data) {
	        	console.log(data);
		      	//Creates section titles if they exist in a set order
				for (i = 0; i < data.links.length; i++) {
	      			if (data.links[i].activity.type === "like"){
	      				const title = "Twitter Likes";
	      				const id = "twitter-like-section";
	      				if(!document.getElementById(id)){
	      					createSection(title, id);
	      				}
	      			}
	      		}

	      		for (i = 0; i < data.links.length; i++) {
	      			if (data.links[i].activity.type === "repost"){
	      				const title = "Twitter Retweets";
	      				const id = "twitter-retweets";
	      				if(!document.getElementById(id)){
	      					createSection(title, id);
	      				}
	      			}
	      		}

	      		for (i = 0; i < data.links.length; i++) {
	      			if (data.links[i].activity.type === "reply"){
	      				const title = "Twitter Replies";
	      				const id = "twitter-replies";
	      				if(!document.getElementById(id)){
	      					createSection(title, id);
	      				}
	      			}
	      		}

				for (i = 0; i < data.links.length; i++) {
	      			if (data.links[i].activity.type === "link"){
	      				const title = "Reposts";
	      				const id = "general-reposts";
	      				if(!document.getElementById(id)){
	      					createSection(title, id);
	      				}
	      			}
	      		}      		

	      		// Populates the sections with data
	      		for (i = 0; i < data.links.length; i++) {
	      			if (data.links[i].activity.type === "like"){
						const twitterLikeSection = document.getElementById('twitter-like-section');
						twitterPhotoBubble (twitterLikeSection, data);
						console.log("like: " + data);
		      		}
		      		else if (data.links[i].activity.type === "repost"){
						const twitterRetweetSection = document.getElementById('twitter-retweets');
						twitterPhotoBubble (twitterRetweetSection, data);
	      			}
		      		else if (data.links[i].activity.type === "reply") {
		      			const replySection = document.getElementById('twitter-replies');
		      			let text = data.links[i].activity.sentence_html;
		      			printLinks(replySection, text);
		      		}
		      		else if (data.links[i].activity.type === "link") {
		      			const repostSection = document.getElementById('general-reposts');
		      			let text = data.links[i].activity.sentence_html;
		      			printLinks(repostSection, text);
		      		}
	      		}
		      	
	      		function createSection(titleText, id){
	      			const socialMediaSection = document.getElementById('social-media-responses');
	      			var title = document.createElement('h3');
	      			title.setAttribute('class', 'blog__subtitle');
	      			title.innerHTML = titleText;
	      			socialMediaSection.appendChild(title);
	      			var list = document.createElement('ul');
	      			list.setAttribute('id', id);
	      			list.setAttribute('class', 'social-media-list');
	      			title.after(list);
	      		}

		      	function twitterPhotoBubble(target, data){
	      			let imgSrc = data.links[i].data.author.photo;
				    let imgAlt = data.links[i].data.author.name;    
			        var li = document.createElement('li');
			        li.setAttribute('class', 'twitter-like-list-item');
			        var img = document.createElement('img');
					img.setAttribute('src', imgSrc);
					img.setAttribute('alt', imgAlt);
					img.setAttribute('class', 'twitter-like');
					li.appendChild(img)
			        target.appendChild(li);
		      	}

		      	function printLinks(target, data) {
		      		var li = document.createElement('li');
		      		li.innerHTML = data;
		      		target.appendChild(li);
		      	}

		      	console.log("Indie web stopped now");
	      	});
	    }
	)
	.catch(function(err) {
	  	console.log('Fetch Error :-S', err);
	});
})()
