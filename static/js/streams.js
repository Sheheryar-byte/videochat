const App_ID = 'b38b578c54734caaa37e5461f0710a68'
const CHANNEL = 'peek'
const token = '007eJxTYDg5KTZ3zveMxEa+8v9zHud/0Jz2U2f2xpm59cY/ppSXC5xSYEgytkgyNbdINjUxNzZJTkxMNDZPNTUxM0wzMDc0SDSzuB4vkNYQyMjwSkaCgREKQXwWhoLU1GwGBgDY2iBb'
let UID;

const client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(App_ID, CHANNEL, token, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="video-container-${UID}">
                  <div class="username-wrapper"><span class="username">My Name:</span></div>
                  <div class="video-player" id="user-${UID}"></div>
                   </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])


}

joinAndDisplayLocalStream()

