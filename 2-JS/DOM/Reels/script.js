const reels = [
  {
    username: "travelwithaarav",
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Sunsets hit different when you’re on the road 🌅✨",
    video: "./1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 102,
    isFollowed: true,
  },
  {
    username: "foodie_priya",
    likeCount: 9870,
    isLiked: true,
    commentCount: 210,
    caption: "Trying this viral pasta recipe 🍝💥",
    video: "./2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/15.jpg",
    shareCount: 76,
    isFollowed: false,
  },
  {
    username: "techbyrahul",
    likeCount: 15400,
    isLiked: false,
    commentCount: 450,
    caption: "This gadget is insane 🤯🔥",
    video: "./3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 140,
    isFollowed: true,
  },
  {
    username: "dancewithme",
    likeCount: 34780,
    isLiked: true,
    commentCount: 890,
    caption: "New choreography! 🔥🕺",
    video: "./4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/28.jpg",
    shareCount: 310,
    isFollowed: true,
  },
  {
    username: "fit_anu",
    likeCount: 22050,
    isLiked: false,
    commentCount: 530,
    caption: "5-minute morning workout 💪☀️",
    video: "./5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/22.jpg",
    shareCount: 190,
    isFollowed: false,
  },
  {
    username: "codingwithsid",
    likeCount: 7850,
    isLiked: false,
    commentCount: 150,
    caption: "JS tip of the day 💡",
    video: "./6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/44.jpg",
    shareCount: 54,
    isFollowed: true,
  },
  {
    username: "petlover.mia",
    likeCount: 41200,
    isLiked: true,
    commentCount: 1200,
    caption: "My dog learned a new trick 🐶❤️",
    video: "./7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 410,
    isFollowed: true,
  },
  {
    username: "streetphotography_ak",
    likeCount: 18900,
    isLiked: false,
    commentCount: 430,
    caption: "Caught this moment while walking 📸",
    video: "./8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 130,
    isFollowed: false,
  },
  {
    username: "gamer_rishi",
    likeCount: 26500,
    isLiked: true,
    commentCount: 780,
    caption: "This level was CRAZY 😭🔥",
    video: "./9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/24.jpg",
    shareCount: 260,
    isFollowed: true,
  },
  {
    username: "style_by_naina",
    likeCount: 17800,
    isLiked: false,
    commentCount: 390,
    caption: "Outfit of the day ✨👗",
    video: "./10.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 120,
    isFollowed: false,
  },
];

const allReels = document.querySelector(".all-reels");

function renderReels() {
  allReels.innerHTML = reels
    .map(
      (elem, i) => `
    <div class="reel" data-index="${i}">
      <video autoplay loop muted src="${elem.video}"></video>

       <!-- 🔊 Mute/Unmute Button -->
    <button class="btn-mute" data-index="${i}">
        <i class="ri-volume-mute-fill"></i>
    </button>

      <div class="bottom">
        <div class="user">
          <img src="${elem.userprofile}" alt="${elem.username} profile">
          <h4>${elem.username}</h4>
          <button class="btn-follow" data-index="${i}">${
        elem.isFollowed ? "Unfollow" : "Follow"
      }</button>
        </div>
        <h3>${elem.caption}</h3>
      </div>

      <div class="right" aria-hidden="true">
        <div class="like">
          <button class="btn-like" data-index="${i}" aria-pressed="${
        elem.isLiked ? "true" : "false"
      }">
            ${
              elem.isLiked
                ? '<i class="love ri-heart-3-fill"></i>'
                : '<i class="ri-heart-3-line"></i>'
            }
            
          </button>
          <h6 class="like-count">${elem.likeCount}</h6>
        </div>

        <div class="comment">
          <button class="btn-comment" data-index="${i}"><i class="ri-chat-3-line"></i></button>
          <h6>${elem.commentCount}</h6>
        </div>

        <div class="share">
          <button class="btn-share" data-index="${i}"><i class="ri-share-forward-line"></i></button>
          <h6>${elem.shareCount}</h6>
        </div>

        <div class="menu">
          <button class="btn-menu" data-index="${i}"><i class="ri-more-2-fill"></i></button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* initial render */
renderReels();

/* Event delegation for all interactive actions */
allReels.addEventListener("click", (ev) => {
  const likeBtn = ev.target.closest(".btn-like");
  if (likeBtn) {
    const idx = Number(likeBtn.dataset.index);
    const reel = reels[idx];
    // toggle liked state and update count
    reel.isLiked = !reel.isLiked;
    reel.likeCount += reel.isLiked ? 1 : -1;

    // update the DOM for this reel only (fast)
    const reelEl = allReels.querySelector(`.reel[data-index="${idx}"]`);
    if (reelEl) {
      const icon = reelEl.querySelector(".btn-like i");
      const countEl = reelEl.querySelector(".like-count");
      if (icon)
        icon.className = reel.isLiked
          ? "love ri-heart-3-fill"
          : "ri-heart-3-line";
      if (countEl) countEl.textContent = reel.likeCount;
    }
    return;
  }

  // 2) Follow button
  const followBtn = ev.target.closest(".btn-follow");
  if (followBtn) {
    const idx = Number(followBtn.dataset.index);
    const reel = reels[idx];
    reel.isFollowed = !reel.isFollowed;
    followBtn.textContent = reel.isFollowed ? "Unfollow" : "Follow";
    return;
  }

   // 3) Mute / Unmute button (IMPORTANT: placed inside the same handler)
  const muteBtn = ev.target.closest(".btn-mute");
  if (muteBtn) {
    const idx = Number(muteBtn.dataset.index);
    if (Number.isNaN(idx)) return;

    const reelEl = allReels.querySelector(`.reel[data-index="${idx}"]`);
    if (!reelEl) return;

    const video = reelEl.querySelector("video");
    const icon = muteBtn.querySelector("i");

    if (!video || !icon) return;

    // toggle mute
    video.muted = !video.muted;

    // update icon
    icon.className = video.muted ? "ri-volume-mute-fill" : "ri-volume-up-fill";

    // optional: update aria-label for accessibility
    muteBtn.setAttribute("aria-label", video.muted ? "Unmute" : "Mute");

    return;
  }

  // other buttons (comment/share/menu) - skeleton handlers
  const btnComment = ev.target.closest(".btn-comment");
  if (btnComment) {
    // example: open comments modal (not implemented)
    console.log("open comments for", btnComment.dataset.index);
    return;
  }

  const btnShare = ev.target.closest(".btn-share");
  if (btnShare) {
    console.log("share reel", btnShare.dataset.index);
    return;
  }

  const btnMenu = ev.target.closest(".btn-menu");
  if (btnMenu) {
    console.log("menu for", btnMenu.dataset.index);
    return;
  }
});
