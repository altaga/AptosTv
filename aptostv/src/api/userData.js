"use server";

const userData = [
  {
    name: "Disguise Taco",
    username: "disguisetaco",
    description:
      "I am Disguise Taco. Here I play several games, I am focused on strategy games, such as TFT. I try different compositions and builds trying to climb high! feel free to leave suggestions of new and random builds.",
    streamURL: "7c70sgmompkvpwaa",
    streamID: "7c708971-f863-4f1e-a641-908156b8957b",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/71448z1vwmpx3fuv/1080p0.mp4",
    logo: "/streamers/dt.jpg",
    publicKey:
      "0x180183f60d14433fe253ac87d683f23695f3831479241c91f73236a4e5cbf892",
    charity: "Movistar Foundation",
    title: "League gameplay",
    online: false,
    nftLock: true,
  },
  {
    name: "Auron Pause",
    username: "auronpause",
    description: "I am kinda happy to stream. I do content for streaming.",
    streamURL: "593ap38fx71xiamd",
    streamID: "593a81e9-680a-4d3e-94d1-79b8ef644947",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/5cdf75eh9jebr9ih/1080p0.mp4",
    logo: "/streamers/ap.jpg",
    publicKey:
      "0xa6c31611f52b15a813d30e7033ef9744045735c4252e8d6c14d5b15e2885640a",
    charity: "Snipping INGKA Foundation",
    title: "Aptos Experience Korea - Charity Live Stream",
    online: false,
    nftLock: true,
  },
  {
    name: "Flawler",
    username: "flawler",
    description:
      "Here is your bear friend! I love to play online games, especially Among Us. I like to troll people in the game. Come here and have some chill time. Welcome to the bear channel! Enjoy!",
    streamURL: "b5e0y7i6o5eaoo1p",
    streamID: "b5e0f47b-e4f8-41dd-a2bb-c3fb66a1f29f",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/4cbe288dt3n1wk3n/1080p0.mp4",
    logo: "/streamers/f.jpg",
    publicKey:
      "0xe033080f5ee571d3fd4141eb8c6698af859214dd68a9734321c6ab1a7a96bf1c",
    charity: "GoodBye Trust",
    title: "Goodbye Muzan Kibutsuji",
    online: false,
    nftLock: false,
  },
  {
    name: "CartonPotato",
    username: "cartonpotato",
    description:
      "The best way to waste your time, here you can see how potatos play and suck at different levels in League of Legends. We try really hard to improve, we put all our efforts just to be better. We don't care about the minimap, about vision, about the enemy jungles, about objectives, neither dragons or rif. We just care about the kill!",
    streamURL: "1511bbhlwgpfx611",
    streamID: "1511b5fd-69d7-4caa-9565-d59f85590bcf",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/8819t19ptwm1qvmw/1080p0.mp4",
    logo: "/streamers/cp.jpg",
    publicKey:
      "0x9ce368e7721c49db57c164d49dc239727ed6a93308fb832dd88ed192c4c79ee7",
    charity: "Howard Wolowitz  Medical Institute",
    title: "LOL TIME!! big support",
    online: false,
    nftLock: true,
  },
  {
    name: "Thiago one",
    username: "thiagoone",
    description:
      "I am very excited to play with people! My team always sucks and the enemy team always shows off their skills. I play this horrible game called LOL and I stream trying to climb and make the best plays! COME, WATCH AND LEARN!!!  ALL THE ENERGY AND HYPE YOU NEED IS IN HERE!",
    streamURL: "43d8iotl4x0usviu",
    streamID: "43d8e255-a5b4-4b6e-9dc5-149a6808989f",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/7584yeecey1tefq8/1080p0.mp4",
    logo: "/streamers/to.jpg",
    publicKey:
      "0xc4290ef75f91c48bdbd65e1cc4d342c0d64805bdcb9d988f7f0aac09541b7301",
    charity: "Public Health",
    title: "Silent Hill",
    online: false,
    nftLock: true,
  },
  {
    name: "Morenus",
    username: "morenus",
    description:
      "Hello, I do stream content for all audiences, I play several games with my community, I love to do reactions to different videos. I love to watch new content and learn from what my audience likes and dislikes. Have fun!",
    streamURL: "abe1da33677n0mjb",
    streamID: "abe1a37f-591e-4f98-99d2-039844f2f4d8",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/d9b90fbukixovo2m/1080p0.mp4",
    logo: "/streamers/m.jpg",
    publicKey:
      "0xfed2a5730c939f11c08fa4e3603a72c0012a40a09475664371eca59d266c8a86",
    charity: "Peje Foundation",
    title: "Peje for fun Foundation",
    online: false,
    nftLock: true,
  },
  {
    name: "Pokimanolo",
    username: "pokimanolo",
    description:
      "I love to change peoples lives, every decision and every action I take is for what I consider the best. I feel so delighted when people around me feel confident and safe. I love to stream, and I will always show my best self. Welcome to my happiest place: MY STREAM!",
    streamURL: "9463nzns9smwee2c",
    streamID: "9463508b-1712-40b4-b7bd-42c9b7268e49",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/c1deqphcw7bbsrnt/1080p0.mp4",
    logo: "/streamers/p.jpg",
    publicKey:
      "0xbaa7fa4f85694fe71aec2bbb503b2093f200e0739ea11fa5df64db810889e0c6",
    charity: "Kids Investment Fund",
    title: "Just chatting and playing",
    online: false,
    nftLock: false,
  },
  {
    name: "Samurai",
    username: "samurai",
    description:
      "I stream different games. I try to improve, I am an old gamer, I have played several games from vintage games to the new ones. I love shooters. I play mostly online and pvp. Welcome to the stream!",
    streamURL: "00fafqkzv2nutmag",
    streamID: "00fa0167-0eb3-4815-a376-d4dac65f8dc2",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/d1bb4v1gyeypyqwv/1080p0.mp4",
    logo: "/streamers/s.jpg",
    publicKey:
      "0xf53c9ab4d7d1999923d9816d56f09a34f9b3be68e4e8be5121a45a35d2d545fd",
    charity: "U.S. K8 Association",
    title: "Music and Fun",
    online: false,
    nftLock: true,
  },
  {
    name: "Solo Manco Only",
    username: "solomancoonly",
    description:
      "LOL streamer. I play random champs with random builds at random lines, with random teammates. I play just for fun.",
    streamURL: "de949fya982159ty",
    streamID: "de94ec38-eebb-4152-a1b1-8fcb6aeecf23",
    defaultSession:
      "https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/90042na4h5n84s54/1080p0.mp4",
    logo: "/streamers/smo.jpg",
    publicKey:
      "0x60bc0f83d67eab352545e129ebea96ffcb664b391e694de3a984d4db385003a6",
    charity: "Mexican Cancer Society",
    title: "LOLOLOLOL",
    online: false,
    nftLock: false,
  },
];

export async function getStreamers() {
  return userData;
}

export async function getStreamerByUsername(username) {
  return userData.find((user) => user.username === username);
}
