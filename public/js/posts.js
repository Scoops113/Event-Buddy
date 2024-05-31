document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => displayPost(post));
        })
        .catch(error => console.error('Error:', error));

    document.getElementById('post-activity').addEventListener('click', function () {
        $('#postActivityModal').modal('show');
    });

    document.getElementById('save-activity').addEventListener('click', async function () {
        const activityName = document.getElementById('activityName').value.trim();
        const activityDate = document.getElementById('activityDate').value.trim();
        const activityTime = document.getElementById('activityTime').value.trim();
        const activityPlace = document.getElementById('activityPlace').value.trim();
        const activityDescription = document.getElementById('activityDescription').value.trim();




        if (!activityName) {
            console.log("missing activityName")
            return
        }
        if (!activityDate) {
            console.log("missing activityDate")
            return
        }
        if (!activityTime) {
            console.log("missing activityTime")
            return
        }
        if (!activityPlace) {
            console.log("missing activityPlace")
            return
        }
        if (!activityDescription) {
            console.log("missing activityDescription")
            return
        }
        const postData = {
            name: activityName,
            date: activityDate,
            time: activityTime,
            location: activityPlace,
            description: activityDescription
        };
        const response = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        if (response.ok) {
            $('#postActivityModal').modal('hide');
            displayPost(data);

        } else {
            alert('failed to create post')
        }

    }
    );

    function displayPost(post) {
        const postContainer = document.getElementById('post-container');
        const postCard = document.createElement('div');
        postCard.classList.add('card', 'bg-warning', 'mb-3');
        postCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.name}</h5>
                <p class="card-text">${post.description}</p>
                <p class="card-text"><small>${post.date} at ${post.time}</small></p>
                <p class="card-text"><small>${post.location}</small></p>
            </div>
        `;
        postContainer.appendChild(postCard);
    }
});