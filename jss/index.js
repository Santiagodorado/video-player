const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handolePlay)
$pause.addEventListener('click', handolePause)

function handolePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handolePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

$backward.addEventListener('click', handoleBackward)

function handoleBackward(){
    $video.currentTime -= 10
    console.log('Adelantar 10 seg')
}

$forward.addEventListener('click', handoleForward)

function handoleForward(){
    $video.currentTime += 10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handoleLoaded)
$video.addEventListener('timeupdate', handoleTimeUpdate)

function handoleLoaded(){
    $progress.max = $video.duration
}

function handoleTimeUpdate(){
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handoleInput)

function handoleInput(){
    $video.currentTime = $progress.value
}