import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/157566070_722864165079396_4810073822200723833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF2mQSTR7Rw5cxH4_WJyW4YSJl7-shyryJImXv6yHKvIu7BB1YLyxZj-FFBiZswByatJ8DpgOOwuSVSZes7rvG0&_nc_ohc=eTs7Xz0OwUkAX-FAwzF&_nc_ht=scontent.falg3-2.fna&oh=e446259978cc0c1ef1e756305c4a7bf1&oe=60677BE2",
      id: 1,
      name: "Ferhat Kerouani",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.0-9/141471867_225731962498752_4614603848426297076_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE44-J6vRnGZqMyFFif6Alyfwy4m-FleFt_DLib4WV4W4MvQvVCyGN5F5LkGbPazZVLwtDhpyTMUhyoWR0KTNQr&_nc_ohc=ULdZYIMCxTwAX95cC0E&_nc_ht=scontent.falg3-2.fna&oh=8378c88839e09192b2d6e6c605fcd0a0&oe=6067A042",
      id: 2,
      name: "Slimane Badja",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6",
      id: 3,
      name: "Arezki Takfarinas Hamidani",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/158267068_432977998010545_7491135004700070280_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeG5Z5KQNqOpMrk2mReEou1LBe3_8slbunoF7f_yyVu6epKDgEPVkKVKiYBlUxm0lwx7Q-nlIKfkLcvC7RzwIzo7&_nc_ohc=DbU-tWjYN1MAX_m6YO3&_nc_ht=scontent.falg3-2.fna&oh=68e45ca98971ddcaf085cbd5861a11ee&oe=60676088",
      id: 4,
      name: "Nasser Ait Ahmed",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.0-9/145010758_3471858526276738_2766355065345213343_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHH2P0Ax74wM8s3lDfvY1FBgq91yT3dt_mCr3XJPd23-VCQ42N7Av_W8Bp30ecT6JnVcFHpAAttIAaadso4oWor&_nc_ohc=SyJu_4x_0JEAX_DWjuJ&_nc_ht=scontent.falg3-2.fna&oh=a2562a1a13063bf0478ecf7012c758be&oe=6067AC3B",
      id: 5,
      name: "Juda Djerroud",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.0-1/c51.0.404.404a/121177903_2634532136812567_2902227595149647128_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGF3QsPicNEAQGnwB1xV8tWU93mCs_tVtZT3eYKz-1W1jksblu9DN40o7OM5rSuL5ZH1IADgDJ76XUjx1xE2Wos&_nc_ohc=i-wqLglp37sAX9fmWBI&_nc_ht=scontent.falg3-2.fna&tp=29&oh=e43150b119f5df6f3c6664722dce4001&oe=606A113E",
      id: 6,
      name: "Meziani Sabrina",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Saliha Bentoumi",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Yanis Belkbir",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Brahim Ait Si Ali",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Lydia Kaloun",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
