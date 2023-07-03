function fetchUser() {
    spinnerShown()
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
        spinnerHidden()
        displayUser(data.results[0])})
}

function spinnerShown() {
    document.querySelector('.spinner').style.display = 'block'
}

function spinnerHidden() {
    document.querySelector('.spinner').style.display = 'none'
}

function displayUser(user){
    console.log(user)
    const userDetails = document.getElementById('user')
    
    if(user.gender === 'female'){
        document.body.style.backgroundColor = 'purple'
    } else {document.body.style.backgroundColor = 'dodgerblue'}

    userDetails.innerHTML = `<div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src=${user.picture.large}
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`
}
window.addEventListener('DOMContentLoaded', fetchUser)
document.getElementById('generate')
.addEventListener('click',fetchUser)
