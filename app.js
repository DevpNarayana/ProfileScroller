// Get random data
data = [{
        name: 'Narayana',
        age: 30,
        gender: 'male',
        lookingFor: 'female',
        location: 'Hyderabad',
        image: 'https://randomuser.me/portraits/men/82.jpg'
    },
    {
        name: 'Myntra',
        age: 31,
        gender: 'female',
        lookingFor: 'male',
        location: 'Bangalore',
        image: 'https://randomuser.me/portraits/women/82.jpg'
    },
    {
        name: 'Flipkart',
        age: 29,
        gender: 'male',
        lookingFor: 'female',
        location: 'Chennai',
        image: 'https://randomuser.me/portraits/men/80.jpg'
    }
];

const profiles = profileIterator(data);

function profileIterator(profiles) {
    let index = 0;
    return {
        next: function() {
            return index < profiles.length ? { profile: profiles[index++], done: false } : { done: true }
        }
    }
}

const profile = document.getElementById('profileDisplay');
const image = document.getElementById('imageDisplay');
document.getElementById('next').addEventListener('click', nextProfile);
// load page with first profile...
nextProfile()

function nextProfile() {
    //console.log(currentProfile);
    const currentProfile = profiles.next();
    if (!currentProfile.done) {
        const cProfile = currentProfile.profile;
        //const currentProfile = profiles.profile;
        image.innerHTML =
            `<img src='${cProfile.image}'/>
    `
        profile.innerHTML =
            `<ul class="list-group">
    <li class="list-group-item">Name: ${cProfile.name}</li>
    <li class="list-group-item">Age: ${cProfile.age}</li>
    <li class="list-group-item">Gender: ${cProfile.gender}</li>
    <li class="list-group-item">Looking For: ${cProfile.lookingFor}</li>
    <li class="list-group-item">Location: ${cProfile.location}</li>
    </ul>

    `
    } else {
        window.location.reload();
    }
}