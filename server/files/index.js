window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      bodyElement.innerHTML = "";
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
           const article = document.createElement("article");
           article.id = movie.imdbID;
           const img = document.createElement("img");
           img.src = movie.Poster;
           article.appendChild(img);

           const h1 = document.createElement("h1");
                    h1.textContent = movie.Title;
                    article.appendChild(h1);

                    const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.onclick = function () {
                window.location.href = "edit.html?imdbID=" + movie.imdbID;
                };
                article.appendChild(editButton);
                bodyElement.appendChild(article);

                    const pInfo = document.createElement("p");
                    const hours = Math.trunc(movie.Runtime / 60);
                    const minutes = movie.Runtime % 60;
                    
                    const spanRuntime = document.createElement("span");
                    spanRuntime.textContent = `Runtime ${hours}h ${minutes}m`;
                    
                    const spanBullet = document.createElement("span");
                    spanBullet.textContent = "\u2022";

                    const spanReleased = document.createElement("span");
                    const date = new Date(movie.Released);
                    spanReleased.textContent = `Released on ${date.toLocaleDateString()}`;

                    pInfo.appendChild(spanRuntime);
                    pInfo.appendChild(spanBullet);
                    pInfo.appendChild(spanReleased);
                    article.appendChild(pInfo);

                    const pGenres = document.createElement("p");
                    movie.Genres.forEach(genre => {
                        const spanGenre = document.createElement("span");
                        spanGenre.className = "genre";
                        spanGenre.textContent = genre;
                        pGenres.appendChild(spanGenre);
                    });
                    article.appendChild(pGenres);

                    const pPlot = document.createElement("p");
                    pPlot.textContent = movie.Plot;
                    article.appendChild(pPlot);

                    const createList = (title, items) => {
                        const h2 = document.createElement("h2");
                        h2.textContent = title;
                        article.appendChild(h2);
                        const ul = document.createElement("ul");
                        items.forEach(item => {
                            const li = document.createElement("li");
                            li.textContent = item;
                            ul.appendChild(li);
                        });
                        article.appendChild(ul);
                    };

                    createList("Directors", movie.Directors);
                    createList("Writers", movie.Writers);
                    createList("Actors", movie.Actors);

      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
