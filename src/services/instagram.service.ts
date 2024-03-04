interface ProfilePicUrlInfo {
  url: string;
}

interface FriendshipStatus {
  blocking: boolean;
}

interface InstagramData {
  full_name: string;
  is_memorialized: boolean;
  is_private: boolean;
  has_story_archive: null | boolean;
  username: string;
  is_regulated_c18: boolean;
  text_post_app_badge_label: null | string;
  show_text_post_app_badge: null | boolean;
  pk: string;
  live_broadcast_visibility: null | string;
  live_broadcast_id: null | string;
  profile_pic_url: string;
  hd_profile_pic_url_info: ProfilePicUrlInfo;
  is_unpublished: boolean;
  total_clips_count: number;
  friendship_status: FriendshipStatus;
  gating: null | string;
  latest_reel_media: number;
  latest_besties_reel_media: number;
  reel_media_seen_timestamp: null | number;
  id: string;
}

const instagramApiGraph = "https://www.instagram.com/api/graphql"
const fb_dtsg = 'NAcMgzH9A6dI_3pwkTCFTZqTUIU48ldhyD4npkmITA832BMVIcqGr2g%3A17843683126168011%3A1685385326';
const doc_id = '7207577662652222';
const id = '5963579786';
const sessionid = '8199543895%3AJlXsfBV6uZ8A1c%3A27%3AAYf9zTPVvnXPXL6UCA_kdDicvzLRU-jQln5d_ki_Tw8'

const cookie = `sessionid=${sessionid}`
const body = `fb_dtsg=${fb_dtsg}&variables={"id":"${id}"}&doc_id=${doc_id}`;


export const userData  = async (): Promise<InstagramData | undefined> => {
  const req = fetch(instagramApiGraph, {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-site": "same-origin",
      cookie
    },
    body,
    method: "POST",
  });
  try {
    const response = await req;
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return (await response.json()).data.user;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
